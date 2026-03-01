---
title: "Hanzo Analytics: Real-Time Intelligence for Commerce"
date: "2016-06-15"
author: "Zach Kelling"
tags: ["analytics", "commerce", "ai", "launch"]
description: "Launching Hanzo Analytics — real-time behavioral intelligence for commerce teams who need answers now, not tomorrow."
---

# Hanzo Analytics: Real-Time Intelligence for Commerce

Most analytics tools tell you what happened yesterday. That is useful for reports. It is useless for decisions that need to happen right now.

Today we are launching Hanzo Analytics: real-time behavioral intelligence for commerce.

## The Problem

Commerce analytics in 2016 means waiting. Wait for batch processing. Wait for dashboard refresh. Wait for the data warehouse to finish overnight ETL. By the time you see a conversion drop, you have already lost the revenue.

We built our own analytics pipeline because nothing on the market met our latency requirements. Now we are making it available to everyone.

## What Hanzo Analytics Does

### Real-Time Event Ingestion

Events flow from your storefront to queryable dashboards in under 50 milliseconds. Not minutes. Not seconds. Milliseconds.

- Page views, clicks, cart actions, purchases
- Custom events with arbitrary properties
- Server-side and client-side SDKs
- No sampling — every event captured

### Behavioral Analysis

Understanding what customers do, not just counting pageviews:

- **Funnels**: Define conversion paths, see where users drop off. Updated in real time.
- **Cohorts**: Group users by behavior, acquisition channel, or custom properties. Track retention over time.
- **Segmentation**: Slice any metric by any property. No pre-defined dimensions.
- **Attribution**: Multi-touch attribution across marketing channels with configurable models.

### Revenue Intelligence

Analytics built for commerce, not adapted from generic tools:

- Revenue by product, category, channel, campaign — live
- Customer lifetime value predictions
- Cart abandonment analysis with recovery suggestions
- Inventory velocity tracking

## Architecture

The analytics engine is built on our distributed datastore — the same system powering EARLE recommendations. This is not a SaaS wrapper around a third-party database. We own the entire stack from event ingestion to query execution.

Key design decisions:

- **Column-oriented storage** for analytical queries
- **Streaming aggregation** for real-time dashboards
- **Tiered retention** for cost-efficient long-term storage
- **SQL-compatible query interface** for ad-hoc analysis

## Privacy by Design

All data stays in your Hanzo account. No cross-customer data sharing. No selling behavioral data to third parties. GDPR compliance built in from the beginning (before GDPR was finalized — we saw it coming).

## Pricing

Usage-based pricing scaled to your event volume:

- **Starter**: 100K events/month free
- **Growth**: $0.001 per event beyond free tier
- **Enterprise**: Volume discounts and dedicated infrastructure

## Get Started

Hanzo Analytics is available now for all Hanzo platform customers. Drop in the JavaScript SDK and start seeing data within minutes.

---

*Zach Kelling is the founder of Hanzo Industries.*
