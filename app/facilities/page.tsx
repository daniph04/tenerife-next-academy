import HeroFull from "@/components/HeroFull";
import Section from "@/components/Section";
import FacilityGallery from "@/components/FacilityGallery";
import FacilityVideoMock from "@/components/FacilityVideoMock";

const offerings = [
  "2 natural grass full-size pitches (FIFA standard)",
  "Fully equipped gym & fitness center",
  "Olympic-size swimming pool (50m) + resistance canal",
  "Recovery and rehabilitation zones (ice bath, hydrotherapy)",
  "Video analysis rooms, meeting spaces, and classroom facilities",
  "Home to professional football clubs, national teams, and Olympic athletes",
];

const idealFor = [
  "Year-round training with optimal climate",
  "Secure, professional environment",
  "Combined sport, tourism, and cultural experience",
];

const gallery = [
  { title: "Aerial view", image: "/images/t3-aerial.jpg" },
  { title: "Gym", image: "/images/t3-gym.jpg" },
  { title: "Crossfit & strength", image: "/images/t3-crossfit.jpg" },
  { title: "Pitches", image: "/images/t3-pitch.jpg" },
  { title: "Track & performance", image: "/images/t3-track.jpg" },
  { title: "Pool & recovery", image: "/images/t3-pool.jpg" },
];

export const metadata = {
  title: "Facilities | Tenerife Next Academy",
  description: "Tenerife Top Training – Olympic-level complex in Costa Adeje for elite football.",
};

export default function FacilitiesPage() {
  return (
    <div className="bg-transparent">
      <HeroFull
        backgroundImage="/images/hero-facilities.jpg"
        backgroundVideo="/images/hero-facilities.mp4"
        backgroundAlt="Tenerife Top Training aerial"
        title="Facilities"
        subtitle="World-class Olympic-level complex in Costa Adeje—purpose built for elite football."
        overlayText="Facilities"
      />

      <Section
        eyebrow="Perform to excellence"
        title="Tenerife Top Training"
        subtitle="Trusted by clubs, national teams, and Olympic athletes. Everything on-site for technical, physical, and recovery work."
        align="left"
      >
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                What do we offer?
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                {offerings.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#00B5E2]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                Ideal for university teams
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                {idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#60a5ff]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <FacilityVideoMock />
        </div>
      </Section>

      <Section
        title="Premium training environment"
        align="center"
      >
        <FacilityGallery items={gallery} />
      </Section>
    </div>
  );
}
