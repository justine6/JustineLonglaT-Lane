// app/posts/page.tsx
export const runtime = "nodejs";
import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";

type PostMeta = {
  title: string;
  summary?: string;
};

// If you have a global MDX type decl, great. If not, we narrow inline.
type MDXModule = {
  default: React.ComponentType<any>;
  meta?: PostMeta;
};

export const dynamic = "force-dynamic"; // ← skip prerender; render at request time
export default async function PostsIndex() {
  const dir = path.join(process.cwd(), "content/posts");

  // read dir as ESM (no require)
  const entries = await fs.readdir(dir);
  const files = entries.filter((f) => f.endsWith(".mdx"));

  const posts = await Promise.all(
    files.map(async (f) => {
      const slug = f.replace(/\.mdx$/, "");
      const mod = (await import(`@/content/posts/${slug}.mdx`)) as MDXModule;
      const meta: PostMeta = mod.meta ?? { title: slug };
      return { slug, meta };
    })
  );

  // sort newest-first if filenames are date-prefixed; otherwise remove
  posts.sort((a, b) => a.slug < b.slug ? 1 : -1);

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <ul className="space-y-4">
        {posts.map(({ slug, meta }) => (
          <li
            key={slug}
            className="border-b border-gray-200 dark:border-gray-800 pb-4"
          >
            <Link
              href={`/posts/${slug}`}
              className="text-lg font-semibold hover:underline"
            >
              {meta.title ?? slug}
            </Link>
            {meta.summary ? (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {meta.summary}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </main>
  );
}
