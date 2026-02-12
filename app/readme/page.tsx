'use client'

import Content from "./content.mdx";
import { Github, ArrowUpRight } from "lucide-react";

export default function ReadmePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-8">
        <a
          href="https://github.com/justine6/JustineLonglaT-Lane"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group inline-flex items-center gap-3 rounded-2xl
            border border-slate-200 bg-slate-50
            px-5 py-4 text-sm font-semibold text-slate-800
            shadow-sm transition hover:bg-slate-100 hover:-translate-y-[1px]
            dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50
          "
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/60 ring-1 ring-slate-200 dark:bg-white/10 dark:ring-white/10">
            <Github className="h-5 w-5 opacity-80" aria-hidden="true" />
          </span>

          <span className="flex flex-col gap-0.5 leading-tight">
            <span className="text-xs tracking-[0.18em] font-bold opacity-70">
              TECHNICAL README
            </span>
            <span className="text-[13px] font-semibold">
              View full repository on GitHub
            </span>
          </span>

          <ArrowUpRight
            className="ml-2 h-4 w-4 opacity-70 transition group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
            aria-hidden="true"
          />
        </a>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <a
            href="https://github.com/justine6/JustineLonglaT-Lane"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
            aria-label="GitHub stars"
          >
            <img
              alt="GitHub Repo stars"
              src="https://img.shields.io/github/stars/justine6/JustineLonglaT-Lane?style=flat"
            />
          </a>

          <a
            href="https://github.com/justine6/JustineLonglaT-Lane"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
            aria-label="GitHub forks"
          >
            <img
              alt="GitHub Repo forks"
              src="https://img.shields.io/github/forks/justine6/JustineLonglaT-Lane?style=flat"
            />
          </a>
        </div>
      </div>

      <article className="prose prose-slate max-w-none dark:prose-invert">
        <Content />
      </article>
    </main>
  );
}




