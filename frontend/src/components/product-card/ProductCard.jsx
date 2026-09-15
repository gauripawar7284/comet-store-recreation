import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const firstImage = product.images?.[0];
  const secondImage = product.images?.[1];

  return (
    <article className="group relative overflow-hidden bg-[#f8f8f8]">
      <Link to={`/product/${product._id}`} className="relative block">
        <div className="relative aspect-square w-full overflow-hidden bg-[#f8f8f8]">
          {product.badge && (
            <div className={`absolute left-0 top-0 z-40 px-4 py-2 text-[11px] font-bold uppercase leading-none tracking-[0.08em] text-white sm:px-4 sm:py-2.5 sm:text-[12px] ${product.badge === "WOMEN'S EXCLUSIVE" ? "bg-[#b64f6b]" : "bg-[#111]"}`}>
              {product.badge}
            </div>
          )}

          {firstImage && (
            <img src={firstImage} alt={product.name} className="absolute inset-0 z-10 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:-translate-x-full" />
          )}
        </div>

        {secondImage && (
          <div className="pointer-events-none absolute inset-0 z-20 translate-x-full overflow-hidden bg-[#f8f8f8] transition-transform duration-500 ease-in-out group-hover:translate-x-0">
            <img src={secondImage} alt={`${product.name} alternate`} className="h-full w-full object-cover" />
          </div>
        )}

        <div className="relative z-30 bg-[#f8f8f8] px-4 py-4 transition-colors duration-500 group-hover:bg-transparent sm:px-5 sm:py-5 lg:px-6">
          <div className="flex min-h-[82px] items-start justify-between gap-3 sm:min-h-[92px]">
            <div className="min-w-0">
              <h3 className="m-0 whitespace-nowrap text-[15px] font-normal uppercase leading-6 tracking-[0.05em] text-[#222] sm:text-[17px]">{product.name}</h3>
              {product.subtitle && <p className="m-0 mt-0.5 text-[13px] leading-5 text-[#999] sm:text-[15px]">{product.subtitle}</p>}
            </div>

            <div className="shrink-0 whitespace-nowrap text-right">
              {product.originalPrice && product.originalPrice !== product.price && <span className="mr-1 text-[13px] text-[#999] line-through">₹ {product.originalPrice}</span>}
              <span className="text-[15px] font-normal text-[#222] sm:text-[17px]">₹ {product.price}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
