"use client";

import { motion } from "framer-motion";

export default function FacilityVideoMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center"
    >
      <div className="mx-auto w-full max-w-xs rounded-[26px] bg-black/75 p-3 shadow-2xl shadow-black/60 ring-1 ring-white/10">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[20px] ring-1 ring-white/15">
          <video
            src="/images/facilities-phone.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            poster="/images/hero-facilities.jpg"
          />
        </div>
      </div>
    </motion.div>
  );
}
