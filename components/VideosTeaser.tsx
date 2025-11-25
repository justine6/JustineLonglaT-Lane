"use client";

import Link from "next/link";
import type { VideoItem } from "@/lib/videos";
import { VIDEOS } from "@/lib/videos";

// Local teaser list – first 2 videos only.
const teaserVideos: VideoItem[] = VIDEOS.slice(0, 2);

export default function VideosTeaser() {
  if (!teaserVideos.length) return null;

  return (
    <section className="mt-16">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          Featured videos
        </h2>

        <Link
          href="/videos"
          className="text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          View all videos →
        </Link>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {teaserVideos.map((video) => (
          <article
            key={video.slug}
            className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70"
          >
            <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-50">
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
    </section>
  );
}
