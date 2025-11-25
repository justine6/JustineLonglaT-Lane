import { notFound } from "next/navigation";

export default function VideoPage({ params }: any) {
  const slug = params?.slug as string | undefined;

  if (!slug) {
    notFound();
  }

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold">Video: {slug}</h1>
      <p className="mt-4 text-lg text-gray-600">
        Video details will appear here soon.
      </p>
    </main>
  );
}

// Simple metadata so Next is happy
export async function generateMetadata({ params }: any) {
  const slug = params?.slug as string | undefined;

  return {
    title: slug ? `Video — ${slug}` : "Video",
  };
}
