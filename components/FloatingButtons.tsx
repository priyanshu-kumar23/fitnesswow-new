"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

const FloatingButtons = () => {
  return (
    <>
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/919354545001"
        target="_blank"
        className="fixed bottom-16 right-3 z-[9999] flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 sm:bottom-20 sm:right-4 sm:h-12 sm:w-12"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="h-5 w-5 sm:h-6 sm:w-6"
        />
      </Link>

      {/* Scroll To Top */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-4 right-3 z-[9999] flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-black shadow-[0_0_20px_rgba(250,204,21,0.35)] transition-all duration-300 hover:scale-110 sm:bottom-5 sm:right-4 sm:h-12 sm:w-12"
      >
        <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
    </>
  );
};

export default FloatingButtons;