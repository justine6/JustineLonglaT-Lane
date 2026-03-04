// app/success/CalAutoOpen.tsx
"use client";

import { useEffect } from "react";

type Props = {
  calUrl: string; // full https://cal.com/... URL (or cal.com/... link)
};

function normalizeCalLink(link: string) {
  const raw = (link ?? "").trim();
  if (!raw) return "";

  // If full URL, turn it into the "cal-link" format Cal expects
  // Example: https://cal.com/justine-longla-ptq4no -> justine-longla-ptq4no
  const noProto = raw.replace(/^https?:\/\//, "");
  const noTrailing = noProto.replace(/\/+$/, "");
  return noTrailing;
}

export default function CalAutoOpen({ calUrl }: Props) {
  useEffect(() => {
    const calLink = normalizeCalLink(calUrl);
    if (!calLink) return;

    const w = globalThis as any;

    const openPopup = () => {
      try {
        // Cal embed supports: Cal("open", { calLink })
        // Some builds also accept: Cal("ui", { theme: "system" }) etc.
        w.Cal?.("open", { calLink });
      } catch {
        // no-op
      }
    };

    // If embed already loaded, open immediately
    if (typeof w.Cal === "function") {
      openPopup();
      return;
    }

    // Otherwise load embed.js once, then open
    const existing = document.getElementById("cal-embed-script");
    if (existing) {
      // script exists but Cal not ready yet — wait a tick
      const t = window.setTimeout(openPopup, 300);
      return () => window.clearTimeout(t);
    }

    const s = document.createElement("script");
    s.id = "cal-embed-script";
    s.src = "https://cal.com/embed.js";
    s.async = true;

    s.onload = () => {
      // give Cal a moment to initialize
      window.setTimeout(openPopup, 50);
    };

    document.body.appendChild(s);

    return () => {
      // no cleanup needed
    };
  }, [calUrl]);

  // Invisible helper component
  return null;
}