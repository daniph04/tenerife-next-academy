import { MetadataRoute } from "next";
import { getNewsPosts } from "@/lib/news";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = ["", "/facilities", "/tenerife", "/about-us", "/latest-news"];
  const posts = await getNewsPosts();

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path || "/"}`,
      lastModified: new Date(),
    })),
    ...posts.map((post) => ({
      url: `${baseUrl}/latest-news/${post.slug}`,
      lastModified: new Date(post.date || Date.now()),
    })),
  ];
}
