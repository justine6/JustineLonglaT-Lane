// app/videos/page.tsx
import Image from "next/image";
import Link from "next/link";
import { VIDEOS } from "@/lib/videos";   // ⬅️ new import

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-10 text-gray-900 dark:bg-gray-950 dark:text-gray-100 sm:px-6">
      <section className="mx-auto max-w-5xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-semibold sm:text-4xl">
            Videos &amp; Walkthroughs
          </h1>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 sm:text-base">
            Short, practical videos that show how I design, secure, and operate
            cloud systems in real projects.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {VIDEOS.map((video) => (
            <article
              key={video.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              {/* Thumbnail / header */}
              <Link
                href={`/videos/${video.slug}`}
                className="relative aspect-video bg-black"
              >
                {video.thumbnail && (
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover opacity-80 transition group-hover:opacity-60"
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex items-center rounded-full bg-black/70 px-4 py-1 text-xs font-semibold text-white">
                    ▶ Watch • {video.duration}
                  </span>
                </div>
              </Link>

              {/* Copy + inline player */}
              <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
                <header>
                  <h2 className="text-lg font-semibold">
                    <Link
                      href={`/videos/${video.slug}`}
                      className="hover:text-blue-600"
                    >
                      {video.title}
                    </Link>
                  </h2>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {video.description}
                  </p>
                </header>

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

                <div className="mt-2 rounded-xl bg-black/90 p-1">
                  <video
                    controls
                    preload="metadata"
                    className="h-full w-full rounded-lg"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  <Link
                    href="/intro-call"
                    className="inline-flex items-center rounded-xl bg-blue-600 px-3 py-1.5 font-medium text-white hover:bg-blue-700"
                  >
                    Discuss this topic
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-gray-500 dark:text-gray-500">
          New videos are added as I complete real client projects and
          experiments.
        </p>
      </section>
    </main>
  );
}
