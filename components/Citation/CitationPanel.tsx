// components/Citation/CitationPanel.tsx
import { cn } from "@/lib/cn";
import { Citation, CitationPill } from "./CitationPill";
import { BookMarked } from "lucide-react";

export function CitationPanel({
  title = "Lineage",
  subtitle = "Trace where this block came from and what it builds on.",
  citations,
  className,
}: {
  title?: string;
  subtitle?: string;
  citations: Citation[];
  className?: string;
}) {
  if (!citations?.length) return null;

  return (
    <section
      className={cn(
        "rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/40",
        className
      )}
      aria-label="Citation lineage panel"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              <BookMarked className="h-4 w-4" />
            </span>
            <h3 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              {title}
            </h3>
          </div>
          {subtitle ? (
            <p className="mt-2 max-w-2xl text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {citations.map((c, idx) => (
          <CitationPill key={`${c.type}-${c.title}-${c.version ?? idx}`} citation={c} />
        ))}
      </div>
    </section>
  );
}
