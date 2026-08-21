

"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Dumbbell,
  Trophy,
  HeartPulse,
  ShieldCheck,
  Users,
} from "lucide-react";

const tickerItems = [
  "AI-Powered Training",
  "Premium Equipment",
  "Expert Trainers",
  "24/7 Access",
  "Diet & Nutrition Plans",
  "Luxury Workout Spaces",
  "Transformation Programs",
];

const Hero = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen overflow-hidden bg-black text-white">

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

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 md:bg-black/15" />

          {/* Mobile Bottom-Up Gradient (keeps text readable over the photo) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 md:hidden" />

          {/* Left Gradient (desktop) */}
          <div className="absolute inset-0 hidden bg-gradient-to-r from-black via-black/55 to-black/20 md:block" />

          {/* Premium Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.16),transparent_30%)]" />

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

          {/* Bottom Fade */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Floating Glow */}
        <div className="absolute left-[-100px] top-10 h-[220px] w-[220px] rounded-full bg-yellow-400/10 blur-[120px] sm:h-[320px] sm:w-[320px]" />

        <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-orange-500/10 blur-[120px] sm:h-[320px] sm:w-[320px]" />

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-10 lg:pb-0 lg:pt-20">

          <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_0.75fr]">

            {/* ================= LEFT ================= */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center pb-4 text-center sm:items-start sm:text-left lg:pb-0"
            >

              {/* Badge */}
              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-2 backdrop-blur-xl sm:gap-3 sm:px-5">

                <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_#facc15]" />

                <p className="text-xs uppercase tracking-widest text-yellow-400">
                  PREMIUM FITNESS EXPERIENCE
                </p>
              </div>

              {/* ================= HEADING ================= */}
             <h1 className="max-w-full text-3xl font-black uppercase leading-none tracking-tight text-white sm:max-w-3xl sm:text-4xl md:text-5xl xl:text-6xl">

  PUSH
  <br />
  LIMITS.

  <span className="mt-2 block bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_45px_rgba(250,204,21,0.35)]">

    BUILD{" "}

    <br className="sm:hidden" />

    <span className="hidden sm:inline">&nbsp;</span>

    GREATNESS.
  </span>
</h1>

              {/* Small Premium Line */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:justify-start">

                <div className="h-px w-8 bg-yellow-400" />

                <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
                  ELITE TRANSFORMATION HUB
                </p>
              </div>

              {/* Description */}
              <p className="mt-5 max-w-full text-sm leading-relaxed text-gray-300 sm:max-w-md lg:text-base">
                Elite coaching, modern equipment, transformation programs,
                and premium workout experiences crafted to unlock your
                strongest version at MR WOW FITNESS.
              </p>

              {/* ================= BUTTONS ================= */}
              <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">

                {/* Main CTA */}
              <Link
  href="/joinnow"
  className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-8 py-3 text-sm font-bold uppercase tracking-[0.06em] text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(250,204,21,0.45)] active:scale-95 sm:w-auto"
>

  <span className="truncate">
    Join MR WOW
  </span>

  <ArrowRight className="h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
</Link>

                {/* Secondary */}
             <Link
  href="/onedaypass"
  className="flex min-h-12 w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] px-8 py-3 text-sm font-bold uppercase tracking-[0.06em] text-white backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/10 active:scale-95 sm:w-auto"
>
  Get 1-Day Pass
</Link>
              </div>
            </motion.div>

            {/* ================= RIGHT SIDE ================= */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:block"
            >

              {/* Glass Card */}
              <div className="absolute right-4 top-1/2 z-20 w-[168px] max-w-full -translate-y-1/2 rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-4 backdrop-blur-2xl">

                {/* Item */}
                <div className="flex flex-col items-center border-b border-white/10 pb-5 text-center">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/10">
                    <Users className="h-5 w-5 text-yellow-400" />
                  </div>

                  <h3 className="glow-yellow-text mt-3 text-2xl font-bold text-white">
                    500+
                  </h3>

                  <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                    Active Members
                  </p>
                </div>

                {/* Item */}
                <div className="flex flex-col items-center border-b border-white/10 py-5 text-center">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/10">
                    <HeartPulse className="h-5 w-5 text-yellow-400" />
                  </div>

                  <h3 className="glow-yellow-text mt-3 text-2xl font-bold text-white">
                    3K+
                  </h3>

                  <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                    Transformations
                  </p>
                </div>

                {/* Item */}
                <div className="flex flex-col items-center pt-5 text-center">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/10">
                    <ShieldCheck className="h-5 w-5 text-yellow-400" />
                  </div>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    PRO GYM
                  </h3>

                  <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                    Elite Training
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
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