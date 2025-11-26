import HeroFull from "@/components/HeroFull";
import Section from "@/components/Section";
import DestinationGrid from "@/components/DestinationGrid";

const destinations = [
  { name: "Puerto de la Cruz · Teide", image: "/images/tenerife-puerto.jpg" },
  { name: "Playa Las Américas", image: "/images/tenerife-americas.jpg" },
  { name: "Los Abrigos · Natural pools", image: "/images/tenerife-abrigos.jpg" },
  { name: "Siam Park", image: "/images/tenerife-siam.jpg" },
  { name: "Playa de Benijo", image: "/images/tenerife-benijo.jpg" },
];

export const metadata = {
  title: "Tenerife | Tenerife Next Academy",
  description: "Year-round sun, landscapes and elite tourism infrastructure for NCAA tours.",
};

export default function TenerifePage() {
  return (
    <div className="bg-transparent">
      <HeroFull
        backgroundImage="/images/hero-tenerife-beach.jpg"
        title="Where performance meets paradise"
        subtitle="Year-round sun, volcanic landscapes, and the Atlantic breeze—Tenerife is a safe, accessible hub for sport and culture."
        overlayText="Tenerife"
      />

      <Section align="center" spacing="normal">
        <p className="text-2xl text-white/80 sm:text-3xl">
          Tenerife es la isla más grande de Canarias—segura, conectada y preparada para el alto rendimiento.
          Montañas, playas de arena negra e infraestructura turística de primer nivel hacen que sea perfecta
          para giras NCAA, recuperación y team-building inolvidable.
        </p>
      </Section>

      <Section title="Destination highlights">
        <DestinationGrid items={destinations} />
      </Section>
    </div>
  );
}
