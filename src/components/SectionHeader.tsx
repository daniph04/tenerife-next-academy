import { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.28em] text-[#00B5E2]">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-tight tracking-tight text-white">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="max-w-3xl text-lg text-white/75 sm:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
