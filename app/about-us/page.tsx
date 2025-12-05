import CinematicHero from "@/components/CinematicHero";
import CTAButton from "@/components/CTAButton";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";
import VisionTicker from "@/components/VisionTicker";
import ValueCards from "@/components/ValueCards";

const stats = [
  { label: "Launch", value: "2027", description: "Project in development" },
  { label: "Base", value: "Tenerife", description: "Atlantic performance island" },
  { label: "Focus", value: "NCAA + elite", description: "Football programs and tours" },
];

const values = [
  { title: "Athlete-first", detail: "Every itinerary balances performance, recovery, and mental space to make athletes better." },
  { title: "Trust & safety", detail: "Safe locations, vetted partners, and compliance with NCAA requirements and medical protocols." },
  { title: "Crafted experiences", detail: "No copy-paste tours. Each program gets curated opponents, recovery blocks, and cultural moments." },
  { title: "Local expertise", detail: "Built by someone who calls Tenerife home and knows both the American and European pathways." },
];

const timeline = [
  { title: "Idea", description: "Conceptualizing a bridge between US college soccer and elite European football experiences." },
  { title: "Building partnerships", description: "Aligning NCAA programs, clubs, and Tenerife Top Training for world-class camps." },
  { title: "First tours", description: "Welcoming university teams to Tenerife for high-performance foreign tours." },
  { title: "Expansion", description: "Scaling the ecosystem with more destinations, partners, and performance services." },
];

export const metadata = {
  title: "About Us | Tenerife Next Academy",
  description: "TNA conecta el fútbol universitario estadounidense con la élite europea desde Tenerife.",
};

export default function AboutUsPage() {
  return (
    <PageShell>
      <CinematicHero
        backgroundImage="/images/hero-about-us-pitch.jpg"
        eyebrow="About us"
        title="The bridge between NCAA and Europe lives in Tenerife."
        subtitle="We combine US college soccer rigor with European football culture, all from an island built for performance and hospitality."
        overlayLabel="TNA"
        align="left"
        actions={[
          { label: "Plan a tour", href: "/contact" },
          { label: "See the facilities", href: "/facilities", variant: "secondary" },
        ]}
        stats={stats}
      />

      <VisionTicker />

      <Section
        eyebrow="Mission"
        title="Connect American programs with European-level preparation"
        subtitle="We believe football should open doors to culture, education, and new perspectives—while sharpening performance."
        align="left"
        fullHeight
        className="bg-gradient-to-b from-black via-[#050910] to-black"
        contentClassName="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center"
      >
        <div className="space-y-6 text-lg text-white/80">
          <p>
            Tenerife Next Academy designs elite experiences that feel personal, safe, and transformative. Coaches stay focused on football while we orchestrate logistics, recovery, and cultural immersion.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/30">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00B5E2]">Mission</p>
              <p className="text-base text-white/75">
                Connect US college soccer with European-level training grounds, hospitality, and culture in one place.
              </p>
            </div>
            <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/30">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00B5E2]">Promise</p>
              <p className="text-base text-white/75">
                Deliver tours that balance performance, recovery, and experiences your athletes will remember for life.
              </p>
            </div>
          </div>
        </div>

        <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/30">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/60">
              Project in development · Launch 2027
            </p>
            <p className="text-2xl font-semibold text-white sm:text-3xl">
              “After living both the American and Spanish football systems, I strongly believe that TNA will unite them and offer unique opportunities on the island I proudly call home.”
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Jorge González Marrero · Founder
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Values"
        title="Principles that shape every tour"
        align="left"
        spacing="loose"
        fullHeight
        className="bg-black"
        contentClassName="grid gap-6 sm:grid-cols-2"
      >
        <ValueCards values={values} />
      </Section>

      <Section
        spacing="loose"
        fullHeight
        align="left"
        className="bg-gradient-to-b from-black via-[#050910] to-black"
        contentClassName="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]"
      >
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00B5E2]">
            Timeline
          </p>
          <h3 className="text-3xl font-black uppercase text-white sm:text-4xl">
            Steps that shape Tenerife Next Academy
          </h3>
          <p className="text-base text-white/75">
            Built steadily with partners across Tenerife, the NCAA landscape, and Europe&apos;s football ecosystem.
          </p>
        </div>
        <div className="relative space-y-6 border-l border-white/10 pl-6">
          {timeline.map((item, index) => (
            <div key={item.title} className="relative pl-4">
              <span className="absolute -left-[19px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#00B5E2]" />
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/25">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-white/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        align="center"
        spacing="loose"
        fullHeight
        className="bg-black"
        contentClassName="max-w-3xl mx-auto text-center space-y-6"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00B5E2]">
          Join us
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-tight">
          Let&apos;s build the next era of NCAA tours in Tenerife.
        </h2>
        <p className="text-lg text-white/75">
          Coaches, partners, and collaborators—reach out to co-design experiences that elevate players on and off the pitch.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <CTAButton href="/contact">Talk to us</CTAButton>
          <CTAButton href="/latest-news" variant="secondary">
            See our perspective
          </CTAButton>
        </div>
      </Section>
    </PageShell>
  );
}
