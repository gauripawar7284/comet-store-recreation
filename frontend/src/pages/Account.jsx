import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Account() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/orders/mine").then((res) => setOrders(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Your Orders</h1>
      {orders.length === 0 ? (
        <p className="text-ink/60">No orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order._id} className="border border-ink/10 p-4">
              <div className="flex justify-between text-sm text-ink/60 mb-2">
                <span>Order #{order._id.slice(-6)}</span>
                <span className="uppercase">{order.status}</span>
              </div>
              <ul className="text-sm mb-2">
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.name} ({item.size}) × {item.quantity}
                  </li>
                ))}
              </ul>
              <p className="font-semibold">${order.totalAmount.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
