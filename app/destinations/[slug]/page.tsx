import CinematicHero from "@/components/CinematicHero";
import CTAButton from "@/components/CTAButton";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";
import { destinations } from "@/data/destinations";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const dest = destinations.find((d) => d.slug === params.slug);
  return {
    title: dest ? `${dest.title} | Tenerife Next Academy` : "Destination | Tenerife Next Academy",
    description: dest?.summary ?? "Destination highlight in Tenerife for elite football tours.",
  };
}

export default function DestinationPage({ params }: Props) {
  const dest = destinations.find((d) => d.slug === params.slug);
  if (!dest) return notFound();

  return (
    <PageShell tone="ink">
      <CinematicHero
        backgroundImage={dest.image}
        eyebrow="Destination"
        title={dest.title}
        subtitle={dest.summary}
        overlayLabel="Tenerife"
        align="left"
        actions={[
          { label: "Plan your tour", href: "/contact" },
          { label: "Back to Tenerife", href: "/tenerife", variant: "secondary" },
        ]}
      />

      <Section align="left" fullHeight className="bg-gradient-to-b from-black via-[#050910] to-black">
        <div className="mx-auto max-w-4xl space-y-6 text-white/85">
          <p className="text-lg">
            {dest.summary} Teams can blend training days with cultural immersion, recovery sessions by the ocean, and
            memorable team moments in this setting.
          </p>
          <ul className="space-y-3 text-base">
            {dest.bullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#00B5E2]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section align="left" fullHeight className="bg-black">
        <div className="mx-auto max-w-4xl space-y-6 text-white/85">
          <p className="text-lg">
            Plan the moment: best time of day to visit, proximity to training bases, and suggested team-building sessions. Pair this stop with recovery dips, film review, or a celebratory dinner overlooking the Atlantic.
          </p>
          <ul className="space-y-3 text-base">
            {["Recovery-friendly routines", "Transport and timing", "Suggested cultural stops"].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#00B5E2]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <CTAButton href="/contact">Design with us</CTAButton>
            <CTAButton href="/facilities" variant="secondary">
              View basecamp
            </CTAButton>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
