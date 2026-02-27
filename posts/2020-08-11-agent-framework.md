---
title: "Introducing the Hanzo Agent Framework"
date: "2020-08-11"
author: "Zach Kelling"
tags: ["agents", "ai", "automation", "framework"]
description: "Announcing the Hanzo Agent Framework: building blocks for intelligent automation in commerce."
---

# Introducing the Hanzo Agent Framework

Automation in commerce has been rule-based: if this, then that. Today we are releasing the Hanzo Agent Framework, enabling intelligent automation that reasons about goals, not just conditions.

## Beyond Rule-Based Automation

Traditional automation:

```
IF cart_abandoned AND time > 1_hour
THEN send_email(abandoned_cart_template)
```

This works for simple cases. It fails when:

- Multiple conditions interact
- Optimal action depends on context
- Goals conflict (retention vs. margin)
- Situations are novel

## Agent-Based Automation

Agents operate differently:

```
GOAL: Maximize customer lifetime value
CONSTRAINTS: Maintain 20% margin, respect communication preferences
OBSERVE: Customer abandoned cart, has purchased twice before, high-value segment
REASON: Previous purchases indicate price sensitivity, but also brand loyalty
ACT: Offer 10% discount valid 48 hours, single reminder email
```

Agents reason about goals, not just execute rules.

## The Framework

Hanzo Agent Framework provides:

### Agent Definition

```python
from hanzo.agents import Agent, Goal, Constraint

class RetentionAgent(Agent):
    goals = [
        Goal("maximize_ltv", weight=0.6),
        Goal("minimize_churn", weight=0.4)
    ]

    constraints = [
        Constraint("margin", min=0.15),
        Constraint("contact_frequency", max=3, period="week")
    ]

    def observe(self, customer):
        return {
            "purchase_history": self.get_purchases(customer),
            "engagement": self.get_engagement(customer),
            "segment": customer.segment
        }

    def act(self, observation, reasoning):
        # Agent decides action based on goals and constraints
        pass
```

### Reasoning Engine

Agents use a reasoning engine that:

- Evaluates possible actions against goals
- Respects hard constraints
- Balances competing objectives
- Explains decisions

### Action Space

Pre-built actions for common commerce operations:

- Send communications (email, SMS, push)
- Apply discounts
- Modify recommendations
- Trigger workflows
- Update customer data

### Learning

Agents improve through:

- Outcome tracking (did the action achieve the goal?)
- A/B testing of strategies
- Reinforcement learning from feedback

## Example: Churn Prevention Agent

```python
churn_agent = ChurnPreventionAgent(
    triggers=[
        "no_purchase_30_days",
        "decreased_engagement",
        "support_complaint"
    ],
    actions=[
        DiscountAction(max_percent=20),
        PersonalEmailAction(),
        LoyaltyPointsAction(max_points=500),
        SurveyAction()
    ]
)

# Agent observes, reasons, and acts autonomously
churn_agent.run(schedule="daily")
```

## Guardrails

Autonomous systems need oversight:

- **Approval workflows**: High-impact actions require human approval
- **Budget limits**: Maximum spend per agent per period
- **Audit logs**: Every decision recorded with reasoning
- **Kill switches**: Instantly disable any agent

## Results

Beta customers using Agent Framework:

- 34% reduction in churn
- 23% improvement in reactivation
- 2.1x increase in repeat purchases
- 15 hours/week saved on manual interventions

## Open Source Core

The Agent Framework core is open source:

```bash
pip install hanzo-agents
```

Enterprise features (learning, advanced reasoning) require Hanzo Cloud.

## What's Next

- Multi-agent coordination
- Cross-channel orchestration
- Predictive agent activation
- Natural language agent configuration

Agents are the future of commerce automation. Start building today.

---

*Zach Kelling is the founder of Hanzo Industries.*
