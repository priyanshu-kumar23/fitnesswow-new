"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  Trophy,
  Clock3,
  Users,
  ShieldCheck,
  Flame,
} from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Premium Equipment",
    description:
      "Train with advanced modern machines and world-class workout equipment.",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description:
      "Certified trainers to guide your transformation journey professionally.",
  },
  {
    icon: Clock3,
    title: "18/6 Access",
    description:
      "Workout anytime with flexible gym access designed for your lifestyle.",
  },
  {
    icon: Trophy,
    title: "Transformation Focus",
    description:
      "Structured programs designed for muscle gain, fat loss, and strength.",
  },
  {
    icon: ShieldCheck,
    title: "Luxury Environment",
    description:
      "Premium interiors, energetic atmosphere, and motivating workout spaces.",
  },
  {
    icon: Flame,
    title: "High Energy Training",
    description:
      "Experience intense sessions with unmatched motivation and energy.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-16 text-white sm:py-20 lg:py-24">

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute left-[-120px] top-20 h-[260px] w-[260px] rounded-full bg-yellow-400/10 blur-[120px] sm:h-[320px] sm:w-[320px]" />

      <div className="absolute bottom-0 right-[-120px] h-[260px] w-[260px] rounded-full bg-orange-500/10 blur-[120px] sm:h-[320px] sm:w-[320px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 backdrop-blur-xl sm:px-5">

            <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_#facc15]" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-yellow-300 sm:text-[10px] md:text-xs">
              WHY CHOOSE US
            </p>
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-3xl font-black uppercase leading-[1] text-white sm:text-4xl md:text-5xl lg:text-6xl">

            THE BEST FITNESS

            <span className="mt-2 block bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              EXPERIENCE
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-3xl px-2 text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
            MR WOW FITNESS combines luxury workout spaces, elite coaching,
            modern equipment, and high-energy fitness programs to help you
            achieve real transformation.
          </p>
        </motion.div>

        {/* ================= FEATURES ================= */}
        <div className="mt-14 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/20 hover:bg-yellow-400/[0.04] sm:rounded-[2rem] sm:p-8"
            >

              {/* Top Glow Line */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Hover Glow */}
              <div className="absolute right-0 top-0 h-28 w-28 bg-yellow-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:h-32 sm:w-32" />

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/20 to-orange-500/10 shadow-[0_0_30px_rgba(250,204,21,0.08)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_45px_rgba(250,204,21,0.18)] sm:h-16 sm:w-16 sm:rounded-2xl">

                <feature.icon className="h-6 w-6 text-yellow-400 sm:h-8 sm:w-8" />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-black uppercase leading-snug text-white sm:mt-7 sm:text-2xl">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[13px] leading-relaxed text-gray-400 sm:mt-4 sm:text-base">
                {feature.description}
              </p>

              {/* Bottom Line */}
              <div className="mt-5 h-[2px] w-14 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 group-hover:w-24 sm:mt-6" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;