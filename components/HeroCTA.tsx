"use client";

import Link from "next/link";
import { FolderGit2 } from "lucide-react";
import { LINKS } from "@/config/links";

export default function HeroCTA() {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
      {/* Primary CTA – intro call */}
      <Link
        href={LINKS.introCall}
        className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/40 hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-slate-900"
      >
        Schedule Your Intro Call
      </Link>

      {/* Secondary CTA – contact */}
      <Link
        href={LINKS.contact}
        className="inline-flex items-center justify-center rounded-full border border-white/70 px-5 py-2 text-sm font-medium text-white/90 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-300 focus-visible:ring-offset-slate-900"
      >
        Contact
      </Link>

      {/* New CTA – projects */}
      <Link
        href={LINKS.projects}
        className="inline-flex items-center justify-center rounded-full border border-white/70 px-5 py-2 text-sm font-medium text-white/90 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-300 focus-visible:ring-offset-slate-900"
      >
        <FolderGit2 className="mr-2 h-4 w-4" aria-hidden="true" />
        View Projects
      </Link>
    </div>
  );
}
