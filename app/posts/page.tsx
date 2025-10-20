export default async function PostsIndex() {
  const fs = require("node:fs");
  const path = require("node:path");
  const dir = path.join(process.cwd(), "content/posts");

  const files: string[] = fs
    .readdirSync(dir)
    .filter((f: string) => f.endsWith(".mdx"));

  const posts = await Promise.all(
    files.map(async (f: string) => {
      const slug = f.replace(/\.mdx$/, "");
      const mod = await import(`@/content/posts/${slug}.mdx`);
      return {
        slug,
        meta: (mod as any).meta ?? { title: slug },
      };
    })
  );

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <ul className="space-y-4">
        {posts.map(({ slug, meta }) => (
          <li key={slug} className="border-b border-gray-200 dark:border-gray-800 pb-4">
            <a href={`/posts/${slug}`} className="text-lg font-semibold hover:underline">
              {meta.title ?? slug}
            </a>
            {meta.summary ? (
              <p className="text-sm text-gray-600 dark:text-gray-400">{meta.summary}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </main>
  );
}
