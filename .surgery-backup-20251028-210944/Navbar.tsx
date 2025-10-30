"use client";

import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Jutellane Solutions" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image
            src="/brand/logo-light.png"
            alt="Jutellane"
            width={28}
            height={28}
            priority
          />
          <span className="hidden sm:inline">Jutellane Solutions</span>
        </Link>
        <nav className="ml-auto flex items-center gap-3 sm:gap-5">
          {links.slice(1).map(l => (
            <Link key={l.href} href={l.href} className="text-sm hover:underline">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
