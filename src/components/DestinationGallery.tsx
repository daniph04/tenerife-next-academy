"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Destination } from "@/data/destinations";

type Props = {
    items: Destination[];
};

export default function DestinationGallery({ items }: Props) {
    const [activeId, setActiveId] = useState<string | null>(items[0].slug);

    return (
        <div className="w-full h-[600px] flex flex-col lg:flex-row gap-2 lg:gap-4">
            {items.map((item) => (
                <DestinationCard
                    key={item.slug}
                    item={item}
                    isActive={activeId === item.slug}
                    onClick={() => setActiveId(item.slug)}
                    onHover={() => setActiveId(item.slug)}
                />
            ))}
        </div>
    );
}

function DestinationCard({
    item,
    isActive,
    onClick,
    onHover,
}: {
    item: Destination;
    isActive: boolean;
    onClick: () => void;
    onHover: () => void;
}) {
    return (
        <motion.div
            layout
            onClick={onClick}
            onMouseEnter={onHover}
            className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out ${isActive ? "flex-[3] lg:flex-[3.5]" : "flex-[1]"
                }`}
            style={{
                // On mobile, we might want height transition instead of flex width
                // But for now, let's keep it simple and responsive via flex
                minHeight: isActive ? "300px" : "80px",
            }}
        >
            {/* Background Image */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{ scale: isActive ? 1.1 : 1 }}
                transition={{ duration: 0.8 }}
            >
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className={`absolute inset-0 bg-black/20 transition-colors duration-500 ${isActive ? "bg-black/40" : "bg-black/60 hover:bg-black/50"}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            </motion.div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <motion.div layout="position" className="relative z-10">
                    {/* Title - Always visible but transforms */}
                    <motion.h3
                        layout="position"
                        className={`font-black uppercase leading-none text-white transition-all duration-500 ${isActive
                                ? "text-3xl md:text-5xl mb-4"
                                : "text-xl md:text-2xl rotate-0 lg:-rotate-90 lg:origin-bottom-left lg:absolute lg:bottom-8 lg:left-6 lg:w-[300px] lg:text-left"
                            }`}
                    >
                        {item.title}
                    </motion.h3>

                    {/* Details - Only visible when active */}
                    <AnimatePresence mode="wait">
                        {isActive && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className="space-y-4 max-w-xl"
                            >
                                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                                    {item.summary}
                                </p>

                                <div className="h-px w-12 bg-[#00B5E2]" />

                                <ul className="space-y-2">
                                    {item.bullets.map((bullet, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 + i * 0.05 }}
                                            className="flex items-start gap-3 text-sm md:text-base text-white/75"
                                        >
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00B5E2]" />
                                            <span>{bullet}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.div>
    );
}
