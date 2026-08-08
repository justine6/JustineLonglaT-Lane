import Link from "next/link";

import {
  ArrowRight,
  Calendar,
  Check,
  CreditCard,
  Shield,
  Sparkles,
} from "lucide-react";

import { LINKS } from "@/config/links";

type ServicePlan = {
  key: "intro-call" | "arch-review" | "assessment";
  name: string;
  priceLabel: string;
  subtitle: string;
  badge?: string;
  highlight?: boolean;
  checkoutUrl: string;
  ctaLabel: string;
  bullets: string[];
  includes: string[];
};

type EnterprisePlan = {
  key: "enterprise";
  name: string;
  priceLabel: string;
  subtitle: string;
  badge?: string;
  highlight?: boolean;
  discoveryUrl: string;
  ctaLabel: string;
  bullets: string[];
  includes: string[];
};

type Plan = ServicePlan | EnterprisePlan;

const plans: Plan[] = [
  {
    key: "intro-call",
    name: "Intro Platform Consultation",
    priceLabel: "$250",
    subtitle:
      "A focused session to review your system and provide immediate guidance.",
    badge: "Fast start",
    checkoutUrl: LINKS.stripeServiceIntro,
    ctaLabel: "Book consultation",
    bullets: [
      "Architecture direction and technical clarity",
      "Focused review of your current challenge",
      "Actionable recommendations and next steps",
    ],
    includes: [
      "One-time consultation",
      "Focused technical discussion",
      "Written session summary",
    ],
  },
  {
    key: "arch-review",
    name: "Platform Architecture Review",
    priceLabel: "$500",
    subtitle:
      "A deeper analysis of one defined area of your architecture, security, or deployment workflow.",
    badge: "Focused review",
    highlight: true,
    checkoutUrl: LINKS.stripeServiceReview,
    ctaLabel: "Purchase review",
    bullets: [
      "Review of one defined platform area",
      "Architecture, security, or delivery analysis",
      "Practical improvement recommendations",
    ],
    includes: [
      "One-time architecture review",
      "Written findings",
      "Prioritized recommendations",
    ],
  },
  {
    key: "assessment",
    name: "Platform Architecture & Systems Assessment",
    priceLabel: "$5,000",
    subtitle:
      "A comprehensive assessment with a roadmap, risk analysis, and optimization plan.",
    badge: "Comprehensive",
    checkoutUrl: LINKS.stripeServiceRetainer,
    ctaLabel: "Begin assessment",
    bullets: [
      "Cross-system architecture assessment",
      "Risk and modernization analysis",
      "Prioritized platform roadmap",
    ],
    includes: [
      "Comprehensive assessment",
      "Documented findings",
      "Strategic optimization roadmap",
    ],
  },
  {
    key: "enterprise",
    name: "Enterprise Platform",
    priceLabel: "Custom pricing",
    subtitle:
      "Negotiated engagements for organizations and governed platform initiatives.",
    badge: "Custom",
    discoveryUrl:
      "/discovery?intent=Enterprise%20Platform&service=enterprise",
    ctaLabel: "Start discovery",
    bullets: [
      "Custom platform architecture",
      "Modernization and implementation planning",
      "Negotiated scope and delivery model",
    ],
    includes: [
      "Discovery conversation",
      "Tailored proposal",
      "Quote-based engagement",
    ],
  },
];

export default function BookingSection() {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
            <Sparkles className="h-4 w-4" />
            Professional Services by Justine Longla T-Lane
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Platform Architecture Services
          </h2>

          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            Choose a defined professional engagement or begin a custom
            enterprise discovery conversation.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
              <Shield className="h-4 w-4" />
              Secure checkout
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
              <Calendar className="h-4 w-4" />
              Discovery available
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
              <CreditCard className="h-4 w-4" />
              Stripe-powered billing
            </span>
          </div>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.key}
              className={[
                "relative flex h-full flex-col rounded-3xl border bg-white p-6 shadow-sm",
                "dark:bg-slate-950",
                plan.highlight
                  ? "border-blue-200 ring-1 ring-blue-200 dark:border-blue-900/60 dark:ring-blue-900/50"
                  : "border-slate-200 dark:border-slate-800",
              ].join(" ")}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-6">
                  <span
                    className={[
                      "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white shadow-sm",
                      plan.highlight
                        ? "bg-blue-600"
                        : "bg-slate-900 dark:bg-slate-800",
                    ].join(" ")}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mt-2">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                  {plan.name}
                </h3>

                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {plan.subtitle}
                </p>
              </div>

              <div className="mt-5">
                <div className="text-4xl font-bold text-slate-900 dark:text-slate-50">
                  {plan.priceLabel}
                </div>

                <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {plan.key === "enterprise"
                    ? "Discovery-led engagement"
                    : "One-time professional engagement"}
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                {plan.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600/10 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                      <Check className="h-4 w-4" />
                    </span>

                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Includes
                </div>

                <ul className="mt-3 space-y-2">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 shrink-0 text-slate-400">
                        <Check className="h-4 w-4" />
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-6">
                {plan.key === "enterprise" ? (
                  <Link
                    href={plan.discoveryUrl}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 dark:bg-slate-800 dark:hover:bg-slate-700"
                  >
                    {plan.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <a
                    href={plan.checkoutUrl}
                    className={[
                      "inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-white shadow-sm",
                      "transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40",
                      plan.highlight
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700",
                    ].join(" ")}
                  >
                    {plan.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}

                <Link
                  href={`/contact?service=${plan.key}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:hover:bg-slate-900"
                >
                  Ask a question
                  <Calendar className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}