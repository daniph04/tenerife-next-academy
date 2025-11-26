"use client";

import NewsCard from "@/components/NewsCard";
import { motion } from "framer-motion";

type NewsItem = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags?: string[];
  heroImage?: string;
};

type Props = {
  posts: NewsItem[];
};

export default function NewsListClient({ posts }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <NewsCard
            slug={post.slug}
            title={post.title}
            summary={post.summary}
            date={post.date}
            tags={post.tags}
            image={post.heroImage ?? "/images/news-connecting-talent.jpg"}
          />
        </motion.div>
      ))}
    </div>
  );
}
