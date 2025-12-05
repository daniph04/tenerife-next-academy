"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Destination = {
  title: string;
  image: string;
  summary: string;
  bullets: string[];
};

type Props = {
  items: Destination[];
};

export default function DestinationHighlights({ items }: Props) {
  const [active, setActive] = useState(items[0]);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => {
          const isActive = item.title === active.title;
          return (
            <button
              key={item.title}
              onClick={() => setActive(item)}
              className={`group relative overflow-hidden rounded-3xl border ${isActive ? "border-[#00B5E2]" : "border-white/10"} bg-white/5 shadow-xl shadow-black/40 transition hover:-translate-y-1 hover:shadow-2xl`}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={900}
                height={600}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <p className="text-lg font-semibold text-white text-left">{item.title}</p>
                <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  Explore
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/40"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#00B5E2]">Destination insight</p>
          <h3 className="mt-2 text-2xl font-bold text-white">{active.title}</h3>
          <p className="mt-3 text-base text-white/80">{active.summary}</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {active.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00B5E2]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
