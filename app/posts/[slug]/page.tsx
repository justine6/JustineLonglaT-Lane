import { notFound } from "next/navigation";
import PostCover from "@/components/PostCover"; // ← new client component below

export default async function PostPage({
  params,
}: {
  params: { slug: string }; // ✅ not a Promise
}) {
  const { slug } = params;

  let MDX: any;
  let meta: any = {};
  try {
    const mod = await import(`@/content/posts/${slug}.mdx`);
    MDX = mod.default;
    meta = (mod as any).meta ?? {};
  } catch {
    return notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{meta.title ?? slug}</h1>

      {meta.summary ? (
        <p className="text-gray-600 dark:text-gray-400 mb-6">{meta.summary}</p>
      ) : null}

      {meta.date ? (
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          {new Date(meta.date).toLocaleDateString()}
        </div>
      ) : null}

      {Array.isArray(meta.tags) && meta.tags.length ? (
        <div className="flex flex-wrap gap-2 mb-6">
          {meta.tags.map((t: string) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}

      {/* ✅ Resilient cover with graceful fallback */}
      <PostCover src={meta.cover} title={meta.title ?? slug} />

      <article className="prose dark:prose-invert max-w-none">
        <MDX />
      </article>
    </main>
  );
}

// Pre-generate static params from MDX files at build time
export function generateStaticParams() {
  const fs = require("node:fs");
  const path = require("node:path");
  const dir = path.join(process.cwd(), "content/posts");

  return fs
    .readdirSync(dir)
    .filter((f: string) => f.endsWith(".mdx"))
    .map((f: string) => ({ slug: f.replace(/\.mdx$/, "") }));
}
