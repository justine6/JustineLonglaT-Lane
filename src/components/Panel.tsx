"use client";

import React from "react";
import CalEmbed, { CalEmbedProps } from "@/components/CalEmbed";

type PanelProps = {
  title?: string;
  subtitle?: string;
  className?: string;
  cal: Pick<CalEmbedProps, "link" | "height" | "layout" | "theme" | "params">;
  /** Put extra content above/below the calendar if needed */
  headerSlot?: React.ReactNode;
  footerSlot?: React.ReactNode;
};

export default function Panel({
  title = "Book time with me",
  subtitle = "Pick a slot that works for you—no back-and-forth.",
  className = "",
  cal,
  headerSlot,
  footerSlot,
}: PanelProps) {
  return (
    <section
      className={[
        "mx-auto max-w-5xl px-4 sm:px-6 py-10",
        "grid gap-6",
        className,
      ].join(" ")}
    >
      <div className="grid gap-2">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          {title}
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">{subtitle}</p>
      </div>

      {headerSlot}

      <CalEmbed
        link={cal.link}
        height={cal.height ?? 820}
        layout={cal.layout ?? "month_view"}
        theme={cal.theme ?? "system"}
        params={cal.params}
      />

      {footerSlot}
    </section>
  );
}
