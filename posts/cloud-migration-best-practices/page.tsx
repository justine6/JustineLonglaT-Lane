import Link from "next/link";

export const metadata = {
  title: "Cloud Migration Best Practices — Jutellane Engineering",
  description:
    "A practical field guide to cloud migration: landing zones, IAM guardrails, VPC baselines, cutover strategies, rollback plans, and post-migration hardening.",
};

export default function CloudMigrationBestPractices() {
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
            AWS • Migration • Architecture
          </p>

          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50">
            Cloud Migration Best Practices
          </h1>

          <p className="max-w-2xl text-lg text-slate-700 dark:text-slate-300">
            A field-tested blueprint for moving workloads to AWS without
            weekend fire drills. From landing zones to IAM guardrails, cutovers,
            observability, and rollback safety nets — this is how I execute
            migrations with confidence.
          </p>
        </header>

        {/* Section 1 */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            1. Start With a Proper Landing Zone
          </h2>
          <p>
            A cloud migration succeeds or fails based on what you do before the
            first workload ever touches AWS. The landing zone is your foundation:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1">
            <li>Multi-account structure (prod, staging, sandbox)</li>
            <li>Organization-level guardrails with SCPs</li>
            <li>Centralized identity (IAM Identity Center or Okta/Azure AD)</li>
            <li>Baseline networking: VPC, subnets, routing, NAT, TGW</li>
            <li>Mandatory logging: CloudTrail, Config, GuardDuty</li>
          </ul>

          <p className="mt-4 italic">
            “If your landing zone is wrong, you’ll spend the next three years
            paying compound interest.” — a lesson learned the hard way.{" "}
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            2. Migrate the Data Before You Migrate the Application
          </h2>
          <p>
            Data gravity controls everything. If your data is slow to move, the
            app becomes slow to cut over. I structure migrations in this order:
          </p>

          <ol className="mt-3 list-inside list-decimal space-y-1">
            <li>Warm replication / continuous sync</li>
            <li>Data validation checks</li>
            <li>Shadow traffic or read-only mode tests</li>
            <li>Final cutover with a controlled freeze window</li>
          </ol>

          <p className="mt-4">
            This reduces downtime from hours to minutes — and eliminates the
            guesswork of “is the data actually safe?” during cutover.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            3. Modernize During Migration — But Only What’s Safe
          </h2>
          <p>
            Migration is a great time to modernize, but not a great time to
            rewrite your entire platform. I categorize modernization work into:
          </p>

          <ul className="mt-3 list-inside list-disc space-y-1">
            <li>
              <strong>Safe to modernize:</strong> CI/CD, IaC, logging, IAM,
              container build pipelines.
            </li>
            <li>
              <strong>Dangerous to modernize:</strong> core business logic,
              brittle monolith refactors, database schema changes.
            </li>
          </ul>

          <p className="mt-4">
            The migration phase should stabilize your system — not destabilize
            it. Modernization should be incremental and automated.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            4. Cutovers Should Be Boring — Not Heroic
          </h2>
          <p>
            A good migration feels uneventful. No adrenaline. No “everyone jump
            on a call.” No midnight fire drills. I design cutovers with:
          </p>

          <ul className="mt-3 list-inside list-disc space-y-1">
            <li>Automatic health checks</li>
            <li>Blue/green release pattern</li>
            <li>Rollback switch that is tested beforehand</li>
            <li>Feature flags isolating risky components</li>
            <li>Pre-cutover chaos tests (network drops, latency spikes)</li>
          </ul>

          <p className="mt-4">
            When the cutover is treated like a simple deployment, the migration
            moves from “scary” to “repeatable engineering.”
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            5. Harden Before You Celebrate
          </h2>
          <p>
            Many teams think the migration ends when the app runs in AWS. Not
            true — that’s just the beginning. Post-migration hardening includes:
          </p>

          <ul className="mt-3 list-inside list-disc space-y-1">
            <li>
              Closing temporary firewall rules and IAM permissions used during
              migration
            </li>
            <li>Enforcing encryption at rest + in transit</li>
            <li>
              Creating operational dashboards: latency, errors, saturation,
              scaling
            </li>
            <li>Enabling backups, snapshots, and disaster recovery</li>
            <li>Configuring cost monitoring and anomaly alerts</li>
          </ul>

          <p className="mt-4">
            A migration is successful only when the new environment is more
            secure, more observable, and more stable than the old one.
          </p>
        </section>

        <section className="border-l-4 border-sky-500 bg-sky-50 p-4 text-sm dark:bg-sky-900/20">
          <p>
            <strong>Final Thought:</strong> Cloud migration is not a lift-and-shift.
            It is an engineering transformation. When designed with clean
            architecture, guardrails, and observability, the cloud becomes not
            just a new home — but a strategic advantage.
          </p>
        </section>

        {/* CTA */}
        <footer className="pt-6">
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
