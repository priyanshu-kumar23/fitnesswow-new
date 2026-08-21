"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Flame,
  Snowflake,
  Info,
  Dumbbell,
  Activity,
  Target,
  Timer,
  Moon,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";

/* ================= TYPES ================= */
type Level = "beginner" | "intermediate" | "advanced";

type ExerciseType = "strength" | "cardio" | "core";

type Exercise = {
  name: string;
  reps: string;
  tip: string;
  type: ExerciseType;
};

const exerciseIconMap: Record<ExerciseType, LucideIcon> = {
  strength: Dumbbell,
  cardio: Activity,
  core: Target,
};

type DayPlan = {
  day: string;
  focus: string;
  exercises: Exercise[];
};

/* ================= LEVEL CONFIG ================= */
const levelConfig: Record<
  Level,
  {
    label: string;
    sets: number;
    rest: string;
    note: string;
    duration: string;
    intensity: string;
    activeClasses: string;
    inactiveClasses: string;
  }
> = {
  beginner: {
    label: "Beginner",
    sets: 3,
    rest: "60 sec",
    note: "Focus on form and controlled movement — don't chase heavy weight yet.",
    duration: "~45 MIN",
    intensity: "MODERATE",
    activeClasses: "bg-green-500 text-white border-green-500",
    inactiveClasses: "bg-transparent text-green-400 border-green-500/40 hover:border-green-500",
  },
  intermediate: {
    label: "Intermediate",
    sets: 4,
    rest: "75 sec",
    note: "Progressively increase weight while keeping full range of motion.",
    duration: "~60 MIN",
    intensity: "HIGH",
    activeClasses: "bg-yellow-500 text-black border-yellow-500",
    inactiveClasses: "bg-transparent text-yellow-400 border-yellow-500/40 hover:border-yellow-500",
  },
  advanced: {
    label: "Advanced",
    sets: 5,
    rest: "90 sec",
    note: "Push close to failure on the final set — add a drop set if recovery allows.",
    duration: "~75 MIN",
    intensity: "VERY HIGH",
    activeClasses: "bg-red-500 text-white border-red-500",
    inactiveClasses: "bg-transparent text-red-400 border-red-500/40 hover:border-red-500",
  },
};

/* ================= DAY COLOR THEME ================= */
const dayTheme: Record<
  string,
  { abbr: string; muscle: string; dot: string; border: string; borderSoft: string; text: string; from: string; to: string; softGradient: string; numberText: string }
> = {
  Monday: { abbr: "MON", muscle: "CHEST", dot: "bg-blue-500", border: "border-blue-500", borderSoft: "border-blue-500/30", text: "text-blue-400", from: "from-blue-600", to: "to-blue-400", softGradient: "from-blue-500/10 to-blue-900/5", numberText: "text-blue-500/30" },
  Tuesday: { abbr: "TUE", muscle: "BACK", dot: "bg-purple-500", border: "border-purple-500", borderSoft: "border-purple-500/30", text: "text-purple-400", from: "from-purple-600", to: "to-purple-400", softGradient: "from-purple-500/10 to-purple-900/5", numberText: "text-purple-500/30" },
  Wednesday: { abbr: "WED", muscle: "SHOULDERS", dot: "bg-orange-500", border: "border-orange-500", borderSoft: "border-orange-500/30", text: "text-orange-400", from: "from-orange-600", to: "to-orange-400", softGradient: "from-orange-500/10 to-orange-900/5", numberText: "text-orange-500/30" },
  Thursday: { abbr: "THU", muscle: "LEGS", dot: "bg-green-500", border: "border-green-500", borderSoft: "border-green-500/30", text: "text-green-400", from: "from-green-600", to: "to-green-400", softGradient: "from-green-500/10 to-green-900/5", numberText: "text-green-500/30" },
  Friday: { abbr: "FRI", muscle: "ARMS", dot: "bg-pink-500", border: "border-pink-500", borderSoft: "border-pink-500/30", text: "text-pink-400", from: "from-pink-600", to: "to-pink-400", softGradient: "from-pink-500/10 to-pink-900/5", numberText: "text-pink-500/30" },
  Saturday: { abbr: "SAT", muscle: "FULL BODY", dot: "bg-red-500", border: "border-red-500", borderSoft: "border-red-500/30", text: "text-red-400", from: "from-red-600", to: "to-red-400", softGradient: "from-red-500/10 to-red-900/5", numberText: "text-red-500/30" },
  Sunday: { abbr: "SUN", muscle: "REST", dot: "bg-gray-500", border: "border-indigo-500", borderSoft: "border-indigo-500/30", text: "text-indigo-400", from: "from-zinc-700", to: "to-zinc-600", softGradient: "from-zinc-800 to-zinc-900", numberText: "text-indigo-500/30" },
};

