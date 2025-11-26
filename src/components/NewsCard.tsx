import Link from "next/link";
import Image from "next/image";

type NewsCardProps = {
  title: string;
  summary: string;
  slug: string;
  date: string;
  tags?: string[];
  image?: string;
};

export default function NewsCard({ title, summary, slug, date, tags = [], image }: NewsCardProps) {
  return (
    <Link
      href={`/latest-news/${slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/30 transition hover:-translate-y-1"
    >
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60">
          <span>{new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
          {tags.length > 0 && (
            <span className="inline-flex gap-2 text-white/50">
              {tags.slice(0, 2).map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 px-2 py-1 text-[10px]">
                  {tag}
                </span>
              ))}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-white/70 leading-relaxed">{summary}</p>
        <span className="mt-auto text-sm font-semibold uppercase tracking-[0.2em] text-[#00B5E2]">
          Leer más →
        </span>
      </div>
    </Link>
  );
}
