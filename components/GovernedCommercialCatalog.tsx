"use client";

import { ArrowRight, Calendar, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import {
  PUBLIC_COMMERCIAL_PRESENTATIONS,
  type PublicCommercialPresentation,
} from "@/lib/public-commercial-presentation";

type GovernedCommercialCatalogProps = {
  headingLevel?: "h2" | "h3";
};

function getDiscoveryHref(
  offering: PublicCommercialPresentation
): string {
  const query = new URLSearchParams({
    intent: offering.name,
    service: offering.action.offeringKey,
  });

  return `/discovery?${query.toString()}`;
}

export default function GovernedCommercialCatalog({
  headingLevel = "h3",
}: GovernedCommercialCatalogProps) {
  const [loadingKey, setLoadingKey] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const Heading = headingLevel;

  async function startCheckout(
    offering: PublicCommercialPresentation
  ) {
    if (offering.action.kind !== "checkout") {
      return;
    }

    setError(null);
    setLoadingKey(offering.action.offeringKey);

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan: offering.action.offeringKey,
        }),
      });

      const result = (await response.json()) as {
        url?: string;
        error?: string;
      };

      if (!response.ok || !result.url) {
        throw new Error(result.error || "Checkout failed.");
      }

      window.location.href = result.url;
    } catch (checkoutError: unknown) {
      setError(
        checkoutError instanceof Error
          ? checkoutError.message
          : "Something went wrong."
      );
      setLoadingKey(null);
    }
  }

  return (
    <>
      {error && (
        <div
          role="alert"
          className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-200"
        >
          {error}
        </div>
      )}

      <div className="mt-10 grid gap-6 lg:grid-cols-4">
        {PUBLIC_COMMERCIAL_PRESENTATIONS.map((offering) => {
          const busy =
            loadingKey === offering.action.offeringKey;
          const isCheckout =
            offering.action.kind === "checkout";

          return (
            <article
              key={offering.offeringKey}
              className="relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="mt-2">
                <Heading className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                  {offering.name}
                </Heading>

                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {offering.summary}
                </p>
              </div>

              <div className="mt-5">
                <div className="text-4xl font-bold text-slate-900 dark:text-slate-50">
                  {offering.displayPrice}
                </div>

                <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {isCheckout
                    ? "Direct checkout"
                    : "Proposal-led engagement"}
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                {offering.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600/10 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                      <Check className="h-4 w-4" />
                    </span>

                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3 pt-6">
                {isCheckout ? (
                  <button
                    type="button"
                    onClick={() => startCheckout(offering)}
                    disabled={busy}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-slate-800 dark:hover:bg-slate-700"
                  >
                    {busy
                      ? "Redirecting..."
                      : offering.action.label}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={getDiscoveryHref(offering)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700"
                  >
                    {offering.action.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}

                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:hover:bg-slate-900"
                >
                  Ask a question
                  <Calendar className="h-4 w-4" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
