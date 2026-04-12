import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import Script from "next/script";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          suppressHydrationWarning
          className="min-h-dvh bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50"
        >
          <Providers>
            <Script
              id="org-schema"
              type="application/ld+json"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  name: "JLT-Lane",
                  legalName: "Justine Longla T-Lane LLC",
                  alternateName: [
                    "JLT Lane",
                    "JLT-Lane Engineering Mesh",
                    "Justine Longla T-Lane",
                  ],
                  url: "https://justinelonglat-lane.com",
                  logo: "https://justinelonglat-lane.com/logo.png",
                  founder: {
                    "@type": "Person",
                    name: "Justine Longla T.",
                  },
                  slogan: "Cloud Confidence. Delivered.",
                }),
              }}
            />

            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-blue-600 focus:px-3 focus:py-2 focus:text-white"
            >
              Skip to content
            </a>

            <Navbar />

            <div className="flex min-h-dvh flex-col">
              <main id="main-content" className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}