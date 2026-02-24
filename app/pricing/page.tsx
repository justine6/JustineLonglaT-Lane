"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Check,
  CreditCard,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";

type Plan = {
  key: string;
  name: string;
  priceLabel: string;
  subtitle: string;
  badge?: string;
  highlight?: boolean;
  mode: "payment" | "subscription";
  priceId: string; // ✅ replace with real Stripe price_... IDs
  bullets: string[];
  includes: string[];
};

export default function PricingPage() {
  const [loadingKey, setLoadingKey] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const plans = useMemo<Plan[]>(
    () => [
      {
        key: "intro",
        name: "Intro Call",
        priceLabel: "By consultation",
        subtitle: "30 minutes — quick clarity + next steps",
        badge: "Start here",
        highlight: false,
        mode: "payment",
        priceId: "price_intro_call", // TODO: replace
        bullets: [
          "Fast alignment on goals + constraints",
          "High-level architecture direction",
          "Recommended plan of attack",
        ],
        includes: [
          "Call agenda + prep questions",
          "Post-call summary",
          "Action checklist",
        ],
      },
      {
        key: "review",
        name: "Architecture Review",
        priceLabel: "By consultation",
        subtitle: "Deep dive — risks, costs, performance, security",
        badge: "Most popular",
        highlight: true,
        mode: "payment",
        priceId: "price_arch_review", // TODO: replace
        bullets: [
          "Security posture check (IAM, network, secrets)",
          "Performance + reliability review",
          "Cost hotspots + quick wins",
        ],
        includes: [
          "90–120 min working session",
          "Findings + recommendations",
          "Priority roadmap (30/60/90)",
        ],
      },
      {
        key: "retainer",
        name: "Monthly Retainer",
        priceLabel: "By consultation",
        subtitle: "Ongoing DevSecOps delivery + platform guardrails",
        badge: "Best value",
        highlight: false,
        mode: "subscription",
        priceId: "price_monthly_retainer", // TODO: replace
        bullets: [
          "Pipeline hardening + automation",
          "Observability + incident readiness",
          "Continuous security improvements",
        ],
        includes: [
          "Weekly delivery cadence",
          "Slack/Email support window",
          "Monthly executive summary",
        ],
      },
    ],
    []
  );

  async function startCheckout(plan: Plan) {
    setError(null);
    setLoadingKey(plan.key);

    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: plan.priceId, mode: plan.mode }),
      });

      const data = (await res.json()) as { url?: string; error?: string };

      if (!res.ok || !data.url) {
        throw new Error(data.error || "Checkout failed.");
      }

      window.location.href = data.url;
    } catch (e: any) {
      setError(e?.message || "Something went wrong.");
      setLoadingKey(null);
    }
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
          <Sparkles className="h-4 w-4" />
          Consulting by Justine Longla T-Lane
        </div>

        <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
          Consulting Packages
        </h1>
        <p className="mt-4 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
          Tell me what you’re building. We’ll do discovery → proposal → delivery.
        </p>

            <span className="...">
            <Shield className="h-4 w-4" />
            Proposal-first
            </span>
            <span className="...">
            <Calendar className="h-4 w-4" />
            Discovery call
            </span>
            <span className="...">
            <CreditCard className="h-4 w-4" />
            Pay after scope
            </span>

        {/* Error */}
        {error && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-200">
            {error}
          </div>
        )}
      </header>

      {/* Cards */}
      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const busy = loadingKey === plan.key;
          function requestConsultation(plan: Plan) {
        // Optional: keep context so Contact page can prefill or show a banner later
        const qs = new URLSearchParams({
            service: plan.key,
            intent: plan.name,
        });

        window.location.href = `/contact?${qs.toString()}`;
        }


          return (
            <div
              key={plan.key}
              className={[
                "relative flex h-full flex-col rounded-3xl border bg-white p-6 shadow-sm",
                "dark:border-slate-800 dark:bg-slate-950",
                plan.highlight
                  ? "border-blue-200 ring-1 ring-blue-200 dark:border-blue-900/60 dark:ring-blue-900/50"
                  : "border-slate-200",
              ].join(" ")}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-6">
                  <span
                    className={[
                      "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold shadow-sm",
                      plan.highlight
                        ? "bg-blue-600 text-white"
                        : "bg-slate-900 text-white dark:bg-slate-800",
                    ].join(" ")}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mt-2">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                  {plan.name}
                </h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {plan.subtitle}
                </p>
              </div>

              <div className="mt-5 flex items-end justify-between">
                <div>
                  <div className="text-4xl font-bold text-slate-900 dark:text-slate-50">
                    {plan.priceLabel}
                  </div>
                  <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {plan.mode === "subscription" ? "Subscription" : "One-time"}
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                {plan.bullets.map((b) => (
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
                  {plan.includes.map((x) => (
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
                <button
                    onClick={() => {
                    const qs = new URLSearchParams({
                        intent: plan.name,
                        service: plan.key,
                    });
                    window.location.href = `/discovery?${qs.toString()}`;
                    }}
                    className={[
                    "inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold shadow-sm",
                    "transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40",
                    plan.highlight
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700",
                    ].join(" ")}
                >
                    Start discovery <ArrowRight className="h-4 w-4" />
                </button>

                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:hover:bg-slate-900"
                >
                  Ask a question <Calendar className="h-4 w-4" />
                </Link>

                <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                   You’ll get a quick reply with next steps (discovery → proposal → delivery).

                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* Footer note */}
      <section className="mx-auto mt-10 max-w-3xl text-center">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Want a custom engagement (migration, security program, platform build)?
          Use the contact page and I’ll respond with a tailored plan.
        </p>
      </section>
    </main>
  );
}
