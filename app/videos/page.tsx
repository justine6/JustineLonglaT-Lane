// app/videos/page.tsx

import Link from "next/link";

import VideoGrid from "@/components/videos/VideoGrid";

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-14 text-white sm:px-6">
      <section className="mx-auto max-w-6xl">
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

          <div className="mt-8 flex justify-center">
            <Link
              href="/engineering-mesh"
              className="rounded-2xl border border-sky-500/30 bg-sky-500/10 px-5 py-2 text-sm font-semibold text-sky-200 transition hover:border-sky-400 hover:bg-sky-500/20"
            >
              Explore the Engineering Mesh
            </Link>
          </div>
        </header>

        <VideoGrid />

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