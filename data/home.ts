// src/data/home.ts

export const heroExplainerData = {
  eyebrow: "The Architecture",
  title: "Cloud Confidence. Delivered.",
  description:
    "This diagram is the map of how I build platforms: clear separation of concerns, strong identity boundaries, and automation-first delivery — so teams ship faster without expanding blast radius.",
  bullets: [
    {
      title: "Control Plane",
      desc: "Identity, policy, workflows, governance.",
    },
    {
      title: "Execution Plane",
      desc: "Runtime services, CI/CD, data flows, reliability.",
    },
    {
      title: "Visibility Plane",
      desc: "Telemetry, cost, posture, feedback loops.",
    },
  ],
  chips: [
    "Automation-first delivery",
    "Guardrails + observability",
    "Compliance-ready patterns",
  ],
  ctas: [
    { label: "Schedule Intro Call", href: "/booking", variant: "primary" as const },
    { label: "View Projects", href: "/projects", variant: "secondary" as const },
  ],
};