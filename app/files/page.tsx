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
          Publications & Downloads
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 dark:text-slate-300">
          One place for brochures, résumé, whitepapers, and platform reference material from Justine Longla T. Consulting.
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
            href="https://consulting.justinelonglat-lane.com/files/JLT-Consulting-Brochure.pdf"
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
            Detailed experience in DevSecOps, cloud automation, and platform engineering.
          </p>

          <a
            href="https://consulting.justinelonglat-lane.com/files/justine-longla-resume-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex text-xs font-medium text-blue-600 hover:underline dark:text-blue-300"
          >
            View résumé
          </a>
        </article>
        {/* Platform Engineering Publication */}
        <article className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
            Platform Engineering Publication — Operating Models (PDF)
          </h2>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
            “Platforms Don’t Scale With Tools — They Scale With Operating Models.”
            A short publication on platform engineering, operating models, and systems thinking.
          </p>
          <a
            href="https://consulting.justinelonglat-lane.com/files/platforms-dont-scale-with-tools-they-scale-with-operating-models.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex text-xs font-medium text-blue-600 hover:underline dark:text-blue-300"
          >
            Download PDF
          </a>
        </article>
        {/* Platform Operating Model Whitepaper */}
        <article className="rounded-2xl bborder border-emerald-200 dark:border-emerald-800 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70">
          
          <span className="inline-block mb-2 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
            Whitepaper
          </span>

          <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
            Governed Multi-Plane Platform Operating Model (PDF)
          </h2>

          <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
            A platform whitepaper describing the governed multi-plane model used to structure identity,
            control, knowledge, execution, operations, proof, and narrative across the ecosystem.
          </p>

          <a
            href="/files/governed-multi-plane-operating-model.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex text-xs font-medium text-blue-600 hover:underline dark:text-blue-300"
          >
            Download whitepaper
          </a>

        </article>
          <div className="mt-10 mb-2 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-00 dark:text-slate-400">
              Engineering Platform Resources
            </p>
          </div>

          <hr className="mb-8 border-slate-200 dark:border-slate-700" />
        </section>

        <section className="files-toolkits">
          <h2 className="files-subtitle">Explore the Engineering Toolkits & Platform Resources</h2>

          <p className="files-intro">
            These resources document the automation systems, platform workflows, and engineering patterns used to build, operate, and maintain the JLT-Lane platform ecosystem.
          </p>

          <p className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            🧩 Part of the JLT Engineering Platform
          </p>

          <div className="files-grid">
            <div className="file-card">
              <h3>Automation Toolkit (Docs Site)</h3>
              <p>
                Platform documentation covering automation guardrails, deployment workflows,
                platform artifacts, and operational procedures used across the ecosystem.
              </p>
              <a
                href="https://docs.justinelonglat-lane.com/automation-toolkit.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
              >
                Open Automation Toolkit →
              </a>
            </div>

            <div className="file-card">
              <h3>Publishing & Engineering Replay (Blogs Site)</h3>
              <p>
                Deep-dive documentation of scripts, guardrails, and reproducible workflow patterns
                used in real engineering, publishing, and platform operations.
              </p>
              <a
                href="https://blogs.justinelonglat-lane.com/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700"
              >
                Open Publishing Replay →
              </a>
            </div>
          </div>
        </section>
        <section className="files-artifacts">
        <h2 className="files-subtitle">Platform Architecture Artifacts</h2>

        <p className="files-intro">
          These architecture artifacts document the structure, control model, and operational flow
          of the JLT-Lane platform. They are provided as reference material for platform engineering,
          DevSecOps, and cloud architecture discussions.
        </p>

        <div className="files-grid">
          <div className="file-card mb-6">
            <h3>Platform Control Flow (PDF)</h3>
            <p>
              Diagram showing how identity, access control, resource groups, APIs, observability,
              and runbooks connect across the platform lifecycle.
            </p>
            <a
              href="/files/platform-control-flow.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800"
            >
              Download Diagram →
            </a>
          </div>

          <div className="file-card mb-6">
            <h3>Access Control Architecture (PDF)</h3>
            <p>
              Entitlement-based access control model showing roles, subscriptions,
              resource groups, and authorization flow across the platform.
            </p>
            <a
              href="/files/access-control-architecture.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800"
            >
              Download Diagram →
            </a>
          </div>

          <div className="file-card mb-6">
            <h3>Platform Request Lifecycle (PDF)</h3>
            <p>
              Request lifecycle diagram showing how requests move through identity,
              control plane, execution plane, observability, and operations.
            </p>
            <a
              href="/files/platform-request-lifecycle.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800"
            >
              Download Diagram →
            </a>
          </div>

          <div className="file-card mb-6">
            <h3>Deployment Guardrails (PDF)</h3>
            <p>
              Guardrails and automation flow used to keep deployments safe,
              reproducible, and observable across environments.
            </p>
            <a
              href="/files/deployment-guardrails.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800"
            >
              Download Diagram →
            </a>
          </div>
        </div>
      </section>

      <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
        Looking for something specific? Use the{" "}
        <Link
          href="/contact"
          className="font-medium text-blue-600 hover:underline dark:text-blue-300"
        >
          contact form
        </Link>{" "}
        and I’ll send it to you.
      </p>
    </main>
  );
}
