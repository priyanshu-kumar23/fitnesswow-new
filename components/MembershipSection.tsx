"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Starter",
    price: "₹1,499",
    features: [
      "Unlimited Gym Access",
      "Cardio Zone Access",
      "Locker Facility",
      "Free Fitness Assessment",
    ],
  },
  {
    title: "Pro",
    price: "₹2,999",
    popular: true,
    features: [
      "All Starter Features",
      "Personal Trainer",
      "Diet & Nutrition Plan",
      "Group Workout Classes",
      "Steam & Shower Access",
    ],
  },
  {
    title: "Elite",
    price: "₹5,499",
    features: [
      "All Pro Features",
      "1-on-1 Elite Coaching",
      "Custom Workout Program",
      "Priority Support",
    ],
  },
];

const MembershipSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-20 text-white lg:py-28">

      {/* Background Glow */}
      <div className="absolute left-[-120px] top-20 h-[280px] w-[280px] rounded-full bg-yellow-400/10 blur-[120px]" />

      <div className="absolute bottom-0 right-[-120px] h-[280px] w-[280px] rounded-full bg-orange-500/10 blur-[120px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
            MEMBERSHIP
          </p>

          <h2 className="mt-3 text-3xl font-black uppercase leading-[1.1] sm:text-4xl lg:text-5xl">
            CHOOSE YOUR
            <br />
            <span className="text-yellow-400">TRANSFORMATION</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-relaxed text-gray-300 lg:text-base">
            Simple, transparent plans built around your goals — no
            long-term lock-in, no hidden fees.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl border bg-zinc-900 p-8 transition-all duration-300 ease-out ${
                plan.popular
                  ? "border-2 border-yellow-400 shadow-[0_0_60px_rgba(250,204,21,0.12)]"
                  : "border-white/5 hover:border-white/15"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-yellow-400 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-black">
                  MOST POPULAR
                </div>
              )}

              <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
                {plan.title}
              </p>

              <div className="mt-5 flex items-end">
                <h3 className="text-5xl font-black text-white">
                  {plan.price}
                </h3>
                <span className="ml-2 pb-1 text-sm text-gray-400">/month</span>
              </div>

              <div className="mt-7 h-px w-full bg-white/10" />

              <div className="mt-7 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-yellow-400/10">
                      <Check className="h-3.5 w-3.5 text-yellow-400" />
                    </span>
                    <p className="text-sm text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/joinnow"
                className={`mt-10 flex h-14 w-full items-center justify-center rounded-2xl text-sm font-black uppercase tracking-[0.1em] transition-all duration-300 ease-out active:scale-95 ${
                  plan.popular
                    ? "bg-yellow-400 text-black hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(250,204,21,0.35)]"
                    : "border border-white/10 bg-white/[0.05] text-white hover:border-yellow-400/30 hover:bg-yellow-400/10"
                }`}
              >
                Join Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
