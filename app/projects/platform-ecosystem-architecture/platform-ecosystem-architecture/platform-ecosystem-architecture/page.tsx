"use client";

import { Metadata } from "next";
import { motion } from "framer-motion";
import {
  Network,
  GitBranch,
  Globe2,
  MailCheck,
  ServerCog,
  ArrowRight,
  CheckCircle2,
  Timer,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Platform Architecture & Multi-Site Deployment — JustineLonglaT-Lane Engineering Ecosystem",
  description:
    "How a single personal site evolved into a resilient multi-site engineering ecosystem with clean DNS, robust CI/CD, and a unified content and email infrastructure.",
  openGraph: {
    title:
      "Platform Architecture & Multi-Site Deployment — JustineLonglaT-Lane Engineering Ecosystem",
    description:
      "A platform engineering case study of DNS, CI/CD, multi-site routing, storage, email, and content governance powering the Jutellane ecosystem.",
    url: "https://jutellane.com/projects/platform-ecosystem-architecture",
    type: "article",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const sections = [
  {
    icon: Globe2,
    title: "DNS & Domain Architecture",
    colorClass: "border-blue-500",
    bullets: [
      "Resolved conflicts between root domain and multiple subdomains.",
      "Separated Vercel-managed and GitHub Pages–managed DNS cleanly.",
      "Fixed A vs CNAME record mistakes and redirect loops.",
      "Verified SPF, DKIM, MX, and Return-Path for Resend email delivery.",
    ],
  },
  {
    icon: GitBranch,
    title: "Multi-Environment CI/CD Workflow",
    colorClass: "border-emerald-500",
    bullets: [
      "Preview, development, and production environments wired to branches.",
      "GitHub Actions enforcing linting, type checks, and formatting gates.",
      "Release tags mapped to stable production deployments.",
      "PR builds validating changes end-to-end before merging.",
    ],
  },
  {
    icon: ServerCog,
    title: "Vercel Runtime & Routing Architecture",
    colorClass: "border-indigo-500",
    bullets: [
      "Eliminated ENOTFOUND and module resolution errors.",
      "Fixed duplicate and catch-all routes across nested segments.",
      "Resolved H-runtime blocking static exports where static was required.",
      "Standardized /public asset paths and image usage across sites.",
    ],
  },
  {
    icon: MailCheck,
    title: "Storage & Email Infrastructure",
    colorClass: "border-amber-500",
    bullets: [
      "Azure Blob Storage configured for shared assets and documents.",
      "Resend wired to the /join endpoint for transactional email.",
      "Admin notifications and user confirmations implemented.",
      "Rate limiting and throttling added to protect endpoints.",
    ],
  },
];

const timeline = [
  {
    phase: "Phase 1 — From Single Site to Ecosystem",
    when: "Early 2025",
    details:
      "Started from a single personal site and grew into a multi-site ecosystem: marketing, docs, blogs, projects, and Nouvo Ayiti 2075 foundation.",
  },
  {
    phase: "Phase 2 — DNS, Environments & CI/CD",
    when: "Spring 2025",
    details:
      "Stabilized DNS, defined subdomain responsibilities, and introduced preview/dev/prod environments backed by GitHub Actions.",
  },
  {
    phase: "Phase 3 — Storage, Email & Content Governance",
    when: "Summer 2025",
    details:
      "Brought Azure Blob Storage and Resend together with strict content metadata conventions and posting formats across all sites.",
  },
  {
    phase: "Phase 4 — Platform Reliability & Observability",
    when: "Ongoing",
    details:
      "Continuous refinement of logging, rate limiting, and rollout patterns to support future subdomains and services safely.",
  },
];

const outcomes = [
  "A unified engineering ecosystem spanning marketing, docs, blogs, projects, and foundation sites.",
  "Predictable, branch-based deployment flows through GitHub Actions and Vercel.",
  "Stable DNS and SSL coverage across all domains and subdomains.",
  "A consistent content and metadata model for projects and long-form posts.",
  "A scalable foundation ready for new services, subdomains, and automations.",
];

export default function PlatformEcosystemArchitecturePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="relative border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-sky-200"
          >
            <Network className="h-3 w-3" />
            Platform Engineering · Multi-Site Architecture
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-5 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
          >
            Platform Architecture & Multi-Site Deployment:{" "}
            <span className="bg-gradient-to-r from-sky-400 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
              Building the JustineLonglaT-Lane Engineering Ecosystem
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-3xl text-base text-slate-300 sm:text-lg"
          >
            What started as a single personal website grew into a resilient,
            observable, multi-site platform: marketing, docs, blogs, projects,
            and the Nouvo Ayiti 2075 foundation — all operating on clean DNS,
            disciplined CI/CD, and a unified content engine.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              Stable DNS & SSL
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1">
              <GitBranch className="h-4 w-4 text-sky-400" />
              Multi-environment CI/CD
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1">
              <MailCheck className="h-4 w-4 text-amber-300" />
              Resend Email Infrastructure
            </span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4"
          >
            <div className="space-y-1">
              <p className="text-xs uppercase text-slate-400">Sites</p>
              <p className="font-medium text-slate-100">
                Marketing, Docs, Blogs, Projects, Foundation
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase text-slate-400">Environments</p>
              <p className="font-medium text-slate-100">
                Preview · Development · Production
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase text-slate-400">Infra</p>
              <p className="font-medium text-slate-100">
                Vercel · GitHub Actions · Azure Blob · Resend
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase text-slate-400">Domains</p>
              <p className="font-medium text-slate-100">
                jutellane.com · *.jutellane.com · nouvoayiti2075.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Context */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-12 space-y-4"
        >
          <h2 className="text-2xl font-semibold text-slate-50">
            Context: From Personal Site to Platform
          </h2>
          <p className="text-slate-300">
            The Jutellane ecosystem didn&apos;t start as a platform initiative.
            It started as a simple personal presence — a single site. Over time,
            real engineering needs emerged:
          </p>
          <ul className="grid gap-2 text-slate-300 sm:grid-cols-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
              Marketing site for consulting and services.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
              Documentation hub for tools and reference material.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
              Blog site for deep-dive technical content.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
              Project case studies for concrete engineering stories.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
              Nouvo Ayiti 2075 foundation site for mission-driven work.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
              A multi-language content engine serving global audiences.
            </li>
          </ul>
          <p className="text-slate-300">
            This case study captures the platform-level engineering that stitched
            all of this together: DNS, environments, deployments, storage, email,
            and content governance.
          </p>
        </motion.section>

        {/* Architecture overview grid */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mb-12 grid gap-6 md:grid-cols-2"
        >
          {sections.map((section) => (
            <motion.article
              key={section.title}
              variants={fadeUp}
              className={`h-full rounded-2xl border bg-slate-900/60 p-5 shadow-sm shadow-slate-900/60 ${section.colorClass}`}
            >
              <div className="flex items-center gap-3">
                <section.icon className="h-5 w-5 text-sky-300" />
                <h3 className="text-base font-semibold text-slate-50">
                  {section.title}
                </h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {section.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.section>

        {/* ASCII-ish architecture flow */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-slate-50">
            High-Level Architecture Flow
          </h2>
          <p className="mt-3 text-slate-300">
            At a glance, the platform can be visualized as a set of flows from
            DNS to content and infrastructure:
          </p>

          <pre className="mt-4 overflow-x-auto rounded-2xl bg-slate-950/80 p-4 text-xs text-slate-200">
{`               +---------------------------+
               |         Users             |
               +-------------+-------------+
                             |
                             v
                 +-----------+-----------+
                 |      IONOS DNS        |
                 +-----------+-----------+
                             |
     +-----------------------+-----------------------------+
     |                       |                             |
     v                       v                             v
+----+------+        +-------+--------+            +------+--------+
| jutellane |        | docs.jutellane |            | blogs.jutellane |
|   .com    |        |     .com       |            |      .com       |
+----+------+        +-------+--------+            +------+--------+
     |                        |                            |
     v                        v                            v
+----+------------------------+----------------------------+--------+
|                          Vercel / Static Hosting                 |
+----+------------------------+----------------------------+--------+
     |                        |                            |
     v                        v                            v
  Marketing            Documentation                   Blog & Projects
 (Next.js)               (Static / HTML)               (Static / HTML)

     +--------------------------------------------------------------+
     |                Shared Services & Integrations                |
     |  - Azure Blob Storage (assets, docs)                         |
     |  - Resend (/join endpoint, notifications, confirmations)     |
     |  - GitHub Actions (CI/CD, tags, PR builds)                   |
     +--------------------------------------------------------------+`}
          </pre>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mb-12"
        >
          <div className="flex items-center gap-2">
            <Timer className="h-5 w-5 text-sky-300" />
            <h2 className="text-2xl font-semibold text-slate-50">
              Delivery Timeline
            </h2>
          </div>
          <div className="mt-5 space-y-4 border-l border-slate-700 pl-4">
            {timeline.map((item) => (
              <div key={item.phase} className="relative pl-4">
                <div className="absolute left-[-0.53rem] top-1 h-3 w-3 rounded-full border border-sky-400 bg-slate-950" />
                <p className="text-xs font-medium uppercase text-slate-400">
                  {item.when}
                </p>
                <h3 className="text-sm font-semibold text-slate-50">
                  {item.phase}
                </h3>
                <p className="mt-1 text-sm text-slate-300">{item.details}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Outcomes */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mb-12 rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-900 p-6"
        >
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-emerald-100">
            <CheckCircle2 className="h-5 w-5" />
            Outcomes
          </h2>
          <p className="mt-3 text-slate-100">
            The result is more than a collection of websites — it&apos;s a
            cohesive engineering platform.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-emerald-50/90">
            {outcomes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <ArrowRight className="mt-0.5 h-4 w-4" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Cross-site links */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mb-4"
        >
          <h2 className="text-lg font-semibold text-slate-50">
            Explore the Ecosystem
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            This architecture powers multiple independent yet connected sites:
          </p>
          <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="https://jutellane.com"
              className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 hover:border-sky-500 hover:bg-slate-900"
            >
              <span>Jutellane Marketing Site</span>
              <ArrowRight className="h-4 w-4 text-sky-400 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://docs.jutellane.com"
              className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 hover:border-sky-500 hover:bg-slate-900"
            >
              <span>Documentation Hub</span>
              <ArrowRight className="h-4 w-4 text-sky-400 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://blogs.jutellane.com"
              className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 hover:border-sky-500 hover:bg-slate-900"
            >
              <span>Blog & Project Case Studies</span>
              <ArrowRight className="h-4 w-4 text-sky-400 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://foundation.nouvoayiti2075.com"
              className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 hover:border-sky-500 hover:bg-slate-900"
            >
              <span>Nouvo Ayiti 2075 Foundation</span>
              <ArrowRight className="h-4 w-4 text-sky-400 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
