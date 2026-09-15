import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="w-full bg-[#f7f7f7]">
      <section className="relative min-h-[520px] overflow-hidden bg-black text-white sm:min-h-[620px]">
        <img src="/images/heroImageOfComet.jpg" alt="Comet" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1440px] items-end px-6 pb-12 sm:min-h-[620px] sm:px-10 sm:pb-16 lg:px-16">
          <div className="max-w-[700px]">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em]">About Comet</p>
            <h1 className="m-0 text-[48px] font-extrabold uppercase leading-[0.9] tracking-[-0.05em] sm:text-[72px]">Built for the journey.</h1>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 sm:px-10 sm:py-24 md:grid-cols-2 md:gap-16">
        <h2 className="m-0 text-[32px] font-extrabold uppercase leading-none tracking-[-0.04em] sm:text-[44px]">Homegrown sneakers. Distinct silhouettes.</h2>
        <div className="space-y-5 text-[16px] leading-7 text-[#555]">
          <p>Comet is a homegrown sneaker brand focused on distinctive silhouettes, everyday comfort and considered design.</p>
          <p>Explore the collection, find your silhouette and discover the pairs made for wherever you are headed next.</p>
          <Link to="/shop" className="inline-flex bg-[#fff500] px-7 py-4 text-sm font-bold uppercase text-black">Shop sneakers</Link>
        </div>
      </section>
    </main>
  );
}
