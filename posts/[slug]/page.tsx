// posts/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { POSTS } from "@/posts";

export default function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const key = params.slug;          // ✅ removed KnownSlug
  const post = POSTS[key];

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/posts" className="relative btn-shiny">
        &larr; Back to Posts
      </Link>

      <h1 className="text-4xl font-bold mt-6 mb-4">{post.title}</h1>

      <article
        className="prose prose-invert prose-blue"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </main>
  );
}
