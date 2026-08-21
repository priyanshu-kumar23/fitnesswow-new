"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">

        {/* Glow */}
        <div className="absolute left-[-120px] top-0 h-[320px] w-[320px] rounded-full bg-yellow-400/10 blur-[120px]" />

        <div className="absolute bottom-0 right-[-120px] h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[120px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative z-10">

        {/* ================= TOP ================= */}
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 text-center sm:px-8 sm:py-16 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr] lg:gap-12 lg:px-10 lg:text-left">

          {/* ================= BRAND ================= */}
          <div className="flex flex-col items-center lg:items-start">

            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="MR WOW FITNESS"
                width={170}
                height={170}
                className="w-[140px] sm:w-[170px]"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-gray-400 sm:text-base">
              Transform your body, elevate your confidence, and unlock your
              strongest version with premium workouts, expert trainers, and
              high-energy fitness programs.
            </p>

            {/* Social */}
            <div className="mt-7 flex items-center justify-center gap-4 lg:justify-start">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/mr.wowfitness?igsh=ZDJ1c3M0b2c4Z3Ns"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40 hover:bg-pink-500/10"
              >
                <FaInstagram className="h-5 w-5 text-pink-400 transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* Phone */}
              <a
                href="tel:+919354545001"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-yellow-400/10"
              >
                <Phone className="h-5 w-5 text-yellow-400" />
              </a>

              {/* Mail */}
              <a
                href="mailto:mrwowfitness@gmail.com"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-yellow-400/10"
              >
                <Mail className="h-5 w-5 text-yellow-400" />
              </a>
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>

            <h3 className="text-xl font-semibold uppercase lg:text-2xl">
              Quick Links
            </h3>

            <div className="mt-6 grid grid-cols-2 justify-items-center gap-x-4 gap-y-4 lg:flex lg:flex-col lg:justify-items-start lg:gap-4">

              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Programs", href: "/programs" },
                { name: "Diet Plan", href: "/diet-plan" },
                { name: "Fitness Plan", href: "/fitness-plan" },
                { name: "Pricing", href: "/pricing" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-2 text-sm text-gray-400 transition-all duration-300 hover:text-yellow-400 sm:text-base"
                >
                  <ArrowUpRight className="h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ================= SERVICES ================= */}
          <div>

            <h3 className="text-xl font-semibold uppercase lg:text-2xl">
              Our Services
            </h3>

            <div className="mt-6 flex flex-col items-center gap-4 lg:items-start">

              {[
                "Strength Training",
                "Personal Training",
                "Fat Loss Programs",
                "Muscle Building",
                "Cardio Workouts",
                "Functional Training",
                "Diet Guidance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-gray-400 sm:text-base"
                >
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400" />

                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* ================= CONTACT ================= */}
          <div>

            <h3 className="text-xl font-semibold uppercase lg:text-2xl">
              Contact Info
            </h3>

            <div className="mt-6 space-y-6 lg:space-y-5">

              {/* Address */}
              <div className="flex flex-col items-center gap-3 text-center lg:flex-row lg:items-start lg:gap-4 lg:text-left">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Address
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    Plot No-115, Sector-4,
                    <br />
                    Iteda, Greater Noida,
                    <br />
                    Uttar Pradesh 201318
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center gap-3 text-center lg:flex-row lg:items-start lg:gap-4 lg:text-left">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10">
                  <Phone className="h-5 w-5 text-yellow-400" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Phone
                  </p>

                  <a
                    href="tel:+919354545001"
                    className="mt-2 block text-sm text-gray-400 transition-colors hover:text-yellow-400"
                  >
                    +91 93545 45001
                  </a>
                </div>
              </div>

              {/* Timing */}
              <div className="flex flex-col items-center gap-3 text-center lg:flex-row lg:items-start lg:gap-4 lg:text-left">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10">
                  <Clock3 className="h-5 w-5 text-yellow-400" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Working Hours
                  </p>

                  <p className="mt-2 text-sm text-gray-400">
                    Open 18/6 Hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FOOTER MAP ================= */}
        <div className="px-5 pb-10 sm:px-8 lg:px-10">

          <div className="overflow-hidden rounded-[28px] border border-white/10 shadow-[0_0_40px_rgba(250,204,21,0.06)]">

            <iframe
              src="https://www.google.com/maps?q=28.6004816,77.4425365&z=17&output=embed"
              width="100%"
              height="260"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 grayscale-[0.15]"
            ></iframe>

          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-white/10">

          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-6 text-center sm:px-8 md:flex-row lg:px-10">

            <p className="text-sm text-gray-500">
              © 2026 MR WOW FITNESS. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">

              <Link
                href="/"
                className="text-sm text-gray-500 transition-colors hover:text-yellow-400"
              >
                Privacy Policy
              </Link>

              <Link
                href="/"
                className="text-sm text-gray-500 transition-colors hover:text-yellow-400"
              >
                Terms & Conditions
              </Link>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;