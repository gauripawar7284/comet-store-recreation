import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-ink/60 mb-4">Your cart is empty.</p>
        <Link to="/shop" className="underline text-sm">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>
      <div className="divide-y divide-ink/10">
        {items.map((item) => (
          <div
            key={`${item.productId}-${item.size}`}
            className="py-4 flex items-center gap-4"
          >
            <div className="w-16 h-20 bg-ink/5 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-ink/60">Size: {item.size}</p>
              <p className="text-sm text-ink/60">${item.price.toFixed(2)}</p>
            </div>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(item.productId, item.size, Number(e.target.value))
              }
              className="w-16 border border-ink/20 px-2 py-1 text-center"
            />
            <button
              onClick={() => removeItem(item.productId, item.size)}
              className="text-sm text-ink/60 underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-8 pt-4 border-t border-ink/10">
        <span className="font-semibold">Subtotal: ${subtotal.toFixed(2)}</span>
        <button
          onClick={() => navigate("/checkout")}
          className="bg-ink text-paper px-8 py-3 uppercase text-sm tracking-wide"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
