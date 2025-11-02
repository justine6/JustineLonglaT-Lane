import Link from 'next/link';
import { LINKS } from '@/config/links';
'use client';
import { useEffect, useState, useCallback } from 'react';

'use client';

const ECOSYSTEM = [
  { label: "Home",     href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog",     href: "/blog" },
  { label: "Contact",  href: LINKS.contact },
];

// Topbar

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMenu(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeMenu]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'LINKS.contact', href: '/LINKS.contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-lg ${
      scrolled ? 'bg-blue-600/95 dark:bg-blue-950/95 shadow-lg'
               : 'bg-blue-500/60 dark:bg-blue-950/60 shadow-md'
    }`}>
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-lg sm:text-xl font-semibold text-white tracking-wide hover:text-gray-100">
          Jutellane Solutions
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} className="text-white/90 hover:text-white transition font-medium">
              {link.name}
            </Link>
          ))}

          {/* Ecosystem dropdown */}
          <div className="relative group">
            <button
              className="px-2 py-2 font-medium text-white/90 hover:text-white focus:outline-none"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Ecosystem
            </button>

            <div
              className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out transform group-hover:translate-y-1 absolute right-0 mt-2 w-56 rounded-xl border border-white/10 bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow-lg p-2 z-50"
              role="menu"
            >
              {ECOSYSTEM.map(l => (
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

          {/* Schedule a Call */}
          <a
            href={LINKS.introCall}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-white hover:bg-white/20"
          >
            📅 Schedule a Call
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
        <div className="md:hidden bg-blue-600/95 dark:bg-blue-950/95 backdrop-blur-lg px-6 pb-6 space-y-4">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="block text-lg text-white/90 hover:text-white font-medium transition"
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-3 border-t border-white/10">
            <div className="text-xs uppercase tracking-wide text-white/70 mb-2">Ecosystem</div>
            <ul className="space-y-2">
              {ECOSYSTEM.map(l => (
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
              📅 Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
