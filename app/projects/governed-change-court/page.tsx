import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

import { ORIGINS } from "@/config/links";

const title = "The Governed Change Court";
const description =
  "An executable governance model for evidence-led, contract-driven, and independently verified platform change.";

const lifecycle = [
  {
    step: "01",
    title: "Custody Lock",
    body: "Confirm the repository, branch, HEAD, remote, and worktree state before interpreting or changing anything.",
  },
  {
    step: "02",
    title: "Scope & Contract",
    body: "Define the expected behavior, authorized boundaries, invariants, and explicit stop conditions.",
  },
  {
    step: "03",
    title: "Discovery",
    body: "Inventory the system before acting so live authorities are separated from abandoned or duplicate artifacts.",
  },
  {
    step: "04",
    title: "Provenance",
    body: "Trace producers, consumers, history, and fingerprints to establish where authority actually resides.",
  },
  {
    step: "05",
    title: "Evidence Capture",
    body: "Preserve hashes, diffs, logs, counters, routes, and observed state as reviewable evidence.",
  },
  {
    step: "06",
    title: "Adjudication",
    body: "Compare the evidence with the contract, hear objections, and distinguish defects from intentional state.",
  },
  {
    step: "07",
    title: "Authorization",
    body: "Grant the smallest mutation authority needed—or withhold it when evidence remains incomplete.",
  },
  {
    step: "08",
    title: "Controlled Mutation",
    body: "Change only the authorized targets while preserving unrelated files and rollback boundaries.",
  },
  {
    step: "09",
    title: "Independent Validation",
    body: "Use separate validators, tests, builds, and runtime checks to prove that the result satisfies the contract.",
  },
  {
    step: "10",
    title: "Integration & Closure",
    body: "Review, merge, deploy, verify production, preserve the record, and explicitly exhaust temporary authority.",
  },
] as const;

const safeguards = [
  "Expected branch and commit guards",
  "Clean-index and worktree contracts",
  "Cryptographic artifact fingerprints",
  "Exact producer and consumer discovery",
  "Ambiguity rejection before mutation",
  "Narrow path and diff boundaries",
  "Independent post-change validation",
  "Remote and production verification",
] as const;

export const metadata: Metadata = {
  title: `${title} | JLT-LANE`,
  description,
  alternates: {
    canonical: "/projects/governed-change-court",
  },
  openGraph: {
    title,
    description,
    url: `${ORIGINS.main}/projects/governed-change-court`,
    type: "article",
    images: [
      {
        url: "/img/governed-change.png",
        width: 1672,
        height: 941,
        alt: "The Governed Change Court executable governance model",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/img/governed-change.png"],
  },
};

export const dynamic = "force-static";

export default function GovernedChangeCourtPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <article>
        <header className="border-b border-slate-200 bg-slate-50 px-4 py-12 dark:border-slate-800 dark:bg-slate-950 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/projects"
              className="text-sm font-semibold text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100"
            >
              ← Back to projects
            </Link>

            <div className="mt-8 max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
                Platform Engineering · Governance · DevSecOps
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                The Governed Change Court
              </h1>

              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                {description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Evidence-led",
                  "Contract-driven",
                  "Least privilege",
                  "Independently verified",
                ].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section className="px-4 py-10 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-2xl dark:border-slate-800">
              <Image
                src="/img/governed-change.png"
                alt="The Governed Change Court executable governance lifecycle"
                width={1672}
                height={941}
                priority
                className="h-auto w-full"
                sizes="(max-width: 1200px) 100vw, 1152px"
              />
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-8 lg:px-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
                The operating-model problem
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Tools execute. Governance decides.
              </h2>

              <div className="mt-5 space-y-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                <p>
                  Platform changes often fail because execution begins before
                  custody, authority, and expected outcomes have been established.
                  A command may be technically correct while still acting on the
                  wrong branch, artifact, consumer, or production boundary.
                </p>

                <p>
                  The Governed Change Court turns those risks into an executable
                  workflow. Evidence is collected before conclusions are drawn.
                  Contracts define success. Authority is deliberately bounded.
                  Mutation occurs only after authorization, and verification is
                  independent from the mechanism that produced the change.
                </p>
              </div>
            </div>

            <aside className="rounded-3xl border border-amber-300 bg-amber-50 p-6 text-slate-900 shadow-sm dark:border-amber-700/60 dark:bg-amber-950/20 dark:text-slate-100">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 dark:text-amber-300">
                Core principle
              </p>
              <p className="mt-4 text-2xl font-bold">
                No authorization—no mutation.
              </p>
              <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
                Discovery may expose defects, duplication, or stale artifacts.
                Their existence does not itself grant authority to repair or
                remove them.
              </p>
            </aside>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 px-4 py-14 dark:border-slate-800 dark:bg-slate-900/40 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
              Executable lifecycle
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Ten gates from custody to closure
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {lifecycle.map((item) => (
                <section
                  key={item.step}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950"
                >
                  <div className="flex items-start gap-4">
                    <span className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-bold text-white dark:bg-emerald-400 dark:text-emerald-950">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
              Guardrails
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Evidence that constrains execution
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {safeguards.map((safeguard) => (
                <div
                  key={safeguard}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-semibold leading-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  {safeguard}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-950 px-4 py-14 text-white dark:border-slate-800 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Final takeaway
            </p>

            <h2 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">
              Architecture first. Composition second. Mutation last.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
              Governed change is not bureaucracy. It is the operating discipline
              that makes platform work auditable, repeatable, reversible, and
              safe enough to scale.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/engineering-mesh"
                className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
              >
                Explore the Engineering Mesh
              </Link>

              <Link
                href="/projects"
                className="rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-400 hover:bg-slate-900"
              >
                View all projects
              </Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
