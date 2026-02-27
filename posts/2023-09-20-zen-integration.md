---
title: "Zen Integration: AI That Follows Your Rules"
date: "2023-09-20"
author: "Zach Kelling"
tags: ["zen", "rules", "compliance", "governance", "ai"]
description: "Introducing Zen, our system for ensuring AI follows business rules, compliance requirements, and brand guidelines."
---

# Zen Integration: AI That Follows Your Rules

AI capabilities mean nothing if they violate your policies. Today we are integrating Zen, our rule enforcement system, across all Hanzo AI features.

## The Governance Gap

AI systems are powerful. They are also unpredictable. Without governance:

- Chatbots make unauthorized promises
- Recommendations violate compliance rules
- Generated content contradicts brand guidelines
- Agents take actions beyond their authority

The gap between AI capability and policy compliance creates risk.

## What is Zen

Zen is a rule enforcement layer that sits between AI capabilities and outputs:

```
User Request
      ↓
┌─────────────┐
│    Jin      │ ← AI processes request
└──────┬──────┘
       ↓
┌─────────────┐
│    Zen      │ ← Rules evaluated
└──────┬──────┘
       ↓
  Compliant Output
```

Every AI output passes through Zen before reaching users.

## Rule Definition

Rules defined in a declarative language:

```yaml
# zen-rules.yaml

rules:
  - name: no_competitor_mentions
    description: Never mention competitor brands
    applies_to: [chat, content_generation]
    condition: |
      output.contains_any(competitors.list)
    action: rewrite
    rewrite_instruction: |
      Remove competitor mentions, focus on our products

  - name: price_accuracy
    description: Prices must match catalog
    applies_to: [chat, recommendations]
    condition: |
      output.mentions_price AND
      output.price != product.current_price
    action: block
    fallback: |
      Please check our website for current pricing

  - name: medical_claims
    description: No medical claims for supplements
    applies_to: [content_generation, chat]
    condition: |
      product.category == "supplements" AND
      output.contains_medical_claim
    action: rewrite
    rewrite_instruction: |
      Remove medical claims, use approved language only
```

## Rule Types

### Content Rules

Control what AI can say:

```yaml
- name: brand_voice
  condition: output.tone != "friendly_professional"
  action: rewrite

- name: no_profanity
  condition: output.contains_profanity
  action: block
```

### Data Rules

Control what AI can access:

```yaml
- name: customer_data_scope
  condition: |
    request.accesses_customer_data AND
    request.customer_id != session.customer_id
  action: block

- name: pii_masking
  condition: output.contains_pii
  action: mask
```

### Action Rules

Control what AI can do:

```yaml
- name: refund_limit
  applies_to: [support_agent]
  condition: |
    action.type == "issue_refund" AND
    action.amount > 100
  action: require_approval

- name: discount_cap
  condition: |
    action.type == "apply_discount" AND
    action.percent > 20
  action: block
```

## Enforcement Modes

### Block

Prevent output entirely, use fallback:

```
User: "What do you think of [competitor]?"

[Jin generates comparison]
[Zen blocks: competitor mention]

Response: "I'd be happy to help you find the right product
from our catalog. What features are most important to you?"
```

### Rewrite

Modify output to comply:

```
User: "Tell me about this supplement"

[Jin generates: "This supplement cures headaches..."]
[Zen rewrites: medical claim]

Response: "This supplement is formulated to support overall
wellness. Individual results may vary."
```

### Flag

Allow output but alert for review:

```
[Output allowed]
[Alert sent to compliance team]
[Logged for audit]
```

### Require Approval

Pause for human approval:

```
Agent: "I'd like to issue a $150 refund for this customer"

[Zen: requires approval for refunds > $100]

System: "This action requires supervisor approval.
Sending request to @supervisor..."
```

## Audit Trail

Every rule evaluation logged:

```json
{
  "request_id": "req_abc123",
  "timestamp": "2023-09-20T14:30:00Z",
  "rules_evaluated": 12,
  "rules_triggered": 1,
  "triggered_rule": "price_accuracy",
  "action_taken": "block",
  "original_output": "[redacted]",
  "final_output": "Please check our website for current pricing",
  "latency_ms": 8
}
```

## Performance

Zen adds minimal latency:

- Average: 8ms
- p99: 25ms

Rules evaluated in parallel. Common rules cached.

## Integration

Zen is now default for all Hanzo AI features. Configure rules in dashboard or via API:

```python
from hanzo import Zen

zen = Zen(api_key="xxx")

# Add rule
zen.rules.create({
    "name": "custom_rule",
    "condition": "...",
    "action": "block"
})

# Evaluate manually
result = zen.evaluate(output, context)
```

## Compliance Templates

Pre-built rule sets for common requirements:

- **GDPR**: Data access and retention rules
- **CCPA**: California privacy compliance
- **FDA**: Supplement and drug claim rules
- **FTC**: Advertising and endorsement rules
- **Financial**: Investment advice restrictions

## What's Next

- Visual rule builder
- Rule testing sandbox
- Compliance reporting dashboard
- Industry-specific rule packs

AI should be powerful and safe. Zen ensures both.

---

*Zach Kelling is the founder of Hanzo Industries.*
