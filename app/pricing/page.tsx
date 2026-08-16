"use client";

import {
  Calendar,
  CreditCard,
  Shield,
  Sparkles,
} from "lucide-react";

import GovernedCommercialCatalog from "@/components/GovernedCommercialCatalog";
import MeshHubNext from "@/components/meshhub/MeshHubNext";

export default function PricingPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
          <Sparkles className="h-4 w-4" />
          JLT-LANE Consulting
        </div>

        <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
          Pricing & Access
        </h1>

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

      <GovernedCommercialCatalog headingLevel="h2" />

      <div className="mx-auto mt-20 max-w-6xl px-4 md:px-6">
        <MeshHubNext
          title="Start Your Platform Conversation"
          description="Book an architecture review, operational strategy session, or implementation discussion tailored to your platform environment."
          href="/booking"
          cta="Book Session"
        />
      </div>
    </main>
  );
}
