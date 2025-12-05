"use client";

import PageShell from "@/components/PageShell";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import VisionHero from "@/components/VisionHero";

export default function LatestNewsPage() {
  return (
    <div className="bg-black text-white min-h-screen font-serif selection:bg-[#00B5E2] selection:text-white">

      {/* 1. HERO SECTION (Standardized) */}
      <VisionHero
        backgroundImage="/images/hero-tenerife-beach.jpg"
        title="LATEST NEWS"
        overlayText="LATEST NEWS"
        overlayTextClassName="text-[10vw]"
        subtitle="THE PULSE OF THE GAME"
        description="Breaking stories, deep dives, and analysis from the world of elite youth development and college soccer."
      />

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">

        {/* MAIN FEATURED STORY (The "Latest") */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-3 w-3 rounded-full bg-[#E31C2D] animate-pulse" />
            <span className="text-[#E31C2D] font-bold uppercase tracking-widest text-sm">Just In</span>
          </div>

          <div className="group cursor-pointer">
            {/* Image Container - Big & Cinematic */}
            <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl border border-white/10 mb-8">
              <Image
                src="/images/usa-vs-europe.png"
                alt="USA vs Europe"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                <span className="bg-[#00B5E2] text-black px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 inline-block">
                  Cover Story
                </span>
              </div>
            </div>

            {/* Headline & Intro */}
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-6xl font-black uppercase text-white leading-[0.9] mb-6 group-hover:text-[#00B5E2] transition-colors">
                Going Pro: The Dream is the same, <br className="hidden md:block" />
                The journey is different.
              </h2>
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl">
                High school to NCAA vs Youth Academy to First Team. Two different paths, one ultimate goal. We break down the pros, cons, and why the gap is closing fast.
              </p>
            </div>
          </div>
        </section>


        {/* SECONDARY STORIES GRID ("The Rest") */}
        <div className="border-t border-white/10 pt-10">
          <h3 className="text-xl font-bold uppercase tracking-widest text-white/50 mb-10">
            More Analysis
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* ARTICLE 1: NCAA SHAKEUP */}
            <div className="flex flex-col gap-4 group cursor-pointer">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[#111]">
                {/* Placeholder Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-black text-white/10">NCAA</span>
                </div>
              </div>
              <div>
                <span className="text-[#00B5E2] text-xs font-bold uppercase tracking-wider mb-2 block">Competition</span>
                <h4 className="text-2xl font-black uppercase leading-tight text-white mb-2 group-hover:text-[#00B5E2] transition-colors">
                  U.S. Soccer Proposes Full Academic Year Season
                </h4>
                <p className="text-sm text-white/60 leading-relaxed line-clamp-3">
                  A major shift that could align college soccer with the global calendar, improving player development across the board.
                </p>
              </div>
            </div>

            {/* ARTICLE 2: DID YOU KNOW */}
            <div className="flex flex-col gap-4 group cursor-pointer">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[#00B5E2]/10">
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center flex-col">
                  <span className="text-4xl mb-4">✈️</span>
                  <p className="font-black text-2xl uppercase italic text-white">One Trip.<br />Every 4 Years.</p>
                </div>
              </div>
              <div>
                <span className="text-[#00B5E2] text-xs font-bold uppercase tracking-wider mb-2 block">Rules & Regulations</span>
                <h4 className="text-2xl font-black uppercase leading-tight text-white mb-2 group-hover:text-[#00B5E2] transition-colors">
                  The &quot;Foreign Tour&quot; Rule Explained
                </h4>
                <p className="text-sm text-white/60 leading-relaxed line-clamp-3">
                  Why NCAA teams can only travel internationally once every four years, and how to make it count.
                </p>
              </div>
            </div>

            {/* ARTICLE 3: MARKET WATCH (Visual style) */}
            <div className="flex flex-col gap-4 group cursor-pointer">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-black flex items-center justify-center">
                <div className="space-y-4 w-full px-6">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-xs font-bold text-white/50">MLS DRAFT</span>
                    <span className="text-green-500 font-mono text-xs">▲ 12%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-xs font-bold text-white/50">NCAA D1</span>
                    <span className="text-green-500 font-mono text-xs">▲ STABLE</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-white/50">EU ACADEMY</span>
                    <span className="text-blue-500 font-mono text-xs">● HOLD</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-[#00B5E2] text-xs font-bold uppercase tracking-wider mb-2 block">Market Watch</span>
                <h4 className="text-2xl font-black uppercase leading-tight text-white mb-2 group-hover:text-[#00B5E2] transition-colors">
                  The Value of a College Roster Spot
                </h4>
                <p className="text-sm text-white/60 leading-relaxed line-clamp-3">
                  Analyzing the recruitment trends and scholarship values in the TOP 25 programs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer of the newspaper */}
      <footer className="mt-12 border-t-4 border-white pt-6 text-center text-white/40">
        <p className="font-bold uppercase tracking-widest text-xs">Tenerife Next Academy © {new Date().getFullYear()} — Building the Future of Football</p>
      </footer>
    </div>
  );
}
