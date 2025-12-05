import { ReactNode } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  spacing?: "tight" | "normal" | "loose";
  fullHeight?: boolean;
  className?: string;
  contentClassName?: string;
  fullWidth?: boolean;
  containerClassName?: string;
  children?: ReactNode;
  backgroundImage?: string;
  backgroundOverlay?: string; // e.g. "bg-black/60"
};

const spacingMap = {
  tight: "py-12 sm:py-14",
  normal: "py-16 sm:py-20",
  loose: "py-20 sm:py-28",
} as const;

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  align = "center",
  spacing = "normal",
  fullHeight = false,
  className = "",
  contentClassName = "",
  fullWidth = false,
  containerClassName = "",
  children,
  backgroundImage,
  backgroundOverlay = "bg-black/60",
}: SectionProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const hasHeader = eyebrow || title || subtitle;
  const wrapperClass = fullHeight ? "flex-1 flex flex-col justify-center" : "flex flex-col";
  const baseContainer = fullWidth
    ? "w-full max-w-none px-0 sm:px-0 lg:px-0"
    : "max-w-6xl px-4 sm:px-6 lg:px-8";
  const containerClasses = containerClassName
    ? `${baseContainer} ${containerClassName}`
    : baseContainer;
  return (
    <section
      id={id}
      className={`relative ${spacingMap[spacing]} ${fullHeight ? "min-h-screen" : ""} ${className} overflow-hidden`}
    >
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className={`absolute inset-0 ${backgroundOverlay}`} />
        </div>
      )}
      <div
        className={`mx-auto flex h-full flex-col ${containerClasses} relative z-10`}
      >
        <div className={`${wrapperClass} w-full ${hasHeader && children ? "gap-10" : "gap-6"}`}>
          {hasHeader && (
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              subtitle={subtitle}
              align={align}
            />
          )}
          {children && (
            <div
              className={`${alignClass} w-full ${fullHeight ? "flex-1 flex flex-col" : ""} ${contentClassName}`}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
