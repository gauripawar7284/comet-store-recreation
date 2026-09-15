import {
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiGlobe, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

const aboutLinks = [
  ["About Us", "/about"],
  ["Comet Design Lab", "/shop"],
  ["The Vault", "/shop"],
  ["The Garage", "/shop"],
  ["Gifting Guide", "/shop"],
  ["Refer a Friend", "/shop"],
];

const quickLinks = [
  ["Home", "/"],
  ["Store Locator", "/shop"],
  ["Return and Exchange Portal", "/shop"],
  ["Contact Us", "/about"],
  ["Care", "/shop"],
  ["FAQ", "/shop"],
  ["Find Your Silhouette", "/shop"],
  ["Brand Assets", "/shop"],
  ["T&C", "/shop"],
  ["Return Exchange and Refund Policy", "/shop"],
  ["Privacy Policy", "/shop"],
  ["Shipping Policy", "/shop"],
];

function SectionTitle({ icon, children }) {
  return (
    <h2
      className="
        mb-[27px]
        flex
        items-center
        gap-[11px]

        text-[23px]
        font-bold
        uppercase
        leading-none
        tracking-[-0.025em]

        text-white
      "
    >
      <span className="flex shrink-0 items-center justify-center text-[21px]">
        {icon}
      </span>

      <span>{children}</span>
    </h2>
  );
}

export default function Footer() {
  return (
    <footer
      className="
        w-full
        bg-black
        font-[Arial,Helvetica,sans-serif]
        text-white
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]

          grid-cols-1

          gap-[55px]

          px-[58px]
          py-[68px]

          md:grid-cols-2
          md:gap-x-[70px]
          md:gap-y-[60px]

          lg:grid-cols-[1.25fr_0.95fr_1fr]
          lg:gap-[85px]

          xl:px-[74px]
        "
      >
        {/* =====================================================
            COLUMN 1 — GET IN TOUCH
        ====================================================== */}

        <div>
          <SectionTitle icon={<FaRegEnvelope />}>Get in touch</SectionTitle>

          <div
            className="
              space-y-[10px]

              text-[15px]
              font-normal
              leading-[1.65]

              text-[#eeeeee]
            "
          >
            <p className="m-0">
              <strong className="font-bold">Whatsapp:</strong>{" "}
              <a
                href="https://wa.me/919606081463"
                className="
                  underline
                  underline-offset-[3px]
                  transition-opacity
                  hover:opacity-60
                "
              >
                +91 9606081463
              </a>
            </p>

            <p className="m-0">
              <strong className="font-bold">Support:</strong>{" "}
              <a
                href="mailto:hello@wearcomet.com"
                className="
                  underline
                  underline-offset-[3px]
                  transition-opacity
                  hover:opacity-60
                "
              >
                hello@wearcomet.com
              </a>
            </p>

            <p className="m-0">
              <strong className="font-bold">
                Gifting and Corporate Orders:
              </strong>{" "}
              <a
                href="mailto:bulkorders@wearcomet.com"
                className="
                  underline
                  underline-offset-[3px]
                  transition-opacity
                  hover:opacity-60
                "
              >
                bulkorders@wearcomet.com
              </a>
            </p>

            <p className="m-0">
              <strong className="font-bold">
                Marketing &amp; Partnership:
              </strong>{" "}
              <a
                href="mailto:partnerships@wearcomet.com"
                className="
                  underline
                  underline-offset-[3px]
                  transition-opacity
                  hover:opacity-60
                "
              >
                partnerships@wearcomet.com
              </a>
            </p>

            <p className="m-0">
              <strong className="font-bold">Careers:</strong>{" "}
              <a
                href="/"
                className="
                  underline
                  underline-offset-[3px]
                  transition-opacity
                  hover:opacity-60
                "
              >
                Apply Here
              </a>
            </p>
          </div>

          {/* Divider */}

          <div
            className="
              my-[45px]
              w-full
              border-t
              border-[#383838]
            "
          />

          {/* ===================================================
              REACH US
          ==================================================== */}

          <SectionTitle icon={<FaMapMarkerAlt />}>Reach Us</SectionTitle>

          <p
            className="
              m-0
              max-w-[470px]

              text-[15px]
              font-normal
              leading-[1.6]

              text-[#eeeeee]
            "
          >
            3rd Floor, No.616, 15th Main Rd, 4th Block,
            <br />
            Koramangala, Bengaluru, Karnataka, India, 560034
          </p>

          {/* Official website */}

          <div
            className="
              mt-[34px]

              text-[15px]
              leading-[1.5]

              text-[#eeeeee]
            "
          >
            <a
              href="https://www.wearcomet.com"
              className="
                underline
                underline-offset-[3px]
                transition-opacity
                hover:opacity-60
              "
            >
              https://www.wearcomet.com
            </a>

            <p className="m-0 mt-[4px]">
              Above is the only official website of COMET.
              <br />
              We have no other domain.
            </p>
          </div>

          {/* Country selector */}

          <button
            type="button"
            className="
    mt-[48px]
    flex
    items-center
    gap-[8px]
    border-0
    bg-transparent
    p-0
    text-[15px]
    leading-none
    text-white
    cursor-pointer
  "
          >
            <span className="text-[13px] font-bold">IN</span>
            <span>India</span>

            <svg
              width="11"
              height="11"
              viewBox="0 0 12 12"
              fill="none"
              className="ml-[2px]"
            >
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* =====================================================
            COLUMN 2 — SOCIAL + ABOUT US
        ====================================================== */}

        <div>
          {/* SOCIAL */}

          <SectionTitle icon={<FiGlobe />}>Social</SectionTitle>

          <div
            className="
              flex
              items-center
              gap-[27px]
            "
          >
            <a
              href="/"
              aria-label="Instagram"
              className="
                text-[30px]
                text-white
                transition-opacity
                hover:opacity-60
              "
            >
              <FaInstagram />
            </a>

            <a
              href="/"
              aria-label="LinkedIn"
              className="
                text-[29px]
                text-white
                transition-opacity
                hover:opacity-60
              "
            >
              <FaLinkedinIn />
            </a>
          </div>

          {/* Divider */}

          <div
            className="
              my-[40px]
              w-full
              border-t
              border-[#383838]
            "
          />

          {/* ABOUT US */}

          <SectionTitle icon={<FiStar />}>About Us</SectionTitle>

          <ul
            className="
              m-0
              list-none
              space-y-[13px]
              p-0

              text-[15px]
              font-normal
              uppercase
              leading-[1.5]

              text-[#eeeeee]
            "
          >
            {aboutLinks.map(([label, to]) => (
              <li key={label}>
                <Link
                  to={to}
                  className="
                    transition-opacity
                    hover:opacity-55
                  "
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* =====================================================
            COLUMN 3 — QUICK LINKS
        ====================================================== */}

        <div>
          <SectionTitle icon={null}>Quick Links</SectionTitle>

          <ul
            className="
              m-0
              list-none
              space-y-[12px]
              p-0

              text-[15px]
              font-normal
              uppercase
              leading-[1.45]

              text-[#eeeeee]
            "
          >
            {quickLinks.map(([label, to]) => (
              <li key={label}>
                <Link
                  to={to}
                  className="
                    transition-opacity
                    hover:opacity-55
                  "
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 
          COPYRIGHT
   */}

      <div
        className="
    border-t
    border-[#242424]

    flex
    min-h-[72px]
    items-start
    justify-center

    px-6
    pt-[18px]
    pb-[14px]

    text-center
    text-[15px]
    leading-none
    text-[#f2f0f0]

    sm:px-8
  "
      >
        © 2026,{" "}
        <span className="ml-[4px] underline underline-offset-[2px]">
          Grails Marketing Private Limited
        </span>
        . All Rights Reserved.
      </div>
    </footer>
  );
}
