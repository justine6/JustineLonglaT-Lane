// app/success/success-client.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  calUrl: string; // e.g. "https://cal.com/justine-longla-ptq4no" or "cal.com/.."
  heading?: string;
  subheading?: string;
};

function normalizeCalLink(link: string) {
  const raw = (link ?? "").trim();
  if (!raw) return "";

  // Cal expects "calLink" like: "cal.com/justine/intro-call" OR "justine/intro-call"
  const noProto = raw.replace(/^https?:\/\//, "");
  return noProto.replace(/\/+$/, "");
}

export default function SuccessClient({
  calUrl,
  heading = "Payment successful 🎉",
  subheading = "Opening the scheduler… If it doesn’t open, use the button below.",
}: Props) {
  const calLink = useMemo(() => normalizeCalLink(calUrl), [calUrl]);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (!calLink) return;

    const w = globalThis as any;

    const openPopup = () => {
      try {
        w.Cal?.("open", { calLink });
        setOpened(true);
      } catch {
        // ignore
      }
    };

    // If Cal is already present, open now
    if (typeof w.Cal === "function") {
      openPopup();
      return;
    }

    // If script already injected, wait a tick then open
    const existing = document.getElementById("cal-embed-script");
    if (existing) {
      const t = window.setTimeout(openPopup, 300);
      return () => window.clearTimeout(t);
    }

    // Inject embed.js once
    const s = document.createElement("script");
    s.id = "cal-embed-script";
    s.src = "https://cal.com/embed.js";
    s.async = true;

    s.onload = () => {
      window.setTimeout(openPopup, 50);
    };

    document.body.appendChild(s);
  }, [calLink]);

  if (!calLink) return null;

  const openInNewTabHref = calLink.startsWith("cal.com/")
    ? `https://${calLink}`
    : calLink.startsWith("http")
    ? calLink
    : `https://cal.com/${calLink.replace(/^\/+/, "")}`;

  return (
    <div className="mx-auto mt-8 max-w-xl rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
        {heading}
      </h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        {subheading}
      </p>

      <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => {
            const w = globalThis as any;
            try {
              w.Cal?.("open", { calLink });
              setOpened(true);
            } catch {
              // ignore
            }
          }}
          className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          {opened ? "Re-open scheduler" : "Open scheduler"}
        </button>

        <a
          href={openInNewTabHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:hover:bg-slate-900"
        >
          Open in new tab
        </a>
      </div>

      <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
        If popups are blocked, allow popups for this site and click “Open
        scheduler”.
      </p>
    </div>
  );
}