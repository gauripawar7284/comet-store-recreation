import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import PageLoader from "./components/PageLoader";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminOrders from "./pages/admin/AdminOrders";

import LogoStrip from "./components/LogoStrip";
import Testimonial from "./components/Testimonial";

export default function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    let timer;

    const hideLoader = () => {
      // Small minimum display time so the GIF is actually visible
      timer = setTimeout(() => {
        setInitialLoading(false);
      }, 900);
    };

    // If browser has already finished loading
    if (document.readyState === "complete") {
      hideLoader();
    } else {
      // Wait until all page resources are loaded
      window.addEventListener("load", hideLoader);
    }

    return () => {
      window.removeEventListener("load", hideLoader);

      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Initial page loader */}
      {initialLoading && <PageLoader />}

      <Navbar />

      <main className="w-full flex-1">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/shop" element={<Shop />} />

          <Route path="/product/:id" element={<ProductDetail />} />

          <Route path="/cart" element={<Cart />} />

          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route
            path="/account/orders"
            element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/products"
            element={
              <AdminRoute>
                <AdminProducts />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/orders"
            element={
              <AdminRoute>
                <AdminOrders />
              </AdminRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Testimonial />
      <LogoStrip />
      <Footer />
    </div>
  );
}
