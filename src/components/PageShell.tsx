import { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  className?: string;
  tone?: "default" | "ink" | "night";
};

/**
 * PageShell provides a consistent atmospheric background and padding wrapper
 * for all marketing pages. Use it as the outermost element inside a page
 * to keep gradients and subtle noise consistent.
 */
export default function PageShell({
  children,
  className = "",
  tone = "default",
}: PageShellProps) {
  const toneClass =
    tone === "ink"
      ? "bg-gradient-to-b from-[#02040b] via-[#050910] to-[#010309]"
      : tone === "night"
        ? "bg-gradient-to-b from-[#050910] via-[#02050c] to-[#010206]"
        : "bg-gradient-to-b from-[#03050b] via-[#050910] to-[#010308]";

  return (
    <div className={`relative min-h-screen text-white ${toneClass} ${className}`}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.8] mix-blend-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,181,226,0.08),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(96,165,255,0.08),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.06),transparent_35%)]" />
      </div>
      <div className="relative flex min-h-screen flex-col">
        {children}
      </div>
    </div>
  );
}
