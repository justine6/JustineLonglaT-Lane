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
            Jutellane Solutions with Justine
          </h3>
          <p className="mt-2 text-sm leading-relaxed">
            Cloud Confidence. Delivered. Secure, performance-tuned solutions —
            built the right way.
          </p>

          {/* 📞 / 💼 CTAs */}
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href={LINKS.introCall}
              aria-label="Schedule your intro call"
              className="inline-block px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Schedule Your Intro Call
            </Link>

            <Link
              href={LINKS.hireMe}
              aria-label="Hire me"
              className="inline-block px-5 py-2 rounded-lg border border-blue-600 text-blue-700 dark:text-blue-300 font-medium hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:scale-[1.03] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Hire Me
            </Link>
          </div>
        </div>

        {/* 🧭 Quick Links */}
        <nav aria-label="Quick links">
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href={LINKS.contact} className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href={LINKS.hireMe} className="hover:underline">
                Hire Me
              </Link>
            </li>

            {/* Internal résumé page (same tab) */}
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

            {/* PDF links must use <a> */}
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
          <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">
            CONTACT
          </h4>
          <ul className="space-y-2">
            <li>
              <a className="hover:underline" href="mailto:info@justinelonglat-lane.com">
                info@justinelonglat-lane.com
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

      {/* 🧾 Footer bottom bar — unified with Docs/Blog/Projects */}
      <div className="mt-6 border-t border-blue-100/70 dark:border-gray-800/80 px-4 py-4">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-2 text-center">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            © {year}{" "}
            <span className="font-semibold">Justine Longla T.</span> · DevSecOps
            • Cloud • Sustainability
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Operating under <span className="font-medium">Jutellane Solutions with Justine</span>.
          </p>

          <nav
            aria-label="Jutellane network"
            className="mt-2 flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-blue-700 dark:text-blue-300"
          >
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
            <a
              href="https://docs.justinelonglat-lane.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Docs
            </a>
            <a
              href="https://docs.justinelonglat-lane.com/toolkit.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Automation Toolkit
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
// deploy bump: ensure footer attribution is deployed
