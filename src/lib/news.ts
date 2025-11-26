import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ReactElement } from "react";

export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags?: string[];
  heroImage?: string;
  content?: ReactElement;
};

const contentDir = path.join(process.cwd(), "content", "news");

export async function getNewsPosts(): Promise<NewsPost[]> {
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir).filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const source = fs.readFileSync(path.join(contentDir, file), "utf8");
      const { frontmatter } = await compileMDX<NewsPost>({
        source,
        options: {
          parseFrontmatter: true,
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [],
          },
        },
      });
      return {
        slug,
        title: frontmatter?.title ?? slug,
        date: frontmatter?.date ?? "",
        summary: frontmatter?.summary ?? "",
        tags: frontmatter?.tags ?? [],
        heroImage: frontmatter?.heroImage,
      };
    })
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getNewsPost(slug: string): Promise<NewsPost | null> {
  const fullPath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const source = fs.readFileSync(fullPath, "utf8");
  const { content, frontmatter } = await compileMDX<NewsPost>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
      },
    },
  });

  return {
    slug,
    title: frontmatter?.title ?? slug,
    date: frontmatter?.date ?? "",
    summary: frontmatter?.summary ?? "",
    tags: frontmatter?.tags ?? [],
    heroImage: frontmatter?.heroImage,
    content,
  };
}
