"use client";

import { motion } from "framer-motion";

const PricingCard = ({ plan }: any) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass relative rounded-3xl p-10"
    >
      {plan.popular && (
        <div className="absolute right-5 top-5 rounded-full bg-lime-400 px-4 py-1 text-sm font-bold text-black">
          Popular
        </div>
      )}

      <h3 className="mb-4 text-3xl font-bold">
        {plan.title}
      </h3>

      <h2 className="mb-8 text-5xl font-black">
        {plan.price}
      </h2>

      <ul className="space-y-4">
        {plan.features.map((feature: string) => (
          <li key={feature}>
            ✓ {feature}
          </li>
        ))}
      </ul>

      <button className="mt-10 w-full rounded-full bg-gradient-to-r from-purple-600 to-lime-400 py-4 font-bold text-black">
        Choose Plan
      </button>
    </motion.div>
  );
};

export default PricingCard;