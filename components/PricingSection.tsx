"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Users,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

const PricingSection = () => {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white sm:py-24 lg:py-32">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">

        {/* Glow */}
        <div className="absolute left-[-120px] top-20 h-[260px] w-[260px] rounded-full bg-yellow-400/10 blur-[120px] sm:h-[320px] sm:w-[320px]" />

        <div className="absolute bottom-0 right-[-120px] h-[260px] w-[260px] rounded-full bg-orange-500/10 blur-[120px] sm:h-[320px] sm:w-[320px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= FOUNDER SECTION ================= */}
        <div className="overflow-hidden rounded-[2rem] border border-yellow-400/10 bg-gradient-to-br from-[#0d0d0d] via-black to-[#050505] shadow-[0_0_80px_rgba(250,204,21,0.06)] sm:rounded-[2.5rem]">

          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-0">

            {/* ================= LEFT IMAGE SIDE ================= */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >

              {/* Glow */}
              <div className="absolute left-10 top-10 h-52 w-52 rounded-full bg-yellow-400/20 blur-[120px] sm:h-64 sm:w-64" />

              <div className="relative p-4 sm:p-6 lg:p-10">

                {/* Main Image */}
                <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 sm:rounded-[2rem]">

                  <Image
                    src="/owner.jpg"
                    alt="Rahul Rao"
                    width={1000}
                    height={1200}
                    className="h-[320px] w-full object-cover object-top transition-transform duration-700 hover:scale-105 sm:h-[500px] lg:h-[620px]"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  {/* Floating Card */}
                  <div className="absolute bottom-4 left-4 rounded-[1.3rem] border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-2xl sm:bottom-5 sm:left-5 sm:rounded-[1.8rem] sm:px-5 sm:py-4">

                    <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-yellow-400 sm:text-[10px] sm:tracking-[0.3em]">
                      Founder & Coach
                    </p>

                    <h3 className="mt-1 text-xl font-black uppercase text-white sm:mt-2 sm:text-2xl">
                      Rahul Rao
                    </h3>

                    <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                      MR WOW FITNESS
                    </p>
                  </div>

                  {/* Floating Followers */}
                  <div className="absolute right-4 top-4 rounded-2xl border border-yellow-400/20 bg-black/60 px-3 py-2 backdrop-blur-xl sm:right-5 sm:top-5 sm:px-4 sm:py-3">

                    <p className="text-xl font-black text-yellow-400 sm:text-2xl">
                      44K+
                    </p>

                    <p className="text-[8px] uppercase tracking-[0.2em] text-gray-300 sm:text-[10px] sm:tracking-[0.25em]">
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
              className="px-4 pb-8 sm:px-8 lg:px-12 lg:pb-0"
            >

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 backdrop-blur-xl sm:gap-3 sm:px-5">

                <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_#facc15]" />

                <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-yellow-300 sm:text-[10px] sm:tracking-[0.28em]">
                  MEET THE FOUNDER
                </p>
              </div>

              {/* Heading */}
              <h2 className="mt-6 text-3xl font-black uppercase leading-none sm:text-5xl lg:text-6xl">

                Rahul

                <span className="ml-2 bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent sm:ml-3">
                  Rao
                </span>
              </h2>

              {/* Sub */}
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-yellow-400 sm:text-base sm:tracking-[0.25em]">
                Founder Of MR WOW FITNESS
              </p>

              {/* Description */}
              <p className="mt-6 text-sm leading-relaxed text-gray-300 sm:mt-8 sm:text-base lg:text-lg">
                Rahul Rao built MR WOW FITNESS with a mission to create
                a premium transformation-focused gym where discipline,
                confidence, strength, and lifestyle transformation come together.
              </p>

              <p className="mt-5 text-sm leading-relaxed text-gray-400 sm:mt-6 sm:text-base lg:text-lg">
                From elite workout programs and high-energy coaching
                to luxury interiors and modern equipment — every part
                of the gym is designed to push members toward their
                strongest version.
              </p>

              {/* Stats */}
              <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">

                {/* Followers */}
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/20 hover:bg-yellow-400/[0.04] sm:rounded-[1.8rem] sm:p-5">

                  <div className="flex items-center gap-3 sm:gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10 sm:h-14 sm:w-14">
                      <FaInstagram className="h-6 w-6 text-yellow-400 sm:h-7 sm:w-7" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-white sm:text-3xl">
                        44K+
                      </h3>

                      <p className="text-[8px] uppercase tracking-[0.18em] text-gray-400 sm:text-[10px] sm:tracking-[0.22em]">
                        Instagram Followers
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trained Clients */}
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/20 hover:bg-yellow-400/[0.04] sm:rounded-[1.8rem] sm:p-5">

                  <div className="flex items-center gap-3 sm:gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10 sm:h-14 sm:w-14">
                      <Users className="h-6 w-6 text-yellow-400 sm:h-7 sm:w-7" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-white sm:text-3xl">
                        500+
                      </h3>

                      <p className="text-[8px] uppercase tracking-[0.18em] text-gray-400 sm:text-[10px] sm:tracking-[0.22em]">
                        Trained Members
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-8 rounded-[1.8rem] border border-yellow-400/10 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 p-5 backdrop-blur-xl sm:mt-10 sm:rounded-[2rem] sm:p-6">

                <p className="text-sm italic leading-relaxed text-gray-200 sm:text-base lg:text-lg">
                  “Fitness is not just about building muscles —
                  it’s about building confidence, discipline,
                  and becoming the strongest version of yourself.”
                </p>

                <div className="mt-5 flex items-center gap-3">

                  <BadgeCheck className="h-5 w-5 text-yellow-400" />

                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-yellow-300 sm:tracking-[0.18em]">
                    Rahul Rao
                  </p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://www.instagram.com/rahulrao0607?igsh=MWM2d3Z4emI5aGh3Zg%3D%3D"
                target="_blank"
                className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-yellow-400 px-6 py-4 text-[10px] font-black uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(250,204,21,0.45)] sm:mt-10 sm:w-auto sm:px-8 sm:text-sm"
              >
                Follow Rahul Rao

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;