"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Leaf,
  Beef,
  Info,
  Utensils,
  Apple,
  UtensilsCrossed,
  Zap,
  Dumbbell,
  Moon,
  type LucideIcon,
} from "lucide-react";

/* ================= TYPES ================= */
type Meal = {
  label: string;
  time: string;
  text: string;
  calories: number;
};

type DayPlan = Meal[];

type DietType = "veg" | "nonveg";

/* ================= ICON MAP ================= */
const mealIconMap: Record<string, LucideIcon> = {
  Breakfast: Utensils,
  "Mid-Morning Snack": Apple,
  Lunch: UtensilsCrossed,
  "Pre-Workout": Zap,
  "Post-Workout / Dinner": Dumbbell,
  Bedtime: Moon,
};

/* ================= DATA ================= */
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

const vegPlan: Record<(typeof days)[number], DayPlan> = {
  Monday: [
    { label: "Breakfast", time: "7:00 AM", text: "Oats with banana, almonds & whey protein shake", calories: 450 },
    { label: "Mid-Morning Snack", time: "10:30 AM", text: "Mixed fruits + Greek yogurt", calories: 200 },
    { label: "Lunch", time: "1:00 PM", text: "Brown rice + dal + paneer sabzi + salad", calories: 650 },
    { label: "Pre-Workout", time: "4:00 - 5:00 PM", text: "Banana + black coffee", calories: 120 },
    { label: "Post-Workout / Dinner", time: "8:00 PM", text: "Whey protein shake + baked sweet potato", calories: 350 },
    { label: "Bedtime", time: "10:00 PM", text: "Paneer cubes + warm turmeric milk", calories: 150 },
  ],
  Tuesday: [
    { label: "Breakfast", time: "7:00 AM", text: "Vegetable poha with peanuts + boiled sprouts", calories: 420 },
    { label: "Mid-Morning Snack", time: "10:30 AM", text: "Apple + a handful of walnuts", calories: 180 },
    { label: "Lunch", time: "1:00 PM", text: "Quinoa + rajma + mixed veg salad", calories: 600 },
    { label: "Pre-Workout", time: "4:00 - 5:00 PM", text: "Dates + black coffee", calories: 130 },
    { label: "Post-Workout / Dinner", time: "8:00 PM", text: "Whey shake + roti + paneer bhurji", calories: 500 },
    { label: "Bedtime", time: "10:00 PM", text: "Warm milk with a pinch of turmeric", calories: 100 },
  ],
  Wednesday: [
    { label: "Breakfast", time: "7:00 AM", text: "Moong dal chilla + curd + whey protein shake", calories: 430 },
    { label: "Mid-Morning Snack", time: "10:30 AM", text: "Roasted chana + banana", calories: 200 },
    { label: "Lunch", time: "1:00 PM", text: "Brown rice + chole + cucumber salad", calories: 640 },
    { label: "Pre-Workout", time: "4:00 - 5:00 PM", text: "Banana + green tea", calories: 110 },
    { label: "Post-Workout / Dinner", time: "8:00 PM", text: "Whey protein + tofu stir fry", calories: 400 },
    { label: "Bedtime", time: "10:00 PM", text: "Paneer cubes", calories: 120 },
  ],
  Thursday: [
    { label: "Breakfast", time: "7:00 AM", text: "Oats idli + sambar + whey protein shake", calories: 440 },
    { label: "Mid-Morning Snack", time: "10:30 AM", text: "Greek yogurt + mixed berries", calories: 190 },
    { label: "Lunch", time: "1:00 PM", text: "Brown rice + light dal makhani + salad", calories: 620 },
    { label: "Pre-Workout", time: "4:00 - 5:00 PM", text: "Black coffee + 2 dates", calories: 100 },
    { label: "Post-Workout / Dinner", time: "8:00 PM", text: "Whey shake + baked sweet potato + paneer", calories: 480 },
    { label: "Bedtime", time: "10:00 PM", text: "Warm milk", calories: 90 },
  ],
  Friday: [
    { label: "Breakfast", time: "7:00 AM", text: "Besan chilla + avocado + whey protein shake", calories: 460 },
    { label: "Mid-Morning Snack", time: "10:30 AM", text: "Fruit bowl + almonds", calories: 210 },
    { label: "Lunch", time: "1:00 PM", text: "Rajma rice + salad + curd", calories: 650 },
    { label: "Pre-Workout", time: "4:00 - 5:00 PM", text: "Banana + black coffee", calories: 120 },
    { label: "Post-Workout / Dinner", time: "8:00 PM", text: "Whey protein + roti + soya chunk curry", calories: 500 },
    { label: "Bedtime", time: "10:00 PM", text: "Paneer / casein shake", calories: 140 },
  ],
  Saturday: [
    { label: "Breakfast", time: "7:00 AM", text: "Vegetable daliya + sprouts + whey protein shake", calories: 430 },
    { label: "Mid-Morning Snack", time: "10:30 AM", text: "Coconut water + mixed nuts", calories: 180 },
    { label: "Lunch", time: "1:00 PM", text: "Brown rice + palak paneer + salad", calories: 630 },
    { label: "Pre-Workout", time: "4:00 - 5:00 PM", text: "Banana + black coffee", calories: 110 },
    { label: "Post-Workout / Dinner", time: "8:00 PM", text: "Whey shake + mashed sweet potato", calories: 380 },
    { label: "Bedtime", time: "10:00 PM", text: "Warm turmeric milk", calories: 100 },
  ],
};

