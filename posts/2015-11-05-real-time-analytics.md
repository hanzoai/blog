---
title: "Real-Time Analytics: From Data to Decisions"
date: "2015-11-05"
author: "Zach Kelling"
tags: ["analytics", "data", "real-time", "commerce"]
description: "How we built real-time analytics into Crowdstart and what we learned about data-driven commerce."
---

# Real-Time Analytics: From Data to Decisions

Commerce platforms generate enormous data streams. Most waste it. Today we are launching real-time analytics in Crowdstart, and sharing what we learned building it.

## The Batch Analytics Problem

Traditional analytics work like this:

1. Events collect throughout the day
2. Nightly batch job aggregates data
3. Dashboard updates next morning
4. Decision made on stale information

For a crowdfunding campaign, this is useless. Campaigns succeed or fail in hours, not days. By the time batch analytics reveal a problem, the window for action has closed.

## Real-Time Requirements

We needed analytics that could:

- Show live conversion funnels during campaign launches
- Alert on anomalies within minutes
- Support ad-hoc queries without pre-aggregation
- Scale with event volume spikes

## Architecture

Our analytics pipeline processes events in three stages:

### Collection

Every user action generates an event. Events stream to a durable log partitioned by customer ID. Order guarantees per-customer, high parallelism across customers.

### Processing

Stream processors compute aggregations continuously:

- Sliding window conversions (1min, 5min, 1hr)
- Real-time cohort analysis
- Funnel progression tracking
- Revenue velocity

Results write to time-series storage optimized for dashboard queries.

### Query

A query engine supports both:

- Pre-computed metrics for instant dashboard load
- Ad-hoc exploration of raw events

## Key Metrics

After analyzing hundreds of campaigns, these metrics predict success:

**Early velocity**: Revenue in first 4 hours correlates strongly with final outcome.

**Return rate**: Percentage of visitors who return within 24 hours.

**Social amplification**: Ratio of social-referred visits to direct visits.

**Cart completion**: Time from cart creation to checkout.

## Privacy by Design

Analytics are powerful. They are also sensitive. Our approach:

- Aggregate before store when possible
- No PII in event payloads
- Customer-level data access requires explicit permission
- Retention limits enforced automatically

## Results

Creators using real-time analytics see:

- 23% improvement in campaign outcomes
- 3x faster response to conversion drops
- Better allocation of marketing spend

## What's Next

We are experimenting with predictive analytics: using early signals to forecast campaign outcomes and recommend actions. More on this soon.

---

*Zach Kelling is the founder of Hanzo Industries.*
