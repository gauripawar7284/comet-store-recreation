import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  }

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-2xl font-bold mb-8">Log in</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          required
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-ink/20 px-3 py-2"
        />
        <input
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-ink/20 px-3 py-2"
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button className="w-full bg-ink text-paper py-3 uppercase text-sm tracking-wide">
          Log in
        </button>
      </form>
      <p className="text-sm text-ink/60 mt-4">
        No account?{" "}
        <Link to="/register" className="underline">
          Register
        </Link>
      </p>
    </div>
  );
}