const nonVegPlan: Record<(typeof days)[number], DayPlan> = {
  Monday: [
    { label: "Breakfast", time: "7:00 AM", text: "4 egg whites + 1 yolk, oats + milk", calories: 460 },
    { label: "Mid-Morning Snack", time: "10:30 AM", text: "Boiled chicken breast + fruits", calories: 220 },
    { label: "Lunch", time: "1:00 PM", text: "Rice + chicken curry + salad", calories: 680 },
    { label: "Pre-Workout", time: "4:00 - 5:00 PM", text: "Banana + black coffee", calories: 120 },
    { label: "Post-Workout / Dinner", time: "8:00 PM", text: "Whey protein + boiled eggs", calories: 380 },
    { label: "Bedtime", time: "10:00 PM", text: "Cottage cheese / casein shake", calories: 140 },
  ],
  Tuesday: [
    { label: "Breakfast", time: "7:00 AM", text: "Egg omelette + whole wheat toast + milk", calories: 450 },
    { label: "Mid-Morning Snack", time: "10:30 AM", text: "Grilled chicken strips + apple", calories: 230 },
    { label: "Lunch", time: "1:00 PM", text: "Brown rice + fish curry + veggies", calories: 650 },
    { label: "Pre-Workout", time: "4:00 - 5:00 PM", text: "Dates + black coffee", calories: 130 },
    { label: "Post-Workout / Dinner", time: "8:00 PM", text: "Whey shake + grilled chicken breast", calories: 420 },
    { label: "Bedtime", time: "10:00 PM", text: "Warm milk", calories: 100 },
  ],
  Wednesday: [
    { label: "Breakfast", time: "7:00 AM", text: "Boiled eggs + oats + peanut butter", calories: 480 },
    { label: "Mid-Morning Snack", time: "10:30 AM", text: "Tuna salad + fruits", calories: 210 },
    { label: "Lunch", time: "1:00 PM", text: "Rice + egg curry + salad", calories: 640 },
    { label: "Pre-Workout", time: "4:00 - 5:00 PM", text: "Banana + green tea", calories: 110 },
    { label: "Post-Workout / Dinner", time: "8:00 PM", text: "Whey protein + grilled fish", calories: 400 },
    { label: "Bedtime", time: "10:00 PM", text: "Cottage cheese", calories: 120 },
  ],
  Thursday: [
    { label: "Breakfast", time: "7:00 AM", text: "Egg white scramble + multigrain toast + milk", calories: 440 },
    { label: "Mid-Morning Snack", time: "10:30 AM", text: "Boiled chicken + cucumber", calories: 200 },
    { label: "Lunch", time: "1:00 PM", text: "Rice + chicken curry + dal + salad", calories: 700 },
    { label: "Pre-Workout", time: "4:00 - 5:00 PM", text: "Black coffee + dates", calories: 110 },
    { label: "Post-Workout / Dinner", time: "8:00 PM", text: "Whey shake + roti + grilled chicken", calories: 480 },
    { label: "Bedtime", time: "10:00 PM", text: "Warm milk", calories: 90 },
  ],
  Friday: [
    { label: "Breakfast", time: "7:00 AM", text: "Omelette + oats + almonds", calories: 470 },
    { label: "Mid-Morning Snack", time: "10:30 AM", text: "Grilled fish + fruits", calories: 220 },
    { label: "Lunch", time: "1:00 PM", text: "Brown rice + chicken curry + salad", calories: 660 },
    { label: "Pre-Workout", time: "4:00 - 5:00 PM", text: "Banana + black coffee", calories: 120 },
    { label: "Post-Workout / Dinner", time: "8:00 PM", text: "Whey protein + boiled eggs + sweet potato", calories: 460 },
    { label: "Bedtime", time: "10:00 PM", text: "Casein shake / curd", calories: 130 },
  ],
  Saturday: [
    { label: "Breakfast", time: "7:00 AM", text: "Egg bhurji + toast + milk", calories: 450 },
    { label: "Mid-Morning Snack", time: "10:30 AM", text: "Chicken salad", calories: 210 },
    { label: "Lunch", time: "1:00 PM", text: "Rice + fish curry + veggies", calories: 640 },
    { label: "Pre-Workout", time: "4:00 - 5:00 PM", text: "Banana + black coffee", calories: 110 },
    { label: "Post-Workout / Dinner", time: "8:00 PM", text: "Whey shake + grilled chicken breast", calories: 420 },
    { label: "Bedtime", time: "10:00 PM", text: "Warm milk", calories: 100 },
  ],
};

