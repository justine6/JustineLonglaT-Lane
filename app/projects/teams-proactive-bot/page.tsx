// app/projects/teams-proactive-bot/page.tsx
import Image from "next/image";
import Link from "next/link";
import { SectionFadeIn } from "@/components/ui/SectionFadeIn";

export const metadata = {
  title: "Teams Proactive Messaging Bot | Jutellane Solutions with Justine",
  description:
    "A proactive Microsoft Teams bot built with Teams Toolkit that sends automated messages triggered directly from the command line.",
  openGraph: {
    title: "Teams Proactive Messaging Bot | Jutellane Solutions",
    description:
      "A real-world automation bot that delivers proactive messages to Teams channels triggered from CLI scripts.",
    images: ["/projects/teams-proactive-bot-hero.jpg"],
  },
};

export default function TeamsProactiveBotPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 pb-16 pt-10">
      {/* back to projects link */}
      <SectionFadeIn as="div" delay={0.02} className="mb-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-xs font-medium text-sky-300 hover:text-sky-200"
        >
          <span className="text-base">←</span>
          <span>Back to projects</span>
        </Link>
      </SectionFadeIn>

      {/* Hero section */}
      <SectionFadeIn as="header" delay={0.05} className="space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-slate-900/70 px-3 py-1 text-[0.7rem] font-medium text-sky-100 shadow-[0_0_24px_rgba(56,189,248,0.45)]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Teams Toolkit · Proactive Bots · DevOps Automation
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Teams Proactive Messaging Bot
        </h1>

        <p className="text-sm text-slate-300 sm:text-base">
          A real-world automation bot that triggers proactive notifications into
          Microsoft Teams — directly from the command line — using Teams Toolkit,
          Bot Framework, and Azure Identity.
        </p>

        {/* hero image */}
        <div className="overflow-hidden rounded-xl border border-slate-800/70 bg-slate-900/60 shadow-[0_0_32px_rgba(15,23,42,0.8)]">
          <Image
            src="/projects/teams-proactive-bot-hero.jpg"
            alt="Teams Proactive Messaging Bot Demo"
            width={1200}
            height={700}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        {/* quick stats strip */}
        <div className="grid gap-3 rounded-2xl border border-slate-800/70 bg-slate-950/70 p-4 text-xs text-slate-200 sm:grid-cols-3 sm:text-sm">
          <div>
            <p className="text-slate-400">Role</p>
            <p className="font-semibold text-slate-50">
              DevOps Engineer · Bot Builder
            </p>
          </div>
          <div>
            <p className="text-slate-400">Tech Stack</p>
            <p className="font-semibold text-slate-50">
              Teams Toolkit, Bot Framework, Azure, Node.js / PowerShell
            </p>
          </div>
          <div>
            <p className="text-slate-400">Highlights</p>
            <p className="font-semibold text-slate-50">
              CLI-triggered notifications · Real-time collaboration · Demo-ready
            </p>
          </div>
        </div>
      </SectionFadeIn>

      {/* Overview */}
      <SectionFadeIn as="section" delay={0.1} className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-50">Overview</h2>
        <p className="leading-relaxed text-slate-300">
          Proactive bots allow Teams apps to send messages without waiting for
          the user to initiate a conversation. In this project, I built a
          workflow where a simple command-line action triggers an automated
          message to appear inside a Teams channel. This capability is powerful
          for DevOps automation, incident response, CI/CD pipelines, and modern
          collaboration use cases.
        </p>
      </SectionFadeIn>

      {/* Architecture */}
      <SectionFadeIn as="section" delay={0.14} className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-50">Architecture</h2>
        <ul className="space-y-2 text-sm text-slate-300">
          <li>
            <span className="font-semibold text-sky-300">Teams Toolkit:</span>{" "}
            scaffolded the bot, Teams app manifest, and local debug experience.
          </li>
          <li>
            <span className="font-semibold text-sky-300">
              Azure Bot Service:
            </span>{" "}
            provided identity and connectivity for the bot.
          </li>
          <li>
            <span className="font-semibold text-sky-300">
              Bot Framework Adapter:
            </span>{" "}
            stored conversation references required for proactive messaging.
          </li>
          <li>
            <span className="font-semibold text-sky-300">CLI trigger:</span>{" "}
            a Node.js / PowerShell script that calls a secure endpoint to send
            the notification.
          </li>
        </ul>
      </SectionFadeIn>

      {/* How the trigger works */}
      <SectionFadeIn as="section" delay={0.18} className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-50">
          How the Proactive Trigger Works
        </h2>
        <p className="text-sm text-slate-300">
          Once the bot is installed in Teams, it records the conversation
          reference. Any time I run the CLI script, it posts to a lightweight
          API endpoint exposed by the bot:
        </p>

        <div className="overflow-hidden rounded-xl border border-slate-800/70 bg-slate-950/80">
          <div className="flex items-center gap-2 border-b border-slate-800/80 bg-slate-900/90 px-3 py-2 text-[0.7rem] text-slate-300">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="ml-2 font-mono text-[0.7rem] text-slate-400">
              cli-trigger.ts
            </span>
          </div>
          <pre className="overflow-x-auto p-4 text-xs text-slate-100">
{`await fetch(\`\${BOT_URL}/api/notify\`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    message: "Automation bot triggered from CLI ✅",
  }),
});`}
          </pre>
        </div>

        <p className="text-sm text-slate-300">
          On the server side, the bot uses the stored conversation reference to
          send a proactive message into the Teams conversation:
        </p>

        <div className="overflow-hidden rounded-xl border border-slate-800/70 bg-slate-950/80">
          <div className="flex items-center gap-2 border-b border-slate-800/80 bg-slate-900/90 px-3 py-2 text-[0.7rem] text-slate-300">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="ml-2 font-mono text-[0.7rem] text-slate-400">
              bot-notify.ts
            </span>
          </div>
          <pre className="overflow-x-auto p-4 text-xs text-slate-100">
{`await adapter.continueConversationAsync(appId, reference, async (context) => {
  await context.sendActivity(notificationMessage);
});`}
          </pre>
        </div>
      </SectionFadeIn>

      {/* Demo & impact */}
      <SectionFadeIn as="section" delay={0.22} className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-50">
          Demo & Impact
        </h2>
        <p className="leading-relaxed text-sm text-slate-300">
          During the live session, I walked through the architecture, then ran
          the CLI trigger while attendees watched the Teams channel. Within
          seconds, the bot posted an automated message confirming that the
          workflow executed successfully. This approach reduces manual reporting,
          accelerates feedback loops, and connects DevOps automation directly to
          where people are already collaborating.
        </p>
      </SectionFadeIn>

      {/* Use cases */}
      <SectionFadeIn as="section" delay={0.26} className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-50">Use Cases</h2>
        <ul className="space-y-2 text-sm text-slate-300">
          <li>CI/CD deployment and rollback notifications</li>
          <li>Incident response and on-call automation</li>
          <li>Daily operational or cost summaries</li>
          <li>Security or compliance alerts</li>
          <li>Pipeline events surfaced directly in Teams</li>
        </ul>
      </SectionFadeIn>

      {/* CTA */}
      <SectionFadeIn as="section" delay={0.3} className="mt-10">
        <div className="flex flex-col gap-3 rounded-2xl border border-sky-500/40 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 px-6 py-5 text-slate-50 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-100/90">
              next steps
            </p>
            <p className="mt-1 text-sm sm:text-base">
              Want similar automation in your own environment? Let’s explore how
              proactive Teams workflows and DevOps automation can work together
              for your team.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/intro-call"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-blue-700 shadow-lg hover:bg-slate-100"
            >
              Book intro call
            </Link>
            <Link
              href="/hire-me"
              className="inline-flex items-center justify-center rounded-full border border-sky-100/70 bg-transparent px-5 py-2 text-sm font-semibold text-sky-50 hover:bg-sky-500/20"
            >
              View services
            </Link>
          </div>
        </div>
      </SectionFadeIn>
    </main>
  );
}
