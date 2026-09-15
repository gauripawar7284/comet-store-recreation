import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    rating: 5,
    title: "Built for the long haul!",
    quote:
      "Took these on a two-week trip and didn't pack any other pair. That's the kind of trust I have in them now. Held up through rain, uneven streets, and rushed airport sprints. Looked just as fresh on day fourteen as day one.",
    author: "Ajax",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1200&auto=format&fit=crop",
    alt: "Man leaning on stone balustrade in front of a historic castle",
  },
  {
    rating: 5,
    title: "Comfortable from day one",
    quote:
      "No break-in period needed. Wore them straight out of the box for a full day of walking and didn't get a single blister. Genuinely impressed.",
    author: "Priya",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=1200&auto=format&fit=crop",
    alt: "Person walking down a stone stairway with potted plants",
  },
  {
    rating: 5,
    title: "Worth every penny",
    quote:
      "I was skeptical about the price at first, but after six months of daily wear they still look brand new. This is the last pair I'll ever need to think twice about.",
    author: "Marcus",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop",
    alt: "Close up of shoes on cobblestone street",
  },
];

/* ======================================================
   ICONS
====================================================== */

function StarIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2l2.9 6.26L21.5 9.27l-4.75 4.63L17.8 21 12 17.77 6.2 21l1.05-7.1L2.5 9.27l6.6-1.01L12 2z" />
    </svg>
  );
}

function ChevronLeftIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRightIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function BadgeCheckIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2l2.4 1.4 2.77-.3 1.4 2.4 2.4 1.4-.3 2.77 1.03 2.63-1.03 2.63.3 2.77-2.4 1.4-1.4 2.4-2.77-.3L12 22l-2.4-1.4-2.77.3-1.4-2.4-2.4-1.4.3-2.77L2.3 12l1.03-2.63-.3-2.77 2.4-1.4 1.4-2.4 2.77.3L12 2z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

/* ======================================================
   TESTIMONIAL
====================================================== */

