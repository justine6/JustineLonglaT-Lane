import { Redis } from "@upstash/redis";

let redisSingleton: Redis | null = null;

export function getRedis(): Redis {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.KV_REST_API_URL;

  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.KV_REST_API_TOKEN;

  if (!url || !token) {
    throw new Error(
      "Missing Redis environment variables. Expected UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN or KV_REST_API_URL / KV_REST_API_TOKEN."
    );
  }

  if (!redisSingleton) {
    redisSingleton = new Redis({ url, token });
  }

  return redisSingleton;
}