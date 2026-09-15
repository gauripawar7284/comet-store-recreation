import { Link } from "react-router-dom";
import Aeres from "../assets/AERES.jpg";
import Apex from "../assets/APEX.jpg";
import XLOWS from "../assets/X LOWS.jpg";
import Aeon from "../assets/AEON.jpg";

const CATEGORIES = [
  {
    id: "x-lows",
    name: "X Lows",
    image: XLOWS,
    category: "X Lows",
    displayName: true,
  },
  {
    id: "apex",
    name: "Apex",
    image: Apex,
    category: "Apex",
    displayName: false,
  },
  {
    id: "aeon",
    name: "Aeon",
    image: Aeon,
    category: "Aeon",
    displayName: false,
  },
  {
    id: "aeres",
    name: "Aeres",
    image: Aeres,
    category: "Aeres",
    displayName: false,
  },
];

export default function CategoryShowcase({ categories = CATEGORIES }) {
  return (
    <section className="grid w-full pb-[12px] grid-cols-2 max-[900px]:grid-cols-1">
      {categories.map((category) => (
        <Link
          to={`/shop?category=${encodeURIComponent(category.category)}`}
          key={category.id}
          className="group relative block h-[420px] w-full overflow-hidden bg-[#1a1006] no-underline sm:h-[460px] max-[900px]:h-[480px]"
        >
          <img
            src={category.image}
            alt={category.name}
            className="absolute inset-0 z-0 block h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          />
          <div
            className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.48)_0%,rgba(0,0,0,0)_28%,rgba(0,0,0,0)_65%,rgba(0,0,0,0.48)_100%)]"
            aria-hidden="true"
          />

          {category.displayName && (
            <h2 className="absolute left-0 right-0 top-[30px] z-20 m-0 text-center font-[Arial,Helvetica,sans-serif] text-[34px] font-extrabold uppercase leading-none tracking-[1px] text-white sm:top-[40px] sm:text-[44px] max-[900px]:top-[24px] max-[900px]:text-[30px]">
              {category.name}
            </h2>
          )}

          <span className="absolute bottom-6 right-7 z-20 font-[Arial,Helvetica,sans-serif] text-[16px] font-bold uppercase leading-none tracking-[0.5px] text-white underline decoration-1 underline-offset-4 sm:bottom-7 sm:right-8 sm:text-[20px]">
            Shop Now
          </span>
        </Link>
      ))}
    </section>
  );
}
