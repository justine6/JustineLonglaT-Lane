"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = (theme === "dark") || (theme === "system" && resolvedTheme === "dark");

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="ml-3 inline-flex items-center gap-1 rounded-full border border-blue-200/80 bg-white/95 px-2 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur transition duration-200 hover:scale-105 hover:border-blue-400 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
    >
      <span
        className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-[0.7rem] ${
          isDark ? "bg-slate-800 text-amber-300" : "bg-blue-600 text-white shadow"
        }`}
      >
        {isDark ? "🌙" : "☀️"}
      </span>
      <span className="hidden sm:inline">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
