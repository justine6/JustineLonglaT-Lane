'use client';

import type { PropsWithChildren } from 'react';

import ThemeProvider from '@/components/ThemeProvider';
import Topbar from '@/components/Topbar';
import ConditionalHero from '@/components/ConditionalHero';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';

export default function LayoutShellClient({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <Topbar />
      <ConditionalHero />
      {children}
      <Footer />
      <BackToTopButton />
    </ThemeProvider>
  );
}
