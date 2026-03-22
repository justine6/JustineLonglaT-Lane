export type Health = {
  ok: true;
  now: string;
};

export const siteName = "Justine Longla T-Lane";

export function nowIso(): string {
  return new Date().toISOString();
}