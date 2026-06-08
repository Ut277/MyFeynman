import { Hero } from "@/components/landing/Hero";
import { FreeDemoSection } from "@/components/landing/FreeDemoSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { IITianTutorSection } from "@/components/landing/IITianTutorSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { WhatsAppSection } from "@/components/landing/WhatsAppSection";
import { ClassesSection } from "@/components/landing/ClassesSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTA } from "@/components/landing/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FreeDemoSection />
      <ProblemSection />
      <IITianTutorSection />
      <HowItWorksSection />
      <WhatsAppSection />
      <ClassesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
