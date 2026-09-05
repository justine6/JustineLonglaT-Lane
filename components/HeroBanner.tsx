"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";

type LayerKey =
  | "identity"
  | "governance"
  | "factory"
  | "delivery"
  | "evidence";

type ArchitectureLayer = {
  key: LayerKey;
  order: string;
  label: string;
  title: string;
  summary: string;
  signals: string;
};

const layers: ArchitectureLayer[] = [
  {
    key: "identity",
    order: "01",
    label: "Identity",
    title: "JLT-LANE Institutional Identity",
    summary:
      "Establishes who owns the platform, where authority originates, and which trust boundary governs the ecosystem.",
    signals: "Brand authority · ownership · trust anchor",
  },
  {
    key: "governance",
    order: "02",
    label: "Governance",
    title: "Governed Control Plane",
    summary:
      "Applies policy, authorization, custody, security, and controlled-change rules before platform mutation occurs.",
    signals: "Policy · authorization · security · change control",
  },
  {
    key: "factory",
    order: "03",
    label: "Factory",
    title: "Blueprint Factory",
    summary:
      "Transforms architectural intent into reusable, versioned, and governed platform compositions.",
    signals: "Blueprints · registries · composition · reproducibility",
  },
  {
    key: "delivery",
    order: "04",
    label: "Delivery",
    title: "Execution and Capability Mesh",
    summary:
      "Connects automation, publishing, documentation, consulting, learning, and deployable solutions to deliver outcomes.",
    signals: "Automation · publishing · documentation · services",
  },
  {
    key: "evidence",
    order: "05",
    label: "Evidence",
    title: "Evidence and Learning Loop",
    summary:
      "Returns projects, operational telemetry, publications, and validation evidence to governance for continuous improvement.",
    signals: "Projects · observability · validation · learning",
  },
];

export default function HeroBanner() {
  const [activeLayer, setActiveLayer] =
    useState<LayerKey>("governance");

  const active = useMemo(
    () =>
      layers.find((layer) => layer.key === activeLayer) ??
      layers[1],
    [activeLayer]
  );

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.10),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_30%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 shadow-sm backdrop-blur dark:border-sky-400/20 dark:bg-slate-900/60 dark:text-sky-300">
            JLT-LANE Platform Architecture
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
            Platform clarity,
            <span className="block text-sky-600 dark:text-sky-400">
              engineered as a system.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            Explore how identity, governance, factory composition,
            delivery capabilities, and operational evidence work
            together as one controlled platform system.
          </p>

          <div
            className="mt-8 flex max-w-xl flex-wrap gap-2"
            aria-label="Architectural layers"
          >
            {layers.map((layer) => {
              const isSelected = layer.key === activeLayer;

              return (
                <button
                  key={layer.key}
                  type="button"
                  onClick={() => setActiveLayer(layer.key)}
                  aria-pressed={isSelected}
                  className={[
                    "rounded-full border px-4 py-2 text-sm font-semibold transition",
                    isSelected
                      ? "border-sky-500 bg-sky-500 text-white shadow-md"
                      : "border-slate-200 bg-white/80 text-slate-600 hover:border-sky-300 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-sky-400/40 dark:hover:text-white",
                  ].join(" ")}
                >
                  {layer.label}
                </button>
              );
            })}
          </div>

          <motion.div
            key={active.key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mt-8 max-w-xl rounded-[1.75rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.12)] backdrop-blur dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_18px_55px_rgba(2,8,23,0.45)]"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 dark:bg-sky-400/10 dark:text-sky-300">
                Layer {active.order}
              </span>

              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                {active.label}
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
              {active.title}
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              {active.summary}
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                Operating signals
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                {active.signals}
              </p>
            </div>
          </motion.div>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] dark:bg-white dark:text-slate-900"
            >
              Explore Projects
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur dark:border-white/10 dark:bg-slate-900/75 dark:shadow-[0_24px_80px_rgba(2,8,23,0.55)] sm:p-7">
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-5 dark:border-white/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300">
                  Governed operating model
                </p>

                <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                  Authority flows forward. Evidence returns.
                </h2>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-center dark:border-emerald-400/20 dark:bg-emerald-400/10">
                <span className="block text-lg font-bold text-emerald-700 dark:text-emerald-300">
                  5
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                  Layers
                </span>
              </div>
            </div>

            <div className="relative mt-6">
              <div className="absolute bottom-8 left-6 top-8 w-px bg-gradient-to-b from-sky-400 via-violet-400 to-emerald-400" />

              <ol className="relative space-y-3">
                {layers.map((layer) => {
                  const isActive = layer.key === activeLayer;

                  return (
                    <li key={layer.key}>
                      <button
                        type="button"
                        onMouseEnter={() => setActiveLayer(layer.key)}
                        onFocus={() => setActiveLayer(layer.key)}
                        onClick={() => setActiveLayer(layer.key)}
                        aria-current={isActive ? "step" : undefined}
                        className={[
                          "relative flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-200",
                          isActive
                            ? "border-sky-400 bg-sky-50 shadow-md ring-2 ring-sky-400/20 dark:border-sky-400/60 dark:bg-sky-400/10"
                            : "border-slate-200 bg-white hover:border-sky-300 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:hover:border-sky-400/30 dark:hover:bg-white/[0.07]",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-sm font-bold shadow-sm",
                            isActive
                              ? "border-sky-500 bg-sky-500 text-white"
                              : "border-slate-200 bg-white text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200",
                          ].join(" ")}
                        >
                          {layer.order}
                        </span>

                        <span className="min-w-0">
                          <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-300">
                            {layer.label}
                          </span>

                          <span className="mt-1 block font-bold text-slate-900 dark:text-white">
                            {layer.title}
                          </span>
                        </span>

                        <span
                          aria-hidden="true"
                          className={[
                            "ml-auto text-xl transition-transform",
                            isActive
                              ? "translate-x-1 text-sky-500"
                              : "text-slate-300 dark:text-slate-600",
                          ].join(" ")}
                        >
                          →
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4 dark:border-emerald-400/20 dark:bg-emerald-400/10">
              <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-200">
                Evidence closes the loop
              </p>

              <p className="mt-1 text-sm leading-6 text-emerald-700 dark:text-emerald-300">
                Operational outcomes return to governance, improving
                policy, blueprints, delivery, and the next controlled change.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}