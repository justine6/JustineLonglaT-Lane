// components/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";
const STORAGE_KEY = "jutellane-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  // Initial theme
  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  // Apply when changed
  useEffect(() => {
    if (!theme) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  if (!theme) return null;

  const dark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="ml-3 inline-flex items-center gap-1 rounded-full border border-blue-200/80 bg-white/95 px-2 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur hover:scale-105 hover:border-blue-400 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 transition duration-200"
    >
      <span
        className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-[0.7rem] ${
          dark
            ? "bg-slate-800 text-amber-300"
            : "bg-blue-600 text-white shadow"
        }`}
      >
        {dark ? "🌙" : "☀️"}
      </span>
      <span className="hidden sm:inline">{dark ? "Dark" : "Light"}</span>
    </button>
  );
}
