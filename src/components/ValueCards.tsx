"use client";

import { motion } from "framer-motion";

type ValueItem = {
  title: string;
  detail: string;
};

type Props = {
  values: ValueItem[];
};

export default function ValueCards({ values }: Props) {
  return (
    <>
      {values.map((value) => (
        <motion.div
          key={value.title}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/35"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#00B5E2]">
            {value.title}
          </p>
          <p className="mt-2 text-base text-white/75">{value.detail}</p>
        </motion.div>
      ))}
    </>
  );
}
