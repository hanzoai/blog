---
title: "Quasar Consensus: Deterministic Finality in Sub-Second Time"
date: "2020-05-15"
author: "Hanzo AI"
tags: ["lux", "consensus", "blockchain", "quasar", "research"]
description: "Introducing the Quasar consensus family — extending Snow protocol with threshold-based commitment rounds for deterministic finality under one second."
---

# Quasar Consensus: Deterministic Finality in Sub-Second Time

Snow consensus protocols achieve probabilistic finality through repeated random sampling. In practice, the probability of reversal drops exponentially — but never reaches zero. For financial applications, "almost certainly final" is not the same as "final."

Today we are publishing the Quasar consensus specification: an extension of the Snow protocol family that provides deterministic finality guarantees within bounded time.

## How Quasar Works

Snow protocols work by sampling k random validators repeatedly. Each validator updates its preference based on the sampled majority. After sufficient rounds, the network converges on a single value with high probability.

Quasar adds threshold-based commitment rounds on top of Snow sampling:

1. **Sampling phase**: Standard Snow protocol — validators sample peers and update preferences
2. **Commitment phase**: Once a validator observes a supermajority (β₁ = 15 of k = 20 samples) for consecutive rounds, it enters a commitment state
3. **Finalization phase**: When β₂ = 20 committed validators are observed, the decision is finalized — deterministically, not probabilistically

The key insight: Snow convergence is fast enough that the commitment rounds add minimal latency while converting probabilistic safety into deterministic safety.

## Performance

Benchmarks on a 100-validator testnet:

| Metric | Value |
|--------|-------|
| Finality time | 0.8s (median), 1.2s (p99) |
| Throughput | 4,500+ TPS |
| Message complexity | O(k log n) per decision |
| Byzantine tolerance | f < n/3 |

These numbers hold under normal network conditions. Under adversarial load (up to f < n/3 Byzantine validators), finality time degrades predictably — never exceeding 3 seconds in our simulations.

## Post-Quantum Safety

Quasar's commitment and finalization messages are signed with CRYSTALS-Dilithium. Every validator on the Lux network generates Dilithium keys at initialization. This is not an upgrade path — it is a genesis requirement.

The performance overhead of post-quantum signatures is real: Dilithium signatures are ~2.4KB (vs 64 bytes for Ed25519) and verification is ~3x slower. Batched verification optimizations bring the amortized per-transaction overhead below 0.3ms — acceptable for our throughput targets.

## Comparison with Other Consensus Mechanisms

| Property | Quasar | Tendermint | HotStuff | Nakamoto |
|----------|--------|------------|----------|----------|
| Finality | Deterministic, <1s | Deterministic, 6-7s | Deterministic, 2-3s | Probabilistic, ~60min |
| Throughput | 4,500+ TPS | 1,000 TPS | 2,000 TPS | 7 TPS |
| Communication | O(k log n) | O(n²) | O(n) | O(n) |
| Quantum-safe | Yes (genesis) | No | No | No |

## Read the Paper

The full Quasar specification is available in our research repository. The Go implementation ships with Lux Node v0.9.0.

---

*Hanzo AI is Techstars '17. Lux Network is built by Lux Partners.*
