// components/NavbarCTA.tsx
import { LINKS } from "@/config/links";

export function NavbarCTA() {
  return (
    <a
      href={LINKS.consultingIntroAbsolute}
      className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
    >
      Book Intro Call
    </a>
  );
}