// app/projects/cicd-automation-bot/page.tsx
import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { SectionFadeIn } from "@/components/ui/SectionFadeIn";

export const metadata: Metadata = {
  title: "CI/CD Automation Bot | Justine Longla T.",
  description:
    "A CI/CD companion bot that posts rich deployment notifications into Microsoft Teams with commit, actor, environment, and links to deeper logs.",
  openGraph: {
    title: "CI/CD Automation Bot | Justine Longla T.",
    description:
      "Case study: a CI/CD automation bot that turns raw pipeline events into readable, actionable notifications in Microsoft Teams.",
    type: "article",
    url: "https://justinelonglat-lane.com/projects/cicd-automation-bot",
  },
};

export default function CicdAutomationBotPage() {
  return (
    <CaseStudyLayout
      backHref="/projects"
      backLabel="Back to projects"
      eyebrow="CI/CD · ChatOps · Deployment Insights"
      title="CI/CD Automation Bot"
      subtitle="A pipeline-aware bot that posts rich deployment notifications into Microsoft Teams — so every release is visible, auditable, and easy to follow without digging through raw logs."
      sections={[
        { id: "overview", label: "Overview" },
        { id: "architecture", label: "Architecture" },
        { id: "sample-payload", label: "Sample payload" },
        { id: "impact", label: "Impact" },
      ]}
      hero={
        <>
          {/* Hero pill */}
          <SectionFadeIn as="div" delay={0.06}>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/60 bg-slate-100/90 px-3 py-1 text-[0.7rem] font-medium text-blue-900 shadow-sm dark:border-blue-400/70 dark:bg-slate-900/70 dark:text-blue-50 dark:shadow-[0_0_24px_rgba(37,99,235,0.55)]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              CI/CD · ChatOps · Deployment Insights
            </div>
          </SectionFadeIn>

          {/* Gradient hero card */}
          <SectionFadeIn as="div" delay={0.08}>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-700 px-6 py-8 text-slate-50 shadow-lg dark:border-slate-800/70 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-sky-800">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-300">
                Deployment signal, not noise
              </p>
              <p className="mt-3 max-w-2xl text-sm text-slate-100">
                When a release finishes, the bot posts a single, readable card
                into Teams with the app, environment, status, commit SHA,
                actor, and links to dashboards. No more “who just deployed
                what?” in chat.
              </p>
            </div>
          </SectionFadeIn>

          {/* Role / Stack / Highlights band */}
          <SectionFadeIn as="section" delay={0.1} className="mt-6">
            <div className="grid gap-4 rounded-2xl bg-slate-900 px-6 py-5 text-slate-50 shadow-lg dark:bg-slate-900/95 sm:grid-cols-3">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                  Role
                </h2>
                <p className="mt-1 text-sm font-medium">
                  DevOps Engineer · CI/CD Automation
                </p>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                  Tech Stack
                </h2>
                <p className="mt-1 text-sm">
                  GitHub Actions, PowerShell, Node.js, Teams Webhooks / Bot
                  Framework
                </p>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                  Highlights
                </h2>
                <p className="mt-1 text-sm">
                  Deployment cards in Teams · Commit &amp; actor visibility ·
                  Production-ready, repeatable pattern
                </p>
              </div>
            </div>
          </SectionFadeIn>
        </>
      }
    >
      {/* Overview */}
      <SectionFadeIn
        as="section"
        delay={0.14}
        id="overview"
        className="mt-4 scroll-mt-28 space-y-3"
      >
        <h2 className="section-heading">Overview</h2>
        <p className="section-body">
          This CI/CD automation bot sits beside the deployment pipeline and
          turns build logs into something human: a short, structured summary
          that appears inside Microsoft Teams whenever a release completes.
          Instead of chasing logs or refreshing dashboards, the team gets one
          clear update in the channel where they already collaborate.
        </p>
        <p className="section-body">
          The goal is simple: reduce the friction between “a deployment
          happened” and “everyone understands what just changed.” The bot
          captures the app, environment, status, commit SHA, and actor, and
          attaches deep links to observability tools or release notes when
          available.
        </p>
      </SectionFadeIn>

      {/* Architecture */}
      <SectionFadeIn
        as="section"
        delay={0.18}
        id="architecture"
        className="mt-8 scroll-mt-28 space-y-3"
      >
        <h2 className="section-heading">Architecture</h2>
        <p className="section-body">
          The bot is designed as a thin integration layer around an existing
          CI/CD system:
        </p>
        <ul className="section-body space-y-2">
          <li>
            <span className="font-semibold">CI pipeline step</span>: A final
            step in GitHub Actions (or another CI tool) collects metadata about
            the deployment — app name, environment, status, commit, and actor.
          </li>
          <li>
            <span className="font-semibold">Notification endpoint</span>: A
            small Node.js / PowerShell service receives this payload and
            validates that it came from a trusted pipeline run.
          </li>
          <li>
            <span className="font-semibold">Message formatter</span>: The
            service builds a rich Teams message (card layout) with clear labels,
            emojis for status, and deep links to logs or dashboards.
          </li>
          <li>
            <span className="font-semibold">Teams channel</span>: The final
            message is posted into a shared channel where SREs, developers, and
            stakeholders can see deployments in real time.
          </li>
        </ul>
      </SectionFadeIn>

      {/* Sample payload */}
      <SectionFadeIn
        as="section"
        delay={0.22}
        id="sample-payload"
        className="mt-10 scroll-mt-28 space-y-3"
      >
        <h2 className="section-heading">Sample payload from the pipeline</h2>
        <p className="section-body">
          In many environments, the bot can be triggered with a simple curl
          from the CI job. Here is a simplified example that shows how the
          deployment metadata is sent:
        </p>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950 text-slate-50 shadow-md dark:border-slate-800">
          <div className="border-b border-slate-800 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-300">
            Example CI → bot payload
          </div>

          <pre className="overflow-x-auto p-4 text-xs text-slate-100">
            <code>
              {String.raw`curl -X POST $CI_BOT_URL/deploy-notify \
            -H "Content-Type: application/json" \
            -d '{
              "app": "customer-portal",
              "env": "production",
              "status": "success",
              "commit": "\${GITHUB_SHA}",
              "actor": "\${GITHUB_ACTOR}"
            }'`}
            </code>
          </pre>

        </div>

        <p className="section-body">
          On the other side, the bot translates this JSON into a clean card:
          <span className="italic">
            {" "}
            “customer-portal deployed to production”
          </span>
          , with commit, actor, and links to logs. The same pattern works for
          staging, hotfix branches, and multi-service environments.
        </p>
      </SectionFadeIn>

      {/* Impact */}
      <SectionFadeIn
        as="section"
        delay={0.26}
        id="impact"
        className="mt-10 scroll-mt-28 space-y-3"
      >
        <h2 className="section-heading">Impact</h2>
        <p className="section-body">
          Before the bot, deployments were visible only to whoever was staring
          at the CI console. After the bot, releases became team events:
          product owners, QA, and support could all see what shipped and when,
          without learning a new tool.
        </p>
        <p className="section-body">
          This pattern also sets up a foundation for future upgrades — adding
          roll-back buttons, linking to incident tickets, or correlating
          deployments with alerts and performance changes.
        </p>
      </SectionFadeIn>
    </CaseStudyLayout>
  );
}
