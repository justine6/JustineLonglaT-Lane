// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { PROJECTS } from "../data";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-4 py-12 text-slate-900 dark:bg-slate-950 dark:text-slate-50 sm:px-8 lg:px-16">
      <section className="mx-auto max-w-4xl space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          {project.category && (
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              {project.category}
            </span>
          )}
          {project.updated && (
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Updated: {project.updated}
            </span>
          )}
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {project.title}
        </h1>

        <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Project detail page
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
            This is the shared fallback project page for data-driven project
            entries. You can later replace any slug with a dedicated handcrafted
            page when you want a richer case study layout.
          </p>
        </div>
      </section>
    </main>
  );
}
