---
title: "Building Our ML Framework"
date: "2022-07-13"
author: "Zach Kelling"
tags: ["machine-learning", "framework", "infrastructure", "engineering"]
description: "Why we built a custom ML framework and what we learned along the way."
---

# Building Our ML Framework

When we started applying ML to commerce, we used standard frameworks. As scale grew, limitations emerged. This is the story of building our own ML framework.

## The Problem

By 2021, Hanzo ran dozens of ML models:

- Recommendation engines
- Fraud detection
- Demand forecasting
- Price optimization
- Search ranking
- Churn prediction

Each model had its own:
- Training pipeline
- Serving infrastructure
- Monitoring setup
- Feature engineering code

Duplication was enormous. Changes were slow. Bugs were common.

## Requirements

We needed a framework that:

1. **Unified training and serving**: Same code for both
2. **Feature reuse**: Define once, use everywhere
3. **Incremental learning**: Update models without full retraining
4. **Low latency serving**: Sub-10ms inference
5. **Automatic monitoring**: Drift detection, performance tracking
6. **Commerce primitives**: First-class support for our domain

No existing framework met all requirements.

## Architecture

### Feature Store

Central repository for all features:

```python
from hanzo.ml import FeatureStore, Feature

store = FeatureStore()

# Define feature
@store.feature
def customer_lifetime_value(customer_id: str) -> float:
    orders = get_orders(customer_id)
    return sum(o.total for o in orders)

# Use in any model
features = store.get_features(
    customer_id="cust_123",
    features=["customer_lifetime_value", "days_since_last_order"]
)
```

Features computed once, cached, and served to all models.

### Model Registry

Version-controlled model storage:

```python
from hanzo.ml import Model, Registry

registry = Registry()

# Register model
model = train_model(data)
registry.register(
    model=model,
    name="churn_prediction",
    version="1.2.3",
    metadata={"accuracy": 0.89, "training_data": "2022-07-01"}
)

# Load model
model = registry.load("churn_prediction", version="latest")
```

### Training Pipeline

Declarative training configuration:

```yaml
name: churn_prediction
version: 1.2.3

data:
  source: customers
  features:
    - customer_lifetime_value
    - days_since_last_order
    - support_tickets_30d
  label: churned_90d

model:
  type: gradient_boosting
  hyperparameters:
    n_estimators: 100
    max_depth: 6

training:
  split: 0.8
  validation: time_based

evaluation:
  metrics: [auc, precision, recall]
  threshold: { auc: 0.85 }
```

Run training:

```bash
hanzo-ml train churn_prediction.yaml
```

### Serving

Unified serving layer:

```python
from hanzo.ml import ServingEngine

engine = ServingEngine()

# Register model for serving
engine.register("churn_prediction", model)

# Inference
prediction = engine.predict(
    model="churn_prediction",
    features={"customer_id": "cust_123"}
)
```

Automatic batching, caching, and load balancing.

### Monitoring

Automatic drift detection:

```python
from hanzo.ml import Monitor

monitor = Monitor("churn_prediction")

# Alerts when:
# - Feature distributions shift
# - Prediction distributions change
# - Performance metrics degrade
# - Latency increases
```

## Results

After migration:

- **Training time**: 3 hours → 20 minutes (feature reuse)
- **Serving latency**: 45ms → 8ms (optimized serving)
- **Model deployment**: 2 days → 2 hours (unified pipeline)
- **Bug rate**: 60% reduction (shared infrastructure)

## Open Source

We are open-sourcing the core framework:

```bash
pip install hanzo-ml
```

Commerce-specific features and managed infrastructure require Hanzo Cloud.

## Lessons Learned

1. **Start with features**: Feature store should come first
2. **Invest in observability**: You cannot improve what you cannot measure
3. **Embrace constraints**: Domain-specific framework beats general-purpose
4. **Test in production**: Staging never matches reality

## What's Next

- AutoML capabilities
- Distributed training
- Model explanation
- A/B testing integration

Build ML systems that scale. The framework is available now.

---

*Zach Kelling is the founder of Hanzo Industries.*
