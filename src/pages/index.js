import HomeSection from "@/components/sections/Home";
import DualDivSection from "@/components/sections/DualDivSection";
import WhatweDo from "@/components/sections/WhatweDo";
import GrowWithus from "@/components/sections/GrowWithus";

export default function Home() {
  return (
    <>
      <HomeSection />
      <DualDivSection
        image="/images/homepage_vision_driven.jpg"
        smallTitle="WHO WE ARE"
        title={
          <>
            VISION
            <br />
            DRIVEN
          </>
        }
        description="In our quest to create ‘great moments for everyone, everyday’, Majid Al Futtaim has enabled happiness in the lives of people from around the world. Find out more about who we are.Next.js provides powerful tools to build scalable applications quickly."
        buttonName="Explore the Journey"
      />
      <WhatweDo />
      <DualDivSection
        image="/images/homepage_peoples_and_careers.avif"
        smallTitle="People & Careers"
        title={
          <>
            TALENT
            <br />
            FOCUSED
          </>
        }
        description="At our core, we are a values-led organisation that is bold, passionate and together in all that we do – underpinned by a culture that is inspired by a dynamic, entrepreneurial spirit."
        buttonName="Explore the Journey"
      />
      <GrowWithus />
      <DualDivSection
        image="/images/homepage_investor_relations.avif"
        smallTitle="INVESTOR RELATIONS"
        title={
          <>
            Let&apos;s Build <br />
            Our Future <br />
            Together
          </>
        }
        description="Majid Al Futtaim is one of the leading drivers of economic growth and impact in the Middle East and North Africa and is a leading foreign direct investor and a catalyst for the region’s economy."
        buttonName="Explore the Journey"
      />
    </>
  );
}
