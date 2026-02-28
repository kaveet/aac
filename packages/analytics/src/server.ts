import { PostHog } from "posthog-node";

let client: PostHog | null = null;

function getClient(): PostHog | null {
  if (client) return client;

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

  if (!key) return null;

  client = new PostHog(key, {
    host: host ?? "https://us.i.posthog.com",
    flushAt: 1,
    flushInterval: 0,
  });

  return client;
}

export function trackServerEvent(
  distinctId: string,
  event: string,
  properties?: Record<string, unknown>,
) {
  const client = getClient();
  if (!client) return;
  client.capture({ distinctId, event, properties });
}

export async function shutdownAnalytics() {
  if (client) {
    await client.shutdown();
    client = null;
  }
}
