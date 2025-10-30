// app/intro-call/page.tsx
"use client";

import { useMemo } from "react";
import { LINKS } from "@/config/links";

function getHost() {
  if (typeof window !== "undefined") return window.location.hostname;
  // fallback for SSR, won’t actually be used client-side
  return "localhost";
}

export default function IntroCallPage() {
  const embedSrc = useMemo(() => {
    const domain = getHost();
    // Cal embed params:
    // embed_type=inline keeps it embedded
    // embed_domain must match your current host
    return `https://cal.com/${LINKS.calPath}?embed_type=inline&embed_domain=${domain}`;
  }, []);

  return (
    <main className="min-h-screen px-4 sm:px-6 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Schedule Your Intro Call</h1>
      <p className="text-slate-600 dark:text-slate-300 mb-6">
        Pick a time that works for you. This is a quick chat to understand goals and fit.
      </p>

      {/* Inline iframe embed */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <iframe
          src={embedSrc}
          title="Schedule Intro Call"
          style={{ width: "100%", height: "900px", border: "0" }}
          allow="camera; microphone; fullscreen; clipboard-read; clipboard-write"
        />
      </div>

      <p className="mt-3 text-sm text-slate-500">
        If the embed doesn’t load,{" "}
        <a
          href={LINKS.cal}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          open the scheduler in a new tab
        </a>.
      </p>
    </main>
  );
}

