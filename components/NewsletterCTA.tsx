"use client";

import { useEffect, useState } from "react";
function AnimatedCount({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const duration = 900;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplay(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [value]);

  return <span>{display.toLocaleString()}</span>;
}
export default function NewsletterCTA() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function loadCount() {
      try {
        const res = await fetch("/api/newsletter/count", {
          cache: "no-store",
        });

        const data = await res.json();

        if (data.success) {
          setCount(data.count);
        }
      } catch (err) {
        console.error("Failed to load subscriber count", err);
      }
    }

    loadCount();
  }, []);

  return (
    <div>
      {/* Your existing CTA UI */}

      {count !== null && count > 0 ? (
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          Join <AnimatedCount value={count} />+ readers following JLT Platform Notes.
        </p>
      ) : (
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          Join the growing JLT Platform Notes readership.
        </p>
      )}
    </div>
  );
}