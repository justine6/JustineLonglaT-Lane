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
} from "lucide-react";

type Plan = {
  key:
    | "intro-call"
    | "retainer"
    | "arch-review"
    | "enterprise";
  name: string;
  priceLabel: string;
  subtitle: string;
  badge?: string;
  highlight?: boolean;
  ctaType: "checkout" | "discovery";
  bullets: string[];
  includes: string[];
};

export default function PricingPage() {
  const [loadingKey, setLoadingKey] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const plans = useMemo<Plan[]>(
    () => [
      {
        key: "intro-call",
        name: "Consulting Session",
        priceLabel: "$250",
        subtitle:
          "One-time session for architecture, DevSecOps, and platform guidance",
        badge: "Fast start",
        ctaType: "checkout",
        bullets: [
          "Architecture direction and technical clarity",
          "Focused problem-solving on your current challenge",
          "Actionable next steps after the session",
        ],
        includes: ["One-time paid session", "Session summary", "Clear recommendations"],
      },
      {
        key: "retainer",
        name: "JLT-Lane Platform Access",
        priceLabel: "$29/month",
        subtitle: "Core platform membership for premium engineering resources",
        badge: "Most popular",
        highlight: true,
        ctaType: "checkout",
        bullets: [
          "Premium runbooks and playbooks",
          "Templates, guides, and platform assets",
          "Member access to curated engineering resources",
        ],
        includes: [
          "Recurring monthly access",
          "Premium platform content",
          "Platform resource library",
        ],
      },
      {
        key: "arch-review",
        name: "JLT-Lane Platform Architect",
        priceLabel: "$79/month",
        subtitle: "Advanced tier for deeper architecture and system design assets",
        ctaType: "checkout",
        bullets: [
          "Advanced architecture blueprints",
          "Higher-level platform engineering guidance",
          "Expanded premium technical assets",
        ],
        includes: [
          "Recurring monthly access",
          "Advanced architecture resources",
          "Extended member library",
        ],
      },
      {
        key: "enterprise",
        name: "Enterprise Platform",
        priceLabel: "Custom pricing",
        subtitle:
          "Negotiated engagements for organizations and ongoing partnerships",
        badge: "Custom",
        ctaType: "discovery",
        bullets: [
          "Custom architecture reviews",
          "Platform modernization and advisory",
          "Negotiated scope and delivery model",
        ],
        includes: ["Discovery conversation", "Tailored proposal", "Quote-based engagement"],
      },
    ],
    []
  );

  async function startCheckout(planKey: Plan["key"]) {
    setError(null);
    setLoadingKey(planKey);

    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planKey }),
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
      <header className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
          <Sparkles className="h-4 w-4" />
          Pricing by Justine Longla T-Lane
        </div>

        <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
          Pricing & Access
        </h1>

        <p className="mt-4 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
          Choose direct platform access, a one-time consulting session, or start
          a custom enterprise conversation.
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

        {error && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-200">
            {error}
          </div>
        )}
      </header>

      <section className="mt-10 grid gap-6 lg:grid-cols-4">
        {plans.map((plan) => {
          const busy = loadingKey === plan.key;

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

              <div className="mt-5">
                <div className="text-4xl font-bold text-slate-900 dark:text-slate-50">
                  {plan.priceLabel}
                </div>
                <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {plan.key === "enterprise" ? "Negotiated engagement" : "Direct checkout"}
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
                {plan.ctaType === "checkout" ? (
                  <button
                    onClick={() => startCheckout(plan.key)}
                    disabled={busy}
                    className={[
                      "inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold shadow-sm",
                      "transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40",
                      "disabled:cursor-not-allowed disabled:opacity-60",
                      plan.highlight
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700",
                    ].join(" ")}
                  >
                    {busy ? "Redirecting..." : "Continue"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      const qs = new URLSearchParams({
                        intent: plan.name,
                        service: plan.key,
                      });
                      window.location.href = `/discovery?${qs.toString()}`;
                    }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700"
                  >
                    Start discovery
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}

                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:hover:bg-slate-900"
                >
                  Ask a question
                  <Calendar className="h-4 w-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
