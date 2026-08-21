"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BRAND = "MR WOW FITNESS";

const PageLoader = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("loaderShown");

    if (hasLoaded) return;

    sessionStorage.setItem("loaderShown", "true");
    setShow(true);

    const timer = setTimeout(() => setShow(false), 1900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center overflow-hidden bg-black"
        >
          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[120px] sm:h-[360px] sm:w-[360px]" />

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-yellow-400/20 bg-black/80 shadow-[0_0_40px_rgba(250,204,21,0.15)] backdrop-blur-xl sm:h-24 sm:w-24"
          >
            <Image
              src="/logo.png"
              alt="MR WOW FITNESS"
              width={70}
              height={70}
              priority
              className="h-12 w-12 object-contain sm:h-16 sm:w-16"
            />
          </motion.div>

          {/* Brand Name — Letter Reveal */}
          <div className="relative z-10 mt-5 flex">
            {BRAND.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.03, duration: 0.3 }}
                className="text-sm font-black uppercase tracking-[0.25em] text-white sm:text-base"
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="relative z-10 mt-6 h-[3px] w-40 overflow-hidden rounded-full bg-white/10 sm:w-52">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full rounded-full bg-yellow-400"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
