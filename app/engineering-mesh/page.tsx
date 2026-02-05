// app/engineering-mesh/page.tsx
import Image from "next/image";
import Link from "next/link";

/** ✅ Set these to real IDs when ready. Leave empty to show the placeholder UI. */
const OVERVIEW_VIDEO_ID = ""; // e.g. "dQw4w9WgXcQ"
const LAMBDA_VIDEO_ID = ""; // optional, can reuse above
const PLAYLIST_ID = ""; // optional

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
    summary: "Security-first platform improvements layered on top of existing infrastructure.",
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

function getMetricIcon(value: string) {
  const v = value.toLowerCase();
  if (v.includes("↓") || v.includes("-")) return "▼";
  if (v.includes("↑") || v.includes("+")) return "▲";
  if (v.includes("added") || v.includes("tuned") || v.includes("fast") || v.includes("improved"))
    return "⚡";
  return "•";
}

type ResourceRowProps = {
  title: string;
  description: string;
  href: string;
};

function ResourceRow({ title, description, href }: ResourceRowProps) {
  const isExternal = href.startsWith("http");

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
          {isExternal ? "↗" : "→"}
        </span>
      </div>

      <p className={`mt-1 text-xs md:text-sm ${MUTED}`}>{description}</p>

      <div className="mt-3 text-xs font-medium text-blue-700 transition group-hover:text-blue-800 dark:text-blue-300 dark:group-hover:text-blue-200 md:text-sm">
        Visit {isExternal ? "site" : "page"} →
      </div>
    </div>
  );

  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
      {content}
    </a>
  ) : (
    <Link href={href} className={base}>
      {content}
    </Link>
  );
}

