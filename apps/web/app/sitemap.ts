import type { MetadataRoute } from "next";
import { getBlogPosts } from "../lib/blog";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts();

  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogUrls,
  ];
}
