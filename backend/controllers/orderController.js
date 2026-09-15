const Stripe = require("stripe");
const Order = require("../models/Order");
const Product = require("../models/Product");

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;

async function createCheckoutSession(req, res) {
  try {
    const { items, shippingAddress } = req.body;
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const productIds = items.map((i) => i.productId);
    const products = await Product.find({ _id: { $in: productIds } });
    const productMap = new Map(products.map((p) => [p._id.toString(), p]));

    const orderItems = [];
    let totalAmount = 0;
    for (const item of items) {
      const product = productMap.get(item.productId);
      if (!product) return res.status(404).json({ message: "Product not found" });
      if (product.stock < item.quantity) {
        return res.status(400).json({ message: `${product.name} is out of stock` });
      }
      orderItems.push({
        product: product._id,
        name: product.name,
        size: item.size,
        quantity: item.quantity,
        price: product.price,
      });
      totalAmount += product.price * item.quantity;
    }

    const order = await Order.create({
      user: req.user._id,
      items: orderItems,
      shippingAddress,
      totalAmount,
      status: "pending",
    });

    if (!stripe) {
      return res.status(201).json({
        order,
        message: "Stripe is not configured; order created with pending status.",
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: orderItems.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: { name: `${item.name} (${item.size})` },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      success_url: `${process.env.CLIENT_URL}/account/orders?success=true`,
      cancel_url: `${process.env.CLIENT_URL}/checkout?canceled=true`,
      metadata: { orderId: order._id.toString() },
    });

    order.stripeSessionId = session.id;
    await order.save();

    res.status(201).json({ order, checkoutUrl: session.url });
  } catch (err) {
    res.status(500).json({ message: "Checkout failed", error: err.message });
  }
}

async function myOrders(req, res) {
  const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(orders);
}

async function listAllOrders(req, res) {
  const orders = await Order.find().populate("user", "name email").sort({ createdAt: -1 });
  res.json(orders);
}

async function updateOrderStatus(req, res) {
  const { status } = req.body;
  const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
  if (!order) return res.status(404).json({ message: "Order not found" });
  res.json(order);
}

module.exports = { createCheckoutSession, myOrders, listAllOrders, updateOrderStatus };
