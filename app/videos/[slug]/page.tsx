// app/videos/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { VIDEOS, getVideoBySlug } from "@/lib/videos";

type Params = { slug: string };

export async function generateStaticParams() {
  return VIDEOS.map((v) => ({ slug: v.slug }));
}

export default function VideoDetailPage({ params }: { params: Params }) {
  const video = getVideoBySlug(params.slug);

  if (!video) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-4 py-10 text-gray-900 dark:bg-gray-950 dark:text-gray-100 sm:px-6">
      <section className="mx-auto max-w-4xl space-y-6">
        <nav className="text-xs text-gray-500 dark:text-gray-400">
          <Link
            href="/videos"
            className="hover:text-gray-900 hover:underline dark:hover:text-gray-100"
          >
            &larr; Back to videos
          </Link>
        </nav>

        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
            Video walkthrough
          </p>
          <h1 className="text-2xl font-bold sm:text-3xl">{video.title}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {video.description}
          </p>
          {video.duration && (
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Duration: {video.duration}
            </p>
          )}
        </header>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-black/80 shadow-xl dark:border-slate-700">
          <video
            src={video.src}
            controls
            autoPlay
            preload="metadata"
            className="h-auto w-full rounded-2xl"
          />
        </div>

        {video.tags?.length ? (
          <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-wide text-blue-700 dark:text-blue-300">
            {video.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-blue-200 px-2 py-0.5 dark:border-blue-700/70"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <div className="pt-4">
          <Link
            href="/intro-call"
            className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Discuss this topic
          </Link>
        </div>
      </section>
    </main>
  );
}
