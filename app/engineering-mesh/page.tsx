// app/engineering-mesh/page.tsx
import Image from "next/image";
import Link from "next/link";

// ✅ Set these to real IDs when ready. Leave empty to show the placeholder UI.
const OVERVIEW_VIDEO_ID = ""; // e.g. "dQw4w9WgXcQ"
const LAMBDA_VIDEO_ID = ""; // optional, can reuse above
const PLAYLIST_ID = ""; // optional

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
];

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
];

const PORTALS = [
  {
    label: "Projects",
    sub: "All case studies",
    href: "/projects",
    accent: "from-blue-500/30 via-sky-400/10 to-transparent",
    dot: "bg-blue-400",
  },
  {
    label: "Docs",
    sub: "Tooling + playbooks",
    href: "https://docs.justinelonglat-lane.com",
    accent: "from-emerald-500/25 via-teal-400/10 to-transparent",
    dot: "bg-emerald-400",
  },
  {
    label: "Blog",
    sub: "Deep dives",
    href: "https://blogs.justinelonglat-lane.com",
    accent: "from-indigo-500/25 via-violet-400/10 to-transparent",
    dot: "bg-indigo-400",
  },
  {
    label: "Toolkit",
    sub: "Automation API model",
    href: "https://docs.justinelonglat-lane.com/toolkit.html",
    accent: "from-cyan-500/25 via-sky-300/10 to-transparent",
    dot: "bg-cyan-300",
  },
];

function getMetricIcon(value: string) {
  const v = value.toLowerCase();

  if (v.includes("↓") || v.includes("-")) return "▼";
  if (v.includes("↑") || v.includes("+")) return "▲";
  if (v.includes("added") || v.includes("tuned") || v.includes("fast") || v.includes("improved"))
    return "⚡";

  return "•";
}

