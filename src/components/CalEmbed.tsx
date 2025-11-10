"use client";

import React from "react";

type Theme = "light" | "dark" | "system";

export type CalEmbedProps = {
  /** e.g., "https://cal.com/justine/intro-call" (no query needed) */
  link: string;
  /** Height of the iframe (px, rem, vh, etc.) */
  height?: string | number;
  /** Month view looks familiar and compact */
  layout?: "month_view" | "week_view" | "column_view";
  /** Let the page drive it; keeps colors consistent */
  theme?: Theme;
  /** Optional title for a11y */
  title?: string;
  /** Pass extra query params if needed (e.g., prefill) */
  params?: Record<string, string | number | boolean | undefined>;
  /** Add a small border+radius */
  bordered?: boolean;
  /** Rounded corners */
  rounded?: boolean;
};

function toQuery(params: Record<string, unknown>) {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v === undefined || v === null) return;
    search.set(k, String(v));
  });
  return search.toString();
}

/**
 * Zero-dependency Cal.com iframe embed.
 * Works in any Next.js route without runtime warnings or SSR issues.
 */
export default function CalEmbed({
  link,
  height = 820,
  layout = "month_view",
  theme = "system",
  title = "Schedule time",
  params = {},
  bordered = true,
  rounded = true,
}: CalEmbedProps) {
  // Compose the embed URL with safe defaults
  const query = toQuery({
    embed: "true",
    layout,
    theme,
    ...params,
  });

  const src = `${link}${link.includes("?") ? "&" : "?"}${query}`;

  return (
    <div
      className={[
        "w-full",
        bordered ? "border border-slate-200 dark:border-slate-800" : "",
        rounded ? "rounded-2xl overflow-hidden" : "",
        "bg-white dark:bg-slate-950",
      ].join(" ")}
    >
      <iframe
        title={title}
        src={src}
        loading="lazy"
        className="w-full"
        style={{
          height: typeof height === "number" ? `${height}px` : height,
          border: "0",
        }}
        // security best-practice: let Cal render its UI but deny camera/mic etc.
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      />
    </div>
  );
}
