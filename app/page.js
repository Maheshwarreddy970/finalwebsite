import Hero from "@/components/main/Hero";
import LogoSection from "@/components/main/Logo";
import Pricing from "@/components/main/Pricing";
import Services from "@/components/main/Services";
import { SmoothCursor } from "@/components/ui/SmoothCursorarrow";
import TwoColumnFooter from "@/components/main/Footer";
import { AnimatedNavFramer } from "@/components/main/navigation-menu";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";


export default async function Home() {

  return (
    <>
      <SmoothCursor></SmoothCursor>
      <AnimatedNavFramer></AnimatedNavFramer>
      <Hero />
      <LogoSection />
      <Services></Services>
      <Pricing />
      <ThreeDMarquee />
      <TwoColumnFooter />
    </>
  );
}
