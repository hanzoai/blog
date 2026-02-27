---
title: "ACI: The AI Compute Infrastructure Network"
date: "2024-12-04"
author: "Zach Kelling"
tags: ["aci", "blockchain", "infrastructure", "decentralized", "compute"]
description: "Introducing ACI, a decentralized network for AI compute that enables trustless, verifiable AI inference."
---

# ACI: The AI Compute Infrastructure Network

AI compute is centralized. A handful of providers control access, pricing, and availability. Today we are launching ACI (AI Compute Infrastructure), a decentralized network for trustless, verifiable AI inference.

## The Centralization Problem

Current AI infrastructure:

- **Few providers**: OpenAI, Anthropic, Google control most capacity
- **Opaque pricing**: Costs change without notice
- **Single points of failure**: Outages affect everyone
- **No verification**: Trust that model ran correctly
- **Geographic restrictions**: Access varies by region

This centralization creates risk for AI-dependent businesses.

## What is ACI

ACI is a blockchain-based network where:

- **Compute providers** offer GPU capacity
- **Consumers** pay for inference
- **Validators** verify computation
- **Token holders** govern the protocol

```
┌─────────────────────────────────────────────────┐
│                  ACI Network                     │
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │ Provider │  │ Provider │  │ Provider │      │
│  │   GPU    │  │   GPU    │  │   GPU    │      │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘      │
│       │             │             │             │
│       └─────────────┼─────────────┘             │
│                     │                           │
│              ┌──────┴──────┐                   │
│              │  Consensus  │                   │
│              │    Layer    │                   │
│              └──────┬──────┘                   │
│                     │                           │
│              ┌──────┴──────┐                   │
│              │  Consumers  │                   │
│              └─────────────┘                   │
│                                                  │
└─────────────────────────────────────────────────┘
```

## How It Works

### Job Submission

Consumer submits inference job:

```typescript
import { ACI } from '@hanzo/aci';

const aci = new ACI({ wallet: myWallet });

const result = await aci.inference({
  model: 'llama-70b',
  prompt: 'Analyze this product review...',
  maxTokens: 500,
  requirements: {
    minProviderStake: 10000,
    maxLatency: 5000,
    verification: 'optimistic'
  }
});
```

### Provider Selection

Network selects providers based on:

- **Stake**: Higher stake = more trusted
- **Reputation**: Historical performance
- **Capacity**: Available compute
- **Latency**: Geographic proximity

### Execution

Provider runs inference:

1. Load model weights (verified hash)
2. Execute inference
3. Generate proof of computation
4. Submit result and proof

### Verification

Two verification modes:

**Optimistic**: Result accepted unless challenged

```
Result submitted → 24h challenge period → Finalized
                            ↓
                    Challenge raised
                            ↓
                    Full re-execution by validators
                            ↓
                    Slash dishonest party
```

**Immediate**: Multiple providers execute, consensus on result

```
Job → 3 providers execute → 2/3 agreement → Result finalized
                                    ↓
                            Disagreement
                                    ↓
                            Additional validators
```

## Economics

### Pricing

Market-based pricing with:

- Base compute cost (GPU-hours)
- Model licensing (if applicable)
- Verification premium
- Priority fee

```
Example: LLaMA-70B, 500 tokens
- Compute: $0.002
- Verification: $0.0005
- Total: $0.0025

vs. Centralized API: $0.004
Savings: 37%
```

### Provider Economics

Providers earn:

- Inference fees (80% of payment)
- Staking rewards (from protocol inflation)
- Slashing protection (stake at risk)

### Token Utility

ACI token used for:

- Payment for inference
- Provider staking
- Governance voting
- Fee burning (deflationary)

## Technical Architecture

### Consensus Layer

Built on Lux Network for:

- Sub-second finality
- High throughput (10,000+ TPS)
- Low fees ($0.001 per transaction)
- Post-quantum security

### Model Registry

On-chain registry of:

- Model metadata
- Weight hashes
- License terms
- Version history

```solidity
contract ModelRegistry {
    struct Model {
        string name;
        bytes32 weightsHash;
        address owner;
        uint256 licenseFeeBps;
        bool openAccess;
    }

    mapping(bytes32 => Model) public models;

    function register(Model calldata model) external;
    function verify(bytes32 modelId, bytes32 weightsHash) external view returns (bool);
}
```

### Proof of Inference

Cryptographic proof that inference ran correctly:

- Input commitment
- Model hash verification
- Output determinism check
- Hardware attestation

## Use Cases

### Redundant AI Infrastructure

Never depend on single provider:

```typescript
const result = await aci.inference({
  model: 'llama-70b',
  prompt: prompt,
  fallback: {
    providers: 3,
    consensus: 'any'
  }
});
```

### Verifiable AI

Prove AI was used correctly:

```typescript
const { result, proof } = await aci.inference({
  model: 'llama-70b',
  prompt: prompt,
  verification: 'immediate'
});

// Proof verifiable on-chain
const verified = await aci.verifyProof(proof);
```

### Decentralized Applications

AI for dApps without centralized dependencies:

```solidity
contract AIOracle {
    function requestInference(
        bytes32 modelId,
        bytes calldata prompt
    ) external returns (bytes32 requestId);

    function fulfillInference(
        bytes32 requestId,
        bytes calldata result,
        bytes calldata proof
    ) external;
}
```

## Roadmap

- **Q4 2024**: Testnet launch
- **Q1 2025**: Mainnet beta
- **Q2 2025**: Full mainnet
- **Q3 2025**: Enterprise features

## Get Involved

- **Providers**: Run nodes, earn rewards
- **Developers**: Build on ACI
- **Token holders**: Participate in governance

Documentation: [aci.hanzo.ai](https://aci.hanzo.ai)

The future of AI is decentralized. ACI makes it real.

---

*Zach Kelling is the founder of Hanzo Industries.*
