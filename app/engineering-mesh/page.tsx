// app/engineering-mesh/page.tsx
import Link from "next/link";
import { motion } from "framer-motion";

import SystemMeshOverview from "@/components/EngineeringMesh/SystemMeshOverview";
import MeshHeroClient from "@/components/EngineeringMesh/MeshHeroClient";
import MeshImpactStories, {
  type MeshImpactStory,
} from "@/components/EngineeringMesh/MeshImpactStories";
import MeshContextSection from "@/components/EngineeringMesh/MeshContextSection";
import MeshResultsSection from "@/components/EngineeringMesh/MeshResultsSection";

/** ✅ Set these to real IDs when ready. Leave empty to show the placeholder UI. */
const OVERVIEW_VIDEO_ID = ""; // e.g. "dQw4w9WgXcQ"
const LAMBDA_VIDEO_ID = ""; // optional, can reuse above
const PLAYLIST_ID = ""; // optional

const MESH_STORIES: MeshImpactStory[] = [
  {
    title: "Engineering Mesh — Multi-Site Ecosystem",
    summary:
      "How the consulting site, docs, blog, and projects were wired into one predictable platform.",
    tags: ["Mesh", "CI/CD", "DNS", "Guardrails"],
    metrics: [
      { label: "Sites unified", value: "4+" },
      { label: "Pipelines", value: "CI/CD-ready" },
      { label: "Docs parity", value: "guardrails" },
    ],
    href: "/projects/system-design-ecosystem", // ✅ now points to markdown-driven page
  },
  {
    title: "Teams Proactive Messaging Bot",
    summary:
      "ChatOps bot that keeps stakeholders ahead of deployments, status, and release events.",
    tags: ["ChatOps", "Notifications", "Ops"],
    metrics: [
      { label: "Notification latency", value: "<1m" },
      { label: "Channels covered", value: "multi" },
      { label: "Release visibility", value: "↑" },
    ],
    href: "/projects/teams-proactive-bot", // ✅ matches your folder
  },
];

// Theme-aware style tokens (keep the page consistent)
const PAGE_SECTION =
  "border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950";
const CARD =
  "rounded-2xl border border-slate-200 bg-white shadow-sm " +
  "dark:border-slate-800 dark:bg-slate-900/60";
const PILL =
  "rounded-full border border-slate-200 bg-white text-slate-700 " +
  "dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200";
const MUTED = "text-slate-600 dark:text-slate-300";
const HEADING = "text-slate-900 dark:text-slate-50";

const TIMELINE = [
  {
    year: "2024 Q1",
    title: "Consulting Platform Goes Live",
    body: "Launched the main Next.js consulting site with CI/CD, Tailwind, and Cal.com scheduling wired in.",
  },
  {
    year: "2024 Q2",
    title: "Blogs & Docs Join the Party",
    body: "Static HTML blogs and documentation sites are added, each with their own CI pipeline and hosting.",
  },
  {
    year: "2024 Q3",
    title: "DNS + CI/CD Unification",
    body: "IONOS DNS, GitHub Actions, Vercel builds, and environment routing are standardized across all sites.",
  },
  {
    year: "2024 Q4",
    title: "Lambda Chaos Tamed",
    body: "Flaky AWS Lambda functions are debugged, cleaned up, and wrapped in observability and guardrails.",
  },
  {
    year: "2025",
    title: "The Justine Longla Engineering Mesh",
    body: "All sites, pipelines, and shared services are treated as one mesh — tuned for speed, stability, and storytelling.",
  },
] as const;

const RESULTS_METRICS = [
  { label: "Deploy consistency", value: "↑", detail: "Standardized CI/CD" },
  { label: "Prod surprises", value: "↓", detail: "Observability added" },
  { label: "Manual ops", value: "↓", detail: "Automation + guardrails" },
  { label: "Delivery speed", value: "↑", detail: "Predictable environments" },
] as const;

