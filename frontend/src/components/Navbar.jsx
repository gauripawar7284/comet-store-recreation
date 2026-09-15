import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import MegaMenu from "./MegaMenu";
import PageLoader from "./PageLoader";

import AeresMens from "../assets/aerespopup.jpg";
import ApexMens from "../assets/apexpopup.jpg";
import AeonMens from "../assets/aeonpopup.jpg";
import XLowMens from "../assets/xlowspopup.jpg";

import AeresWomens from "../assets/aereswomenpopup.jpg";
import ApexWomens from "../assets/apexwomenpopup.jpg";
import AeonWomes from "../assets/aeonwomenpopup.jpg";
import XLowWomens from "../assets/xlowswomenpopup.jpg";
import AstraWomens from "../assets/astrapopup.jpg";

import MensShopAll from "../assets/ShopAll.jpg";
import WomensShopAll from "../assets/shopall2.jpg";

const MEN_TILES = [
  { label: "X Lows", category: "X Lows", image: XLowMens },
  { label: "Aeon", category: "Aeon", image: AeonMens },
  { label: "Apex", category: "Apex", image: ApexMens },
  { label: "Aeres", category: "Aeres", image: AeresMens },
];

const WOMEN_TILES = [
  { label: "X Lows", category: "X Lows", image: XLowWomens },
  { label: "Astra", category: "Astra", image: AstraWomens },
  { label: "Aeon", category: "Aeon", image: AeonWomes },
  { label: "Apex", category: "Apex", image: ApexWomens },
  { label: "Aeres", category: "Aeres", image: AeresWomens },
];

const MEN_SHOP_ALL = {
  label: "Shop All",
  image: MensShopAll,
  to: "/shop?gender=men",
};

const WOMEN_SHOP_ALL = {
  label: "Shop All",
  image: WomensShopAll,
  to: "/shop?gender=women",
};

function SearchIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M21 21l-4.3-4.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BagIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Bag / Cart body */}
      <path
        d="M7 13.5H33V30.5H7V13.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      {/* Top handle */}
      <path
        d="M11 13.5V10.5H29V13.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="square"
      />

      {/* Bottom detail */}
      <path d="M10 27.5H25" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MegaNavItem({ label, tiles, shopAll }) {
  return (
    <div className="group relative flex h-full items-center">
      <button
        type="button"
        className="flex items-center gap-1 border-b-2 border-transparent py-2 text-[15px] font-semibold tracking-[-0.01em] transition-colors group-hover:border-[#fff000]"
      >
        {label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden="true"
        >
          <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      <div className="invisible absolute left-1/2 top-full z-[100] w-screen -translate-x-1/2 translate-y-[-1px] opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <MegaMenu tiles={tiles} shopAll={shopAll} />
      </div>
    </div>
  );
}

export default function Navbar() {
  const { user, logout } = useAuth();
  const { itemCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const navRef = useRef(null);
  const loaderTimer = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
    setAccountOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (loaderTimer.current) clearTimeout(loaderTimer.current);
    };
  }, []);

  function handleNavigation() {
    setLoading(true);
    setMobileOpen(false);
    if (loaderTimer.current) clearTimeout(loaderTimer.current);
    loaderTimer.current = setTimeout(() => setLoading(false), 700);
  }

  function goTo(path) {
    handleNavigation();
    navigate(path);
  }

  return (
    <>
      {loading && <PageLoader />}

      <header className="sticky top-0 z-50 w-full border-b border-[#dedede] bg-white">
        <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 sm:h-[86px] sm:px-8 lg:h-[92px] lg:px-10">
          <Link
            to="/"
            onClick={handleNavigation}
            className="shrink-0"
            aria-label="Comet home"
          >
            <img
              src="https://www.wearcomet.com/cdn/shop/files/logo.png?v=1725973753&width=210"
              alt="Comet"
              className="h-[25px] w-auto sm:h-[29px]"
            />
          </Link>

          <nav
            ref={navRef}
            className="hidden h-full items-center gap-8 text-gray-900 md:flex lg:gap-10"
          >
            <MegaNavItem label="Men" tiles={MEN_TILES} shopAll={MEN_SHOP_ALL} />

            <MegaNavItem
              label="Women"
              tiles={WOMEN_TILES}
              shopAll={WOMEN_SHOP_ALL}
            />
            <Link
              to="/shop"
              onClick={handleNavigation}
              className="text-[15px] font-semibold transition-opacity hover:opacity-55"
            >
              The Vault
            </Link>
            <Link
              to="/about"
              onClick={handleNavigation}
              className="text-[15px] font-semibold transition-opacity hover:opacity-55"
            >
              About Us
            </Link>
          </nav>

          <div className="flex items-center gap-4 text-gray-900 sm:gap-5 lg:gap-6">
            <button
              type="button"
              aria-label="Search"
              onClick={() => goTo("/shop")}
              className="transition-opacity hover:opacity-55"
            >
              <SearchIcon />
            </button>

            <div className="relative hidden md:block">
              <button
                type="button"
                aria-label="Account"
                onClick={() => setAccountOpen((v) => !v)}
                className="transition-opacity hover:opacity-55"
              >
                <UserIcon />
              </button>
              {accountOpen && (
                <div className="absolute right-0 top-[calc(100%+18px)] z-[110] min-w-[170px] border border-[#ddd] bg-white py-2 text-sm shadow-[0_12px_35px_rgba(0,0,0,0.12)]">
                  {user ? (
                    <>
                      <Link
                        to="/account/orders"
                        onClick={handleNavigation}
                        className="block px-4 py-2.5 hover:bg-[#f5f5f5]"
                      >
                        Orders
                      </Link>
                      {user.role === "admin" && (
                        <Link
                          to="/admin"
                          onClick={handleNavigation}
                          className="block px-4 py-2.5 hover:bg-[#f5f5f5]"
                        >
                          Admin
                        </Link>
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          logout();
                          setAccountOpen(false);
                        }}
                        className="block w-full px-4 py-2.5 text-left hover:bg-[#f5f5f5]"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <Link
                      to="/login"
                      onClick={handleNavigation}
                      className="block px-4 py-2.5 hover:bg-[#f5f5f5]"
                    >
                      Login
                    </Link>
                  )}
                </div>
              )}
            </div>

            <Link
              to="/cart"
              aria-label="Cart"
              className="relative flex items-center hover:opacity-60"
            >
              <BagIcon className="h-[32px] w-[32px]" />

              <span
                className="
      absolute
      -right-[5px]
      -top-[7px]
      flex
      h-[19px]
      min-w-[19px]
      items-center
      justify-center
      rounded-full
      bg-black
      px-[4px]
      text-[10px]
      font-bold
      leading-none
      text-white
    "
              >
                {itemCount}
              </span>
            </Link>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden"
            >
              <MenuIcon open={mobileOpen} />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-[#e2e2e2] bg-white md:hidden">
            <div className="px-5 py-5">
              <div className="grid gap-1 text-[16px] font-semibold">
                <Link
                  to="/shop"
                  onClick={handleNavigation}
                  className="border-b border-[#eee] py-3"
                >
                  Men
                </Link>
                <Link
                  to="/shop"
                  onClick={handleNavigation}
                  className="border-b border-[#eee] py-3"
                >
                  Women
                </Link>
                <Link
                  to="/shop"
                  onClick={handleNavigation}
                  className="border-b border-[#eee] py-3"
                >
                  The Vault
                </Link>
                <Link
                  to="/about"
                  onClick={handleNavigation}
                  className="border-b border-[#eee] py-3"
                >
                  About Us
                </Link>
                <Link
                  to={user ? "/account/orders" : "/login"}
                  onClick={handleNavigation}
                  className="py-3"
                >
                  {user ? "Orders" : "Login"}
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
