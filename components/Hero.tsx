"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Users,
  Star,
  Trophy,
  TrendingUp,
  Dumbbell,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

const tickerItems = [
  "AI-Powered Training",
  "Premium Equipment",
  "Expert Trainers",
  "18-Hour Access",
  "Diet & Nutrition Plans",
  "Luxury Workout Spaces",
  "Transformation Programs",
];

const stats = [
  { icon: Users, value: "500+", label: "ACTIVE MEMBERS" },
  { icon: TrendingUp, value: "3K+", label: "TRANSFORMATIONS" },
  { icon: Star, value: "5★", label: "AVERAGE RATING", accent: true },
];

const heroStats = [
  { value: "300+", label: "MEMBERS" },
  { value: "2K+", label: "TRANSFORMED" },
  { value: "5★", label: "RATING" },
];

const Hero = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="noise relative min-h-screen overflow-hidden bg-black text-white">

        {/* ================= BACKGROUND ================= */}
        <div className="absolute inset-0">

          {/* Desktop Background */}
          <div className="hidden md:block">
            <Image
              src="/bg.jpg"
              alt="Gym Background"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Mobile Background */}
          <div className="block md:hidden">
            <Image
              src="/gym1.webp"
              alt="Gym Background"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Primary Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 100%)",
            }}
          />

          {/* Yellow Radial Glow Bottom-Left */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 20% 80%, rgba(245,197,24,0.08) 0%, transparent 60%)",
            }}
          />

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

          {/* Bottom Fade */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Floating Glow */}
        <div className="absolute left-[-100px] top-10 h-[220px] w-[220px] rounded-full bg-yellow-400/10 blur-[120px] sm:h-[320px] sm:w-[320px]" />

        <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-orange-500/10 blur-[120px] sm:h-[320px] sm:w-[320px]" />

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-24 pt-32 sm:px-6 lg:px-10 lg:pb-16 lg:pt-28">

          <div className="grid w-full items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">

            {/* ================= LEFT ================= */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >

              {/* Eyebrow */}
              <p className="text-[10px] uppercase tracking-[0.25em] text-yellow-400">
                <span className="mr-2 inline-block h-px w-6 align-middle bg-yellow-400" />
                EST. 2024 &middot; ELITE FITNESS
              </p>

              {/* Headline */}
              <h1 className="mt-5 max-w-2xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                TRAIN HARD.
                <br />
                <span className="text-yellow-400">LIVE STRONGER.</span>
              </h1>

              {/* Sub-headline */}
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gray-300">
                YOUR TRIBE. YOUR TRANSFORMATION.
              </p>

              {/* Divider */}
              <div className="my-6 h-[2px] w-16 bg-yellow-400" />

              {/* Body */}
              <p className="max-w-lg text-sm leading-relaxed text-gray-300 lg:text-base">
                Not just a gym — a transformation ecosystem. Premium
                equipment, expert coaching, and a community that pushes you
                beyond your limits every single day.
              </p>

              {/* ================= BUTTONS ================= */}
              <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center">

                <Link
                  href="/joinnow"
                  className="shimmer group inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-8 py-4 text-sm font-black uppercase tracking-[0.06em] text-black transition-all duration-200 hover:scale-105 hover:bg-yellow-300"
                >
                  START YOUR JOURNEY
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/watch-tour"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-[0.06em] text-white backdrop-blur transition-all duration-300 hover:bg-white/10"
                >
                  <Play className="h-4 w-4 fill-current" />
                  WATCH THE TOUR
                </Link>
              </div>

              {/* ================= STATS ROW ================= */}
              <div className="mt-3 flex w-full rounded-2xl bg-black/40 px-4 py-3 backdrop-blur lg:hidden">
                {heroStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`flex-1 text-center ${
                      index !== heroStats.length - 1
                        ? "border-r border-white/20"
                        : ""
                    }`}
                  >
                    <p className="text-xl font-black text-yellow-400">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ================= RIGHT: STATS CARD ================= */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="relative mx-auto hidden w-full max-w-sm lg:block"
            >

              {/* Floating "OPEN 18 HOURS" Badge */}
              <div className="absolute -top-3 right-6 z-20 rounded-full bg-yellow-400 px-3 py-1 text-[9px] font-black uppercase tracking-wider text-black shadow-lg">
                OPEN 18 HOURS
              </div>

              {/* Card */}
              <div
                className="relative overflow-hidden rounded-3xl border border-white/10 border-t-2 border-t-yellow-400 bg-white/5 p-6 backdrop-blur-xl"
                style={{
                  boxShadow:
                    "0 25px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                <p className="mb-6 text-[10px] uppercase tracking-widest text-gray-500">
                  OUR NUMBERS
                </p>

                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`relative flex items-center justify-between ${
                      index !== stats.length - 1
                        ? "border-b border-white/5 pb-4 mb-4"
                        : ""
                    }`}
                  >
                    <div>
                      <h3
                        className={`text-4xl font-black ${
                          stat.accent ? "text-yellow-400" : "text-white"
                        }`}
                      >
                        {stat.value}
                      </h3>
                      <p className="mt-1 text-[10px] tracking-widest text-gray-400">
                        {stat.label}
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10">
                      <stat.icon className="h-4 w-4 text-yellow-400" />
                    </div>
                  </div>
                ))}

                {/* Footer Pill */}
                <div className="mt-2 inline-flex items-center rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-[10px] tracking-widest text-yellow-400">
                  PRO GYM &middot; ELITE TRAINING
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= SCROLL INDICATOR ================= */}
        <div className="absolute inset-x-0 bottom-16 z-20 hidden flex-col items-center gap-2 lg:flex">
          <span className="text-[9px] uppercase tracking-widest text-gray-500">
            SCROLL DOWN
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-500"
            >
              <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* ================= MOVING INFO BAR ================= */}
      <section className="relative overflow-hidden border-y border-white/10 bg-[#050505] py-3 sm:py-4">

        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.06),transparent_60%)]" />

        {/* Moving Content */}
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max items-center gap-6 sm:gap-12"
        >

          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4"
            >

              {/* Icon */}
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-yellow-400/15 bg-yellow-400/10 shadow-[0_0_20px_rgba(250,204,21,0.08)] sm:h-9 sm:w-9">

                {index % 4 === 0 && (
                  <HeartPulse className="h-3.5 w-3.5 text-yellow-400 sm:h-4 sm:w-4" />
                )}

                {index % 4 === 1 && (
                  <Dumbbell className="h-3.5 w-3.5 text-yellow-400 sm:h-4 sm:w-4" />
                )}

                {index % 4 === 2 && (
                  <Trophy className="h-3.5 w-3.5 text-yellow-400 sm:h-4 sm:w-4" />
                )}

                {index % 4 === 3 && (
                  <ShieldCheck className="h-3.5 w-3.5 text-yellow-400 sm:h-4 sm:w-4" />
                )}
              </div>

              {/* Text */}
              <p className="whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.14em] text-gray-200 sm:text-[11px] sm:tracking-[0.22em]">
                {item}
              </p>

              {/* Divider */}
              <div className="h-4 w-px bg-gradient-to-b from-transparent via-yellow-400/40 to-transparent sm:h-5" />
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
