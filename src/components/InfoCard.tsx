import Image from "next/image";

type InfoCardProps = {
  title: string;
  description: string;
  ctaLabel?: string;
  href?: string;
  image: string;
};

export default function InfoCard({ title, description, ctaLabel, href, image }: InfoCardProps) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30 transition hover:-translate-y-1"
    >
      <div className="relative h-[420px] w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <h3 className="text-3xl font-black uppercase tracking-wide text-white">
          {title}
        </h3>
        <p className="mt-3 max-w-xl text-base text-white/80">{description}</p>
        {ctaLabel && href && (
          <span className="mt-5 inline-flex items-center text-sm font-semibold uppercase tracking-[0.2em] text-white transition group-hover:text-[#00B5E2]">
            {ctaLabel}
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </span>
        )}
      </div>
    </Wrapper>
  );
}
