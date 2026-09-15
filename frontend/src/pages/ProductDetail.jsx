import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState("");
  const [added, setAdded] = useState(false);

  useEffect(() => {
    api.get(`/products/${id}`).then((res) => {
      setProduct(res.data);
      setSize(res.data.sizes?.[0] || "");
    });
  }, [id]);

  if (!product) return <p className="text-ink/60">Loading...</p>;

  function handleAddToCart() {
    addItem(product, size);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div className="aspect-[3/4] bg-ink/5 flex items-center justify-center text-ink/30">
        {product.images?.[0] ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          "No image"
        )}
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-lg text-ink/70 mb-4">${product.price.toFixed(2)}</p>
        <p className="text-ink/60 mb-6">{product.description}</p>

        <label className="block text-sm uppercase tracking-wide mb-2">Size</label>
        <div className="flex gap-2 mb-6">
          {product.sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`px-4 py-2 border text-sm ${
                size === s ? "bg-ink text-paper border-ink" : "border-ink/20"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="w-full bg-ink text-paper py-3 uppercase text-sm tracking-wide disabled:opacity-40"
        >
          {product.stock === 0 ? "Out of stock" : added ? "Added!" : "Add to cart"}
        </button>

        <button
          onClick={() => navigate("/shop")}
          className="mt-4 text-sm text-ink/60 underline"
        >
          Back to shop
        </button>
      </div>
    </div>
  );
}
