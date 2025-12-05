"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroFullProps {
  backgroundImage?: string;
  backgroundVideo?: string;
  backgroundAlt?: string;
  title: ReactNode | string;
  subtitle?: string;
  eyebrow?: string;
  bottomText?: string;
  overlayText?: string;
}

export default function HeroFull({
  backgroundImage,
  backgroundVideo,
  backgroundAlt = "Tenerife Next Academy",
  title,
  subtitle,
  eyebrow,
  bottomText,
  overlayText,
}: HeroFullProps) {
  const hasVideo = Boolean(backgroundVideo);

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        {hasVideo && backgroundVideo ? (
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            src={backgroundVideo}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
          />
        ) : backgroundImage ? (
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
          >
            <Image
              src={backgroundImage}
              alt={backgroundAlt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        ) : null}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-black/80" />

      {overlayText && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <h2 className="text-[16vw] font-black uppercase tracking-[0.14em] text-white/10 sm:text-[12vw] lg:text-[9vw]">
            {overlayText}
          </h2>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center py-28 md:py-32"
      >
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-5 text-xs sm:text-sm uppercase tracking-[0.3em] text-white/70"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[1.02] tracking-[0.08em] text-white"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mx-auto mt-8 max-w-4xl text-lg text-white/80 sm:text-xl md:text-2xl"
          >
            {subtitle}
          </motion.p>
        )}

        {bottomText && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-10 text-xs uppercase tracking-[0.22em] text-white/65"
          >
            {bottomText}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
