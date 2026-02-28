import { Card, CardDescription, CardHeader, CardTitle } from "@aac/ui";
import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "../../../lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest news and updates from AAC.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="container mx-auto max-w-4xl py-10">
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet.</p>
      ) : (
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>
                    {post.description}
                    <br />
                    <span className="text-xs">
                      {post.date} &middot; {post.author}
                    </span>
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
