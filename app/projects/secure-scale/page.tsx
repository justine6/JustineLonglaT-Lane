// app/projects/secure-scale/page.tsx
import Link from "next/link";
import { SectionFadeIn } from "@/components/ui/SectionFadeIn";

export const metadata = {
  title: "Secure & Scale | Jutellane Solutions with Justine",
  description:
    "DevSecOps pipelines, automation, and compliance guardrails that let growing teams ship quickly on AWS without losing control of risk, access, or reliability.",
  openGraph: {
    title: "Secure & Scale | Jutellane Solutions",
    description:
      "Security-first cloud platforms: DevSecOps pipelines, policy-as-code, and compliance-ready guardrails for growing teams.",
    url: "https://justinelonglat-lane.com/projects/secure-scale",
    type: "article",
    images: ["/projects/secure-scale-hero.jpg"], // optional hero image
  },
};

export default function SecureScalePage() {
  return (
    <main className="page-shell">
      {/* Back link */}
      <SectionFadeIn as="div" delay={0.02} className="mb-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-xs font-medium text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-100"
        >
          <span className="text-base">←</span>
          <span>Back to projects</span>
        </Link>
      </SectionFadeIn>

      {/* Header */}
      <SectionFadeIn as="header" delay={0.06} className="space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-slate-100/90 px-3 py-1 text-[0.7rem] font-medium text-emerald-800 shadow-sm dark:border-emerald-400/60 dark:bg-slate-900/70 dark:text-emerald-100 dark:shadow-[0_0_24px_rgba(16,185,129,0.5)]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          DevSecOps · Compliance · Scale-ready Platforms
        </div>

        <h1 className="page-title">Secure &amp; Scale</h1>

        <p className="page-subtitle max-w-3xl">
          A DevSecOps and platform engineering engagement that builds security,
          compliance, and automation into the foundation — so teams can scale on
          AWS without turning every release into a risk discussion.
        </p>

        {/* Hero band */}
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-slate-950 via-sky-900 to-emerald-700 px-6 py-6 text-slate-50 shadow-lg dark:from-slate-950 dark:via-slate-900 dark:to-emerald-700">
          <p className="max-w-4xl text-sm sm:text-base">
            <span className="font-semibold">Secure &amp; Scale</span> is about
            turning security from “the team that says no” into an integrated
            part of how software ships: policy-as-code, automated checks, and
            clear guardrails that help engineers move faster with less risk.
          </p>
        </div>
      </SectionFadeIn>

      {/* Role / Tech / Highlights */}
      <SectionFadeIn as="section" delay={0.1} className="mt-8">
        <div className="grid gap-4 rounded-2xl bg-slate-900 px-6 py-5 text-slate-50 shadow-lg dark:bg-slate-900/95 sm:grid-cols-3">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Role
            </h2>
            <p className="mt-1 text-sm font-medium">
              DevSecOps Engineer · Platform Architect
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Tech Stack
            </h2>
            <p className="mt-1 text-sm">
              AWS (IAM, KMS, Security Hub, Config), CI/CD pipelines, containers,
              IaC (Terraform/CloudFormation), policy-as-code, observability
              stack
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Highlights
            </h2>
            <p className="mt-1 text-sm">
              Security baked into pipelines · Standardized environments ·
              Compliance-ready evidence · Scale without chaos
            </p>
          </div>
        </div>
      </SectionFadeIn>

      {/* Overview */}
      <SectionFadeIn as="section" delay={0.14} className="mt-10 space-y-3">
        <h2 className="section-heading">Overview</h2>
        <p className="section-body">
          As products grow, security and compliance usually show up as late
          reviews and emergency fixes. In{" "}
          <span className="font-medium">Secure &amp; Scale</span>, I work with
          teams to redesign that experience: security controls live inside the
          platform and CI/CD pipeline, not just in a PDF or ticket queue.
        </p>
        <p className="section-body">
          The result is a path where new services, environments, and regions can
          be added quickly — while identity, encryption, logging, and
          compliance evidence stay consistent by default.
        </p>
      </SectionFadeIn>

      {/* Foundation & guardrails */}
      <SectionFadeIn as="section" delay={0.18} className="mt-8 space-y-3">
        <h2 className="section-heading">Security foundation &amp; guardrails</h2>
        <p className="section-body">
          The work starts by getting the basics right, then turning them into
          reusable patterns:
        </p>
        <ul className="section-body space-y-2">
          <li>
            <span className="font-semibold">Identity &amp; access:</span> clean
            IAM roles, least-privilege policies, SSO integration, and clear
            separation between workload, platform, and human access.
          </li>
          <li>
            <span className="font-semibold">Encryption &amp; secrets:</span>{" "}
            default-at-rest encryption, KMS key strategy, and managed secrets
            (for example, Secrets Manager or parameter store) wired into apps
            and pipelines.
          </li>
          <li>
            <span className="font-semibold">Network &amp; boundaries:</span>{" "}
            VPC patterns, private subnets, controlled ingress/egress, and
            secure paths for admin access and observability tools.
          </li>
          <li>
            <span className="font-semibold">Guardrails:</span> AWS Config rules,
            Security Hub, and organization policies that flag or block risky
            changes instead of silently accepting them.
          </li>
        </ul>
      </SectionFadeIn>

      {/* DevSecOps pipelines */}
      <SectionFadeIn as="section" delay={0.22} className="mt-8 space-y-3">
        <h2 className="section-heading">DevSecOps pipeline design</h2>
        <p className="section-body">
          Security checks belong in the delivery pipeline, right next to tests
          and quality gates. Typical capabilities include:
        </p>
        <ul className="section-body space-y-2">
          <li>
            <span className="font-semibold">Static &amp; dependency scanning:</span>{" "}
            code, container images, and third-party libraries scanned on every
            change with clear, actionable reports.
          </li>
          <li>
            <span className="font-semibold">Infrastructure validation:</span>{" "}
            IaC templates and Kubernetes manifests checked for misconfigurations
            before they ever reach production.
          </li>
          <li>
            <span className="font-semibold">Policy-as-code:</span> rules around
            who can deploy where, which environments require approvals, and what
            must be true (tests, coverage, scans) before a release can proceed.
          </li>
          <li>
            <span className="font-semibold">Release visibility:</span> every
            deployment leaves a trace: who triggered it, what changed, and where
            to go for logs and metrics.
          </li>
        </ul>
      </SectionFadeIn>

      {/* Compliance & evidence */}
      <SectionFadeIn as="section" delay={0.26} className="mt-8 space-y-3">
        <h2 className="section-heading">Compliance &amp; audit readiness</h2>
        <p className="section-body">
          For teams working under frameworks like{" "}
          <span className="font-medium">SOC 2, ISO 27001, HIPAA, or PCI</span>,
          the same automation that keeps systems safe can also produce
          audit-ready evidence:
        </p>
        <ul className="section-body space-y-2">
          <li>
            <span className="font-semibold">Change history:</span> Git, CI/CD,
            and ticketing data stitched together to show who changed what, when,
            and under which approval.
          </li>
          <li>
            <span className="font-semibold">Access reviews:</span> patterns and
            reports that make quarterly / annual reviews routine instead of a
            scramble.
          </li>
          <li>
            <span className="font-semibold">Control mapping:</span> explaining
            how technical controls in AWS and the pipeline map back to
            high-level policies and compliance requirements.
          </li>
        </ul>
      </SectionFadeIn>

      {/* Impact */}
      <SectionFadeIn as="section" delay={0.3} className="mt-8 space-y-3">
        <h2 className="section-heading">Impact</h2>
        <p className="section-body">
          After a <span className="font-medium">Secure &amp; Scale</span>{" "}
          engagement, organizations typically:
        </p>
        <ul className="section-body space-y-2">
          <li>
            Ship changes through pipelines that automatically enforce security
            and compliance expectations.
          </li>
          <li>
            Have clear, reusable patterns for new services and environments,
            instead of bespoke one-off builds.
          </li>
          <li>
            See fewer security surprises in production, and faster, more
            confident incident response when issues do appear.
          </li>
          <li>
            Can talk to auditors and leadership using concrete, repeatable
            evidence instead of “best effort” explanations.
          </li>
        </ul>
        <p className="section-body">
          Most importantly, engineers feel empowered: the platform gives them a
          paved road that is both{" "}
          <span className="font-medium">safe and fast</span>, so security is no
          longer the blocker — it’s the enabler for growth.
        </p>
      </SectionFadeIn>
    </main>
  );
}
