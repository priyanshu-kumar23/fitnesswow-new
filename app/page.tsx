import Hero from "@/components/Hero";
import ProgramsSection from "@/components/ProgramsSection";
import PricingSection from "@/components/PricingSection";
import BMISection from "@/components/BMISection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MembershipSection from "@/components/MembershipSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FloatingButtons from "@/components/FloatingButtons";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <ProgramsSection />
      <PricingSection />
      <MembershipSection />
      <TestimonialsSection />
      <ContactSection />

      {/* Floating WhatsApp + Scroll Top */}
      <FloatingButtons />
    </main>
  );
}