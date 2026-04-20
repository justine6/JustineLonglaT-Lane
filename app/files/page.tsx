// app/files/page.tsx
import Link from "next/link";

type ResourceType = "Business" | "Whitepaper" | "Narrative" | "Architecture";

type DownloadItem = {
  title: string;
  type: ResourceType;
  version?: string;
  description: string;
  href: string;
  cta: string;
};

const featuredDownloads: DownloadItem[] = [
  {
    title: "JLT Platform Operating Model — Whitepaper",
    type: "Whitepaper",
    version: "v1.0.0",
    description:
      "A concise overview of the JLT platform philosophy, governance model, control flow, and platform structure.",
    href: "/files/jlt-platform-operating-model-whitepaper-v1.0.0.pdf",
    cta: "Download whitepaper",
  },
  {
    title: "JLT Platform Operating Model — Multi-Plane Architecture",
    type: "Whitepaper",
    version: "v1.0.0",
    description:
      "Canonical reference covering the governed multi-plane architecture, platform lifecycle, and operating responsibilities.",
    href: "/files/jlt-platform-operating-model-multiplane-architecture-v1.0.0.pdf",
    cta: "Download architecture paper",
  },
];

const businessResources: DownloadItem[] = [
  {
    title: "JLT Consulting Brochure",
    type: "Business",
    description:
      "Overview of services, focus areas, and engagement models.",
    href: "/files/JLT-Consulting-Brochure.pdf",
    cta: "Download brochure",
  },
  {
    title: "Justine Longla Résumé",
    type: "Business",
    description:
      "Professional experience in platform engineering, DevSecOps, cloud architecture, and automation.",
    href: "/files/justine-longla-resume-2025.pdf",
    cta: "View résumé",
  },
];

const publications: DownloadItem[] = [
  {
    title: "JLT Platform Operating Model — Whitepaper",
    type: "Whitepaper",
    version: "v1.0.0",
    description:
      "Short overview of fragmentation, governance, RBAC, training strategy, and the platform operating model.",
    href: "/files/jlt-platform-operating-model-whitepaper-v1.0.0.pdf",
    cta: "Download PDF",
  },
  {
    title: "JLT Platform Operating Model — Multi-Plane Architecture",
    type: "Whitepaper",
    version: "v1.0.0",
    description:
      "Deep architecture reference describing the control, knowledge, execution, proof, narrative, and operations planes.",
    href: "/files/jlt-platform-operating-model-multiplane-architecture-v1.0.0.pdf",
    cta: "Download PDF",
  },
  {
    title:
      "JLT Platform Operating Model — Narrative: Scaling Platforms Through Operating Models",
    type: "Narrative",
    version: "v1.0.0",
    description:
      "Thought leadership resource on why platforms scale through operating models, not tools alone.",
    href: "/files/jlt-platform-operating-model-narrative-scaling-platforms-v1.0.0.pdf",
    cta: "Download PDF",
  },
];

const architectureArtifacts: DownloadItem[] = [
  {
    title: "Platform Control Flow",
    type: "Architecture",
    description:
      "Identity → Request → Billing → Entitlement → Access across the platform lifecycle.",
    href: "/files/platform-control-flow.pdf",
    cta: "Download diagram",
  },
  {
    title: "Access Control Architecture",
    type: "Architecture",
    description:
      "Entitlement-based access model showing roles, subscriptions, resource groups, and authorization flow.",
    href: "/files/access-control-architecture.pdf",
    cta: "Download diagram",
  },
  {
    title: "Platform Request Lifecycle",
    type: "Architecture",
    description:
      "How requests move through identity, control plane, execution, observability, and operations.",
    href: "/files/platform-request-lifecycle.pdf",
    cta: "Download diagram",
  },
  {
    title: "Deployment Guardrails",
    type: "Architecture",
    description:
      "Automation and guardrails used to keep deployments safe, reproducible, and observable.",
    href: "/files/deployment-guardrails.pdf",
    cta: "Download diagram",
  },
];

