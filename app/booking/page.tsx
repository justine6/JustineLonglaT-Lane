"use client";

import InlineWidget from "@calcom/embed-react";

function normalizeCalLink(raw: string) {
  // Accept either:
  // - "username/intro-call"
  // - "https://cal.com/username/intro-call"
  // - "cal.com/username/intro-call"
  return raw
    .trim()
    .replace(/^https?:\/\//i, "")
    .replace(/^www\./i, "")
    .replace(/^cal\.com\//i, "");
}

export default function BookingPage() {
  const raw =
    process.env.NEXT_PUBLIC_CAL_LINK || "justine-longla-ptq4no/intro-call";
  const calLink = normalizeCalLink(raw);

  return (
    <main className="min-h-screen bg-white px-4 py-10 text-slate-900 dark:bg-slate-950 dark:text-slate-50 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Book an Intro Call
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Pick a time that works for you. The scheduler loads securely from Cal.com.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
          <div className="p-3 md:p-4">
            <InlineWidget calLink={calLink} />
          </div>
        </div>

        <div className="mt-4 text-sm text-slate-600 dark:text-slate-300">
          Having trouble?{" "}
          <a
            className="font-semibold underline underline-offset-4"
            href={`https://cal.com/${calLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open the booking page directly
          </a>
          .
        </div>
      </div>
    </main>
  );
}
