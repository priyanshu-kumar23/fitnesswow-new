"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Dumbbell,
  HeartPulse,
  Flame,
  ArrowRight,
} from "lucide-react";

const workouts = [
  {
    title: "Biceps & Triceps",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    description:
      "Heavy arm-focused training to increase strength and definition.",
    tags: ["Biceps", "Triceps", "Strength"],
    icon: Dumbbell,
  },
  {
    title: "Shoulder + Core",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    description:
      "Boost endurance and core stability with high-energy workouts.",
    tags: ["Cardio", "Core", "Shoulders"],
    icon: Flame,
  },
  {
    title: "Recovery & Stretch",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    description:
      "Improve flexibility and muscle recovery with guided sessions.",
    tags: ["Recovery", "Mobility", "Stretch"],
    icon: HeartPulse,
  },
  {
    title: "Leg Day Training",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    description:
      "Lower-body workouts for explosive power and balance.",
    tags: ["Quads", "Hamstrings", "Glutes"],
    icon: Dumbbell,
  },
  {
    title: "Chest & Back",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop",
    description:
      "Push & pull workouts for upper-body development.",
    tags: ["Chest", "Lats", "Upper Back"],
    icon: Dumbbell,
  },
];

const WorkoutSchedule = () => {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white">

      {/* ================= BG ================= */}
      <div className="absolute left-[-150px] top-20 h-[350px] w-[350px] rounded-full bg-yellow-400/10 blur-[130px]" />

      <div className="absolute bottom-0 right-[-150px] h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-[130px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= HEADING ================= */}
       <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="mx-auto max-w-5xl text-center"
>

  {/* Badge */}
  <div className="inline-flex items-center gap-3 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 backdrop-blur-xl sm:px-5">

    <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_#facc15]" />

    <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-yellow-300 sm:text-[10px] md:text-xs">
      FITNESS PROGRAMS
    </p>
  </div>

  {/* Heading */}
  <h2 className="mt-5 text-3xl font-black uppercase leading-[1] text-white sm:text-4xl md:text-5xl lg:text-6xl">

    TRAIN LIKE A

    <span className="mt-2 block bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
      CHAMPION
    </span>
  </h2>

  {/* Description */}
  <p className="mx-auto mt-5 max-w-3xl px-2 text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
    Professionally designed training programs for muscle growth,
    endurance, recovery, and complete body transformation.
  </p>
</motion.div>

        {/* ================= PROGRAMS ================= */}
        <div className="mt-16">

          {/* ================= MOBILE SCROLL ================= */}
          <div className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:hidden">

            {workouts.map((workout, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group relative min-w-[84%] snap-center overflow-hidden rounded-[1.8rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] backdrop-blur-2xl"
              >

                {/* Glow */}
                <div className="absolute right-0 top-0 h-24 w-24 bg-yellow-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* IMAGE */}
                <div className="relative h-[190px] overflow-hidden">

                  <Image
                    src={workout.image}
                    alt={workout.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Icon */}
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-400/20 bg-black/40 backdrop-blur-xl">
                    <workout.icon className="h-5 w-5 text-yellow-400" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <h3 className="text-xl font-black uppercase leading-tight text-white">
                    {workout.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-relaxed text-gray-400">
                    {workout.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {workout.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] font-medium text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Glow Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>

          {/* ================= DESKTOP GRID ================= */}
          <div className="hidden gap-7 md:grid md:grid-cols-2 xl:grid-cols-3">

            {workouts.map((workout, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400/20"
              >

                {/* Glow */}
                <div className="absolute right-0 top-0 h-32 w-32 bg-yellow-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* IMAGE */}
                <div className="relative h-[240px] overflow-hidden">

                  <Image
                    src={workout.image}
                    alt={workout.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Icon */}
                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-400/20 bg-black/40 backdrop-blur-xl">
                    <workout.icon className="h-6 w-6 text-yellow-400" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <h3 className="text-2xl font-black uppercase leading-tight">
                    {workout.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {workout.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-3">
                    {workout.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Glow Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= CTA ================= */}
    <motion.div
  initial={{ opacity: 0, y: 70 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="mt-14 flex justify-center px-4 sm:mt-16"
>

  <button className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-yellow-400 px-6 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(250,204,21,0.45)] sm:px-8 sm:py-4 sm:text-sm">

    {/* Glow */}
    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent_60%)]" />

    {/* Text */}
    <span className="relative z-10">
      Join MR WOW Fitness
    </span>

    {/* Icon */}
    <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
  </button>
</motion.div>
      </div>
    </section>
  );
};

export default WorkoutSchedule;