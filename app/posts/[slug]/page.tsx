import type { Metadata } from "next";

export async function generateMetadata(
  { params }: any
): Promise<Metadata> {
  const slug = params?.slug ?? "post";
  return {
    title: slug.replace(/-/g, " ") + " | Posts",
  };
}

export default function PostPage({ params }: any) {
  const slug = params?.slug ?? "post";
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold mb-2">Post: {slug}</h1>
      <p>This is a temporary placeholder for <code>/posts/{'{'}slug{'}'}</code>.</p>
    </main>
  );
}