export default function EngineeringMeshPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top hero / header (Hub World) */}
      <section className="relative flex min-h-[72vh] items-center overflow-hidden border-b border-slate-800">
        {/* Ambient background layers */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_20%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(900px_circle_at_80%_30%,rgba(16,185,129,0.22),transparent_55%),radial-gradient(700px_circle_at_50%_90%,rgba(14,165,233,0.18),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:64px_64px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/60" />
        </div>

        {/* Mesh lines */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <svg
            className="h-full w-full"
            viewBox="0 0 1200 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M220 470 C 360 380, 430 380, 520 460"
              className="stroke-sky-300/50 [stroke-width:2] [stroke-linecap:round]"
            />
            <path
              d="M520 460 C 650 420, 740 420, 860 460"
              className="stroke-emerald-300/40 [stroke-width:2] [stroke-linecap:round]"
            />
            <path
              d="M860 460 C 960 500, 1020 520, 1080 560"
              className="stroke-blue-300/35 [stroke-width:2] [stroke-linecap:round]"
            />

            {[
              { cx: 220, cy: 470 },
              { cx: 520, cy: 460 },
              { cx: 860, cy: 460 },
              { cx: 1080, cy: 560 },
            ].map((n, idx) => (
              <circle key={idx} cx={n.cx} cy={n.cy} r="4" className="fill-white/70" />
            ))}
          </svg>
        </div>

        {/* Content wrapper */}
        <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 pb-10 pt-16 md:px-6 md:pb-14 md:pt-20">
          {/* Badge row */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.8)]" />
              CASE STUDY HUB
            </span>

            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
              System map • CI/CD • Observability • Guardrails
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            The Justine Longla Engineering Mesh
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-200/90 md:text-base">
            What started as “just one website” became a multi-site engineering ecosystem:
            consulting, documentation, blogs, and projects — wired together with CI/CD,
            PowerShell automation, DNS discipline, Resend, and cloud-native guardrails.
          </p>

          {/* Micro “what you’ll get” bullets */}
          <ul className="grid max-w-3xl gap-2 text-sm text-slate-200/85 md:grid-cols-3">
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">A map of the ecosystem</li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">Case studies you can copy</li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">Proof of delivery & trust</li>
          </ul>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#overview-video"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <span className="text-base">▶</span>
              <span>Watch the overview</span>
            </Link>

            <Link
              href="#case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              View case studies
            </Link>

            <Link href="/" className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white">
              ← Back to Home
            </Link>
          </div>

          {/* Mini “hub tiles” */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { k: "Multi-site", v: "Consulting • Docs • Blog" },
              { k: "Delivery", v: "CI/CD + verification" },
              { k: "Trust", v: "Security + audit-ready" },
            ].map((x) => (
              <div key={x.k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs font-semibold tracking-wide text-white/70">{x.k}</div>
                <div className="mt-2 text-sm text-white/90">{x.v}</div>
              </div>
            ))}
          </div>

          {/* Portal grid — destinations */}
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
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${p.dot} shadow-[0_0_18px_rgba(255,255,255,0.35)]`}
                        />
                        <div className="text-sm font-semibold text-white/90">{p.label}</div>
                      </div>
                      <div className="mt-1 text-xs text-white/70">{p.sub}</div>
                    </div>

                    <span className="text-xs font-semibold text-white/60 transition group-hover:text-white/85">
                      {isExternal ? "↗" : "→"}
                    </span>
                  </div>

                  <div className="relative mt-4 h-[1px] w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-0 bg-white/35 transition-all duration-300 group-hover:w-full" />
                  </div>
                </>
              );

              const baseClass =
                "group relative rounded-2xl border border-white/10 bg-white/5 p-4 transition " +
                "hover:border-white/20 hover:bg-white/10 focus-visible:outline-none " +
                "focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

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

        {/* Floating specks */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-[12%] top-[22%] h-1.5 w-1.5 rounded-full bg-white/70 blur-[0.5px]" />
          <div className="absolute left-[68%] top-[28%] h-1 w-1 rounded-full bg-emerald-300/70 blur-[0.5px]" />
          <div className="absolute left-[44%] top-[58%] h-1 w-1 rounded-full bg-sky-300/70 blur-[0.5px]" />
          <div className="absolute left-[82%] top-[62%] h-1.5 w-1.5 rounded-full bg-blue-300/70 blur-[0.5px]" />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-slate-950" />
      </section>

      {/* In-page nav chips */}
      <div className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-4 md:px-6">
          <div className="flex flex-wrap gap-2">
            <Link className="chip" href="#problem">Problem</Link>
            <Link className="chip" href="#role">My role</Link>
            <Link className="chip" href="#solution">Solution</Link>
            <Link className="chip" href="#results">Results</Link>
            <Link className="chip" href="#timeline">Timeline</Link>
            <Link className="chip" href="#architecture">Architecture</Link>
            <Link className="chip" href="#case-studies">Case studies</Link>
            <Link className="chip" href="#resources">Resources</Link>
          </div>
        </div>
      </div>

      {/* Featured video */}
      <section id="overview-video" className="scroll-mt-24 border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
          <h2 className="text-lg font-semibold tracking-tight md:text-xl">Featured Video — Overview of the Mesh</h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-300 md:text-base">
            A walk-through of the mesh: how the sites connect, where CI/CD enforces trust,
            and how “Lambda chaos” was stabilized into something calm and predictable.
          </p>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
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
              <div className="flex aspect-video w-full items-center justify-center text-sm text-slate-400">
                JLT YouTube ID in{" "}
                <code className="ml-1 rounded bg-slate-900 px-1.5 py-0.5 text-xs">OVERVIEW_VIDEO_ID</code>{" "}
                to embed the overview.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="scroll-mt-24 border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
          <h2 className="text-lg font-semibold tracking-tight md:text-xl">The Problem: Platform Sprawl Without Guardrails</h2>
          <p className="mt-4 text-sm text-slate-300 md:text-base">
            As my consulting work, documentation, blogs, and engineering experiments grew,
            the platform behind them started to sprawl. Each new site or tool solved an
            immediate need — but together they introduced duplication, inconsistent
            deployments, and invisible risk.
          </p>

          <p className="mt-4 text-sm text-slate-300 md:text-base">
            Static sites lived next to dynamic ones. Some used CI pipelines, others were
            deployed manually. DNS, environment variables, and build behaviors weren’t
            always aligned. The system worked — but it wasn’t *designed*.
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300 md:text-base">
            <li>Multiple sites with different deployment methods</li>
            <li>Inconsistent environment configuration</li>
            <li>No shared observability or operational guardrails</li>
            <li>Manual fixes instead of systemic solutions</li>
          </ul>
          {/* TODO: break into 2–3 paragraphs + a short bullet list of symptoms */}
        </div>
      </section>

      {/* Role */}
      <section id="role" className="scroll-mt-24 border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
          <h2 className="text-lg font-semibold tracking-tight md:text-xl">My Role: Acting as Platform Engineer</h2>
          <p className="mt-4 text-sm text-slate-300 md:text-base">
            I stepped into the role of a platform engineer — not just shipping features,
            but shaping the environment in which every site and service operated.
          </p>

          <p className="mt-4 text-sm text-slate-300 md:text-base">
            My focus shifted from “build the next thing” to “make everything predictable.”
            That meant aligning CI/CD, standardizing environments, reducing operational
            noise, and introducing guardrails that made safe delivery the default.
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300 md:text-base">
            <li>Designed and unified CI/CD pipelines across sites</li>
            <li>Standardized DNS, environment variables, and hosting behavior</li>
            <li>Introduced observability and stability patterns for cloud workloads</li>
            <li>Built reusable automation to replace manual operations</li>
          </ul>
          {/* TODO: paragraphs + bullets (ownership, decisions, tools, tradeoffs) */}
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="scroll-mt-24 border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
          <h2 className="text-lg font-semibold tracking-tight md:text-xl">The Solution: The Engineering Mesh Architecture</h2>
          <p className="mt-4 text-sm text-slate-300 md:text-base">
            The result was the <strong>Engineering Mesh</strong> — a shared platform layer
            connecting consulting, documentation, blogs, and projects through common
            deployment, hosting, and operational practices.
          </p>

          <p className="mt-4 text-sm text-slate-300 md:text-base">
            Instead of isolated sites, the system became a coordinated ecosystem. CI/CD
            pipelines enforced consistency. DNS and hosting rules were standardized.
            Automation handled repetitive tasks. Guardrails made reliability and security
            part of the architecture — not afterthoughts.
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300 md:text-base">
            <li>Shared CI/CD patterns across all web properties</li>
            <li>Consistent DNS and environment routing</li>
            <li>Automated deployment and verification steps</li>
            <li>Cloud guardrails for stability, cost, and security</li>
          </ul>
          {/* TODO: narrative content + key principles */}
        </div>
      </section>

      {/* Results */}
      <section id="results" className="scroll-mt-24 border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
          <h2 className="text-lg font-semibold tracking-tight md:text-xl">
            Results: What the Engineering Mesh Made Possible
          </h2>

          <p className="mt-4 max-w-3xl text-sm text-slate-300 md:text-base">
            The Engineering Mesh transformed a collection of independent projects into a
            coherent, reliable platform. Delivery accelerated because environments became
            predictable. Stability improved because failures were observable and repeatable.
            Operational overhead dropped as automation replaced manual fixes.
          </p>

          {/* 🔥 ADD THIS ROW RIGHT HERE */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-200">
              Predictable environments → faster delivery
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-200">
              Observability → fewer production surprises
            </div>
          </div>
          {/* Before vs After comparison */}
          <div className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Operational Transformation
        </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-rose-400/20 bg-rose-500/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-300">
                Before the Mesh
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Manual fixes and environment drift</li>
                <li>Inconsistent deployment processes</li>
                <li>Limited visibility into failures</li>
                <li>Reactive operations and firefighting</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                After the Mesh
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Standardized CI/CD and environments</li>
                <li>Predictable, repeatable delivery</li>
                <li>Observability built into workflows</li>
                <li>Proactive, automation-driven operations</li>
              </ul>
            </div>
          </div>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-slate-300 md:text-base">
            <li>Faster, more consistent deployments</li>
            <li>Reduced production surprises through standardized pipelines</li>
            <li>Improved visibility into system behavior and failures</li>
            <li>Lower operational effort thanks to automation and guardrails</li>
          </ul>
        </div>
      </section>
      {/* What this demonstrates */}
      <section
        id="demonstrates"
        className="scroll-mt-24 border-b border-slate-900 bg-slate-950"
      >
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
          <h2 className="text-lg font-semibold tracking-tight md:text-xl">
            What This Case Study Demonstrates
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-300 md:text-base">
            This isn’t just a collection of sites — it’s a platform story: predictable delivery,
            operational maturity, and security-first engineering across an evolving ecosystem.
          </p>
          <ul className="mt-6 space-y-4 text-sm text-slate-300 md:text-base">
            <li>
              <span className="font-semibold text-slate-100">Platform thinking:</span>{" "}
              Delivery systems, environments, and automation are treated as first-class engineering products.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Operational maturity:</span>{" "}
              Repeatable, observable workflows replace ad-hoc fixes and reactive firefighting.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Security + trust:</span>{" "}
              Guardrails reduce risk, enforce consistency, and improve audit readiness by default.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Scalable foundations:</span>{" "}
              The ecosystem grows in capability without multiplying operational chaos.
            </li>
          </ul>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="scroll-mt-24 border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
          <h2 className="text-lg font-semibold tracking-tight md:text-xl">
            How the Mesh Came Together
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-300 md:text-base">
            Each layer built on the previous one — turning scattered work into a deliberate, repeatable system.
          </p>

          <ol className="mt-6 space-y-4 border-l border-slate-800 pl-4 md:mt-8 md:space-y-5 md:pl-6">
            {TIMELINE.map((item) => (
              <li key={item.year} className="relative">
                <div className="absolute -left-2 top-1.5 h-3 w-3 rounded-full border border-blue-300 bg-slate-950 md:-left-2.5" />
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300/90">{item.year}</div>
                <div className="mt-1 text-sm font-semibold text-slate-50 md:text-base">{item.title}</div>
                <p className="mt-1 max-w-3xl text-xs text-slate-300 md:text-sm">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="scroll-mt-24 border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
          <h2 className="text-lg font-semibold tracking-tight md:text-xl">
            Architecture at a Glance
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-300 md:text-base">
            The mesh connects consulting, docs, blogs, and projects with shared CI/CD, DNS, and platform services — in one frame.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
              <div className="border-b border-slate-800 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                Engineering Mesh Architecture Diagram
              </div>
              <div className="relative">
                <Image
                  src="/assets/img/engineering-mesh-diagram.png"
                  alt="Diagram of the Justine Longla Engineering Mesh architecture"
                  width={900}
                  height={600}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-auto w-full object-contain"
                />
              </div>
              <p className="px-4 pb-4 pt-3 text-xs text-slate-300">
                How IONOS DNS, Vercel, static sites, and shared services connect into one mesh.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
              <div className="border-b border-slate-800 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                “I Tamed the Chaos” — Lambda Swarm Collapse
              </div>

              <div className="relative">
                <Image
                  src="/assets/img/lambda-swarm-collapse.png"
                  alt="AWS Lambda swarm collapse illustration"
                  width={900}
                  height={600}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="space-y-2 px-4 pb-4 pt-3 text-xs text-slate-300">
                <p>
                  A snapshot of the “before” state — the kind of chaos that observability, retries, budgets, and guardrails are meant to calm down.
                </p>

                {LAMBDA_VIDEO_ID && (
                  <div className="mt-2 overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80">
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
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case-study grid */}
      <section id="case-studies" className="scroll-mt-24 border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
          <h2 className="text-lg font-semibold tracking-tight md:text-xl">Mesh-Aware Case Studies</h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-300 md:text-base">
            Stories that live inside the mesh — proactive messaging, Lambda stabilization, and guardrails that keep systems predictable.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.title}
                href={cs.href}
                className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4 transition hover:border-blue-500/80 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/50"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold text-slate-50 md:text-base">{cs.title}</h3>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200">
                    {cs.pill}
                  </span>
                </div>

                <p className="mt-2 text-xs text-slate-300 md:text-sm">{cs.summary}</p>

                <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Results</div>

                {cs.metrics?.length ? (
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {cs.metrics.slice(0, 3).map((m) => (
                      <div
                        key={`${m.label}-${m.value}`}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px]"
                      >
                        <span className="text-slate-400">{m.label}</span>

                        <span
                          className={
                            m.value.includes("↓")
                              ? "text-rose-300"
                              : m.value.includes("↑") || m.value.includes("+")
                              ? "text-emerald-300"
                              : "text-sky-300"
                          }
                        >
                          {getMetricIcon(m.value)}
                        </span>

                        <span className="font-semibold text-white transition group-hover:text-blue-200">{m.value}</span>
                      </div>
                    ))}
                  </div>
                ) : null}

                <span className="mt-3 text-xs font-medium text-blue-300 group-hover:text-blue-200">Read case study →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Tech Stack & Tooling */}
      <section id="stack" className="scroll-mt-24 border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
          <h2 className="text-lg font-semibold tracking-tight md:text-xl">
            Tech Stack & Tooling Used
          </h2>

          <p className="mt-2 max-w-3xl text-sm text-slate-300 md:text-base">
            The Engineering Mesh runs on a modern, automation-first toolchain designed
            for reliability, repeatability, and secure delivery.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">

            {/* Frontend / Platform */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                Platform & Frontend
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Next.js (App Router)</li>
                <li>React + TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Vercel hosting</li>
              </ul>
            </div>

            {/* DevOps / CI/CD */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                DevOps & Delivery
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>GitHub Actions CI/CD</li>
                <li>PowerShell automation</li>
                <li>DNS via IONOS</li>
                <li>Environment-based deployments</li>
              </ul>
            </div>

            {/* Cloud / Reliability */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Cloud & Reliability
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>AWS Lambda (serverless)</li>
                <li>Logging & observability patterns</li>
                <li>Cost-aware guardrails</li>
                <li>Failure-tolerant workflows</li>
              </ul>
            </div>

            {/* Communication / Integrations */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
                Integrations
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Resend (transactional email)</li>
                <li>Cal.com scheduling</li>
                <li>Static content toolchain</li>
                <li>Cross-site shared services</li>
              </ul>
            </div>

            {/* Security / Governance */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                Security & Governance
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Policy-driven guardrails</li>
                <li>Config consistency checks</li>
                <li>Environment isolation</li>
                <li>Secure defaults by design</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="scroll-mt-24 bg-slate-950 pb-16 pt-10 md:pb-20 md:pt-14">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="text-lg font-semibold tracking-tight md:text-xl">Mesh-Aware Resources</h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-300 md:text-base">
            The directory for everything that touches the Engineering Mesh — across websites, docs, and your long-form technical narrative.
          </p>

          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
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

interface ResourceRowProps {
  title: string;
  description: string;
  href: string;
}

function ResourceRow({ title, description, href }: ResourceRowProps) {
  const isExternal = href.startsWith("http");

  const Shared = (
    <>
      <div>
        <div className="text-sm font-semibold text-slate-50">{title}</div>
        <p className="mt-1 text-xs text-slate-300 md:text-sm">{description}</p>
      </div>
      <div className="text-xs font-medium text-blue-300 md:text-sm">Visit {isExternal ? "site" : "page"} →</div>
    </>
  );

  const base =
    "flex items-center justify-between gap-4 border-b border-slate-800 px-4 py-3 last:border-b-0 " +
    "hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/50";

  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
      {Shared}
    </a>
  ) : (
    <Link href={href} className={base}>
      {Shared}
    </Link>
  );
}
