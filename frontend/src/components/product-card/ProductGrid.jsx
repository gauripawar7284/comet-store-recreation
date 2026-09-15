import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products = [] }) {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      setVisibleCards(width < 640 ? 1 : width < 1024 ? 2 : 4);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const maxIndex = Math.max(products.length - visibleCards, 0);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (!carouselRef.current) return;
    carouselRef.current.style.transform = `translateX(-${currentIndex * (100 / visibleCards)}%)`;
  }, [currentIndex, visibleCards]);

  if (!products.length) return null;

  return (
    <section className="relative w-full overflow-hidden bg-[#f8f8f8]" aria-label="Featured sneakers">
      <div className="w-full overflow-hidden border-y border-[#d9d9d9]">
        <div ref={carouselRef} className="flex transition-transform duration-500 ease-out">
          {products.map((product) => (
            <div key={product._id} className="w-full shrink-0 border-r border-[#d9d9d9] sm:w-1/2 lg:w-1/4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {currentIndex > 0 && (
        <button type="button" onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))} aria-label="Previous products" className="absolute left-3 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-black shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition hover:bg-white sm:left-5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
      )}

      {currentIndex < maxIndex && (
        <button type="button" onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))} aria-label="Next products" className="absolute right-3 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-black shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition hover:bg-white sm:right-5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
      )}
    </section>
  );
}
