import CinematicHero from "@/components/CinematicHero";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";
import { getNewsPost, getNewsPosts } from "@/lib/news";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = await getNewsPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getNewsPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Tenerife Next Academy`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [post.heroImage ?? "/images/hero-latest-news-coast.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [post.heroImage ?? "/images/hero-latest-news-coast.jpg"],
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const post = await getNewsPost(params.slug);
  if (!post) return notFound();

  return (
    <PageShell>
      <CinematicHero
        backgroundImage={post.heroImage ?? "/images/hero-latest-news-coast.jpg"}
        eyebrow="Latest news"
        title={post.title}
        subtitle={post.summary}
        overlayLabel="Article"
        align="left"
        actions={[{ label: "Back to news", href: "/latest-news", variant: "secondary" }]}
      />

      <Section align="left" spacing="loose" className="bg-gradient-to-b from-black via-[#050910] to-black">
        <article className="mx-auto max-w-3xl prose prose-invert prose-headings:text-white prose-strong:text-white prose-p:text-white/80 prose-a:text-[#00B5E2]">
          <div className="mb-6 text-sm uppercase tracking-[0.2em] text-white/60">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
          {post.content}
        </article>
      </Section>
    </PageShell>
  );
}
