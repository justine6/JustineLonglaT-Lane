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
      {/* Brand */}
      <Link
        href="/"
        className="flex items-center gap-3 sm:gap-4 text-white"
        aria-label="Justine Longla T-Lane. home"
      >
        {/* Logo */}
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

        {/* Name + MeshHub pill */}
        <div className="flex flex-col items-start leading-tight">
          <div className="flex items-center gap-2 text-sm font-semibold tracking-wide sm:text-base">
            <span>Justine Longla T-Lane.</span>

            <span className="rounded-full bg-white px-3 py-[3px] text-[0.7rem] font-semibold tracking-wide text-slate-900 ring-1 ring-sky-300/40">
              Engineering <span className="text-sky-600">Mesh</span>Hub
            </span>
          </div>
        </div>
      </Link>

      {/* Right side nav content continues... */}
    </nav>
  </header>
  );
}
