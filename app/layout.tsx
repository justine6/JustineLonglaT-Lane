// app/layout.tsx
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Providers from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "Justine Longla T. — Cloud Confidence. Delivered.",
  description:
    "Secure, performance-tuned cloud solutions with certified DevSecOps expertise.",
  icons: {
    icon: "/brand/favicon.ico",
    shortcut: "/brand/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Justine Longla T. — Cloud Confidence. Delivered.",
    description:
      "Secure, performance-tuned cloud solutions with certified DevSecOps expertise.",
    url: "https://justinelonglat-lane.com",
    type: "website",
    images: ["/brand/og-default.png"],
  },
};

export const viewport: Viewport = { themeColor: "#1e40af" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh antialiased">
        <Providers>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-blue-600 focus:px-3 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>

          <Navbar />
          <HeroBanner />

          <div className="flex min-h-dvh flex-col">
            <main id="content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