const CASE_STUDIES = [
  {
    title: "Engineering Mesh — Multi-Site Ecosystem",
    summary:
      "How the consulting site, docs, blogs, and projects were wired into one predictable platform.",
    href: "/projects/engineering-mesh",
    pill: "Mesh",
    metrics: [
      { label: "Sites unified", value: "4+" },
      { label: "Pipelines", value: "CI/CD-ready" },
      { label: "Docs parity", value: "guardrails" },
    ],
  },
  {
    title: "Teams Proactive Messaging Bot",
    summary:
      "ChatOps bot that keeps stakeholders ahead of deployments, status, and release events.",
    href: "/projects/teams-proactive-bot",
    pill: "ChatOps",
    metrics: [
      { label: "Notification latency", value: "<1m" },
      { label: "Channels covered", value: "multi" },
      { label: "Release visibility", value: "↑" },
    ],
  },
  {
    title: "Automation Rescue: Fixing Flaky Lambdas",
    summary:
      "From noisy, failing Lambdas to calm, observable, and cost-aware serverless functions.",
    href: "/projects/fixing-flaky-lambdas",
    pill: "Serverless",
    metrics: [
      { label: "Error rate", value: "↓" },
      { label: "Cold starts", value: "↓" },
      { label: "Observability", value: "added" },
    ],
  },
  {
    title: "Guardrails & Optimize Engine",
    summary:
      "Guardrails, policies, and cost-optimization pipelines wrapped around cloud workloads.",
    href: "/projects/operate-and-optimize",
    pill: "Guardrails",
    metrics: [
      { label: "Drift control", value: "policy" },
      { label: "Cost posture", value: "tuned" },
      { label: "Risk", value: "↓" },
    ],
  },
  {
    title: "Secure & Scale",
    summary:
      "Security-first platform improvements layered on top of existing infrastructure.",
    href: "/projects/secure-and-scale",
    pill: "Security",
    metrics: [
      { label: "Controls", value: "layered" },
      { label: "Audit readiness", value: "↑" },
      { label: "Blast radius", value: "↓" },
    ],
  },
] as const;

const PORTALS = [
  {
    label: "Projects",
    sub: "All case studies",
    href: "/projects",
    accent: "from-blue-500/30 via-sky-400/10 to-transparent",
    dot: "bg-blue-500",
  },
  {
    label: "Docs",
    sub: "Tooling + playbooks",
    href: "https://docs.justinelonglat-lane.com",
    accent: "from-emerald-500/25 via-teal-400/10 to-transparent",
    dot: "bg-emerald-500",
  },
  {
    label: "Blog",
    sub: "Deep dives",
    href: "https://blogs.justinelonglat-lane.com",
    accent: "from-indigo-500/25 via-violet-400/10 to-transparent",
    dot: "bg-indigo-500",
  },
  {
    label: "Toolkit",
    sub: "Automation API model",
    href: "https://docs.justinelonglat-lane.com/toolkit.html",
    accent: "from-cyan-500/25 via-sky-300/10 to-transparent",
    dot: "bg-cyan-500",
  },
] as const;

// (kept, even if unused today — you can delete later if lint nags)
function getMetricIcon(value: string) {
  const v = value.toLowerCase();
  if (v.includes("↓") || v.includes("-")) return "▼";
  if (v.includes("↑") || v.includes("+")) return "▲";
  if (
    v.includes("added") ||
    v.includes("tuned") ||
    v.includes("fast") ||
    v.includes("improved")
  )
    return "⚡";
  return "•";
}

type ResourceRowProps = {
  title: string;
  description: string;
  href: string;
};

function isExternalHref(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

function ResourceRow({ title, description, href }: ResourceRowProps) {
  const external = isExternalHref(href);

  const base =
    "group flex items-start justify-between gap-4 rounded-2xl border px-4 py-4 shadow-sm " +
    "border-slate-200 bg-white transition hover:border-blue-300 hover:bg-slate-50 " +
    "dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-400 dark:hover:bg-slate-900/80 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40";

  const content = (
    <div className="w-full">
      <div className="flex items-center justify-between gap-3">
        <div className={`text-sm font-semibold ${HEADING}`}>{title}</div>
        <span className="text-xs font-semibold text-slate-500 transition group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-slate-50">
          {external ? "↗" : "→"}
        </span>
      </div>

      <p className={`mt-1 text-xs md:text-sm ${MUTED}`}>{description}</p>

      <div className="mt-3 text-xs font-medium text-blue-700 transition group-hover:text-blue-800 dark:text-blue-300 dark:group-hover:text-blue-200 md:text-sm">
        Visit {external ? "site" : "page"} →
      </div>
    </div>
  );

  // External: real <a>
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {content}
      </a>
    );
  }

  // Hash links: <a> avoids any Next quirks with nested/scroll targets
  if (href.startsWith("#")) {
    return (
      <a href={href} className={base}>
        {content}
      </a>
    );
  }

  // Internal: Next <Link>
  return (
    <Link href={href} className={base}>
      {content}
    </Link>
  );
}

