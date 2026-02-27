---
title: "Commerce AI: What We Learned in 2017"
date: "2017-12-12"
author: "Zach Kelling"
tags: ["machine-learning", "ai", "commerce", "retrospective"]
description: "Lessons from a year of building and deploying AI systems for commerce."
---

# Commerce AI: What We Learned in 2017

2017 was the year Hanzo committed fully to AI-powered commerce. Here is what we learned building and deploying machine learning systems at scale.

## Lesson 1: Data Quality Trumps Model Complexity

We spent months improving model architectures. Our biggest gains came from fixing data pipelines.

Issues we found:
- Duplicate events from retry logic
- Timezone inconsistencies in timestamps
- Missing data from mobile apps
- Label noise from unclear UI states

A simple model on clean data outperformed a complex model on messy data. Every time.

## Lesson 2: Latency is a Feature

Recommendations that take 500ms do not get used. Predictions that arrive after decisions are made are worthless.

We rewrote our serving infrastructure three times this year:
- V1: Python + Flask (800ms p99)
- V2: Go + gRPC (200ms p99)
- V3: Edge caching + precomputation (50ms p99)

The performance investment unlocked new use cases. Real-time personalization became possible.

## Lesson 3: Explainability Matters

"The algorithm recommended it" is not acceptable to merchants. They need to understand why.

We added explanation generation to all recommendations:
- "Frequently purchased together"
- "Popular in your customer segment"
- "Similar style and price range"

Trust increased. Adoption increased. And we caught model bugs through inconsistent explanations.

## Lesson 4: Offline Metrics Lie

Models that excelled in offline evaluation failed in production. The gap between historical data and live traffic was larger than expected.

We moved to online experimentation for all model changes:
- A/B tests with statistical rigor
- Gradual rollouts with automatic rollback
- Business metrics as success criteria

Offline evaluation is for filtering obviously bad ideas. Production is the only truth.

## Lesson 5: Simple Baselines are Strong

Before deploying any ML model, we compare against simple baselines:
- Popularity ranking
- Recency ranking
- Rule-based heuristics

Many "AI features" do not beat these baselines. We ship the simpler solution when ML does not provide meaningful lift.

## Lesson 6: Operations is Half the Work

Training a model is straightforward. Operating it is hard:
- Retraining schedules
- Feature freshness
- Model versioning
- Drift detection
- Incident response

We built MLOps infrastructure that treats models as production services, not research artifacts.

## Looking Ahead to 2018

Our 2018 roadmap:
- Deep learning for product understanding
- Reinforcement learning for optimization
- Federated learning for privacy
- AutoML for merchant-specific models

The fundamentals remain: clean data, fast inference, explainable results, rigorous evaluation.

---

*Zach Kelling is the founder of Hanzo Industries.*
