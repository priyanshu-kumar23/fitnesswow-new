"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Dumbbell,
  Trophy,
  ShieldCheck,
  Clock3,
  User,
  Phone,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function JoinNowPage() {
  const features = [
    {
      icon: Dumbbell,
      title: "Elite Equipment",
      desc: "Imported premium machines",
    },
    {
      icon: Trophy,
      title: "Transformation",
      desc: "Result-driven fitness plans",
    },
    {
      icon: ShieldCheck,
      title: "Certified Trainers",
      desc: "Professional coaching support",
    },
    {
      icon: Clock3,
      title: "Flexible Timings",
      desc: "Workout anytime you want",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-black text-white">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">

        {/* Background Image */}
        <Image
          src="/bg.jpg"
          alt="MR WOW FITNESS"
          fill
          priority
          className="object-cover object-center opacity-20"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Glow */}
        <div className="absolute left-[-120px] top-20 h-[260px] w-[260px] rounded-full bg-yellow-400/10 blur-[120px] sm:h-[350px] sm:w-[350px]" />

        <div className="absolute bottom-0 right-[-120px] h-[260px] w-[260px] rounded-full bg-orange-500/10 blur-[120px] sm:h-[350px] sm:w-[350px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* ================= MAIN ================= */}
      <section className="relative z-10 px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-10 lg:pb-28 lg:pt-36">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 backdrop-blur-2xl sm:gap-3 sm:px-5">

              <Sparkles className="h-4 w-4 text-yellow-400" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-yellow-300 sm:text-xs sm:tracking-[0.32em]">
                PREMIUM FITNESS EXPERIENCE
              </p>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-[2.8rem] font-black uppercase leading-[0.92] sm:text-6xl lg:text-8xl">

              EVOLVE

              <span className="mt-2 block bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                STRONGER
              </span>

              <span className="mt-1 block text-white/90">
                EVERY DAY
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base lg:text-lg">
              Experience luxury fitness with elite trainers, premium
              equipment, transformation programs, and an atmosphere
              built to unlock your strongest version.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">

              {[
                { value: "5K+", label: "Members" },
                { value: "12+", label: "Trainers" },
                { value: "24/7", label: "Support" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-center backdrop-blur-2xl sm:p-4"
                >

                  <h3 className="text-xl font-black text-yellow-400 sm:text-3xl">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-gray-400 sm:mt-2 sm:text-xs sm:tracking-[0.22em]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">

              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.12,
                    }}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-4 backdrop-blur-2xl transition-all duration-500 hover:border-yellow-400/20 hover:bg-yellow-400/[0.05] sm:p-5"
                  >

                    {/* Glow */}
                    <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-yellow-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10 flex items-start gap-3 sm:gap-4">

                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-400/10 sm:h-12 sm:w-12">

                        <Icon className="h-5 w-5 text-yellow-400" />
                      </div>

                      <div>

                        <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-white sm:text-sm">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-[11px] leading-relaxed text-gray-400 sm:mt-2 sm:text-xs">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
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
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-3xl sm:rounded-[2.5rem] sm:p-8 lg:p-10">

              {/* Glow */}
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-yellow-400/10 blur-3xl sm:h-40 sm:w-40" />

              {/* Heading */}
              <div className="relative z-10 text-center">

                <p className="text-[9px] uppercase tracking-[0.26em] text-yellow-400 sm:text-xs sm:tracking-[0.32em]">
                  MEMBERSHIP ACCESS
                </p>

                <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
                  JOIN NOW
                </h2>

                <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-gray-400 sm:mt-4 sm:text-sm">
                  Fill out the form below and start your transformation journey today.
                </p>
              </div>

              {/* Form */}
              <form className="relative z-10 mt-7 space-y-4 sm:mt-8 sm:space-y-5">

                {[
                  {
                    icon: User,
                    placeholder: "Full Name",
                    type: "text",
                  },
                  {
                    icon: Phone,
                    placeholder: "Phone Number",
                    type: "tel",
                  },
                  {
                    icon: Mail,
                    placeholder: "Email Address",
                    type: "email",
                  },
                  {
                    icon: MapPin,
                    placeholder: "City",
                    type: "text",
                  },
                ].map((field, index) => {
                  const Icon = field.icon;

                  return (
                    <div key={index} className="relative">

                      <Icon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-yellow-400 sm:h-5 sm:w-5" />

                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="h-13 w-full rounded-2xl border border-white/10 bg-black/40 pl-11 pr-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-yellow-400/30 focus:bg-yellow-400/[0.03] sm:h-14 sm:pl-12"
                      />
                    </div>
                  );
                })}

                {/* Select */}
              <div className="relative">

  <select
    className="h-13 w-full appearance-none rounded-2xl border border-white/10 bg-black/40 px-4 pr-12 text-sm text-gray-300 outline-none transition-all duration-300 focus:border-yellow-400/30 focus:bg-yellow-400/[0.03] sm:h-14"
  >
    <option value="">Select Membership Plan</option>
    <option>1 Month Membership</option>
    <option>3 Months Membership</option>
    <option>6 Months Membership</option>
    <option>12 Months Membership</option>
  </select>

  {/* Custom Arrow */}
  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-yellow-400">
    ▼
  </div>
</div>

                {/* Button */}
                <button
                  type="submit"
                  className="group mt-2 flex h-13 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 text-[11px] font-black uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(250,204,21,0.35)] sm:h-14 sm:text-sm"
                >

                  START NOW

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}