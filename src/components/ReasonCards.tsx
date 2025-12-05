"use client";

import { motion } from "framer-motion";

type Reason = {
  title: string;
  body: string;
};

type Props = {
  reasons: Reason[];
};

/**
 * Client-side grid for animated reason cards.
 */
export default function ReasonCards({ reasons }: Props) {
  return (
    <>
      {reasons.map((reason, idx) => (
        <motion.div
          key={reason.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: idx * 0.05 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/35"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00B5E2]">
            {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{reason.title}</h3>
          <p className="mt-3 text-base text-white/70">{reason.body}</p>
        </motion.div>
      ))}
    </>
  );
}
