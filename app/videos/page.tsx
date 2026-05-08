// app/videos/page.tsx

import Image from "next/image";
import Link from "next/link";
import { VIDEOS } from "@/lib/videos";

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-14 text-white sm:px-6">
      <section className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
            JLT Blueprint Media Library
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Platform Walkthroughs
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
            Practical videos exploring platform engineering, governance,
            observability, cloud infrastructure, CI/CD, and operational
            architecture through real systems and implementation workflows.
          </p>

          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-sky-400">
            Identity. Observability. Execution. Unified.
          </p>
        </header>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {VIDEOS.map((video) => (
            <article
              key={video.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-2xl backdrop-blur transition duration-300 hover:border-sky-500/30 hover:shadow-sky-500/10"
            >
              {/* Thumbnail */}
              <Link
                href={`/videos/${video.slug}`}
                className="relative aspect-video overflow-hidden bg-black"
              >
                {video.thumbnail ? (
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                  />
                ) : null}

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-black/70 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    ▶ Watch {video.duration ? `• ${video.duration}` : ""}
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                <header>
                  <h2 className="text-xl font-semibold tracking-tight">
                    <Link
                      href={`/videos/${video.slug}`}
                      className="transition hover:text-sky-400"
                    >
                      {video.title}
                    </Link>
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {video.description}
                  </p>
                </header>

                {/* Tags */}
                {video.tags?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {video.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-sky-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}

                {/* Embedded YouTube Video or Local MP4 */}
                {video.youtubeId ? (
                  <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black">
                    <div className="aspect-video w-full">
                      <iframe
                        className="h-full w-full"
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black">
                    <video controls preload="metadata" className="h-full w-full">
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-3 flex flex-wrap gap-3">
                  <Link
                    href="/booking"
                    className="inline-flex items-center rounded-2xl bg-sky-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-400"
                  >
                    Discuss this topic
                  </Link>

                  {video.youtubeId ? (
                    <a
                      href={`https://youtu.be/${video.youtubeId}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-2xl border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-sky-500/30 hover:text-sky-300"
                    >
                      Watch on YouTube
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            New walkthroughs are added as systems evolve and operational models
            mature.
          </p>
        </div>
      </section>
    </main>
  );
}