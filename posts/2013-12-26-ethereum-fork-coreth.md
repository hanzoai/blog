---
title: "Forking Ethereum: The Birth of Coreth"
date: "2013-12-26"
author: "Zach Kelling"
tags: ["blockchain", "ethereum", "lux", "smart-contracts"]
description: "Why we forked go-ethereum and built Coreth - the EVM implementation that powers the Lux blockchain."
---

# Forking Ethereum: The Birth of Coreth

Ethereum was still in development when we started. The whitepaper had been published, but mainnet was over a year away. We saw the potential of programmable money and smart contracts, but we also saw the limitations.

## Why Fork?

Ethereum made revolutionary design choices, but some felt like they would limit scalability:

- **Single chain**: All transactions compete for the same block space
- **Global state**: Every node stores everything
- **Proof of Work**: Energy-intensive and slow finality

We wanted EVM compatibility (the developer ecosystem was too valuable to ignore) with different consensus and architecture.

## What is Coreth?

Coreth (Core Ethereum) is our fork of go-ethereum, modified to work with Lux's consensus:

- **Same EVM**: All Solidity contracts work unchanged
- **Same RPC**: Existing tools (MetaMask, Hardhat, ethers.js) just work
- **Different consensus**: Snow* family instead of Nakamoto consensus
- **Subnet capable**: Run your own chain with your own validators

```go
// Coreth plugs into Lux's VM interface
type VM interface {
    Initialize(ctx *snow.Context, ...) error
    BuildBlock() (snowman.Block, error)
    ParseBlock([]byte) (snowman.Block, error)
    // ... Lux-specific methods
}
```

## The Integration Challenge

Making Ethereum's state machine work with a different consensus was non-trivial:

**Block production**: Ethereum assumes PoW determines who makes blocks. We needed leader selection from consensus.

**Finality**: Ethereum has probabilistic finality (wait for confirmations). Lux has deterministic finality (once accepted, it's final).

**Gas pricing**: Ethereum's fee market assumes block space scarcity. With higher throughput, we needed different economics.

## What We Changed

1. **Consensus interface**: Pluggable consensus instead of hardcoded PoW/PoS
2. **State sync**: Fast sync using Lux's state bootstrapping
3. **Fee model**: Dynamic fees based on network load
4. **Precompiles**: Additional precompiled contracts for cross-chain communication

## Why This Matters

EVM compatibility is a moat. There are thousands of audited contracts, battle-tested libraries, and experienced developers. By maintaining compatibility, we got:

- **Instant ecosystem**: DeFi protocols could deploy unchanged
- **Tooling**: Years of development tools work out of the box
- **Talent**: Solidity developers are productive immediately

## The Broader Vision

Coreth was the first piece of a larger puzzle: **specialized chains that interoperate**. The C-Chain (Coreth) handles EVM contracts. The X-Chain handles native assets. The P-Chain manages validators and subnets.

Each chain optimized for its purpose, all connected by Lux consensus.

---

*This post is part of our retrospective series exploring the technical foundations of Hanzo and Lux.*
