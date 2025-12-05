"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/data/destinations";

type DestinationConnectProps = {
    items: Destination[];
};

export default function DestinationConnect({ items }: DestinationConnectProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <div ref={containerRef} className="relative bg-black">
            {items.map((item, i) => {
                const targetScale = 1 - (items.length - i) * 0.05;
                const range = [i * 0.25, 1];

                return (
                    <Card
                        key={item.slug}
                        i={i}
                        item={item}
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                        total={items.length}
                    />
                );
            })}
        </div>
    );
}

type CardProps = {
    i: number;
    item: Destination;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
    total: number;
};

const Card = ({ i, item, progress, range, targetScale, total }: CardProps) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
                className="relative flex h-full w-full flex-col overflow-hidden bg-black origin-top"
            >
                {/* Full Background Image */}
                <div className="absolute inset-0 h-full w-full">
                    <motion.div style={{ scale: imageScale }} className="h-full w-full">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover opacity-60"
                            sizes="100vw"
                        />
                    </motion.div>
                    {/* Gradients for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Floating Content */}
                <div className="relative z-10 flex h-full w-full flex-col justify-center px-6 md:px-20 lg:max-w-4xl">
                    <div className="flex flex-col gap-6">
                        <div>
                            <span className="mb-2 inline-block text-xs font-bold uppercase tracking-widest text-[#00B5E2]">
                                0{i + 1} — Destination
                            </span>
                            <h3 className="text-5xl font-black uppercase leading-[0.85] text-white md:text-8xl mix-blend-overlay">
                                {item.title}
                            </h3>
                        </div>

                        <p className="max-w-xl text-lg font-medium text-white/90 md:text-2xl drop-shadow-lg">
                            {item.summary}
                        </p>

                        <ul className="space-y-3 mt-4">
                            {item.bullets.map((bullet) => (
                                <li key={bullet} className="flex items-start gap-3 text-base text-white/80">
                                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00B5E2] shadow-[0_0_8px_#00B5E2]" />
                                    <span className="font-light tracking-wide">{bullet}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8">
                            <Link
                                href={`/destinations/${item.slug}`}
                                className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white transition-all hover:gap-6"
                            >
                                <span className="border-b border-white pb-1">Explore Location</span>
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

