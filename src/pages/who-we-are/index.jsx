import Image from "next/image";
import { useRouter } from "next/router";
import DualDivSection from "@/components/sections/DualDivSection";
import RoundedTwoCornerButton from "@/components/ui/RoundedTwoCornerButton";

export default function WhoWeArePage() {
  const router = useRouter();
  const sustainabilityCards = [
    {
      src: "/images/creating-impact-spotlight-1.avif",
      alt: "Sustainability and ESG spotlight",
    },
    {
      src: "/images/who_we_are_corporate_complaince.avif",
      alt: "Corporate compliance and governance spotlight",
    },
  ];

  const handleContactCtaClick = (event) => {
    const interactiveElement = event.target.closest("a,button");
    const label = interactiveElement?.textContent
      ?.replace(/\s+/g, " ")
      .trim()
      .toLowerCase();

    if (!label || !(label.startsWith("explore") || label === "learn more")) {
      return;
    }

    event.preventDefault();
    router.push("/contact-us");
  };

  return (
    <div onClick={handleContactCtaClick}>
      <section className="relative isolate min-h-[44rem] overflow-hidden bg-stone-950">
        <Image
          src="/images/who_we_are_spolight_thumbnail.avif"
          alt="Who we are spotlight"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,24,39,0.86)_0%,rgba(17,24,39,0.72)_36%,rgba(17,24,39,0.18)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[44rem] max-w-full items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl font-bold leading-none tracking-tight sm:text-6xl lg:text-7xl">
              Vision Driven
            </h1>

            <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-stone-100 sm:text-lg">
              <p>We create &apos;GREAT MOMENTS FOR EVERYONE, EVERYDAY&apos;</p>

              <p>
                At Majid Al Futtaim we believe that life is for living. We also
                believe that every day should be effortless... regardless of
                what you are doing, and who you are doing it with.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DualDivSection
        id="vision-values"
        image="/images/who_we_are_great_moments.webp"
        imageAlt="A retail destination showcasing innovative spaces and experiences."
        smallTitle="WHO WE ARE"
        title="Vision & Values"
        description={
          <>
            Across our operations, we create innovative brands, destinations and
            spaces that burst with ingenuity.
            <br />
            <br />
            We strive to incubate happiness by creating great moments for
            everyone, everyday. This was the vision of our founder, Majid Al
            Futtaim, which is as relevant today as it was over 26 years ago.
          </>
        }
        buttonName="Explore More"
      />

      <DualDivSection
        id="our-journey"
        image="/images/who_we_are_the_journey_so_far.avif"
        imageAlt="A view representing Majid Al Futtaim's journey and milestones."
        smallTitle="WHO WE ARE"
        title="Our Journey"
        description={
          <>
            Majid Al Futtaim has brought fun and happiness to the lives of
            people from around the world.
            <br />
            Find out more about our journey to becoming the region&apos;s
            leading integrated lifestyle provider.
          </>
        }
        buttonName="Explore The Journey"
        imageOnRight
      />

      <section id="sustainability-esg" className="bg-white">
        <div className="flex flex-col lg:flex-row">
          {sustainabilityCards.map((card) => (
            <article
              key={card.src}
              className="relative isolate min-h-[24rem] w-full overflow-hidden bg-stone-950 sm:min-h-[30rem] lg:min-h-[36rem] lg:flex-1"
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.2)_0%,rgba(17,24,39,0.68)_100%)]" />

              <div className="relative z-10 flex h-full items-center justify-center p-6 text-center sm:p-8 lg:p-10">
                <div className="space-y-5 text-white">
                  <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                    Sustainability &amp; ESG
                  </h1>
                  <RoundedTwoCornerButton className="px-7 py-4">
                    Learn More
                  </RoundedTwoCornerButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
