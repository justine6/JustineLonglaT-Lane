"use client";

import { useState } from "react";

export default function BillingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleOpenPortal() {
    try {
      setIsLoading(true);
      setError(null);

      const res = await fetch("/api/stripe/portal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok || !data?.url) {
        throw new Error(data?.error || "Unable to open billing portal.");
      }

      window.location.href = data.url;
    } catch (err: any) {
      setError(err?.message || "Unable to open billing portal.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300/80">
          Billing
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          Billing Portal
        </h1>

        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Manage your subscription, payment methods, and invoices securely through
          the Stripe billing portal.
        </p>

        <div className="mt-8">
          <button
            type="button"
            onClick={handleOpenPortal}
            disabled={isLoading}
            className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            {isLoading ? "Opening portal..." : "Manage Billing"}
          </button>
        </div>

        {error ? (
          <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-200">
            {error}
          </div>
        ) : null}

        <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
          You’ll be redirected to a secure Stripe-hosted page to manage billing.
        </p>
      </div>
    </main>
  );
}