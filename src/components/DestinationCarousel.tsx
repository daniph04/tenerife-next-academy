"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { Destination } from "@/data/destinations";

type Props = {
    items: Destination[];
};

export default function DestinationCarousel({ items }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({ container: containerRef });

    return (
        <div className="relative group">
            {/* Scroll Container */}
            <div
                ref={containerRef}
                className="flex gap-6 overflow-x-auto pb-12 pt-4 px-6 lg:px-10 snap-x snap-mandatory hide-scrollbar"
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}
            >
                {items.map((item, index) => (
                    <CarouselCard key={item.slug} item={item} index={index} />
                ))}
            </div>

            {/* Progress Bar (Optional, adds premium feel) */}
            <div className="absolute bottom-0 left-6 right-6 lg:left-10 lg:right-10 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-[#00B5E2]"
                    style={{ scaleX: scrollXProgress, transformOrigin: "left" }}
                />
            </div>
        </div>
    );
}

function CarouselCard({ item, index }: { item: Destination; index: number }) {
    return (
        <motion.div
            className="relative flex-shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px] aspect-[3/5] rounded-[2rem] overflow-hidden snap-center group/card cursor-pointer border border-white/10 bg-white/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            {/* Image with Hover Zoom */}
            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover/card:scale-110">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 450px, 85vw"
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end items-start space-y-4">
                <div className="space-y-2 transform transition-transform duration-500 group-hover/card:-translate-y-2">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00B5E2]">
                        0{index + 1}
                    </p>
                    <h3 className="text-3xl lg:text-4xl font-black uppercase text-white leading-none">
                        {item.title}
                    </h3>
                </div>

                <p className="text-base text-white/80 line-clamp-3 group-hover/card:line-clamp-none transition-all duration-300">
                    {item.summary}
                </p>

                {/* Bullets - Visible on Hover (Desktop) or Always (Mobile)? Let's keep it clean. */}
                <div className="pt-4 border-t border-white/20 w-full opacity-0 translate-y-4 transition-all duration-500 group-hover/card:opacity-100 group-hover/card:translate-y-0 hidden lg:block">
                    <ul className="space-y-2">
                        {item.bullets.slice(0, 2).map((bullet, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                                <span className="mt-1.5 h-1 w-1 rounded-full bg-[#00B5E2]" />
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}
