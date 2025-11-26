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
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#00B5E2]">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-base text-white/70 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
