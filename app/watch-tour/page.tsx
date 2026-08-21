"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Volume2,
  VolumeX,
  Dumbbell,
  Users,
  MapPin,
  Clock,
  ArrowRight,
  Phone,
} from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Premium Equipment",
    desc: "Latest machines & free weights",
  },
  {
    icon: Users,
    title: "Expert Coaches",
    desc: "Certified trainers, personalized plans",
  },
  {
    icon: MapPin,
    title: "Greater Noida West",
    desc: "Plot 115, Sector 4, UP 201318",
  },
  {
    icon: Clock,
    title: "18-Hour Access",
    desc: "Open Mon–Sat, 6AM to 12AM",
  },
];

export default function WatchTourPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <main className="relative overflow-hidden bg-black text-white">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-20 h-[280px] w-[280px] rounded-full bg-yellow-400/10 blur-[130px] sm:h-[350px] sm:w-[350px]" />
        <div className="absolute bottom-0 right-[-120px] h-[280px] w-[280px] rounded-full bg-orange-500/10 blur-[130px] sm:h-[350px] sm:w-[350px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* ================= VIDEO HERO ================= */}
      <section className="relative z-10 px-4 pb-6 pt-28 sm:px-6 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black">
            <video
              ref={videoRef}
              src="/tour.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="h-full w-full object-cover"
            >
              Your browser does not support the video tag.
            </video>

            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? "Unmute video" : "Mute video"}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition-colors hover:bg-black"
            >
              {muted ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Fade below video */}
          <div className="pointer-events-none absolute inset-x-0 -bottom-6 h-16 bg-gradient-to-b from-transparent to-black" />
        </motion.div>
      </section>

      {/* ================= ABOUT THE GYM ================= */}
      <section className="relative z-10 px-4 py-16 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
            TAKE A LOOK INSIDE
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
            Experience MR WOW{" "}
            <span className="text-yellow-400">FITNESS</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-300 lg:text-base">
            Step inside MR WOW FITNESS — Greater Noida West&apos;s most
            premium transformation gym. From the moment you walk in,
            you&apos;ll feel the difference: state-of-the-art equipment,
            elite coaching, and an energy that pushes you to be your best
            self every single day.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-400 lg:text-base">
            Our facility is designed for serious results — whether
            you&apos;re just starting your fitness journey or training for
            your next competition. With expert trainers, personalized
            programs, and a community that lifts each other up, MR WOW
            FITNESS is more than a gym — it&apos;s a lifestyle.
          </p>
        </motion.div>

        {/* ================= FEATURE HIGHLIGHTS ================= */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/8 bg-zinc-900 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/20"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/10">
                <feature.icon className="h-5 w-5 text-yellow-400" />
              </div>

              <h3 className="mt-4 text-sm font-black text-white">
                {feature.title}
              </h3>

              <p className="mt-1 text-xs leading-relaxed text-gray-400">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative z-10 px-4 pb-24 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-xl flex-col items-center rounded-3xl border border-yellow-400/10 bg-gradient-to-br from-[#0d0d0d] via-black to-[#050505] p-8 text-center shadow-[0_0_60px_rgba(250,204,21,0.06)] sm:p-10"
        >
          <h3 className="text-xl font-black text-white">Ready to join?</h3>

          <Link
            href="/joinnow"
            className="shimmer group mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-8 py-4 text-sm font-black uppercase tracking-[0.06em] text-black transition-all duration-200 hover:scale-105 hover:bg-yellow-300"
          >
            START YOUR JOURNEY
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <a
            href="tel:+919354545001"
            className="mt-5 flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-yellow-400"
          >
            <Phone className="h-4 w-4" />
            Call Us: +91 93545 45001
          </a>
        </motion.div>
      </section>
    </main>
  );
}
