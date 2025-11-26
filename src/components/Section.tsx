import { ReactNode } from "react";
import SectionHeader from "./SectionHeader";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  spacing?: "tight" | "normal" | "loose";
  children?: ReactNode;
};

const spacingMap = {
  tight: "py-10 sm:py-12",
  normal: "py-14 sm:py-16",
  loose: "py-20 sm:py-24",
} as const;

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  align = "center",
  spacing = "normal",
  children,
}: SectionProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <section id={id} className={`relative ${spacingMap[spacing]}`}>
      <div className="mx-auto flex max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || subtitle) && (
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            align={align}
          />
        )}
        {children && <div className={alignClass + " mt-8 w-full"}>{children}</div>}
      </div>
    </section>
  );
}
