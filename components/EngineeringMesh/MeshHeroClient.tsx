"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Portal = {
  label: string;
  sub: string;
  href: string;
  accent: string;
  dot: string;
};

function isExternalHref(href: string) {
  return href.startsWith("http");
}

export default function MeshHeroClient(props: {
  PAGE_SECTION: string;
  PILL: string;
  CARD: string;
  MUTED: string;
  HEADING: string;
  PORTALS: readonly Portal[];
}) {
  const { PAGE_SECTION, PILL, CARD, MUTED, HEADING, PORTALS } = props;

  return (
    <section id="hero" className={`relative overflow-hidden ${PAGE_SECTION}`}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_18%_22%,rgba(59,130,246,0.12),transparent_55%),radial-gradient(800px_circle_at_82%_18%,rgba(16,185,129,0.10),transparent_55%),radial-gradient(700px_circle_at_50%_90%,rgba(14,165,233,0.08),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(15,23,42,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.06)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/85 to-white dark:from-slate-950 dark:via-slate-950/85 dark:to-slate-950" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-4 pb-12 pt-16 md:px-6 md:pb-14 md:pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-[0.18em] shadow-sm ${PILL}`}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_18px_rgba(16,185,129,0.35)]" />
            CASE STUDY HUB
          </span>

          <span
            className={`inline-flex items-center px-4 py-2 text-xs ${PILL} bg-slate-50 dark:bg-slate-900/60`}
          >
            System map • CI/CD • Observability • Guardrails
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className={`mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl ${HEADING}`}
        >
          <span className="relative inline-block">
            <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 blur-2xl opacity-30" />
            The Justine Longla T-Lane Engineering Mesh
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`mt-4 max-w-3xl text-sm leading-relaxed md:text-base ${MUTED}`}
        >
          What started as “just one website” became a multi-site engineering ecosystem: consulting, documentation,
          blogs, and projects — wired together with CI/CD, PowerShell automation, DNS discipline, Resend, and
          cloud-native guardrails.
        </motion.p>

        <ul className="mt-6 grid max-w-3xl gap-2 text-sm md:grid-cols-3">
          <li className={`rounded-xl px-3 py-2 shadow-sm ${CARD}`}>A map of the ecosystem</li>
          <li className={`rounded-xl px-3 py-2 shadow-sm ${CARD}`}>Case studies you can copy</li>
          <li className={`rounded-xl px-3 py-2 shadow-sm ${CARD}`}>Proof of delivery & trust</li>
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href="#overview-video"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
          >
            <span className="text-base">▶</span>
            <span>Watch the overview</span>
          </Link>

          <Link
            href="#case-studies"
            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 ${PILL} dark:hover:bg-slate-900/80`}
          >
            View case studies
          </Link>

          <Link
            href="/"
            className={`inline-flex items-center gap-2 text-xs font-medium ${MUTED} hover:text-slate-900 dark:hover:text-slate-50`}
          >
            ← Back to Home
          </Link>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {[
            { k: "Multi-site", v: "Consulting • Docs • Blog" },
            { k: "Delivery", v: "CI/CD + verification" },
            { k: "Trust", v: "Security + audit-ready" },
          ].map((x) => (
            <div key={x.k} className={`${CARD} p-4`}>
              <div className={`text-xs font-semibold tracking-wide ${MUTED}`}>{x.k}</div>
              <div className={`mt-2 text-sm ${HEADING}`}>{x.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PORTALS.map((p) => {
            const external = isExternalHref(p.href);

            const PortalInner = (
              <>
                <div
                  className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${p.accent} opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className="relative flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${p.dot}`} />
                      <div className={`text-sm font-semibold ${HEADING}`}>{p.label}</div>
                    </div>
                    <div className={`mt-1 text-xs ${MUTED}`}>{p.sub}</div>
                  </div>

                  <span className="text-xs font-semibold text-slate-500 transition group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-slate-50">
                    {external ? "↗" : "→"}
                  </span>
                </div>

                <div className="relative mt-4 h-[1px] w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                  <div className="h-full w-0 bg-slate-400/60 transition-all duration-300 group-hover:w-full dark:bg-slate-600/70" />
                </div>
              </>
            );

            const baseClass =
              "group relative rounded-2xl border p-4 shadow-sm transition " +
              "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none " +
              "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white " +
              "dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700 dark:hover:bg-slate-900/80 dark:focus-visible:ring-offset-slate-950";

            if (external) {
              return (
                <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer" className={baseClass}>
                  {PortalInner}
                </a>
              );
            }

            return (
              <Link key={p.label} href={p.href} className={baseClass}>
                {PortalInner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