/* ================= WEEKLY SPLIT ================= */
const weekPlan: DayPlan[] = [
  {
    day: "Monday",
    focus: "Chest + Triceps",
    exercises: [
      { name: "Barbell Bench Press", reps: "8-10", tip: "Drive through your feet, keep wrists straight.", type: "strength" },
      { name: "Incline Dumbbell Press", reps: "10-12", tip: "Control the eccentric for a full chest stretch.", type: "strength" },
      { name: "Cable Chest Fly", reps: "12-15", tip: "Squeeze hard at the top, avoid using momentum.", type: "strength" },
      { name: "Weighted Dips", reps: "8-12", tip: "Lean forward slightly to bias the chest.", type: "strength" },
      { name: "Triceps Rope Pushdown", reps: "12-15", tip: "Keep elbows pinned to your sides.", type: "strength" },
      { name: "Overhead Dumbbell Extension", reps: "10-12", tip: "Keep your core tight to protect the lower back.", type: "strength" },
    ],
  },
  {
    day: "Tuesday",
    focus: "Back + Biceps",
    exercises: [
      { name: "Deadlift", reps: "6-8", tip: "Keep the bar close to your shins, brace your core.", type: "strength" },
      { name: "Lat Pulldown", reps: "10-12", tip: "Pull to your upper chest, avoid swinging.", type: "strength" },
      { name: "Seated Cable Row", reps: "10-12", tip: "Squeeze your shoulder blades together at the end.", type: "strength" },
      { name: "Barbell Bent-Over Row", reps: "8-10", tip: "Hinge at the hips, keep your back flat.", type: "strength" },
      { name: "Barbell Curl", reps: "10-12", tip: "Avoid swinging — control the tempo.", type: "strength" },
      { name: "Hammer Curl", reps: "12-15", tip: "Keeps the forearm and brachialis engaged.", type: "strength" },
    ],
  },
  {
    day: "Wednesday",
    focus: "Shoulders + Abs",
    exercises: [
      { name: "Overhead Barbell Press", reps: "8-10", tip: "Brace your core, avoid arching the lower back.", type: "strength" },
      { name: "Lateral Raise", reps: "12-15", tip: "Lead with your elbows, keep strict form.", type: "strength" },
      { name: "Rear Delt Fly", reps: "12-15", tip: "Squeeze the shoulder blades for rear delt activation.", type: "strength" },
      { name: "Front Plate Raise", reps: "10-12", tip: "Keep a slight bend in the elbow.", type: "strength" },
      { name: "Hanging Leg Raise", reps: "12-15", tip: "Avoid swinging — control the descent.", type: "core" },
      { name: "Cable Crunch", reps: "15-20", tip: "Round the spine, don't pull with your arms.", type: "core" },
    ],
  },
  {
    day: "Thursday",
    focus: "Legs (Quads, Hamstrings, Calves)",
    exercises: [
      { name: "Barbell Back Squat", reps: "8-10", tip: "Keep chest up, drive through your heels.", type: "strength" },
      { name: "Romanian Deadlift", reps: "10-12", tip: "Hinge at the hips, feel the hamstring stretch.", type: "strength" },
      { name: "Leg Press", reps: "12-15", tip: "Don't lock your knees at the top.", type: "strength" },
      { name: "Walking Lunges", reps: "12 / leg", tip: "Keep torso upright, step with control.", type: "strength" },
      { name: "Leg Curl", reps: "12-15", tip: "Slow the eccentric for hamstring growth.", type: "strength" },
      { name: "Standing Calf Raise", reps: "15-20", tip: "Pause at the top for a full contraction.", type: "strength" },
    ],
  },
  {
    day: "Friday",
    focus: "Arms + Core",
    exercises: [
      { name: "Close-Grip Bench Press", reps: "8-10", tip: "Keep elbows tucked for triceps focus.", type: "strength" },
      { name: "EZ Bar Curl", reps: "10-12", tip: "Avoid using back momentum.", type: "strength" },
      { name: "Skull Crushers", reps: "10-12", tip: "Keep elbows stationary throughout.", type: "strength" },
      { name: "Preacher Curl", reps: "10-12", tip: "Get a full stretch at the bottom of each rep.", type: "strength" },
      { name: "Russian Twists", reps: "20 total", tip: "Rotate from the core, not the arms.", type: "core" },
      { name: "Plank", reps: "45-60 sec", tip: "Keep hips level, brace your core.", type: "core" },
    ],
  },
  {
    day: "Saturday",
    focus: "Full Body / Functional Training",
    exercises: [
      { name: "Kettlebell Swings", reps: "15-20", tip: "Drive with your hips, not your arms.", type: "cardio" },
      { name: "Goblet Squats", reps: "12-15", tip: "Keep elbows inside your knees at the bottom.", type: "strength" },
      { name: "Push-Ups", reps: "15-20", tip: "Keep your body in a straight line.", type: "strength" },
      { name: "Battle Ropes", reps: "30 sec", tip: "Maintain a strong athletic stance.", type: "cardio" },
      { name: "Box Step-Ups", reps: "12 / leg", tip: "Drive through the front heel.", type: "cardio" },
      { name: "Farmer's Carry", reps: "40 m", tip: "Keep shoulders back, core braced.", type: "cardio" },
    ],
  },
];

