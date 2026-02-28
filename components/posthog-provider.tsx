"use client";

import posthog from "posthog-js";
import { useEffect } from "react";

const POSTHOG_KEY = "ha_WGshOAwqRvyGIfOlYtksynG4LNkhS7GtE1ft2ZjdvaIfs5m";
const POSTHOG_HOST = "https://insights.hanzo.ai";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      capture_pageview: true,
      capture_pageleave: true,
      persistence: "localStorage+cookie",
    });
  }, []);

  return <>{children}</>;
}
