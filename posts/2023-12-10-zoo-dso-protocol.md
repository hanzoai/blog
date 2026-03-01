---
title: "DSO: Model Adaptation at $18 Instead of $15,000"
date: "2023-12-10"
author: "Hanzo AI"
tags: ["zoo", "dso", "ai", "research", "decentralized-ai", "protocol"]
description: "Introducing DSO (Decentralized Semantic Optimization) — zero-compute model adaptation through experience injection, reducing fine-tuning costs by 800x."
---

# DSO: Model Adaptation at $18 Instead of $15,000

Fine-tuning a large language model costs $15,000 or more. You need GPU hours, training data pipelines, evaluation harnesses, and the expertise to avoid catastrophic forgetting. For most organizations, this cost makes model customization impractical.

Today we are publishing the DSO protocol specification: Decentralized Semantic Optimization — model adaptation without compute.

## How DSO Works

Traditional fine-tuning modifies model weights through gradient descent. DSO takes a different approach: instead of changing the model, it injects structured experiences into the inference context.

### Experience Injection

DSO maintains an experience store — curated examples of desired model behavior organized by semantic domain. At inference time, relevant experiences are retrieved and injected into the model's context window using a structured protocol:

1. **Query analysis**: Classify the incoming query into semantic domains
2. **Experience retrieval**: Pull relevant experiences from the store using semantic search
3. **Context construction**: Assemble experiences into a structured context that guides model behavior
4. **Inference**: The base model generates responses informed by the injected experiences

### Why This Works

Large language models are already capable of in-context learning — adjusting behavior based on examples in the prompt. DSO formalizes and scales this capability:

- **No weight modification**: The base model is unchanged — no risk of catastrophic forgetting
- **Instant updates**: New experiences take effect immediately — no retraining delay
- **Composable**: Combine experience sets for different capabilities without interference
- **Auditable**: Every experience in the store is human-readable and reviewable

## Cost Comparison

| Method | Cost | Time | Risk |
|--------|------|------|------|
| Full fine-tuning | $15,000+ | 48-72 hours | Catastrophic forgetting |
| LoRA fine-tuning | $500-2,000 | 4-8 hours | Quality degradation |
| DSO adaptation | $18 | < 1 minute | None (base model unchanged) |

The $18 covers semantic indexing of the experience store. Ongoing inference costs are marginally higher due to longer context windows.

## Governance

DSO is governed by ZIP-001, ratified by the Zoo community. The protocol specification, reference implementation, and experience store format are all open.

---

*Zoo Labs Foundation is a 501(c)(3) nonprofit. Hanzo AI is Techstars '17.*
