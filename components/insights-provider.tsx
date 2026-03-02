"use client";

import posthog from "posthog-js";
import { useEffect } from "react";

const INSIGHTS_KEY = process.env.NEXT_PUBLIC_INSIGHTS_KEY || "ha_WGshOAwqRvyGIfOlYtksynG4LNkhS7GtE1ft2ZjdvaIfs5m";
const INSIGHTS_HOST = process.env.NEXT_PUBLIC_INSIGHTS_HOST || "https://insights.hanzo.ai";

export function InsightsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(INSIGHTS_KEY, {
      api_host: INSIGHTS_HOST,
      capture_pageview: true,
      capture_pageleave: true,
      persistence: "localStorage+cookie",
    });
  }, []);

  return <>{children}</>;
}

// Backward-compatible alias
export const PostHogProvider = InsightsProvider;
