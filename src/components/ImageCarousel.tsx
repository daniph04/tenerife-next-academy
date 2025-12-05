"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Slide = {
  title: string;
  description: string;
  image: string;
};

type Props = {
  slides: Slide[];
  intervalMs?: number;
  heightClass?: string;
  overlayCenter?: boolean;
  hoverScale?: boolean;
  className?: string;
};

export default function ImageCarousel({
  slides,
  intervalMs = 9000,
  heightClass = "h-[70vh] min-h-[520px]",
  overlayCenter = false,
  hoverScale = false,
  className = "",
}: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [slides.length, intervalMs]);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[index];

  return (
    <div className={`relative overflow-hidden rounded-none bg-black/30 ${className}`}>
      <div className={`relative w-full ${heightClass}`}>
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.image}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 group"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="(min-width:1024px) 100vw, 100vw"
              className={`object-cover transition duration-700 ${hoverScale ? "group-hover:scale-[1.06]" : ""}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
            <div
              className={`absolute inset-0 flex p-6 md:p-10 ${
                overlayCenter ? "items-center justify-center text-center" : "items-end justify-end text-left"
              }`}
            >
              <div className={`flex flex-col gap-3 ${overlayCenter ? "items-center text-center" : "max-w-2xl"}`}>
                <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]">
                  {slide.title}
                </h3>
                <p className="max-w-2xl text-base md:text-lg text-white/85 drop-shadow-[0_8px_12px_rgba(0,0,0,0.6)]">
                  {slide.description}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center px-3">
        <button
          onClick={prev}
          className="rounded-full border border-white/15 bg-black/55 p-3 text-white transition hover:bg-black/80"
          aria-label="Previous slide"
        >
          ‹
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center px-3">
        <button
          onClick={next}
          className="rounded-full border border-white/15 bg-black/55 p-3 text-white transition hover:bg-black/80"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-6 rounded-full ${i === index ? "bg-[#00B5E2]" : "bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
