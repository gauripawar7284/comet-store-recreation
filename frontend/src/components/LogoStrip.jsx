const PRESS_LOGOS = [
  { name: "VOGUE", style: "serif" },
  { name: "GQ", style: "gq" },
  { name: "Cosmopolitan", style: "condensed" },
  { name: "ELLE", style: "elle" },
  { name: "Rolling Stone", style: "script" },
  { name: "GRAZIA", style: "grazia" },
];

export default function LogoStrip() {
  return (
    <section className="w-full font-['Helvetica Neue',Arial,sans-serif]">
      {/* ==================================================
          AS APPRECIATED ON
      ================================================== */}

      <div className="bg-white px-6 pb-8 pt-10 text-center sm:px-8 sm:pb-9 sm:pt-12">
        <p
          className="
            m-0
            text-[16px]
            font-bold
            uppercase
            tracking-[0.14em]
            text-[#16161a]

            sm:text-[18px]

            lg:text-[20px]
          "
        >
          As appreciated on
        </p>
      </div>

      {/* ==================================================
          PRESS LOGOS
      ================================================== */}

      <div
        className="
          flex
          w-full
          flex-wrap
          items-center
          justify-center
          gap-x-10
          gap-y-7
          bg-[#f2f2f2]
          px-6
          py-9

          sm:gap-x-12
          sm:gap-y-8
          sm:px-8
          sm:py-10

          lg:flex-nowrap
          lg:gap-x-14
          lg:px-10
          lg:py-11
        "
      >
        {/* VOGUE */}
        <span
          className="
            whitespace-nowrap
            font-[Georgia,'Times_New_Roman',serif]
            text-[24px]
            font-normal
            leading-none
            tracking-[0.03em]
            text-[#17171b]

            sm:text-[27px]

            lg:text-[29px]
          "
        >
          VOGUE
        </span>

        {/* GQ */}
        <span
          className="
            whitespace-nowrap
            font-['Arial_Black',Arial,sans-serif]
            text-[26px]
            font-black
            leading-none
            tracking-[-0.04em]
            text-[#17171b]

            sm:text-[28px]

            lg:text-[30px]
          "
        >
          GQ
        </span>

        {/* COSMOPOLITAN */}
        <span
          className="
            whitespace-nowrap
            font-['Arial_Narrow',Arial,sans-serif]
            text-[21px]
            font-extrabold
            uppercase
            leading-none
            tracking-[0.01em]
            text-[#17171b]

            sm:text-[23px]

            lg:text-[24px]
          "
        >
          Cosmopolitan
        </span>

        {/* ELLE */}
        <span
          className="
            whitespace-nowrap
            font-[Georgia,'Times_New_Roman',serif]
            text-[24px]
            font-normal
            leading-none
            tracking-[0.28em]
            text-[#17171b]
            [padding-left:0.28em]

            sm:text-[27px]

            lg:text-[29px]
          "
        >
          ELLE
        </span>

        {/* ROLLING STONE */}
        <span
          className="
            whitespace-nowrap
            font-['Brush_Script_MT',cursive]
            text-[25px]
            font-bold
            italic
            leading-none
            text-[#17171b]

            sm:text-[27px]

            lg:text-[28px]
          "
        >
          Rolling Stone
        </span>

        {/* GRAZIA */}
        <span
          className="
            whitespace-nowrap
            font-[Georgia,'Times_New_Roman',serif]
            text-[23px]
            font-normal
            leading-none
            tracking-[0.22em]
            text-[#17171b]
            [padding-left:0.22em]

            sm:text-[26px]

            lg:text-[29px]
          "
        >
          GRAZIA
        </span>
      </div>
      <div className="bg-white px-6 pb-6 pt-8 text-center sm:px-8 sm:pb-7 sm:pt-10"></div>
    </section>
  );
}
