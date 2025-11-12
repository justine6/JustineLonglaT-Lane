"use client";

import { useEffect, useState } from "react";

export default function SuccessTip() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 3800);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      <div className="rounded-xl bg-white/90 px-4 py-3 text-sm text-slate-700 shadow-xl ring-1 ring-slate-200 backdrop-blur dark:bg-slate-900/90 dark:text-slate-200 dark:ring-slate-800">
        Need to reschedule? Check your confirmation email—everything is included.
      </div>
    </div>
  );
}
