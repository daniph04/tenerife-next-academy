"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type VisionHeroProps = {
    backgroundImage: string;
    className?: string;
    title?: string;
    overlayText?: string;
    subtitle?: string;
    description?: string;
    overlayTextClassName?: string;
};

export default function VisionHero({
    backgroundImage,
    className = "",
    title = "TENERIFE",
    overlayText = "TENERIFE",
    subtitle = "OUR VISION IS...",
    description = "To position island as a leading global destination for football development, high performance training, and sports tourism.",
    overlayTextClassName = "",
}: VisionHeroProps) {
    return (
        <section className={`relative isolate flex min-h-screen items-center justify-center overflow-hidden ${className}`}>
            {/* Background */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
                >
                    <Image
                        src={backgroundImage}
                        alt={title}
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                </motion.div>
            </div>

            {/* Overlays - reduced opacity for better image quality visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
            <div className="absolute inset-0 bg-black/10" />

            <div className="relative z-10 flex w-full flex-col items-center justify-center text-center h-full pt-10">
                {/* Layered Text Group */}
                <div className="relative flex flex-col items-center justify-center w-full">
                    {/* Background Outlined Text - Slightly smaller */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute select-none flex items-center justify-center w-full pointer-events-none"
                    >
                        <h1
                            className={`font-black uppercase leading-none tracking-widest text-transparent opacity-20 mix-blend-overlay whitespace-nowrap ${overlayTextClassName || "text-[15vw] xl:text-[17vw]"}`}
                            style={{
                                WebkitTextStroke: "3px rgba(255,255,255,0.6)",
                                filter: "drop-shadow(0 0 1px rgba(255,255,255,0.2))"
                            }}
                        >
                            {overlayText}
                        </h1>
                    </motion.div>

                    {/* Foreground Bold Text - Centered exactly in middle of outlined text */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative z-10 flex items-center justify-center"
                    >
                        <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tighter text-white drop-shadow-2xl whitespace-nowrap">
                            {title}
                        </h2>
                    </motion.div>
                </div>

                {/* Vision Text - Pushed down below the letters */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative z-10 flex flex-col items-center justify-center gap-4 mt-[12vh] sm:mt-[16vh]"
                >
                    {subtitle && (
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold italic uppercase tracking-widest text-[#00B5E2] drop-shadow-lg">
                            {subtitle}
                        </h3>
                    )}
                    {description && (
                        <>
                            <div className="h-1 w-24 bg-white/20 rounded-full" />
                            <p className="max-w-3xl px-6 text-lg font-medium text-white/90 sm:text-xl md:text-2xl leading-relaxed drop-shadow-md">
                                {description}
                            </p>
                        </>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