export default function EngineeringMeshPage() {
  return (
      <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <MeshHeroClient
        PAGE_SECTION={PAGE_SECTION}
        PILL={PILL}
        CARD={CARD}
        MUTED={MUTED}
        HEADING={HEADING}
        PORTALS={PORTALS}
      />

      {/* In-page nav chips */}
      <div className={`border-b ${PAGE_SECTION}`}>
        <div className="mx-auto max-w-5xl px-4 py-4 md:px-6">
          <div className="flex flex-wrap gap-2">
            {[
              ["#problem", "Problem"],
              ["#role", "My role"],
              ["#solution", "Solution"],
              ["#results", "Results"],
              ["#timeline", "Timeline"],
              ["#architecture", "Architecture"],
              ["#case-studies", "Case studies"],
              ["#resources", "Resources"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1 text-xs hover:bg-slate-50 dark:hover:bg-slate-900/80 ${PILL}`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured video */}
      <section id="overview-video" className={`scroll-mt-24 ${PAGE_SECTION}`}>
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>
            Featured Video — Overview of the Mesh
          </h2>

          <p className={`mt-2 max-w-3xl text-sm md:text-base ${MUTED}`}>
            A walk-through of the mesh: how the sites connect, where CI/CD enforces trust, and how “Lambda chaos” was
            stabilized into something calm and predictable.
          </p>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
            {OVERVIEW_VIDEO_ID ? (
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  src={`https://www.youtube.com/embed/${OVERVIEW_VIDEO_ID}?rel=0`}
                  title="Engineering Mesh overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="flex aspect-video w-full items-center justify-center text-sm text-slate-500 dark:text-slate-300">
                JLT YouTube ID in{" "}
                <code className="ml-1 rounded bg-white px-1.5 py-0.5 text-xs text-slate-700 ring-1 ring-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-700">
                  OVERVIEW_VIDEO_ID
                </code>{" "}
                to embed the overview.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className={`scroll-mt-24 ${PAGE_SECTION}`}>
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>
            The Problem: Platform Sprawl Without Guardrails
          </h2>

          <p className={`mt-4 text-sm md:text-base ${MUTED}`}>
            As my consulting work, documentation, blogs, and engineering experiments grew, the platform behind them
            started to sprawl. Each new site or tool solved an immediate need — but together they introduced
            duplication, inconsistent deployments, and invisible risk.
          </p>

          <p className={`mt-4 text-sm md:text-base ${MUTED}`}>
            Static sites lived next to dynamic ones. Some used CI pipelines, others were deployed manually. DNS,
            environment variables, and build behaviors weren’t always aligned. The system worked — but it wasn’t
            designed.
          </p>

          <ul className={`mt-4 list-disc space-y-2 pl-5 text-sm md:text-base ${MUTED}`}>
            <li>Multiple sites with different deployment methods</li>
            <li>Inconsistent environment configuration</li>
            <li>No shared observability or operational guardrails</li>
            <li>Manual fixes instead of systemic solutions</li>
          </ul>
        </div>
      </section>

      {/* Role */}
      <section id="role" className={`scroll-mt-24 ${PAGE_SECTION}`}>
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>
            My Role: Acting as Platform Engineer
          </h2>

          <p className={`mt-4 text-sm md:text-base ${MUTED}`}>
            I stepped into the role of a platform engineer — not just shipping features, but shaping the environment
            in which every site and service operated.
          </p>

          <p className={`mt-4 text-sm md:text-base ${MUTED}`}>
            My focus shifted from “build the next thing” to “make everything predictable.” That meant aligning CI/CD,
            standardizing environments, reducing operational noise, and introducing guardrails that made safe delivery
            the default.
          </p>

          <ul className={`mt-4 list-disc space-y-2 pl-5 text-sm md:text-base ${MUTED}`}>
            <li>Designed and unified CI/CD pipelines across sites</li>
            <li>Standardized DNS, environment variables, and hosting behavior</li>
            <li>Introduced observability and stability patterns for cloud workloads</li>
            <li>Built reusable automation to replace manual operations</li>
          </ul>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className={`scroll-mt-24 ${PAGE_SECTION}`}>
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>
            The Solution: The Engineering Mesh Architecture
          </h2>

          <p className={`mt-4 text-sm md:text-base ${MUTED}`}>
            The result was the <strong>Engineering Mesh</strong> — a shared platform layer connecting consulting,
            documentation, blogs, and projects through common deployment, hosting, and operational practices.
          </p>

          <p className={`mt-4 text-sm md:text-base ${MUTED}`}>
            Instead of isolated sites, the system became a coordinated ecosystem. CI/CD pipelines enforced consistency.
            DNS and hosting rules were standardized. Automation handled repetitive tasks. Guardrails made reliability and
            security part of the architecture — not afterthoughts.
          </p>

          <ul className={`mt-4 list-disc space-y-2 pl-5 text-sm md:text-base ${MUTED}`}>
            <li>Shared CI/CD patterns across all web properties</li>
            <li>Consistent DNS and environment routing</li>
            <li>Automated deployment and verification steps</li>
            <li>Cloud guardrails for stability, cost, and security</li>
          </ul>
        </div>
      </section>

      <MeshContextSection PAGE_SECTION={PAGE_SECTION} HEADING={HEADING} MUTED={MUTED} />

      <MeshResultsSection PAGE_SECTION={PAGE_SECTION} HEADING={HEADING} MUTED={MUTED} CARD={CARD} />

      {/* Timeline */}
      <section id="timeline" className={`scroll-mt-24 ${PAGE_SECTION}`}>
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>
            How the Mesh Came Together
          </h2>

          <p className={`mt-2 max-w-3xl text-sm md:text-base ${MUTED}`}>
            A quick timeline of how separate sites and tooling evolved into one mesh.
          </p>

          <ol className="mt-6 space-y-4 border-l border-slate-200 pl-4 md:mt-8 md:space-y-5 md:pl-6 dark:border-slate-800">
            {TIMELINE.map((item) => (
              <li key={item.year} className="relative">
                <div className="absolute -left-2 top-1.5 h-3 w-3 rounded-full border border-blue-300 bg-white md:-left-2.5 dark:border-blue-500/60 dark:bg-slate-950" />

                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  {item.year}
                </div>

                <div className={`mt-1 text-sm font-semibold md:text-base ${HEADING}`}>{item.title}</div>

                <p className={`mt-2 text-sm ${MUTED}`}>{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>


      <SystemMeshOverview
        PAGE_SECTION={PAGE_SECTION}
        HEADING={HEADING}
        MUTED={MUTED}
        CARD={CARD}
        LAMBDA_VIDEO_ID={LAMBDA_VIDEO_ID}
      />

      <MeshImpactStories
        PAGE_SECTION={PAGE_SECTION}
        HEADING={HEADING}
        MUTED={MUTED}
        CARD={CARD}
        stories={MESH_STORIES}
      />

      {/* Resources */}
      <section
        id="resources"
        className="scroll-mt-24 bg-white pb-16 pt-10 dark:bg-slate-950 md:pb-20 md:pt-14"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>Mesh-Aware Resources</h2>

          <p className={`mt-2 max-w-3xl text-sm md:text-base ${MUTED}`}>
            The directory for everything that touches the Engineering Mesh — across websites, docs, and your long-form
            technical narrative.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ResourceRow
              title="Consulting Platform"
              description="Main Next.js site for services, intro calls, and client engagement."
              href="https://consulting.justinelonglat-lane.com"
            />
            <ResourceRow
              title="Projects & Case Studies"
              description="All mesh-related projects, including the Engineering Mesh case study."
              href="/projects"
            />
            <ResourceRow
              title="Docs Site"
              description="Documentation + playbooks powered by HTML, PowerShell tooling, and CI."
              href="https://docs.justinelonglat-lane.com"
            />
            <ResourceRow
              title="Blog Site"
              description="Deep-dive articles on CI/CD, DevSecOps, and platform reliability."
              href="https://blogs.justinelonglat-lane.com"
            />
            {PLAYLIST_ID && (
              <ResourceRow
                title="YouTube Playlist — Engineering Mesh"
                description="All videos that explain the mesh, Lambda stories, and platform breakdowns."
                href={`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`}
              />
            )}

          </div>
        </div>
      </section>
    </main>
  );
}
