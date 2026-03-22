"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef, useState } from "react";

type PlaneKey = "control" | "execution" | "visibility";

type Plane = {
  key: PlaneKey;
  label: string;
  title: string;
  description: string;
  hotspotClass: string;
};

const planes: Plane[] = [
  {
    key: "control",
    label: "Control",
    title: "Control Plane",
    description:
      "The authority layer where policy, orchestration, identity, and platform governance are defined and enforced.",
    hotspotClass:
      "top-[25%] left-1/2 h-[14%] w-[26%] -translate-x-1/2 rounded-2xl",
  },
  {
    key: "execution",
    label: "Execution",
    title: "Execution Plane",
    description:
      "The delivery layer where services, applications, platform workflows, and operational capabilities actually run.",
    hotspotClass:
      "top-[48%] left-1/2 h-[34%] w-[94%] -translate-x-1/2 rounded-[2rem]",
  },
  {
    key: "visibility",
    label: "Visibility",
    title: "Visibility Plane",
    description:
      "The outward-facing layer where trust, proof, observability, communication, portfolio evidence, and brand presence are surfaced.",
    hotspotClass:
      "top-[84%] left-1/2 h-[11%] w-[84%] -translate-x-1/2 rounded-2xl",
  },
];

export default function HeroBanner() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activePlane, setActivePlane] = useState<PlaneKey>("control");

  const active = useMemo(
    () => planes.find((plane) => plane.key === activePlane) ?? planes[0],
    [activePlane]
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.94]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.10),transparent_28%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_28%)]" />

      <div className="mx-auto grid min-h-[72vh] max-w-7xl items-start gap-12 px-4 pt-10 pb-8 sm:px-6 lg:min-h-[76vh] lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:pt-12 lg:pb-10">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 shadow-sm backdrop-blur dark:border-sky-400/20 dark:bg-slate-900/60 dark:text-sky-300">
              Engineering Mesh Architecture
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              Platform clarity,
              <span className="block text-sky-600 dark:text-sky-400">
                engineered as a system.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              Explore the architecture behind the ecosystem through three
              operating planes: control, execution, and visibility.
            </p>

            <div className="mt-8 inline-flex rounded-full bg-slate-100 p-1 dark:bg-white/5">
              {planes.map((plane) => {
                const isSelected = plane.key === activePlane;

                return (
                  <button
                    key={plane.key}
                    type="button"
                    onClick={() => setActivePlane(plane.key)}
                    className={[
                      "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                      isSelected
                        ? "bg-white text-slate-900 shadow dark:bg-slate-800 dark:text-white"
                        : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white",
                    ].join(" ")}
                  >
                    {plane.label}
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
              <div className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300">
                {active.label} Plane
              </div>

              <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
                {active.title}
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                {active.description}
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4 dark:bg-white/5">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Why this matters
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  This framing gives visitors an executive-level mental model of
                  how the platform is governed, operated, and made visible.
                </p>
              </div>
            </motion.div>

            <div className="mt-5 flex flex-wrap gap-4">
              <a
                href="/projects"
                className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] dark:bg-white dark:text-slate-900"
              >
                Explore Projects
              </a>
              <a
                href="/about"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>

        <div className="relative flex justify-center lg:justify-end lg:pt-16">
          <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 shadow-[0_20px_70px_rgba(15,23,42,0.12)] backdrop-blur dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_20px_70px_rgba(2,8,23,0.55)] lg:max-w-2xl">
            <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_35%)] dark:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_35%)]" />

            <motion.div
              style={{ scale, y, opacity: imageOpacity }}
              className="relative"
            >
              <Image
                src="/brand/platform-architecture.png"
                alt="Engineering Mesh architecture diagram"
                width={1800}
                height={1200}
                priority
                className="h-auto w-full object-cover"
              />

              <div className="absolute inset-0 z-20">
                {planes.map((plane) => {
                  const isActive = plane.key === activePlane;

                  return (
                    <button
                      key={plane.key}
                      type="button"
                      onMouseEnter={() => setActivePlane(plane.key)}
                      onFocus={() => setActivePlane(plane.key)}
                      onClick={() => setActivePlane(plane.key)}
                      className={[
                        "absolute transition-all duration-300",
                        plane.hotspotClass,
                        isActive
                          ? "bg-sky-400/12 ring-2 ring-sky-400 shadow-[0_0_45px_rgba(56,189,248,0.34)] dark:bg-sky-400/10"
                          : "bg-transparent ring-1 ring-transparent hover:bg-white/8 hover:ring-sky-300/40",
                      ].join(" ")}
                      aria-label={`${plane.title} highlight`}
                    >
                      <span className="sr-only">{plane.title}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}