import posthog from "posthog-js";

let initialized = false;

export function initAnalytics() {
  if (typeof window === "undefined") return;
  if (initialized) return;

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

  if (!key) {
    console.debug("[analytics] PostHog key not configured, skipping initialization");
    return;
  }

  posthog.init(key, {
    api_host: host ?? "https://us.i.posthog.com",
    capture_pageview: false, // We handle this manually
    capture_pageleave: true,
  });

  initialized = true;
}

export function trackEvent(event: string, properties?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!initialized) return;
  posthog.capture(event, properties);
}

export function identifyUser(userId: string, traits?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!initialized) return;
  posthog.identify(userId, traits);
}

export function resetUser() {
  if (typeof window === "undefined") return;
  if (!initialized) return;
  posthog.reset();
}
