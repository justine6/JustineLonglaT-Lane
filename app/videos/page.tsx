// app/videos/page.tsx

import Link from "next/link";

import VideoGrid from "@/components/videos/VideoGrid";

export default function VideosPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50 px-4 py-14 text-slate-950 dark:from-slate-950 dark:via-slate-950 dark:to-black dark:text-white sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_35%)]" />

      <section className="relative mx-auto max-w-6xl">
        <header className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
            JLT Blueprint Media Library
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Platform Walkthroughs
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            Practical videos exploring platform engineering, governance,
            observability, cloud infrastructure, CI/CD, and operational
            architecture through real systems and implementation workflows.
          </p>

          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
            Identity. Observability. Execution. Unified.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/engineering-mesh"
              className="rounded-2xl border border-sky-300 bg-sky-50 px-5 py-2 text-sm font-semibold text-sky-700 transition hover:border-sky-400 hover:bg-sky-100 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-200 dark:hover:border-sky-400 dark:hover:bg-sky-500/20"
            >
              Explore the Engineering Mesh
            </Link>
          </div>
        </header>

        <VideoGrid />

        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-500">
            New walkthroughs are added as systems evolve and operational models
            mature.
          </p>
        </div>
      </section>
    </main>
  );
}