const activeRest = [
  "Light walking (20-30 min)",
  "Full-body stretching / mobility work",
  "Foam rolling for tight muscle groups",
  "Optional light yoga session",
  "Stay hydrated — aim for 3+ liters of water",
];

const levels: Level[] = ["beginner", "intermediate", "advanced"];
const weekDays = [...weekPlan.map((d) => d.day), "Sunday"];

export default function FitnessPlanPage() {
  const [level, setLevel] = useState<Level>("beginner");
  const [activeDay, setActiveDay] = useState<string>("Monday");
  const [openTip, setOpenTip] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (levels.includes(hash as Level)) {
      setLevel(hash as Level);
    }
  }, []);

  const config = levelConfig[level];
  const selectedDay = weekPlan.find((d) => d.day === activeDay);
  const isSunday = activeDay === "Sunday";
  const theme = dayTheme[activeDay];

  const toggleTip = (name: string) => {
    setOpenTip((prev) => (prev === name ? null : name));
  };

  return (
    <main className="relative overflow-hidden bg-black text-white">

      {/* ================= HERO HEADER ================= */}
      <section className="relative overflow-hidden px-4 pb-10 pt-28 text-center sm:px-6 sm:pt-32 lg:px-10">

        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black" />
        <div className="absolute left-[-120px] top-10 h-[280px] w-[280px] rounded-full bg-yellow-400/10 blur-[130px] sm:h-[350px] sm:w-[350px]" />
        <div className="absolute bottom-0 right-[-120px] h-[280px] w-[280px] rounded-full bg-orange-500/10 blur-[130px] sm:h-[350px] sm:w-[350px]" />

        {/* Decorative Giant Text */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-8 select-none text-center text-[6rem] font-black uppercase leading-none text-white/5 sm:text-[9rem] md:top-4 md:text-[12rem]"
        >
          TRAIN
        </span>

        <div className="relative z-10">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_#facc15]" />
            <p className="text-xs uppercase tracking-widest text-yellow-400">
              TRAINING BLUEPRINT
            </p>
          </div>

          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-black uppercase leading-[1.05] sm:text-5xl md:text-6xl">
            BUILD YOUR{" "}
            <span className="gradient-underline text-yellow-400">
              BEAST MODE
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-300 lg:text-base">
            A structured 6-day split designed for maximum strength,
            hypertrophy and performance.
          </p>

          {/* ================= DIFFICULTY FILTER ================= */}
          <div className="mx-auto mt-10 flex w-full max-w-lg items-center gap-2">
            {levels.map((lvl) => {
              const lvlConfig = levelConfig[lvl];
              const isActive = level === lvl;

              return (
                <button
                  key={lvl}
                  onClick={() => setLevel(lvl)}
                  className={`flex h-11 flex-1 items-center justify-center rounded-full border-2 text-[11px] font-black uppercase tracking-[0.1em] transition-all duration-300 active:scale-95 sm:text-xs ${
                    isActive ? lvlConfig.activeClasses : lvlConfig.inactiveClasses
                  }`}
                >
                  {lvlConfig.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= DAY SELECTOR ================= */}
      <section className="relative z-10 px-4 pt-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="scrollbar-hide flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible">
            {weekDays.map((day) => {
              const dTheme = dayTheme[day];
              const isActive = activeDay === day;
              const isRestDay = day === "Sunday";

              return (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`flex min-w-[90px] shrink-0 snap-center flex-col items-center gap-1 rounded-2xl border py-3 text-center transition-all duration-300 active:scale-95 ${
                    isActive
                      ? `${dTheme.border} bg-white/[0.06] text-white shadow-[0_0_25px_rgba(255,255,255,0.08)]`
                      : isRestDay
                        ? "border-zinc-800 bg-zinc-900 text-gray-500 hover:border-zinc-700"
                        : "border-zinc-800 bg-zinc-900 text-gray-500 hover:border-zinc-700"
                  }`}
                >
                  {isRestDay ? (
                    <Moon className={`h-4 w-4 ${isActive ? "text-indigo-400" : "text-gray-500"}`} />
                  ) : (
                    <span className={`h-2 w-2 rounded-full ${isActive ? dTheme.dot : "bg-gray-600"}`} />
                  )}
                  <span className="text-xs font-black uppercase tracking-widest">
                    {dTheme.abbr}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-gray-500">
                    {dTheme.muscle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= DAY CONTENT ================= */}
      <section className="relative z-10 px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-5xl">

          <AnimatePresence mode="wait">
            {isSunday ? (
              <motion.div
                key="sunday"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Rest Day Card */}
                <div className="relative overflow-hidden rounded-[1.8rem] border border-indigo-500/20 bg-gradient-to-r from-zinc-900 to-zinc-800 p-8 text-center sm:p-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_65%)]" />

                  <div className="relative z-10">
                    <Moon className="mx-auto h-14 w-14 text-indigo-400" />
                    <h2 className="mt-4 text-3xl font-black uppercase text-white sm:text-4xl">
                      REST &amp; RECOVER
                    </h2>
                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-500">
                      SUNDAY
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {activeRest.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-[1.6rem] border border-indigo-500/20 bg-gradient-to-b from-indigo-500/10 to-indigo-900/5 p-5 backdrop-blur-xl"
                    >
                      <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-indigo-500/20 p-2">
                        <Activity className="h-5 w-5 text-indigo-400" />
                      </span>
                      <p className="text-sm leading-relaxed text-gray-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              selectedDay && (
                <motion.div
                  key={level + activeDay}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Workout Day Header Banner */}
                  <div
                    className={`flex flex-col items-center justify-between gap-3 rounded-2xl bg-gradient-to-r px-6 py-4 text-center sm:flex-row sm:text-left ${theme.from} ${theme.to}`}
                  >
                    <p className="text-sm font-black uppercase tracking-[0.1em] text-white">
                      {selectedDay.day.toUpperCase()} &middot; {selectedDay.focus.toUpperCase()}
                    </p>
                    <div className="flex items-center gap-4 text-xs font-black uppercase tracking-wide text-white">
                      <span className="flex items-center gap-1.5">
                        <Flame className="h-4 w-4" />
                        INTENSITY: {config.intensity}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Timer className="h-4 w-4" />
                        {config.duration}
                      </span>
                    </div>
                  </div>

                  {/* Warm-up pill */}
                  <div className="mt-4 flex justify-center sm:justify-start">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-gray-400">
                      <Flame className="h-3.5 w-3.5 flex-shrink-0 text-yellow-400" />
                      Always warm up 5-10 mins before starting
                    </span>
                  </div>

                  {/* Exercise Cards */}
                  <div className="mt-6 flex flex-col gap-3">
                    {selectedDay.exercises.map((ex, index) => {
                      const ExIcon = exerciseIconMap[ex.type];
                      const isTipOpen = openTip === ex.name;

                      return (
                        <div
                          key={ex.name}
                          className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-r p-4 transition-all duration-300 hover:-translate-y-1 sm:p-5 ${theme.softGradient} ${theme.borderSoft}`}
                        >
                          <div className="flex items-center gap-4 sm:gap-6">

                            {/* Number */}
                            <span className={`w-12 shrink-0 text-4xl font-black sm:w-16 sm:text-6xl ${theme.numberText}`}>
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            {/* Center */}
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <ExIcon className={`h-4 w-4 shrink-0 ${theme.text}`} />
                                <h3 className="truncate text-base font-black text-white">
                                  {ex.name}
                                </h3>
                              </div>

                              <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">
                                {selectedDay.focus}
                              </p>

                              <button
                                type="button"
                                onClick={() => toggleTip(ex.name)}
                                className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-gray-500 transition-colors hover:text-gray-300"
                              >
                                Tip
                                <ChevronDown
                                  className={`h-3 w-3 transition-transform duration-200 ${isTipOpen ? "rotate-180" : ""}`}
                                />
                              </button>

                              <AnimatePresence initial={false}>
                                {isTipOpen && (
                                  <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="mt-1 overflow-hidden text-xs italic leading-relaxed text-gray-500"
                                  >
                                    {ex.tip}
                                  </motion.p>
                                )}
                              </AnimatePresence>
                            </div>

                            {/* Right: Sets x Reps block */}
                            <div className="flex shrink-0 flex-col items-end gap-1.5">
                              <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-blue-300">
                                {config.sets} SETS
                              </span>
                              <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-yellow-300">
                                {ex.reps} REPS
                              </span>
                              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-black uppercase tracking-wide text-gray-400">
                                {config.rest} REST
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Cool-down */}
                  <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3">
                    <Snowflake className="h-4 w-4 flex-shrink-0 text-yellow-400" />
                    <p className="text-xs text-gray-400">
                      <span className="font-semibold text-gray-200">
                        Cool-Down (5 min):
                      </span>{" "}
                      Static stretching for the muscles trained today.
                    </p>
                  </div>

                  <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs italic text-gray-500 sm:justify-start sm:text-left">
                    <Flame className="h-3.5 w-3.5 flex-shrink-0 text-yellow-400/70" />
                    {config.note}
                  </p>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ================= WEEKLY SPLIT PROGRESS ================= */}
      <section className="relative z-10 px-4 pb-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-yellow-400">
            YOUR WEEKLY SPLIT
          </p>

          <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl sm:p-5">
            {weekDays.map((day) => {
              const dTheme = dayTheme[day];
              const isActive = activeDay === day;

              return (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className="flex items-center gap-3 text-left"
                >
                  <span className="w-9 shrink-0 text-[10px] font-black uppercase tracking-widest text-gray-500">
                    {dTheme.abbr}
                  </span>
                  <span
                    className={`flex h-8 flex-1 items-center rounded-full bg-gradient-to-r px-4 text-[10px] font-black uppercase tracking-wide text-white transition-all duration-300 ${dTheme.from} ${dTheme.to} ${
                      isActive ? "opacity-100" : "opacity-50 hover:opacity-80"
                    }`}
                  >
                    {dTheme.muscle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= NOTE ================= */}
      <section className="relative z-10 px-4 pb-16 sm:px-6 sm:pb-24 lg:px-10">
        <div className="mx-auto flex max-w-5xl items-start gap-4 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-4 backdrop-blur-xl">
          <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-400" />
          <p className="text-sm italic leading-relaxed text-gray-300">
            Training plans are general guidelines. Warm up properly, use a
            weight you can control with good form, and consult a certified
            trainer if you&apos;re new to any of these movements.
          </p>
        </div>
      </section>
    </main>
  );
}
