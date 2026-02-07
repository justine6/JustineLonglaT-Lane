// app/files/page.tsx
import Link from "next/link";

export default function FilesPage() {
  return (
    <main
      id="main-content"
      className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-16 sm:px-6 lg:px-8"
    >
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          Files & Downloads
        </h1>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          One place for brochures, résumé, and other reference material from
          Justine Longla T. Consulting.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        {/* Brochure */}
        <article className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
            Consulting Brochure (PDF)
          </h2>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
            Overview of services, focus areas, and engagement models.
          </p>
          <Link
            href="/files/JustineLonglaT-Consulting-Brochure.pdf"
            target="_blank"
            className="mt-3 inline-flex text-xs font-medium text-blue-600 hover:underline dark:text-blue-300"
          >
            Download brochure
          </Link>
        </article>

        {/* Résumé */}
        <article className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
            Résumé (PDF)
          </h2>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
            Detailed experience in DevSecOps, cloud automation, and platform
            engineering.
          </p>
          <Link
            href="/files/JustineLonglaT-Resume.pdf"
            target="_blank"
            className="mt-3 inline-flex text-xs font-medium text-blue-600 hover:underline dark:text-blue-300"
          >
            View résumé
          </Link>
        </article>
      </section>
      
      <section className="files-toolkits">
        <h2>Explore the Engineering Toolkits</h2>
        <h2 className="files-subtitle">Explore the Engineering Toolkits</h2>

        <p className="files-intro">
          These resources power the automation, delivery pipelines, and DevSecOps practices
          used across Justine Longla T.’s projects and consulting engagements.
        </p>

        <p className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          🧩 Part of the JLT Engineering Platform
        </p>

        <div className="files-grid">
          <div className="file-card">
            <h3>Automation Toolkit (Docs Site)</h3>
            <p>
              Technical documentation of the automation framework used to manage blogs, docs,
              and platform delivery workflows.
            </p>
            <a
              href="https://docs.justinelonglat-lane.com/automation-toolkit.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
            >
              Open the JLT Automation API Model →
            </a>
          </div>

          <div className="file-card">
            <h3>Engineering Toolkit (Blogs Site)</h3>
            <p>
              Deep-dive documentation of the scripts, guardrails, and reproducible environment
              patterns used in real engineering workflows.
            </p>
            <a
              href="https://blogs.justinelonglat-lane.com/docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700"
            >
              Open Engineering Toolkit →
            </a>
          </div>
        </div>
      </section>

      <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
        Looking for something specific? Use the{" "}
        <Link
          href={/* this is your existing contact link */ "/contact"}
          className="font-medium text-blue-600 hover:underline dark:text-blue-300"
        >
          contact form
        </Link>{" "}
        and I’ll send it to you.
      </p>
    </main>
  );
}
