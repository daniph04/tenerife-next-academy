"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Item = { title: string; image: string };

type Props = {
  items: Item[];
};

export default function FacilityGallery({ items }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/30"
        >
          <div className="relative h-56 w-full">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>
          <div className="p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              {item.title}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
