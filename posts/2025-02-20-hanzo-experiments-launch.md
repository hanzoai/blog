---
title: "Hanzo Experiments: Feature Flags and A/B Testing"
date: "2025-02-20"
author: "Hanzo AI"
tags: ["experiments", "feature-flags", "a-b-testing", "launch"]
description: "Introducing Hanzo Experiments — feature flags, A/B testing, and progressive rollouts with statistical rigor."
---

# Hanzo Experiments: Feature Flags and A/B Testing

Feature flags started as a deployment safety net. Now they are how product teams make decisions. But most feature flag tools stop at boolean toggles. A/B testing tools stop at conversion tracking. Neither connects experiment results to business outcomes.

Today we are launching Hanzo Experiments: feature flags, A/B testing, and progressive rollouts with statistical rigor.

## Feature Flags

### Beyond Boolean

Flags that carry configuration:

- **Boolean**: On/off toggles
- **String**: Configuration values (API endpoints, copy variants)
- **Number**: Numeric parameters (thresholds, limits)
- **JSON**: Complex configurations

### Targeting

Precise control over who sees what:

- User attributes (plan, role, geography, device)
- Percentage rollouts with consistent hashing
- Allow/deny lists for specific users
- Scheduled activation and deactivation

### SDK Support

```typescript
import { HanzoExperiments } from '@hanzo/experiments'

const experiments = new HanzoExperiments({ apiKey: 'your-key' })

// Feature flag check
if (experiments.isEnabled('new-checkout', { userId: user.id })) {
  renderNewCheckout()
} else {
  renderLegacyCheckout()
}

// A/B test variant
const variant = experiments.getVariant('pricing-page', { userId: user.id })
renderPricingPage(variant) // 'control' | 'variant-a' | 'variant-b'
```

## A/B Testing

### Statistical Engine

- Bayesian and frequentist analysis
- Automatic sample size calculation
- Sequential testing (stop early when results are clear)
- Multiple comparison correction (Bonferroni)

### Metrics

Track any metric as an experiment goal:

- Conversion events
- Revenue per user
- Engagement metrics
- Custom computed metrics

### Results

Clear, actionable results:

- Lift with confidence intervals
- Probability to be best
- Estimated impact on business metrics
- Segment-level breakdowns

## Progressive Rollouts

Combine feature flags with monitoring:

1. Enable for 1% of traffic
2. Monitor error rates and latency
3. Automatically increase to 10%, 50%, 100%
4. Automatic rollback if metrics degrade

## Pricing

- **Free**: 1,000 monthly active users, 5 flags
- **Pro**: $29/month — unlimited flags, A/B testing, 50K MAU
- **Enterprise**: Unlimited MAU, SSO, audit logs

---

*Hanzo AI is Techstars '17.*
