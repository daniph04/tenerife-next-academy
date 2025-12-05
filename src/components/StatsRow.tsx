type Stat = {
  label: string;
  value: string;
  description?: string;
};

type StatsRowProps = {
  stats: Stat[];
  columns?: 2 | 3 | 4;
};

export default function StatsRow({ stats, columns = 3 }: StatsRowProps) {
  const grid = columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid gap-4 ${grid}`}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-lg shadow-black/30"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">{stat.label}</p>
          <p className="mt-2 text-3xl font-black text-white">{stat.value}</p>
          {stat.description && <p className="mt-1 text-sm text-white/70">{stat.description}</p>}
        </div>
      ))}
    </div>
  );
}