function badgeClasses(type: ResourceType) {
  switch (type) {
    case "Whitepaper":
      return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300";
    case "Narrative":
      return "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300";
    case "Architecture":
      return "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
    case "Business":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300";
    default:
      return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
  }
}

function ResourceCard({ item }: { item: DownloadItem }) {
  const isPdf = item.href.toLowerCase().endsWith(".pdf");

  return (
    <article className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70">
      <div className="mb-3 flex items-center gap-2">
        <span
          className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${badgeClasses(
            item.type,
          )}`}
        >
          {item.type}
        </span>

        {item.version ? (
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
            {item.version}
          </span>
        ) : null}
      </div>

      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
        {item.title}
      </h3>

      <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-300">
        {item.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        {isPdf ? (
          <>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-xs font-medium text-blue-600 hover:underline dark:text-blue-300"
            >
              Read online
            </a>

            <a
              href={item.href}
              download
              className="inline-flex text-xs font-medium text-slate-600 hover:underline dark:text-slate-300"
            >
              Download PDF
            </a>
          </>
        ) : (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-xs font-medium text-blue-600 hover:underline dark:text-blue-300"
          >
            {item.cta}
          </a>
        )}
      </div>
    </article>
  );
}

function ResourceSection({
  title,
  intro,
  items,
}: {
  title: string;
  intro?: string;
  items: DownloadItem[];
}) {
  return (
    <section className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          {title}
        </h2>
        {intro ? (
          <p className="max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            {intro}
          </p>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <ResourceCard key={`${item.title}-${item.href}`} item={item} />
        ))}
      </div>
    </section>
  );
}

export default function FilesPage() {
  return (
    <main
      id="main-content"
      className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8"
    >
      <header className="space-y-4">
        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 dark:bg-slate-800 dark:text-slate-300">
          JLT Platform Resources
        </span>

        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Downloads & Platform Resources
          </h1>

          <p className="max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            A structured resource center for whitepapers, narratives, brochures,
            diagrams, and platform reference material from JLT-Lane.
          </p>
        </div>
      </header>

      <ResourceSection
        title="Featured Downloads"
        intro="Start here with the core platform operating model and the deeper architecture reference."
        items={featuredDownloads}
      />

      <ResourceSection
        title="Business Resources"
        intro="Client-facing materials and professional profile documents."
        items={businessResources}
      />

      <ResourceSection
        title="Whitepapers & Narratives"
        intro="Knowledge-plane and narrative-plane resources covering the operating model, platform architecture, and systems-thinking point of view."
        items={publications}
      />

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900/60">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            Platform Toolkits
          </h2>
          <p className="max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Explore the supporting documentation and engineering replay material
            behind the JLT platform ecosystem.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950/50">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Automation Toolkit
            </h3>
            <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-300">
              Platform documentation covering automation guardrails, deployment
              workflows, artifacts, and operational procedures.
            </p>
            <a
              href="https://docs.justinelonglat-lane.com/automation-toolkit.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-xs font-medium text-blue-600 hover:underline dark:text-blue-300"
            >
              Open toolkit
            </a>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950/50">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Publishing & Engineering Replay
            </h3>
            <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-300">
              Deep-dive notes on scripts, guardrails, reproducible workflows,
              and platform publishing patterns.
            </p>
            <a
              href="https://blogs.justinelonglat-lane.com/docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-xs font-medium text-blue-600 hover:underline dark:text-blue-300"
            >
              Open replay
            </a>
          </article>
        </div>
      </section>

      <ResourceSection
        title="Architecture Artifacts"
        intro="Reference diagrams documenting control flow, access architecture, request lifecycle, and deployment guardrails."
        items={architectureArtifacts}
      />

      <p className="text-xs text-slate-500 dark:text-slate-400">
        Looking for something specific? Use the{" "}
        <Link
          href="/contact"
          className="font-medium text-blue-600 hover:underline dark:text-blue-300"
        >
          contact form
        </Link>{" "}
        and I’ll send it to you.
      </p>
    </main>
  );
}