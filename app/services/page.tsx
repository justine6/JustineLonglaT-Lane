import Link from "next/link";
import {
  Shield,
  Workflow,
  KeyRound,
  CloudCog,
  LineChart,
  LayoutDashboard,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { ServiceCard } from "./components/ServiceCard";

const services = [
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
      "RBAC, authentication flows, SSO, MFA, AWS IAM, Azure AD, and authorization models that keep systems governed and auditable.",
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
      "Metrics, logging, alerting, dashboards, runbooks, and operational readiness practices that improve reliability over time.",
    icon: LineChart,
  },
  {
    title: "Secure Business Platforms",
    description:
      "Secure portals, admin dashboards, document workflows, and payment-enabled business systems built with access control and trust in mind.",
    icon: LayoutDashboard,
  },
];

const engagementTiers = [
  {
    name: "Intro Platform Consultation",
    price: "$250",
    summary: "A focused session for clarity, direction, and next-step recommendations.",
  },
  {
    name: "Platform Architecture Review",
    price: "$500",
    summary: "A deeper review of architecture, security, and deployment workflows with written recommendations.",
  },
  {
    name: "Platform Architecture & Systems Assessment",
    price: "$5,000",
    summary: "A comprehensive assessment with strategic findings, roadmap guidance, and follow-up discussion.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600">
              JLT-Lane Services
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Platform Engineering, DevSecOps, and Cloud Security Consulting
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 max-w-3xl">
              We design, build, secure, and operate cloud platforms and secure business
              systems with a strong focus on access control, automation, observability,
              and production reliability.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-white font-semibold hover:bg-slate-800 transition"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="/engineering-mesh"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                Explore the Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl font-semibold tracking-tight">
            Core Services
          </h2>
          <p className="mt-3 text-slate-600 text-lg">
            Practical consulting built around governance, delivery, security, and
            operations, so your platform stays usable and reliable over time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-semibold tracking-tight">
              Engagement Options
            </h2>
            <p className="mt-3 text-slate-600 text-lg">
              Start with a focused consultation or move into a deeper architecture and
              systems assessment depending on your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {engagementTiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  {tier.name}
                </p>
                <p className="mt-4 text-3xl font-bold text-slate-900">{tier.price}</p>
                <p className="mt-4 text-slate-600 leading-7">{tier.summary}</p>

                <div className="mt-6 flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>Clear next steps and practical recommendations</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-3xl bg-slate-900 px-8 py-12 md:px-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Build the platform the right way: secure, scalable, and operable.
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-slate-300 text-lg leading-8">
            Whether you are planning a new platform, improving cloud security,
            strengthening access control, or making your delivery workflows more
            reliable, JLT-Lane can help you move forward with structure and confidence.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100 transition"
            >
              Schedule a Consultation
            </Link>

            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-600 px-6 py-3 font-semibold text-white hover:bg-slate-800 transition"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}