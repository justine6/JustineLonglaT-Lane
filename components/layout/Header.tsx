import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { ProfilePill } from "@/components/ProfilePill";

export function Header() {
  return (
    <header className="border-b border-blue-100/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        {/* Brand: profile + “Projects” chip */}
        <Link
          href="/"
          className="flex items-center gap-3 text-slate-900 dark:text-slate-100"
          aria-label="Justine Longla T. home"
        >
          <ProfilePill />

          <span className="hidden sm:inline-flex items-center rounded-full border border-blue-300/70 bg-blue-50/80 px-2 py-[2px] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-blue-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-blue-300">
            Projects
          </span>
        </Link>

        {/* Nav + toggle */}
        <nav className="ml-auto flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
          <Link href="/projects" className="relative btn-shiny">
            Projects
          </Link>
          <Link href="/blog" className="relative btn-shiny">
            Blog
          </Link>
          <Link href="/contact" className="relative btn-shiny">
            Contact
          </Link>

          {/* 🌓 Theme toggle */}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
