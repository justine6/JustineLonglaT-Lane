// components/NavbarCTA.tsx (example snippet)
import Link from "next/link";
import { LINKS } from "@/config/links";

export function NavbarCTA() {
  return (
    <Link
      href={LINKS.consultingIntroAbsolute}
      prefetch
      className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
    >
      Book Intro Call
    </Link>
  );
}

