"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const AboutSection = () => {
  /* ================= CAROUSEL IMAGES ================= */
  const images = [
    "/about11.webp",
    "/gym.jpg",
    "/bg.jpg",
    "/treadmill.webp",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative overflow-hidden bg-black py-20 text-white lg:py-28">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">

        {/* Glow */}
        <div className="absolute left-[-120px] top-10 h-[280px] w-[280px] rounded-full bg-yellow-400/10 blur-[120px] sm:h-[320px] sm:w-[320px]" />

        <div className="absolute bottom-0 right-[-120px] h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-[120px] sm:h-[350px] sm:w-[350px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* ================= TOP HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14"
        >

          <div className="flex items-center gap-4">

            <div className="h-14 w-[2px] bg-yellow-400 sm:h-16" />

            <div>

              <p className="text-xs uppercase tracking-widest text-yellow-400">
                About Us
              </p>

              <h2 className="mt-2 text-3xl font-black uppercase leading-none text-yellow-400 sm:text-4xl lg:text-5xl">
                WHO WE ARE
              </h2>
            </div>
          </div>
        </motion.div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* ================= IMAGE SECTION ================= */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* Logo Card Desktop */}
            <div className="absolute -top-10 right-4 z-20 hidden overflow-hidden rounded-b-[2rem] border border-yellow-400/10 bg-black/40 backdrop-blur-xl lg:block">

              <Image
                src="/logo.png"
                alt="MR WOW FITNESS"
                width={180}
                height={240}
                className="object-cover"
              />
            </div>

            {/* Main Wrapper */}
            <div className="relative overflow-hidden rounded-[2rem] border border-yellow-400/10 bg-white/[0.04] p-3 backdrop-blur-xl">

              {/* Glow */}
              <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl" />

              {/* Carousel */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] sm:aspect-auto sm:h-[420px] lg:h-[520px]">

                {images.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt="MR WOW FITNESS"
                    fill
                    priority
                    className={`absolute inset-0 object-cover transition-all duration-1000 ${
                      currentImage === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  />
                ))}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Card */}
              <div className="absolute bottom-4 left-4 rounded-2xl border border-yellow-400/20 bg-black/60 px-4 py-3 backdrop-blur-2xl sm:bottom-6 sm:left-6 sm:px-5 sm:py-4">

                <p className="text-[9px] uppercase tracking-[0.25em] text-yellow-400 sm:text-[10px]">
                  Premium Fitness
                </p>

                <h3 className="mt-1 text-lg font-black uppercase text-white sm:text-2xl">
                  MR WOW FITNESS
                </h3>
              </div>

              {/* Dots */}
              <div className="absolute bottom-5 right-5 flex items-center gap-2">

                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentImage === index
                        ? "w-8 bg-yellow-400"
                        : "w-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* ================= CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            {/* Intro */}
            <div className="border-l-2 border-yellow-400/70 pl-4 sm:border-l-0 sm:pl-0">
              <p className="text-sm leading-relaxed text-gray-300 lg:text-base">
                At MR WOW FITNESS, we’re passionate about empowering people
                to transform their bodies, mindset, and lifestyle through
                premium fitness experiences and elite training programs.
              </p>

              <p className="mt-5 text-sm leading-relaxed text-gray-300 sm:mt-6 lg:text-base">
                Our gym combines modern equipment, certified trainers,
                high-energy workouts, and a motivating atmosphere designed
                to help you push beyond your limits and unlock your best version.
              </p>
            </div>

            {/* Mission */}
            <div className="mt-8 sm:mt-10">

              <h3 className="text-xl font-semibold uppercase text-yellow-400 lg:text-2xl">
                Our Mission
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:mt-5 lg:text-base">
                Our mission is simple — to inspire discipline,
                confidence, strength, and consistency through world-class
                fitness coaching and a premium workout environment.
              </p>
            </div>

            {/* ================= FEATURE CARDS ================= */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {[
                "Open 6AM – 12AM",
                "Certified Coaches",
                "Luxury Workout Space",
                "Modern Equipment",
              ].map((item, index) => (
                <div
                  key={item}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] px-4 py-5 backdrop-blur-2xl transition-all duration-500 hover:border-yellow-400/30 hover:bg-yellow-400/[0.05] sm:px-5"
                >

                  {/* Glow */}
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-yellow-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Top Border */}
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
                </div>
              ))}
            </div>

            {/* Button */}
            <Link
              href="/about"
              className="group mt-8 flex h-12 w-full items-center justify-center gap-3 rounded-full bg-yellow-400 px-7 text-[11px] font-black uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(250,204,21,0.4)] active:scale-95 sm:mt-10 sm:h-auto sm:w-auto sm:px-8 sm:py-4 sm:text-sm"
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