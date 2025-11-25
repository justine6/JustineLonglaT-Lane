"use client";

"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/lib/get-all-projects";
import SmallProjectCard from "@/components/SmallProjectCard";

type SortKey = "featured" | "newest" | "oldest" | "az" | "za";
type ViewMode = "grid" | "list";

const SORT_LABELS: Record<SortKey, string> = {
  featured: "Featured first",
  newest: "Newest first",
  oldest: "Oldest first",
  az: "Title A → Z",
  za: "Title Z → A",
};

interface SortableProjectsGridProps {
  projects: Project[];
  heading?: string;
}

/**
 * Helper: get all unique tags across projects.
 * Assumes `project.tags?: string[]` – safe if undefined.
 */
function getAllTags(projects: Project[]): string[] {
  const set = new Set<string>();
  for (const p of projects) {
    const tags = (p as any).tags as string[] | undefined;
    if (!tags) continue;
    for (const tag of tags) set.add(tag);
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export default function SortableProjectsGrid({
  projects,
  heading,
}: SortableProjectsGridProps) {
  const [sortBy, setSortBy] = useState<SortKey>("featured");
  const [view, setView] = useState<ViewMode>("grid");
  const [activeTag, setActiveTag] = useState<string | "all">("all");

  const allTags = useMemo(() => getAllTags(projects), [projects]);

  const filteredAndSorted = useMemo(() => {
    let list = [...projects];

    // Tag filter
    if (activeTag !== "all") {
      list = list.filter((p) => {
        const tags = (p as any).tags as string[] | undefined;
        return tags?.includes(activeTag);
      });
    }

    // Sorting
  list.sort((a, b) => {
    const aHighlight = Boolean(a.pinned || a.featured);
    const bHighlight = Boolean(b.pinned || b.featured);

    const aDate = a.updatedAt;
    const bDate = b.updatedAt;

    switch (sortBy) {
      case "featured":
        if (aHighlight && !bHighlight) return -1;
        if (!aHighlight && bHighlight) return 1;
        if (aDate && bDate && aDate !== bDate) {
          // newer first
          return aDate < bDate ? 1 : -1;
        }
        return a.title.localeCompare(b.title);

      case "newest":
        if (aDate && bDate && aDate !== bDate) {
          // newer first
          return aDate < bDate ? 1 : -1;
        }
        return a.title.localeCompare(b.title);

      case "oldest":
        if (aDate && bDate && aDate !== bDate) {
          // older first
          return aDate > bDate ? 1 : -1;
        }
        return a.title.localeCompare(b.title);

      case "az":
        return a.title.localeCompare(b.title);

      case "za":
        return b.title.localeCompare(a.title);

      default:
        return 0;
    }
  });

    return list;
  }, [projects, sortBy, activeTag]);

  const isGrid = view === "grid";

  return (
    <section className="mt-10">
      {/* Controls row */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        {heading && (
          <h2 className="text-lg font-semibold text-slate-100">
            {heading}
          </h2>
        )}

        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
          {/* View toggle */}
          <div className="flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/80 px-1 py-1">
            <button
              type="button"
              onClick={() => setView("grid")}
              className={`rounded-full px-3 py-1 text-xs sm:text-[0.8rem] ${
                isGrid
                  ? "bg-blue-500 text-white shadow-sm shadow-blue-500/40"
                  : "text-slate-300 hover:text-slate-50"
              }`}
            >
              Grid
            </button>
            <button
              type="button"
              onClick={() => setView("list")}
              className={`rounded-full px-3 py-1 text-xs sm:text-[0.8rem] ${
                !isGrid
                  ? "bg-blue-500 text-white shadow-sm shadow-blue-500/40"
                  : "text-slate-300 hover:text-slate-50"
              }`}
            >
              List
            </button>
          </div>

          {/* Sort select */}
          <div className="flex items-center gap-2">
            <span className="hidden text-slate-400 sm:inline">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortKey)}
              className="rounded-lg border border-slate-700 bg-slate-900 px-2 py-1.5 text-xs sm:text-sm text-slate-100 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {Object.entries(SORT_LABELS).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Tag filters */}
      {allTags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2 text-xs">
          <button
            type="button"
            onClick={() => setActiveTag("all")}
            className={`rounded-full border px-3 py-1 ${
              activeTag === "all"
                ? "border-blue-500 bg-blue-500/10 text-blue-200"
                : "border-slate-700 bg-slate-900/80 text-slate-300 hover:border-blue-400/60 hover:text-blue-100"
            }`}
          >
            All topics
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full border px-3 py-1 capitalize ${
                activeTag === tag
                  ? "border-blue-500 bg-blue-500/10 text-blue-200"
                  : "border-slate-700 bg-slate-900/80 text-slate-300 hover:border-blue-400/60 hover:text-blue-100"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Animated grid / list */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={view + activeTag + sortBy} // re-layout when controls change
          layout
          className={
            isGrid
              ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              : "grid gap-4 md:grid-cols-1"
          }
        >
          {filteredAndSorted.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <SmallProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredAndSorted.length === 0 && (
        <p className="mt-6 text-sm text-slate-400">
          No projects match this filter yet. Try another tag or sort option.
        </p>
      )}
    </section>
  );
}
