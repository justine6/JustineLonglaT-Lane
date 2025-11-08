import { Ratelimit } from "@upstash/ratelimit";
import { LINKS } from '@/config/links';
import { Redis } from "@upstash/redis";

/**
 * We keep singletons during dev/HMR to avoid re-instantiation.
 */
const g = globalThis as unknown as {
  __redis?: ReturnType<typeof Redis.fromEnv>;
  __ipLimiter?: Ratelimit;
  __emailLimiter?: Ratelimit;
  __hashLimiter?: Ratelimit;
};

const redis = g.__redis ?? Redis.fromEnv();
g.__redis = redis;

/**
 * Separate windows for independent controls:
 * - IP:         5 requests / 10 minutes (sliding window)
 * - Email:      3 requests / 1 hour     (sliding window)
 * - ContentHash:2 requests / 30 minutes (sliding window)
 *
 * Tune as needed.
 */
export const ipLimiter =
  g.__ipLimiter ??
  new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "10 m"),
    analytics: true,
    prefix: "rl:ip",
  });

export const emailLimiter =
  g.__emailLimiter ??
  new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(3, "1 h"),
    analytics: true,
    prefix: "rl:email",
  });

export const hashLimiter =
  g.__hashLimiter ??
  new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(2, "30 m"),
    analytics: true,
    prefix: "rl:hash",
  });

g.__ipLimiter = ipLimiter;
g.__emailLimiter = emailLimiter;
g.__hashLimiter = hashLimiter;

export function getIdentity(headers: Headers) {
  const xff = headers.get("x-forwarded-for");
  const ip =
    xff?.split(",")[0].trim() ||
    headers.get("x-real-ip") ||
    headers.get("cf-connecting-ip") ||
    "unknown";
  return ip;
}

export function rateHeaders(limit: number, remaining: number, reset: number) {
  const h = new Headers();
  h.set("X-RateLimit-Limit", String(limit));
  h.set("X-RateLimit-Remaining", String(Math.max(0, remaining)));
  h.set("X-RateLimit-Reset", String(reset));
  return h;
}


