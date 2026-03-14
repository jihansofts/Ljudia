import { startTransition, useEffect, useState } from "react";
import Image from "next/image";

import RoundedTwoCornerButton from "@/components/ui/RoundedTwoCornerButton";

const SLIDE_ADVANCE_DELAY = 6000;

const SLIDES = [
  {
    id: "vision",
    image: "/images/office-images/office-1.jpg",
    imageAlt: "Team members discussing work around a meeting table.",
    eyebrow: "HIRING SOLUTIONS",
    title: "We help companies hire the right people faster.",
    description:
      "From role scoping to shortlisting, we streamline recruitment so growing teams can fill critical positions with clarity and confidence.",
    buttonLabel: "Hire With Us",
  },
  {
    id: "talent",
    image: "/images/office-images/office-2.jpg",
    imageAlt: "Colleagues working together in a bright office.",
    eyebrow: "TALENT SEARCH",
    title: "Recruitment support built for business growth.",
    description:
      "Our team sources executive, technical, and operational talent to reduce time-to-hire without lowering the quality of your candidate pipeline.",
    buttonLabel: "Find Talent",
  },
  {
    id: "future",
    image: "/images/office-images/office-3.jpg",
    imageAlt: "Modern office desks arranged in an open workspace.",
    eyebrow: "EMPLOYER PARTNERSHIP",
    title: "A hiring partner focused on fit, performance, and retention.",
    description:
      "We align every search with your culture, team structure, and long-term hiring goals so candidates fit beyond the resume.",
    buttonLabel: "Talk To Recruiters",
  },
  {
    id: "spaces",
    image: "/images/office-images/office-4.jpg",
    imageAlt: "A polished office interior with a welcoming collaborative feel.",
    eyebrow: "WORKFORCE GROWTH",
    title: "Scale your team with dependable recruitment support.",
    description:
      "Whether you need one key hire or an ongoing talent pipeline, we bring market insight, screening rigor, and consistent delivery to every search.",
    buttonLabel: "Build Your Team",
  },
];

function getSlideIndex(indexDelta, activeIndex) {
  return (activeIndex + indexDelta + SLIDES.length) % SLIDES.length;
}

export default function WhatweDo() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      startTransition(() => {
        setActiveSlideIndex((currentIndex) => getSlideIndex(1, currentIndex));
      });
    }, SLIDE_ADVANCE_DELAY);

    return () => window.clearInterval(intervalId);
  }, []);

  const showPreviousSlide = () => {
    startTransition(() => {
      setActiveSlideIndex((currentIndex) => getSlideIndex(-1, currentIndex));
    });
  };

  const showNextSlide = () => {
    startTransition(() => {
      setActiveSlideIndex((currentIndex) => getSlideIndex(1, currentIndex));
    });
  };

  const showSlide = (index) => {
    startTransition(() => {
      setActiveSlideIndex(index);
    });
  };

  return (
    <section className="relative isolate h-svh min-h-160 overflow-hidden bg-stone-950">
      {SLIDES.map((slide, index) => {
        const isActive = index === activeSlideIndex;

        return (
          <article
            key={slide.id}
            aria-hidden={!isActive}
            className={[
              "absolute inset-0 transition-opacity duration-700 ease-out",
              isActive ? "opacity-100" : "pointer-events-none opacity-0",
            ].join(" ")}
          >
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.12)_0%,rgba(10,10,10,0.58)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(123,19,48,0.35),transparent_34%)]" />

            <div className="relative z-10 flex h-full items-start px-6 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
              <div className="max-w-3xl space-y-5 pt-6 text-white sm:pt-10 lg:pt-5">
                <p className="max-w-xl text-sm font-semibold uppercase tracking-[0.28em] text-stone-100/90">
                  {slide.eyebrow}
                </p>

                <h2 className="max-w-2xl text-xl font-semibold leading-tight text-balance sm:text-4xl lg:text-5xl">
                  {slide.title}
                </h2>

                <p className="max-w-xl text-base leading-7 text-stone-200 sm:text-lg">
                  {slide.description}
                </p>

                <RoundedTwoCornerButton className="mt-2">
                  {slide.buttonLabel}
                </RoundedTwoCornerButton>
              </div>
            </div>
          </article>
        );
      })}

      <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col gap-4 px-6 pb-8 sm:px-10 sm:pb-10 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:pb-14">
        <div className="flex items-center gap-3">
          {SLIDES.map((slide, index) => {
            const isActive = index === activeSlideIndex;

            return (
              <button
                key={slide.id}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-pressed={isActive}
                onClick={() => showSlide(index)}
                className={[
                  "h-3 rounded-full border border-white/70 transition-all",
                  isActive
                    ? "w-12 bg-white"
                    : "w-3 bg-white/20 hover:bg-white/45",
                ].join(" ")}
              />
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={showPreviousSlide}
            className="rounded-full border border-white/50 bg-black/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-black/35"
          >
            Prev
          </button>

          <button
            type="button"
            onClick={showNextSlide}
            className="rounded-full border border-white/50 bg-black/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-black/35"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
