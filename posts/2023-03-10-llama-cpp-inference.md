---
title: "LLM Inference at the Edge: Our llama.cpp Journey"
date: "2023-03-10"
author: "Zach Kelling"
tags: ["ai", "llm", "inference", "edge-computing", "zen"]
description: "How we brought large language models to edge devices using llama.cpp and what we learned along the way."
---

# LLM Inference at the Edge: Our llama.cpp Journey

When llama.cpp dropped in March 2023, it changed everything. Suddenly, running LLMs didn't require expensive GPUs or cloud APIs. We could run them locally, on laptops, even on phones.

## Why Edge Inference Matters

Cloud LLM inference has problems:

- **Latency**: Network round-trips add 100-500ms
- **Cost**: API calls add up quickly at scale
- **Privacy**: Sensitive data leaves your device
- **Availability**: No internet = no AI

Edge inference solves all of these. The model runs on your hardware. Your data never leaves.

## The llama.cpp Breakthrough

Georgi Gerganov's llama.cpp proved that quantized models could run efficiently on CPUs:

- **4-bit quantization**: 70B models fit in 35GB RAM
- **Metal acceleration**: 50+ tokens/sec on M1/M2 Macs
- **CPU fallback**: Works on any hardware
- **Minimal dependencies**: Pure C/C++, no Python runtime

We forked it immediately and started building.

## What We Added

**Zen Model Support**: Custom quantizations for our Zen model family.

```bash
# Convert Zen models to GGUF format
./convert-zen-to-gguf.py zen-coder-34b --outtype q4_K_M

# Run inference
./main -m zen-coder-34b-q4_K_M.gguf -p "Write a function that..."
```

**Server Mode**: HTTP API for integration with applications.

**Batched Inference**: Process multiple requests efficiently.

**Speculative Decoding**: Use small models to accelerate large ones.

## Performance Results

On M2 Max MacBook Pro (64GB):

| Model | Size | Tokens/sec | Memory |
|-------|------|------------|--------|
| Zen-7B Q4 | 4GB | 85 t/s | 5GB |
| Zen-34B Q4 | 18GB | 32 t/s | 20GB |
| Zen-70B Q4 | 35GB | 15 t/s | 40GB |

Competitive with cloud APIs, but running locally.

## Use Cases

**Code Completion**: IDE integration with instant suggestions.

**Document Analysis**: Process sensitive documents without uploading.

**Offline AI**: AI assistance on planes, remote locations.

**Cost Optimization**: Batch processing without API costs.

## The Quantization Trade-off

Smaller isn't always worse:

- **Q8**: Nearly identical to FP16, 50% size reduction
- **Q6_K**: ~1% quality loss, 60% size reduction
- **Q4_K_M**: ~3% quality loss, 75% size reduction
- **Q2_K**: Noticeable quality loss, 85% size reduction

For code generation, Q4_K_M is the sweet spot. Good quality, runs on consumer hardware.

## What's Next

Edge inference is just the beginning:

- **Training at the edge**: Fine-tune on local data
- **Distributed inference**: Split models across devices
- **Hybrid approach**: Edge for common queries, cloud for complex ones

The future of AI isn't centralized data centers. It's intelligence everywhere, running on the devices in your pocket.

---

*This post is part of our retrospective series exploring the technical foundations of Hanzo and Zen.*
