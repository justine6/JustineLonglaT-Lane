// components/SuccessHero.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LINKS } from "@/config/links";
import AnimatedCheck from "@/components/AnimatedCheck";
import AddToCalendar from "@/components/AddToCalendar";

export default function SuccessHero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative mx-auto max-w-3xl px-4 sm:px-6 py-16">
      {/* Soft halo glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 flex items-start justify-center"
        aria-hidden
      >
        <div className="h-56 w-56 rounded-full bg-gradient-to-b from-emerald-400/40 to-blue-400/30 blur-3xl" />
      </div>

      <div
        className={[
          "mx-auto max-w-2xl rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-xl backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/60",
          "transition-all duration-700",
          visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
        ].join(" ")}
      >
        <div className="flex flex-col items-center text-center">
          <AnimatedCheck />

          <h1 className="mt-6 bg-gradient-to-b from-slate-900 to-slate-700 bg-clip-text text-3xl font-bold tracking-tight text-transparent dark:from-white dark:to-slate-300">
            Your meeting is confirmed — thank you!
          </h1>

          <p className="mt-3 text-slate-600 dark:text-slate-300">
            A confirmation email is on its way. Use it to add the event to your calendar,
            reschedule, or cancel if needed.
          </p>

          {/* Smart CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href={LINKS.home}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] hover:bg-blue-700 active:scale-[0.98]"
            >
              Back to Home
            </Link>

            <Link
              href={LINKS.projects}
              className="inline-flex items-center justify-center rounded-xl border border-slate-300/70 px-4 py-2 text-sm font-semibold transition-transform hover:scale-[1.02] hover:bg-slate-50 active:scale-[0.98] dark:border-slate-700 dark:hover:bg-slate-900"
            >
              Explore Projects
            </Link>

            <Link
              href={LINKS.contact}
              className="inline-flex items-center justify-center rounded-xl border border-slate-300/70 px-4 py-2 text-sm font-semibold transition-transform hover:scale-[1.02] hover:bg-slate-50 active:scale-[0.98] dark:border-slate-700 dark:hover:bg-slate-900"
            >
              Contact
            </Link>
          </div>

          {/* Add to Calendar */}
          <AddToCalendar />

          <p className="mt-8 text-xs text-slate-500">
            Your booking details are private and secure. See you soon!
          </p>
        </div>
      </div>
    </section>
  );
}