export default function EngineeringMeshPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      {/* Hero */}
      <section id="hero" className={`relative overflow-hidden ${PAGE_SECTION}`}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_18%_22%,rgba(59,130,246,0.12),transparent_55%),radial-gradient(800px_circle_at_82%_18%,rgba(16,185,129,0.10),transparent_55%),radial-gradient(700px_circle_at_50%_90%,rgba(14,165,233,0.08),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(15,23,42,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.06)_1px,transparent_1px)] [background-size:64px_64px]" />
          {/* IMPORTANT: don’t force white in dark mode */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/85 to-white dark:from-slate-950 dark:via-slate-950/85 dark:to-slate-950" />
        </div>

        <div className="relative mx-auto w-full max-w-5xl px-4 pb-12 pt-16 md:px-6 md:pb-14 md:pt-20">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-[0.18em] shadow-sm ${PILL}`}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_18px_rgba(16,185,129,0.35)]" />
              CASE STUDY HUB
            </span>

            <span className={`inline-flex items-center px-4 py-2 text-xs ${PILL} bg-slate-50 dark:bg-slate-900/60`}>
              System map • CI/CD • Observability • Guardrails
            </span>
          </div>

          <h1 className={`mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl ${HEADING}`}>
            The Justine Longla T-Lane Engineering Mesh
          </h1>

          <p className={`mt-4 max-w-3xl text-sm leading-relaxed md:text-base ${MUTED}`}>
            What started as “just one website” became a multi-site engineering ecosystem: consulting, documentation,
            blogs, and projects — wired together with CI/CD, PowerShell automation, DNS discipline, Resend, and
            cloud-native guardrails.
          </p>

          <ul className="mt-6 grid max-w-3xl gap-2 text-sm md:grid-cols-3">
            <li className={`rounded-xl px-3 py-2 shadow-sm ${CARD}`}>A map of the ecosystem</li>
            <li className={`rounded-xl px-3 py-2 shadow-sm ${CARD}`}>Case studies you can copy</li>
            <li className={`rounded-xl px-3 py-2 shadow-sm ${CARD}`}>Proof of delivery & trust</li>
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="#overview-video"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
            >
              <span className="text-base">▶</span>
              <span>Watch the overview</span>
            </Link>

            <Link
              href="#case-studies"
              className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 ${PILL} dark:hover:bg-slate-900/80`}
            >
              View case studies
            </Link>

            <Link href="/" className={`inline-flex items-center gap-2 text-xs font-medium ${MUTED} hover:text-slate-900 dark:hover:text-slate-50`}>
              ← Back to Home
            </Link>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {[
              { k: "Multi-site", v: "Consulting • Docs • Blog" },
              { k: "Delivery", v: "CI/CD + verification" },
              { k: "Trust", v: "Security + audit-ready" },
            ].map((x) => (
              <div key={x.k} className={`${CARD} p-4`}>
                <div className={`text-xs font-semibold tracking-wide ${MUTED}`}>{x.k}</div>
                <div className={`mt-2 text-sm ${HEADING}`}>{x.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PORTALS.map((p) => {
              const isExternal = p.href.startsWith("http");

              const PortalInner = (
                <>
                  <div
                    className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${p.accent} opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <div className="relative flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`h-2.5 w-2.5 rounded-full ${p.dot}`} />
                        <div className={`text-sm font-semibold ${HEADING}`}>{p.label}</div>
                      </div>
                      <div className={`mt-1 text-xs ${MUTED}`}>{p.sub}</div>
                    </div>

                    <span className="text-xs font-semibold text-slate-500 transition group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-slate-50">
                      {isExternal ? "↗" : "→"}
                    </span>
                  </div>

                  <div className="relative mt-4 h-[1px] w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div className="h-full w-0 bg-slate-400/60 transition-all duration-300 group-hover:w-full dark:bg-slate-600/70" />
                  </div>
                </>
              );

              const baseClass =
                "group relative rounded-2xl border p-4 shadow-sm transition " +
                "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none " +
                "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white " +
                "dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700 dark:hover:bg-slate-900/80 dark:focus-visible:ring-offset-slate-950";

              return isExternal ? (
                <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer" className={baseClass}>
                  {PortalInner}
                </a>
              ) : (
                <Link key={p.label} href={p.href} className={baseClass}>
                  {PortalInner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

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
            Instead of isolated sites, the system became a coordinated ecosystem. CI/CD pipelines enforced
            consistency. DNS and hosting rules were standardized. Automation handled repetitive tasks. Guardrails made
            reliability and security part of the architecture — not afterthoughts.
          </p>

          <ul className={`mt-4 list-disc space-y-2 pl-5 text-sm md:text-base ${MUTED}`}>
            <li>Shared CI/CD patterns across all web properties</li>
            <li>Consistent DNS and environment routing</li>
            <li>Automated deployment and verification steps</li>
            <li>Cloud guardrails for stability, cost, and security</li>
          </ul>
        </div>
      </section>

      {/* Results */}
      <section id="results" className={`scroll-mt-24 ${PAGE_SECTION}`}>
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>
            Results: What the Engineering Mesh Made Possible
          </h2>

          <p className={`mt-4 max-w-3xl text-sm md:text-base ${MUTED}`}>
            The Engineering Mesh transformed a collection of independent projects into a coherent, reliable platform.
            Delivery accelerated because environments became predictable. Stability improved because failures were
            observable and repeatable. Operational overhead dropped as automation replaced manual fixes.
          </p>

          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {RESULTS_METRICS.map((m) => (
              <div key={`${m.label}-${m.value}`} className={`${CARD} px-4 py-3`}>
                <div className="flex items-center justify-between gap-3">
                  <div className={`text-xs font-semibold ${HEADING}`}>{m.label}</div>
                  <span
                    className={
                      m.value.includes("↓")
                        ? "text-rose-600"
                        : m.value.includes("↑") || m.value.includes("+")
                        ? "text-emerald-600"
                        : "text-sky-600"
                    }
                  >
                    {getMetricIcon(m.value)}
                  </span>
                </div>
                <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">{m.detail}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-200">
              Predictable environments → faster delivery
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-200">
              Observability → fewer production surprises
            </div>
          </div>

          <div className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Operational Transformation
          </div>

          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5 dark:border-rose-900/40 dark:bg-rose-950/30">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-600 dark:text-rose-300">
                Before the Mesh
              </div>
              <ul className={`mt-3 space-y-2 text-sm ${MUTED}`}>
                <li>Manual fixes and environment drift</li>
                <li>Inconsistent deployment processes</li>
                <li>Limited visibility into failures</li>
                <li>Reactive operations and firefighting</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900/40 dark:bg-emerald-950/25">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-200">
                After the Mesh
              </div>
              <ul className={`mt-3 space-y-2 text-sm ${MUTED}`}>
                <li>Standardized CI/CD and environments</li>
                <li>Predictable, repeatable delivery</li>
                <li>Observability built into workflows</li>
                <li>Proactive, automation-driven operations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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

      {/* Architecture */}
      <section id="architecture" className={`scroll-mt-24 ${PAGE_SECTION}`}>
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
          <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>
            Architecture at a Glance
          </h2>
          <p className={`mt-3 max-w-3xl text-sm md:text-base ${MUTED}`}>
            The mesh connects consulting, docs, blogs, and projects with shared CI/CD, DNS, and platform services — in one frame.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">

            {/* LEFT — Mesh Diagram */}
            <div className={`overflow-hidden ${CARD}`}>
              <div className="border-b border-slate-200 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 dark:border-slate-800 dark:text-slate-300">
                Engineering Mesh Architecture Diagram
              </div>

              <div className="px-6 pt-6">
                <div
                  className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50
                            h-[260px] sm:h-[320px] md:h-[380px] lg:h-[440px] xl:h-[480px]"
                >
                  <Image
                    src="/assets/img/engineering-mesh-diagram.png"
                    alt="Diagram of the Justine Longla Engineering Mesh architecture"
                    fill
                    sizes="(min-width: 1280px) 480px, (min-width: 768px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </div>

              <p className={`px-4 pb-4 pt-3 text-xs ${MUTED}`}>
                How IONOS DNS, Vercel, static sites, and shared services connect into one mesh.
              </p>
            </div>

            {/* RIGHT — Lambda Chaos Card */}
            <div className={`overflow-hidden ${CARD}`}>
              <div className="border-b border-slate-200 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 dark:border-slate-800 dark:text-slate-300">
                “I Tamed the Chaos” — Lambda Swarm Collapse
              </div>

              <div className="px-6 pt-6">
                <div
                  className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50
                            h-[260px] sm:h-[320px] md:h-[380px] lg:h-[440px] xl:h-[480px]"
                >
                  <Image
                    src="/assets/img/lambda-swarm-collapse.png"
                    alt="AWS Lambda swarm collapse illustration"
                    fill
                    sizes="(min-width: 1280px) 480px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className={`space-y-2 px-4 pb-4 pt-3 text-xs ${MUTED}`}>
                <p>
                  A snapshot of the “before” state — the kind of chaos that observability, retries, budgets, and guardrails are meant to calm down.
                </p>

                {LAMBDA_VIDEO_ID ? (
                  <div className="mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/60">
                    <div className="aspect-video w-full">
                      <iframe
                        className="h-full w-full"
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        src={`https://www.youtube.com/embed/${LAMBDA_VIDEO_ID}?rel=0`}
                        title="I Tamed the Chaos — Lambda swarm story"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Case studies */}
      <section id="case-studies" className={`scroll-mt-24 ${PAGE_SECTION}`}>
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
          <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>
            Mesh-Aware Case Studies
          </h2>
          <p className={`mt-2 max-w-3xl text-sm md:text-base ${MUTED}`}>
            Stories that live inside the mesh — proactive messaging, Lambda stabilization, and guardrails that keep systems predictable.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.title}
                href={cs.href}
                className={
                  "group flex flex-col rounded-2xl border px-4 py-4 shadow-sm transition " +
                  "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50 " +
                  "dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-400 dark:hover:bg-slate-900/80 " +
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
                }
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className={`text-sm font-semibold md:text-base ${HEADING}`}>{cs.title}</h3>
                  <span className={`px-3 py-1 text-xs font-medium ${PILL} bg-slate-50 dark:bg-slate-900/60`}>
                    {cs.pill}
                  </span>
                </div>

                <p className={`mt-2 text-xs md:text-sm ${MUTED}`}>{cs.summary}</p>

                <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Results
                </div>

                {cs.metrics?.length ? (
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {cs.metrics.slice(0, 3).map((m) => (
                      <div
                        key={`${m.label}-${m.value}`}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] dark:border-slate-700 dark:bg-slate-900/60"
                      >
                        <span className="text-slate-500 dark:text-slate-400">{m.label}</span>
                        <span
                          className={
                            m.value.includes("↓")
                              ? "text-rose-600"
                              : m.value.includes("↑") || m.value.includes("+")
                              ? "text-emerald-600"
                              : "text-sky-600"
                          }
                        >
                          {getMetricIcon(m.value)}
                        </span>
                        <span className={`font-semibold ${HEADING}`}>{m.value}</span>
                      </div>
                    ))}
                  </div>
                ) : null}

                <span className="mt-3 text-xs font-medium text-blue-700 transition group-hover:text-blue-800 dark:text-blue-300 dark:group-hover:text-blue-200">
                  Read case study →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="scroll-mt-24 bg-white pb-16 pt-10 dark:bg-slate-950 md:pb-20 md:pt-14">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>
            Mesh-Aware Resources
          </h2>
          <p className={`mt-2 max-w-3xl text-sm md:text-base ${MUTED}`}>
            The directory for everything that touches the Engineering Mesh — across websites, docs, and your long-form technical narrative.
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
            {PLAYLIST_ID ? (
              <ResourceRow
                title="YouTube Playlist — Engineering Mesh"
                description="All videos that explain the mesh, Lambda stories, and platform breakdowns."
                href={`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`}
              />
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
