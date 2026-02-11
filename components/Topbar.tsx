// components/Topbar.tsx
"use client";

import { Calendar, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

import { LINKS } from "@/config/links";
import ThemeToggle from "@/components/ThemeToggle";
import { ProfilePill } from "@/components/ProfilePill";

type NavItem = { name: string; href: string };
type EcoItem = { label: string; href: string };

// Detect true external links
function isExternalHref(href: string) {
  return /^(https?:)?\/\//i.test(href);
}

// Ecosystem dropdown = cross-site navigation (external)
const ECOSYSTEM: EcoItem[] = [
  { label: "Consulting site", href: "https://consulting.justinelonglat-lane.com" },
  { label: "Docs", href: LINKS.docs },
  { label: "Blog", href: LINKS.blog },
];

// Main nav for this site
const NAV_LINKS: NavItem[] = [
  { name: "Home", href: LINKS.home },
  { name: "README", href: LINKS.readme },
  { name: "Docs", href: LINKS.docs },
  { name: "Files", href: "/files" },
  { name: "About", href: "/about" },
  { name: "Projects", href: LINKS.projects },
  { name: "Blog", href: LINKS.blog },
  { name: "Contact", href: LINKS.contact },
];

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Add shadow / stronger bg after scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes mobile menu
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeMenu]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-lg ${
        scrolled
          ? "bg-blue-600/95 dark:bg-blue-950/95 shadow-lg"
          : "bg-blue-500/60 dark:bg-blue-950/60 shadow-md"
      }`}
    >
      <nav
        className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4"
        aria-label="Primary navigation"
      >
        {/* LEFT */}
        <div className="flex min-w-0 items-center gap-3 shrink-0 whitespace-nowrap">
          <Link
            href="/"
            className="flex items-center gap-3 sm:gap-4 text-white"
            aria-label="Justine Longla T-Lane home"
            onClick={closeMenu}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <Image
                src="/brand/justine-logo.png"
                alt="Justine Longla T-Lane logo"
                width={32}
                height={32}
                className="rounded-full"
                priority
              />
            </div>

            <div className="flex flex-col items-start leading-tight">
              <div className="text-sm font-semibold tracking-wide sm:text-base">
                Justine Longla T-Lane.
              </div>
            </div>
          </Link>

          <Link
            href="/engineering-mesh"
            className="
              hidden sm:inline-flex ml-1 rounded-full p-[2px]
              bg-gradient-to-r from-sky-400/50 via-emerald-300/40 to-blue-500/50
              shadow-sm transition hover:shadow-md hover:scale-[1.02] will-change-transform
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60
            "
            aria-label="Engineering Mesh Hub"
            onClick={closeMenu}
          >
            <span className="rounded-full bg-white px-3 py-[3px] text-[0.7rem] font-semibold tracking-[0.12em] text-slate-900 transition hover:bg-slate-50">
              Engineering <span className="ml-1 text-sky-600">Mesh</span>Hub
            </span>
          </Link>
        </div>

        {/* CENTER (true center pinned + width-capped + scrollable) */}
        <div
          className="
            absolute left-1/2 hidden -translate-x-1/2 md:flex items-center justify-center gap-2
            max-w-[56vw] overflow-x-auto whitespace-nowrap
            [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          "
        >
          {NAV_LINKS.map((l) => {
            const external = isExternalHref(l.href);
            const active =
              !external &&
              (pathname === l.href || (l.href !== "/" && pathname?.startsWith(l.href)));

            // tighter pills (less “fat”)
            const cls = `rounded-full px-3 py-1.5 text-[13px] font-semibold transition ${
              active
                ? "bg-emerald-400/20 text-white ring-1 ring-emerald-300/40"
                : "bg-white/10 text-white/90 hover:bg-white/15"
            }`;

            return external ? (
              <a
                key={l.name}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cls}
              >
                {l.name} <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <Link key={l.name} href={l.href} className={cls}>
                {l.name}
              </Link>
            );
          })}

          <details className="relative">
            <summary className="list-none cursor-pointer rounded-full px-3 py-1.5 text-[13px] font-semibold text-white/90 bg-white/10 hover:bg-white/15 transition">
              Ecosystem
            </summary>
            <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-white/10 bg-blue-950/95 shadow-xl">
              {ECOSYSTEM.map((x) => (
                <a
                  key={x.label}
                  href={x.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-sm text-white/90 hover:bg-white/10"
                >
                  {x.label} ↗
                </a>
              ))}
            </div>
          </details>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-end gap-3 justify-self-end">
          <div className="hidden md:flex items-center gap-3">
            <ProfilePill />
            <ThemeToggle />
            <a
              href={LINKS.introCall}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
            >
              <Calendar className="h-4 w-4" />
              Intro call
            </a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-xl bg-white/10 p-2 text-white hover:bg-white/15"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-blue-950/70 backdrop-blur-lg">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="grid gap-2">
              {NAV_LINKS.map((l) => {
                const external = isExternalHref(l.href);
                const active =
                  !external &&
                  (pathname === l.href || (l.href !== "/" && pathname?.startsWith(l.href)));

                const cls = `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  active
                    ? "bg-emerald-400/25 text-white ring-1 ring-emerald-300/40"
                    : "bg-white/10 text-white hover:bg-white/15"
                }`;

                return external ? (
                  <a
                    key={l.name}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className={cls}
                  >
                    {l.name} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <Link key={l.name} href={l.href} onClick={closeMenu} className={cls}>
                    {l.name}
                  </Link>
                );
              })}

              <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="text-xs font-semibold tracking-[0.18em] text-white/70">
                  ECOSYSTEM
                </div>
                <div className="mt-2 grid gap-1">
                  {ECOSYSTEM.map((x) => (
                    <a
                      key={x.label}
                      href={x.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                      onClick={closeMenu}
                    >
                      {x.label} ↗
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between gap-3">
                <ProfilePill />
                <ThemeToggle />
                <a
                  href={LINKS.introCall}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
                >
                  <Calendar className="h-4 w-4" />
                  Intro call
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

