"use client";

import PageShell from "@/components/PageShell";
import Section from "@/components/Section";
import VisionTicker from "@/components/VisionTicker";
import FlowOfWeekSection from "@/components/FlowOfWeekSection";
import CTAButton from "@/components/CTAButton";
import SplitSection from "@/components/SplitSection";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const pillarCards = [
  {
    title: "Elite training blocks",
    description:
      "Technical work on FIFA-standard grass, gym and altitude prep, plus on-site hydrotherapy to keep players fresh.",
    image: "/images/t3-pitch.jpg",
    tag: "Performance",
  },
  {
    title: "Foreign tours with intention",
    description:
      "Custom friendlies, scrimmages, and analysis sessions that align with NCAA schedules—logistics handled end-to-end.",
    image: "/images/dji-0263-1.jpg",
    tag: "Competition",
  },
  {
    title: "Culture, recovery, and team moments",
    description:
      "Atlantic sunsets, volcanic landscapes, and cold-water recovery woven into the week to build team culture.",
    image: "/images/paradise-alt.jpg",
    tag: "Culture",
  },
];

const storyItems = [
  {
    title: "Arrive + reset in paradise",
    description:
      "Land in Tenerife, settle into Costa Adeje, and open the week with recovery on the shoreline before the first training block.",
    bullets: ["Short transfers from TFS airport", "Evening walk + mobility", "Team briefing with island overview"],
    image: "/images/tenerife-americas.jpg",
    video: "/videos/step1video.mp4",
    poster: "/images/tenerife-americas.jpg",
  },
  {
    title: "Train like pros at T3",
    description:
      "Morning technical and physical sessions on FIFA-standard pitches, followed by gym and hydrotherapy rotations.",
    bullets: ["2x natural grass fields", "Gym & CrossFit zones", "Hydrotherapy in the Olympic pool canal"],
    image: "/images/step2-dji-0263.jpg",
  },
  {
    title: "Compete against local opposition",
    description:
      "Friendly matches and scrimmages aligned to your level—professional referees, film, and post-game recovery already scheduled.",
    bullets: ["Curated opponents", "Match analysis spaces", "Recovery in under an hour"],
    image: "/images/step3-liverpool.jpg",
  },
  {
    title: "Recovery with Atlantic energy",
    description:
      "Contrast sessions in natural pools, sunset walks, and breathwork at altitude—balancing intensity with restoration.",
    bullets: ["Cold-water Atlantic dips", "Teide sunrise moments", "Structured mental reset"],
    image: "/images/step4-img1282.jpg",
  },
  {
    title: "Culture that bonds teams",
    description:
      "Taste local food, explore volcanic landscapes, and close the week with a celebration that athletes will remember.",
    bullets: ["Safe, walkable zones", "Group dining planned", "Memorable end-of-week ritual"],
    image: "/images/tenerife-puerto.jpg",
  },
];

const destinationTeasers = [
  {
    title: "Tenerife Top Training",
    copy: "Olympic-level complex in Costa Adeje: FIFA pitches, 50m pool, gym, and recovery infrastructure tailored to elite football.",
    href: "/facilities",
    image: "/images/t3-track.jpg",
  },
  {
    title: "Tenerife, built for tours",
    copy: "Safe Atlantic island with microclimates, fast transfers, and culture-rich experiences—ideal for NCAA foreign trips.",
    href: "/tenerife",
    image: "/images/hero-tenerife-beach.jpg",
  },
];

