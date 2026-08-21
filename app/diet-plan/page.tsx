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
  Flame,
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

/* ================= MEAL COLOR THEME ================= */
const mealTheme: Record<
  string,
  { gradient: string; border: string; iconBg: string; text: string; badge: string }
> = {
  Breakfast: {
    gradient: "from-orange-500/20 to-amber-500/10",
    border: "border-orange-500/30",
    iconBg: "bg-orange-500",
    text: "text-orange-400",
    badge: "border-orange-500/30 bg-orange-500/10 text-orange-300",
  },
  "Mid-Morning Snack": {
    gradient: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/30",
    iconBg: "bg-green-500",
    text: "text-green-400",
    badge: "border-green-500/30 bg-green-500/10 text-green-300",
  },
  Lunch: {
    gradient: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/30",
    iconBg: "bg-blue-500",
    text: "text-blue-400",
    badge: "border-blue-500/30 bg-blue-500/10 text-blue-300",
  },
  "Pre-Workout": {
    gradient: "from-yellow-500/20 to-amber-400/10",
    border: "border-yellow-500/30",
    iconBg: "bg-yellow-500",
    text: "text-yellow-400",
    badge: "border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
  },
  "Post-Workout / Dinner": {
    gradient: "from-purple-500/20 to-violet-500/10",
    border: "border-purple-500/30",
    iconBg: "bg-purple-500",
    text: "text-purple-400",
    badge: "border-purple-500/30 bg-purple-500/10 text-purple-300",
  },
  Bedtime: {
    gradient: "from-indigo-500/20 to-blue-900/20",
    border: "border-indigo-500/30",
    iconBg: "bg-indigo-600",
    text: "text-indigo-400",
    badge: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
  },
};

/* ================= DAY COLOR THEME ================= */
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

const dayTheme: Record<
  (typeof days)[number],
  { abbr: string; dot: string; border: string; text: string; from: string; to: string }
> = {
  Monday: { abbr: "MON", dot: "bg-blue-500", border: "border-blue-500", text: "text-blue-400", from: "from-blue-600", to: "to-blue-400" },
  Tuesday: { abbr: "TUE", dot: "bg-purple-500", border: "border-purple-500", text: "text-purple-400", from: "from-purple-600", to: "to-purple-400" },
  Wednesday: { abbr: "WED", dot: "bg-orange-500", border: "border-orange-500", text: "text-orange-400", from: "from-orange-600", to: "to-orange-400" },
  Thursday: { abbr: "THU", dot: "bg-green-500", border: "border-green-500", text: "text-green-400", from: "from-green-600", to: "to-green-400" },
  Friday: { abbr: "FRI", dot: "bg-pink-500", border: "border-pink-500", text: "text-pink-400", from: "from-pink-600", to: "to-pink-400" },
  Saturday: { abbr: "SAT", dot: "bg-red-500", border: "border-red-500", text: "text-red-400", from: "from-red-600", to: "to-red-400" },
};

