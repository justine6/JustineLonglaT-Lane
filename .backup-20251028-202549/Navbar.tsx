"use client";

import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/70 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image
            src="/brand/logo-light.png"
            alt="Jutellane Solutions"
            width={28}
            height={28}
            priority
          />
          <span className="hidden sm:inline">Jutellane Solutions</span>
        </Link>

        <nav className="ml-auto flex items-center gap-4 sm:gap-6 text-sm">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="hover:underline">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
