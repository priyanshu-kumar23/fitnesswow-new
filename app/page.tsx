import Hero from "@/components/Hero";
import ProgramsSection from "@/components/ProgramsSection";
import PricingSection from "@/components/PricingSection";
import BMISection from "@/components/BMISection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import WorkoutSchedule from "@/components/WorkoutSchedule";
import TestimonialsSection from "@/components/TestimonialsSection";
import FloatingButtons from "@/components/FloatingButtons";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <WorkoutSchedule />
      <ProgramsSection />
      <PricingSection />
      <TestimonialsSection />

      {/* Floating WhatsApp + Scroll Top */}
      <FloatingButtons />
    </main>
  );
}