import Link from "next/link";
import posts from "@content/posts.json";

export default function PostsIndex() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <ul className="space-y-4">
        {posts.map((p: any) => (
          <li key={p.slug} className="border-b border-gray-200 dark:border-gray-800 pb-4">
            <Link href={`/posts/${p.slug}`} className="text-lg font-semibold hover:underline">
              {p.title}
            </Link>
            {p.summary ? <p className="text-sm text-gray-600 dark:text-gray-400">{p.summary}</p> : null}
          </li>
        ))}
      </ul>
    </main>
  );
}
