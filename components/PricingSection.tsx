"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Users,
  Award,
  Salad,
} from "lucide-react";

const achievements = [
  { icon: Award, label: "10+ Years Experience" },
  { icon: Users, label: "500+ Members Trained" },
  { icon: Salad, label: "Certified Nutrition Coach" },
];

const PricingSection = () => {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white lg:py-28">

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

              {/* Corner Badge */}
              <div className="absolute left-4 top-4 z-30 sm:left-8 sm:top-8 lg:left-10 lg:top-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-black shadow-lg shadow-black/40 sm:text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-black" />
                  MEET THE FOUNDER
                </div>
              </div>

              <div className="relative p-4 sm:p-6 lg:p-10">

                {/* Main Image */}
                <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 sm:rounded-[2rem]">

                  <Image
                    src="/owner.jpg"
                    alt="Rahul Yadav"
                    width={1000}
                    height={1200}
                    className="aspect-[3/4] w-full object-cover object-top transition-transform duration-700 hover:scale-105 sm:aspect-auto sm:h-[500px] lg:h-[620px]"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  {/* Floating Card */}
                  <div className="absolute bottom-4 left-4 rounded-[1.3rem] border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-2xl sm:bottom-5 sm:left-5 sm:rounded-[1.8rem] sm:px-5 sm:py-4">

                    <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-yellow-400 sm:text-[10px] sm:tracking-[0.3em]">
                      Founder & Coach
                    </p>

                    <h3 className="mt-1 text-xl font-black uppercase text-white sm:mt-2 sm:text-2xl">
                      Rahul Yadav
                    </h3>

                    <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                      MR WOW FITNESS
                    </p>
                  </div>

                  {/* Floating Followers */}
                  <div className="glow-yellow absolute right-3 top-3 rounded-2xl border border-yellow-400/20 bg-black/70 px-3 py-2 backdrop-blur-xl sm:right-5 sm:top-5 sm:px-4 sm:py-3">

                    <p className="text-lg font-black text-yellow-400 sm:text-2xl">
                      44K+
                    </p>

                    <p className="whitespace-nowrap text-[7px] uppercase tracking-[0.18em] text-gray-300 sm:text-[10px] sm:tracking-[0.25em]">
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

              {/* Eyebrow */}
              <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
                THE VISION BEHIND THE GYM
              </p>

              {/* Heading */}
              <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl lg:text-5xl">
                RAHUL
                <span className="ml-2 text-yellow-400 sm:ml-3">
                  YADAV
                </span>
              </h2>

              {/* Sub */}
              <p className="mt-4 text-xs uppercase tracking-widest text-gray-400">
                Founder &amp; Head Coach &middot; MR WOW FITNESS
              </p>

              {/* Divider */}
              <div className="mt-6 h-[2px] w-16 bg-yellow-400" />

              {/* Description */}
              <div className="mt-6 border-l-2 border-yellow-400/70 pl-4 sm:mt-8 sm:border-l-0 sm:pl-0">
                <p className="text-sm leading-relaxed text-gray-300 lg:text-base">
                  Rahul Yadav built MR WOW FITNESS with a mission to create
                  a premium transformation-focused gym where discipline,
                  confidence, strength, and lifestyle transformation come together.
                </p>

                <p className="mt-5 text-sm leading-relaxed text-gray-400 lg:text-base">
                  From elite workout programs and high-energy coaching
                  to luxury interiors and modern equipment — every part
                  of the gym is designed to push members toward their
                  strongest version.
                </p>
              </div>

              {/* Achievement Badges */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-3">
                {achievements.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/20 hover:bg-yellow-400/[0.04]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10">
                      <item.icon className="h-4 w-4 text-yellow-400" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-200">
                      {item.label}
                    </p>
                  </div>
                ))}
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
                    Rahul Yadav
                  </p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://www.instagram.com/rahulrao0607?igsh=MWM2d3Z4emI5aGh3Zg%3D%3D"
                target="_blank"
                className="group mt-8 flex h-12 w-full items-center justify-center gap-3 rounded-full bg-yellow-400 px-6 text-[10px] font-black uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(250,204,21,0.45)] active:scale-95 sm:mt-10 sm:h-14 sm:w-auto sm:px-8 sm:text-sm"
              >
                Follow Rahul Yadav

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