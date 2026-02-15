// lib/platformVersion.ts
export const PLATFORM_VERSION = {
  system: "Engineering Mesh",
  version: "v1.2.0",
  release: "runtime-stable",
  status: "Verified production baseline",
} as const;

export function formatPlatformVersion() {
  const v = PLATFORM_VERSION;
  return `${v.system} ${v.version} — Release: ${v.release} — ${v.status}`;
}

export const PLATFORM_VERSION_LINE = formatPlatformVersion();
