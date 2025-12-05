import Link from "next/link";
import { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const variants = {
  primary:
    "bg-gradient-to-r from-[#00B5E2] via-[#3cc6ff] to-[#60a5ff] text-black shadow-lg shadow-[#00B5E2]/30 hover:brightness-110",
  secondary:
    "border border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10",
  ghost:
    "text-white/80 hover:text-white",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
