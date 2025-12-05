export type Destination = {
  slug: string;
  title: string;
  image: string;
  summary: string;
  bullets: string[];
};

export const destinations: Destination[] = [
  {
    slug: "puerto-de-la-cruz-teide",
    title: "Puerto de la Cruz · Teide",
    image: "/images/tenerife-puerto.jpg",
    summary:
      "Black-sand beaches and Spain’s highest peak—ideal for recovery walks, sunrise rituals, and team photos.",
    bullets: [
      "Boardwalks and calm coves for post-training walks.",
      "Cable car to Teide for sunrise bonding sessions.",
      "Cooler north-side microclimate for contrast days.",
    ],
  },
  {
    slug: "playa-las-americas",
    title: "Playa Las Américas",
    image: "/images/tenerife-americas.jpg",
    summary:
      "South coast hub: beach promenades, restaurants, and quick transfers back to the training base in Costa Adeje.",
    bullets: [
      "Golden-hour recovery walks along the shoreline.",
      "Fast logistics from hotels to pitches and airport.",
      "Safe, lively environment for team culture.",
    ],
  },
  {
    slug: "los-abrigos-natural-pools",
    title: "Los Abrigos · Natural pools",
    image: "/images/tenerife-abrigos.jpg",
    summary:
      "Fishing-village calm and volcanic plunge pools—perfect for cold-water recovery with Atlantic views.",
    bullets: [
      "Natural pools for contrast therapy days.",
      "Seafood spots suited for group dinners.",
      "Minutes from Tenerife South airport and T3.",
    ],
  },
  {
    slug: "siam-park",
    title: "Siam Park",
    image: "/images/tenerife-siam.jpg",
    summary:
      "World-class water park for an adrenaline reset between training blocks—safe, organised, and fun.",
    bullets: [
      "Team-building outside the pitch.",
      "Safe, managed group experiences.",
      "Easy transfers from Costa Adeje hotels.",
    ],
  },
  {
    slug: "playa-de-benijo",
    title: "Playa de Benijo",
    image: "/images/tenerife-benijo.jpg",
    summary:
      "Wild north-shore sunsets framed by volcanic rocks—iconic backdrop for reflection after a heavy block.",
    bullets: [
      "Spectacular sunsets for team rituals.",
      "Authentic Canarian food nearby.",
      "Uncrowded, raw Atlantic scenery.",
    ],
  },
];

