import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-6 max-w-md">
        <Link
          to="/admin/products"
          className="border border-ink/20 p-6 text-center hover:bg-ink/5"
        >
          Manage Products
        </Link>
        <Link
          to="/admin/orders"
          className="border border-ink/20 p-6 text-center hover:bg-ink/5"
        >
          Manage Orders
        </Link>
      </div>
    </div>
  );
}
