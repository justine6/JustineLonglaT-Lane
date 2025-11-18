// app/projects/teams-proactive-bot/page.tsx
import Link from "next/link";
import Image from "next/image";
import { SectionFadeIn } from "@/components/ui/SectionFadeIn";

export const metadata = {
  title: "Teams Proactive Messaging Bot | Jutellane Solutions with Justine",
  description:
    "A real-world automation bot that triggers proactive notifications into Microsoft Teams — directly from the command line — using Teams Toolkit, Bot Framework, and Azure Identity.",
  openGraph: {
    title: "Teams Proactive Messaging Bot | Jutellane Solutions",
    description:
      "Case study: building a proactive Teams bot triggered from the CLI for DevOps automation and real-time collaboration.",
    images: ["/favicon.ico"],
    type: "article",
    url: "https://jutellane.com/projects/teams-proactive-bot",
  },
};

export default function TeamsProactiveBotPage() {
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

      {/* Hero */}
      <SectionFadeIn as="header" delay={0.06} className="space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-slate-100/90 px-3 py-1 text-[0.7rem] font-medium text-emerald-800 shadow-sm dark:border-emerald-400/60 dark:bg-slate-900/70 dark:text-emerald-100 dark:shadow-[0_0_24px_rgba(16,185,129,0.5)]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Teams Toolkit · Proactive Bots · DevOps Automation
        </div>

        <h1 className="page-title">Teams Proactive Messaging Bot</h1>

        <p className="page-subtitle max-w-3xl">
          A real-world automation bot that triggers proactive notifications into
          Microsoft Teams — directly from the command line — using Teams
          Toolkit, Bot Framework, and Azure Identity.
        </p>

          {/* Temporarily disabled hero image
          
          <div className="overflow-hidden rounded-2xl border ...">
            <Image
              src="/favicon.ico"
              alt="Teams Proactive Messaging Bot presentation screenshot"
              width={1400}
              height={800}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          */}

      </SectionFadeIn>

      {/* Role / Tech stack / Highlights strip */}
      <SectionFadeIn as="section" delay={0.1} className="mt-8">
        <div className="grid gap-4 rounded-2xl bg-slate-900 px-6 py-5 text-slate-50 shadow-lg dark:bg-slate-900/95 sm:grid-cols-3">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Role
            </h2>
            <p className="mt-1 text-sm font-medium">
              DevOps Engineer · Bot Builder
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Tech Stack
            </h2>
            <p className="mt-1 text-sm">
              Teams Toolkit, Bot Framework, Azure, Node.js / PowerShell
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Highlights
            </h2>
            <p className="mt-1 text-sm">
              CLI-triggered notifications · Real-time collaboration · Demo-ready
              automation
            </p>
          </div>
        </div>
      </SectionFadeIn>

      {/* Overview */}
      <SectionFadeIn as="section" delay={0.14} className="mt-10 space-y-3">
        <h2 className="section-heading">Overview</h2>
        <p className="section-body">
          Proactive bots allow Teams apps to send messages without waiting for
          the user to initiate a conversation. In this project, I built a
          workflow where a simple command-line action triggers an automated
          message to appear inside a Teams channel. This capability is powerful
          for DevOps automation, incident response, CI/CD pipelines, and modern
          collaboration use cases.
        </p>
        <p className="section-body">
          Instead of asking people to “go check the dashboard,” the bot pushes
          a clean, formatted update into the place where the team already talks
          — with enough context to act on quickly.
        </p>
      </SectionFadeIn>

      {/* Architecture */}
      <SectionFadeIn as="section" delay={0.18} className="mt-8 space-y-3">
        <h2 className="section-heading">Architecture</h2>
        <p className="section-body">
          The solution is built from a few focused components:
        </p>
        <ul className="section-body space-y-2">
          <li>
            <span className="font-semibold">Teams Toolkit</span>: scaffolds the
            bot, Teams app manifest, and local debug experience.
          </li>
          <li>
            <span className="font-semibold">Azure Bot Service</span>: provides
            identity and connectivity for the bot.
          </li>
          <li>
            <span className="font-semibold">Bot Framework Adapter</span>:
            stores conversation references required for proactive messaging.
          </li>
          <li>
            <span className="font-semibold">CLI trigger</span>: a Node.js /
            PowerShell script that calls a secure endpoint to send the
            notification payload.
          </li>
          <li>
            <span className="font-semibold">Teams channel</span>: receives the
            message with metadata like environment, event type, and link to
            deeper logs or dashboards.
          </li>
        </ul>
      </SectionFadeIn>

      {/* You can keep adding more sections (CLI example, impact, etc.) using
          the same pattern: <h2 className="section-heading">, <p>/<ul> with section-body */}
    </main>
  );
}

