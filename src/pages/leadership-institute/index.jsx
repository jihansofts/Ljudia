import GrowWithus from "@/components/sections/GrowWithus";
import DualDivSection from "@/components/sections/DualDivSection";

export default function LeadershipInstitutePage() {
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
    </>
  );
}
