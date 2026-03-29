import Image from "next/image";

import AcademyCard from "@/components/ui/AcademyCard";
import DualDivSection from "@/components/sections/DualDivSection";
import RoundedTwoCornerButton from "@/components/ui/RoundedTwoCornerButton";

const CAREER_CARDS = [
  {
    image: "/images/office-images/office-2.jpg",
    imageAlt: "Team members collaborating in a bright office environment.",
    title: "Early Careers",
    description:
      "A practical launchpad for graduates and early professionals to build core business capabilities while contributing to meaningful, real-world projects. The experience combines structured onboarding, guided mentorship, and rotational exposure so participants can grow confidence quickly and shape a strong foundation for long-term success.",
  },
  {
    image: "/images/office-images/office-3.jpg",
    imageAlt: "Professionals in a strategy conversation during a team meeting.",
    title: "Professional Growth",
    description:
      "Role-based pathways and cross-functional opportunities designed to deepen expertise and broaden business perspective. Colleagues gain access to targeted upskilling, stretch assignments, and development conversations that help accelerate progression while strengthening leadership potential at every stage of their journey.",
  },
  {
    image: "/images/office-images/office-4.jpg",
    imageAlt: "Modern collaborative office space representing future-focused careers.",
    title: "Future Skills",
    description:
      "A forward-looking development journey focused on digital fluency, innovation, and adaptability for future-ready teams. Through practical learning, collaborative problem-solving, and emerging capability programs, colleagues are equipped to create measurable business impact and lead confidently in evolving markets.",
  },
];

export default function PeopleCareersPage() {
  return (
    <>
      <section className="relative isolate min-h-[38rem] overflow-hidden bg-stone-950 sm:min-h-[44rem]">
        <Image
          src="/images/buildyourself.avif"
          alt="People and Careers at Majid Al Futtaim"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,24,39,0.86)_0%,rgba(17,24,39,0.72)_38%,rgba(17,24,39,0.2)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[38rem] max-w-full items-end px-6 py-14 sm:min-h-[44rem] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-100 sm:text-base">
              People &amp; Careers
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Build Your Future With Us
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-stone-100 sm:mt-7 sm:text-lg sm:leading-8">
              Join a workplace where ambition is supported, learning is
              continuous, and every role contributes to creating great moments
              for everyone, every day.
            </p>
            <RoundedTwoCornerButton
              href="/contact-us"
              className="mt-8 w-full max-w-xs px-6 py-4 sm:w-auto sm:px-7"
            >
              Explore Opportunities
            </RoundedTwoCornerButton>
          </div>
        </div>
      </section>

      <DualDivSection
        id="career-culture"
        image="/images/office-images/office-1.jpg"
        imageAlt="Colleagues in a collaborative workspace discussing ideas."
        smallTitle="PEOPLE & CAREERS"
        title="A Culture To Grow In"
        description={
          <>
            We are building a people-first culture where teams can perform at
            their best while staying connected to purpose.
            <br />
            <br />
            From onboarding to leadership development, our learning ecosystem
            supports colleagues at every stage of their career journey.
          </>
        }
        buttonName="Learn More"
        buttonHref="/contact-us"
      />

      <section id="career-pathways" className="bg-[#f6f6f6]">
        <div className="mx-auto max-w-full px-6 py-12 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <h2 className="text-3xl font-bold leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-7xl">
            CAREER PATHWAYS
          </h2>

          <div className="mt-10 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3">
            {CAREER_CARDS.map((card) => (
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
    </>
  );
}
