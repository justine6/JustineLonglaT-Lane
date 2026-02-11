// components/Navbar.tsx
"use client";

import { Calendar, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import { LINKS } from "@/config/links";
import ThemeToggle from "@/components/ThemeToggle";
import { ProfilePill } from "@/components/ProfilePill";

type NavItem = { name: string; href: string };
type EcoItem = { label: string; href: string };

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}

// Cross-site navigation (external ecosystem)
const ECOSYSTEM: EcoItem[] = [
  { label: "Main ↗", href: LINKS.mainSite },
  { label: "Docs ↗", href: LINKS.docsSite },
  { label: "Blog ↗", href: LINKS.blogSite },
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


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll styling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu w/ Escape
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeMenu]);

  const navWithActive = useMemo(() => {
    return NAV_LINKS.map((link) => {
      const external = isExternalHref(link.href);
      const active =
        !external &&
        (pathname === link.href ||
          (link.href !== "/" && pathname?.startsWith(link.href)));

      return { ...link, external, active };
    });
  }, [pathname]);

  return (
    <>
      {/* Skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-sm focus:text-slate-50 focus:shadow-lg"
      >
        Skip to main content
      </a>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-lg ${
          scrolled
            ? "bg-blue-600/95 dark:bg-blue-950/95 shadow-lg"
            : "bg-blue-500/70 dark:bg-blue-950/70 shadow-md"
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          {/* =========================
              ROW 1: Brand + Prime pills (L) | Profile/Theme/CTA (R)
             ========================= */}
          <div className="flex items-center justify-between gap-3 py-3 sm:py-4">
            {/* LEFT */}
            <div className="flex min-w-0 items-center gap-2 text-white sm:gap-3">
              {/* Brand */}
              <Link
                href="/"
                className="flex items-center gap-3 sm:gap-4"
                aria-label="Justine Longla T-Lane. home"
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

                <div className="flex flex-col items-start justify-center leading-tight">
                  <div className="text-sm font-semibold tracking-wide sm:text-base">
                    Justine Longla T-Lane.
                  </div>
                </div>
              </Link>

              {/* Prime pills (desktop) */}
              <div className="hidden md:flex flex-wrap items-center gap-2">
                {/* Automation Platform */}
                <a
                  href="https://docs.justinelonglat-lane.com/automation-toolkit.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full p-[2px] bg-gradient-to-r from-emerald-300/50 via-white/15 to-sky-300/50 shadow-sm transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  aria-label="Automation Platform"
                >
                  <span className="flex items-center gap-2 rounded-full bg-white/15 px-3 py-[3px] text-[0.7rem] font-semibold tracking-[0.12em] text-white backdrop-blur transition hover:bg-white/25">
                    Automation <span className="hidden lg:inline">Platform</span>
                    <span aria-hidden="true" className="text-[0.7rem]">↗</span>
                  </span>
                </a>

                {/* Publishing Platform */}
                <Link
                  href="/case-studies/engineering-grade-publishing"
                  className="inline-flex rounded-full p-[2px] bg-gradient-to-r from-white/35 via-white/20 to-white/35 shadow-sm transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  aria-label="Publishing Platform"
                  onClick={closeMenu}
                >
                  <span className="flex items-center rounded-full bg-white/15 px-3 py-[3px] text-[0.7rem] font-semibold tracking-[0.12em] text-white backdrop-blur transition hover:bg-white/25">
                    Publishing <span className="hidden lg:inline">Platform</span>
                  </span>
                </Link>

                {/* Engineering Mesh Hub */}
                <Link
                  href="/engineering-mesh"
                  className="inline-flex rounded-full p-[2px] bg-gradient-to-r from-sky-400/60 via-teal-300/55 to-blue-500/60 shadow-sm transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  aria-label="Engineering Mesh Hub"
                  onClick={closeMenu}
                >
                  <span className="flex items-center rounded-full bg-white px-3 py-[3px] text-[0.7rem] font-semibold tracking-[0.12em] text-slate-900 transition hover:bg-slate-50">
                    Engineering <span className="ml-1 text-sky-600">Mesh</span> Hub
                  </span>
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center justify-end gap-3">
              <div className="hidden items-center gap-3 md:flex">
                <div className="hidden lg:flex">
                  <ProfilePill />
                </div>

                {/* keep ONLY this toggle */}
                <ThemeToggle />

                <a
                  href={LINKS.calIntro ?? LINKS.introCall}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-white/20"
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <span>Intro call</span>
                </a>
              </div>

              {/* Mobile menu button */}
              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center rounded-xl bg-white/10 p-2 text-white hover:bg-white/15"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* =========================
              ROW 2: Centered nav that can wrap (desktop)
             ========================= */}
          <div className="hidden md:flex items-center justify-center gap-2 pb-3">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {navWithActive.map((link) => {
                const className = `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  link.active
                    ? "bg-emerald-400/25 text-white ring-1 ring-emerald-300/40"
                    : "bg-white/10 text-white hover:bg-white/15"
                }`;

                return link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    <span>{link.name}</span>
                    <span aria-hidden="true" className="pl-1 text-[0.7rem]">↗</span>
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={className}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Ecosystem dropdown */}
              <details className="relative">
                <summary className="list-none cursor-pointer rounded-full px-4 py-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 transition">
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
          </div>
        </div>

        {/* =========================
            MOBILE PANEL
           ========================= */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-blue-950/70 backdrop-blur-lg">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <div className="grid gap-2">
                {/* Prime links (mobile) */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="text-xs font-semibold tracking-[0.18em] text-white/70">
                    PRIME
                  </div>
                  <div className="mt-2 grid gap-1">
                    <Link
                      href="/engineering-mesh"
                      onClick={closeMenu}
                      className="rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                    >
                      Engineering Mesh Hub
                    </Link>
                    <Link
                      href="/case-studies/engineering-grade-publishing"
                      onClick={closeMenu}
                      className="rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                    >
                      Publishing Platform
                    </Link>
                    <a
                      href="https://docs.justinelonglat-lane.com/automation-toolkit.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                    >
                      Automation Platform <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>

                {/* Primary links */}
                {navWithActive.map((l) => {
                  const cls = `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    l.active
                      ? "bg-emerald-400/25 text-white ring-1 ring-emerald-300/40"
                      : "bg-white/10 text-white hover:bg-white/15"
                  }`;

                  return l.external ? (
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

                {/* Ecosystem (mobile) */}
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

                {/* Theme + CTA */}
                <div className="mt-2 flex items-center justify-between gap-3">
                  <ThemeToggle />
                  <a
                    href={LINKS.calIntro ?? LINKS.introCall}
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
    </>
  );
}
