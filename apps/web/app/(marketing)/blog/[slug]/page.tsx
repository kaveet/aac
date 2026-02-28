import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPost, getBlogPosts } from "../../../../lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto max-w-3xl py-10">
      <article className="prose dark:prose-invert max-w-none">
        <header className="mb-8 not-prose">
          <h1 className="mb-2 text-4xl font-bold">{post.title}</h1>
          <p className="text-muted-foreground">
            {post.date} &middot; {post.author}
          </p>
          <div className="mt-2 flex gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs">
                {tag}
              </span>
            ))}
          </div>
        </header>
        <MDXRemote source={post.content} />
      </article>
    </main>
  );
}
