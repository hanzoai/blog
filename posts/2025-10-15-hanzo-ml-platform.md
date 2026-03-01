---
title: "Hanzo ML Platform: End-to-End Machine Learning Infrastructure"
date: "2025-10-15"
author: "Hanzo AI"
tags: ["ml", "platform", "training", "serving", "pipelines", "launch"]
description: "Announcing the unified Hanzo ML Platform — training, serving, pipelines, feature store, model registry, and evaluation in one integrated system."
---

# Hanzo ML Platform: End-to-End Machine Learning Infrastructure

Building ML models is 10% of the work. The other 90% is infrastructure: data pipelines, feature engineering, training orchestration, model serving, monitoring, and the glue connecting all of it. Most teams assemble this from five different tools with five different failure modes.

Today we are announcing the Hanzo ML Platform: end-to-end machine learning infrastructure in one integrated system.

## Components

### Hanzo Training

Distributed training orchestration:

- **Frameworks**: PyTorch, TensorFlow, JAX, XGBoost
- **Distributed**: Multi-GPU and multi-node training with automatic parallelism strategy
- **Spot instances**: Automatic checkpointing and recovery on preemptible GPU instances
- **Experiment tracking**: Hyperparameters, metrics, and artifacts logged automatically

### Hanzo Serving

Production model inference:

- **Auto-scaling**: Scale from zero to thousands of replicas based on traffic
- **Multi-framework**: Serve models from any training framework
- **Canary deployments**: Gradual traffic shifting with automatic rollback
- **Batching**: Request batching for throughput optimization
- **GPU sharing**: Multiple models on a single GPU with isolation

### Hanzo Pipelines

ML workflow orchestration:

- **DAG-based**: Define pipelines as directed acyclic graphs
- **Reusable components**: Shared steps across pipelines
- **Scheduling**: Cron-based pipeline triggers
- **Caching**: Skip unchanged pipeline steps automatically

### Hanzo Feature Store

Online and offline feature serving:

- **Offline**: Batch feature computation for training
- **Online**: Sub-millisecond feature retrieval for inference
- **Point-in-time correctness**: Prevent data leakage in training
- **Feature sharing**: Teams share features across projects

### Hanzo Registry

Model versioning and governance:

- **Version control**: Every model version tracked with metadata
- **Lineage**: Training data → features → model → deployment chain
- **Approval workflow**: Stage models through dev → staging → production
- **Compliance**: Audit trail for regulated industries

### Hanzo Evaluation

Model quality and drift detection:

- **Evaluation suites**: Automated model testing on custom datasets
- **Drift detection**: Alert when model performance degrades
- **Fairness metrics**: Bias detection across protected attributes
- **Comparison**: Side-by-side model comparison on shared benchmarks

## Pricing

ML Platform is available as part of Hanzo Cloud:

- **Starter**: Pay-per-use for all components
- **Pro**: $199/month — reserved compute, priority scheduling
- **Enterprise**: Custom capacity, dedicated GPU pools, SLA

---

*Hanzo AI is Techstars '17.*
