import Link from "next/link";

import SystemMeshOverview from "@/components/EngineeringMesh/SystemMeshOverview";
import MeshHeroClient from "@/components/EngineeringMesh/MeshHeroClient";
import MeshImpactStories, {
  type MeshImpactStory,
} from "@/components/EngineeringMesh/MeshImpactStories";
import MeshContextSection from "@/components/EngineeringMesh/MeshContextSection";
import MeshResultsSection from "@/components/EngineeringMesh/MeshResultsSection";

/** Set these to real IDs when ready. Leave empty to show the placeholder UI. */
const OVERVIEW_VIDEO_ID = "";
const LAMBDA_VIDEO_ID = "";
const PLAYLIST_ID = "";

const MESH_STORIES: MeshImpactStory[] = [
  {
    title: "Engineering Mesh — Multi-Site Ecosystem",
    summary:
      "How the consulting site, docs, blog, and projects were wired into one predictable platform with shared deployment patterns and cross-site consistency.",
    tags: ["Mesh", "CI/CD", "DNS", "Guardrails"],
    metrics: [
      { label: "Sites unified", value: "4+" },
      { label: "Pipelines", value: "CI/CD-ready" },
      { label: "Docs parity", value: "guardrails" },
    ],
    href: "/projects/system-design-ecosystem-a",
  },
  {
    title: "JLT-Lane Secure Billing Gateway",
    summary:
      "How Stripe Checkout was integrated into the platform to support consulting payments, subscriptions, and a production-ready monetization layer.",
    tags: ["Stripe", "Billing", "Next.js", "Vercel"],
    metrics: [
      { label: "Plans validated", value: "3" },
      { label: "Checkout flow", value: "live" },
      { label: "Env parity", value: "verified" },
    ],
    href: "/projects/jlt-lane-secure-billing-gateway",
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
    href: "/projects/teams-proactive-bot",
  },
];

const PAGE_SECTION =
  "border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950";
const CARD =
  "rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/60";
const PILL =
  "rounded-full border border-slate-200 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200";
const MUTED = "text-slate-600 dark:text-slate-300";
const HEADING = "text-slate-900 dark:text-slate-50";

const TIMELINE = [
  {
    year: "2024 Q1",
    title: "Consulting Platform Goes Live",
    body: "Launched the main Next.js consulting site with CI/CD, Tailwind, and scheduling workflows wired in.",
  },
  {
    year: "2024 Q2",
    title: "Blogs & Docs Join the Platform",
    body: "Documentation and blog surfaces were added as distinct but connected sites, each with their own publishing and delivery flow.",
  },
  {
    year: "2024 Q3",
    title: "DNS + CI/CD Unification",
    body: "IONOS DNS, GitHub Actions, Vercel builds, and environment routing were standardized across the ecosystem.",
  },
  {
    year: "2024 Q4",
    title: "Lambda Chaos Tamed",
    body: "Flaky AWS Lambda workloads were stabilized with observability, cleaner deployment hygiene, and reusable reliability guardrails.",
  },
  {
    year: "2025",
    title: "The Engineering Mesh Takes Shape",
    body: "Sites, pipelines, docs, and shared delivery practices started behaving like one coordinated platform instead of isolated properties.",
  },
  {
    year: "2026",
    title: "Billing Gateway Added to the Mesh",
    body: "Stripe Checkout was integrated into the platform, adding a live monetization layer for consulting offers, subscriptions, and future access control flows.",
  },
] as const;

