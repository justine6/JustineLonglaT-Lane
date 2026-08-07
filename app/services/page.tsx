import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  CloudCog,
  KeyRound,
  LayoutDashboard,
  LineChart,
  Shield,
  Workflow,
} from "lucide-react";
import { ServiceCard } from "./components/ServiceCard";

const services = [
  {
    title: "Product Discovery & Architecture Definition",
    description:
      "Structured requirements discovery, workflow definition, MVP scoping, architectural analysis, delivery planning, and risk identification that turn a business idea into an implementation-ready product direction.",
    icon: ClipboardList,
  },
  {
    title: "Platform Engineering",
    description:
      "Platform architecture, infrastructure as code, CI/CD pipelines, deployment guardrails, and automation systems designed for long-term operability.",
    icon: Workflow,
  },
  {
    title: "DevSecOps Implementation",
    description:
      "Secure delivery pipelines, secrets handling, release controls, and security-focused workflows that reduce risk without slowing delivery.",
    icon: Shield,
  },
  {
    title: "Access Control & IAM",
    description:
      "RBAC, authentication flows, SSO, MFA, AWS IAM, Microsoft Entra ID, and authorization models that keep systems governed and auditable.",
    icon: KeyRound,
  },
  {
    title: "Cloud Security & Compliance",
    description:
      "Cloud security architecture, encryption strategy, secure storage, compliance-aware controls, and production hardening for modern platforms.",
    icon: CloudCog,
  },
  {
    title: "Observability & Operations",
    description:
      "Metrics, logging, alerting, dashboards, runbooks, and operational-readiness practices that improve reliability over time.",
    icon: LineChart,
  },
  {
    title: "Secure Business Platforms",
    description:
      "Secure portals, administrative dashboards, document workflows, and payment-enabled business systems built with access control and trust in mind.",
    icon: LayoutDashboard,
  },
];

const engagementTiers = [
  {
    name: "Intro Platform Consultation",
    price: "$250",
    summary:
      "A focused advisory session to discuss your objectives, identify immediate concerns, and recommend practical next steps.",
    includes:
      "Includes consultation notes and next-step recommendations. Detailed requirements and architecture are not included.",
  },
  {
    name: "Focused Architecture Consultation",
    price: "$500",
    summary:
      "A targeted review of one defined architecture, security, cloud, delivery, or operational concern.",
    includes:
      "Includes focused findings and written recommendations for the agreed review area.",
  },
  {
    name: "Product Discovery & MVP Definition",
    price: "From $2,500",
    summary:
      "A structured engagement that transforms a product idea into a bounded, feasible, and implementation-ready MVP direction.",
    includes:
      "May include requirements, user roles, workflows, MVP scope, assumptions, exclusions, risks, and a preliminary delivery roadmap.",
  },
  {
    name: "Platform Architecture & Systems Assessment",
    price: "From $5,000",
    summary:
      "A comprehensive assessment of architecture, security, cloud infrastructure, delivery workflows, operability, and modernization priorities.",
    includes:
      "Includes documented findings, prioritized recommendations, architectural direction, and roadmap guidance.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600">
              JLT-Lane Services
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Platform Engineering, DevSecOps, and Cloud Security Consulting
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              We define, design, build, secure, and operate cloud platforms and
              business systems with a strong focus on access control,
              automation, observability, and production reliability.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                href="/engineering-mesh"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Explore the Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">Core Services</h2>
          <p className="mt-3 text-lg text-slate-600">
            Practical consulting built around product definition, governance,
            delivery, security, and operations so your platform remains usable,
            secure, and reliable over time.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Engagement Options
            </h2>
            <p className="mt-3 text-lg leading-8 text-slate-600">
              Every successful platform begins with clear requirements and sound
              architectural decisions. Start with focused advice, define a
              feasible product, or move into a comprehensive assessment based on
              your organization&apos;s needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {engagementTiers.map((tier) => (
              <article
                key={tier.name}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  {tier.name}
                </p>
                <p className="mt-4 text-3xl font-bold text-slate-900">
                  {tier.price}
                </p>
                <p className="mt-4 leading-7 text-slate-600">{tier.summary}</p>

                <div className="mt-6 flex items-start gap-2 border-t border-slate-100 pt-5 text-sm leading-6 text-slate-700">
                  <CheckCircle2
                    className="mt-1 h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{tier.includes}</span>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-4xl text-sm leading-6 text-slate-500">
            Final scope, deliverables, schedule, and pricing are confirmed in
            writing before work begins. Implementation, cloud-consumption costs,
            third-party services, and ongoing support are quoted separately
            unless expressly included.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-slate-900 px-8 py-12 text-center text-white md:px-12">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Build the platform the right way: secure, scalable, and operable.
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you are defining a new product, improving cloud security,
            strengthening access control, or making delivery workflows more
            reliable, JLT-Lane can help you move forward with structure and
            confidence.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Schedule a Consultation
            </Link>

            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
