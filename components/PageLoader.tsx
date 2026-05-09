"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const PageLoader = () => {
  const pathname = usePathname();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center overflow-hidden bg-black">

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[120px] sm:h-[360px] sm:w-[360px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Loader */}
      <div className="relative flex items-center justify-center">

        {/* Outer Ring */}
        <div className="absolute h-28 w-28 animate-spin rounded-full border-[3px] border-yellow-400/10 border-t-yellow-400 sm:h-36 sm:w-36" />

        {/* Inner Ring */}
        <div className="absolute h-20 w-20 animate-spin rounded-full border-[3px] border-orange-400/10 border-b-orange-500 [animation-direction:reverse] sm:h-28 sm:w-28" />

        {/* Logo */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-yellow-400/20 bg-black/80 shadow-[0_0_40px_rgba(250,204,21,0.15)] backdrop-blur-xl sm:h-24 sm:w-24">

          <Image
            src="/logo.png"
            alt="MR WOW FITNESS"
            width={70}
            height={70}
            priority
            className="h-12 w-12 object-contain sm:h-16 sm:w-16"
          />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;