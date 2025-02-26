import { CoverageMap } from "@/components/CoverageMap";
import { CtaSection } from "@/components/CtaSection";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CoverageMap />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
