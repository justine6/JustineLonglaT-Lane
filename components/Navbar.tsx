"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as React from "react";

import ThemeToggle from "@/components/ThemeToggle";
// NOTE: LINKS import kept in case you use it later; safe to remove if unused.
// import { LINKS } from "@/config/links";

const links = [
  { href: "/", label: "Home" },
  { href: "/readme", label: "README" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "https://blogs.jutellane.com", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-blue-700/40 bg-[#2F66F0]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6">
        {/* Logo and Title */}
            <Link href="/" className="flex min-w-0 items-center gap-3">
              <Image
                src="/brand/justine-logo.png"
                alt="Jutellane logo"
                width={32}
                height={32}
                priority
                className="h-8 w-8 shrink-0 rounded-full ring-2 ring-white/10"
              />

              {/* Glowing brand pill */}
              <span className="brand-pill whitespace-nowrap">
                Jutellane Solutions with Justine.
              </span>
            </Link>

        {/* Navigation Links + Theme toggle */}
        <nav className="flex items-center gap-2 sm:gap-3">
          {links.map((l) => {
            const active =
              pathname === l.href ||
              (l.href !== "/" && pathname?.startsWith(l.href));

            const isExternal = l.href.startsWith("http");

            return (
              <Link
                key={l.href}
                href={l.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={[
                  "rounded-md px-3 py-2 text-[0.95rem] transition-all duration-200",
                  active
                    ? "text-white underline"
                    : "text-blue-50/90 hover:text-white hover:bg-blue-500/30",
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}

          {/* 🌓 Theme toggle pill */}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
