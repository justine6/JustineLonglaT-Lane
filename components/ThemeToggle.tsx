'use client';

import { useTheme } from 'next-themes';
import { LINKS } from '@/config/links';
import { useEffect, useState } from 'react';

import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full p-2 transition-colors duration-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-900"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="sr-only">
        {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
      {isDark ? (
        <Sun size={18} className="text-yellow-400" aria-hidden="true" />
      ) : (
        <Moon size={18} className="text-gray-700 dark:text-gray-200" aria-hidden="true" />
      )}
    </button>
  );
}



