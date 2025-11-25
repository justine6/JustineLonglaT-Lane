import Link from "next/link";
import { SectionFadeIn } from "@/components/ui/SectionFadeIn";

export const metadata = {
  title: "Automation Rescue: Fixing Flaky Lambdas | Justine Longla T.",
  description:
    "How I debugged failing serverless automations, fixed Lambda-style issues, and hardened the CI/CD path so deployments became boring again.",
  openGraph: {
    title: "Automation Rescue: Fixing Flaky Lambdas",
    description:
      "A practical story of tracing failing automations, tuning resources, and adding observability around serverless workloads.",
    url: "https://justinelonglat-lane.com/projects/project-a",
    type: "article",
  },
};

export default function ProjectAPage() {
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
          Serverless · CI/CD · Observability
        </div>

        <h1 className="page-title">Automation Rescue: Fixing Flaky Lambdas</h1>

        <p className="page-subtitle max-w-3xl">
          A recent incident where background automations started failing
          intermittently. This case study walks through how I traced the
          behavior into Lambda-style functions, fixed the root causes, and left
          the pipeline more observable and reliable than before.
        </p>
      </SectionFadeIn>

      {/* Context */}
      <SectionFadeIn as="section" delay={0.1} className="mt-8 space-y-3">
        <h2 className="section-heading">Context</h2>
        <p className="section-body">
          The application relied on serverless functions (Lambda-style
          handlers) to perform automation tasks — things like sending
          notifications, processing payloads from webhooks, and updating
          downstream systems after a deployment. Under normal load everything
          looked fine, but during real-world traffic the automations became{" "}
          <span className="font-medium">flaky</span>.
        </p>
        <p className="section-body">
          Symptoms included stuck executions, retries, and functions that would
          pass locally but fail once deployed behind the platform&apos;s
          Lambda/runtime layer.
        </p>
      </SectionFadeIn>

      {/* Symptoms & investigation */}
      <SectionFadeIn as="section" delay={0.14} className="mt-8 space-y-3">
        <h2 className="section-heading">Symptoms &amp; investigation</h2>
        <ul className="section-body space-y-2">
          <li>
            <span className="font-semibold">Intermittent failures:</span>{" "}
            requests would sometimes succeed and sometimes time out with no
            clear pattern.
          </li>
          <li>
            <span className="font-semibold">Limited visibility:</span> default
            logs were not enough to see memory usage, cold starts, or where the
            handler was spending time.
          </li>
          <li>
            <span className="font-semibold">Different behavior locally vs. in
            the cloud:</span> the same code was stable in local dev but
            unstable in the deployed Lambda-style environment.
          </li>
        </ul>
        <p className="section-body">
          I started by adding structured logging around the function boundaries:
          entry/exit logs, correlation IDs, and timing metrics. From there, I
          could see patterns in duration, memory usage, and retry behavior
          across executions.
        </p>
      </SectionFadeIn>

      {/* Fixes */}
      <SectionFadeIn as="section" delay={0.18} className="mt-8 space-y-3">
        <h2 className="section-heading">What I changed</h2>
        <ul className="section-body space-y-2">
          <li>
            <span className="font-semibold">Tuned resource limits:</span>{" "}
            adjusted memory and timeout settings so the functions had enough
            headroom under real workloads, not just test cases.
          </li>
          <li>
            <span className="font-semibold">Idempotent handlers:</span> hardened
            the automation logic so retries would not double-process the same
            event and cause noisy side effects.
          </li>
          <li>
            <span className="font-semibold">Retry &amp; DLQ strategy:</span>{" "}
            set clear rules for when to retry, when to fail fast, and where to
            send poison messages so they wouldn&apos;t block the rest of the
            queue.
          </li>
          <li>
            <span className="font-semibold">CI/CD checks:</span> added
            lightweight smoke tests that hit the deployed function endpoint
            after a release to confirm that the path, IAM permissions, and
            environment variables were wired correctly.
          </li>
        </ul>
      </SectionFadeIn>

      {/* Impact */}
      <SectionFadeIn as="section" delay={0.22} className="mt-8 space-y-3">
        <h2 className="section-heading">Impact</h2>
        <ul className="section-body space-y-2">
          <li>
            Automation success rate increased and stayed stable across different
            traffic patterns.
          </li>
          <li>
            Incidents became easier to explain: logs and metrics show exactly
            what each execution did and why it failed when it does.
          </li>
          <li>
            Future Lambda-style functions can reuse the same patterns for
            logging, timeouts, and retries instead of starting from scratch.
          </li>
        </ul>
        <p className="section-body">
          This project is a good example of how I approach problems:{" "}
          <span className="font-medium">
            instrument first, then tune, then standardize the pattern
          </span>{" "}
          so future work benefits from the incident.
        </p>
      </SectionFadeIn>
    </main>
  );
}
