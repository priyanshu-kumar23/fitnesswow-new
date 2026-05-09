"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  HeartPulse,
  Users,
  Flame,
  Trophy,
  Bike,
  Target,
} from "lucide-react";

const services = [
  {
    title: "Strength Training",
    icon: Dumbbell,
    description:
      "Build muscle mass, improve endurance, and increase strength using advanced free weights and resistance training.",
    features: [
      "Dumbbells & Barbells",
      "Bench Press",
      "Cable Machines",
    ],
  },

  {
    title: "Cardio Training",
    icon: HeartPulse,
    description:
      "Improve stamina, burn calories, and boost heart health with high-performance cardio programs.",
    features: [
      "Treadmills",
      "Cycling Stations",
      "Rowing Machines",
    ],
  },

  {
    title: "Personal Training",
    icon: Users,
    description:
      "Get one-on-one coaching, customized workouts, nutrition plans, and expert guidance.",
    features: [
      "Custom Plans",
      "Diet Guidance",
      "Progress Tracking",
    ],
  },

  {
    title: "CrossFit & Functional",
    icon: Flame,
    description:
      "Enhance agility, flexibility, mobility, and core strength with functional workouts.",
    features: [
      "Battle Ropes",
      "TRX Training",
      "Circuit Workouts",
    ],
  },

  {
    title: "Weight Loss Programs",
    icon: Target,
    description:
      "Scientifically designed transformation programs for fat loss and body toning.",
    features: [
      "Fat Burn",
      "Transformation",
      "Nutrition Support",
    ],
  },

  {
    title: "Sports Training",
    icon: Trophy,
    description:
      "Specialized athletic training programs to improve speed, endurance, and performance.",
    features: [
      "Agility",
      "Explosive Power",
      "Endurance",
    ],
  },

  {
    title: "Group Fitness",
    icon: Users,
    description:
      "Experience high-energy group classes designed for motivation and maximum results.",
    features: [
      "HIIT Workouts",
      "Core Training",
      "Fun Sessions",
    ],
  },

  {
    title: "Endurance & Cycling",
    icon: Bike,
    description:
      "Boost cardiovascular fitness with cycling and endurance-focused routines.",
    features: [
      "Cycling",
      "Cardio Sessions",
      "Stamina Building",
    ],
  },
];

const ProgramsSection = () => {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">

      {/* ================= BG EFFECTS ================= */}
      <div className="absolute left-[-120px] top-20 h-[320px] w-[320px] rounded-full bg-yellow-400/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[120px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:65px_65px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-4xl text-center sm:mb-16"
        >

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 backdrop-blur-xl sm:px-5">

            <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_#facc15]" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-yellow-300 sm:text-[10px] md:text-xs">
              OUR SERVICES
            </p>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-black uppercase leading-[1] text-white sm:text-4xl md:text-5xl lg:text-6xl">

            Elite Fitness

            <span className="mt-2 block bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Programs
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-3xl px-2 text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
            At MR WOW FITNESS, we provide premium training programs
            designed to help you transform your body, build strength,
            and unlock peak performance.
          </p>
        </motion.div>

        {/* ================= MOBILE HORIZONTAL / DESKTOP GRID ================= */}
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-hide sm:grid sm:overflow-visible md:grid-cols-2 xl:grid-cols-4">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}

                initial={{
                  opacity: 0,
                  x: -60,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                }}

                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}

                viewport={{ once: true }}

                className="group relative min-w-[85%] snap-center overflow-hidden rounded-[1.8rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/30 hover:shadow-[0_0_45px_rgba(250,204,21,0.08)] sm:min-w-0 sm:rounded-[2rem] sm:p-7"
              >

                {/* Premium Top Border */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Glow Effects */}
                <>
                  {/* Main Glow */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.18),transparent_55%)]" />

                  {/* Corner Glow */}
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-yellow-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:h-40 sm:w-40" />
                </>

                {/* Icon */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/20 to-orange-500/10 shadow-[0_0_30px_rgba(250,204,21,0.08)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_45px_rgba(250,204,21,0.18)] sm:h-16 sm:w-16 sm:rounded-[1.4rem]">

                  <Icon className="h-6 w-6 text-yellow-400 sm:h-8 sm:w-8" />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-6 sm:mt-7">

                  <h3 className="text-lg font-black uppercase leading-snug text-white sm:text-xl lg:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-relaxed text-gray-400 sm:mt-4 sm:text-sm lg:text-[15px]">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">

                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/20 hover:bg-yellow-400/10 hover:text-yellow-200 sm:px-3 sm:py-2 sm:text-[9px]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Border */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 group-hover:w-full sm:h-[3px]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;