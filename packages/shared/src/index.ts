export type Health = {
  ok: true;
  now: string;
};

export const siteName = "JLT-LANE";

export function nowIso(): string {
  return new Date().toISOString();
}