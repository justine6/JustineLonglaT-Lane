// app/readme/page.tsx
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { getRepoStats } from "@/lib/github";
import Link from "next/link";
import ReadmeMdx from "./ReadmeMdx";

const REPO_URL = "https://github.com/justine6/JustineLonglaT-Lane";

function formatDate(iso: string) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

function shortSha(sha: string) {
  return sha ? sha.slice(0, 7) : "—";
}

export default async function ReadmePage() {
  let stats: Awaited<ReturnType<typeof getRepoStats>> | null = null;

  try {
    stats = await getRepoStats();
  } catch {
    stats = null;
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      {/* Operational GitHub card */}
      <div className="not-prose mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
              <span className="text-lg" aria-hidden="true">
                ⌂
              </span>
            </div>

            <div>
              <div className="text-xs font-semibold tracking-[0.18em] text-slate-500 dark:text-white/60">
                TECHNICAL README
              </div>

              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:underline dark:text-white"
              >
                View full repository on GitHub <span aria-hidden="true">↗</span>
              </a>

              {stats ? (
                <div className="mt-1 text-xs text-slate-500 dark:text-white/60">
                  Last push:{" "}
                  <span className="font-medium">{formatDate(stats.pushedAt)}</span>{" "}
                  • Default:{" "}
                  <span className="font-medium">{stats.defaultBranch}</span>
                  {stats.latestCommitSha ? (
                    <>
                      {" "}
                      • Commit:{" "}
                      <a
                        href={stats.latestCommitUrl || REPO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:underline"
                      >
                        {shortSha(stats.latestCommitSha)}
                      </a>
                    </>
                  ) : null}
                </div>
              ) : (
                <div className="mt-1 text-xs text-slate-500 dark:text-white/60">
                  Live stats temporarily unavailable.
                </div>
              )}
            </div>
          </div>

          {/* Stats pills */}
          <div className="flex flex-wrap items-center gap-3">
            {[
              { label: "Stars", value: stats?.stars },
              { label: "Forks", value: stats?.forks },
              { label: "Watchers", value: stats?.watchers },
              { label: "Open issues", value: stats?.openIssues },
            ].map((item) => (
              <div
                key={item.label}
                className="group inline-flex rounded-full p-[1.5px] bg-gradient-to-r from-sky-400/50 via-indigo-400/40 to-emerald-400/50 transition hover:shadow-md hover:scale-[1.02]"
              >
                <div className="flex items-center gap-2 rounded-full bg-slate-900/90 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-white backdrop-blur-md dark:bg-white/10 dark:text-white">
                  <span className="uppercase text-white/70 group-hover:text-white transition">
                    {item.label}
                  </span>
                  <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-bold text-white dark:bg-white/20">
                    {item.value ?? "—"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Internal quick jump */}
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href="/engineering-mesh"
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            Engineering Mesh
          </Link>
          <Link
            href="/case-studies/engineering-grade-publishing"
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            Publishing Platform
          </Link>
        </div>
      </div>

      {/* MDX content (client-rendered to avoid createContext build crash) */}
      <ReadmeMdx />
    </main>
  );
}
