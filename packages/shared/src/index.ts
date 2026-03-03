export type Health = { ok: true; now: string };

export function nowIso() {
  return new Date().toISOString();
}