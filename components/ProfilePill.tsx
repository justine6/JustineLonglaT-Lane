// components/ProfilePill.tsx
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

export function ProfilePill() {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 shadow-md ring-1 ring-slate-200/80">
      {/* Avatar */}
      <div className="h-7 w-7 overflow-hidden rounded-full ring-2 ring-white">
        <Image
          src="/images/justine-profile.png"
          alt="Justine Longla T."
          width={28}
          height={28}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span className="text-[0.55rem] uppercase tracking-[0.16em] text-slate-500">
          Consulting by
        </span>
        <span className="text-[0.7rem] sm:text-xs font-semibold text-slate-900">
          Justine Longla T.
        </span>
      </div>

      {/* Theme toggle inside the pill */}
      <div className="ml-1 flex items-center">
        <ThemeToggle />
      </div>
    </div>
  );
}
