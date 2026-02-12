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
  { name: "Docs", href: LINKS.docs }, // external
  { name: "Files", href: "/files" },
  { name: "About", href: "/about" },
  { name: "Projects", href: LINKS.projects },
  { name: "Blog", href: LINKS.blog }, // external
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
      className={[
        "sticky top-0 z-50 w-full backdrop-blur-xl transition-all duration-300",
        // Premium ecosystem blue gradient (light + dark)
        scrolled
          ? "bg-gradient-to-b from-[#0B1F3B]/95 via-[#0A1A33]/92 to-[#08172E]/90 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          : "bg-gradient-to-b from-[#123463]/85 via-[#0F2B52]/78 to-[#0B2344]/70 shadow-[0_6px_18px_rgba(0,0,0,0.22)]",
        // subtle top highlight line
        "border-b border-white/10",
      ].join(" ")}
    >
      {/* thin glow line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-60" />

      <nav
        className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4"
        aria-label="Primary navigation"
      >
        {/* LEFT */}
        <div className="flex min-w-0 shrink-0 items-center gap-3 whitespace-nowrap">
          <Link
            href="/"
            className="flex items-center gap-3 text-white sm:gap-4"
            aria-label="Justine Longla T-Lane home"
            onClick={closeMenu}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 shadow-sm">
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
              <div className="text-[11px] text-white/70 hidden sm:block">
                Cloud Confidence. Delivered.
              </div>
            </div>
          </Link>

          {/* Mesh Hub badge */}
          <Link
            href="/engineering-mesh"
            className="
              hidden sm:inline-flex ml-1 rounded-full p-[2px]
              bg-gradient-to-r from-sky-400/60 via-emerald-300/45 to-blue-500/60
              shadow-sm transition hover:shadow-md hover:scale-[1.02] will-change-transform
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70
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

            const cls = [
              "rounded-full px-4 py-2 text-[13px] font-semibold transition",
              "border border-white/10 bg-white/8 text-white/90",
              "hover:bg-white/12 hover:border-white/20 hover:-translate-y-[1px]",
              "shadow-[0_1px_0_rgba(255,255,255,0.08)]",
              active
                ? "bg-white/14 border-emerald-300/35 ring-1 ring-emerald-300/35 shadow-[0_0_0_1px_rgba(52,211,153,0.15),0_10px_25px_rgba(0,0,0,0.25)]"
                : "",
            ].join(" ");

            return external ? (
              <a
                key={l.name}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cls}
              >
                {l.name} <span aria-hidden="true" className="text-[0.7rem] opacity-90">↗</span>
              </a>
            ) : (
              <Link key={l.name} href={l.href} className={cls} onClick={closeMenu}>
                {l.name}
              </Link>
            );
          })}

          {/* Ecosystem dropdown */}
          <details className="relative">
            <summary
              className="
                list-none cursor-pointer rounded-full px-4 py-2 text-[13px] font-semibold
                border border-white/10 bg-white/8 text-white/90
                hover:bg-white/12 hover:border-white/20 transition
              "
            >
              Ecosystem
            </summary>
            <div className="absolute right-0 mt-2 w-64 overflow-hidden rounded-2xl border border-white/10 bg-[#071427]/95 shadow-[0_18px_55px_rgba(0,0,0,0.45)]">
              <div className="px-4 py-2 text-[11px] tracking-[0.18em] font-semibold text-white/60">
                CROSS-SITE
              </div>
              {ECOSYSTEM.map((x) => (
                <a
                  key={x.label}
                  href={x.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 text-sm text-white/90 hover:bg-white/8"
                >
                  <span>{x.label}</span>
                  <span aria-hidden="true" className="text-[0.7rem] opacity-80">↗</span>
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
              href={LINKS.calIntro ?? LINKS.introCall}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white
                bg-gradient-to-r from-sky-500/70 to-indigo-500/70
                border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                hover:from-sky-500/80 hover:to-indigo-500/80 hover:-translate-y-[1px]
                transition
              "
            >
              <Calendar className="h-4 w-4" />
              Intro call
            </a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-xl bg-white/10 p-2 text-white hover:bg-white/15 border border-white/10"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#071427]/80 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="grid gap-2">
              {NAV_LINKS.map((l) => {
                const external = isExternalHref(l.href);
                const active =
                  !external &&
                  (pathname === l.href || (l.href !== "/" && pathname?.startsWith(l.href)));

                const cls = [
                  "rounded-xl px-4 py-3 text-sm font-semibold transition border",
                  active
                    ? "bg-white/12 text-white border-emerald-300/30 ring-1 ring-emerald-300/30"
                    : "bg-white/8 text-white border-white/10 hover:bg-white/12 hover:border-white/20",
                ].join(" ");

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
                <ThemeToggle />
                <a
                  href={LINKS.calIntro ?? LINKS.introCall}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="
                    inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white
                    bg-gradient-to-r from-sky-500/70 to-indigo-500/70
                    border border-white/15
                    hover:from-sky-500/80 hover:to-indigo-500/80
                    transition
                  "
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
