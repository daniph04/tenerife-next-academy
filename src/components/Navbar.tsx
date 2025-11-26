"use client";

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/facilities", label: "Facilities" },
  { href: "/tenerife", label: "Tenerife" },
  { href: "/about-us", label: "About us" },
  { href: "/latest-news", label: "Latest news" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-base sm:text-lg font-black tracking-tight text-white"
          >
            TENERIFE <span className="text-[#00B5E2]">NEXT</span> ACADEMY
          </Link>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                    className={`relative text-xs lg:text-sm font-semibold uppercase tracking-[0.18em] transition-colors ${isActive ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#00B5E2]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white hover:border-white/40 transition"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden px-4 sm:px-6"
          >
            <div className="rounded-2xl border border-white/10 bg-black/85 backdrop-blur-xl shadow-xl shadow-black/30 px-4 py-4 space-y-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-[0.15em] transition-colors ${isActive ? "bg-white/10 text-white" : "text-white/70 hover:text-white"
                      }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
