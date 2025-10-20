'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to toggle background style
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-lg ${
        scrolled
          ? 'bg-blue-600/95 dark:bg-blue-950/95 shadow-lg'
          : 'bg-blue-500/60 dark:bg-blue-950/60 shadow-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-lg sm:text-xl font-semibold text-white tracking-wide hover:text-gray-100"
        >
          Jutellane Solutions
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/90 hover:text-white transition font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-gray-200 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-blue-600/95 dark:bg-blue-950/95 backdrop-blur-lg px-6 pb-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-lg text-white/90 hover:text-white font-medium transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
