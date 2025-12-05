import VisionHero from "@/components/VisionHero";
import DestinationConnect from "@/components/DestinationConnect";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";
import SplitSection from "@/components/SplitSection";
import StatsRow from "@/components/StatsRow";
import CTAButton from "@/components/CTAButton";
import { destinations } from "@/data/destinations";
import Image from "next/image";

const islandStats = [
  { label: "Microclimates", value: "Year-round play", description: "Stable temps for pitches & recovery" },
  { label: "Access", value: "~4h from EU hubs", description: "Direct links, short on-island transfers" },
  { label: "Safety", value: "Top-tier tourism", description: "Walkable, secure zones for athletes" },
];

const logistics = [
  {
    title: "Arrivals",
    detail: "Direct flights into Tenerife South (TFS) with fast transfers to Costa Adeje hotels and T3.",
  },
  {
    title: "Movement",
    detail: "Short bus hops between pitches, hotels, beaches, and cultural stops keep schedules tight.",
  },
  {
    title: "Recovery days",
    detail: "Atlantic contrast therapy, Teide sunrise rituals, and curated food experiences for team bonding.",
  },
  {
    title: "Compliance",
    detail: "We design around NCAA rules, medical coverage, and dietary requirements—no surprises.",
  },
];

export const metadata = {
  title: "Tenerife | Tenerife Next Academy",
  description: "Performance, recovery, and culture—all on a safe Atlantic island built for elite sport.",
};

export default function TenerifePage() {
  return (
    <PageShell>
      <VisionHero
        backgroundImage="/images/hero-tenerife-beach.jpg"
      />

      <Section
        fullHeight
        spacing="loose"
        className="bg-gradient-to-b from-black via-[#050910] to-black"
        contentClassName="h-full flex flex-col justify-center py-10 lg:py-0"
      >
        <div className="grid h-full w-full gap-10 lg:grid-cols-12 lg:gap-20 items-center">
          {/* Left Block: Performance & Stats */}
          <div className="flex flex-col justify-center gap-10 lg:gap-14 lg:col-span-7 h-full">
            <div className="space-y-6">
              <div>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.28em] text-[#00B5E2] mb-4">
                  Why it works
                </p>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-[0.9] text-white tracking-tight">
                  Performance meets paradise
                </h2>
              </div>

              <p className="max-w-2xl text-xl text-white/80 leading-relaxed">
                Tenerife blends elite sport infrastructure with the natural assets of the Canary Islands. Morning pitch work can be followed by ocean recovery; altitude sessions at Teide can close with sunset team rituals. The island stays warm, safe, and connected—ideal for NCAA foreign tours.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-10 mt-auto lg:mt-0">
              {islandStats.map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <p className="text-3xl font-black text-white">{stat.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/50">{stat.label}</p>
                  <p className="text-sm text-white/70 leading-snug">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Island Rhythm Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 lg:col-span-5 h-full min-h-[600px] shadow-2xl shadow-black/50">
            <Image
              src="/images/tenerife-americas.jpg"
              alt="Tenerife rhythm"
              fill
              className="object-cover opacity-60 transition duration-700 hover:scale-105"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 pb-16">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#00B5E2]">
                Island Rhythm
              </p>
              <h3 className="mb-8 text-4xl sm:text-5xl font-black uppercase leading-none text-white">
                Close to everything
              </h3>
              <ul className="space-y-5">
                {[
                  "5–15 min transfers: Hotel ↔ Pitch ↔ Beach",
                  "North-south microclimates for contrast days",
                  "Safe, walkable promenades for team chemistry",
                  "Curated group dining aligned to nutrition",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base font-medium text-white/95">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00B5E2] shadow-[0_0_8px_#00B5E2]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <section className="relative bg-black pt-20 pb-40">
        <div className="mb-20 px-6 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#00B5E2]">
            Destination Highlights
          </p>
          <h2 className="mx-auto max-w-4xl text-5xl font-black uppercase leading-[0.9] text-white md:text-7xl">
            Places your athletes will talk about
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-white/70">
            Volcanic landscapes, natural pools, city promenades, and adrenaline resets—each stop curated for teams.
          </p>
        </div>
        <DestinationConnect items={destinations} />

        <div className="mt-20 flex justify-center gap-4">
          <CTAButton href="/contact">Plan your path</CTAButton>
        </div>
      </section>

      <section className="relative h-[85vh] w-full overflow-hidden bg-black">
        {/* Full-screen Map */}
        <div className="absolute inset-0 h-full w-full">
          <iframe
            title="Tenerife on the map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1058691.2989070137!2d-17.555!3d28.2915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4029cffb78f3c9%3A0xe67a4d9dc2ca9a7f!2sTenerife!5e1!3m2!1sen!2ses!4v1701620000001!5m2!1sen!2ses&t=k"
            width="100%"
            height="100%"
            loading="lazy"
            className="h-full w-full object-cover"
            style={{ border: 0 }}
          />
        </div>

        {/* Overlay Gradients for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        {/* Floating Content Card */}
        <div className="pointer-events-none relative z-10 flex h-full flex-col justify-center px-6 lg:px-20">
          <div className="max-w-xl space-y-6 rounded-3xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-md">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#00B5E2]">
                Global Hub
              </p>
              <h2 className="text-5xl font-black uppercase leading-[0.9] text-white sm:text-7xl">
                Where we are
              </h2>
            </div>
            <p className="text-lg text-white/80 leading-relaxed">
              Tenerife sits in the Atlantic, about four hours from major European hubs. A perfect bridge between continents, offering easy functionality and exotic isolation.
            </p>

          </div>
        </div>
      </section>

      <Section
        eyebrow="Logistics"
        title="Simple, reliable movement"
        subtitle="From wheels down to the final friendly, the schedule stays tight and athlete-first."
        align="left"
        spacing="loose"
        fullHeight
        className="bg-gradient-to-b from-black via-[#050910] to-black"
        contentClassName="grid gap-6 sm:grid-cols-2"
      >
        {logistics.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/30"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00B5E2]">
              {item.title}
            </p>
            <p className="mt-2 text-base text-white/75">{item.detail}</p>
          </div>
        ))}
      </Section>

      <Section
        align="center"
        spacing="loose"
        fullHeight
        className="bg-black"
        contentClassName="max-w-3xl mx-auto text-center space-y-6"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00B5E2]">
          Ready for the island?
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-tight">
          Build your Tenerife itinerary with TNA.
        </h2>
        <p className="text-lg text-white/75">
          Tell us your roster, preferred dates, and objectives. We’ll map the training, recovery, and cultural flow in under 48 hours.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <CTAButton href="/contact">Talk to the team</CTAButton>
          <CTAButton href="/facilities" variant="secondary">
            View T3 setup
          </CTAButton>
        </div>
      </Section>
    </PageShell>
  );
}
