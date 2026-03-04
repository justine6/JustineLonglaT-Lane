"use client";

import { useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Check, CreditCard, Sparkles } from "lucide-react";
import { LINKS } from "@/config/links";

type Service = {
  key: string;
  name: string;
  priceLabel: string;
  subtitle: string;
  badge?: string;
  highlight?: boolean;
  payHref?: string;
  bullets: string[];
  includes: string[];
};

export default function BookingSection() {
  const services = useMemo<Service[]>(
    () => [
      {
        key: "intro",
        name: "Intro Call",
        priceLabel: "By consultation",
        subtitle: "30 minutes — quick clarity + next steps",
        badge: "Start here",
        highlight: false,
        payHref: LINKS.stripeBookSession,
        bullets: [
          "Fast alignment on goals + constraints",
          "High-level architecture direction",
          "Recommended plan of attack",
        ],
        includes: ["Call agenda + prep questions", "Post-call summary", "Action checklist"],
      },
      {
        key: "review",
        name: "Architecture Review",
        priceLabel: "By consultation",
        subtitle: "Deep dive — risks, costs, performance, security",
        badge: "Most popular",
        highlight: true,
        payHref: LINKS.stripeCompletePayment || LINKS.stripeBookSession,
        bullets: ["Security posture check (IAM, network, secrets)", "Performance + reliability review", "Cost hotspots + quick wins"],
        includes: ["90–120 min working session", "Findings + recommendations", "Priority roadmap (30/60/90)"],
      },
      {
        key: "retainer",
        name: "Monthly Retainer",
        priceLabel: "By consultation",
        subtitle: "Ongoing DevSecOps delivery + platform guardrails",
        badge: "Best value",
        highlight: false,
        payHref: LINKS.stripeCompletePayment || LINKS.stripeBookSession,
        bullets: ["Pipeline hardening + automation", "Observability + incident readiness", "Continuous security improvements"],
        includes: ["Weekly delivery cadence", "Slack/Email support window", "Monthly executive summary"],
      },
    ],
    []
  );

  return (
    <section id="booking" className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
          <Sparkles className="h-4 w-4" />
          Choose a service & pay securely
        </div>

        <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          Book a Service
        </h2>

        <p className="mt-3 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
          Ready to move? Pay via Stripe. Prefer to talk first? Schedule an intro call.
        </p>
      </header>

      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.key}
            className={[
              "relative flex h-full flex-col rounded-3xl border bg-white p-6 shadow-sm",
              "dark:border-slate-800 dark:bg-slate-950",
              s.highlight
                ? "border-blue-200 ring-1 ring-blue-200 dark:border-blue-900/60 dark:ring-blue-900/50"
                : "border-slate-200",
            ].join(" ")}
          >
            {s.badge && (
              <div className="absolute -top-3 left-6">
                <span
                  className={[
                    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold shadow-sm",
                    s.highlight ? "bg-blue-600 text-white" : "bg-slate-900 text-white dark:bg-slate-800",
                  ].join(" ")}
                >
                  {s.badge}
                </span>
              </div>
            )}

            <div className="mt-2">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">{s.name}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{s.subtitle}</p>
            </div>

            <div className="mt-5">
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-50">{s.priceLabel}</div>
              <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">One-time / scoped engagement</div>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600/10 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                    <Check className="h-4 w-4" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Includes
              </div>
              <ul className="mt-3 space-y-2">
                {s.includes.map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <span className="mt-0.5 text-slate-400">
                      <Check className="h-4 w-4" />
                    </span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              {s.payHref ? (
                <a
                  href={s.payHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    "inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold shadow-sm",
                    "transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40",
                    s.highlight ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700",
                  ].join(" ")}
                >
                  Pay with Stripe <CreditCard className="h-4 w-4" />
                </a>
              ) : (
                <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
                  Stripe link not set yet.
                </div>
              )}

              <Link
                href="/availability"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:hover:bg-slate-900"
              >
                Talk first <Calendar className="h-4 w-4" />
              </Link>

              <Link
                href={`/contact?service=${encodeURIComponent(s.key)}&intent=${encodeURIComponent(s.name)}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:hover:bg-slate-900"
              >
                Ask a question <ArrowRight className="h-4 w-4" />
              </Link>

              <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                Discovery → proposal → delivery (you’ll get next steps quickly).
              </p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
