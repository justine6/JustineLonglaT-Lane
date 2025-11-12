// components/NavbarCTA.tsx (example snippet)
import Link from "next/link";

export function NavbarCTA() {
  return (
    <Link
      href="/intro-call"
      prefetch
      className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
    >
      Book Intro Call
    </Link>
  );
}
