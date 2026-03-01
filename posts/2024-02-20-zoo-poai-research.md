---
title: "Proof of AI: Verifiable Compute as a Consensus Primitive"
date: "2024-02-20"
author: "Hanzo AI"
tags: ["zoo", "poai", "consensus", "ai", "research", "blockchain"]
description: "Publishing the PoAI (Proof of AI) research — making AI computation verifiable and using it as a consensus primitive for decentralized AI networks."
---

# Proof of AI: Verifiable Compute as a Consensus Primitive

Can AI computation be made verifiable? The question sounds simple. The answer is technically hard: AI computations are inherently non-deterministic at the floating-point level. The same model, same input, same hardware can produce slightly different outputs due to floating-point ordering, GPU scheduling, and numerical precision.

Today we are publishing the PoAI (Proof of AI) research specification — ZIP-002 in the Zoo governance system.

## The Problem

Decentralized AI networks need to verify that participants actually performed the computation they claim. Without verification:

- Nodes could return garbage and collect rewards
- Malicious actors could poison model outputs
- There is no basis for consensus on model behavior

Proof of Work verifies hash computation trivially (check the hash). Proof of Stake verifies through economic incentives (slashing). Neither applies to AI inference, where "correct" output is not unique.

## Deterministic Quantization

PoAI solves non-determinism through deterministic quantization schemes:

1. **Fixed-point arithmetic**: Convert model weights and activations to fixed-point representation at defined precision levels
2. **Deterministic operation ordering**: Specify exact computation order for matrix operations, eliminating associativity-related floating-point divergence
3. **Canonical rounding**: Define rounding rules that all participants must follow

With these constraints, a forward pass becomes bit-for-bit reproducible across different hardware. The same input produces the same output, every time.

## Threshold Consensus

Not every verifier needs to run the full computation. PoAI uses threshold-based consensus:

1. A random subset of validators is selected to verify each inference
2. Each verifier runs the deterministic forward pass independently
3. If the threshold (e.g., 2/3) of verifiers agree on the output, it is accepted
4. Disagreements trigger expanded verification with more validators

The economic cost of verification scales sub-linearly with network size — not every validator verifies every inference.

## Applications

- **Decentralized inference networks**: Verify that edge devices are running the correct model
- **Model marketplaces**: Prove that a model produces claimed outputs
- **Regulatory compliance**: Auditable AI decisions with cryptographic proof
- **Federated learning**: Verify gradient computations from untrusted participants

## Performance Overhead

Deterministic quantization introduces accuracy loss compared to full-precision inference. Our benchmarks show:

- INT8 quantization: < 1% accuracy loss on standard benchmarks
- INT4 quantization: 2-3% accuracy loss (acceptable for many applications)
- Verification overhead: ~15% additional latency per inference (amortized across batch)

---

*Zoo Labs Foundation (ZIP-002). Hanzo AI is Techstars '17.*
