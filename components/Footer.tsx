import Link from "next/link";
import { LINKS } from "@/config/links";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-blue-200 bg-blue-50/90 text-slate-700 dark:bg-gray-900 dark:text-gray-200 backdrop-blur mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {/* 🌐 Brand Section */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Jutellane Solutions
          </h3>
          <p className="mt-2 text-sm leading-relaxed">
            Cloud Confidence. Delivered. Secure, performance-tuned solutions — built the right way.
          </p>

          {/* 📞 CTA Button */}
          <div className="mt-4">
            <Link
              href={LINKS.introCall}
              aria-label="Schedule your intro call"
              className="inline-block px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Schedule Your Intro Call
            </Link>
          </div>
        </div>

        {/* 🧭 Quick Links */}
        <nav aria-label="Quick links">
          <ul className="space-y-2 text-sm">

            <li><Link href="/" className="hover:underline">Home</Link></li>

            <li><Link href="/projects" className="hover:underline">Projects</Link></li>

            <li><Link href="/blog" className="hover:underline">Blog</Link></li>

            <li>
              <Link href={LINKS.contact} className="hover:underline">
                Contact
              </Link>
            </li>

            {/* Internal résumé page */}
            <li>
              <Link
                href={LINKS.resume}
                prefetch={false}
                className="hover:underline"
                aria-label="Open résumé page"
              >
                Résumé
              </Link>
            </li>

            {/* ✅ Resume PDF (external) */}
            <li>
              <a
                href={LINKS.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                aria-label="Open résumé PDF in a new tab"
              >
                Download Résumé (PDF)
              </a>
            </li>

            {/* ✅ Brochure PDF (external) */}
            <li>
              <a
                href={LINKS.brochure}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                aria-label="Open brochure PDF in a new tab"
              >
                Download a Brochure
              </a>
            </li>

          </ul>
        </nav>

        {/* 📬 Contact Info */}
        <div className="text-sm">
          <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">CONTACT</h4>
          <ul className="space-y-2">
            <li>
              <a className="hover:underline" href="mailto:info@jutellane.com">
                info@jutellane.com
              </a>
            </li>
            <li>
              <a className="hover:underline" href="tel:+14059345864">
                +1 405.934.5864
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://www.linkedin.com/in/longlatjustine"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn: longlatjustine
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* 🧾 Footer bottom bar */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Architected & Built by <span className="font-semibold">Justine Longla T.</span>
        </p>
        <p className="text-xs text-gray-400 mt-1">
          © {year} Jutellane Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
