// components/Citation/CitationPill.tsx
"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import {
  Link2,
  Layers,
  Wrench,
  ArrowUpRight,
  GitMerge,
  Star,
  Archive,
  ArrowRight,
} from "lucide-react";

export type CitationType =
  | "source"
  | "derived"
  | "implements"
  | "supersedes"
  | "related"
  | "flagship";

export type CitationStatus = "active" | "superseded" | "archived";

export type Citation = {
  type: CitationType;
  title: string; // e.g. "Engineering Mesh"
  version?: string; // e.g. "v1.2"
  href?: string; // e.g. "/engineering-mesh#v1-2"
  note?: string; // e.g. "Superseded by v1.3"
  status?: CitationStatus;
};

function typeMeta(type: CitationType) {
  switch (type) {
    case "flagship":
      return { label: "Source", Icon: Star, tone: "emerald" as const };
    case "source":
      return { label: "Source", Icon: Link2, tone: "blue" as const };
    case "derived":
      return { label: "Derived", Icon: GitMerge, tone: "violet" as const };
    case "implements":
      return { label: "Implements", Icon: Wrench, tone: "amber" as const };
    case "supersedes":
      return { label: "Supersedes", Icon: Layers, tone: "rose" as const };
    case "related":
    default:
      return { label: "Related", Icon: ArrowRight, tone: "slate" as const };
  }
}

function toneClasses(tone: "blue" | "violet" | "amber" | "rose" | "slate" | "emerald") {
  // No hard colors requested elsewhere, but these are Tailwind utility classes (OK).
  // Kept tasteful + consistent with your brandy “pill” aesthetic.
  switch (tone) {
    case "emerald":
      return "bg-emerald-50 text-emerald-800 ring-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-200 dark:ring-emerald-400/20";
    case "blue":
      return "bg-blue-50 text-blue-800 ring-blue-200 dark:bg-blue-950/30 dark:text-blue-200 dark:ring-blue-400/20";
    case "violet":
      return "bg-violet-50 text-violet-800 ring-violet-200 dark:bg-violet-950/30 dark:text-violet-200 dark:ring-violet-400/20";
    case "amber":
      return "bg-amber-50 text-amber-900 ring-amber-200 dark:bg-amber-950/30 dark:text-amber-200 dark:ring-amber-400/20";
    case "rose":
      return "bg-rose-50 text-rose-900 ring-rose-200 dark:bg-rose-950/30 dark:text-rose-200 dark:ring-rose-400/20";
    case "slate":
    default:
      return "bg-slate-50 text-slate-800 ring-slate-200 dark:bg-slate-900/50 dark:text-slate-200 dark:ring-slate-400/20";
  }
}

export function CitationPill({
  citation,
  className,
}: {
  citation: Citation;
  className?: string;
}) {
  const { label, Icon, tone } = typeMeta(citation.type);
  const status = citation.status ?? "active";

  const statusChip =
    status === "archived" ? (
      <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700 ring-1 ring-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-700">
        <Archive className="h-3 w-3" />
        Archived
      </span>
    ) : status === "superseded" ? (
      <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-900 ring-1 ring-amber-200 dark:bg-amber-950/30 dark:text-amber-200 dark:ring-amber-400/20">
        <ArrowUpRight className="h-3 w-3" />
        Superseded
      </span>
    ) : null;

  const inner = (
    <span
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ring-1",
        "transition hover:-translate-y-[1px] hover:shadow-sm active:translate-y-0",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40",
        toneClasses(tone),
        className
      )}
      title={
        citation.note
          ? `${label}: ${citation.title}${citation.version ? ` ${citation.version}` : ""} — ${citation.note}`
          : `${label}: ${citation.title}${citation.version ? ` ${citation.version}` : ""}`
      }
      aria-label={`${label} citation: ${citation.title}${citation.version ? ` ${citation.version}` : ""}`}
    >
      <Icon className="h-4 w-4 opacity-90" />
      <span className="tracking-tight">{label}</span>
      <span className="opacity-70">·</span>
      <span className="font-semibold">{citation.title}</span>
      {citation.version ? <span className="opacity-70">{citation.version}</span> : null}
      {statusChip ? <span className="ml-1">{statusChip}</span> : null}
      {citation.href ? (
        <ArrowUpRight className="ml-1 h-4 w-4 opacity-70 transition group-hover:opacity-100" />
      ) : null}
    </span>
  );

  if (citation.href) {
    const isExternal = /^https?:\/\//i.test(citation.href);
    if (isExternal) {
      return (
        <a
          href={citation.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex"
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={citation.href} className="inline-flex">
        {inner}
      </Link>
    );
  }

  return inner;
}
