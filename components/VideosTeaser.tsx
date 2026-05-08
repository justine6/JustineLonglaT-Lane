// components/VideosTeaser.tsx
"use client";

import Link from "next/link";
import type { VideoItem } from "@/lib/videos";
import { VIDEOS } from "@/lib/videos";

const teaserVideos: VideoItem[] = VIDEOS.slice(0, 2);

export default function VideosTeaser() {
  if (!teaserVideos.length) return null;

  return (
    <section className="mx-auto mb-20 max-w-6xl px-4 md:px-6">
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
            JLT Media Library
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Platform Walkthroughs
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            Architecture walkthroughs, platform engineering explainers,
            observability demos, and operational design concepts from real
            systems.
          </p>

          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-sky-400">
            Identity. Observability. Execution. Unified.
          </p>
        </div>

        <div className="hidden sm:block">
          <Link
            href="/videos"
            className="inline-flex items-center rounded-2xl border border-sky-500/30 bg-slate-950/60 px-5 py-2.5 text-sm font-medium text-sky-400 backdrop-blur transition hover:border-sky-400 hover:bg-sky-500/10"
          >
            View all videos →
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {teaserVideos.map((video) => (
          <article
            key={video.slug}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:shadow-sky-500/10"
          >
            <Link href={`/videos/${video.slug}`} className="block h-full">
              <div className="relative aspect-video bg-slate-900">
                {video.thumbnail ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-full w-full object-cover opacity-80 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-sky-950 text-sm text-slate-400">
                    Video preview
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute left-4 top-4 rounded-full border border-sky-400/30 bg-slate-950/70 px-3 py-1 text-xs font-medium text-sky-300 backdrop-blur">
                  Platform Video
                </div>

                {video.duration && (
                  <div className="absolute bottom-4 right-4 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-medium text-white">
                    {video.duration}
                  </div>
                )}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur transition group-hover:scale-110 group-hover:bg-sky-500/30">
                    ▶
                  </div>
                </div>
              </div>

              <div className="flex h-full flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {video.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {video.description}
                  </p>

                  {video.tags?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {video.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="mt-6 text-sm font-medium text-sky-400 transition group-hover:text-sky-300">
                  Watch walkthrough →
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-8 sm:hidden">
        <Link
          href="/videos"
          className="block w-full rounded-2xl border border-sky-500/30 bg-slate-950/60 px-5 py-3 text-center text-sm font-medium text-sky-400 backdrop-blur transition hover:border-sky-400 hover:bg-sky-500/10"
        >
          View all videos →
        </Link>
      </div>
    </section>
  );
}