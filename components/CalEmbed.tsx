"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  calUrl: string;           // full Cal.com embed URL
  height?: number;          // iframe height
  title?: string;           // accessible title
  className?: string;
};

export default function CalEmbed({
  calUrl,
  height = 820,
  title = "Scheduling",
  className = "",
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [errored, setErrored] = useState(false);

  // Lazy-load when scrolled into view
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "200px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className={className}>
      {/* Skeleton */}
      {!visible && !errored && (
        <div
          className="h-[560px] sm:h-[720px] rounded-xl border border-slate-200 dark:border-slate-800
                     bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/40 dark:to-slate-900/20
                     animate-pulse grid place-items-center text-slate-400"
          aria-busy="true"
        >
          Loading scheduler…
        </div>
      )}

      {/* Fallback (if Cal.com fails to load) */}
      {errored && (
        <div className="rounded-xl border border-amber-300 bg-amber-50/60 p-4 text-amber-800 dark:bg-amber-900/20 dark:text-amber-200">
          Couldn’t load the scheduler. Please{" "}
          <a className="underline" href="mailto:info@jutellane.com">email us</a>{" "}
          and we’ll book you right away.
        </div>
      )}

      {/* Embed */}
      {visible && !errored && (
        <iframe
          src={calUrl}
          title={title}
          height={height}
          className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onError={() => setErrored(true)}
        />
      )}
    </div>
  );
}
