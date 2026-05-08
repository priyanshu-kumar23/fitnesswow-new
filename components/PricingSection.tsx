"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Users,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

import { pricing } from "@/data/pricing";
import PricingCard from "./PricingCard";

const PricingSection = () => {
  return (
    <section className="relative  overflow-hidden bg-black py-24 text-white sm:py-24 lg:py-32 ">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">

        {/* Glow */}
        <div className="absolute left-[-120px] top-20 h-[320px] w-[320px] rounded-full bg-yellow-400/10 blur-[120px]" />

        <div className="absolute bottom-0 right-[-120px] h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[120px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= FOUNDER SECTION ================= */}
        <div className="mb-20 overflow-hidden rounded-[2.5rem] border border-yellow-400/10 bg-gradient-to-br from-[#0d0d0d] via-black to-[#050505] shadow-[0_0_80px_rgba(250,204,21,0.06)]">

          <div className="grid items-center lg:grid-cols-2">

            {/* ================= LEFT IMAGE SIDE ================= */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >

              {/* Glow */}
              <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-yellow-400/20 blur-[120px]" />

              <div className="relative p-5 sm:p-8 lg:p-10">

                {/* Main Image */}
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10">

                  <Image
                    src="/owner.jpg"
                    alt="Rahul Rao"
                    width={1000}
                    height={1200}
                    className="h-[420px] w-full object-cover object-top transition-transform duration-700 hover:scale-105 sm:h-[560px]"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  {/* Floating Card */}
                  <div className="absolute bottom-5 left-5 rounded-[1.8rem] border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-2xl">

                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-yellow-400">
                      Founder & Coach
                    </p>

                    <h3 className="mt-2 text-2xl font-black uppercase text-white">
                      Rahul Rao
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      MR WOW FITNESS
                    </p>
                  </div>

                  {/* Floating Followers */}
                  <div className="absolute right-5 top-5 rounded-2xl border border-yellow-400/20 bg-black/60 px-4 py-3 backdrop-blur-xl">

                    <p className="text-2xl font-black text-yellow-400">
                      44K+
                    </p>

                    <p className="text-[10px] uppercase tracking-[0.25em] text-gray-300">
                      Followers
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ================= RIGHT CONTENT ================= */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="px-5 pb-10 sm:px-8 lg:px-12 lg:pb-0"
            >

              {/* Badge */}
              <div className="inline-flex items-center gap-3 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-2 backdrop-blur-xl">

                <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_#facc15]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-yellow-300">
                  MEET THE FOUNDER
                </p>
              </div>

              {/* Heading */}
              <h2 className="mt-7 text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl">

                Rahul

                <span className="ml-3 bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Rao
                </span>
              </h2>

              {/* Sub */}
              <p className="mt-5 text-sm uppercase tracking-[0.25em] text-yellow-400 sm:text-base">
                Founder Of MR WOW FITNESS
              </p>

              {/* Description */}
              <p className="mt-8 text-base leading-relaxed text-gray-300 sm:text-lg">
                Rahul Rao built MR WOW FITNESS with a mission to create
                a premium transformation-focused gym where discipline,
                confidence, strength, and lifestyle transformation come together.
              </p>

              <p className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg">
                From elite workout programs and high-energy coaching
                to luxury interiors and modern equipment — every part
                of the gym is designed to push members toward their
                strongest version.
              </p>

              {/* Stats */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                {/* Followers */}
                <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/20 hover:bg-yellow-400/[0.04]">

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10">
                      <FaInstagram className="h-7 w-7 text-yellow-400" />
                    </div>

                    <div>
                      <h3 className="text-3xl font-black text-white">
                        44K+
                      </h3>

                      <p className="text-[10px] uppercase tracking-[0.22em] text-gray-400">
                        Instagram Followers
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trained Clients */}
                <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/20 hover:bg-yellow-400/[0.04]">

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10">
                      <Users className="h-7 w-7 text-yellow-400" />
                    </div>

                    <div>
                      <h3 className="text-3xl font-black text-white">
                        500+
                      </h3>

                      <p className="text-[10px] uppercase tracking-[0.22em] text-gray-400">
                        Trained 500+ Members
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-10 rounded-[2rem] border border-yellow-400/10 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 p-6 backdrop-blur-xl">

                <p className="text-base italic leading-relaxed text-gray-200 sm:text-lg">
                  “Fitness is not just about building muscles —
                  it’s about building confidence, discipline,
                  and becoming the strongest version of yourself.”
                </p>

                <div className="mt-5 flex items-center gap-3">

                  <BadgeCheck className="h-5 w-5 text-yellow-400" />

                  <p className="font-semibold uppercase tracking-[0.18em] text-yellow-300">
                    Rahul Rao
                  </p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://www.instagram.com/rahulrao0607?igsh=MWM2d3Z4emI5aGh3Zg%3D%3D"
                target="_blank"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-yellow-400 px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(250,204,21,0.45)] sm:text-sm"
              >
                Follow Rahul Rao

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* ================= PRICING CARDS ================= */}
      
      </div>
    </section>
  );
};

export default PricingSection;