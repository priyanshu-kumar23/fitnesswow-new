"use client";

import { useState, type FormEvent, type ChangeEvent, type ReactNode } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  Calendar,
  MapPin,
  CreditCard,
  MessageCircle,
  Target,
  ChevronDown,
  Loader2,
  CheckCircle,
  Shield,
  Clock,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  age: string;
  city: string;
  plan: string;
  source: string;
  goal: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  age: "",
  city: "",
  plan: "",
  source: "",
  goal: "",
};

type Errors = Partial<Record<"name" | "phone" | "email", string>>;

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

      {/* ================= FORM CARD ================= */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-28 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-lg rounded-3xl border border-white/[0.08] bg-zinc-950 p-6 shadow-2xl shadow-black sm:p-8"
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
                <CheckCircle className="h-12 w-12 text-yellow-400" />

                <h2 className="mt-5 text-xl font-black uppercase text-white">
                  ENQUIRY SENT!
                </h2>

                <p className="mt-2 max-w-xs text-sm text-gray-400">
                  We&apos;ve received your details and will contact you
                  within 24 hours.
                </p>

                <Link
                  href="/"
                  className="mt-8 inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white/10"
                >
                  Back to Home
                </Link>
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
                <p className="text-[10px] uppercase tracking-[0.25em] text-yellow-400">
                  MEMBERSHIP ACCESS
                </p>

                <h1 className="mt-2 text-3xl font-black uppercase leading-tight">
                  START YOUR
                  <br />
                  <span className="text-yellow-400">JOURNEY</span>
                </h1>

                <p className="mt-2 text-xs leading-relaxed text-gray-400">
                  No commitment. Just tell us about yourself and we&apos;ll
                  reach out within 24 hours.
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
                      value={form.age}
                      onChange={update("age")}
                      placeholder="e.g. 25"
                      className={inputClass(false)}
                    />
                  </Field>

                  <Field label="City" icon={MapPin} optional>
                    <input
                      type="text"
                      value={form.city}
                      onChange={update("city")}
                      placeholder="e.g. Greater Noida"
                      className={inputClass(false)}
                    />
                  </Field>

                  <Field label="Membership Plan" icon={CreditCard} optional>
                    <div className="relative">
                      <select
                        value={form.plan}
                        onChange={update("plan")}
                        className={inputClass(false, "appearance-none pr-10")}
                      >
                        <option value="">Exploring options...</option>
                        <option value="monthly">Monthly Plan</option>
                        <option value="quarterly">Quarterly Plan (3 Months)</option>
                        <option value="half-yearly">Half-Yearly Plan (6 Months)</option>
                        <option value="annual">Annual Plan (Best Value)</option>
                        <option value="personal-training">Personal Training</option>
                        <option value="enquire">Just want to enquire</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    </div>
                  </Field>

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

                  <Field label="Message / Goal" icon={Target} optional>
                    <textarea
                      value={form.goal}
                      onChange={update("goal")}
                      rows={3}
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
                        SEND ENQUIRY
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <p className="mt-3 text-center text-[11px] text-gray-500">
                    We&apos;ll contact you within 24 hours. No spam, ever.
                  </p>

                  <div className="mt-2 flex flex-wrap justify-center gap-4 text-[10px] text-gray-600">
                    <span className="flex items-center gap-1">
                      <Shield className="h-3 w-3" />
                      100% Private
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      24hr Response
                    </span>
                    <span className="flex items-center gap-1">
                      <Check className="h-3 w-3" />
                      No Commitment
                    </span>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}
