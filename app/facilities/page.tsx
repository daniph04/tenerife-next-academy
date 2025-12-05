import CinematicHero from "@/components/CinematicHero";
import FacilityVideoMock from "@/components/FacilityVideoMock";
import ImageCarousel from "@/components/ImageCarousel";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";
import SplitSection from "@/components/SplitSection";
import StatsRow from "@/components/StatsRow";
import VisionTicker from "@/components/VisionTicker";
import CTAButton from "@/components/CTAButton";
import ReasonCards from "@/components/ReasonCards";
import Image from "next/image";

const facilityStats = [
  { label: "FIFA natural grass", value: "2 fields", description: "Full-size, match-quality surfaces" },
  { label: "Aquatics", value: "50m pool + canal", description: "Hydrotherapy, resistance work" },
  { label: "Performance", value: "Gym + CrossFit", description: "Strength, power, speed labs" },
  { label: "Recovery", value: "Hydro & partners", description: "Ice baths, physio, video rooms" },
];

const carouselSlides = [
  {
    title: "FIFA-standard pitches",
    description: "Two pristine natural grass fields for technical work, patterns, and friendlies.",
    image: "/images/t3-pitch.jpg",
  },
  {
    title: "Olympic pool & resistance canal",
    description: "50m lanes, water flow canal, and contrast recovery for performance weeks.",
    image: "/images/t3-pool.jpg",
  },
  {
    title: "Performance lab",
    description: "Strength zones, CrossFit floor, and space for speed & agility.",
    image: "/images/t3-gym.jpg",
  },
  {
    title: "Track, cameras, analysis",
    description: "On-site track and vantage points for filming, review, and tactical sessions.",
    image: "/images/t3-track.jpg",
  },
];

const reasons = [
  {
    title: "Everything in one secure campus",
    body: "Pitches, gym, aquatics, and meeting rooms within one hub—no time wasted between blocks.",
  },
  {
    title: "Trusted by elite programs",
    body: "Olympic athletes, national teams, and pro clubs choose T3 for camps and pre-season prep.",
  },
  {
    title: "Perfect climate control",
    body: "Stable temperatures and low rainfall keep training schedules on track year-round.",
  },
  {
    title: "Recovery built-in",
    body: "Hydrotherapy, ice, and Atlantic contrast sessions keep athletes fresh through the week.",
  },
];

export const metadata = {
  title: "Facilities | Tenerife Next Academy",
  description: "Tenerife Top Training – Olympic-level complex in Costa Adeje for elite football.",
};

export default function FacilitiesPage() {
  return (
    <PageShell tone="ink">
      <CinematicHero
        backgroundVideo="/images/facilities-hero.mp4"
        backgroundImage="/images/hero-facilities.jpg"
        eyebrow="Tenerife Top Training · Costa Adeje"
        title="A full high-performance ecosystem"
        subtitle="Olympic-grade facilities trusted by national teams and pro clubs—reserved for NCAA programs through Tenerife Next Academy."
        overlayLabel="T3"
        align="left"
        actions={[
          { label: "Design your camp", href: "/contact" },
          { label: "See the island", href: "/tenerife", variant: "secondary" },
        ]}
        stats={facilityStats}
      />

      <VisionTicker />

      <Section
        eyebrow="Why T3 works"
        title={
          <span className="flex items-center gap-4 md:gap-6">
            <span className="relative h-12 w-12 md:h-16 md:w-16 flex-shrink-0">
              <Image src="/images/t3-logo.png" alt="T3 Logo" fill className="object-contain" />
            </span>
            <span>TENERIFE TOP TRAINING</span>
          </span>
        }
        subtitle="Infrastructure for technical work, conditioning, recovery, and tactical classroom time—five minutes from hotels overlooking the Atlantic."
        align="left"
        fullHeight
        className="bg-gradient-to-b from-black via-[#050910] to-black"
        contentClassName="space-y-10"
      >
        <StatsRow stats={facilityStats} columns={4} />
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-5 text-lg text-white/80">
            <p>
              T3 is purpose-built for high-performance camps: pristine natural grass pitches, a performance lab, and aquatic zones for both load and recovery. NCAA coaches get dedicated slots, video review spaces, and reliable climate to keep the plan intact.
            </p>
            <p>
              Off the pitch, the team stays in Costa Adeje with short transfers, safe walkable areas, and food programs aligned to training intensity. Recovery options range from hydrotherapy onsite to cold-water Atlantic sessions minutes away.
            </p>
            <div className="flex flex-wrap gap-3">
              <CTAButton href="/latest-news" variant="secondary">
                View NCAA insights
              </CTAButton>
              <CTAButton href="/contact">Schedule a call</CTAButton>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <FacilityVideoMock />
          </div>
        </div>
      </Section>

      <SplitSection
        eyebrow="The setup"
        title="Technical, physical, and recovery—without leaving campus"
        subtitle="A tight daily rhythm: morning pitch, strength & conditioning, then hydrotherapy to keep legs fresh."
        body={
          <ul className="space-y-3 text-base text-white/75">
            {[
              "Dedicated time slots on FIFA-standard pitches with match-quality surfaces.",
              "Performance gym, CrossFit rigs, and track for speed work and testing.",
              "Hydrotherapy in the 50m pool and resistance canal for flush and activation.",
              "Meeting rooms and video analysis spaces for tactical walkthroughs.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00B5E2]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        }
        media={{
          type: "image",
          src: "/images/t3-aerial.jpg",
          alt: "Tenerife Top Training from above",
          className: "object-cover",
        }}
        reverse
        fullHeight
        className="bg-black"
        surfaceClassName="max-h-[620px]"
      />

      <Section
        spacing="tight"
        fullHeight
        className="bg-gradient-to-b from-black via-[#050910] to-black"
        fullWidth
        contentClassName="relative flex w-full flex-col justify-center -mx-4 sm:-mx-6 lg:-mx-10"
      >
        <div className="absolute inset-0 z-10 flex flex-col items-center gap-3 px-6 pt-10 text-center pointer-events-none">
          <h2 className="text-4xl font-black uppercase leading-tight text-white sm:text-5xl md:text-6xl">
            Premium training environment
          </h2>
          <p className="max-w-3xl text-base text-white/85 sm:text-lg">
            Swipe through the zones that make T3 a complete high-performance ecosystem.
          </p>
        </div>
        <ImageCarousel
          slides={carouselSlides}
          intervalMs={9000}
          heightClass="h-[calc(100vh-120px)] min-h-[760px]"
          overlayCenter
          hoverScale
          className="h-full w-full"
        />
      </Section>

      <Section
        eyebrow="Built for NCAA programs"
        title="Why this works for your athletes"
        spacing="loose"
        align="left"
        fullHeight
        className="bg-black"
        contentClassName="grid gap-6 sm:grid-cols-2"
      >
        <ReasonCards reasons={reasons} />
      </Section>

      <Section
        align="center"
        spacing="loose"
        fullHeight
        className="relative"
        contentClassName="max-w-3xl mx-auto text-center space-y-6"
        backgroundImage="/images/facilities-cta-bg-final.jpg"
        backgroundOverlay="bg-black/70"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00B5E2]">
          Next step
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-tight">
          Bring your program to Tenerife Top Training.
        </h2>
        <p className="text-lg text-white/75">
          Share your season window and player profile. We’ll tailor pitches, gym, recovery, and friendlies to your objectives.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <CTAButton href="/contact">Plan your camp</CTAButton>
          <CTAButton href="/about-us" variant="secondary">
            Meet the team
          </CTAButton>
        </div>
      </Section>
    </PageShell>
  );
}
