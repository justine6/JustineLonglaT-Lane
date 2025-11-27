import Link from "next/link";
import { SectionFadeIn } from "@/components/ui/SectionFadeIn";

export const metadata = {
  title: "Secure & Scale | Justine Longla T.",
  description:
    "Hardening a growing cloud platform with identity, guardrails, and automation that made security a partner instead of a blocker.",
  openGraph: {
    title: "Secure & Scale | Justine Longla T.",
    description:
      "Case study: adding practical security controls and scaling patterns to a fast-moving engineering organisation.",
    type: "article",
    url: "https://justinelonglat-lane.com/projects/secure-and-scale",
  },
};

export default function SecureAndScalePage() {
  return (
    <main className="page-shell">
      <SectionFadeIn as="div" delay={0.02} className="mb-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-xs font-medium text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-100"
        >
          <span className="text-base">←</span>
          <span>Back to projects</span>
        </Link>
      </SectionFadeIn>

      <SectionFadeIn as="header" delay={0.06} className="space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/60 bg-slate-100/90 px-3 py-1 text-[0.7rem] font-medium text-lime-900 shadow-sm dark:border-lime-400/70 dark:bg-slate-900/70 dark:text-lime-50 dark:shadow-[0_0_24px_rgba(163,230,53,0.55)]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          DevSecOps · Guardrails · Multi-Account
        </div>

        <h1 className="page-title">Secure &amp; Scale</h1>

        <p className="page-subtitle max-w-3xl">
          A DevSecOps transformation project implementing cloud security
          automation, scalable pipelines, and guardrails that engineers could
          actually live with.
        </p>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-lime-600 px-6 py-8 text-slate-50 shadow-lg dark:border-slate-800/70 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-lime-700">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-lime-200">
            Security without slowing down
          </p>
          <p className="mt-3 max-w-2xl text-sm text-slate-100">
            Instead of bolting on scans at the end, we baked controls into
            accounts, pipelines, and everyday workflows — so secure paths became
            the easiest paths.
          </p>
        </div>
      </SectionFadeIn>

      {/* Role / Stack / Highlights */}
      <SectionFadeIn as="section" delay={0.1} className="mt-8">
        <div className="grid gap-4 rounded-2xl bg-slate-900 px-6 py-5 text-slate-50 shadow-lg dark:bg-slate-900/95 sm:grid-cols-3">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Role
            </h2>
            <p className="mt-1 text-sm font-medium">
              DevSecOps Architect · Cloud Security Engineer
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Tech Stack
            </h2>
            <p className="mt-1 text-sm">
              AWS Organizations, IAM, SCPs, Config, Security Hub, CI/CD
              pipelines, policy-as-code
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Highlights
            </h2>
            <p className="mt-1 text-sm">
              Baseline guardrails · Automated checks in pipelines · Clear
              onboarding for new accounts and apps
            </p>
          </div>
        </div>
      </SectionFadeIn>

      {/* Overview */}
      <SectionFadeIn as="section" delay={0.14} className="mt-10 space-y-3">
        <h2 className="section-heading">Overview</h2>
        <p className="section-body">
          As the platform grew, security reviews were happening too late —
          after design, after build, sometimes after production incidents.
          Everyone agreed this wasn’t sustainable; nobody wanted a heavyweight
          process.
        </p>
        <p className="section-body">
          The answer was a{" "}
          <span className="font-semibold">set of simple guardrails</span>{" "}
          engineers could rely on, plus automation that made doing the right
          thing the path of least resistance.
        </p>
      </SectionFadeIn>

      {/* Architecture */}
      <SectionFadeIn as="section" delay={0.18} className="mt-8 space-y-3">
        <h2 className="section-heading">Guardrail architecture</h2>
        <p className="section-body">
          We focused on a few foundational areas:
        </p>
        <ul className="section-body space-y-2">
          <li>
            <span className="font-semibold">Identity &amp; access</span>:
            centralised SSO, least-privilege roles, and removal of long-lived
            keys from pipelines.
          </li>
          <li>
            <span className="font-semibold">Baseline controls</span>:
            organisation-level SCPs and Config rules to block dangerous changes
            (wide-open S3, public RDS, etc.).
          </li>
          <li>
            <span className="font-semibold">Secure pipelines</span>:
            standardised CI/CD templates with built-in image scanning, IaC
            validation, and environment-specific policies.
          </li>
        </ul>
      </SectionFadeIn>

      {/* Sample policy-as-code snippet */}
      <SectionFadeIn as="section" delay={0.22} className="mt-10 space-y-3">
        <h2 className="section-heading">Sample policy-as-code rule</h2>
        <p className="section-body">
          Here is a conceptual example of the kind of rule we enforced in IaC
          reviews:
        </p>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950 text-slate-50 shadow-md dark:border-slate-800">
          <div className="border-b border-slate-800 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-300">
            Example rule (pseudocode)
          </div>
          <pre className="overflow-x-auto p-4 text-xs text-slate-100">
            <code>
{String.raw`deny if aws_s3_bucket.public_read == true
  and resource.environment in ["prod", "stage"]`}
            </code>
          </pre>
        </div>
      </SectionFadeIn>

      {/* Impact */}
      <SectionFadeIn as="section" delay={0.26} className="mt-10 space-y-3">
        <h2 className="section-heading">Impact</h2>
        <p className="section-body">
          High-risk misconfigurations dropped, and new projects launched with a
          consistent security baseline from day one. Engineers had clear
          patterns to follow, and security gained{" "}
          <span className="font-semibold">visibility and leverage</span> instead
          of living in spreadsheet reviews.
        </p>
      </SectionFadeIn>
    </main>
  );
}
