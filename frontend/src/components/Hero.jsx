import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative aspect-[2000/781] w-full min-h-[390px] overflow-hidden sm:min-h-0">
        <img
          src="/images/heroImageOfComet.jpg"
          alt="Comet Oakwood sneakers"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />

        <div className="absolute left-[7%] top-1/2 -translate-y-1/2 font-[Arial,Helvetica,sans-serif] text-white sm:left-[10%] lg:left-[15%]">
          <p className="m-0 text-[18px] font-bold leading-tight sm:text-[22px] lg:text-[26px]">Built On Richness</p>
          <h1 className="m-0 mt-2 text-[32px] font-extrabold leading-none tracking-[-0.04em] sm:mt-4 sm:text-[40px] lg:mt-5 lg:text-[48px]">OAKWOOD</h1>

          <div className="mt-5 flex gap-3 sm:mt-7 sm:gap-4 lg:mt-9 lg:gap-6">
            <Link to="/shop?category=Men" className="flex h-11 w-[125px] items-center justify-center bg-[#fff500] text-[14px] font-bold leading-none text-black transition-transform hover:-translate-y-0.5 sm:h-[52px] sm:w-[150px] sm:text-[16px] lg:h-14 lg:w-[162px] lg:text-[18px]">SHOP MEN</Link>
            <Link to="/shop?category=Women" className="flex h-11 w-[138px] items-center justify-center bg-[#fff500] text-[14px] font-bold leading-none text-black transition-transform hover:-translate-y-0.5 sm:h-[52px] sm:w-[160px] sm:text-[16px] lg:h-14 lg:w-[180px] lg:text-[18px]">SHOP WOMEN</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
