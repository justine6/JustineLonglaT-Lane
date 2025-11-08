// components/ThemeProvider.tsx
'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { LINKS } from '@/config/links';
import type { ReactNode } from 'react';

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"           // toggles 'class' on <html>
      defaultTheme="system"       // 'light' | 'dark' | 'system'
      enableSystem
      disableTransitionOnChange   // avoids janky color transitions on toggle
    >
      {children}
    </NextThemesProvider>
  );
}


