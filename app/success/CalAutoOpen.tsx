"use client";

import { useEffect, useRef } from "react";

type Props = {
  calUrl: string;
};

function normalizeCalLink(link: string) {
  const raw = (link ?? "").trim();
  if (!raw) return "";

  const noProto = raw.replace(/^https?:\/\//, "");
  const noTrailing = noProto.replace(/\/+$/, "");

  return noTrailing;
}

export default function CalAutoOpen({ calUrl }: Props) {
  const hasOpenedRef = useRef(false);

  useEffect(() => {
    const calLink = normalizeCalLink(calUrl);
    if (!calLink || hasOpenedRef.current) return;

    const w = globalThis as unknown as Window & {
      Cal?: (action: string, options?: Record<string, unknown>) => void;
    };

    const openPopup = () => {
      if (hasOpenedRef.current) return;

      try {
        w.Cal?.("open", { calLink });
        hasOpenedRef.current = true;
      } catch {
        // no-op
      }
    };

    if (typeof w.Cal === "function") {
      window.setTimeout(openPopup, 100);
      return;
    }

    const existing = document.getElementById("cal-embed-script");

    if (existing) {
      const timer = window.setTimeout(openPopup, 400);
      return () => window.clearTimeout(timer);
    }

    const script = document.createElement("script");
    script.id = "cal-embed-script";
    script.src = "https://cal.com/embed.js";
    script.async = true;

    script.onload = () => {
      window.setTimeout(openPopup, 100);
    };

    document.body.appendChild(script);

    return () => {
      // keep script loaded for future page visits in this session
    };
  }, [calUrl]);

  return null;
}