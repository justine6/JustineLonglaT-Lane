// components/Panel.tsx
"use client";

import { useMemo } from "react";

type CalLayout = "month_view" | "week_view" | "column_view" | "list_view";
type CalTheme = "light" | "dark" | "system";

type CalOptions = {
  link: string;                // base Cal.com share link
  height?: number;             // px height for iframe
  layout?: CalLayout;          // default: "month_view"
  theme?: CalTheme;            // default: "system"
  locale?: string;             // e.g., "en", "fr"
  hideEventTypeDetails?: boolean;
  primaryColor?: string;       // hex without '#', e.g. "1d4ed8"
};

type Props = {
  title: string;
  subtitle?: string;
  cal: CalOptions;
  className?: string;
};

function buildCalUrl(opts: CalOptions): string {
  const {
    link,
    layout = "month_view",
    theme = "system",
    locale,
    hideEventTypeDetails,
    primaryColor,
  } = opts;

  // Be defensive: if link is not a full URL, try to coerce
  let u: URL;
  try {
    u = new URL(link);
  } catch {
    u = new URL(link, "https://cal.com"); // fallback base
  }

  // Always force inline embed and safe defaults (preserving existing params)
  u.searchParams.set("embed", "inline");
  if (!u.searchParams.has("layout")) u.searchParams.set("layout", layout);
  if (!u.searchParams.has("theme")) u.searchParams.set("theme", theme);

  if (locale) u.searchParams.set("locale", locale);
  if (hideEventTypeDetails) u.searchParams.set("hide_event_type_details", "true");
  if (primaryColor) u.searchParams.set("primary_color", primaryColor.replace(/^#/, ""));

  return u.toString();
}

export default function Panel({ title, subtitle, cal, className }: Props) {
  const src = useMemo(() => buildCalUrl(cal), [cal]);
  const height = Math.max(500, Math.min(cal.height ?? 820, 2000)); // clamp for sanity

  return (
    <section className={className ?? ""}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h1>
          {subtitle && (
            <p className="mt-1 text-slate-600">{subtitle}</p>
          )}
        </header>

        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
          <iframe
            src={src}
            title="Schedule with Cal.com"
            width="100%"
            height={height}
            style={{ border: 0 }}
            allow="clipboard-write; fullscreen"
            loading="lazy"
            // sandbox keeps it safer while allowing embeds to function
            sandbox={[
              "allow-forms",
              "allow-modals",
              "allow-popups",
              "allow-presentation",
              "allow-same-origin",
              "allow-scripts",
              "allow-top-navigation-by-user-activation",
            ].join(" ")}
          />
        </div>
      </div>
    </section>
  );
}

export { buildCalUrl };
