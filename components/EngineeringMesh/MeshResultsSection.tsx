// components/EngineeringMesh/MeshResultsSection.tsx
import React from "react";

type Props = {
  PAGE_SECTION: string;
  HEADING: string;
  MUTED: string;
  CARD: string;
};

const RESULTS_METRICS = [
  { label: "Deploy consistency", value: "↑", detail: "Standardized CI/CD" },
  { label: "Prod surprises", value: "↓", detail: "Observability added" },
  { label: "Manual ops", value: "↓", detail: "Automation + guardrails" },
  { label: "Delivery speed", value: "↑", detail: "Predictable environments" },
] as const;

function getMetricIcon(value: string) {
  const v = value.toLowerCase();
  if (v.includes("↓") || v.includes("-")) return "▼";
  if (v.includes("↑") || v.includes("+")) return "▲";
  if (v.includes("added") || v.includes("tuned") || v.includes("fast") || v.includes("improved")) return "⚡";
  return "•";
}

export default function MeshResultsSection({ PAGE_SECTION, HEADING, MUTED, CARD }: Props) {
  return (
    <section id="results" className={`scroll-mt-24 ${PAGE_SECTION}`}>
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>
          Outcomes & Results
        </h2>

        <p className={`mt-2 max-w-3xl text-sm md:text-base ${MUTED}`}>
          The mesh shifted the platform from “working by effort” to “working by design” — with repeatable deploys,
          fewer surprises, and faster, safer delivery.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {RESULTS_METRICS.map((m) => (
            <div key={m.label} className={`${CARD} p-4`}>
              <div className={`text-xs font-semibold tracking-wide ${MUTED}`}>{m.label}</div>

              <div className="mt-2 flex items-center gap-2">
                <span className="text-lg" aria-hidden="true">
                  {getMetricIcon(m.value)}
                </span>
                <div className="text-2xl font-semibold">{m.value}</div>
              </div>

              <div className={`mt-2 text-xs ${MUTED}`}>{m.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
