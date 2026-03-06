// app/projects/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { PROJECTS } from "./data";
import ProjectsCard from "@/components/ProjectsCard";

// Derived collections
const FEATURED_MAIN = PROJECTS.find((p) => p.featured) ?? PROJECTS[0];

const FEATURED_SECONDARY = PROJECTS.filter(
  (p) => p.featured && p.slug !== FEATURED_MAIN.slug
);

const PINNED_COUNT = PROJECTS.filter((p) => p.pinned).length;

// Topics from tags (deduped)
const TOPICS = Array.from(
  new Set(PROJECTS.flatMap((p) => (p.tags ?? []).map((t) => t.toLowerCase())))
).sort((a, b) => a.localeCompare(b));

// Optional: order certain topics first
const TOPIC_ORDER: string[] = [
  "automation",
  "devsecops",
  "platform engineering",
  "aws",
  "observability",
  "security",
  "chatops",
];

function sortTopics(topics: string[]): string[] {
  const withIndex = new Map<string, number>();
  TOPIC_ORDER.forEach((t, i) => withIndex.set(t, i));

  return [...topics].sort((a, b) => {
    const ai = withIndex.has(a)
      ? withIndex.get(a)!
      : TOPIC_ORDER.length + a.charCodeAt(0);
    const bi = withIndex.has(b)
      ? withIndex.get(b)!
      : TOPIC_ORDER.length + b.charCodeAt(0);
    return ai - bi;
  });
}

export const metadata: Metadata = {
  title: "Projects & Case Studies | Justine Longla T. Consulting",
  description:
    "A focused set of automation and reliability projects covering CI/CD helpers, migration tooling, proactive Teams bots, platform architecture, DevSecOps practices, and cost-aware, observable cloud platforms.",
};

export const dynamic = "force-static";

export default function ProjectsPage() {
  const totalProjects = PROJECTS.length;
  const sortedTopics = sortTopics(TOPICS);

  return (
    <main className="min-h-screen bg-white px-4 py-10 text-slate-900 dark:bg-slate-950 dark:text-slate-50 sm:px-8 lg:px-16">
      <section className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
            Projects &amp; Case Studies
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            A focused set of automation and reliability projects.
          </h1>
          <p className="max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Real-world engagements covering CI/CD helpers, migration tooling,
            proactive Teams bots, platform architecture, DevSecOps practices,
            and cost-aware, observable cloud platforms.
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span>{totalProjects} total projects</span>
            <span className="h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-600" />
            <span>{PINNED_COUNT} pinned / featured</span>
          </div>
        </header>

        {FEATURED_MAIN && (
          <section className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white via-slate-50 to-slate-100 p-6 shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 dark:shadow-slate-900/70">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
              Engineering Mesh · Featured Work
            </p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
              {FEATURED_MAIN.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-slate-600 dark:text-slate-200">
              A multi-site engineering ecosystem connecting marketing,
              documentation, blogs, and consulting automation — all powered by
              CI/CD, PowerShell, DNS, and cloud-native DevSecOps practices.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="rounded-xl bg-white/80 px-4 py-3 text-xs text-slate-700 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900/80 dark:text-slate-200 dark:ring-slate-800">
                <div className="font-semibold text-slate-900 dark:text-slate-50">
                  Justine Longla T.
                </div>
                <div className="mt-1 text-[0.7rem] text-slate-600 dark:text-slate-300">
                  Production-grade portfolio with real CI/CD, caching strategy,
                  image optimization, and automated verification.
                </div>
              </div>

              <Link
                href={`/projects/${FEATURED_MAIN.slug}`}
                className="inline-flex items-center rounded-xl bg-emerald-400 px-4 py-2 text-xs font-semibold text-emerald-950 shadow-lg shadow-emerald-400/40 transition hover:bg-emerald-300"
              >
                Open full case study →
              </Link>
            </div>
          </section>
        )}

        {FEATURED_SECONDARY.length > 0 && (
          <section className="space-y-3">
            <h3 className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Featured Project
            </h3>
            <div className="max-w-md">
              <ProjectsCard project={FEATURED_SECONDARY[0] as any} />
            </div>
          </section>
        )}

        <hr className="border-slate-200 dark:border-slate-800" />

        <section className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              Topics
            </span>
            {sortedTopics.map((topic) => (
              <button
                key={topic}
                type="button"
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm transition hover:border-emerald-400 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-200"
              >
                {topic}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-[0.7rem] uppercase tracking-[0.18em]">
                View
              </span>
              <div className="inline-flex rounded-full bg-slate-100 p-1 dark:bg-slate-900">
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white shadow-sm dark:bg-slate-700 dark:text-slate-50">
                  Grid
                </span>
                <span className="px-3 py-1 text-xs text-slate-500 dark:text-slate-500">
                  List
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[0.7rem] uppercase tracking-[0.18em]">
                Sort by
              </span>
              <div className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-900">
                <span className="text-xs text-slate-900 dark:text-slate-100">
                  Featured first
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              All Projects
            </span>
            <span>
              {totalProjects} total · {PINNED_COUNT} pinned / featured
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <ProjectsCard key={project.slug} project={project as any} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}