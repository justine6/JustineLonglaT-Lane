'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export type NavItem = {
  label: string;
  href: string;
  external?: boolean; // opens in new tab if true
};

type Props = {
  label: string;
  items: NavItem[];
  align?: 'left' | 'right'; // popover alignment
  className?: string;       // optional button class override
};

export default function NavDropdown({ label, items, align = 'right', className }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // close on outside click / Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`px-2 py-2 font-medium text-white/90 hover:text-white focus:outline-none ${className ?? ''}`}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)} // also toggles on click (keyboard / touch)
      >
        {label}
      </button>

      <div
        role="menu"
        className={[
          'absolute mt-2 w-56 rounded-xl border border-white/10 bg-white/90',
          'dark:bg-gray-900/90 backdrop-blur shadow-lg p-2 z-50 transition-all duration-150',
          open ? 'opacity-100 translate-y-1 visible' : 'opacity-0 translate-y-0 invisible',
          align === 'right' ? 'right-0' : 'left-0',
        ].join(' ')}
      >
        {items.map((l) =>
          l.external ? (
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
          ) : (
            <Link
              key={l.href}
              href={l.href}
              className="block rounded-lg px-3 py-2 text-sm text-gray-900/90 dark:text-gray-100/90 hover:bg-black/5 dark:hover:bg-white/5"
              role="menuitem"
            >
              {l.label}
            </Link>
          )
        )}
      </div>
    </div>
  );
}
