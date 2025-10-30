"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as React from "react";
import { LINKS } from "@/config/links"; // <-- add this

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  // ⬇️ New primary CTA to the embedded scheduler
  { href: "/#contact", label: "Intro Call", cta: true },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  // Smooth-scroll to #contact if we are already on the home page
  const onIntroClick = React.useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === "undefined") return;
    const isHome = window.location.pathname === "/";
    const isIntro = (e.currentTarget.getAttribute("href") || "").includes("#contact");
    if (isHome && isIntro) {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-700/40 bg-[#2F66F0]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/brand/justine-logo.png"
            alt="Jutellane logo"
            width={32}
            height={32}
            priority
            className="h-8 w-8 shrink-0 rounded-full ring-2 ring-white/10"
          />
          <span className="whitespace-nowrap font-semibold text-white">
            Jutellane Solutions
          </span>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-3">
          {links.map((l) => {
            const active =
              pathname === l.href || (l.href !== "/" && pathname?.startsWith(l.href));
            const base =
              "rounded-md px-3 py-2 text-[0.95rem] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60";
            const normal =
              active ? "text-white underline" : "text-blue-50/90 hover:text-white hover:bg-blue-500/30";
            const cta =
              "bg-white/10 text-white ring-1 ring-white/60 hover:bg-white/20";

            return (
              <Link
                key={l.href + l.label}
                href={l.href}
                onClick={l.cta ? onIntroClick : undefined}
                className={[base, l.cta ? cta : normal].join(" ")}
                prefetch={l.href.startsWith("/#") ? false : true}
                aria-label={l.label === "Intro Call" ? "Book Intro Call" : l.label}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