export default function DietPlanPage() {
  const [dietType, setDietType] = useState<DietType>("veg");
  const [activeDay, setActiveDay] =
    useState<(typeof days)[number]>("Monday");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "nonveg" || hash === "veg") {
      setDietType(hash as DietType);
    }
  }, []);

  const plan = dietType === "veg" ? vegPlan : nonVegPlan;
  const meals = plan[activeDay];
  const totalCalories = meals.reduce((sum, m) => sum + m.calories, 0);

  return (
    <main className="relative overflow-hidden bg-black text-white">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-20 h-[280px] w-[280px] rounded-full bg-yellow-400/10 blur-[130px] sm:h-[350px] sm:w-[350px]" />
        <div className="absolute bottom-0 right-[-120px] h-[280px] w-[280px] rounded-full bg-orange-500/10 blur-[130px] sm:h-[350px] sm:w-[350px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* ================= HEADER ================= */}
      <section className="relative z-10 px-4 pb-10 pt-28 text-center sm:px-6 sm:pt-32 lg:px-10">

        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_#facc15]" />
          <p className="text-xs uppercase tracking-widest text-yellow-400">
            NUTRITION BLUEPRINT
          </p>
        </div>

        <h1 className="mx-auto mt-6 max-w-3xl text-3xl font-black uppercase leading-[1.05] sm:text-4xl md:text-5xl">
          DIET
          <span className="ml-2 bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
            PLAN
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 lg:text-base">
          A day-by-day nutrition guide built around real bodybuilding
          fundamentals — choose your preference and follow the plan for
          your training days.
        </p>

        {/* ================= VEG / NON-VEG TOGGLE ================= */}
        <div className="mx-auto mt-8 flex w-full items-center rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-xl sm:max-w-xs">

          <button
            onClick={() => setDietType("veg")}
            className={`flex h-11 flex-1 items-center justify-center gap-2 rounded-full text-xs font-black uppercase tracking-[0.14em] transition-all duration-300 active:scale-95 ${
              dietType === "veg"
                ? "bg-yellow-400 text-black shadow-[0_0_25px_rgba(250,204,21,0.45)]"
                : "text-gray-400 hover:text-yellow-300"
            }`}
          >
            <Leaf className="h-4 w-4" />
            VEG
          </button>

          <button
            onClick={() => setDietType("nonveg")}
            className={`flex h-11 flex-1 items-center justify-center gap-2 rounded-full text-xs font-black uppercase tracking-[0.14em] transition-all duration-300 active:scale-95 ${
              dietType === "nonveg"
                ? "bg-yellow-400 text-black shadow-[0_0_25px_rgba(250,204,21,0.45)]"
                : "text-gray-400 hover:text-yellow-300"
            }`}
          >
            <Beef className="h-4 w-4" />
            NON-VEG
          </button>
        </div>
      </section>

      {/* ================= DAY TABS ================= */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="scrollbar-hide flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`flex h-11 snap-center items-center whitespace-nowrap rounded-full border px-4 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 active:scale-95 sm:px-5 ${
                  activeDay === day
                    ? "glow-yellow border-yellow-400 bg-yellow-400 text-black"
                    : "border-white/20 bg-white/[0.03] text-gray-400 hover:border-yellow-400/30 hover:text-yellow-200 sm:border-white/10"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MEAL CARDS ================= */}
      <section className="relative z-10 px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-5xl">

          <div className="mb-6 flex flex-col items-center justify-between gap-3 rounded-2xl border border-yellow-400/10 bg-white/[0.03] px-5 py-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
              {activeDay} · {dietType === "veg" ? "Veg Plan" : "Non-Veg Plan"}
            </p>
            <p className="glow-yellow-text text-sm font-black text-yellow-400">
              ~{totalCalories} kcal / day
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={dietType + activeDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {meals.map((meal) => {
                const MealIcon = mealIconMap[meal.label];

                return (
                <div
                  key={meal.label}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 sm:rounded-[1.6rem] sm:border-white/10 sm:bg-gradient-to-b sm:from-white/[0.06] sm:to-white/[0.02] sm:p-5"
                >
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex items-start gap-4">
                    <div className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 p-2">
                      <MealIcon className="h-5 w-5 text-yellow-400" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold uppercase tracking-[0.02em] text-white">
                        {meal.label}
                      </h3>

                      <p className="mt-0.5 text-[11px] uppercase tracking-[0.16em] text-yellow-400/70">
                        {meal.time}
                      </p>

                      <p className="mt-2 text-sm leading-relaxed text-gray-400">
                        {meal.text}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex justify-end">
                    <span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-yellow-300">
                      {meal.calories} kcal
                    </span>
                  </div>
                </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ================= NOTE ================= */}
      <section className="relative z-10 px-4 pb-16 sm:px-6 sm:pb-24 lg:px-10">
        <div className="mx-auto flex max-w-5xl items-start gap-4 rounded-2xl border-l-2 border-yellow-400 bg-white/[0.03] p-5 backdrop-blur-xl">
          <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-400" />
          <p className="text-sm leading-relaxed text-gray-400">
            Diet plans are general guidelines based on standard bodybuilding
            nutrition principles. Consult a nutritionist for a plan
            personalized to your body, goals, and medical history.
          </p>
        </div>
      </section>
    </main>
  );
}
