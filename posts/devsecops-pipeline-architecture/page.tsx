import Link from "next/link";

export const metadata = {
  title: "DevSecOps Pipeline Architecture — Jutellane Engineering",
  description:
    "A field-tested blueprint for building resilient, secure, observable pipelines—covering supply chain security, multi-stage orchestration, secrets governance, and runtime drift protection.",
};

export default function DevSecOpsPipelineArchitecture() {
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
            DevSecOps • CI/CD • Reliability
          </p>

          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50">
            DevSecOps Pipeline Architecture
          </h1>

          <p className="max-w-2xl text-lg text-slate-700 dark:text-slate-300">
            How I convert fragile, multi-stage pipelines into a resilient,
            predictable, and security-hardened delivery engine. From supply
            chain security to orchestration, runtime drift detection, and
            zero-downtime releases — this is my blueprint for pipelines that
            never wake you up at 2 AM.
          </p>
        </header>

        {/* Section 1 */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            1. A Pipeline Is an Architecture, Not a Script
          </h2>
          <p>
            Most pipelines fail because they’re treated as a YAML file — not an
            engineered system. My approach starts with a clear separation of
            responsibilities:
          </p>

          <ul className="mt-3 list-inside list-disc space-y-1">
            <li>Build orchestration layer (GitHub Actions, GitLab CI, Jenkins)</li>
            <li>Execution layer (container-based runners)</li>
            <li>Secrets + identity layer (Vault, AWS Secrets Manager, SSM)</li>
            <li>Artifact and provenance layer (ECR, S3, Artifact Registry)</li>
            <li>Policy enforcement layer (OPA, Checkov, Conftest)</li>
          </ul>

          <p className="mt-4">
            With this decomposition, the pipeline stops being a “script” and
            becomes a hardened system with observable, testable behavior.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            2. Secure the Supply Chain — The Real Attack Surface
          </h2>
          <p>
            Modern attacks rarely target your code; they target the build
            system. DevSecOps starts with supply chain integrity:
          </p>

          <ul className="mt-3 list-inside list-disc space-y-1">
            <li>Dependency scanning (SCA + SBOM generation)</li>
            <li>Image scanning with Trivy or Grype</li>
            <li>Signature verification with Sigstore or AWS KMS</li>
            <li>Immutable artifacts with digest pinning</li>
            <li>Preventing dependency confusion via private registries</li>
          </ul>

          <p className="mt-4">
            The goal: nothing enters production unless its origin, integrity,
            and lineage are known and verified.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            3. Secrets Belong *Outside* the Pipeline
          </h2>
          <p>
            The number one cause of breaches during deployments? Secrets inside
            pipeline configuration. A secure pipeline:
          </p>

          <ul className="mt-3 list-inside list-disc space-y-1">
            <li>Never stores secrets in YAML</li>
            <li>Never exposes secrets to logs</li>
            <li>Retrieves short-lived credentials at runtime</li>
            <li>Uses identity-based access (OIDC, IAM Roles Anywhere)</li>
          </ul>

          <p className="mt-4">
            If your pipeline has long-lived credentials, you don’t have a
            pipeline — you have a breach waiting to happen.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            4. Observability Is a First-Class Pipeline Feature
          </h2>
          <p>
            A production-grade pipeline should tell you exactly what it's doing
            at any moment. My minimum observability baseline:
          </p>

          <ul className="mt-3 list-inside list-disc space-y-1">
            <li>Structured logs with correlation IDs</li>
            <li>Metrics for build duration, success rate, queue time</li>
            <li>SLOs for delivery performance</li>
            <li>Error budgets for deployment frequency</li>
            <li>Notifications routed by severity and owner</li>
          </ul>

          <p className="mt-4">
            Pipelines must be designed like distributed systems — observable at
            every stage.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            5. Enforce Runtime Drift Protection
          </h2>
          <p>
            Deploying an artifact is meaningless if the runtime environment
            drifts from what you built. I enforce drift protection with:
          </p>

          <ul className="mt-3 list-inside list-disc space-y-1">
            <li>Image digest pinning (no :latest tags ever)</li>
            <li>Infrastructure drift detection via Terraform Cloud or Spacelift</li>
            <li>Admission controllers preventing unverified images</li>
            <li>Runtime scanning after deployment</li>
          </ul>

          <p className="mt-4">
            Drift is the silent killer of reliability — pipelines must detect
            and block it automatically.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            6. Orchestrate Multi-Stage Releases
          </h2>
          <p>
            The best pipelines support multiple release patterns depending on
            risk level:
          </p>

          <ul className="mt-3 list-inside list-disc space-y-1">
            <li>Blue/green deployments</li>
            <li>Canary releases</li>
            <li>Feature-flag-driven rollouts</li>
            <li>Shadow deployments for validation</li>
          </ul>

          <p className="mt-4">
            A mature pipeline never forces engineering into a “big bang”
            release. Instead, it gives teams multiple controlled paths to
            production.
          </p>
        </section>

        <section className="border-l-4 border-sky-500 bg-sky-50 p-4 text-sm dark:bg-sky-900/20">
          <p>
            <strong>Final Thought:</strong> A DevSecOps pipeline is not a tool
            — it is a discipline. When designed as a secure, observable,
            multi-layered architecture, it becomes the backbone of reliable
            engineering and predictable delivery.
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
