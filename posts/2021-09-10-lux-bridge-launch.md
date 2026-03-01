---
title: "Lux Bridge: Cross-Chain Asset Transfer with Warp Messaging"
date: "2021-09-10"
author: "Hanzo AI"
tags: ["lux", "bridge", "cross-chain", "warp", "blockchain"]
description: "Launching the Lux Bridge — trustless cross-chain asset transfer powered by the Warp V2 messaging protocol."
---

# Lux Bridge: Cross-Chain Asset Transfer with Warp Messaging

Cross-chain bridges are the weakest link in blockchain infrastructure. Over $2 billion has been lost to bridge exploits. Most bridges rely on multisig committees or optimistic verification — both have proven vulnerable.

Today we are launching the Lux Bridge, powered by the Warp V2 messaging protocol: cross-chain asset transfer secured by the full validator set, not a committee.

## Warp V2 Protocol

Warp is Lux's native cross-chain messaging protocol. Unlike third-party bridges that operate as separate systems with their own trust assumptions, Warp messages are verified by Lux validators as part of the consensus process.

Key properties:

- **Validator-secured**: Messages are signed by the source chain's validator set using BLS aggregate signatures
- **Trustless verification**: The destination chain verifies the aggregate signature against the known validator set — no relayers, no committees
- **Teleport reliability**: Guaranteed delivery with automatic retry and ordering guarantees
- **Post-quantum path**: Warp V2 includes provisions for post-quantum signature migration

## Supported Operations

- **Token transfers**: Move ERC-20 tokens between Lux subnets and compatible chains
- **NFT transfers**: Cross-chain NFT movement with metadata preservation
- **Arbitrary messages**: General-purpose cross-chain messaging for dApp developers
- **Contract calls**: Trigger smart contract execution on the destination chain

## Architecture

```
Source Chain → Warp Message → Validator Signatures → Aggregate → Destination Chain Verification → Execution
```

No relayer network. No optimistic challenge period. No multisig committee. The validator set that secures the blockchain also secures the bridge.

## Security Model

The bridge inherits the security of the Lux consensus:

- Byzantine fault tolerance: f < n/3
- Aggregate signature verification: computationally efficient, cryptographically strong
- No additional trust assumptions beyond the validator set
- Formal verification of the Warp message format and verification logic

---

*Hanzo AI is Techstars '17. Lux Network: [lux.network](https://lux.network)*
