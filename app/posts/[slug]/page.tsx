import type { Metadata } from "next";

// ✅ Generate metadata — now typed correctly for Next 15
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  return {
    title: `${slug.replace(/-/g, " ")} | Posts`,
  };
}

// ✅ Main page component — async + awaiting params
export default async function PostPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold mb-2">Post: {slug}</h1>
      <p>
        This is a temporary placeholder for{" "}
        <code>/posts/{slug}</code>.
      </p>
    </main>
  );
}
