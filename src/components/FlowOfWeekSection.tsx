import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type FlowStep = {
  title: string;
  description: string;
  bullets?: string[];
  image: string;
  video?: string;
  poster?: string;
};

type Props = {
  steps: FlowStep[];
};

export default function FlowOfWeekSection({ steps }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalSlides = steps.length;
  // Scroll logic: Move container to the left
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${((totalSlides - 1) / totalSlides * 100) + 1}%`]
  );

  return (
    <section className="bg-[#05070b]">
      {/* Header Section */}
      <div className="mx-auto max-w-6xl px-6 lg:px-10 pt-20 pb-10 lg:pt-24 lg:pb-12">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#00B5E2]">
            Flow of the week
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight text-white">
            From touchdown to final whistle
          </h2>
          <p className="text-lg text-white/80 max-w-2xl">
            A cinematic, high-performance rhythm that keeps athletes sharp and inspired.
          </p>
        </div>
      </div>

      {/* Desktop Scrollytelling Container */}
      <div ref={containerRef} className="relative hidden lg:block" style={{ height: `${totalSlides * 80}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

          {/* Main Content Track */}
          <div
            className="w-full relative z-10"
            style={{ paddingLeft: "calc(50vw - min(45vw, 40rem))" }}
          >
            <motion.div
              style={{ x }}
              className="flex w-max gap-32"
            >
              {steps.map((step, index) => (
                <DesktopSlide
                  key={index}
                  step={step}
                  index={index}
                  total={totalSlides}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </motion.div>
          </div>

          {/* Progress Bar (Bottom Fixed) */}
          <div className="absolute bottom-12 left-0 right-0 px-10 flex justify-center">
            <div className="w-full max-w-6xl h-px bg-white/10 relative overflow-hidden">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="absolute inset-0 bg-[#00B5E2] origin-left"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Mobile / Tablet Stacked View */}
      <div className="block lg:hidden px-6 pb-20 space-y-20">
        {steps.map((step, index) => (
          <MobileSlide key={index} step={step} index={index} total={totalSlides} />
        ))}
      </div>
    </section>
  );
}

function DesktopSlide({
  step,
  index,
  total,
  scrollYProgress
}: {
  step: FlowStep;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>
}) {
  // Parallax Logic
  // We need to know when THIS slide is passing through the viewport.
  // The total scroll distance is mapped 0..1.
  // Each slide occupies a segment of that 0..1.
  // Approximate center point for this slide:
  const center = index / (total - 1);
  // Range of influence (when it's visible):
  const range = 1 / (total - 1);

  // Image Parallax: Move image opposite to scroll direction inside its container
  const imageParallax = useTransform(
    scrollYProgress,
    [center - range, center + range],
    ["35%", "-35%"] // Maximum movement without gaps (requires scale 1.7)
  );

  // Text Opacity: Fade out when not centered to focus attention
  const textOpacity = useTransform(
    scrollYProgress,
    [center - range * 0.6, center, center + range * 0.6],
    [0.3, 1, 0.3]
  );

  return (
    <div className="w-[90vw] max-w-7xl flex-shrink-0 px-6 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-12 items-center">
        {/* Text Column */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="space-y-6 order-1"
        >
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00B5E2]">
              Step {index + 1} / {total}
            </span>
            <div className="h-px w-12 bg-[#00B5E2]/30" />
          </div>

          <h3 className="text-4xl lg:text-5xl font-black uppercase text-white leading-[0.9]">
            {step.title}
          </h3>

          <p className="text-lg text-white/80 leading-relaxed max-w-md">
            {step.description}
          </p>

          {step.bullets && (
            <ul className="space-y-3 pt-4">
              {step.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00B5E2]" />
                  <span className="text-base">{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>

        {/* Image Column with Parallax */}
        <div className="relative h-[75vh] w-full order-2 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
          <motion.div
            style={{ x: imageParallax, scale: 1.7 }}
            className="relative h-full w-full"
          >
            {step.video ? (
              <video
                src={step.video}
                poster={step.poster ?? step.image}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
                priority={index === 0}
              />
            )}
          </motion.div>
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

function MobileSlide({ step, index, total }: { step: FlowStep; index: number; total: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-6"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        {step.video ? (
          <video
            src={step.video}
            poster={step.poster ?? step.image}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src={step.image}
            alt={step.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        )}
      </div>

      <div className="space-y-4">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00B5E2]">
          Step {index + 1} / {total}
        </span>
        <h3 className="text-3xl font-black uppercase text-white leading-tight">
          {step.title}
        </h3>
        <p className="text-base text-white/80 leading-relaxed">
          {step.description}
        </p>
        {step.bullets && (
          <ul className="space-y-2 pt-2">
            {step.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-white/70">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00B5E2]" />
                <span className="text-sm">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}
