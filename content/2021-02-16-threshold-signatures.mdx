---
title: "Threshold Signatures: Trust Distributed"
date: "2021-02-16"
author: "Zach Kelling"
tags: ["cryptography", "blockchain", "security", "lux"]
description: "How we implemented threshold signatures to eliminate single points of failure in key management."
---

# Threshold Signatures: Trust Distributed

A single private key is a single point of failure. Threshold signatures distribute trust across multiple parties - no single entity can sign alone, but any sufficient subset can.

## The Key Management Problem

Traditional crypto custody:

- **Single key**: One compromise = total loss
- **Multi-sig**: Multiple full keys, complex coordination
- **HSMs**: Hardware dependencies, vendor lock-in

None of these scale well or distribute trust effectively.

## Threshold Signatures (TSS)

Split a key into N shares. Any T shares can sign:

```
Key → [Share₁, Share₂, Share₃, Share₄, Share₅]
         ↓        ↓        ↓
      Party₁   Party₂   Party₃

Signing: Any 3 of 5 parties can sign together
         No party ever sees the full key
```

The complete key never exists in one place.

## Our Implementation

We support multiple schemes:

### FROST (Flexible Round-Optimized Schnorr Threshold)
```go
// Create a 3-of-5 threshold group
group := frost.NewGroup(threshold=3, participants=5)

// Each participant generates their share
share := group.GenerateShare(participantID)

// Distributed signing
partialSig := share.PartialSign(message)
fullSig := group.CombineSignatures(partialSigs)

// Standard Schnorr verification
valid := schnorr.Verify(groupPublicKey, message, fullSig)
```

### GG20 (Gennaro-Goldfeder)
For ECDSA compatibility with existing Ethereum infrastructure:

```go
// GG20 for ECDSA signatures
group := gg20.NewGroup(threshold=2, participants=3)

// Signing produces standard ECDSA signature
sig := group.Sign(message)  // Indistinguishable from single-key sig
```

## Architecture

```
┌─────────────────────────────────────────┐
│           Threshold Signing              │
├─────────────────────────────────────────┤
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐   │
│  │Node1│  │Node2│  │Node3│  │Node4│   │
│  │Share│  │Share│  │Share│  │Share│   │
│  └──┬──┘  └──┬──┘  └──┬──┘  └──┬──┘   │
│     │        │        │        │       │
│     └────────┴────────┴────────┘       │
│              ↓                         │
│     ┌───────────────┐                  │
│     │  Coordinator  │                  │
│     └───────┬───────┘                  │
│             ↓                         │
│     ┌───────────────┐                  │
│     │   Signature   │                  │
│     └───────────────┘                  │
└─────────────────────────────────────────┘
```

## Use Cases

**Treasury Management**: Corporate treasuries with distributed control.

**Validator Keys**: Blockchain validators with redundancy.

**Bridge Security**: Cross-chain bridges without trusted third parties.

**Custody Solutions**: Institutional crypto custody.

## Security Properties

| Property | Single Key | Multi-Sig | TSS |
|----------|-----------|-----------|-----|
| Key exposure | Full | Full | Never |
| Signature size | Standard | 3x+ | Standard |
| On-chain cost | Low | High | Low |
| Privacy | None | Exposed | Hidden |
| Recovery | None | Complex | Flexible |

## Proactive Security

Shares can be refreshed without changing the public key:

```go
// Refresh all shares (recommended monthly)
newShares := group.RefreshShares()

// Public key unchanged
assert(group.PublicKey() == originalPublicKey)
```

An attacker must compromise T shares in a single refresh period.

## Integration with Lux

Threshold signatures power:

- **Subnet validators**: Distributed validator keys
- **Bridge guardians**: Cross-chain message signing
- **DAO treasuries**: Multi-party fund control
- **Smart accounts**: Threshold-controlled wallets

## Performance

| Operation | Time (3-of-5) | Time (5-of-9) |
|-----------|---------------|---------------|
| Key generation | 50ms | 200ms |
| Signing round | 30ms | 80ms |
| Verification | 1ms | 1ms |

Fast enough for real-time transactions.

## Lessons Learned

1. **Round complexity matters**: Fewer rounds = faster signing
2. **Asynchrony is hard**: Handle dropped/slow participants
3. **Refresh is essential**: Static shares accumulate risk
4. **Test adversarially**: Simulate byzantine participants

Threshold signatures aren't just cryptography - they're coordination problems. The math is solved; the engineering is ongoing.

---

*This post is part of our retrospective series exploring the technical foundations of Hanzo and Lux.*
