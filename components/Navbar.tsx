'use client';

import Logo from '@/components/shared/Logo';
import { useState } from 'react';
import Scrollspy from 'react-scrollspy';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
// components/Navbar.tsx
import ThemeToggle from './ThemeToggle';

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll-driven opacity + shadow
  const { scrollY } = useScroll();
  // Fade from 0 → 0.9 opacity over the first 80px of scroll
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.9]);

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 8));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Glass overlay that fades in */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-white dark:bg-gray-900 backdrop-blur-md"
        style={{ opacity: bgOpacity }}
      />
      {/* Shadow container (toggles when scrolled) */}
      <div className={`relative ${scrolled ? 'shadow-sm' : 'shadow-none'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Scrollspy
              items={['services', 'testimonials', 'contact']}
              currentClassName="text-blue-600 dark:text-blue-400 font-semibold underline"
              offset={-100}
              componentTag="div"
              className="flex space-x-8"
            >
              <a
                href="#services"
                className="text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
              >
                Contact
              </a>
            </Scrollspy>

            {/* Theme toggle */}
            <ThemeToggle />
            <a href="/resume" className="hover:underline">Resume</a>
</nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur px-4 py-4">
            <Scrollspy
              items={['services', 'testimonials', 'contact']}
              currentClassName="text-blue-600 dark:text-blue-400 font-semibold underline"
              offset={-100}
              componentTag="div"
              className="flex flex-col space-y-4"
            >
              <a
                href="#services"
                onClick={toggleMenu}
                className="text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
              >
                Services
              </a>
              <a
                href="#testimonials"
                onClick={toggleMenu}
                className="text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
              >
                Contact
              </a>
            </Scrollspy>

            <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
              <ThemeToggle />
            </div>
            <a href="/resume" className="hover:underline">Resume</a>
</nav>
        )}
      </div>
    </header>
  );
}

