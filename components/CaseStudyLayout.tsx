"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type SectionDef = {
  id: string;
  label: string;
};

type CaseStudyLayoutProps = {
  backHref?: string;
  backLabel?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  hero?: React.ReactNode;
  sections: SectionDef[];
  children: React.ReactNode;
};

export default function CaseStudyLayout({
  backHref = "/projects",
  backLabel = "Back to projects",
  eyebrow,
  title,
  subtitle,
  hero,
  sections,
  children,
}: CaseStudyLayoutProps) {
  const [activeId, setActiveId] = useState<string | null>(
    sections[0]?.id ?? null
  );

  useEffect(() => {
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop
          );

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0.25,
      }
    );

    const elements: HTMLElement[] = [];
    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) {
        elements.push(el);
        observer.observe(el);
      }
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [sections]);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 dark:bg-slate-950 dark:text-slate-50 sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-6xl gap-10">
        {/* LEFT RAIL: back link + sections */}
        <aside className="hidden w-52 shrink-0 lg:block">
          <div className="sticky top-24 space-y-6">
            <Link
              href={backHref}
              className="inline-flex items-center text-xs font-medium text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-100"
            >
              <span className="text-base leading-none">←</span>
              <span className="ml-1">{backLabel}</span>
            </Link>

            {sections.length > 0 && (
              <div>
                <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Sections
                </p>
                <ul className="space-y-1.5">
                  {sections.map((section) => {
                    const isActive = section.id === activeId;
                    return (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className={`block rounded-md px-2 py-1 text-xs transition ${
                            isActive
                              ? "bg-slate-900 text-emerald-300 shadow-sm shadow-emerald-500/30"
                              : "text-slate-400 hover:bg-slate-900/40 hover:text-slate-100"
                          }`}
                        >
                          {section.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </aside>

        {/* MAIN COLUMN */}
        <div className="flex-1 space-y-8">
          {/* Breadcrumb for mobile */}
          <div className="mb-3 lg:hidden">
            <Link
              href={backHref}
              className="inline-flex items-center text-xs font-medium text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-100"
            >
              <span className="text-base leading-none">←</span>
              <span className="ml-1">{backLabel}</span>
            </Link>
          </div>

          {/* Heading */}
          <header className="space-y-4">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                {eyebrow}
              </p>
            )}

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h1>

            {subtitle && (
              <p className="max-w-3xl text-sm text-slate-600 dark:text-slate-200">
                {subtitle}
              </p>
            )}

            {hero && <div className="mt-2 space-y-4">{hero}</div>}
          </header>

          {/* Body */}
          <article className="space-y-10">{children}</article>
        </div>
      </div>
    </main>
  );
}
