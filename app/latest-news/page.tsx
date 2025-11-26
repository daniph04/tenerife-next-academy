import HeroFull from "@/components/HeroFull";
import Section from "@/components/Section";
import NewsListClient from "@/components/NewsListClient";
import { getNewsPosts } from "@/lib/news";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest News | Tenerife Next Academy",
  description: "Insights for NCAA soccer, foreign tours, and the path to pro.",
};

export default async function LatestNewsPage() {
  const posts = await getNewsPosts();

  return (
    <div className="bg-transparent">
      <HeroFull
        backgroundImage="/images/hero-latest-news-coast.jpg"
        title="Latest news"
        subtitle="Insights for NCAA soccer, foreign tours, and the path to pro."
        overlayText="Latest News"
      />

      <Section
        eyebrow="Did you know?"
        title="Every NCAA program is allowed one international trip every four years."
        subtitle="Un viaje único para entrenar, competir y crecer como equipo. Hazlo inolvidable en Tenerife."
      />

      <Section
        title="Going pro — United States vs Europe"
        subtitle='"The dream is the same. The journey is different."'
        align="center"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/30">
            <div className="flex items-center justify-between">
              <h4 className="text-2xl font-black text-white">United States 🇺🇸</h4>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00B5E2]">
                Structured pathway
              </span>
            </div>
            <ul className="mt-6 space-y-4 text-sm text-white/75">
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00B5E2]/20 text-[#00B5E2] font-semibold">
                  1
                </span>
                High school → NCAA soccer
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00B5E2]/20 text-[#00B5E2] font-semibold">
                  2
                </span>
                NCAA → MLS Draft
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00B5E2]/20 text-[#00B5E2] font-semibold">
                  3
                </span>
                MLS Draft → Pro contract & development
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/30">
            <div className="flex items-center justify-between">
              <h4 className="text-2xl font-black text-white">Europe 🇪🇸🇬🇧🇮🇹🇫🇷</h4>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#60a5ff]">
                Football culture
              </span>
            </div>
            <ul className="mt-6 space-y-4 text-sm text-white/75">
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#60a5ff]/20 text-[#60a5ff] font-semibold">
                  1
                </span>
                Youth academies → B teams
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#60a5ff]/20 text-[#60a5ff] font-semibold">
                  2
                </span>
                B teams → First Division
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#60a5ff]/20 text-[#60a5ff] font-semibold">
                  3
                </span>
                First Division → Global exposure
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Latest articles" align="left">
        <NewsListClient posts={posts} />
      </Section>
    </div>
  );
}
