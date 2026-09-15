import { useEffect, useState } from "react";
import api from "../../api/axios";

const emptyForm = {
  name: "",
  description: "",
  price: "",
  category: "",
  stock: "",
};

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  function loadProducts() {
    api.get("/products").then((res) => setProducts(res.data));
  }

  useEffect(loadProducts, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const payload = {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
    };
    try {
      if (editingId) {
        await api.put(`/products/${editingId}`, payload);
      } else {
        await api.post("/products", payload);
      }
      setForm(emptyForm);
      setEditingId(null);
      loadProducts();
    } catch (err) {
      setError(err.response?.data?.message || "Save failed");
    }
  }

  function startEdit(product) {
    setEditingId(product._id);
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      stock: product.stock,
    });
  }

  async function handleDelete(id) {
    if (!confirm("Delete this product?")) return;
    await api.delete(`/products/${id}`);
    loadProducts();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Manage Products</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 max-w-xl mb-10">
        <input
          required
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border border-ink/20 px-3 py-2 col-span-2"
        />
        <textarea
          required
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border border-ink/20 px-3 py-2 col-span-2"
        />
        <input
          required
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border border-ink/20 px-3 py-2"
        />
        <input
          required
          type="number"
          placeholder="Stock"
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
          className="border border-ink/20 px-3 py-2"
        />
        <input
          required
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="border border-ink/20 px-3 py-2 col-span-2"
        />
        {error && <p className="text-red-600 text-sm col-span-2">{error}</p>}
        <div className="col-span-2 flex gap-4">
          <button className="bg-ink text-paper px-6 py-2 uppercase text-sm">
            {editingId ? "Update product" : "Add product"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setForm(emptyForm);
              }}
              className="text-sm underline"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b border-ink/10">
            <th className="py-2">Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id} className="border-b border-ink/5">
              <td className="py-2">{p.name}</td>
              <td>{p.category}</td>
              <td>${p.price.toFixed(2)}</td>
              <td>{p.stock}</td>
              <td className="text-right space-x-3">
                <button onClick={() => startEdit(p)} className="underline">
                  Edit
                </button>
                <button onClick={() => handleDelete(p._id)} className="underline">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