export default function Testimonial() {
  const viewportRef = useRef(null);
  const slideRefs = useRef([]);

  const [index, setIndex] = useState(0);

  const count = testimonials.length;

  /* ======================================================
     SCROLL TO SLIDE
  ====================================================== */

  const scrollToIndex = (i) => {
    const viewport = viewportRef.current;
    const slide = slideRefs.current[i];

    if (!viewport || !slide) return;

    viewport.scrollTo({
      left: slide.offsetLeft - 58,
      behavior: "smooth",
    });
  };

  /* ======================================================
     PREVIOUS
  ====================================================== */

  const goPrev = () => {
    const next = index === 0 ? count - 1 : index - 1;

    setIndex(next);
    scrollToIndex(next);
  };

  /* ======================================================
     NEXT
  ====================================================== */

  const goNext = () => {
    const next = index === count - 1 ? 0 : index + 1;

    setIndex(next);
    scrollToIndex(next);
  };

  /* ======================================================
     DOT
  ====================================================== */

  const goTo = (i) => {
    setIndex(i);
    scrollToIndex(i);
  };

  /* ======================================================
     SYNC ACTIVE DOT
  ====================================================== */

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    let raf = null;

    const handleScroll = () => {
      if (raf) {
        cancelAnimationFrame(raf);
      }

      raf = requestAnimationFrame(() => {
        let closest = 0;
        let closestDist = Infinity;

        slideRefs.current.forEach((slide, i) => {
          if (!slide) return;

          const distance = Math.abs(
            slide.offsetLeft - 58 - viewport.scrollLeft,
          );

          if (distance < closestDist) {
            closestDist = distance;
            closest = i;
          }
        });

        setIndex(closest);
      });
    };

    viewport.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      viewport.removeEventListener("scroll", handleScroll);

      if (raf) {
        cancelAnimationFrame(raf);
      }
    };
  }, []);

  return (
    <section
      className="
    w-full
    overflow-hidden

    bg-[#f8f8f8]

    bg-[linear-gradient(to_right,#e5e1eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e1eb_1px,transparent_1px)]

    bg-[size:64px_64px]

    pt-[68px]
    pb-[40px]

    max-[768px]:bg-[size:32px_32px]
    max-[768px]:pt-[45px]
    max-[768px]:pb-[30px]
  "
    >
      {/* ======================================================
          HEADING
      ====================================================== */}
      <div
        className="
    mb-[40px]
    px-[58px]

    max-[1200px]:px-[35px]

    max-[768px]:mb-[28px]
    max-[768px]:px-5
  "
      >
        <h2
          className="
      m-0
      text-[40px]
      font-extrabold
      uppercase
      leading-none
      tracking-[-0.025em]
      text-[#202020]

      max-[1200px]:text-[36px]

      max-[768px]:text-[28px]
    "
        >
          WHAT'RE THEY SAYING?
        </h2>
      </div>

      {/* ======================================================
          CAROUSEL

          IMPORTANT:
          58px left padding is part of the reference design.
      ====================================================== */}

      <div
        ref={viewportRef}
        className="
          flex
          w-full
          gap-[46px]
          overflow-x-auto

          pl-[58px]
          pr-0

          pb-[2px]

          snap-x
          snap-mandatory
          scroll-smooth

          [scrollbar-width:none]
          [-ms-overflow-style:none]

          [&::-webkit-scrollbar]:hidden

          max-[1200px]:gap-[30px]
          max-[1200px]:pl-[35px]

          max-[768px]:gap-4
          max-[768px]:pl-4
        "
      >
        {testimonials.map((t, i) => (
          <article
            key={i}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
            className="
              flex
              shrink-0
              basis-[94vw]

              snap-start

              flex-row

              overflow-hidden

              border-2
              border-[#3557a3]

              bg-white

              max-[1200px]:basis-[94vw]

              max-[768px]:basis-[calc(100vw-32px)]
              max-[768px]:flex-col
            "
          >
            {/* ==================================================
                IMAGE
            ================================================== */}

            <div
              className="
                h-[573px]
                w-[46.3%]
                shrink-0
                overflow-hidden

                max-[1200px]:h-[500px]

                max-[768px]:h-[300px]
                max-[768px]:w-full
              "
            >
              <img
                src={t.image}
                alt={t.alt}
                className="
                  block
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>

            {/* ==================================================
                CONTENT
            ================================================== */}

            <div
              className="
                flex
                min-w-0
                flex-1
                flex-col
                items-center
                justify-center

                bg-white

                px-[70px]
                py-12

                text-center

                max-[1200px]:px-[50px]

                max-[768px]:px-6
                max-[768px]:py-10
              "
            >
              {/* STARS */}

              <div
                className="
                  mb-[38px]
                  flex
                  items-center
                  gap-[7px]

                  max-[1200px]:mb-7

                  max-[768px]:mb-6
                "
              >
                {Array.from({
                  length: t.rating,
                }).map((_, s) => (
                  <StarIcon
                    key={s}
                    className="
                      h-[34px]
                      w-[34px]
                      text-[#161616]

                      max-[1200px]:h-[30px]
                      max-[1200px]:w-[30px]

                      max-[768px]:h-[25px]
                      max-[768px]:w-[25px]
                    "
                  />
                ))}
              </div>

              {/* TITLE */}

              <h3
                className="
                  m-0
                  mb-[27px]

                  whitespace-nowrap

                  text-[34px]
                  font-extrabold
                  uppercase
                  leading-[1.1]
                  tracking-[-0.025em]

                  text-[#161616]

                  max-[1400px]:text-[30px]

                  max-[1200px]:text-[27px]

                  max-[768px]:whitespace-normal
                  max-[768px]:text-[23px]
                "
              >
                &ldquo;{t.title}&rdquo;
              </h3>

              {/* QUOTE */}

              <p
                className="
                  m-0
                  mb-[53px]

                  max-w-[560px]

                  text-[20px]
                  font-normal
                  leading-[1.42]
                  tracking-[0.015em]

                  text-[#222]

                  max-[1400px]:max-w-[520px]
                  max-[1400px]:text-[18px]

                  max-[1200px]:max-w-[480px]
                  max-[1200px]:text-[17px]

                  max-[768px]:mb-8
                  max-[768px]:text-[15px]
                  max-[768px]:leading-[1.5]
                "
              >
                {t.quote}
              </p>

              {/* AUTHOR */}

              <div
                className="
                  mb-[68px]

                  flex
                  items-center
                  justify-center
                  gap-[5px]

                  text-[17px]
                  font-medium
                  uppercase
                  leading-none
                  tracking-[0.02em]

                  text-[#222]

                  max-[1200px]:mb-12
                  max-[1200px]:text-[15px]

                  max-[768px]:mb-8
                "
              >
                <span>{t.author}</span>

                {t.verified && (
                  <BadgeCheckIcon
                    className="
                      h-[18px]
                      w-[18px]
                      shrink-0
                    "
                  />
                )}
              </div>

              {/* ARROWS */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-[37px]
                "
              >
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous testimonial"
                  className="
                    flex
                    h-[50px]
                    w-[50px]
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    border-0

                    bg-[#eeeeee]

                    p-0

                    text-[#111]

                    transition-colors
                    duration-150

                    hover:bg-[#e3e3e3]
                  "
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next testimonial"
                  className="
                    flex
                    h-[50px]
                    w-[50px]
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    border-0

                    bg-[#eeeeee]

                    p-0

                    text-[#111]

                    transition-colors
                    duration-150

                    hover:bg-[#e3e3e3]
                  "
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ======================================================
          DOTS
      ====================================================== */}

      <div
        className="
          mt-4
          flex
          items-center
          justify-center
          gap-2
        "
      >
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`
              h-[7px]
              w-[7px]
              rounded-full
              border-0
              p-0
              transition-all
              duration-150

              ${i === index ? "scale-[1.2] bg-[#111]" : "bg-[#d8d8de]"}
            `}
          />
        ))}
      </div>
    </section>
  );
}
