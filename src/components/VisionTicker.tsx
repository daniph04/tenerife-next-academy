const message =
  "TNA bridges NCAA and international clubs with elite training and cultural immersion in Tenerife — Europe’s paradise for football. Connecting talent. Building futures.";

export default function VisionTicker() {
  const items = Array.from({ length: 6 }, () => message);

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-black/70 backdrop-blur-lg">
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black via-black/70 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black via-black/70 to-transparent" />
      <div className="flex w-[200%] animate-marquee">
        {[0, 1].map((row) => (
          <div
            key={row}
            className="flex min-w-full items-center gap-10 whitespace-nowrap px-6 py-4 uppercase tracking-[0.22em] text-xs text-white/70 sm:text-sm"
          >
            {items.map((item, i) => (
              <span key={`${row}-${i}`} className="inline-flex items-center gap-3">
                <span className="h-[1px] w-6 bg-white/25" />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
