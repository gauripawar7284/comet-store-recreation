import { useEffect, useState } from "react";
import api from "../../api/axios";

const STATUSES = ["pending", "paid", "shipped", "delivered", "cancelled"];

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  function loadOrders() {
    api.get("/orders").then((res) => setOrders(res.data));
  }

  useEffect(loadOrders, []);

  async function handleStatusChange(id, status) {
    await api.put(`/orders/${id}/status`, { status });
    loadOrders();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Manage Orders</h1>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b border-ink/10">
            <th className="py-2">Order</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} className="border-b border-ink/5">
              <td className="py-2">#{order._id.slice(-6)}</td>
              <td>{order.user?.name}</td>
              <td>${order.totalAmount.toFixed(2)}</td>
              <td>
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order._id, e.target.value)}
                  className="border border-ink/20 px-2 py-1"
                >
                  {STATUSES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
