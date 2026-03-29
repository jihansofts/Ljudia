import HomeSection from "@/components/sections/Home";
import DualDivSection from "@/components/sections/DualDivSection";
import WhatweDo from "@/components/sections/WhatweDo";
import GrowWithus from "@/components/sections/GrowWithus";
import { useRouter } from "next/router";
import {
  INVESTOR_RELATIONS_CONTENT,
  WHO_WE_ARE_CONTENT,
} from "@/data/siteContent";

export default function Home() {
  const router = useRouter();

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
      <HomeSection />
      <DualDivSection {...WHO_WE_ARE_CONTENT} />
      <WhatweDo />
      <GrowWithus />
      <DualDivSection {...INVESTOR_RELATIONS_CONTENT} />
    </div>
  );
}
