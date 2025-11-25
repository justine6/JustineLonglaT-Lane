import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="border-b border-blue-100/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
          <span className="font-semibold tracking-tight">Justine Longla T.</span>
          <span className="rounded-full border border-blue-300/70 bg-blue-50/80 px-2 py-[2px] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-blue-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-blue-300">
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
          <Link href={/* your contact link */ "/contact"} className="relative btn-shiny">
            Contact
          </Link>

          {/* 🌓 Theme toggle */}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
