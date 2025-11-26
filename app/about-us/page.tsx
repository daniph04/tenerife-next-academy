import HeroFull from "@/components/HeroFull";
import Section from "@/components/Section";

const timeline = [
  { title: "Idea", description: "Conceptualizing a bridge between US college soccer and elite European football experiences." },
  { title: "Building partnerships", description: "Aligning NCAA programs, clubs, and Tenerife Top Training for world-class camps." },
  { title: "Hosting the first tours", description: "Welcoming university teams to Tenerife for high-performance foreign tours." },
];

export const metadata = {
  title: "About Us | Tenerife Next Academy",
  description: "TNA conecta el fútbol universitario estadounidense con la élite europea desde Tenerife.",
};

export default function AboutUsPage() {
  return (
    <div className="bg-transparent">
      <HeroFull
        backgroundImage="/images/hero-about-us-pitch.jpg"
        title="About us"
        subtitle="Building a bridge between American and European football systems from Tenerife."
        overlayText="About"
      />

      <Section align="center" spacing="normal">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl shadow-black/30">
          <p className="text-xl text-white/80 sm:text-2xl">
            We believe in the power of sport to inspire, unite, and create lasting cultural
            experiences. Tenerife Next Academy es el inicio de un puente entre programas NCAA y academias internacionales en el entorno élite de Tenerife.
          </p>
        </div>
      </Section>

      <Section spacing="loose">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#00B5E2]/30 to-white/5 p-8 shadow-2xl shadow-black/30">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Founder&apos;s vision
            </p>
            <blockquote className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              “After living both the American and Spanish football systems, I strongly believe that
              TNA will unite them and offer unique opportunities on the island I proudly call home.”
            </blockquote>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Jorge González Marrero · Founder
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-black uppercase text-white sm:text-4xl">
              Project in development · Launch 2027
            </h3>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-white/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
