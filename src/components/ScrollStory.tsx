"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type StoryItem = {
  title: string;
  description: string;
  image: string;
  bullets?: string[];
};

type Props = {
  items: StoryItem[];
};

export default function ScrollStory({ items }: Props) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            if (!Number.isNaN(idx)) setActive(idx);
          }
        });
      },
      { rootMargin: "-25% 0px -35% 0px", threshold: 0.2 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const current = items[active];

  return (
    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div className="space-y-10">
        {items.map((item, idx) => (
          <div
            key={item.title}
            ref={(el) => (refs.current[idx] = el)}
            data-index={idx}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00B5E2]">
                  Step {idx + 1} / {items.length}
                </p>
                <h3 className="text-2xl font-semibold uppercase leading-tight text-white sm:text-3xl">
                  {item.title}
                </h3>
                <p className="text-base text-white/80">{item.description}</p>
              </div>
              <span
                className={`mt-1 h-3 w-3 flex-none rounded-full transition ${
                  active === idx ? "bg-[#00B5E2]" : "bg-white/30"
                }`}
              />
            </div>
            {item.bullets && (
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00B5E2]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="relative h-full">
        <div className="sticky top-24 h-[60vh] rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-black/40 lg:h-[70vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.image}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 overflow-hidden rounded-[32px]"
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority={false}
              />
              <motion.div
                key={`${current.image}-overlay`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent"
              />
              <motion.div
                initial={{ scale: 1.02 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.9 }}
                className="absolute inset-0"
              />
              <div className="absolute inset-0 flex flex-col justify-end gap-3 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                  {active + 1} · {current.title}
                </p>
                <p className="max-w-xl text-base text-white/85">{current.description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
