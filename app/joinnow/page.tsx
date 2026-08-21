"use client";

import { useState, type FormEvent, type ChangeEvent, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  Calendar,
  CreditCard,
  MessageCircle,
  MessageSquare,
  Target,
  ChevronDown,
  Loader2,
  CheckCircle,
  Shield,
  Clock,
  Check,
  Star,
  Lock,
  Dumbbell,
  MapPin,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  age: string;
  goal: string;
  membership: string;
  source: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  age: "",
  goal: "",
  membership: "",
  source: "",
  message: "",
};

type Errors = Partial<Record<"name" | "phone" | "email", string>>;

const goalOptions = [
  "Lose Weight",
  "Build Muscle",
  "Stay Fit",
  "Compete",
  "General Health",
];

const membershipOptions = [
  "Monthly",
  "Quarterly",
  "Half-Yearly",
  "Annual",
  "Just Exploring",
];

const benefits = [
  "No long-term commitment required",
  "Free first-day trial pass",
  "Expert coach assigned from day 1",
];

function inputClass(hasError: boolean, extra = "") {
  return `w-full rounded-xl border bg-zinc-900 py-3 pl-10 pr-4 text-sm text-white placeholder:text-gray-600 outline-none transition-all duration-200 ${
    hasError
      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
      : "border-zinc-800 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/30"
  } ${extra}`;
}

