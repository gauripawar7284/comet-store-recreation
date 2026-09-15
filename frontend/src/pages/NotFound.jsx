import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h1 className="text-3xl font-bold mb-4">404</h1>
      <p className="text-ink/60 mb-6">Page not found.</p>
      <Link to="/" className="underline text-sm">
        Back home
      </Link>
    </div>
  );
}
