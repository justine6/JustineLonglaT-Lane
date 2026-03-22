// app/projects/data.ts
export type BasicProject = {
  slug: string;
  title: string;
  description: string;
  category?: string;
  featured?: boolean;
  pinned?: boolean;
  tags?: string[];
  image?: string;
  updated?: string;
};

export const PROJECTS: BasicProject[] = [
  {
    slug: "system-design-ecosystem-a",
    title: "System Design: Justine Longla T. Ecosystem",
    description:
      "How I unified the Justine Longla T. main hub, blog engine, and documentation sites into a consistent, reliable multi-site ecosystem with shared branding and predictable routing.",
    category: "Platform",
    featured: true,
    pinned: true,
    tags: ["platform engineering", "system design", "multi-site"],
    updated: "2025-01-24",
  },
  {
  slug: "jlt-lane-secure-billing-gateway",
  title: "JLT-Lane Secure Billing Gateway",
  description:
    "Stripe Checkout integration powering subscription billing and consulting payments for the JLT-Lane engineering platform.",
  category: "Platform",
  featured: true,
  pinned: true,
  tags: ["stripe", "payments", "next.js", "platform engineering", "vercel", "saas architecture"],
  image: "/images/projects/stripe-billing-architecture.png",
  updated: "2026-03-12",
 },  
  {
    slug: "automation-rescue-fixing-flaky-lambdas-a",
    title: "Automation Rescue: Fixing Flaky Lambdas",
    description:
      "Deep-dive reliability engagement where flaky Lambda workloads were stabilized using better observability, retries, and deployment hygiene.",
    category: "AWS",
    tags: ["aws", "serverless", "reliability"],
    updated: "2025-01-20",
  },
  {
    slug: "automation-rescue-fixing-flaky-lambdas-b",
    title: "Automation Rescue: Fixing Flaky Lambdas (Patterns Library)",
    description:
      "A companion project that extracts reusable patterns from the Lambda rescue engagement for future teams and workloads.",
    category: "AWS",
    tags: ["aws", "serverless"],
    updated: "2025-01-20",
  },
  {
    slug: "cicd-automation-bot",
    title: "CI/CD Automation Bot",
    description:
      "A pipeline-aware bot that posts rich deployment notifications into Microsoft Teams so every release is visible, auditable, and easy to follow.",
    category: "DevSecOps",
    tags: ["ci/cd", "chatops", "automation"],
    updated: "2025-01-18",
  },
  {
    slug: "launch-migrate",
    title: "Launch & Migrate",
    description:
      "A starter migration offering that moves teams into AWS with landing zones, observability, and guardrails instead of a risky ‘lift and hope’ approach.",
    category: "AWS",
    tags: ["aws", "migration", "foundations"],
    updated: "2025-01-17",
  },
  {
    slug: "operate-and-optimize",
    title: "Operate & Optimize",
    description:
      "Operational automation toolkit to reduce cost, highlight inefficiencies, and help teams get more value from their existing cloud workloads.",
    category: "Cloud",
    tags: ["operations", "cost optimization", "observability"],
    updated: "2025-01-15",
  },
  {
    slug: "platform-architecture-multi-site-deployment",
    title:
      "Platform Architecture & Multi-Site Deployment: JustineLonglaT-Lane Ecosystem",
    description:
      "Case study covering the architecture behind the JustineLonglaT-Lane sites: predictable routing, versioned assets, and independent CI/CD pipelines.",
    category: "Platform",
    tags: ["platform engineering", "architecture"],
    updated: "2025-01-14",
  },
  {
    slug: "project-b",
    title: "Project B",
    description:
      "A full technical exploration of Project B including design decisions, reliability improvements, and lessons learned from production traffic.",
    category: "Automation",
    tags: ["automation"],
    updated: "2025-01-10",
  },
  {
    slug: "secure-and-scale",
    title: "Secure & Scale",
    description:
      "DevSecOps transformation project implementing cloud security automation, scalable pipelines, and guardrails for production workloads.",
    category: "DevSecOps",
    tags: ["security", "devsecops", "compliance"],
    updated: "2025-01-09",
  },
  {
    slug: "system-design-ecosystem-b",
    title: "System Design: JustineLonglaT-Lane Ecosystem (Execution)",
    description:
      "End-to-end implementation story of the JustineLonglaT-Lane ecosystem as a resilient, observable, multi-site platform.",
    category: "Platform",
    tags: ["system design", "execution"],
    updated: "2025-01-08",
  },
  {
    slug: "teams-proactive-bot",
    title: "Teams Proactive Messaging Bot",
    description:
      "Real-world automation bot that triggers proactive notifications into Microsoft Teams directly from the command line using Teams Toolkit and Azure.",
    category: "Automation",
    tags: ["chatops", "teams", "automation"],
    updated: "2025-01-05",
  },
  {
    slug: "nouvo-ayiti-2075",
    title: "Nouvo Ayiti 2075",
    description:
      "Multilingual initiative platform that combines global reach, local presence, and strong branding to tell the story of Haiti’s long-term vision.",
    category: "Mission-Driven",
    tags: ["mission-driven", "branding", "multilingual"],
    updated: "2025-01-02",
  },
];