const CASE_STUDIES = [
  {
    title: "Engineering Mesh — Multi-Site Ecosystem",
    summary:
      "How the consulting site, docs, blogs, and projects were wired into one predictable platform.",
    href: "/projects/system-design-ecosystem-a",
    pill: "Mesh",
    metrics: [
      { label: "Sites unified", value: "4+" },
      { label: "Pipelines", value: "CI/CD-ready" },
      { label: "Docs parity", value: "guardrails" },
    ],
  },
  {
    title: "JLT-Lane Secure Billing Gateway",
    summary:
      "Stripe-powered billing architecture for one-time consulting payments and recurring platform subscriptions.",
    href: "/projects/jlt-lane-secure-billing-gateway",
    pill: "Billing",
    metrics: [
      { label: "Payment modes", value: "one-time + recurring" },
      { label: "Checkout", value: "Stripe-hosted" },
      { label: "Production", value: "verified" },
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
    href: "/projects/automation-rescue-fixing-flaky-lambdas-a",
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
    label: "Pricing",
    sub: "Live billing surface",
    href: "/pricing",
    accent: "from-emerald-500/25 via-lime-400/10 to-transparent",
    dot: "bg-emerald-500",
  },
  {
    label: "Docs",
    sub: "Tooling + playbooks",
    href: "https://docs.justinelonglat-lane.com",
    accent: "from-emerald-500/25 via-teal-400/10 to-transparent",
    dot: "bg-teal-500",
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

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {content}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className={base}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={base}>
      {content}
    </Link>
  );
}

function CaseStudyCard({
  title,
  summary,
  href,
  pill,
  metrics,
}: {
  title: string;
  summary: string;
  href: string;
  pill: string;
  metrics: { label: string; value: string }[];
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-400"
    >
      <div className="flex items-center justify-between gap-3">
        <span className={`px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${PILL}`}>
          {pill}
        </span>
        <span className="text-sm text-slate-400 transition group-hover:text-slate-700 dark:group-hover:text-slate-200">
          →
        </span>
      </div>

      <h3 className={`mt-4 text-base font-semibold ${HEADING}`}>{title}</h3>
      <p className={`mt-2 text-sm leading-7 ${MUTED}`}>{summary}</p>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-center dark:border-slate-800 dark:bg-slate-950/60"
          >
            <div className={`text-sm font-semibold ${HEADING}`}>{metric.value}</div>
            <div className="mt-1 text-[0.65rem] uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
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

      <div className={`border-b ${PAGE_SECTION}`}>
        <div className="mx-auto max-w-5xl px-4 py-4 md:px-6">
          <div className="flex flex-wrap gap-2">
            {[
              ["#problem", "Problem"],
              ["#role", "My role"],
              ["#solution", "Solution"],
              ["#enables", "What it enables"],
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

      <section id="overview-video" className={`scroll-mt-24 ${PAGE_SECTION}`}>
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>
            Featured Video — Overview of the Mesh
          </h2>

          <p className={`mt-2 max-w-3xl text-sm md:text-base ${MUTED}`}>
            A walk-through of the mesh: how the sites connect, where CI/CD enforces trust, and how platform layers like documentation, projects, and billing now work together.
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

      <section id="problem" className={`scroll-mt-24 ${PAGE_SECTION}`}>
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>
            The Problem: Growth Without a Shared Operating Model
          </h2>

          <p className={`mt-4 text-sm md:text-base ${MUTED}`}>
            As the consulting platform expanded, it stopped being just a website. It became a growing ecosystem of services, documentation, blogs, project case studies, automation assets, and now billing infrastructure.
          </p>

          <p className={`mt-4 text-sm md:text-base ${MUTED}`}>
            Without a shared operating model, each new layer risked becoming another isolated surface. Deployments could drift, environment variables could diverge, documentation could lag reality, and platform capabilities could remain disconnected from the story being told publicly.
          </p>

          <ul className={`mt-4 list-disc space-y-2 pl-5 text-sm md:text-base ${MUTED}`}>
            <li>Multiple surfaces with different responsibilities</li>
            <li>Growing need for environment parity and deployment trust</li>
            <li>Operational complexity across sites, docs, and integrations</li>
            <li>Need to turn engineering work into reusable platform capabilities</li>
          </ul>
        </div>
      </section>

      <section id="role" className={`scroll-mt-24 ${PAGE_SECTION}`}>
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>
            My Role: Platform Engineer, Systems Integrator, and Builder
          </h2>

          <p className={`mt-4 text-sm md:text-base ${MUTED}`}>
            I wasn’t just shipping features. I was shaping the environment in which every property, workflow, and service could operate predictably together.
          </p>

          <p className={`mt-4 text-sm md:text-base ${MUTED}`}>
            That meant designing the connective tissue: CI/CD patterns, DNS behavior, environment parity, cross-site architecture, documentation pathways, project storytelling, and monetization entry points.
          </p>

          <ul className={`mt-4 list-disc space-y-2 pl-5 text-sm md:text-base ${MUTED}`}>
            <li>Unified delivery patterns across sites and services</li>
            <li>Standardized environment and deployment behavior</li>
            <li>Introduced observability and stability thinking into the platform narrative</li>
            <li>Connected public-facing assets to real engineering implementation</li>
            <li>Added billing architecture as a platform capability, not a bolt-on feature</li>
          </ul>
        </div>
      </section>

      <section id="solution" className={`scroll-mt-24 ${PAGE_SECTION}`}>
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>
            The Solution: The Engineering Mesh as a Platform Story
          </h2>

          <p className={`mt-4 text-sm md:text-base ${MUTED}`}>
            The Engineering Mesh became the shared architecture behind everything: consulting, projects, documentation, blogs, automation, and now billing.
          </p>

          <p className={`mt-4 text-sm md:text-base ${MUTED}`}>
            Instead of isolated surfaces, the system now behaves like a coordinated platform. CI/CD enforces consistency. Environment management supports trust between local and production. Documentation and projects reinforce each other. Billing creates a live entry point into the platform itself.
          </p>

          <ul className={`mt-4 list-disc space-y-2 pl-5 text-sm md:text-base ${MUTED}`}>
            <li>Shared CI/CD patterns across web properties</li>
            <li>Consistent routing, deployment, and environment practices</li>
            <li>Cross-linked storytelling between projects, docs, and platform surfaces</li>
            <li>Operational guardrails for stability, cost, and security</li>
            <li>Live monetization architecture integrated into the platform</li>
          </ul>
        </div>
      </section>

      <section id="enables" className={`scroll-mt-24 ${PAGE_SECTION}`}>
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>
            What the Mesh Enables
          </h2>

          <p className={`mt-2 max-w-3xl text-sm md:text-base ${MUTED}`}>
            The value of the mesh is not just architectural neatness. It creates a foundation for real platform capabilities.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Cross-Site Consistency",
                body: "Shared navigation, routing logic, environment handling, and release discipline across your public platform surfaces.",
              },
              {
                title: "Operational Trust",
                body: "Cleaner deployment flows, fewer surprises in production, and more confidence that what works locally behaves the same in cloud environments.",
              },
              {
                title: "Reusable Storytelling",
                body: "Projects, docs, blog posts, and architecture pages now reinforce one another instead of existing as disconnected artifacts.",
              },
              {
                title: "Platform Monetization",
                body: "Billing is now part of the mesh, opening the door for subscriptions, service access, customer flows, and future membership activation.",
              },
            ].map((item) => (
              <div key={item.title} className={CARD + " p-5"}>
                <h3 className={`text-sm font-semibold ${HEADING}`}>{item.title}</h3>
                <p className={`mt-2 text-sm leading-7 ${MUTED}`}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MeshContextSection PAGE_SECTION={PAGE_SECTION} HEADING={HEADING} MUTED={MUTED} />
      <MeshResultsSection PAGE_SECTION={PAGE_SECTION} HEADING={HEADING} MUTED={MUTED} CARD={CARD} />

      <section id="timeline" className={`scroll-mt-24 ${PAGE_SECTION}`}>
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>
            How the Mesh Came Together
          </h2>

          <p className={`mt-2 max-w-3xl text-sm md:text-base ${MUTED}`}>
            A quick timeline of how separate sites, tooling, and platform capabilities evolved into one mesh.
          </p>

          <ol className="mt-6 space-y-4 border-l border-slate-200 pl-4 md:mt-8 md:space-y-5 md:pl-6 dark:border-slate-800">
            {TIMELINE.map((item) => (
              <li key={item.year} className="relative">
                <div className="absolute -left-2 top-1.5 h-3 w-3 rounded-full border border-blue-300 bg-white md:-left-2.5 dark:border-blue-500/60 dark:bg-slate-950" />
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  {item.year}
                </div>
                <div className={`mt-1 text-sm font-semibold md:text-base ${HEADING}`}>
                  {item.title}
                </div>
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

      <section id="case-studies" className={`scroll-mt-24 ${PAGE_SECTION}`}>
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>
                Case Studies Built on the Mesh
              </h2>
              <p className={`mt-2 max-w-3xl text-sm md:text-base ${MUTED}`}>
                These projects show how the Engineering Mesh turns platform thinking into visible, working systems.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white"
            >
              View all projects →
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {CASE_STUDIES.map((study) => (
              <CaseStudyCard key={study.href} {...study} />
            ))}
          </div>
        </div>
      </section>

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
          <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>
            Mesh-Aware Resources
          </h2>

          <p className={`mt-2 max-w-3xl text-sm md:text-base ${MUTED}`}>
            The directory for everything that touches the Engineering Mesh — across
            websites, docs, projects, billing, and long-form technical narrative.
          </p>

          {/* Core platform surfaces */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ResourceRow
              title="Consulting Platform"
              description="Main Next.js site for services, intro calls, pricing, and client engagement."
              href="https://www.justinelonglat-lane.com"
            />
            <ResourceRow
              title="Pricing Surface"
              description="Live billing surface connected to Stripe Checkout for consulting sessions and recurring subscriptions."
              href="/pricing"
            />
            <ResourceRow
              title="Projects & Case Studies"
              description="All mesh-related projects, including the Engineering Mesh and billing gateway case studies."
              href="/projects"
            />
            <ResourceRow
              title="Stripe Billing Gateway"
              description="Public case study for the secure billing architecture and monetization layer."
              href="/projects/jlt-lane-secure-billing-gateway"
            />
            <ResourceRow
              title="Docs Site"
              description="Documentation + playbooks powered by HTML, PowerShell tooling, and CI."
              href="https://docs.justinelonglat-lane.com"
            />
            <ResourceRow
              title="Blog Site"
              description="Deep-dive articles on CI/CD, DevSecOps, observability, and platform reliability."
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

          {/* Operations */}
          <div className="mt-8">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Operations
            </div>

            <p className={`mt-2 max-w-3xl text-sm ${MUTED}`}>
              The operational layer of the mesh: reusable tooling, execution guides,
              and playbooks that help turn platform knowledge into repeatable delivery.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <ResourceRow
                title="Toolkit"
                description="Automation API model and platform tooling references."
                href="https://docs.justinelonglat-lane.com/toolkit.html"
              />
              <ResourceRow
                title="Runbooks"
                description="Operational playbooks for debugging, recovery, and platform procedures."
                href="https://docs.justinelonglat-lane.com/runbooks.html"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}