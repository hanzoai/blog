---
title: "Gym: Distributed Training for the Rest of Us"
date: "2023-05-28"
author: "Zach Kelling"
tags: ["ai", "training", "distributed", "infrastructure", "zoo"]
description: "Introducing Gym - our platform for distributed AI model training that turns the world's GPUs into a supercomputer."
---

# Gym: Distributed Training for the Rest of Us

Training frontier AI models costs hundreds of millions of dollars. Gym makes it possible with distributed consumer hardware.

## The Training Cost Problem

Training GPT-4-class models requires:

- **10,000+ H100 GPUs** running for months
- **$100M+** in compute costs alone
- **Dedicated infrastructure** that only a few companies have
- **Specialized engineering** to orchestrate it all

This concentration of capability is unhealthy for the field. We need democratization.

## The Gym Solution

Aggregate distributed GPUs into a virtual supercomputer:

```
Traditional:    [10,000 H100s in one datacenter]
                           ↓
                    Single Model

Gym:            [1,000 consumer nodes worldwide]
                           ↓
                    Same Model
```

## How It Works

### Node Registration
```bash
# Join the Gym network
gym node register --gpu-type rtx4090 --memory 24GB

# Start contributing
gym node start
```

### Training Job Submission
```python
from gym import DistributedTrainer

trainer = DistributedTrainer(
    model="llama-7b",
    dataset="zoo-dataset-v2",
    nodes=100,  # Request 100 nodes
    budget_tokens=1e12  # Train for 1T tokens
)

# Training distributed automatically
trainer.train()
```

### Gradient Aggregation

Nodes compute gradients locally, send them to aggregators:

```
Node 1: compute_gradient(batch_1) → gradient_1
Node 2: compute_gradient(batch_2) → gradient_2
        ...
Node N: compute_gradient(batch_n) → gradient_n

Aggregator: average(gradient_1, ..., gradient_n) → update
```

## Technical Innovations

### Gradient Compression

Raw gradients are huge. We compress 100-1000x:

- **Top-K sparsification**: Only send largest gradients
- **Quantization**: 8-bit or 4-bit gradient representation
- **Error feedback**: Accumulate compression errors for later

### Byzantine Fault Tolerance

Some nodes might be malicious or buggy:

- **Gradient clipping**: Limit influence of any single node
- **Outlier detection**: Identify and exclude anomalous updates
- **Cryptographic verification**: Prove computation was correct

### Network Optimization

Training across the internet is slow. We optimize:

- **Geographic clustering**: Group nearby nodes
- **Async updates**: Don't wait for slow nodes
- **Checkpoint streaming**: Resume from any point
- **Bandwidth adaptation**: Adjust to network conditions

## Incentive Structure

Contributors earn tokens:

| Activity | Reward |
|----------|--------|
| Compute contribution | Based on FLOPS delivered |
| Data contribution | Based on quality/quantity |
| Verification | For checking others' work |
| Availability | Bonus for consistent uptime |

Tokens can be used to submit training jobs or exchanged.

## Current Benchmarks

| Metric | Gym | Centralized |
|--------|-----|-------------|
| Cost/PFLOP-day | $15 | $100+ |
| Node count | 5,000+ | N/A |
| Aggregate compute | 50 PFLOPS | Variable |
| Uptime | 99.2% | 99.9% |
| Efficiency | 85% | 95% |

We trade some efficiency for massive cost reduction and accessibility.

## What We've Trained

Using Gym, we've trained:

- **Zen-7B**: 7 billion parameters, competitive with Llama 2
- **Zen-Coder-7B**: Specialized for code generation
- **Zen-Reranker**: Search result ranking model

All weights released openly.

## Join the Gym

```bash
# Install
pip install zoo-gym

# Register your node
gym register

# Start contributing
gym start
```

Your GPU can train the next frontier model. Together, we're building AI infrastructure that belongs to everyone.

---

*This post is part of our retrospective series exploring the technical foundations of Hanzo and Zoo.*
