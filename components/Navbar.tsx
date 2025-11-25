"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as React from "react";

import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/readme", label: "README" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/videos", label: "Videos" }, // internal videos page
  { href: "/blog", label: "Blog" },     // internal redirect route
  { href: "/docs", label: "Docs" },     // internal redirect route
  { href: "/contact", label: "Contact" }, // ✅ FIXED: was "/#contact"
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-blue-700/40 bg-[#2F66F0]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          aria-label="Justine Longla T. home"
        >
          <Image
            src="/brand/justine-logo.png"
            alt="Justine Longla T. logo"
            width={32}
            height={32}
            priority
            className="h-8 w-8 shrink-0 rounded-full ring-2 ring-white/10"
          />

          <span className="brand-pill">
            <span className="hidden sm:inline">Justine Longla T.</span>
            <span className="sm:ml-1">Consulting.</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-2 sm:gap-3">
          {links.map((l) => {
            const isExternal = l.href.startsWith("http");

            const active =
              !isExternal &&
              (pathname === l.href ||
                (l.href !== "/" && pathname?.startsWith(l.href)));

            const base =
              "relative text-sm font-medium transition-colors duration-200";

            const normalClasses = active
              ? "rounded-md px-3 py-2 text-[0.95rem] text-white underline"
              : "rounded-md px-3 py-2 text-[0.95rem] text-blue-50/90 hover:text-white hover:bg-blue-500/30";

            const pillClasses =
              "nav-link-shine inline-flex items-center justify-center rounded-full px-4 py-2 bg-white text-blue-700 shadow-sm hover:bg-slate-100";

            // Pill style only for Docs + Blog
            const isPill = l.label === "Docs" || l.label === "Blog";

            return (
              <Link
                key={l.href}
                href={l.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={isPill ? `${base} ${pillClasses}` : `${base} ${normalClasses}`}
                aria-current={active ? "page" : undefined}
              >
                {l.label}
              </Link>
            );
          })}

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
