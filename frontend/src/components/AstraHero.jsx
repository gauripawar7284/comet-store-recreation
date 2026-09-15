import { Link } from "react-router-dom";

export default function AstraHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#d8bec9]">
      <img src="/images/asterhero.jpg" alt="Introducing Astra" className="block h-auto w-full" />
      <Link
        to="/shop?category=Astra"
        className="absolute left-[9%] top-[58%] flex h-[48px] w-[175px] items-center justify-center bg-[#f5f500] px-4 text-[16px] font-bold uppercase leading-none text-black transition-transform hover:-translate-y-0.5 sm:h-[56px] sm:w-[220px] sm:text-[19px] lg:left-[14%] lg:h-[66px] lg:w-[275px] lg:text-[23px]"
      >
        SHOP NOW
      </Link>
    </section>
  );
}
