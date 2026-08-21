"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    name: "Rohit Yadav",
    location: "Greater Noida",
    result: "Muscle Gain & Strength",
    review:
      "Training at MR WOW FITNESS completely changed my lifestyle. Rahul Sir personally guided me with workouts and discipline. The environment is energetic, premium, and highly motivating.",
  },

  {
    name: "Vasu Thakur",
    location: "Noida Extension",
    result: "Lost 10 KG Naturally",
    review:
      "One of the best gyms in Greater Noida. The trainers are supportive, equipment is top-class, and Rahul Sir ensures everyone stays motivated throughout their fitness journey.",
  },

  {
    name: "Arjun Singh",
    location: "Greater Noida West",
    result: "Confidence Boosted",
    review:
      "MR WOW FITNESS has an amazing atmosphere with modern machines and positive energy. Rahul and his team helped me improve my physique and confidence within months.",
  },
];

const TestimonialsSection = () => {
  return (
    <>
      {/* ================= TESTIMONIALS ================= */}
      <section className="relative overflow-hidden bg-[#050505] py-16 text-white sm:py-24 lg:py-28">

        {/* Background Glow */}
        <div className="absolute left-[-120px] top-20 h-[260px] w-[260px] rounded-full bg-yellow-400/10 blur-[120px] sm:h-[320px] sm:w-[320px]" />

        <div className="absolute bottom-0 right-[-120px] h-[260px] w-[260px] rounded-full bg-orange-500/10 blur-[120px] sm:h-[320px] sm:w-[320px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* ================= HEADING ================= */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 backdrop-blur-xl sm:gap-3 sm:px-5">

              <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_#facc15]" />

              <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
                SUCCESS STORIES
              </p>
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-3xl font-bold uppercase leading-[1] sm:text-4xl lg:text-4xl">

              REAL RESULTS,

              <span className="mt-2 block bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                REAL TRANSFORMATIONS
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-gray-300 sm:mt-6 lg:text-base">
              MR WOW FITNESS and Rahul Yadav are helping people transform
              their strength, confidence, and lifestyle through elite
              training, premium equipment, and powerful motivation.
            </p>
          </motion.div>

          {/* ================= MOBILE SCROLL / DESKTOP GRID ================= */}
          <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-hide sm:mt-14 sm:grid sm:overflow-visible lg:grid-cols-3">

            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}

                initial={{
                  opacity: 0,
                  x: -60,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                }}

                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                }}

                viewport={{ once: true }}

                className="group relative min-w-[88%] snap-center overflow-hidden rounded-[1.8rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/20 hover:shadow-[0_0_45px_rgba(250,204,21,0.08)] sm:min-w-0 sm:p-7"
              >

                {/* Glow */}
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Stars */}
                <div className="flex items-center gap-1">

                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400 sm:h-5 sm:w-5"
                    />
                  ))}
                </div>

                {/* Quote Icon */}
                <div className="absolute right-5 top-5 opacity-20 sm:right-6 sm:top-6">

                  <Quote className="h-10 w-10 text-yellow-400 sm:h-12 sm:w-12" />
                </div>

                {/* Review */}
                <p className="mt-6 text-sm leading-relaxed text-gray-300 sm:mt-8 lg:text-base">
                  {testimonial.review}
                </p>

                {/* Bottom */}
                <div className="mt-8 border-t border-white/10 pt-5 sm:mt-10 sm:pt-6">

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {testimonial.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-400">
                        {testimonial.location}
                      </p>
                    </div>

                    <div className="w-fit rounded-full border border-yellow-400/10 bg-yellow-400/10 px-4 py-2">

                      <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-yellow-300 sm:text-xs sm:tracking-[0.18em]">
                        {testimonial.result}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Border */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-500 via-orange-500 to-yellow-400 py-16 text-black sm:py-24 lg:py-28">

        {/* Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,0,0,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.12)_1px,transparent_1px)] bg-[size:55px_55px]" />

        {/* Glow */}
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/20 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-black/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/10 px-4 py-2 backdrop-blur-xl sm:gap-3 sm:px-5">

            <span className="h-2 w-2 rounded-full bg-black" />

            <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-black sm:text-xs sm:tracking-[0.28em]">
              JOIN MR WOW FITNESS
            </p>
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-6 text-3xl font-bold uppercase leading-[1] sm:mt-7 sm:text-4xl lg:text-4xl"
          >
            BUILD YOUR
            <span className="block">
              STRONGEST VERSION
            </span>
          </motion.h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-black/80 sm:mt-7 lg:text-base">
            Train with Rahul Yadav at MR WOW FITNESS and experience
            world-class equipment, expert guidance, premium workout
            spaces, and real transformation results.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row">

            {/* Primary */}
            <button className="group flex h-12 w-full items-center justify-center gap-3 rounded-full bg-black px-6 text-[10px] font-black uppercase tracking-[0.16em] text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#050505] hover:shadow-[0_0_40px_rgba(0,0,0,0.25)] active:scale-95 sm:h-auto sm:w-auto sm:px-10 sm:py-4 sm:text-base">

              Join Now

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary */}
            <button className="flex h-12 w-full items-center justify-center rounded-full border-2 border-black bg-transparent px-6 text-[10px] font-black uppercase tracking-[0.16em] text-black transition-all duration-300 hover:bg-black hover:text-white active:scale-95 sm:h-auto sm:w-auto sm:px-10 sm:py-4 sm:text-base">
              Explore Programs
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;