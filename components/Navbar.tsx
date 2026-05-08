"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ArrowRight, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Pricing", href: "/pricing" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  /* ================= PREVENT BACKGROUND SCROLL ================= */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 top-0 z-[9999] w-full px-3 py-3 sm:px-4"
    >

      {/* ================= NAVBAR CONTAINER ================= */}
      <div className="relative mx-auto max-w-7xl overflow-visible rounded-2xl">

        {/* ================= MOBILE SPARK ================= */}
        <div className="absolute inset-x-0 top-0 h-[2px] overflow-hidden rounded-t-2xl lg:hidden">

          <motion.div
            animate={{
              x: ["-10%", "100%", "-10%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-full w-24 bg-gradient-to-r from-transparent via-yellow-400 to-transparent blur-[2px]"
          />
        </div>

        {/* ================= MAIN NAVBAR ================= */}
        <div className="relative rounded-2xl border border-yellow-400/10 bg-black/65 backdrop-blur-2xl">

          {/* Glow */}
          <div className="absolute left-0 top-0 h-full w-32 bg-yellow-400/5 blur-3xl" />

          <div className="absolute right-0 top-0 h-full w-32 bg-orange-500/5 blur-3xl" />

          {/* ================= TOP ROW ================= */}
          <div className="relative flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4">

            {/* ================= LEFT ================= */}
            <Link
              href="/"
              className="relative z-10 flex items-center gap-2 sm:gap-3"
            >

              {/* Logo */}
          {/* Logo */}
<div className="relative h-11 w-11 sm:h-12 sm:w-12 overflow-visible flex-shrink-0">

  <div className="absolute inset-0 scale-[1.45] rounded-2xl border border-yellow-400/20 bg-black shadow-[0_0_25px_rgba(250,204,21,0.25)] overflow-hidden">

    <Image
      src="/logo.png"
      alt="MR WOW FITNESS"
      fill
      className="object-cover"
    />
  </div>
</div>

              {/* Text */}
             {/* Text */}
<div className="ml-2 flex flex-col items-center leading-[0.85]">

  <h1 className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent text-sm font-black uppercase tracking-[0.22em] sm:text-lg lg:text-xl">
    MR WOW
  </h1>

  <p className="mt-[3px] text-center text-[8px] font-semibold uppercase tracking-[0.38em] text-white/75 sm:text-[9px]">
    FITNESS
  </p>
</div>
            </Link>

            {/* ================= DESKTOP NAV ================= */}
            <nav className="relative z-10 hidden items-center gap-6 xl:gap-8 lg:flex">

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative text-xs font-semibold uppercase tracking-[0.18em] text-gray-200 transition-all duration-300 hover:text-yellow-400 xl:text-sm"
                >
                  {item.name}

                  {/* Underline */}
                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* ================= RIGHT ================= */}
            <div className="relative z-10 flex items-center gap-2 sm:gap-3">

              {/* Desktop Button */}
              <button className="group relative hidden overflow-hidden rounded-full bg-yellow-400 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(250,204,21,0.45)] sm:flex sm:items-center sm:gap-2 lg:px-6 lg:text-xs">

                <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="relative z-10 flex items-center gap-2">
                  Join Now

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>

              {/* ================= MOBILE BUTTON ================= */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/10 lg:hidden"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Bottom Glow */}
          <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />
        </div>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-[88px] z-[9998] bg-black/95 backdrop-blur-2xl lg:hidden"
            >

              {/* Scrollable Content */}
              <div className="h-full overflow-y-auto px-5 py-6">

                <div className="mx-auto flex max-w-md flex-col gap-5 pb-24">

                  {/* Links */}
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.06,
                      }}
                    >

                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-gray-200 transition-all duration-300 hover:border-yellow-400/20 hover:bg-yellow-400/[0.05] hover:text-yellow-400"
                      >
                        {item.name}

                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </motion.div>
                  ))}

                  {/* CTA */}
                  <motion.button
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.25,
                    }}
                    className="mt-4 flex w-full items-center justify-center gap-3 rounded-full bg-yellow-400 px-6 py-5 text-sm font-black uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(250,204,21,0.4)]"
                  >

                    Join Now

                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;