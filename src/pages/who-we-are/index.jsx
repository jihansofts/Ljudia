import Image from "next/image";
import DualDivSection from "@/components/sections/DualDivSection";

export default function WhoWeArePage() {
  return (
    <>
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

        <div className="relative z-10 mx-auto flex min-h-[44rem] max-w-[1400px] items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
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
            Across our operations, we create innovative brands, destinations
            and spaces that burst with ingenuity.
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
    </>
  );
}
