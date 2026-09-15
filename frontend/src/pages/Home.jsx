import ProductGrid from "../components/product-card/ProductGrid";
import Hero from "../components/Hero";
import products from "../components/product-card/products.js";
import CategoryShowcase from "../components/CategoryShowcase.jsx";
import AstraHero from "../components/AstraHero.jsx";
import Testimonial from "../components/Testimonial";
import LogoStrip from "../components/LogoStrip";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      <Hero />
      <ProductGrid products={products} />
      <AstraHero />
      <CategoryShowcase />
      <Testimonial />
      <LogoStrip />
    </div>
  );
}