/* ================= DATA ================= */
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
  const theme = dayTheme[activeDay];

  return (
    <main className="relative overflow-hidden bg-black text-white">

      {/* ================= HERO HEADER ================= */}
      <section className="relative overflow-hidden px-4 pb-10 pt-28 text-center sm:px-6 sm:pt-32 lg:px-10">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black" />

        {/* Diagonal Line Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 14px)",
          }}
        />

        <div className="absolute left-[-120px] top-10 h-[280px] w-[280px] rounded-full bg-orange-500/10 blur-[130px] sm:h-[350px] sm:w-[350px]" />
        <div className="absolute bottom-0 right-[-120px] h-[280px] w-[280px] rounded-full bg-yellow-400/10 blur-[130px] sm:h-[350px] sm:w-[350px]" />

        <div className="relative z-10">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_#facc15]" />
            <p className="text-xs uppercase tracking-widest text-yellow-400">
              NUTRITION BLUEPRINT
            </p>
          </div>

          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-black uppercase leading-[1.05] sm:text-5xl md:text-6xl">
            FUEL YOUR{" "}
            <span className="gradient-underline text-yellow-400">
              GAINS
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-300 lg:text-base">
            Science-backed nutrition plans crafted for maximum muscle growth
            and fat loss.
          </p>

          {/* ================= VEG / NON-VEG TOGGLE ================= */}
          <div
            className={`relative mx-auto mt-10 grid w-full max-w-md grid-cols-2 overflow-hidden rounded-2xl border-2 bg-zinc-900 p-1.5 transition-colors duration-300 ${
              dietType === "veg" ? "border-green-500" : "border-red-500"
            }`}
          >
            <div
              className={`absolute inset-y-1.5 left-1.5 w-[calc(50%-6px)] rounded-xl transition-transform duration-300 ease-out ${
                dietType === "veg"
                  ? "translate-x-0 bg-green-500"
                  : "translate-x-[calc(100%+6px)] bg-red-500"
              }`}
            />

            <button
              type="button"
              onClick={() => setDietType("veg")}
              className={`relative z-10 flex items-center justify-center gap-2 py-4 text-sm font-black uppercase tracking-wider transition-colors duration-300 active:scale-95 ${
                dietType === "veg" ? "text-white" : "text-gray-400"
              }`}
            >
              <Leaf className="h-4 w-4" />
              VEG
            </button>

            <button
              type="button"
              onClick={() => setDietType("nonveg")}
              className={`relative z-10 flex items-center justify-center gap-2 py-4 text-sm font-black uppercase tracking-wider transition-colors duration-300 active:scale-95 ${
                dietType === "nonveg" ? "text-white" : "text-gray-400"
              }`}
            >
              <Beef className="h-4 w-4" />
              NON-VEG
            </button>
          </div>
        </div>
      </section>

      {/* ================= DAY SELECTOR ================= */}
      <section className="relative z-10 px-4 pt-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="scrollbar-hide flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible">
            {days.map((day) => {
              const dTheme = dayTheme[day];
              const isActive = activeDay === day;

              return (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`flex min-w-[80px] shrink-0 snap-center flex-col items-center gap-2 rounded-2xl border py-3 text-center transition-all duration-300 active:scale-95 ${
                    isActive
                      ? `${dTheme.border} bg-white/[0.06] text-white shadow-[0_0_25px_rgba(255,255,255,0.08)]`
                      : "border-zinc-800 bg-zinc-900 text-gray-500 hover:border-zinc-700"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isActive ? dTheme.dot : "bg-gray-600"
                    }`}
                  />
                  <span className="text-xs font-black uppercase tracking-widest">
                    {dTheme.abbr}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= MEAL CARDS ================= */}
      <section className="relative z-10 px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-5xl">

          {/* Daily Calorie Banner */}
          <div
            className={`mb-6 flex flex-col items-center justify-between gap-2 rounded-2xl bg-gradient-to-r px-6 py-3 text-center sm:flex-row sm:text-left ${theme.from} ${theme.to}`}
          >
            <p className="text-sm font-black uppercase tracking-[0.1em] text-white">
              {activeDay.toUpperCase()} &middot; {dietType === "veg" ? "VEG PLAN" : "NON-VEG PLAN"}
            </p>
            <p className="flex items-center gap-1.5 text-sm font-black text-white">
              <Flame className="h-4 w-4" />
              ~{totalCalories} KCAL / DAY
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
                const mTheme = mealTheme[meal.label];
                const items = meal.text.split(" + ").map((i) => i.trim());

                return (
                  <div
                    key={meal.label}
                    className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-b p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${mTheme.gradient} ${mTheme.border}`}
                  >

                    {/* Top Row */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${mTheme.iconBg}`}>
                          <MealIcon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-base font-black uppercase leading-tight text-white">
                          {meal.label}
                        </h3>
                      </div>

                      <span className={`shrink-0 rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-wide ${mTheme.badge}`}>
                        {meal.calories} kcal
                      </span>
                    </div>

                    {/* Time */}
                    <p className={`mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] ${mTheme.text}`}>
                      {meal.time}
                    </p>

                    {/* Divider */}
                    <div className={`mt-3 mb-3 h-px w-full ${mTheme.border} border-t`} />

                    {/* Food Items */}
                    <ul className="space-y-1.5">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-white">
                          <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${mTheme.iconBg}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ================= NOTE ================= */}
      <section className="relative z-10 px-4 pb-16 sm:px-6 sm:pb-24 lg:px-10">
        <div className="mx-auto flex max-w-5xl items-start gap-4 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-4 backdrop-blur-xl">
          <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-400" />
          <p className="text-sm italic leading-relaxed text-gray-300">
            Diet plans are general guidelines based on standard bodybuilding
            nutrition principles. Consult a nutritionist for a plan
            personalized to your body, goals, and medical history.
          </p>
        </div>
      </section>
    </main>
  );
}