export default function HomePage() {
  return (
    <PageShell tone="night">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.02 }}
            animate={{ scale: 1 }}
            transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
          >
            <Image
              src="/images/portada.jpg"
              alt="Tenerife sunset above the clouds"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/45" />

        <div className="absolute left-6 top-20 sm:left-10 sm:top-24 flex flex-col gap-2 text-white/80">
          <span className="text-lg sm:text-xl leading-none">★★★★★</span>
          <span className="text-sm sm:text-base italic">Elite Football experiences in Europe’s paradise</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center gap-6"
        >
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-[0.08em] text-white drop-shadow-[0_16px_40px_rgba(0,0,0,0.65)]">
              Tenerife Next Academy
            </h1>
            <span className="text-sm uppercase tracking-[0.24em] text-white/85">
              Elite football experiences in Europe’s paradise
            </span>
            <CTAButton href="/contact" className="mt-2">
              Start the journey
            </CTAButton>
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">
              Project in development · Launch · 2027
            </p>
          </div>
        </motion.div>
      </section>

      <VisionTicker />

      <Section
        eyebrow="Project in development · Launch 2027"
        align="left"
        fullHeight
        className="bg-gradient-to-b from-black via-[#050910] to-black"
        contentClassName="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center"
      >
        <div className="space-y-6 text-white">
          <h2 className="text-3xl sm:text-4xl font-black uppercase leading-tight">
            Elite training, international tournaments, and life-changing football experiences from Tenerife.
          </h2>
          <p className="text-lg text-white/80">
            TNA is an emerging project built with effort and dedication, connecting US soccer clubs and colleges with potential elite experiences in Tenerife. It blends American discipline with European football culture on an island built for performance.
          </p>
          <p className="text-base text-white/75">
            From high-performance facilities to cultural immersion and recovery by the Atlantic, every experience is curated to sharpen teams and inspire athletes. Built by people who lived both systems, so you get the right mix of preparation and wonder.
          </p>
          <CTAButton href="/about-us" variant="secondary" className="mt-2">
            + About us
          </CTAButton>
        </div>

        <div className="grid gap-4">
          <div className="relative h-72 sm:h-80 overflow-hidden rounded-3xl border border-white/10 shadow-xl shadow-black/35">
            <Image
              src="/images/section-image-8.png"
              alt="Tenerife facilities collage"
              width={1400}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="relative h-72 sm:h-80 overflow-hidden rounded-3xl border border-white/10 shadow-xl shadow-black/35">
            <Image
              src="/images/section-image-10.png"
              alt="Tenerife training moments"
              width={1400}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </Section>

      <SplitSection
        eyebrow="Programs & flow"
        title="Designed for high-performance weeks"
        subtitle="A tight rhythm of training, competition, recovery, and culture—crafted around NCAA calendars."
        textClassName="max-w-xl"
        contentClassName="grid gap-10 lg:grid-cols-2 items-center min-h-[85vh]"
        body={
          <>
            <p className="text-lg text-white/80">
              Morning pitch work, gym and pool rotations, afternoon tactical sessions, and curated friendlies at night. Recovery blocks take place by the Atlantic or inside T3 hydro zones. Culture and nutrition are woven in without compromising performance.
            </p>
            <ul className="grid gap-2 text-base text-white/80 sm:grid-cols-2 md:gap-x-8 md:gap-y-3">
              {[
                "Logistics handled end-to-end: transfers, meals, scheduling, and local compliance.",
                "Safe, walkable base in Costa Adeje with quick access to pitches and hotels.",
                "Sessions supported by partners across physio, video, and sport science.",
                "Recovery by the Atlantic or in hydro zones to keep athletes fresh.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00B5E2]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </>
        }
        media={{
          type: "video",
          src: "/videos/tna-flow.mp4",
          poster: "/images/hero-facilities.jpg",
          className: "h-full w-full object-cover",
        }}
        fullHeight={false}
        className="bg-black min-h-[85vh]"
        surfaceClassName="w-full max-w-[520px] aspect-[4/5] lg:justify-self-end"
        actions={[
          { label: "Explore Tenerife", href: "/tenerife", variant: "secondary" },
          { label: "Book a call", href: "/contact" },
        ]}
      />

      <Section
        eyebrow="Three pillars"
        title="The trip athletes remember"
        subtitle="Performance-first design paired with cultural energy and world-class recovery."
        spacing="loose"
        align="center"
        fullHeight
        className="bg-gradient-to-b from-black via-[#050910] to-black"
        contentClassName="grid gap-6 lg:grid-cols-3"
      >
        {pillarCards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/35"
          >
            <div className="relative h-72">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(min-width:1024px) 33vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                {card.tag}
              </span>
            </div>
            <div className="space-y-3 p-6">
              <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
              <p className="text-base text-white/70 leading-relaxed">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </Section>

      <FlowOfWeekSection steps={storyItems} />

      <Section
        eyebrow="Explore next"
        title="See the island and the base"
        subtitle="Preview the infrastructure and landscapes that power Tenerife Next Academy."
        fullHeight
        className="bg-gradient-to-b from-black via-[#050910] to-black"
        contentClassName="grid gap-6 lg:grid-cols-2"
      >
        {destinationTeasers.map((dest, idx) => (
          <motion.div
            key={dest.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <Link
              href={dest.href}
              className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/35 transition hover:-translate-y-1 hover:shadow-3xl"
            >
              <div className="relative h-[420px]">
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end gap-3 p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#00B5E2]">
                  {dest.title}
                </p>
                <p className="max-w-2xl text-lg text-white/85">{dest.copy}</p>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  Explore →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </Section>

      <Section
        align="center"
        spacing="loose"
        fullHeight
        className="relative overflow-hidden bg-center bg-cover bg-[url('/images/dji-0844.jpg')] before:absolute before:inset-0 before:bg-black/70"
        contentClassName="relative max-w-3xl mx-auto text-center space-y-6"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00B5E2]">
          Next step
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-tight">
          Plan a Tenerife tour that elevates your program.
        </h2>
        <p className="text-lg text-white/75">
          Share your dates, roster profile, and goals. We’ll design a week that aligns with your season and leaves your athletes inspired.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <CTAButton href="/contact">Talk to the TNA team</CTAButton>
          <CTAButton href="/latest-news" variant="secondary">
            Read the playbook
          </CTAButton>
        </div>
      </Section>
    </PageShell>
  );
}
