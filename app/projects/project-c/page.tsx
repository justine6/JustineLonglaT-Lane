import { Metadata } from "next";
import SectionFadeIn from "@/components/ui/SectionFadeIn";

export const metadata: Metadata = {
  title: "System Design — Jutellane Platform Ecosystem | Jutellane Solutions",
  description:
    "A senior-level case study showing how the Jutellane ecosystem was engineered: multi-site architecture, static pipelines, unified brand layers, and platform integrations with Cal.com and Resend.",
};

export default function ProjectCPage() {
  return (
    <main className="page-shell">
      {/* Back link */}
      <SectionFadeIn delay={0.02} className="mb-4">
        <a>
          href="/projects"
          className="inline-flex items-center gap-1 text-xs font-medium text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-100"
         >
          <span className="text-base">←</span>
          <span>Back to projects</span>
        </a>
      </SectionFadeIn>

      {/* Heading */}
      <SectionFadeIn delay={0.06} className="space-y-5">
        <h1 className="page-title">System Design: Jutellane Platform Ecosystem</h1>
        <p className="page-subtitle max-w-3xl">
          How I unified a multi-site environment into a predictable, scalable ecosystem:
          the main platform, static documentation engines, blog pipelines, shared brand
          layers, scheduling integrations, and email automation.
        </p>
      </SectionFadeIn>

      {/* SECTION 1 — Platform & Repo Layout */}
      <SectionFadeIn as="section" delay={0.10} className="mt-10 space-y-4">
        <h2 className="section-heading">Platform & Repo Layout</h2>
        <p className="section-body">
          The Jutellane ecosystem is intentionally structured across a small number
          of focused repositories. Instead of loading everything into one monolith,
          each part of the platform owns a clear responsibility and deploys
          independently.
        </p>

<pre className="section-pre mt-4">
{String.raw`jutellane-main/
├── app/                   # Next.js (Main Platform)
├── components/            # Shared UI + animations + structure
├── lib/                   # Data loaders, mail handlers, helpers
├── public/                # OG images, PDFs, brand assets
├── content/               # Project metadata + publications
└── ...                    # (Cal.com + Resend integrations live here)

jutellane-blogs/
├── posts/                 # Blog posts (HTML/MD)
├── public/_data/          # Generated indexes
├── scripts/               # Static code generator
└── GitHub Pages pipeline

jutellane-docs/
├── docs/                  # Static documentation
├── public/                # PDFs + assets
└── GitHub Pages pipeline

_shared-brand/
└── brand assets, OG templates, icons, PDFs`}
</pre>

        <p className="section-body">
          This structure gives the ecosystem resilience. The main platform handles
          interactive flows, scheduling, and email automation. Docs and blogs remain
          static, safe, and independently deployable. The shared brand layer unifies
          every surface.
        </p>
      </SectionFadeIn>

      {/* SECTION 2 — Ecosystem Diagram Narrative */}
      <SectionFadeIn as="section" delay={0.14} className="mt-10 space-y-4">
        <h2 className="section-heading">Ecosystem Architecture</h2>
        <p className="section-body">
          After reorganizing the repos, I mapped the full multi-site ecosystem.
          The goal was simple: create a unified platform that feels like one product
          to visitors, but functions as isolated, stable systems underneath.
        </p>
        <p className="section-body">
          The main platform (Next.js on Vercel) acts as the brain of the ecosystem.
          It integrates with Cal.com for scheduling and with Resend for email
          automation. The blog and docs sites are static engines deployed through
          GitHub Pages, each driven by a dedicated static code generator and Actions pipeline.
          All three align through a shared brand layer and unified navigation.
        </p>

<pre className="section-pre mt-4">
{String.raw`                          JUTELLANE PLATFORM (Main Site)
                   Next.js · Vercel · Cal.com · Resend
                             jutellane.com
                                   │
       ┌───────────────────────────┼───────────────────────────┐
       │                           │                           │
       ▼                           ▼                           ▼
 Blog Generator             Docs Generator               Shared Brand System
 Markdown → HTML           Markdown → HTML               Logos, OG Images,
 GitHub Actions            GitHub Actions                PDFs, Tokens
       │                           │                           │
       ▼                           ▼                           ▼
 blogs.jutellane.com        docs.jutellane.com          /public brand CDN
 GitHub Pages               GitHub Pages`}
</pre>

        <p className="section-body">
          This design mirrors modern SaaS platforms: independent services bound
          together by shared identity and navigation contracts. It’s the balance
          between agility and long-term maintainability.
        </p>
      </SectionFadeIn>

      {/* SECTION 3 — Why This Architecture Demonstrates Senior-Level Engineering */}
      <SectionFadeIn as="section" delay={0.18} className="mt-10 space-y-4">
        <h2 className="section-heading">Why This Architecture Demonstrates Senior-Level Engineering</h2>
        <p className="section-body">
          What makes this architecture senior isn’t the number of repos — it’s the
          clarity of boundaries, the separation of concerns, and the operational
          predictability it creates.
        </p>

        <ul className="list-disc list-inside space-y-2 section-body">
          <li>
            <strong>Domain separation without fragmentation</strong> —
            each site has a sharp responsibility: main app logic, long-form writing,
            documentation, or brand identity.
          </li>
          <li>
            <strong>Independent deployment pipelines</strong> —
            Vercel, GitHub Pages, and Actions operate without interfering with each
            other, giving microservice-like resilience without microservice overhead.
          </li>
          <li>
            <strong>Platform-level integrations</strong> —
            Cal.com handles scheduling flows smoothly; Resend manages onboarding,
            confirmations, and brochure delivery.
          </li>
          <li>
            <strong>A cohesive brand system</strong> —
            visitors feel one product, not three disconnected sites.
          </li>
          <li>
            <strong>Engineered resilience</strong> —
            if blogs fail, the main site stays up. If docs break, blogs stay stable.
            No single repo can break the platform.
          </li>
        </ul>

        <p className="section-body">
          The greatest compliment to any architect is when the system looks simple
          from the outside. Under the surface, this ecosystem is a deliberately
          layered, reliable, future-ready platform — engineered, not improvised.
        </p>
      </SectionFadeIn>
    </main>
  );
}
