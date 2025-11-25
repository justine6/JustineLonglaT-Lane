// app/engineering-mesh/page.tsx
import Image from "next/image";
import Link from "next/link";

const OVERVIEW_VIDEO_ID = "YOUR_OVERVIEW_VIDEO_ID"; // e.g. "dQw4w9WgXcQ"
const LAMBDA_VIDEO_ID = "YOUR_LAMBDA_VIDEO_ID";     // optional, can reuse above
const PLAYLIST_ID = "YOUR_PLAYLIST_ID";             // optional

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
  },
  {
    title: "Teams Proactive Messaging Bot",
    summary:
      "ChatOps bot that keeps stakeholders ahead of deployments, status, and release events.",
    href: "/projects/teams-proactive-messaging-bot",
    pill: "ChatOps",
  },
  {
    title: "Automation Rescue: Fixing Flaky Lambdas",
    summary:
      "From noisy, failing Lambdas to calm, observable, and cost-aware serverless functions.",
    href: "/projects/automation-rescue-fixing-flaky-lambdas",
    pill: "Serverless",
  },
  {
    title: "Guardrails & Optimize Engine",
    summary:
      "Guardrails, policies, and cost-optimization pipelines wrapped around cloud workloads.",
    href: "/projects/guardrails-optimize-engine",
    pill: "Guardrails",
  },
  {
    title: "Secure & Scale",
    summary:
      "Security-first platform improvements layered on top of existing infrastructure.",
    href: "/projects/secure-and-scale",
    pill: "Security",
  },
];

export default function EngineeringMeshPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top hero / header */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/80">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 pb-10 pt-16 md:px-6 md:pb-14 md:pt-20">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300/80">
            Case Study Hub
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            The Justine Longla Engineering Mesh
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-200/90 md:text-base">
            What started as “just one website” became a multi-site engineering
            ecosystem: consulting, documentation, blogs, and projects — all
            wired together with CI/CD, PowerShell, DNS, Resend, and cloud-native
            best practices.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#overview-video"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
            >
              <span className="text-base">▶</span>
              <span>Watch the overview</span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-800/70"
            >
              View all projects
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-slate-100"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Featured video */}
      <section
        id="overview-video"
        className="border-b border-slate-900 bg-slate-950"
      >
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
          <h2 className="text-lg font-semibold tracking-tight md:text-xl">
            Featured Video — Overview of the Mesh
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-300 md:text-base">
            This video walks through the full mesh: how the sites are wired,
            where CI/CD comes in, and how the Lambda chaos was tamed into a
            stable, predictable system.
          </p>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
            {OVERVIEW_VIDEO_ID ? (
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${OVERVIEW_VIDEO_ID}?rel=0`}
                  title="Engineering Mesh overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="flex aspect-video w-full items-center justify-center text-sm text-slate-400">
                Add your YouTube video ID in{" "}
                <code className="ml-1 rounded bg-slate-900 px-1.5 py-0.5 text-xs">
                  OVERVIEW_VIDEO_ID
                </code>{" "}
                to embed the overview.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mesh timeline */}
      <section className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
          <h2 className="text-lg font-semibold tracking-tight md:text-xl">
            How the Mesh Came Together
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-300 md:text-base">
            Each layer built on top of the previous one — turning scattered
            projects into a deliberate engineering mesh.
          </p>

          <ol className="mt-6 space-y-4 border-l border-slate-800 pl-4 md:mt-8 md:space-y-5 md:pl-6">
            {TIMELINE.map((item) => (
              <li key={item.year} className="relative">
                <div className="absolute -left-2 top-1.5 h-3 w-3 rounded-full border border-blue-300 bg-slate-950 md:-left-2.5" />
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300/90">
                  {item.year}
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-50 md:text-base">
                  {item.title}
                </div>
                <p className="mt-1 max-w-3xl text-xs text-slate-300 md:text-sm">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Architecture section */}
      <section className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
          <h2 className="text-lg font-semibold tracking-tight md:text-xl">
            Architecture at a Glance
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-300 md:text-base">
            The mesh connects consulting, docs, blogs, and projects with shared
            CI/CD, DNS, and platform services. These visuals tell the story in a
            single frame.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* Mesh diagram card */}
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
                  className="h-auto w-full object-contain"
                />
              </div>
              <p className="px-4 pb-4 pt-3 text-xs text-slate-300">
                Visual overview of how IONOS DNS, Vercel, static sites, and
                shared services come together into a single mesh.
              </p>
            </div>

            {/* Lambda swarm card */}
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
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="px-4 pb-4 pt-3 text-xs text-slate-300 space-y-2">
                <p>
                  This visual represents the Lambda chaos before observability,
                  retries, and guardrails were added.
                </p>
                {LAMBDA_VIDEO_ID && (
                  <div className="mt-2 overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80">
                    <div className="aspect-video w-full">
                      <iframe
                        className="h-full w-full"
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
      <section className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
          <h2 className="text-lg font-semibold tracking-tight md:text-xl">
            Mesh-Aware Case Studies
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-300 md:text-base">
            Stories that live inside the mesh — from proactive messaging to
            Lambda stabilization and guardrails.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.title}
                href={cs.href}
                className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4 transition hover:border-blue-500/80 hover:bg-slate-900"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold text-slate-50 md:text-base">
                    {cs.title}
                  </h3>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200">
                    {cs.pill}
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-300 md:text-sm">
                  {cs.summary}
                </p>
                <span className="mt-3 text-xs font-medium text-blue-300 group-hover:text-blue-200">
                  Read case study →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mesh-aware resources */}
      <section className="bg-slate-950 pb-16 pt-10 md:pb-20 md:pt-14">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="text-lg font-semibold tracking-tight md:text-xl">
            Mesh-Aware Resources
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-300 md:text-base">
            Think of this as the “directory” for everything that touches the
            Engineering Mesh — across websites, videos, and platforms.
          </p>

          <div className="mt-6 space-y-2 rounded-2xl border border-slate-800 bg-slate-900/80">
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
              description="Static documentation site powered by HTML, PowerShell tooling, and GitHub Pages."
              href="https://docs.justinelonglat-lane.com"
            />
            <ResourceRow
              title="Blog Site"
              description="Deep-dive technical articles, from CI/CD to DevSecOps and platform reliability."
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
      <div className="text-xs font-medium text-blue-300 md:text-sm">
        Visit {isExternal ? "site" : "page"} →
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-4 border-b border-slate-800 px-4 py-3 last:border-b-0 hover:bg-slate-900"
      >
        {Shared}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="flex items-center justify-between gap-4 border-b border-slate-800 px-4 py-3 last:border-b-0 hover:bg-slate-900"
    >
      {Shared}
    </Link>
  );
}