function Field({
  label,
  icon: Icon,
  optional,
  error,
  children,
}: {
  label: string;
  icon: LucideIcon;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-4">
      <label className="mb-1.5 block text-[11px] uppercase tracking-wider text-gray-500">
        {label}
        {optional && (
          <span className="ml-1 text-[9px] normal-case tracking-normal text-gray-600">
            (optional)
          </span>
        )}
      </label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-gray-500" />
        {children}
      </div>
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function PillGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const active = value === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(active ? "" : option)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-200 ${
              active
                ? "border-yellow-400 bg-yellow-400 text-black"
                : "border-zinc-700 bg-transparent text-gray-400 hover:border-zinc-500"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

function TrustBadges() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="flex flex-col items-center gap-1 rounded-xl bg-zinc-900 p-3 text-center">
        <Shield className="h-4 w-4 text-yellow-400" />
        <p className="text-xs text-gray-400">100% Private</p>
      </div>
      <div className="flex flex-col items-center gap-1 rounded-xl bg-zinc-900 p-3 text-center">
        <Clock className="h-4 w-4 text-yellow-400" />
        <p className="text-xs text-gray-400">24hr Response</p>
      </div>
      <div className="flex flex-col items-center gap-1 rounded-xl bg-zinc-900 p-3 text-center">
        <Star className="h-4 w-4 text-yellow-400" />
        <p className="text-xs text-gray-400">5★ Rated Gym</p>
      </div>
    </div>
  );
}

export default function JoinNowPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const validate = (): boolean => {
    const next: Errors = {};

    if (!form.name.trim()) next.name = "Full name is required";

    const digits = form.phone.replace(/\D/g, "");
    if (!form.phone.trim()) next.phone = "Phone number is required";
    else if (digits.length !== 10) next.phone = "Enter a valid 10-digit phone number";

    if (!form.email.trim()) next.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(245,197,24,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <section className="relative z-10 px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">

          {/* ================= LEFT: MOTIVATION PANEL ================= */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl border border-white/10 p-8 sm:p-10"
            >
              {/* Background photo + overlay */}
              <div className="absolute inset-0">
                <Image
                  src="/gym.jpg"
                  alt="MR WOW FITNESS"
                  fill
                  className="object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/90 to-black" />
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl">
                  BECOME A <span className="text-yellow-400">MEMBER</span>
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  Join 300+ members transforming their lives at MR WOW
                  FITNESS
                </p>

                <div className="mt-6 space-y-3">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />
                      <p className="text-sm text-gray-300">{benefit}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-6">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400">
                    Rated by 200+ members
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ================= SIDE INFO PANEL (desktop only) ================= */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="hidden rounded-3xl border border-white/8 bg-zinc-950 p-6 lg:block"
            >
              <p className="text-sm font-bold text-white">
                Prefer to call?
              </p>

              <a
                href="tel:+919354545001"
                className="mt-2 block text-2xl font-black text-yellow-400 transition-colors hover:text-yellow-300"
              >
                +91 93545 45001
              </a>

              <a
                href="https://wa.me/919354545001"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-bold text-white transition-transform duration-200 hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>

              <p className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                <MapPin className="h-4 w-4 shrink-0 text-yellow-400" />
                Plot 115, Sec-4, Greater Noida West
              </p>
            </motion.div>
          </div>

          {/* ================= RIGHT: FORM CARD ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full rounded-3xl border border-white/8 bg-zinc-950 p-6 shadow-2xl shadow-black sm:p-8"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                /* ================= SUCCESS STATE ================= */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                  >
                    <CheckCircle className="h-14 w-14 text-yellow-400" />
                  </motion.div>

                  <h2 className="mt-5 text-2xl font-black uppercase text-white">
                    ENQUIRY RECEIVED!
                  </h2>

                  <p className="mt-2 max-w-xs text-sm text-gray-400">
                    We&apos;ll call you within 24 hours at the number you
                    provided.
                  </p>

                  <div className="mt-4 flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2">
                    <Dumbbell className="h-4 w-4 text-yellow-400" />
                    <p className="text-xs font-semibold text-yellow-300">
                      You&apos;re #301 in line to join our family
                    </p>
                  </div>

                  <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
                    <Link
                      href="/"
                      className="flex flex-1 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white/10"
                    >
                      Back to Home
                    </Link>

                    <a
                      href="https://wa.me/919354545001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.02]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp Us Now
                    </a>
                  </div>
                </motion.div>
              ) : (
                /* ================= FORM STATE ================= */
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header */}
                  <h1 className="text-2xl font-black uppercase leading-tight">
                    LET&apos;S GET
                    <span className="ml-2 text-yellow-400">STARTED</span>
                  </h1>

                  <p className="mt-2 text-xs leading-relaxed text-gray-400">
                    Fill in your details — we&apos;ll reach out within 24
                    hours. Zero pressure.
                  </p>

                  <div className="mb-6 mt-4 h-[2px] w-12 bg-yellow-400" />

                  <form onSubmit={handleSubmit} noValidate>

                    <Field label="Full Name" icon={User} error={errors.name}>
                      <input
                        type="text"
                        value={form.name}
                        onChange={update("name")}
                        placeholder="e.g. Rohit Sharma"
                        className={inputClass(!!errors.name)}
                      />
                    </Field>

                    <Field label="Phone Number" icon={Phone} error={errors.phone}>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={update("phone")}
                        placeholder="e.g. 98765 43210"
                        className={inputClass(!!errors.phone)}
                      />
                    </Field>

                    <Field label="Email Address" icon={Mail} error={errors.email}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="e.g. you@example.com"
                        className={inputClass(!!errors.email)}
                      />
                    </Field>

                    <Field label="Age" icon={Calendar} optional>
                      <input
                        type="number"
                        min={15}
                        max={70}
                        value={form.age}
                        onChange={update("age")}
                        placeholder="e.g. 25"
                        className={inputClass(false)}
                      />
                    </Field>

                    {/* Your Goal — pill select */}
                    <div className="mb-4">
                      <label className="mb-1.5 flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-gray-500">
                        <Target className="h-3.5 w-3.5 text-gray-500" />
                        Your Goal
                        <span className="text-[9px] normal-case tracking-normal text-gray-600">
                          (optional)
                        </span>
                      </label>
                      <PillGroup
                        options={goalOptions}
                        value={form.goal}
                        onChange={(v) => setForm((prev) => ({ ...prev, goal: v }))}
                      />
                    </div>

                    {/* Membership Interest — pill select */}
                    <div className="mb-4">
                      <label className="mb-1.5 flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-gray-500">
                        <CreditCard className="h-3.5 w-3.5 text-gray-500" />
                        Membership Interest
                        <span className="text-[9px] normal-case tracking-normal text-gray-600">
                          (optional)
                        </span>
                      </label>
                      <PillGroup
                        options={membershipOptions}
                        value={form.membership}
                        onChange={(v) =>
                          setForm((prev) => ({ ...prev, membership: v }))
                        }
                      />
                    </div>

                    <Field
                      label="How did you hear about us?"
                      icon={MessageCircle}
                      optional
                    >
                      <div className="relative">
                        <select
                          value={form.source}
                          onChange={update("source")}
                          className={inputClass(false, "appearance-none pr-10")}
                        >
                          <option value="">Select an option</option>
                          <option value="instagram">Instagram</option>
                          <option value="youtube">YouTube</option>
                          <option value="referral">Friend / Referral</option>
                          <option value="google">Google</option>
                          <option value="walked-in">Walked In</option>
                          <option value="other">Other</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                      </div>
                    </Field>

                    <Field label="Message / Goal Details" icon={MessageSquare} optional>
                      <textarea
                        value={form.message}
                        onChange={update("message")}
                        rows={2}
                        placeholder="e.g. I want to lose 10kg in 3 months..."
                        className={inputClass(false, "resize-none")}
                      />
                    </Field>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 py-4 text-sm font-black uppercase tracking-[0.06em] text-black transition-all duration-200 hover:scale-[1.02] hover:bg-yellow-300 active:scale-95 disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:scale-100"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          SENDING...
                        </>
                      ) : (
                        <>
                          SEND MY ENQUIRY
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>

                    <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-gray-500">
                      <Lock className="h-3 w-3" />
                      Your info is private. No spam ever.
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ================= TRUST BADGES (full width, both breakpoints) ================= */}
          <div className="lg:col-span-2">
            <TrustBadges />
          </div>
        </div>
      </section>
    </main>
  );
}
