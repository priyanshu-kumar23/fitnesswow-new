"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white sm:py-24 lg:py-28">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">

        {/* Glow */}
        <div className="absolute left-[-120px] top-10 h-[320px] w-[320px] rounded-full bg-yellow-400/10 blur-[120px]" />

        <div className="absolute bottom-0 right-[-120px] h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-[120px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* ================= TOP LABELS ================= */}
        <div className="mb-10 grid gap-8 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="flex items-center gap-4">

              <div className="h-14 w-[2px] bg-yellow-400 sm:h-16" />

              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-gray-400 sm:text-sm">
                  Overview Intro
                </p>

                <h2 className="mt-2 text-3xl font-black uppercase leading-none text-yellow-400 sm:text-5xl">
                  Our Story
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:pl-16"
          >

            <div className="flex items-center gap-4">

              <div className="h-14 w-[2px] bg-yellow-400 sm:h-16" />

              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-gray-400 sm:text-sm">
                  About Us
                </p>

                <h2 className="mt-2 text-3xl font-black uppercase leading-none sm:text-5xl">
                  WHO WE ARE
                </h2>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* ================= IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative order-1"
          >

            {/* Top Decorative Image */}
            <div className="absolute -top-12 right-4 z-20 hidden overflow-hidden rounded-b-[2rem] border border-yellow-400/10 bg-black/40 backdrop-blur-xl lg:block">

              <Image
                src="/logo.png"
                alt="gym"
                width={220}
                height={280}
                className="object-cover"
              />
            </div>

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[2rem] border border-yellow-400/10 bg-white/5 p-3 backdrop-blur-xl">

              {/* Glow */}
              <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl" />

              <Image
                src="/about11.webp"
                alt="MR WOW FITNESS"
                width={800}
                height={800}
                className="h-[340px] w-full rounded-[1.5rem] object-cover sm:h-[420px] lg:h-[520px]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 rounded-2xl border border-yellow-400/20 bg-black/60 px-5 py-4 backdrop-blur-2xl">

                <p className="text-[10px] uppercase tracking-[0.25em] text-yellow-400">
                  Premium Fitness
                </p>

                <h3 className="mt-2 text-xl font-black uppercase text-white sm:text-2xl">
                  MR WOW FITNESS
                </h3>
              </div>
            </div>
          </motion.div>

          {/* ================= CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:pl-10"
          >

            {/* Paragraph */}
            <p className="text-sm leading-relaxed text-gray-300 sm:text-base lg:text-lg">
              At MR WOW FITNESS, we’re passionate about empowering people
              to transform their bodies, mindset, and lifestyle through
              premium fitness experiences and elite training programs.
            </p>

            <p className="mt-6 text-sm leading-relaxed text-gray-400 sm:text-base lg:text-lg">
              Our gym combines modern equipment, certified trainers,
              high-energy workouts, and a motivating atmosphere designed
              to help you push beyond your limits and unlock your best version.
            </p>

            {/* Mission */}
            <div className="mt-10">

              <h3 className="text-2xl font-black uppercase text-yellow-400 sm:text-3xl">
                Our Mission
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-gray-400 sm:text-base lg:text-lg">
                Our mission is simple — to inspire discipline,
                confidence, strength, and consistency through world-class
                fitness coaching and a premium workout environment.
              </p>
            </div>

            {/* ================= FEATURE CARDS ================= */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">

              {[
                "24/7 Elite Access",
                "Certified Coaches",
                "Luxury Workout Space",
                "Modern Equipment",
              ].map((item, index) => (
                <div
                  key={item}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] px-4 py-5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-yellow-400/[0.05] sm:px-5"
                >

                  {/* Hover Glow */}
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-yellow-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Animated Top Border */}
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 group-hover:w-full" />

                  {/* Content */}
                  <div className="relative z-10 flex items-center gap-3">

                    {/* Number */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/10 text-sm font-black text-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.15)]">

                      0{index + 1}
                    </div>

                    {/* Text */}
                    <div>

                      <p className="text-sm font-bold uppercase tracking-[0.12em] text-white sm:text-[15px]">
                        {item}
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        Premium fitness experience
                      </p>
                    </div>
                  </div>

                  {/* Bottom Glow */}
                  <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              ))}
            </div>

            {/* Button */}
            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-yellow-400 px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(250,204,21,0.4)] sm:px-8 sm:text-sm"
            >

              Read More

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;