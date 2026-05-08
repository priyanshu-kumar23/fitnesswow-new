"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

const FloatingButtons = () => {
  return (
    <>
      {/* ================= WHATSAPP ================= */}
      <Link
        href="https://wa.me/919354545001"
        target="_blank"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-20 right-4 z-[9999] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#25D366] shadow-[0_0_30px_rgba(37,211,102,0.35)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_45px_rgba(37,211,102,0.5)] sm:bottom-24 sm:right-5 sm:h-14 sm:w-14"
      >

        {/* Pulse */}
        <div className="absolute inset-0 rounded-full bg-[#25D366]/30 blur-md transition-all duration-300 group-hover:scale-125" />

        {/* Icon */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="relative z-10 h-5 w-5 sm:h-6 sm:w-6"
        />
      </Link>

      {/* ================= SCROLL TOP ================= */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        aria-label="Scroll To Top"
        className="group fixed bottom-4 right-4 z-[9999] flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/20 bg-black/80 text-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_40px_rgba(250,204,21,0.35)] sm:bottom-5 sm:right-5 sm:h-12 sm:w-12"
      >

        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-yellow-400/10 blur-md opacity-0 transition-all duration-300 group-hover:opacity-100" />

        <ArrowUp className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-[2px] sm:h-5 sm:w-5" />
      </button>
    </>
  );
};

export default FloatingButtons;