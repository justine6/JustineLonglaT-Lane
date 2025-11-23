"use client";

import Link from "next/link";
import { LINKS } from "@/config/links";

type HeroCard = {
  title: string;
  tag: string;
  description: string;
  href: string;
};

const HERO_CARDS: HeroCard[] = [
  {
    title: "DevSecOps Pipeline Architecture",
    tag: "Delivery • Reliability",
    href: "/projects/devsecops-pipeline-architecture",
    description:
      "How I turn flaky, multi-stage pipelines into a resilient, observable delivery system with guardrails for secrets, compliance, and runtime drift.",
  },
  {
    title: "Cloud Migration Best Practices",
    tag: "AWS • Migration",
    href: "/projects/cloud-migration-best-practices",
    description:
      "Patterns I use to move workloads to AWS without weekend fire drills—landing zones, cutover strategies, and rollback-friendly deployments.",
  },
  {
    title: "Platform Ecosystem Architecture",
    tag: "Platforms • DX",
    href: "/projects/platform-ecosystem-architecture",
    description:
      "Behind the scenes of the Jutellane multi-site platform: DNS, subdomains, CI/CD, and environment isolation for docs, blog, and marketing sites.",
  },
];

export default function PostHeroCards() {
  return (
    <section className="mt-10 mb-4 space-y-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
            Deep Dives
          </p>
          <h3 className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-50">
            Architecture stories from the field
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
            Hand-picked write-ups that explain how I design pipelines, migrations,
            and platform foundations you can actually run in production.
          </p>
        </div>

        <Link
          href={LINKS.blog}
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:border-sky-500 hover:text-sky-700 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-sky-400"
          prefetch
        >
          View all articles
        </Link>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {HERO_CARDS.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm ring-1 ring-slate-200/60 transition hover:-translate-y-1 hover:border-sky-400 hover:shadow-lg hover:ring-sky-300/70 dark:border-slate-700 dark:bg-slate-900/70 dark:ring-slate-700/80 dark:hover:border-sky-400/80 dark:hover:ring-sky-500/60"
            prefetch
          >
            <div>
              <p className="inline-flex items-center rounded-full bg-sky-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700 group-hover:bg-sky-100 dark:bg-sky-900/40 dark:text-sky-200">
                {card.tag}
              </p>
              <h4 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-sky-700 dark:text-slate-50 dark:group-hover:text-sky-300">
                {card.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {card.description}
              </p>
            </div>

            <span className="mt-4 inline-flex items-center text-sm font-medium text-sky-600 group-hover:gap-1.5 group-hover:text-sky-700 dark:text-sky-300 dark:group-hover:text-sky-200">
              Read the deep dive
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
