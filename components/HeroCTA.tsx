"use client";

import Link from "next/link";
import { Network, Wrench, Puzzle, CreditCard, Calendar } from "lucide-react";
import { LINKS } from "@/config/links";

export default function HeroCTA() {
  const meshHref = LINKS.engineeringMesh ?? "/engineering-mesh";
  const publishingHref = "/case-studies/engineering-grade-publishing";
  const toolkitHref =
    LINKS.toolkit ?? "https://docs.justinelonglat-lane.com/toolkit.html";

  const bookHref = LINKS.stripeBookSession;
  const payHref = LINKS.stripeCompletePayment;

  return (
    <div className="mt-4 flex flex-col items-center gap-3 pb-2">
      {/* Row 1 — Payments + assets */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {bookHref ? (
          <a
            href={bookHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            Book a Session
          </a>
        ) : null}

        {payHref ? (
          <a
            href={payHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-600 bg-white px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            <CreditCard className="h-4 w-4" aria-hidden="true" />
            Complete Payment
          </a>
        ) : null}

        <a
          href={LINKS.brochure}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl border border-blue-600 bg-white px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Download Brochure
        </a>

        <a
          href={LINKS.resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl border border-blue-600 bg-white px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          View Résumé
        </a>
      </div>

      {payHref ? (
        <p className="text-center text-xs text-slate-600 dark:text-slate-300">
          Already discussed a service with me (phone/Zoom/in-person)? Use{" "}
          <span className="font-semibold">Complete Payment</span>.
        </p>
      ) : null}

      {/* Row 2 — Platform buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href={meshHref}
          className="group relative inline-flex items-center justify-center rounded-xl px-[2px] py-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
        >
          <span
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-teal-400 opacity-60 blur-[6px]
                       transition-all duration-500 group-hover:opacity-100 group-hover:blur-[8px]"
            aria-hidden="true"
          />
          <span
            className="relative inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-md
                       transition-all duration-300 group-hover:-translate-y-[1px] group-hover:shadow-lg
                       dark:bg-slate-900 dark:text-slate-200 dark:group-hover:bg-slate-800"
          >
            <Network className="h-4 w-4 text-sky-500" aria-hidden="true" />
            Engineering Mesh Hub
          </span>
        </Link>

        <Link
          href={publishingHref}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <Puzzle className="h-4 w-4" aria-hidden="true" />
          Publishing Platform
        </Link>

        <a
          href={toolkitHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <Wrench className="h-4 w-4" aria-hidden="true" />
          Automation Platform ↗
        </a>
      </div>
    </div>
  );
}