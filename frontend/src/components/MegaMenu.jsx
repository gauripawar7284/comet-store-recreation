import { Link } from "react-router-dom";

// ======================================================
// EXPLORE LINKS
// ======================================================

const QUICK_LINKS = [
  "New Arrivals",
  "Gifting Guide",
  "The Vault",
  "Only Few Left",
  "The Garage",
  "Refer a Friend",
];

// ======================================================
// IMAGE TILE
// IMPORTANT:
// The popup images already contain their own text.
// Therefore we DO NOT render another label over them.
// ======================================================

function Tile({ category, image, to, className = "" }) {
  const destination =
    to ||
    (category ? `/shop?category=${encodeURIComponent(category)}` : "/shop");

  return (
    <Link
      to={destination}
      className={`
        group/tile
        relative
        block
        h-full
        w-full
        overflow-hidden
        bg-[#f5f5f5]
        ${className}
      `}
    >
      {image && (
        <img
          src={image}
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            ease-out
            group-hover/tile:scale-[1.025]
          "
        />
      )}

      {/* Very subtle hover effect */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-black/0
          transition-colors
          duration-300
          group-hover/tile:bg-black/[0.04]
        "
      />
    </Link>
  );
}

// ======================================================
// MEGA MENU
// ======================================================

export default function MegaMenu({ tiles = [], shopAll }) {
  return (
    <div
      className="
        w-full
        border-t
        border-[#e5e5e5]
        bg-white
        shadow-[0_12px_30px_rgba(0,0,0,0.08)]
      "
    >
      {/* ==================================================
          MAIN CONTENT
      ================================================== */}

      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          gap-7
          px-6
          py-7

          sm:px-8

          lg:px-[58px]
          lg:py-8
        "
      >
        {/* ==================================================
            LEFT — 3 × 2 GRID
        ================================================== */}

        <div
          className="
            grid
            min-w-0
            flex-1
            grid-cols-3
            gap-5
          "
        >
          {/* ----------------------------------------------
              SHOP ALL
              ----------------------------------------------
              This is supplied separately from Navbar,
              so Men and Women can have different images
              and different destinations.
          ---------------------------------------------- */}

          <Tile
            image={shopAll?.image}
            to={shopAll?.to || "/shop"}
            className="h-[230px]"
          />

          {/* ----------------------------------------------
              COLLECTION TILES
          ---------------------------------------------- */}

          {tiles.map((tile) => (
            <Tile
              key={`${tile.category}-${tile.label}`}
              category={tile.category}
              image={tile.image}
              to={tile.to}
              className="h-[230px]"
            />
          ))}
        </div>

        {/* ==================================================
            EXPLORE
        ================================================== */}

        <aside
          className="
            w-[250px]
            shrink-0
            border-l
            border-[#999]
            pl-10
            pt-1

            lg:w-[285px]
            lg:pl-12
          "
        >
          <p
            className="
              mb-7
              text-[12px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#888]
            "
          >
            Explore
          </p>

          <ul className="space-y-5">
            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <Link
                  to="/shop"
                  className="
                    block
                    text-[17px]
                    font-semibold
                    leading-[1.15]
                    text-[#222]
                    transition-opacity
                    hover:opacity-50

                    lg:text-[18px]
                  "
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
