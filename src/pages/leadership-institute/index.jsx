import GrowWithus from "@/components/sections/GrowWithus";
import DualDivSection from "@/components/sections/DualDivSection";
import AcademyCard from "@/components/ui/AcademyCard";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const KEY_FACTS = [
  { target: 3103, label: "learners", suffix: "", decimals: 0 },
  { target: 13000, label: "learning hours", suffix: "+", decimals: 0 },
  {
    target: 4.7,
    label: "average learner satisfaction",
    suffix: "/5",
    decimals: 1,
  },
  { target: 11, label: "academies", suffix: "", decimals: 0 },
];

const LEARNING_CARD_IMAGE =
  "https://plus.unsplash.com/premium_photo-1772065874031-4fcaadd5a42f?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const ABOUT_SECTION_IMAGE = "/images/aboutthevenue.avif";

const LEARNING_CARDS = [
  {
    image: LEARNING_CARD_IMAGE,
    imageAlt: "Leadership workshop environment designed for collaborative learning.",
    title: "Induction Academy",
    description:
      "A structured onboarding journey that helps new colleagues quickly understand our culture, values, and ways of working through practical, people-first learning moments.",
  },
  {
    image: LEARNING_CARD_IMAGE,
    imageAlt:
      "Participants joining a facilitated academy session focused on skills growth.",
    title: "Leadership Essentials",
    description:
      "A capability-building path for current and emerging leaders to strengthen coaching, decision-making, and team alignment across dynamic business environments.",
  },
  {
    image: LEARNING_CARD_IMAGE,
    imageAlt: "Modern learning space prepared for immersive training activities.",
    title: "Digital Learning Hub",
    description:
      "An always-on ecosystem of curated programs, peer learning circles, and role-based pathways that enables continuous development in the flow of daily work.",
  },
];

const LEADERSHIP_DEVELOPMENT_CARDS = [
  {
    image: LEARNING_CARD_IMAGE,
    imageAlt: "Leadership cohort participating in a facilitated workshop.",
    title: "Emerging Leaders Pathway",
    description:
      "A practical foundation program designed to build confidence, communication skills, and people leadership capabilities for first-time leaders.",
  },
  {
    image: LEARNING_CARD_IMAGE,
    imageAlt:
      "Senior professionals collaborating during a leadership development session.",
    title: "Strategic Leadership Lab",
    description:
      "An applied learning experience focused on strategic thinking, cross-functional decision-making, and leading through change across complex environments.",
  },
  {
    image: LEARNING_CARD_IMAGE,
    imageAlt: "Leadership participants in a modern development academy setup.",
    title: "Executive Growth Studio",
    description:
      "A curated development track that combines coaching, peer exchange, and business simulations to accelerate impact at senior leadership levels.",
  },
];

const LEARNING_LEADERSHIP_COMMUNITY_CARDS = [
  {
    image: LEARNING_CARD_IMAGE,
    imageAlt: "Cross-functional colleagues collaborating in a community workshop.",
    title: "Peer Learning Circle",
    description:
      "A community-led format where colleagues exchange practical insights, solve real workplace challenges, and grow through shared experience.",
  },
  {
    image: LEARNING_CARD_IMAGE,
    imageAlt: "Employees participating in a learning and leadership roundtable.",
    title: "Mentor Connect Program",
    description:
      "A structured mentor-mentee journey that strengthens leadership capability through guided reflection, support, and goal-oriented development.",
  },
  {
    image: LEARNING_CARD_IMAGE,
    imageAlt: "Community members joining an interactive leadership session.",
    title: "Leadership Exchange Forum",
    description:
      "A recurring forum where teams explore leadership trends, celebrate best practices, and co-create ideas that shape a stronger learning culture.",
  },
];

function formatCounter(value, fact) {
  const safeValue = Number.isFinite(value) ? value : 0;

  const formattedValue =
    fact.decimals > 0
      ? safeValue.toLocaleString("en-US", {
          minimumFractionDigits: fact.decimals,
          maximumFractionDigits: fact.decimals,
        })
      : Math.round(safeValue).toLocaleString("en-US");

  return `${formattedValue}${fact.suffix}`;
}

