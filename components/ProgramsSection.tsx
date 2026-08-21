"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Strength Training",
    tag: "STRENGTH",
    description: "Build raw power with free weights and resistance training.",
    image: "/gym.jpg",
  },
  {
    title: "Cardio Training",
    tag: "CARDIO",
    description: "Torch calories and build endurance on premium cardio decks.",
    image: "/treadmill.webp",
  },
  {
    title: "Personal Coaching",
    tag: "1-ON-1",
    description: "Custom programs and one-on-one guidance from elite coaches.",
    image: "/about1.webp",
  },
  {
    title: "CrossFit & Functional",
    tag: "CROSSFIT",
    description: "Functional workouts that build agility, mobility, and grit.",
    image: "/gym1.webp",
  },
];

const ProgramsSection = () => {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white lg:py-28">

      {/* ================= BG EFFECTS ================= */}
      <div className="absolute left-[-120px] top-20 h-[320px] w-[320px] rounded-full bg-yellow-400/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[120px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:65px_65px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-4xl text-center sm:mb-16"
        >

          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
            OUR PROGRAMS
          </p>

          {/* Title */}
          <h2 className="mt-3 text-3xl font-black uppercase leading-[1.1] text-white sm:text-4xl lg:text-5xl">
            TRAIN LIKE A
            <br />
            <span className="text-yellow-400">CHAMPION</span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-relaxed text-gray-300 lg:text-base">
            Professionally designed training programs for muscle growth,
            endurance, recovery, and complete body transformation.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-hide sm:grid sm:overflow-visible sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">

          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative aspect-[3/4] w-[75vw] shrink-0 snap-center overflow-hidden rounded-2xl sm:w-auto sm:shrink lg:h-96 lg:aspect-auto"
            >

              {/* Background Image */}
              <Image
                src={program.image}
                alt={program.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 75vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10 transition-all duration-300 ease-out group-hover:from-black/95 group-hover:via-black/60" />

              {/* Top Badge */}
              <div className="absolute left-4 top-4 z-10">
                <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-black">
                  {program.tag}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                <h3 className="text-xl font-black text-white">
                  {program.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-gray-300">
                  {program.description}
                </p>

                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-yellow-400 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100">
                  EXPLORE
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Swipe Hint (mobile only) */}
        <p className="mt-3 text-center text-[10px] uppercase tracking-widest text-gray-500 sm:hidden">
          Swipe →
        </p>

        {/* View All */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/programs"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-[0.06em] text-white backdrop-blur transition-all duration-300 ease-out hover:bg-white/10"
          >
            VIEW ALL PROGRAMS
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
