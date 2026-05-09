import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import {
  Target,
  Eye,
  ShieldCheck,
} from "lucide-react";

export default function AboutPage() {
  const aboutCards = [
    {
      number: "01",
      title: "Our Mission",
      icon: <Target className="h-8 w-8 text-yellow-400" />,
      description:
        "At MR WOW FITNESS, our mission is to empower individuals through strength, discipline, and transformation. We provide elite training, premium equipment, and expert guidance to help every member unlock their strongest version.",
    },

    {
      number: "02",
      title: "Our Vision",
      icon: <Eye className="h-8 w-8 text-yellow-400" />,
      description:
        "We aim to build a world-class fitness community where passion meets performance. Our vision is to inspire confidence, healthy lifestyles, and long-term fitness success through innovation and motivation.",
    },

    {
      number: "03",
      title: "Our Commitment",
      icon: <ShieldCheck className="h-8 w-8 text-yellow-400" />,
      description:
        "We are committed to providing a premium and motivating environment with expert trainers, modern facilities, and personalized programs that support every member’s fitness journey.",
    },
  ];

  return (
    <main className="bg-black pt-28 sm:pt-32">

      {/* ================= ABOUT SECTION ================= */}
      <AboutSection />

      {/* ================= MISSION / VISION / COMMITMENT ================= */}
      <section className="relative overflow-hidden py-16 sm:py-24">

        {/* Background Glow */}
        <div className="absolute inset-0">

          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]" />

          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

          {/* Heading */}
          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              WHY MR WOW FITNESS
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-5xl md:text-6xl">
              BUILT FOR
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {" "}TRANSFORMATION
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
              More than just a gym — MR WOW FITNESS is a premium fitness
              destination focused on strength, discipline, confidence,
              and real body transformation.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-14 grid gap-6 lg:grid-cols-3">

            {aboutCards.map((card, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/30 hover:bg-yellow-400/[0.03] sm:p-8"
              >

                {/* Number */}
                <div className="absolute right-5 top-5 text-5xl font-black text-white/10 sm:text-6xl">
                  {card.number}
                </div>

                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10 shadow-[0_0_30px_rgba(250,204,21,0.12)]">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="mt-7 text-2xl font-black uppercase text-white">
                  {card.title}
                </h3>

                {/* Divider */}
                <div className="mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 group-hover:w-28" />

                {/* Description */}
                <p className="mt-6 text-sm leading-relaxed text-gray-400 sm:text-base">
                  {card.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-yellow-400/10 blur-[80px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs/>

        <TestimonialsSection />
    </main>
  );
}