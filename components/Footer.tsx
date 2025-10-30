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
              className="inline-block px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-sm"
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
            <li><Link href={LINKS.contact} className="hover:underline">Contact</Link></li>
            <li><Link href="/resume.pdf" className="hover:underline" target="_blank">Résumé</Link></li>
            <li><Link href="/brochure.pdf" className="hover:underline" target="_blank">Download a Brochure</Link></li>
          </ul>
        </nav>

        {/* 📬 Contact Info */}
        <div className="text-sm">
          <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">CONTACT</h4>
          <ul className="space-y-2">
            <li>
              <a
                className="hover:underline"
                href="mailto:info@jutellane.com"
              >
                info@jutellane.com
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="tel:+14059345864"
              >
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
      <div className="text-center text-xs py-4 opacity-70 border-t border-blue-100 dark:border-gray-800">
        © {year} <span className="font-medium">Jutellane Solutions</span>. All rights reserved.
      </div>
    </footer>
  );
}