export default function LeadershipInstitutePage() {
  const keyFactsRef = useRef(null);
  const [animateCounters, setAnimateCounters] = useState(false);
  const [counterValues, setCounterValues] = useState(() =>
    KEY_FACTS.map(() => 0),
  );

  useEffect(() => {
    if (!keyFactsRef.current || animateCounters) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setAnimateCounters(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(keyFactsRef.current);
    return () => observer.disconnect();
  }, [animateCounters]);

  useEffect(() => {
    if (!animateCounters) return;

    const durationMs = 1600;
    let frameId = 0;
    let startTime = null;

    const animateFrame = (timestamp) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounterValues(KEY_FACTS.map((fact) => fact.target * easedProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(animateFrame);
      }
    };

    frameId = requestAnimationFrame(animateFrame);
    return () => cancelAnimationFrame(frameId);
  }, [animateCounters]);

  return (
    <>
      <GrowWithus />

      <DualDivSection
        id="mission-overview"
        image="/images/learning-mission-and-overview.avif"
        imageAlt="Leadership development participants in a collaborative learning session."
        smallTitle="THE LEADERSHIP INSTITUTE"
        title="Mission & Overview"
        description={
          <>
            Learning at Majid Al Futtaim is guided by our three core
            principles: &apos;Grow by Giving,&apos; &apos;Own Your
            Learning,&apos; and &apos;Everyone to Everyone Learning.&apos;
            <br />
            <br />
            We believe that learning is not only a personal journey but a
            collective endeavour, where knowledge flows freely across all
            levels, roles, and teams. Our leaders are committed to lifting
            others as they grow, fostering an environment where sharing
            insights and experiences is a natural part of daily interactions.
            <br />
            <br />
            Every team member is encouraged to take ownership of their
            development, supported by a culture that embeds growth in the flow
            of work. Together, we create a dynamic ecosystem of learning that
            strengthens our people, drives our business forward, and enriches
            the communities we passionately serve.
          </>
        }
      />

      <section id="key-facts" ref={keyFactsRef} className="bg-[#e8e8e8]">
        <div className="mx-auto flex min-h-[30rem] max-w-[1400px] flex-col justify-between px-6 py-16 sm:min-h-[34rem] sm:px-10 sm:py-20 lg:min-h-[38rem] lg:px-16 lg:py-24">
          <h2 className="max-w-md text-5xl font-bold leading-[1.08] text-black sm:text-6xl">
            Key Facts
            <br />
            (2024)
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-10 lg:mt-20 lg:grid-cols-4 lg:gap-8">
            {KEY_FACTS.map((fact, index) => (
              <article key={fact.label} className="text-center lg:self-end">
                <p className="text-5xl font-semibold tracking-tight text-[#a98b58] sm:text-6xl">
                  {formatCounter(counterValues[index], fact)}
                </p>
                <p className="mx-auto mt-4 max-w-[14rem] text-xs font-semibold uppercase leading-[1.35] tracking-[0.16em] text-black sm:text-sm">
                  {fact.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="learning" className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <h2 className="text-5xl font-bold leading-none tracking-tight text-black sm:text-6xl lg:text-7xl">
            LEARNING
          </h2>

          <div className="mt-12 grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
            {LEARNING_CARDS.map((card) => (
              <AcademyCard
                key={card.title}
                image={card.image}
                imageAlt={card.imageAlt}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="leadership-development" className="bg-[#f6f6f6]">
        <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <h2 className="text-5xl font-bold leading-none tracking-tight text-black sm:text-6xl lg:text-7xl">
            LEADERSHIP DEVELOPMENT
          </h2>

          <div className="mt-12 grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
            {LEADERSHIP_DEVELOPMENT_CARDS.map((card) => (
              <AcademyCard
                key={card.title}
                image={card.image}
                imageAlt={card.imageAlt}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="learning-leadership-community" className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <h2 className="text-5xl font-bold leading-none tracking-tight text-black sm:text-6xl lg:text-7xl">
            LEARNING &amp; LEADERSHIP COMMUNITY
          </h2>

          <div className="mt-12 grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
            {LEARNING_LEADERSHIP_COMMUNITY_CARDS.map((card) => (
              <AcademyCard
                key={card.title}
                image={card.image}
                imageAlt={card.imageAlt}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="about-image" className="my-10 sm:my-12 lg:my-16">
        <div className="relative h-[45vh] min-h-[22rem] w-full sm:h-[55vh] lg:h-[68vh]">
          <Image
            src={ABOUT_SECTION_IMAGE}
            alt="Leadership Institute participants collaborating in an immersive learning space."
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
}
