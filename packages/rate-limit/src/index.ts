import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

function createRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  return new Redis({ url, token });
}

export function createRateLimiter(opts?: { requests?: number; window?: string }) {
  const redis = createRedis();
  if (!redis) {
    // Return a no-op rate limiter when Redis is not configured
    return {
      limit: async (_identifier: string) => ({
        success: true,
        limit: 0,
        remaining: 0,
        reset: 0,
      }),
    };
  }

  return new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(
      opts?.requests ?? 10,
      (opts?.window as `${number} ${"s" | "m" | "h" | "d"}`) ?? "10 s",
    ),
    analytics: true,
  });
}

export const rateLimiter = createRateLimiter();

export type RateLimitResult = {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
};
