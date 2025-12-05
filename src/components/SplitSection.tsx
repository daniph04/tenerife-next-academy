import Image from "next/image";
import { ReactNode } from "react";
import Section from "./Section";
import CTAButton from "./CTAButton";

type Media = {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
  className?: string;
};

type SplitSectionProps = {
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  body?: ReactNode;
  media?: Media;
  reverse?: boolean;
  fullHeight?: boolean;
  actions?: { label: string; href: string; variant?: "primary" | "secondary" | "ghost" }[];
  className?: string;
  surfaceClassName?: string;
  contentClassName?: string;
  textClassName?: string;
  mediaWrapperClassName?: string;
};

/**
 * SplitSection pairs narrative text with an image/video block.
 * Use to keep copy and media aligned across pages.
 */
export default function SplitSection({
  eyebrow,
  title,
  subtitle,
  body,
  media,
  reverse = false,
  fullHeight,
  actions,
  className = "",
  surfaceClassName = "",
  contentClassName,
  textClassName = "",
  mediaWrapperClassName = "",
}: SplitSectionProps) {
  const gridClasses =
    contentClassName ||
    `grid gap-10 lg:grid-cols-2 items-center ${reverse ? "lg:grid-flow-col-dense" : ""}`;

  return (
    <Section
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      align="left"
      spacing="loose"
      fullHeight={fullHeight}
      className={className}
      contentClassName={gridClasses}
    >
      <div className={`space-y-6 ${textClassName}`}>
        {body && <div className="space-y-4 text-base sm:text-lg text-white/80">{body}</div>}
        {actions && actions.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {actions.map((cta) => (
              <CTAButton
                key={cta.label}
                href={cta.href}
                variant={cta.variant}
              >
                {cta.label}
              </CTAButton>
            ))}
          </div>
        )}
      </div>

      {media && (
        <div
          className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/35 ${
            surfaceClassName
          } ${mediaWrapperClassName}`}
        >
          {media.type === "image" ? (
            <Image
              src={media.src}
              alt={media.alt ?? "Tenerife Next Academy"}
              width={1400}
              height={900}
              className={`h-full w-full object-cover ${media.className ?? ""}`}
            />
          ) : (
            <video
              src={media.src}
              poster={media.poster}
              autoPlay
              loop
              muted
              playsInline
              className={`h-full w-full object-cover ${media.className ?? ""}`}
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
        </div>
      )}
    </Section>
  );
}
