import { ReactNode } from "react";

type FeatureCardProps = {
  icon?: ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/30">
      {icon && (
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#00B5E2]/20 text-xl text-white">
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-base text-white/75 leading-relaxed">{description}</p>
    </div>
  );
}
