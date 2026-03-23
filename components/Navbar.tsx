"use client";

import { Calendar, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

import { ProfilePill } from "@/components/ProfilePill";
import ThemeToggle from "@/components/ThemeToggle";
import { LINKS } from "@/config/links";

type NavItem = { name: string; href: string };

type EcoLink = { label: string; href: string };
type EcoGroup = {
  title: string;
  items: EcoLink[];
};

function isExternalHref(href: string) {
  return /^(https?:)?\/\//i.test(href);
}

const ECOSYSTEM: EcoGroup[] = [
  {
    title: "BUSINESS",
    items: [
      { label: "Main Site", href: LINKS.mainSite },
      { label: "Consulting Site", href: LINKS.consultingSite },
    ],
  },
  {
    title: "PLATFORM",
    items: [
      { label: "Engineering Mesh Hub", href: LINKS.engineeringMesh },
      { label: "Automation Platform", href: LINKS.automationPlatform },
      { label: "Automation Toolkit", href: LINKS.toolkit },
    ],
  },
  {
    title: "KNOWLEDGE",
    items: [
      { label: "Docs Platform", href: LINKS.docsSite },
      { label: "Runbooks", href: `${LINKS.docsSite}/runbooks/` },
      { label: "Platform Docs", href: `${LINKS.docsSite}/platform/` },
      { label: "Blog Platform", href: LINKS.blogSite },
    ],
  },
];
const NAV_LINKS: NavItem[] = [
  { name: "Home", href: LINKS.home },
  { name: "README", href: LINKS.readme },
  { name: "Docs", href: LINKS.docsSite },
  { name: "Files", href: LINKS.files },
  { name: "About", href: LINKS.about },
  { name: "Projects", href: LINKS.projects },
  { name: "Services", href: LINKS.services },
  { name: "Blog", href: LINKS.blogSite },
  { name: "Contact", href: LINKS.contact },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

      return {
        ...link,
        external,
        active,
      };
    });
  }, [pathname]);

  const shellBg = [
    "bg-gradient-to-r from-[#061a3a]/95 via-[#0a2f66]/90 to-[#061a3a]/95",
    "dark:from-[#040f24]/95 dark:via-[#071a3a]/92 dark:to-[#040f24]/95",
  ].join(" ");

  const shellBorder = "border-b border-white/10";
  const shellShadow = scrolled
    ? "shadow-[0_18px_40px_-26px_rgba(0,0,0,0.75)]"
    : "shadow-sm";

  const pillBase =
    "rounded-full px-4 py-2 text-sm font-semibold transition " +
    "ring-1 ring-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60";

  const pillIdle =
    "bg-white/10 text-white/90 hover:bg-white/16 hover:ring-white/15 hover:-translate-y-[1px] hover:shadow-[0_14px_26px_-22px_rgba(0,0,0,0.8)]";

  const pillActive =
    "bg-white/16 text-white ring-white/25 shadow-[0_14px_26px_-24px_rgba(0,0,0,0.85)]";

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-sm focus:text-slate-50 focus:shadow-lg"
      >
        Skip to main content
      </a>

      <header
        className={[
          "sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300",
          shellBg,
          shellBorder,
          shellShadow,
        ].join(" ")}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-3 py-3 sm:py-4">
            <div className="flex min-w-0 items-center gap-2 text-white sm:gap-3">
              <Link
                href={LINKS.home}
                className="flex items-center gap-3 sm:gap-4"
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

                <div className="flex flex-col items-start justify-center leading-tight">
                  <div className="text-sm font-semibold tracking-wide sm:text-base">
                    Justine Longla T-Lane.
                  </div>
                  <div className="hidden text-[11px] text-white/70 sm:block">
                    Cloud Confidence. Delivered.
                  </div>
                </div>
              </Link>

              <div className="hidden flex-wrap items-center gap-2 md:flex">
                <a
                  href={LINKS.automationPlatform}
                  className="inline-flex rounded-full bg-gradient-to-r from-emerald-300/50 via-white/15 to-sky-300/50 p-[2px] shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  aria-label="Automation Platform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-2 rounded-full bg-white/12 px-3 py-[3px] text-[0.7rem] font-semibold tracking-[0.12em] text-white backdrop-blur transition hover:bg-white/20">
                    Automation <span className="hidden lg:inline">Platform</span>
                    <span aria-hidden="true" className="text-[0.7rem]">
                      ↗
                    </span>
                  </span>
                </a>

                <a
                  href={LINKS.publishingPlatform}
                  className="inline-flex rounded-full bg-gradient-to-r from-white/28 via-white/14 to-white/28 p-[2px] shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  aria-label="Publishing Platform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center rounded-full bg-white/12 px-3 py-[3px] text-[0.7rem] font-semibold tracking-[0.12em] text-white backdrop-blur transition hover:bg-white/20">
                    Publishing <span className="hidden lg:inline">Platform</span>
                    <span aria-hidden="true" className="ml-1 text-[0.7rem]">
                      ↗
                    </span>
                  </span>
                </a>

                <Link
                  href={LINKS.engineeringMesh}
                  className="inline-flex rounded-full bg-gradient-to-r from-sky-400/55 via-teal-300/45 to-blue-500/55 p-[2px] shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  aria-label="Engineering Mesh Hub"
                  onClick={closeMenu}
                >
                  <span className="flex items-center rounded-full bg-white px-3 py-[3px] text-[0.7rem] font-semibold tracking-[0.12em] text-slate-900 transition hover:bg-slate-50">
                    Engineering <span className="ml-1 text-sky-600">Mesh</span> Hub
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <div className="hidden items-center gap-3 md:flex">
                <div className="hidden lg:flex">
                  <ProfilePill />
                </div>

                <ThemeToggle />

                <a
                  href={LINKS.consultingIntroAbsolute}
                  className="
                    inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white
                    bg-gradient-to-r from-sky-500/70 via-blue-500/70 to-indigo-500/70
                    hover:from-sky-500/85 hover:via-blue-500/85 hover:to-indigo-500/85
                    ring-1 ring-white/20 hover:ring-white/35
                    shadow-[0_14px_28px_-22px_rgba(0,0,0,0.8)]
                    transition hover:-translate-y-[1px]
                  "
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <span>Intro call</span>
                </a>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 p-2 text-white ring-1 ring-white/15 hover:bg-white/16 md:hidden"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div className="hidden items-center justify-center gap-2 pb-3 md:flex">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {navWithActive.map((link) => {
                const className = [pillBase, link.active ? pillActive : pillIdle].join(" ");

                return link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className={className}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{link.name}</span>
                    <span aria-hidden="true" className="pl-1 text-[0.7rem] text-white/85">
                      ↗
                    </span>
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

              <details className="relative">
                <summary
                  className={[
                    pillBase,
                    "list-none cursor-pointer bg-white/10 text-white hover:bg-white/16 hover:ring-white/15 hover:-translate-y-[1px]",
                  ].join(" ")}
                >
                  Ecosystem
                </summary>

                <div className="absolute right-0 mt-2 w-80 overflow-hidden rounded-2xl border border-white/10 bg-[#061a3a]/95 shadow-2xl backdrop-blur-xl">
                  <div className="border-b border-white/10 px-4 py-3 text-[11px] font-semibold tracking-[0.22em] text-white/60">
                    ECOSYSTEM
                  </div>

                  <div className="py-2">
                    {ECOSYSTEM.map((group) => (
                      <div key={group.title} className="px-2 py-1">
                        <div className="px-3 pb-1 pt-2 text-[11px] font-semibold tracking-[0.22em] text-white/45">
                          {group.title}
                        </div>

                        <div className="grid gap-1">
                          {group.items.map((item) => {
                            const external = isExternalHref(item.href);

                            return external ? (
                              <a
                                key={item.label}
                                href={item.href}
                                className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-white/90 transition hover:bg-white/10"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span>{item.label}</span>
                                <span aria-hidden="true" className="text-[0.7rem] text-white/65">
                                  ↗
                                </span>
                              </a>
                            ) : (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-white/90 transition hover:bg-white/10"
                                onClick={closeMenu}
                              >
                                <span>{item.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#061a3a]/92 backdrop-blur-lg md:hidden">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <div className="grid gap-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="text-xs font-semibold tracking-[0.18em] text-white/70">
                    PRIME
                  </div>
                  <div className="mt-2 grid gap-1">
                    <Link
                      href={LINKS.engineeringMesh}
                      onClick={closeMenu}
                      className="rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                    >
                      Engineering Mesh Hub
                    </Link>

                    <a
                      href={LINKS.publishingPlatform}
                      onClick={closeMenu}
                      className="rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Publishing Platform <span aria-hidden="true">↗</span>
                    </a>

                    <a
                      href={LINKS.automationPlatform}
                      onClick={closeMenu}
                      className="rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Automation Platform <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>

                {navWithActive.map((link) => {
                  const cls = [
                    "rounded-xl px-4 py-3 text-sm font-semibold transition ring-1 ring-transparent",
                    link.active
                      ? "bg-white/16 text-white ring-white/25"
                      : "bg-white/8 text-white hover:bg-white/14 hover:ring-white/15",
                  ].join(" ");

                  return link.external ? (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
                      className={cls}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
                      className={cls}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="text-xs font-semibold tracking-[0.18em] text-white/70">
                    ECOSYSTEM
                  </div>

                  <div className="mt-2 grid gap-3">
                    {ECOSYSTEM.map((group) => (
                      <div key={group.title}>
                        <div className="px-1 pb-1 text-[11px] font-semibold tracking-[0.18em] text-white/45">
                          {group.title}
                        </div>

                        <div className="grid gap-1">
                          {group.items.map((item) => {
                            const external = isExternalHref(item.href);

                            return external ? (
                              <a
                                key={item.label}
                                href={item.href}
                                className="rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                                onClick={closeMenu}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {item.label} <span aria-hidden="true">↗</span>
                              </a>
                            ) : (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                                onClick={closeMenu}
                              >
                                {item.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between gap-3">
                  <ThemeToggle />
                  <a
                    href={LINKS.consultingIntroAbsolute}
                    onClick={closeMenu}
                    className="
                      inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white
                      bg-gradient-to-r from-sky-500/70 via-blue-500/70 to-indigo-500/70
                      hover:from-sky-500/85 hover:via-blue-500/85 hover:to-indigo-500/85
                      ring-1 ring-white/20 hover:ring-white/35 transition
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
    </>
  );
}