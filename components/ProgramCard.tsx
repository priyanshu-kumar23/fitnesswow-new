"use client";

import { motion } from "framer-motion";

const ProgramCard = ({ program }: any) => {
  const Icon = program.icon;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass rounded-3xl p-8 transition"
    >
      <Icon className="mb-6 h-12 w-12 text-lime-400" />

      <h3 className="mb-4 text-2xl font-bold">
        {program.title}
      </h3>

      <p className="mb-6 text-gray-400">
        {program.description}
      </p>

      <button className="font-semibold text-lime-400">
        Learn More →
      </button>
    </motion.div>
  );
};

export default ProgramCard;