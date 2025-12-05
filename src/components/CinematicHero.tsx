"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

type HeroStat = {
  label: string;
  value: string;
  hint?: string;
};

type CinematicHeroProps = {
  backgroundImage?: string;
  backgroundVideo?: string;
  backgroundAlt?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  eyebrow?: string;
  overlayLabel?: string;
  align?: "center" | "left";
  actions?: HeroAction[];
  stats?: HeroStat[];
  className?: string;
};

/**
 * Full-bleed hero with image/video support, CTA actions, and optional stats.
 * Use across pages for consistent cinematic intros.
 */
export default function CinematicHero({
  backgroundImage,
  backgroundVideo,
  backgroundAlt = "Tenerife Next Academy",
  title,
  subtitle,
  eyebrow,
  overlayLabel,
  align = "center",
  actions = [],
  stats = [],
  className = "",
}: CinematicHeroProps) {
  const hasVideo = Boolean(backgroundVideo);
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";
  const contentAlign = align === "left" ? "items-start md:items-start" : "items-center";

  return (
    <section className={`relative isolate flex min-h-screen items-center overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        {hasVideo && backgroundVideo ? (
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            src={backgroundVideo}
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
          />
        ) : (
          backgroundImage && (
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
          )
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

      {overlayLabel && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="text-[18vw] font-black uppercase tracking-[0.14em] text-white/5 sm:text-[14vw] lg:text-[10vw]">
            {overlayLabel}
          </span>
        </div>
      )}

      <div className={`relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-28 ${alignment}`}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`flex max-w-4xl flex-col gap-5 ${contentAlign}`}
        >
          {eyebrow && (
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#7ad8ff]">
              {eyebrow}
            </span>
          )}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[1.02] tracking-tight text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="max-w-3xl text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed">
              {subtitle}
            </p>
          )}
          {actions.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {actions.map((action) => (
                <CTAButton
                  key={action.label}
                  href={action.href}
                  variant={action.variant}
                >
                  {action.label}
                </CTAButton>
              ))}
            </div>
          )}
        </motion.div>

        {stats.length > 0 && (
          <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md shadow-lg shadow-black/30"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-white/60">{stat.label}</p>
                <p className="text-2xl font-black text-white">{stat.value}</p>
                {stat.hint && <p className="text-xs text-white/60">{stat.hint}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
