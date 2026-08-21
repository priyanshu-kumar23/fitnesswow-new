"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Sparkles,
  Ticket,
  ChevronDown,
} from "lucide-react";

export default function OneDayPassPage() {
  const benefits = [
    "Full Gym Access",
    "Premium Equipment",
    "Locker Facility",
    "Cardio + Strength Zone",
    "Trainer Assistance",
    "Clean & Luxury Environment",
  ];

  return (
    <main className="relative overflow-hidden bg-black text-white">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">

        {/* Background Image */}
        <Image
          src="/bg.jpg"
          alt="1 Day Pass"
          fill
          priority
          className="object-cover object-center opacity-20"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Glow */}
        <div className="absolute left-[-100px] top-20 h-[260px] w-[260px] rounded-full bg-yellow-400/10 blur-[120px] sm:h-[320px] sm:w-[320px]" />

        <div className="absolute bottom-0 right-[-100px] h-[260px] w-[260px] rounded-full bg-orange-500/10 blur-[120px] sm:h-[320px] sm:w-[320px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* ================= CONTENT ================= */}
      <section className="relative z-10 overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-10 lg:pb-28 lg:pt-36">

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-14">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 backdrop-blur-2xl sm:gap-3 sm:px-5">

              <Sparkles className="h-4 w-4 text-yellow-400" />

              <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
                EXPERIENCE MR WOW FITNESS
              </p>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-3xl font-black uppercase leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl lg:text-7xl">

              CLAIM YOUR

              <span className="mt-2 block bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                1 DAY PASS
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base lg:text-lg">
              Try the ultimate premium gym experience with a complimentary
              1-Day Pass at MR WOW FITNESS. Train with world-class equipment,
              elite trainers, and a high-energy luxury atmosphere.
            </p>

            {/* Price Card */}
            <div className="mt-8 flex w-full max-w-sm items-center gap-4 rounded-3xl border border-yellow-400/20 bg-white/[0.04] px-5 py-4 backdrop-blur-2xl sm:w-auto sm:px-6 sm:py-5">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10 sm:h-14 sm:w-14">

                <Ticket className="h-5 w-5 text-yellow-400 sm:h-6 sm:w-6" />
              </div>

              <div>

                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 sm:text-xs">
                  One Day Access
                </p>

                <h2 className="mt-1 text-3xl font-black text-yellow-400 sm:text-4xl">
                  FREE
                </h2>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">

              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-2xl transition-all duration-300 hover:border-yellow-400/20 hover:bg-yellow-400/[0.05] sm:p-5"
                >

                  {/* Glow */}
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-yellow-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex items-center gap-3">

                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-yellow-400" />

                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white sm:text-sm">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ================= FORM ================= */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            {/* Glow */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-3xl" />

            {/* Card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 backdrop-blur-3xl sm:p-8 lg:p-10">

              {/* Glow */}
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-yellow-400/10 blur-3xl sm:h-40 sm:w-40" />

              {/* Heading */}
              <div className="relative z-10 text-center">

                <p className="text-xs uppercase tracking-widest text-yellow-400">
                  GET YOUR PASS
                </p>

                <h2 className="mt-3 text-3xl font-bold uppercase sm:text-4xl lg:text-4xl">
                  BOOK NOW
                </h2>

                <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-gray-400 sm:mt-4 sm:text-sm">
                  Fill your details below and get instant access to MR WOW FITNESS.
                </p>
              </div>

              {/* Form */}
              <form className="relative z-10 mt-7 space-y-4 sm:mt-8 sm:space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-12 sm:h-14 w-full rounded-2xl border border-white/10 bg-black/40 px-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-yellow-400/30"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-12 sm:h-14 w-full rounded-2xl border border-white/10 bg-black/40 px-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-yellow-400/30"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-12 sm:h-14 w-full rounded-2xl border border-white/10 bg-black/40 px-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-yellow-400/30"
                />

                {/* Select */}
                <div className="relative">

                  <select className="h-12 sm:h-14 w-full appearance-none rounded-2xl border border-white/10 bg-black/70 px-5 pr-12 text-sm text-white outline-none transition-all duration-300 focus:border-yellow-400/30">

                    <option>Select Visit Time</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>

                  {/* Arrow */}
                  <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-yellow-400">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="group flex h-12 sm:h-14 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 text-[11px] font-black uppercase tracking-[0.16em] text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(250,204,21,0.35)] active:scale-95 sm:text-sm"
                >

                  CLAIM PASS

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
                </button>
              </form>

              {/* Small Note */}
              <div className="mt-5 flex items-center justify-center gap-2 text-center sm:mt-6">

                <Clock3 className="h-4 w-4 text-yellow-400" />

                <p className="text-[10px] uppercase tracking-[0.16em] text-gray-400 sm:text-[11px] sm:tracking-[0.18em]">
                  Limited Slots Available
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}