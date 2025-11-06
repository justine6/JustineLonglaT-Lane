// app/intro-call/page.tsx
"use client";

import Script from "next/script";

export default function IntroCallPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 py-10">
      <h1 className="mb-3 text-2xl sm:text-3xl font-bold">Schedule Your Intro Call</h1>
      <p className="mb-6 text-slate-600 dark:text-slate-300">
        Pick a time that works for you. Quick chat to understand goals and fit.
      </p>

      {/* Cal inline widget */}
      <div
        className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        style={{ minHeight: 700 }}
      >
        <div
          className="calcom-embed"
          data-cal-link="justine-longla-ptq4no/intro-call"
          data-hide-event-type-details="false"
          data-inline="true"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* load Cal embed script once on the page */}
      <Script
        src="https://cal.com/embed.js"
        strategy="afterInteractive"
      />
    </main>
  );
}
