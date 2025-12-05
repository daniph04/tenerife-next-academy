"use client";

import { motion } from "framer-motion";

type Props = {
  src: string;
  title: string;
  subtitle?: string;
  overlayText?: string;
};

export default function FacilityHeroVideo({ src, title, subtitle, overlayText }: Props) {
  return (
    <div className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-black">
      <video
        src={src}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-black/80" />

      {overlayText && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="text-[15vw] font-black uppercase tracking-[0.14em] text-white/8 sm:text-[10vw]">
            {overlayText}
          </span>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center md:py-32"
      >
        <p className="mb-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#00B5E2]">
          Perform to excellence
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-[1.02] tracking-[0.08em] text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-8 max-w-4xl text-lg text-white/80 sm:text-xl md:text-2xl">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
