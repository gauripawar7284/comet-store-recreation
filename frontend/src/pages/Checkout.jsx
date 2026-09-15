import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    line1: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await api.post("/orders/checkout", {
        items: items.map((i) => ({
          productId: i.productId,
          size: i.size,
          quantity: i.quantity,
        })),
        shippingAddress: address,
      });
      clearCart();
      if (res.data.checkoutUrl) {
        window.location.href = res.data.checkoutUrl;
      } else {
        navigate("/account/orders");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Checkout failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-bold mb-8">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          required
          placeholder="Address line"
          value={address.line1}
          onChange={(e) => setAddress({ ...address, line1: e.target.value })}
          className="w-full border border-ink/20 px-3 py-2"
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            required
            placeholder="City"
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
            className="border border-ink/20 px-3 py-2"
          />
          <input
            required
            placeholder="State"
            value={address.state}
            onChange={(e) => setAddress({ ...address, state: e.target.value })}
            className="border border-ink/20 px-3 py-2"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            required
            placeholder="Postal code"
            value={address.postalCode}
            onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
            className="border border-ink/20 px-3 py-2"
          />
          <input
            required
            placeholder="Country"
            value={address.country}
            onChange={(e) => setAddress({ ...address, country: e.target.value })}
            className="border border-ink/20 px-3 py-2"
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <div className="flex justify-between items-center pt-4">
          <span className="font-semibold">Total: ${subtotal.toFixed(2)}</span>
          <button
            type="submit"
            disabled={loading}
            className="bg-ink text-paper px-8 py-3 uppercase text-sm tracking-wide disabled:opacity-50"
          >
            {loading ? "Processing..." : "Place order"}
          </button>
        </div>
        <p className="text-xs text-ink/50">
          Payment is processed via Stripe Checkout in test mode. No real charge occurs.
        </p>
      </form>
    </div>
  );
}
