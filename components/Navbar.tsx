// components/Navbar.tsx
"use client";

import { Calendar, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { LINKS } from "@/config/links";
import ThemeToggle from "@/components/ThemeToggle";
import { ProfilePill } from "@/components/ProfilePill";

// Cross-site navigation (external ecosystem)
const ECOSYSTEM = [
  { label: "Main ↗", href: LINKS.mainSite },
  { label: "Docs ↗", href: LINKS.docsSite },
  { label: "Blog ↗", href: LINKS.blogSite },
];

// Main nav for this site
const NAV_LINKS = [
  { name: "Home", href: LINKS.home },
  { name: "README", href: LINKS.readme },

  // External docs site
  { name: "Docs", href: LINKS.docs },

  // Internal downloads hub
  { name: "Files", href: "/files" },

  { name: "About", href: "/about" },
  { name: "Projects", href: LINKS.projects },
  { name: "Blog", href: LINKS.blog },
  { name: "Contact", href: LINKS.contact },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Add shadow / stronger bg on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu with Escape
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeMenu]);

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
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4"
          aria-label="Primary navigation"
        >
          {/* Brand + “by Justine Longla T.” signature */}
          <Link
            href="/"
            className="flex items-center gap-3 text-white sm:gap-4"
            aria-label="Justine Longla T. home"
          >
            {/* Logo / favicon pill */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <Image
                src="/brand/justine-logo.png"
                alt="Justine Longla T. logo"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>

            {/* Name + Consulting pill + signature */}
            <div className="flex flex-col items-start leading-tight">
              {/* Name + “Consulting” badge */}
              <div className="flex items-center gap-2 text-sm font-semibold tracking-wide sm:text-base">
                <span>Justine Longla T.</span>
                <span className="rounded-full border border-blue-200/70 bg-blue-500/70 px-2 py-[2px] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/95 shadow-sm">
                  Consulting
                </span>
              </div>

              {/* Sub-signature with glowing underline */}
              <span className="mt-1 text-[10px] font-medium tracking-tight text-white/90 sm:text-[11px]">
                by{" "}
                <span className="relative inline-block font-semibold">
                  Justine Longla T.
                  <span
                    className="pointer-events-none absolute inset-x-0 -bottom-[1px] h-[2px] rounded-full
                               bg-gradient-to-r from-green-300 via-teal-300 to-blue-400
                               blur-[2px] opacity-80"
                  />
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center space-x-4 md:flex">
            {NAV_LINKS.map((link) => {
              const isExternal = link.href.startsWith("http");
              const isActive =
                !isExternal &&
                (pathname === link.href ||
                  (link.href !== "/" && pathname?.startsWith(link.href)));

              const className = `nav-pill ${
                isActive ? "nav-pill-active" : "nav-pill-idle"
              }`;

              return isExternal ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  <span>{link.name}</span>
                  <span aria-hidden="true" className="pl-1 text-[0.7rem]">
                    ↗
                  </span>
                </a>
              ) : (
                <Link key={link.name} href={link.href} className={className}>
                  {link.name}
                </Link>
              );
            })}

            {/* Ecosystem dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 dark:focus-visible:ring-offset-blue-950"
                aria-haspopup="true"
              >
                Ecosystem
              </button>
              <div
                className="invisible absolute right-0 z-50 mt-2 w-60 transform rounded-xl border border-white/10 bg-white/90 p-2 opacity-0 shadow-lg backdrop-blur transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-1 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-1 group-focus-within:opacity-100 dark:bg-gray-900/95"
                role="menu"
                aria-label="JustineLonglaT-Lane ecosystem"
              >
                {ECOSYSTEM.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm text-gray-900/90 hover:bg-black/5 dark:text-gray-100/90 dark:hover:bg-white/5"
                    role="menuitem"
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true" className="text-[0.7rem]">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>

              {/* Profile pill (desktop only) */}
              <div className="hidden items-center gap-3 lg:flex">
                <ProfilePill />
              </div>

            {/* Intro call CTA */}
            <a
              href={LINKS.calIntro}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 dark:focus-visible:ring-offset-blue-950"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <span>Intro call</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="text-white transition hover:text-gray-200 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {/* Mobile dropdown */}
        {menuOpen && (
          <nav
            className="space-y-4 bg-blue-600/95 px-6 pb-6 backdrop-blur-lg dark:bg-blue-950/95 md:hidden"
            aria-label="Mobile navigation"
          >
            {/* Appearance row */}
            <div className="flex items-center justify-between border-b border-white/10 pt-3 pb-1">
              <span className="text-xs uppercase tracking-wide text-white/70">
                Appearance
              </span>
              <ThemeToggle />
            </div>

            {/* Primary links */}
            <div className="space-y-2">
              {NAV_LINKS.map((link) => {
                const isExternal = link.href.startsWith("http");

                if (isExternal) {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="block text-lg font-medium text-white/90 transition hover:text-white"
                    >
                      {link.name} <span aria-hidden="true">↗</span>
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="block text-lg font-medium text-white/90 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Ecosystem section */}
            <div className="border-t border-white/10 pt-3">
              <div className="mb-2 text-xs uppercase tracking-wide text-white/70">
                Ecosystem
              </div>
              <ul className="space-y-2">
                {ECOSYSTEM.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white/90 hover:text-white"
                      onClick={closeMenu}
                    >
                      {item.label} <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href={LINKS.introCall}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-white hover:bg-white/20"
                onClick={closeMenu}
              >
                📅 Intro call
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
