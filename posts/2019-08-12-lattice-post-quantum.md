---
title: "Preparing for Q-Day: Lattice-Based Cryptography"
date: "2019-08-12"
author: "Zach Kelling"
tags: ["cryptography", "quantum", "security", "blockchain", "lux"]
description: "How we're preparing Lux for quantum computers with lattice-based cryptography."
---

# Preparing for Q-Day: Lattice-Based Cryptography

Quantum computers will break the cryptography that secures blockchains. Not today. Maybe not this decade. But eventually. We started preparing in 2019.

## The Quantum Threat

Most blockchain cryptography relies on two hard problems:

- **Discrete logarithm**: Hard to compute `x` given `g^x` (used in ECDSA signatures)
- **Integer factorization**: Hard to factor large primes (used in RSA)

Quantum computers with enough qubits can solve both in polynomial time using Shor's algorithm. Every Bitcoin wallet, every Ethereum contract, every digital signature becomes vulnerable.

## Lattice-Based Alternatives

Lattice problems remain hard even for quantum computers:

- **Shortest Vector Problem (SVP)**: Find the shortest non-zero vector in a lattice
- **Learning With Errors (LWE)**: Solve systems of linear equations with noise

These problems have been studied for decades. No efficient quantum algorithms are known.

## What We Built

Our lattice cryptography library provides:

**CRYSTALS-Dilithium Signatures**
```go
// Post-quantum signatures
keyPair := dilithium.GenerateKey()
signature := keyPair.Sign(message)
valid := dilithium.Verify(keyPair.PublicKey, message, signature)
```

**CRYSTALS-Kyber Key Exchange**
```go
// Post-quantum key encapsulation
ciphertext, sharedSecret := kyber.Encapsulate(publicKey)
recoveredSecret := kyber.Decapsulate(privateKey, ciphertext)
```

**Falcon Signatures**
```go
// Compact post-quantum signatures
// Smaller than Dilithium, but more complex
sig := falcon.Sign(privateKey, message)
```

## Integration Strategy

We can't switch overnight. Our migration path:

1. **Hybrid signatures**: Include both ECDSA and Dilithium signatures. Secure against both classical and quantum attacks.

2. **Treasury migration**: Move funds to quantum-safe addresses gradually.

3. **Validator upgrade**: Require quantum-safe keys for new validators.

4. **Full transition**: Once quantum computers are imminent, require quantum-safe for all transactions.

## The Performance Challenge

Post-quantum crypto is bigger and slower:

| Algorithm | Public Key | Signature | Verify Time |
|-----------|-----------|-----------|-------------|
| ECDSA     | 33 bytes  | 64 bytes  | 0.1ms       |
| Dilithium | 1.3 KB    | 2.4 KB    | 0.3ms       |
| Falcon    | 897 bytes | 666 bytes | 0.2ms       |

We've optimized for blockchain use cases:

- **Batched verification**: Verify multiple signatures together
- **Precompilation**: Verify in EVM precompiles, not Solidity
- **Compression**: Aggregate signatures where possible

## Why Start Early?

Blockchain state is permanent. Transactions signed today will be on-chain forever. If quantum computers arrive in 2035, an attacker could:

1. Download historical blockchain data
2. Extract public keys from transactions
3. Derive private keys using quantum algorithms
4. Steal funds from addresses that ever transacted

By adding quantum-safe options now, we give users time to migrate before Q-Day.

## The Philosophy

Security is a process, not a product. We don't know when quantum computers will be powerful enough. We don't know which post-quantum algorithms will survive cryptanalysis. What we know is that **starting early gives us options**.

Better to have quantum-safe infrastructure waiting than to scramble when Q-Day arrives.

---

*This post is part of our retrospective series exploring the technical foundations of Hanzo and Lux.*
