"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ChevronRight,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

import { FaInstagram, FaYoutube } from "react-icons/fa";

const MAPS_EMBED_SRC =
  "https://maps.google.com/maps?q=Mr+Wow+Fitness+Plot+115+Sector+4+Greater+Noida+West+Uttar+Pradesh+201318&output=embed&z=16";

const MAPS_SHARE_URL = "https://maps.app.goo.gl/MiZy4S8Kn9L4jKan8";

const mobileQuickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Membership", href: "/pricing" },
];

const mobileExploreLinks = [
  { name: "Diet Plan", href: "/diet-plan" },
  { name: "Fitness Plan", href: "/fitness-plan" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

const desktopNavigateLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Membership", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const desktopExploreLinks = [
  { name: "Diet Plan", href: "/diet-plan" },
  { name: "Fitness Plan", href: "/fitness-plan" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Join Now", href: "/joinnow" },
];

function SocialIcons({ size = "h-9 w-9" }: { size?: string }) {
  return (
    <div className="flex items-center gap-3">
      <a
        href="https://www.instagram.com/mr.wowfitness?igsh=ZDJ1c3M0b2c4Z3Ns"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={`group flex ${size} items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-gray-400 transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400`}
      >
        <FaInstagram className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
      </a>

      <a
        href="#"
        aria-label="YouTube"
        className={`group flex ${size} items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-gray-400 transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400`}
      >
        <FaYoutube className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
      </a>

      <a
        href="https://wa.me/919354545001"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={`group flex ${size} items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-gray-400 transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400`}
      >
        <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
      </a>
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="noise relative overflow-hidden bg-zinc-950 text-white">

      {/* ================= TOP ACCENT ================= */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">

        {/* Top-Center Radial Glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(245,197,24,0.04) 0%, transparent 50%)",
          }}
        />

        {/* Corner Glows */}
        <div className="absolute left-[-120px] top-0 h-[320px] w-[320px] rounded-full bg-yellow-400/10 blur-[120px]" />
        <div className="absolute bottom-0 right-[-120px] h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[120px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative z-10">

        {/* ================= MOBILE FOOTER ================= */}
        <div className="px-5 py-8 md:hidden">

          {/* Brand Block */}
          <div className="flex flex-col items-center text-center">

            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="MR WOW FITNESS"
                width={36}
                height={36}
                className="h-9 w-9 rounded-lg object-cover"
              />
              <span className="text-sm font-black uppercase tracking-wider text-white">
                MR WOW FITNESS
              </span>
            </Link>

            <p className="mt-1 text-xs text-gray-400">
              Train Hard. Live Stronger.
            </p>

            <div className="mt-4">
              <SocialIcons size="h-9 w-9" />
            </div>
          </div>

          <div className="my-4 border-t border-white/8" />

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <h3 className="mb-2 text-[10px] uppercase tracking-widest text-yellow-400">
                Quick Links
              </h3>
              <div className="flex flex-col">
                {mobileQuickLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="py-1 text-xs leading-7 text-gray-400 transition-colors hover:text-yellow-400"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-[10px] uppercase tracking-widest text-yellow-400">
                Explore
              </h3>
              <div className="flex flex-col">
                {mobileExploreLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="py-1 text-xs leading-7 text-gray-400 transition-colors hover:text-yellow-400"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="my-4 border-t border-white/8" />

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-3">
            <div className="mx-auto flex max-w-xs items-start gap-2 text-left">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-yellow-400" />
              <p className="text-xs text-gray-400">
                Plot 115, Sec-4, Greater Noida West - 201318
              </p>
            </div>

            <div className="mx-auto flex max-w-xs items-start gap-2 text-left">
              <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-yellow-400" />
              <a
                href="tel:+919354545001"
                className="text-xs text-gray-400 transition-colors hover:text-yellow-400"
              >
                +91 93545 45001
              </a>
            </div>

            <div className="mx-auto flex max-w-xs items-start gap-2 text-left">
              <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-yellow-400" />
              <a
                href="mailto:rahulyadav809052@gmail.com"
                className="text-xs text-gray-400 transition-colors hover:text-yellow-400"
              >
                rahulyadav809052@gmail.com
              </a>
            </div>

            <div className="mx-auto flex max-w-xs items-start gap-2 text-left">
              <Clock3 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-yellow-400" />
              <p className="text-xs text-gray-400">
                Mon – Sat &middot; 6AM – 12AM
              </p>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP FOOTER ================= */}
        <div className="hidden md:block">

          <div className="mx-auto grid max-w-7xl gap-10 px-8 py-14 lg:grid-cols-[2fr_1fr_1fr_1.2fr] lg:gap-8 lg:px-10">

            {/* ================= BRAND ================= */}
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="MR WOW FITNESS"
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-xl object-cover"
                />
                <span className="text-xl font-black uppercase tracking-wide text-white">
                  MR WOW FITNESS
                </span>
              </Link>

              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-yellow-400">
                Where Champions Are Built
              </p>

              <p className="mt-2 max-w-[220px] text-xs leading-relaxed text-gray-500">
                Premium gym in Greater Noida West with elite coaching, modern
                equipment, and a transformation-first community.
              </p>

              <div className="mt-4">
                <SocialIcons size="h-9 w-9" />
              </div>
            </div>

            {/* ================= NAVIGATE ================= */}
            <div>
              <h3 className="mb-4 text-[10px] uppercase tracking-widest text-yellow-400">
                Navigate
              </h3>

              <div className="flex flex-col gap-3">
                {desktopNavigateLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex items-center gap-1 text-sm text-gray-400 transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    {item.name}
                    <ChevronRight className="h-3 w-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>

            {/* ================= EXPLORE ================= */}
            <div>
              <h3 className="mb-4 text-[10px] uppercase tracking-widest text-yellow-400">
                Explore
              </h3>

              <div className="flex flex-col gap-3">
                {desktopExploreLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex items-center gap-1 text-sm text-gray-400 transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    {item.name}
                    <ChevronRight className="h-3 w-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>

            {/* ================= VISIT US ================= */}
            <div>
              <h3 className="mb-4 text-[10px] uppercase tracking-widest text-yellow-400">
                Visit Us
              </h3>

              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />
                  <p className="text-xs leading-relaxed text-gray-400">
                    Plot 115, Sec-4, Greater Noida West
                    <br />
                    UP, India - 201318
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />
                  <p className="text-xs leading-relaxed text-gray-400">
                    Mon–Sun: 6:00 AM – 12:00 AM
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />
                  <a
                    href="mailto:rahulyadav809052@gmail.com"
                    className="text-xs leading-relaxed text-gray-400 transition-colors hover:text-yellow-400"
                  >
                    rahulyadav809052@gmail.com
                  </a>
                </div>

                <div className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />
                  <a
                    href="tel:+919354545001"
                    className="text-xs leading-relaxed text-gray-400 transition-colors hover:text-yellow-400"
                  >
                    +91 93545 45001
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MAP (shared, both breakpoints) ================= */}
        <div className="px-5 pt-2 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">

            <div className="flex items-center justify-center gap-2 pb-3">
              <MapPin className="h-3.5 w-3.5 text-yellow-400" />
              <p className="text-[10px] uppercase tracking-widest text-yellow-400">
                Our Location
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/8">
              <iframe
                src={MAPS_EMBED_SRC}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[180px] w-full border-0 opacity-75 transition-opacity duration-300 hover:opacity-100 sm:h-[220px]"
              />
            </div>

            <a
              href={MAPS_SHARE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-1 text-xs text-yellow-400 transition-colors hover:text-yellow-300"
            >
              <ExternalLink className="h-3 w-3" />
              View on Google Maps
            </a>
          </div>
        </div>

        {/* ================= BOTTOM BAR (shared, both breakpoints) ================= */}
        <div className="mt-8 border-t border-white/8 pt-4">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-5 pb-6 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left lg:px-10">

            <p className="text-[11px] text-gray-600">
              &copy; 2026 MR WOW FITNESS &middot; All Rights Reserved
            </p>

            <p className="text-[11px] text-gray-600">
              Crafted with passion by{" "}
              <a
                href="https://velotixtech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 transition-colors hover:text-yellow-300"
              >
                Velotix Tech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
