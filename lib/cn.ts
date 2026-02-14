// lib/cn.ts
// If you already have cn() in your repo, KEEP yours and delete this file.
// This is a safe fallback.
export function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}
