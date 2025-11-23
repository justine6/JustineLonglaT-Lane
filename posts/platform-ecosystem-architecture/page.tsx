import Link from "next/link";

export const metadata = {
  title: "Platform Ecosystem Architecture — Multi-Site Engineering",
  description:
    "How a single personal website evolved into a resilient, multi-site, multi-environment engineering platform with clean DNS, CI/CD discipline, content pipelines, and isolation between marketing, docs, blog, projects, and foundation properties.",
};

export default function PlatformEcosystemArchitecture() {
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-slate-800 dark:bg-slate-950 dark:text-slate-200">
      <article className="mx-auto max-w-4xl space-y-10 leading-relaxed">
        {/* Breadcrumb */}
        <div className="text-sm text-slate-500 dark:text-slate-400">
          <Link href="/posts" className="hover:underline">
            ← Back to Articles
          </Link>
        </div>

        {/* Header */}
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            Platform Engineering • Multi-Site Architecture
          </p>

          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50">
            Platform Architecture & Multi-Site Deployment
          </h1>

          <p className="max-w-2xl text-lg text-slate-700 dark:text-slate-300">
            How the JustineLonglaT-Lane engineering ecosystem evolved from a
            single static website into a resilient, observable, multi-site
            platform powering marketing, documentation, blogs, projects, and
            the Nouvo Ayiti 2075 foundation — all on disciplined CI/CD,
            clean DNS, and environment isolation.
          </p>
        </header>

        {/* Section 1 */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            1. A Platform Is Not a Website — It’s an Ecosystem
          </h2>
          <p>
            The moment you operate more than one domain, more than one content
            workflow, or more than one audience, you’re not running a website —
            you’re running a platform. That shift forces architectural maturity:
          </p>

          <ul className="mt-3 list-inside list-disc space-y-1">
            <li>DNS hierarchy and delegation</li>
            <li>Origin separation (marketing vs. docs vs. blog)</li>
            <li>CI/CD that understands preview vs. production</li>
            <li>Content pipelines that don’t leak between sites</li>
            <li>Centralized security while keeping deployments isolated</li>
          </ul>

          <p className="mt-4">
            Most personal websites collapse as they grow. This platform grew
            stronger — because every system was treated as a first-class
            component in a unified ecosystem.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            2. Clean DNS Is the Foundation of a Healthy Platform
          </h2>
          <p>
            Before touching CI/CD or infrastructure, the platform needed a
            deterministic DNS model. I established a clear subdomain contract:
          </p>

          <ul className="mt-3 list-inside list-disc space-y-1">
            <li>
              <strong>jutellane.com</strong> — Marketing & business identity
            </li>
            <li>
              <strong>docs.jutellane.com</strong> — Technical documentation
            </li>
            <li>
              <strong>blog.jutellane.com</strong> — Articles & knowledge sharing
            </li>
            <li>
              <strong>projects.jutellane.com</strong> — Engineering case studies
            </li>
            <li>
              <strong>foundation.nouvoayiti2075.com</strong> — Community
              initiative
            </li>
          </ul>

          <p className="mt-4">
            Each subdomain resolves to an independent deployment target.
            Simplicity is a DNS superpower — and this structure prevents
            cross-site bleed, SSL confusion, and routing chaos.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            3. Single Source of Truth — Multiple Sites
          </h2>

          <p>
            In this platform, every site has its own repository, pipeline, and
            deployment artifact — but they share carefully selected
            cross-cutting assets:
          </p>

          <ul className="mt-3 list-inside list-disc space-y-1">
            <li>Brand identity (logo, colors, typography)</li>
            <li>Shared components when appropriate</li>
            <li>Global link contracts</li>
            <li>Unified analytics</li>
            <li>Consistent accessibility baseline</li>
          </ul>

          <p className="mt-4">
            The key is balance: shared where it improves quality, isolated
            where it protects autonomy.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            4. CI/CD With Environment Isolation
          </h2>
          <p>
            The CI/CD pipelines enforce strict separation between:
          </p>

          <ul className="mt-3 list-inside list-disc space-y-1">
            <li>
              <strong>Preview</strong> — ephemeral site snapshots on pull
              requests
            </li>
            <li>
              <strong>Development</strong> — permanent sandbox environments
            </li>
            <li>
              <strong>Production</strong> — audited, tagged, and validated
              releases
            </li>
          </ul>

          <p className="mt-4">
            This guarantee makes the platform safe to iterate on — dangerous
            changes never touch production by accident.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            5. Email Infrastructure — Resend + Blob Storage
          </h2>
          <p>
            Contact forms across the ecosystem rely on a shared Resend service,
            but each site has:
          </p>

          <ul className="mt-3 list-inside list-disc space-y-1">
            <li>Its own API routes</li>
            <li>Its own throttling + rate limiting</li>
            <li>Separate template definitions</li>
            <li>Azure Blob Storage for logging and backups</li>
          </ul>

          <p className="mt-4">
            Centralized capability, decentralized ownership — the platform core
            provides the foundation, but every site controls its experience.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            6. Observability — Even for Static Sites
          </h2>
          <p>
            Traditional “static” sites still need production observability.
            Every site in this ecosystem exports:
          </p>

          <ul className="mt-3 list-inside list-disc space-y-1">
            <li>Edge logs</li>
            <li>Performance metrics (LCP, CLS, FID)</li>
            <li>API route traces</li>
            <li>Deployment lineage (git SHA → environment)</li>
          </ul>

          <p className="mt-4">
            This transforms a collection of sites into an observable platform.
          </p>
        </section>

        <section className="border-l-4 border-sky-500 bg-sky-50 p-4 text-sm dark:bg-sky-900/20">
          <p>
            <strong>Final Thought:</strong> A platform grows in complexity only
            when its architecture is an afterthought. Here, each site, domain,
            and pipeline intentionally fits into a unified ecosystem designed
            for clarity, autonomy, and long-term evolution.
          </p>
        </section>

        {/* CTA */}
        <footer className="pt-6 pb-20">
          <Link
            href="/intro-call"
            className="inline-flex rounded-xl bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700"
          >
            Schedule an Intro Call
          </Link>
        </footer>
      </article>
    </main>
  );
}
