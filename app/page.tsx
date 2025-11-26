"use client";

import HeroFull from "@/components/HeroFull";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import InfoCard from "@/components/InfoCard";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Elite training",
    description:
      "Olympic-level facilities, FIFA-standard pitches, and recovery zones designed for peak performance.",
    icon: "⚡",
  },
  {
    title: "Foreign tours",
    description:
      "Every NCAA program is allowed one international trip every four years—make it unforgettable in Tenerife.",
    icon: "✈️",
  },
  {
    title: "Life-changing experiences",
    description:
      "Pair elite football with the Canary Islands’ natural wonder, culture, and world-class tourism.",
    icon: "🌅",
  },
];

const spotlightCards = [
  {
    title: "The Paradise",
    description:
      "Tenerife blends year-round sunshine, volcanic landscapes, and pristine beaches—a dream setting for football and recovery.",
    href: "/tenerife",
    cta: "Discover Tenerife",
    image: "/images/tenerife-puerto.jpg",
  },
  {
    title: "Tenerife Top Training",
    description:
      "Train like pros at T3: FIFA pitches, Olympic pool, high-performance gym, and specialist recovery facilities in Costa Adeje.",
    href: "/facilities",
    cta: "See the facilities",
    image: "/images/t3-aerial.jpg",
  },
];

export default function HomePage() {
  return (
    <div className="bg-transparent">
      <HeroFull
        backgroundImage="/images/hero-teide.jpg"
        eyebrow="Elite football experiences in Europe’s paradise"
        title={
          <>
            Tenerife
            <br />
            Next Academy
          </>
        }
        subtitle="Where performance meets paradise: elite training, international competition, and life-changing football experiences from the heart of Tenerife."
        bottomText="Project in development · Launch 2027"
        overlayText="Tenerife"
      />

      <Section
        eyebrow="Vision"
        title={
          <>
            Connecting talent. <span className="text-[#00B5E2]">Building futures.</span>
          </>
        }
        subtitle="TNA bridges NCAA and international clubs with elite training and cultural immersion in Tenerife—Europe’s paradise for football."
      />

      <Section spacing="normal">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </Section>

      <Section spacing="loose">
        <div className="grid gap-8 lg:grid-cols-2">
          {spotlightCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <InfoCard
                title={card.title}
                description={card.description}
                ctaLabel={card.cta}
                href={card.href}
                image={card.image}
              />
            </motion.div>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-tenerife-beach.jpg"
            alt="Tenerife sunset"
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/15 bg-black/70 p-8 shadow-2xl backdrop-blur-md sm:p-10"
          >
            <div className="space-y-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#00B5E2]">
                Get in touch
              </p>
              <h2 className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                Build your next international football experience with us.
              </h2>
              <p className="text-base text-white/80 sm:text-lg">
                NCAA coaches, academies, clubs—diseñemos un viaje de alto rendimiento que combine
                entrenamiento, competición y el paraíso de Tenerife.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { label: "Phone", value: "+34 664 82 02 26", href: "tel:+34664820226" },
                { label: "Email", value: "jorge@tenerifenextacademy.com", href: "mailto:jorge@tenerifenextacademy.com" },
                { label: "Instagram", value: "@tenerifenextacademy", href: "https://www.instagram.com/tenerifenextacademy" },
                { label: "LinkedIn", value: "Jorge González Marrero", href: "https://www.linkedin.com/in/jorge-gonzalezm" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl border border-white/15 bg-white/5 p-4 text-left text-white transition hover:border-white/40"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold">{item.value}</p>
                </a>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-white/15 bg-white/5 p-6 shadow-lg">
              <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-white">
                Quick contact
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Te respondemos personalmente. Todos los campos son obligatorios.
              </p>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
