"use client";

import {
  Calendar,
  CreditCard,
  Shield,
  Sparkles,
} from "lucide-react";

import GovernedCommercialCatalog from "@/components/GovernedCommercialCatalog";

export default function BookingSection() {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
            <Sparkles className="h-4 w-4" />
            JLT-LANE Consulting
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Pricing & Access
          </h2>

          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            Choose a governed consulting engagement or begin discovery for a
            proposal-led platform engagement.
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

        <GovernedCommercialCatalog />
      </div>
    </section>
  );
}
