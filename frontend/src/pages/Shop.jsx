import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import api from "../api/axios";
import ProductCard from "../components/product-card/ProductCard";

const CATEGORIES = ["Hoodies", "T-Shirts", "Pants", "Jackets"];

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "";

  useEffect(() => {
    let active = true;
    setLoading(true);

    api
      .get("/products", { params: category ? { category } : {} })
      .then((res) => {
        if (active) setProducts(res.data || []);
      })
      .catch(() => {
        if (active) setProducts([]);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [category]);

  return (
    <main className="w-full bg-white">
      <section className="border-b border-[#dedede] bg-[#f7f7f7] px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#777]">Comet sneakers</p>
            <h1 className="m-0 text-[42px] font-extrabold uppercase leading-[0.9] tracking-[-0.05em] sm:text-[56px]">Shop all</h1>
          </div>
          <select
            value={category}
            onChange={(e) => setSearchParams(e.target.value ? { category: e.target.value } : {})}
            className="h-11 w-full border border-[#bdbdbd] bg-white px-3 text-sm sm:w-[210px]"
            aria-label="Filter by category"
          >
            <option value="">All categories</option>
            {CATEGORIES.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        {loading ? (
          <div className="grid grid-cols-2 gap-px bg-[#dedede] md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => <div key={i} className="aspect-[3/4] animate-pulse bg-[#f3f3f3]" />)}
          </div>
        ) : products.length === 0 ? (
          <div className="border border-[#dedede] px-6 py-20 text-center">
            <h2 className="m-0 text-2xl font-bold uppercase">No products found</h2>
            <p className="mt-3 text-sm text-[#777]">Try another category or view the full collection.</p>
            <Link to="/shop" className="mt-6 inline-flex bg-[#fff500] px-6 py-3 text-sm font-bold uppercase text-black">View all</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-px border-y border-[#dedede] bg-[#dedede] md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div key={product._id} className="bg-[#f8f8f8]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
