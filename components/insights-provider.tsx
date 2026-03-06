"use client";

import insights from "@hanzo/insights";
import { useEffect } from "react";

const INSIGHTS_KEY = process.env.NEXT_PUBLIC_INSIGHTS_KEY || "hi_e16a2d5a8033442d87f090b24c606825";
const INSIGHTS_HOST = process.env.NEXT_PUBLIC_INSIGHTS_HOST || "https://insights.hanzo.ai";

export function InsightsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    insights.init(INSIGHTS_KEY, {
      api_host: INSIGHTS_HOST,
      capture_pageview: true,
      capture_pageleave: true,
      persistence: "localStorage+cookie",
    });
    insights.register({ app: "hanzo-blog", org: "hanzo" });
  }, []);

  return <>{children}</>;
}
