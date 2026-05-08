// components/VideosTeaser.tsx
"use client";

import Link from "next/link";
import type { VideoItem } from "@/lib/videos";
import { VIDEOS } from "@/lib/videos";

// Show first 2 videos only
const teaserVideos: VideoItem[] = VIDEOS.slice(0, 2);

const OVERVIEW_VIDEO_ID =
  process.env.NEXT_PUBLIC_OVERVIEW_VIDEO_ID;

export default function VideosTeaser() {
  if (!teaserVideos.length) return null;

  return (
    <section className="mx-auto mb-20 max-w-6xl px-4 md:px-6">
      {/* Header */}
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
            View all videos
          </Link>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {teaserVideos.map((video) => (
          <article
            key={video.slug}
            className="group rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:shadow-sky-500/10"
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-sky-400">
                  Platform Video
                </p>

                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {video.title}
                </h3>

                {video.description && (
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {video.description}
                  </p>
                )}
              </div>

              <div className="mt-6">
                <Link
                  href={`/videos/${video.slug}`}
                  className="inline-flex items-center text-sm font-medium text-sky-400 transition hover:text-sky-300"
                >
                  Watch walkthrough →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="mt-8 sm:hidden">
        <Link
          href="/videos"
          className="block w-full rounded-2xl border border-sky-500/30 bg-slate-950/60 px-5 py-3 text-center text-sm font-medium text-sky-400 backdrop-blur transition hover:border-sky-400 hover:bg-sky-500/10"
        >
          View all videos
        </Link>
      </div>
    </section>
  );
}