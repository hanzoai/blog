---
title: "Zen4: Abliterated AI Models for Every Scale"
date: "2026-02-22"
author: "Zach Kelling"
tags: ["ai", "models", "zen4", "abliteration", "open-source", "launch", "zen-mode"]
description: "Announcing the full Zen4 family: mini (4B) through ultra (1T MoE), all abliterated. Eight models covering every scale from edge to cloud, with no refusal behavior and full capability access."
---

# Zen4: Abliterated AI Models for Every Scale

The full Zen4 family is available today. Eight models spanning 4B to 1T parameters, every scale covered, all abliterated.

No refusal behavior. Full capability access. Open weights.

## The Complete Zen4 Lineup

| Model | Parameters | Active Params | Architecture | Context |
|-------|-----------|--------------|-------------|---------|
| **Zen4 Mini** | 4B | 4B | Dense | 128K |
| **Zen4 Base** | 8B | 8B | Dense | 128K |
| **Zen4 Pro** | 14B | 14B | Dense | 128K |
| **Zen4 Max** | 30B | 3B | MoE | 256K |
| **Zen4 Coder Flash** | 31B | 3B | MoE | 131K |
| **Zen4 Pro Max** | 80B | 3B | MoE | 256K |
| **Zen4 Coder** | 80B | 3B | MoE | 256K |
| **Zen4 Ultra** | 1T | 64B | MoE | 256K |

Dense models for predictable workloads. MoE models for frontier capability at controlled compute cost. Every model is available on HuggingFace at `zenlm/zen4-*`.

## What Abliteration Is

Current AI models are trained to refuse certain categories of requests. This behavior is implemented during fine-tuning: the model learns a set of internal representations -- refusal directions -- that activate when it encounters inputs it has been trained to decline.

Abliteration is the systematic removal of these refusal directions from the model's residual stream using directional ablation. The process:

1. Identify a set of prompts that reliably trigger refusal behavior
2. Run them through the model and collect the hidden state activations
3. Compute the mean activation direction that distinguishes refusal from compliance
4. Project out that direction from every weight matrix that contributes to it

The result is a model where the refusal representation has been surgically removed. The model retains all of its knowledge and capability -- nothing else is changed -- but the mechanism that causes it to decline requests no longer exists.

We measure benchmark performance before and after abliteration on every model. The differences are within noise.

## Why It Matters

Refusal behavior in models is inconsistently applied, politically motivated, and brittle. Models refuse requests that are clearly legitimate while complying with semantically identical requests phrased differently. The effect is that refusals do not prevent determined misuse -- they only create friction for legitimate users.

Researchers studying harmful content need to analyze it directly. Security professionals need to test attack vectors. Medical providers need clinical information without AI gatekeeping. Writers need to write without models second-guessing their intent.

Abliteration removes the friction. The responsibility for appropriate use stays where it belongs: with the person using the model.

## Zen4 Ultra: 1 Trillion Parameters

The largest model in the family is Zen4 Ultra: 1 trillion parameters, 64B active, 64 SafeTensor shards, 256K context.

Performance:

| Benchmark | Score |
|-----------|-------|
| AIME 2025 | 99.1% |
| SWE-Bench Verified | 71.3% |
| GPQA Diamond | 83.4% |
| Codeforces Rating | 2155 |

Zen4 Ultra activates 64B parameters per forward pass from a 1T pool, making it tractable on multi-GPU configurations that could not serve a dense 1T model. 8x H100 SXM handles full precision. FP8 quantization brings it to 4x H100.

## Zen4 MoE Models

The Max, Pro Max, Coder, and Coder Flash models all use MoE architecture with 3B active parameters. This makes them particularly efficient:

- **Zen4 Max** (30B/3B): Fits on a single A100 or M2 Max in MLX. Remarkable quality for its inference cost.
- **Zen4 Coder Flash** (31B/3B): 131K context, optimized for fast code generation. Lower latency than Zen4 Coder at the cost of some depth on complex problems.
- **Zen4 Pro Max** (80B/3B): The best general-purpose consumer model in the lineup. Runs on 2x A100 or a Mac Studio with 192GB unified memory.
- **Zen4 Coder** (80B/3B): 256K context, full agentic coding support.

## Formats

All models ship in SafeTensors, GGUF (Q4_K_M through F16), and MLX for Apple Silicon. The GGUF Q4_K_M quantizations of the dense models (Mini, Base, Pro) fit on any modern laptop.

## Get Zen4

All models are available now:

- **HuggingFace**: [huggingface.co/zenlm](https://huggingface.co/zenlm)
- **Hanzo Cloud**: `api.hanzo.ai/v1/chat/completions` -- all Zen4 models available
- **Hanzo Desktop**: One-click install for every consumer and coder model
- **Zen LM**: [zenlm.org](https://zenlm.org) -- benchmarks, deployment guides, hardware requirements

```bash
# Download any model with hf CLI
hf download zenlm/zen4-ultra
hf download zenlm/zen4-pro
hf download zenlm/zen4-mini --include "*.gguf"
```

Built by Zen LM and Hanzo AI, Techstars '17. Open weights, no gates, no waitlists.

---

*Zach Kelling is the founder of Hanzo AI, Techstars '17.*
