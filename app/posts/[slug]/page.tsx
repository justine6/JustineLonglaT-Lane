import { notFound } from "next/navigation";
import Image from "next/image";
import posts from "@/content/projects/posts.json"; // adjust if your path differs

type Post = {
  slug: string;
  title: string;
  summary?: string;
  cover?: string;
  date?: string;
  tags?: string[];
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = (posts as Post[]).find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.summary ? (
        <p className="text-gray-600 dark:text-gray-400 mb-6">{post.summary}</p>
      ) : null}
      {post.date ? (
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          {new Date(post.date).toLocaleDateString()}
        </div>
      ) : null}
      {post.tags?.length ? (
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">
              {t}
            </span>
          ))}
        </div>
      ) : null}

      {post.cover ? (
        <div className="relative w-full aspect-[16/9] mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover"
            unoptimized
            priority
          />
        </div>
      ) : null}

      {/* Placeholder content – wire MDX later */}
      <article className="prose dark:prose-invert max-w-none">
        <p>
          This is a placeholder for the full article. You can wire MDX later and render rich content here.
          For now, this dynamic route is working.
        </p>
      </article>
    </main>
  );
}

