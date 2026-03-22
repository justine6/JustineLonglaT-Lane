"use client";

import Link from "next/link";
import type { VideoItem } from "@/lib/videos";
import { VIDEOS } from "@/lib/videos";

// Local teaser list – first 2 videos only.
const teaserVideos: VideoItem[] = VIDEOS.slice(0, 2);

export default function VideosTeaser() {
  if (!teaserVideos.length) return null;

  return (
    <section className="mx-auto mb-16 max-w-6xl px-4 md:px-6">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Featured Videos
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
            Short walkthroughs and platform engineering explainers.
          </p>
        </div>

        <div className="hidden sm:block">
          <Link
            href="/videos"
            className="inline-flex items-center rounded-xl border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-50 dark:hover:bg-blue-950/20"
          >
            View all videos
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {teaserVideos.map((video) => (
          <article
            key={video.slug}
            className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700/60 dark:bg-slate-900/70"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
              {video.title}
            </h3>

            <div className="mt-4">
              <Link
                href={`/videos/${video.slug}`}
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                Watch walkthrough →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 sm:hidden">
        <Link
          href="/videos"
          className="block w-full rounded-xl border border-blue-600 px-4 py-2 text-center text-sm font-medium text-blue-600 transition hover:bg-blue-50 dark:hover:bg-blue-950/20"
        >
          View all videos
        </Link>
      </div>
    </section>
  );
}