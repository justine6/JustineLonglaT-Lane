"use client";

import { Calendar, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

import { LINKS } from "@/config/links";
import ThemeToggle from "@/components/ThemeToggle";
import { ProfilePill } from "@/components/ProfilePill";

// Ecosystem dropdown = cross-site navigation
const ECOSYSTEM = [
  { label: "Consulting site", href: "https://consulting.justinelonglat-lane.com" },
  { label: "Docs", href: LINKS.docs },
  { label: "Blog", href: LINKS.blog },
];

// Main nav for this site
const navLinks = [
  { name: "Home", href: LINKS.home },
  { name: "README", href: LINKS.readme },
  { name: "Docs", href: "/docs" },
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
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        {/* Brand + name + signature */}
        <Link
          href="/"
          className="flex items-center gap-3 sm:gap-4 text-white"
          aria-label="Justine Longla T. home"
        >
          {/* Logo (PNG) — NOT the favicon.ico */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
            <Image
              src="/brand/justine-logo.png"
              alt="brand/favicon.ico"
              width={32}
              height={32}
              className="rounded-full"
              priority
            />
          </div>

          {/* Name + Consulting pill + signature */}
          <div className="flex flex-col items-start leading-tight">
            {/* Name + Consulting pill */}
            <div className="flex items-center gap-2 text-sm sm:text-base font-semibold tracking-wide">
              <span>Justine Longla T.</span>
              <span className="rounded-full border border-blue-200/70 bg-blue-500/70 px-2 py-[2px] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/95 shadow-sm">
                Consulting
              </span>
            </div>

            {/* Signature with glowing underline */}
            <span className="mt-1 text-[10px] sm:text-[11px] text-white/90 font-medium tracking-tight">
              by{" "}
              <span className="relative inline-block font-semibold">
                Justine Longla T.
                <span
                  className="pointer-events-none absolute left-0 right-0 -bottom-[1px] h-[2px] rounded-full
                             bg-gradient-to-r from-green-300 via-teal-300 to-blue-400
                             blur-[2px] opacity-80"
                />
              </span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav + ecosystem + profile + CTA */}
        <div className="hidden items-center space-x-4 md:flex">
          {navLinks.map((link) => {
            const isExternal = link.href.startsWith("http");
            const isActive =
              !isExternal &&
              (pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href)));

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
                {link.name}
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
              className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white focus:outline-none"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Ecosystem
            </button>

            <div
              className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out transform group-hover:translate-y-1 absolute right-0 mt-2 w-56 rounded-xl border border-white/10 bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow-lg p-2 z-50"
              role="menu"
            >
              {ECOSYSTEM.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg px-3 py-2 text-sm text-gray-900/90 dark:text-gray-100/90 hover:bg-black/5 dark:hover:bg-white/5"
                  role="menuitem"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Profile + theme toggle */}
          <div className="hidden lg:block">
            <ProfilePill />
          </div>

          <ThemeToggle />

          {/* Schedule Intro Call */}
          <a
            href={LINKS.introCall}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/20"
          >
            <Calendar className="h-4 w-4" />
            <span>Intro call</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-gray-200 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="space-y-4 bg-blue-600/95 px-6 pb-6 backdrop-blur-lg dark:bg-blue-950/95 md:hidden">
          {/* Appearance row */}
          <div className="flex items-center justify-between border-b border-white/10 pt-3 pb-1">
            <span className="text-xs uppercase tracking-wide text-white/70">
              Appearance
            </span>
            <ThemeToggle />
          </div>

          {navLinks.map((link) => {
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
                  {link.name}
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

          <div className="border-t border-white/10 pt-3">
            <div className="mb-2 text-xs uppercase tracking-wide text-white/70">
              Ecosystem
            </div>
            <ul className="space-y-2">
              {ECOSYSTEM.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white/90 hover:text-white"
                    onClick={closeMenu}
                  >
                    {l.label}
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
        </div>
      )}
    </header>
  );
}
