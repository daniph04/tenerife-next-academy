import CinematicHero from "@/components/CinematicHero";
import ContactForm from "@/components/ContactForm";
import CTAButton from "@/components/CTAButton";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";

export const metadata = {
  title: "Contact | Tenerife Next Academy",
  description: "Start planning your elite football experience in Tenerife with the TNA team.",
};

const contacts = [
  { label: "Phone", value: "+34 664 82 02 26", href: "tel:+34664820226" },
  { label: "Email", value: "jorge@tenerifenextacademy.com", href: "mailto:jorge@tenerifenextacademy.com" },
  { label: "Instagram", value: "@tna_soccer", href: "https://www.instagram.com/tna_soccer/" },
  { label: "LinkedIn", value: "Jorge González Marrero", href: "https://www.linkedin.com/in/jorge-gonzalezm" },
];

export default function ContactPage() {
  return (
    <PageShell>
      <CinematicHero
        backgroundImage="/images/hero-tenerife-beach.jpg"
        eyebrow="Contact"
        title="Plan your Tenerife tour with the TNA team."
        subtitle="Tell us about your roster, timing, and goals. We’ll craft a performance-first itinerary within 48 hours."
        overlayLabel="Contact"
        align="left"
        actions={[
          { label: "Start the plan", href: "#contact-form" },
          { label: "See facilities", href: "/facilities", variant: "secondary" },
        ]}
        stats={[
          { label: "Response time", value: "< 48 hours" },
          { label: "Programs served", value: "NCAA, academies, clubs" },
          { label: "Base", value: "Tenerife · Canary Islands" },
        ]}
      />

      <Section
        id="contact-form"
        eyebrow="Let’s talk"
        title="We reply personally."
        subtitle="Share the basics and we’ll design a call and proposal tailored to your athletes."
        align="left"
        fullHeight
        className="bg-gradient-to-b from-black via-[#050910] to-black"
        contentClassName="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start"
      >
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/30">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00B5E2]">
              What to expect
            </p>
            <p className="mt-3 text-base text-white/75">
              We’ll confirm your dates, roster profile, and desired intensity. From there we propose opponents, training slots, and cultural blocks—keeping NCAA rules and team safety front and center.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <CTAButton href="tel:+34664820226" variant="secondary">
                Call Jorge
              </CTAButton>
              <CTAButton href="mailto:jorge@tenerifenextacademy.com" variant="ghost">
                Email us
              </CTAButton>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {contacts.map((item) => (
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
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/70 p-6 shadow-2xl shadow-black/40 backdrop-blur">
          <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-white">
            Quick contact
          </h2>
          <p className="mt-2 text-sm text-white/70">
            All fields are required. We reply within two business days.
          </p>
          <ContactForm />
        </div>
      </Section>
    </PageShell>
  );
}
