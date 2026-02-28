"use client";

import { useEffect } from "react";
import { initAnalytics, trackEvent } from "./index";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackEvent("$pageview");
  }, []);

  return <>{children}</>;
}
