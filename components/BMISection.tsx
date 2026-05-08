"use client";

import { useState } from "react";

const BMISection = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);

    const result = w / (h * h);

    setBmi(Number(result.toFixed(1)));
  };

  return (
    <section className="py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="glass rounded-3xl p-10">
          <h2 className="mb-8 text-center text-5xl font-black">
            BMI Calculator
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="number"
              placeholder="Height (cm)"
              className="rounded-xl border border-white/10 bg-black/40 p-4"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />

            <input
              type="number"
              placeholder="Weight (kg)"
              className="rounded-xl border border-white/10 bg-black/40 p-4"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <button
            onClick={calculateBMI}
            className="mt-8 rounded-full bg-gradient-to-r from-purple-600 to-lime-400 px-8 py-4 font-bold text-black"
          >
            Calculate BMI
          </button>

          {bmi && (
            <div className="mt-8 text-3xl font-bold">
              Your BMI: {bmi}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BMISection;