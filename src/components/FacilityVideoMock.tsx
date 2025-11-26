"use client";

import { motion } from "framer-motion";

export default function FacilityVideoMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl shadow-black/40"
    >
      <div className="mx-auto w-full max-w-xs rounded-[32px] border border-white/20 bg-black/70 p-3 shadow-lg shadow-black/30">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[24px] border border-white/15 bg-black">
          <video
            src="/images/hero-facilities.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-white/70">
        Training preview · Tenerife Top Training
      </div>
    </motion.div>
  );
}
