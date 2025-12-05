"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Destination } from "@/data/destinations";

type Props = {
  items: Destination[];
};

export default function DestinationSelectableStrip({ items }: Props) {
  const [active, setActive] = useState(items[0]?.slug);
  const activeItem = items.find((d) => d.slug === active) ?? items[0];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((dest) => {
          const isActive = dest.slug === activeItem?.slug;
          return (
            <motion.button
              key={dest.slug}
              onClick={() => setActive(dest.slug)}
              className={`relative aspect-[3/4] overflow-hidden rounded-2xl border bg-white/5 shadow-lg transition ${isActive ? "border-[#00B5E2] shadow-[0_12px_40px_rgba(0,181,226,0.35)]" : "border-white/10 shadow-black/25"}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              <Image
                src={dest.image}
                alt={dest.title}
                fill
                sizes="(min-width:1024px) 18vw, 50vw"
                className={`object-cover transition duration-500 ${isActive ? "scale-[1.05]" : "opacity-90"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-sm font-semibold text-white">{dest.title}</p>
              </div>
            </motion.button>
          );
        })}
      </div>

      {activeItem && (
        <motion.div
          key={activeItem.slug}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/30"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00B5E2]">
            {activeItem.title}
          </p>
          <p className="mt-2 text-lg text-white/85">{activeItem.summary}</p>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            {activeItem.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00B5E2]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}
