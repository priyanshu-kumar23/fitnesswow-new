"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScroll";

const BMISection = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);

    const result = w / (h * h);

    setBmi(Number(result.toFixed(1)));
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div
          ref={ref}
          className={`glass reveal rounded-3xl p-5 sm:p-10 ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <h2 className="mb-6 text-center text-3xl font-bold sm:mb-8 lg:text-4xl">
            BMI Calculator
          </h2>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <input
              type="number"
              placeholder="Height (cm)"
              className="h-12 w-full rounded-xl border border-white/10 bg-black/40 p-4 text-base outline-none transition-colors focus:border-yellow-400/40 sm:h-14"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />

            <input
              type="number"
              placeholder="Weight (kg)"
              className="h-12 w-full rounded-xl border border-white/10 bg-black/40 p-4 text-base outline-none transition-colors focus:border-yellow-400/40 sm:h-14"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <button
            onClick={calculateBMI}
            className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-lime-400 px-8 font-bold text-black transition-transform duration-200 active:scale-95 sm:mt-8 sm:h-auto sm:w-auto sm:py-4"
          >
            Calculate BMI
          </button>

          {bmi && (
            <div className="mt-6 text-2xl font-bold sm:mt-8 sm:text-3xl">
              Your BMI: {bmi}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BMISection;