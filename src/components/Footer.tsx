import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/70 backdrop-blur-lg text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-black tracking-tight text-white"
            >
              TENERIFE <span className="text-[#00B5E2]">NEXT</span> ACADEMY
            </Link>
            <p className="mt-3 max-w-xl text-sm text-white/70">
              Elite football experiences in Europe&apos;s paradise. Bridging NCAA
              programs, international academies, and Tenerife&apos;s world-class
              facilities.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00B5E2]">
              Contact
            </p>
            <a
              href="tel:+34664820226"
              className="block text-sm font-semibold text-white hover:text-[#00B5E2] transition"
            >
              +34 664 82 02 26
            </a>
            <a
              href="mailto:jorge@tenerifenextacademy.com"
              className="block text-sm font-semibold text-white hover:text-[#00B5E2] transition"
            >
              jorge@tenerifenextacademy.com
            </a>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00B5E2]">
              Connect
            </p>
            <a
              href="https://www.instagram.com/tna_soccer/"
              target="_blank"
              rel="noreferrer"
              className="block text-sm font-semibold text-white hover:text-[#00B5E2] transition"
            >
              Instagram · @tna_soccer
            </a>
            <a
              href="https://www.linkedin.com/in/jorge-gonzalezm"
              target="_blank"
              rel="noreferrer"
              className="block text-sm font-semibold text-white hover:text-[#00B5E2] transition"
            >
              LinkedIn · Jorge González Marrero
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tenerife Next Academy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Phone · Email · Instagram · LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
