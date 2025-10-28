import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// ⬇️ default import, no curly braces
import LayoutShellClient from '@/components/LayoutShellClient';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://jutellane.com'),
  title: 'Jutellane Solutions | Cloud Confidence. Delivered.',
  description:
    'Certified DevSecOps and Cloud Automation for startups and growing teams.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Jutellane Solutions',
    description:
      'Secure, scalable DevSecOps & Cloud services by Justine Tekang.',
    url: 'https://jutellane.com',
    siteName: 'Jutellane Solutions',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Jutellane Solutions Banner' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jutellane Solutions',
    description:
      'Secure, scalable DevSecOps & Cloud services by Justine Tekang.',
    images: ['/og.png'],
    creator: '@justinelongla',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={[
          inter.className,
          'min-h-dvh bg-white text-gray-800 antialiased selection:bg-blue-600/20',
          'dark:bg-gray-950 dark:text-gray-200',
        ].join(' ')}
      >
        {/* If this line throws, the import above did not bind to a function */}
        <LayoutShellClient>{children}</LayoutShellClient>
      </body>
    </html>
  );
}
