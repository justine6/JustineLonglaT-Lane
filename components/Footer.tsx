import Link from "next/link";
import { LINKS } from "@/config/links";
import { formatPlatformVersion } from "@/lib/platformVersion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-blue-200 bg-blue-50/90 text-slate-700 backdrop-blur dark:bg-gray-900 dark:text-gray-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {/* 🌐 Brand Section */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Justine Longla T.
          </h3>

          <p className="mt-2 text-sm leading-relaxed">
            Cloud Confidence. Delivered. Secure, performance-tuned solutions — built the
            right way.
          </p>

          {/* 📞 / 💼 CTAs */}
          <div className="mt-4 flex flex-wrap gap-3">
            <a
             href={LINKS.introCall}
              aria-label="Schedule your intro call"
              className="inline-block rounded-lg bg-blue-600 px-5 py-2 font-medium text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Schedule Your Intro Call
            </a>

            <a
              href={LINKS.hireMe}
              aria-label="Hire me"
              className="inline-block rounded-lg border border-blue-600 px-5 py-2 font-medium text-blue-700 transition-all duration-300 hover:scale-[1.03] hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-blue-300 dark:hover:bg-blue-950/30"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* 🧭 Quick Links */}
        <nav aria-label="Quick links">
          <ul className="space-y-2 text-sm">
            <li>
              <Link href={LINKS.home} className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href={LINKS.projects} className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <a
                href={LINKS.blogSite}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Platform Notes ↗
              </a>
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
          <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">CONTACT</h4>
          <ul className="space-y-2">
            <li>
              <a className="hover:underline" href="mailto:justine@justinelonglat-lane.com">
                justine@justinelonglat-lane.com
              </a>
            </li>
            <li>
              <Link href={LINKS.videos} className="hover:underline">
                Videos
              </Link>
            </li>
            <li>
              <a className="hover:underline" href="tel:+14054374528">
                +1 405.437-4528
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
      <div className="mt-6 border-t border-blue-100/70 px-4 py-4 dark:border-gray-800/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
            © {year} <span className="font-semibold">Justine Longla T-Lane.</span> ·
            DevSecOps • Cloud • Sustainability
          </p>

          <p className="text-xs text-gray-400 dark:text-gray-500">
            Operating under <span className="font-medium">JustineLonglaT-Lane LLC.</span>
          </p>

        <nav
          aria-label="Platform network"
          className="mt-2 flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-blue-700 dark:text-blue-300"
        >
          <a href={LINKS.mainSite} target="_blank" rel="noopener noreferrer" className="hover:underline">
            Main
          </a>

          <a href={LINKS.docsSite} target="_blank" rel="noopener noreferrer" className="hover:underline">
            Docs
          </a>

          <a href={`${LINKS.docsSite}/runbooks/`} target="_blank" rel="noopener noreferrer" className="hover:underline">
            Runbooks
          </a>

          <a href={`${LINKS.docsSite}/platform/`} target="_blank" rel="noopener noreferrer" className="hover:underline">
            Platform
          </a>

          <a href={LINKS.blogSite} target="_blank" rel="noopener noreferrer" className="hover:underline">
            Platform Notes
          </a>

          <a href={LINKS.toolkit} target="_blank" rel="noopener noreferrer" className="hover:underline">
            Toolkit
          </a>
        </nav>

          <div className="mt-4 w-full max-w-xl border-t border-blue-100/70 dark:border-gray-800/80" />

          <div className="mt-3 text-[11px] text-gray-400 dark:text-gray-500">
            {formatPlatformVersion()}
          </div>

          <div className="text-[11px] text-gray-400 dark:text-gray-500">
            Platform Surfaces: Main · Docs · Platform Notes · Sandbox · Stripe
          </div>

          <div className="flex gap-4 text-[11px] text-gray-400 dark:text-gray-500">
            <a href="/automation-toolkit/" className="hover:underline">
              Automation toolkit
            </a>
            <a href="/sitemap.html" className="hover:underline">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}