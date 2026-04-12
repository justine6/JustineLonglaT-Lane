type Level = "info" | "warn" | "error";

export function runtimeLog(
  level: Level,
  event: string,
  details: Record<string, unknown> = {}
) {
  const payload = {
    level,
    event,
    timestamp: new Date().toISOString(),
    environment: process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? "unknown",
    ...details,
  };

  if (level === "error") {
    console.error(payload);
    return;
  }

  if (level === "warn") {
    console.warn(payload);
    return;
  }

  console.log(payload);
}