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
  { label: string; sets: number; rest: string; note: string }
> = {
  beginner: {
    label: "Beginner",
    sets: 3,
    rest: "60 sec",
    note: "Focus on form and controlled movement — don't chase heavy weight yet.",
  },
  intermediate: {
    label: "Intermediate",
    sets: 4,
    rest: "75 sec",
    note: "Progressively increase weight while keeping full range of motion.",
  },
  advanced: {
    label: "Advanced",
    sets: 5,
    rest: "90 sec",
    note: "Push close to failure on the final set — add a drop set if recovery allows.",
  },
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
];

const levels: Level[] = ["beginner", "intermediate", "advanced"];

export default function FitnessPlanPage() {
  const [level, setLevel] = useState<Level>("beginner");
  const [activeDay, setActiveDay] = useState<string>("Monday");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (levels.includes(hash as Level)) {
      setLevel(hash as Level);
    }
  }, []);

  const config = levelConfig[level];
  const selectedDay = weekPlan.find((d) => d.day === activeDay);
  const isSunday = activeDay === "Sunday";

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
            TRAINING BLUEPRINT
          </p>
        </div>

        <h1 className="mx-auto mt-6 max-w-3xl text-3xl font-black uppercase leading-[1.05] sm:text-4xl md:text-5xl">
          FITNESS
          <span className="ml-2 bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
            PLAN
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 lg:text-base">
          A structured 7-day training split with a muscle-group focus for
          every day. Pick your level to adjust sets, rest time, and
          intensity.
        </p>

        {/* ================= LEVEL TABS ================= */}
        <div className="mx-auto mt-8 flex w-full max-w-lg items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-xl">
          {levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setLevel(lvl)}
              className={`flex h-11 flex-1 items-center justify-center rounded-full text-[11px] font-black uppercase tracking-[0.1em] transition-all duration-300 active:scale-95 sm:text-xs ${
                level === lvl
                  ? "bg-yellow-400 text-black shadow-[0_0_25px_rgba(250,204,21,0.45)]"
                  : "text-gray-400 hover:text-yellow-300"
              }`}
            >
              {levelConfig[lvl].label}
            </button>
          ))}
        </div>
      </section>

      {/* ================= DAY TABS ================= */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="scrollbar-hide flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible">
            {[...weekPlan.map((d) => d.day), "Sunday"].map((day) => (
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
                <div className="mb-6 rounded-2xl border border-yellow-400/10 bg-white/[0.03] px-5 py-4 text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
                    Sunday · Active Rest
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {activeRest.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-[1.6rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 backdrop-blur-xl"
                    >
                      <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 p-2">
                        <Activity className="h-5 w-5 text-yellow-400" />
                      </span>
                      <p className="text-sm leading-relaxed text-gray-400">
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
                  <div className="mb-6 flex flex-col items-center justify-between gap-3 rounded-2xl border border-yellow-400/10 bg-white/[0.03] px-5 py-4 text-center sm:flex-row sm:text-left">
                    <p className="text-lg font-black uppercase tracking-[0.06em] text-yellow-400 sm:text-sm sm:font-semibold sm:tracking-[0.14em] sm:text-white">
                      {selectedDay.day} · {selectedDay.focus}
                    </p>
                    <p className="glow-yellow-text text-sm font-black text-yellow-400">
                      {config.sets} sets · {config.rest} rest
                    </p>
                  </div>

                  {/* Warm-up */}
                  <div className="mb-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3">
                    <Flame className="h-4 w-4 flex-shrink-0 text-yellow-400" />
                    <p className="text-xs text-gray-400">
                      <span className="font-semibold text-gray-200">
                        Warm-Up (5 min):
                      </span>{" "}
                      Light cardio + dynamic stretching before you start.
                    </p>
                  </div>

                  <div className="flex flex-col divide-y divide-white/5 md:grid md:grid-cols-2 md:gap-4 md:divide-y-0 lg:grid-cols-3">
                    {selectedDay.exercises.map((ex) => {
                      const ExIcon = exerciseIconMap[ex.type];

                      return (
                      <div
                        key={ex.name}
                        className="group relative overflow-hidden py-4 transition-all duration-300 max-md:first:pt-0 md:rounded-[1.6rem] md:border md:border-white/10 md:bg-gradient-to-b md:from-white/[0.06] md:to-white/[0.02] md:p-5 md:hover:-translate-y-1 md:hover:border-yellow-400/30"
                      >
                        <div className="absolute inset-x-0 top-0 hidden h-[2px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block" />

                        <div className="flex items-start gap-4">
                          <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 p-2">
                            <ExIcon className="h-5 w-5 text-yellow-400" />
                          </span>

                          <div className="min-w-0 flex-1">
                            <h3 className="text-lg font-bold leading-snug text-white">
                              {ex.name}
                            </h3>

                            <span className="mt-1 inline-block text-sm font-bold text-yellow-400 md:mt-1.5 md:rounded-full md:border md:border-yellow-400/20 md:bg-yellow-400/10 md:px-3 md:py-1 md:text-[10px] md:uppercase md:tracking-[0.1em] md:text-yellow-300">
                              {config.sets} x {ex.reps}
                            </span>
                          </div>
                        </div>

                        {/* Set progress indicator */}
                        <div className="mt-3 flex gap-1.5 pl-[52px] md:mt-4 md:pl-0">
                          {Array.from({ length: config.sets }).map((_, i) => (
                            <span
                              key={i}
                              className="h-1.5 flex-1 rounded-full bg-yellow-400/20"
                            />
                          ))}
                        </div>

                        <p className="mt-2 flex items-center gap-1.5 pl-[52px] text-xs uppercase tracking-[0.14em] text-gray-500 md:mt-3 md:pl-0">
                          <Timer className="h-3.5 w-3.5 flex-shrink-0" />
                          Rest {config.rest}
                        </p>

                        <p className="mt-2 flex items-start gap-1.5 pl-[52px] text-sm leading-relaxed text-gray-400 md:mt-3 md:pl-0">
                          <Target className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-yellow-400/70" />
                          <span>{ex.tip}</span>
                        </p>
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

      {/* ================= NOTE ================= */}
      <section className="relative z-10 px-4 pb-16 sm:px-6 sm:pb-24 lg:px-10">
        <div className="mx-auto flex max-w-5xl items-start gap-4 rounded-2xl border-l-2 border-yellow-400 bg-white/[0.03] p-5 backdrop-blur-xl">
          <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-400" />
          <p className="text-sm leading-relaxed text-gray-400">
            Training plans are general guidelines. Warm up properly, use a
            weight you can control with good form, and consult a certified
            trainer if you&apos;re new to any of these movements.
          </p>
        </div>
      </section>
    </main>
  );
}
