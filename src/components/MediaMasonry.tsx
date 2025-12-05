"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type MediaItem = {
  src: string;
  alt: string;
  type?: "image" | "video";
};

type Props = {
  items: MediaItem[];
};

export default function MediaMasonry({ items }: Props) {
  const [active, setActive] = useState<MediaItem | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item) => (
          <button
            key={item.src}
            className="group relative mb-4 block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:shadow-2xl"
            onClick={() => setActive(item)}
            aria-label={`Open ${item.alt}`}
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                className="h-full w-full object-cover"
                muted
                loop
                autoPlay
                playsInline
              />
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                width={900}
                height={1200}
                className="h-full w-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
            <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
              {item.alt}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              {active.type === "video" ? (
                <video
                  src={active.src}
                  className="h-full w-full object-contain"
                  controls
                  autoPlay
                  loop
                  playsInline
                />
              ) : (
                <Image
                  src={active.src}
                  alt={active.alt}
                  width={1600}
                  height={1200}
                  className="h-full w-full object-contain"
                />
              )}
              <button
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white hover:bg-black/90"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
