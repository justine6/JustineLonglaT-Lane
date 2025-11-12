// components/CalEmbed.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type Props = { bookingUrl: string };

export default function CalEmbed({ bookingUrl }: Props) {
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Safety timeout: if the iframe doesn’t load within 10s, show a fallback
  useEffect(() => {
    timerRef.current = window.setTimeout(() => {
      if (loading) setFailed(true);
    }, 10000);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [loading]);

  return (
    <div className="relative w-full">
      {/* Skeleton while loading */}
      {loading && !failed && (
        <div
          aria-hidden="true"
          className="h-[720px] w-full animate-pulse rounded-2xl bg-slate-100"
        />
      )}

      {/* Iframe */}
      <iframe
        title="Schedule an intro call"
        src={bookingUrl}
        className={`h-[720px] w-full rounded-2xl ${loading ? "invisible" : "visible"}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allow="clipboard-write *; geolocation *; microphone; camera"
        onLoad={() => {
          setLoading(false);
          setFailed(false);
        }}
      />

      {/* Fallback UI if it takes too long or is blocked */}
      {failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-6 text-center">
          <p className="text-slate-700">
            The embedded scheduler is taking longer than expected to load.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border px-4 py-2 text-sm font-medium transition hover:bg-slate-50"
            >
              Open Scheduler in a New Tab
            </a>
            <a
              href="mailto:hello@jutellane.com?subject=Intro%20Call%20Request"
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              Book via Email
            </a>
          </div>
        </div>
      )}

      {/* Footer helper for accessibility / alternate path */}
      <div className="sr-only" aria-live="polite">
        {loading ? "Loading scheduler…" : "Scheduler loaded."}
      </div>
    </div>
  );
}
