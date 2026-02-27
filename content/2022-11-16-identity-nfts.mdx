---
title: "Identity NFTs: Portable Commerce Identity"
date: "2022-11-16"
author: "Zach Kelling"
tags: ["nft", "identity", "web3", "blockchain", "commerce"]
description: "Introducing Identity NFTs: blockchain-based portable identity for commerce."
---

# Identity NFTs: Portable Commerce Identity

Customer identity is fragmented. Every platform maintains separate profiles. Reputation does not transfer. Preferences stay locked in silos. Today we are introducing Identity NFTs: portable commerce identity on the blockchain.

## The Identity Problem

Current state:

- Customer has accounts on 50+ commerce platforms
- Purchase history scattered across platforms
- Loyalty points expire or trap value
- Reviews and reputation reset with each platform
- Preferences must be re-entered everywhere

This hurts customers (fragmented experience) and merchants (incomplete customer view).

## Identity NFTs

An Identity NFT is a blockchain-based identity token that:

- **You own**: Stored in your wallet, controlled by you
- **Aggregates data**: Connects activity across platforms
- **Portable**: Use anywhere that accepts it
- **Privacy-preserving**: Share what you choose

## How It Works

### Minting

```typescript
import { IdentityNFT } from '@hanzo/identity';

// Customer mints their identity
const identity = await IdentityNFT.mint({
  wallet: customerWallet,
  initialData: {
    preferences: { ... },
    verified: { email: true }
  }
});
```

### Connecting Platforms

```typescript
// On any platform supporting Identity NFTs
const connection = await platform.connectIdentity(identity, {
  share: ['purchase_history', 'preferences'],
  receive: ['loyalty_points', 'reviews']
});
```

### Data Flow

```
Customer Identity NFT
        ↑ ↓
┌───────┴────────┐
│  Aggregated    │
│    Profile     │
└───────┬────────┘
    ↑ ↓   ↑ ↓   ↑ ↓
Platform Platform Platform
    A        B        C
```

Each platform contributes and accesses data with customer permission.

## Features

### Reputation Portability

Reviews and ratings aggregate across platforms:

```json
{
  "reputation": {
    "total_reviews": 47,
    "average_rating": 4.8,
    "verified_purchases": 43,
    "platforms": ["hanzo", "platform_b", "platform_c"]
  }
}
```

New platforms see your established reputation.

### Loyalty Aggregation

Points and rewards consolidate:

```json
{
  "loyalty": {
    "total_value": "$234.50",
    "programs": [
      { "platform": "hanzo", "points": 15000, "value": "$150" },
      { "platform": "platform_b", "points": 8450, "value": "$84.50" }
    ]
  }
}
```

Use aggregated loyalty anywhere participating.

### Preference Sync

Preferences transfer automatically:

```json
{
  "preferences": {
    "sizes": { "shirt": "M", "pants": "32x32" },
    "style": ["minimalist", "sustainable"],
    "communication": { "email": true, "sms": false }
  }
}
```

No more re-entering the same information.

### Verified Credentials

Attestations from trusted sources:

```json
{
  "verified": {
    "email": { "verified": true, "verifier": "hanzo" },
    "age_21_plus": { "verified": true, "verifier": "id_provider" },
    "address": { "verified": true, "verifier": "shipping_provider" }
  }
}
```

## Privacy Model

Customers control data sharing:

- **Selective disclosure**: Share specific attributes, not everything
- **Zero-knowledge proofs**: Prove claims without revealing data
- **Revocable access**: Disconnect platforms anytime
- **Encrypted storage**: Data encrypted, keys controlled by customer

Example: Prove age 21+ without revealing birthdate:

```typescript
const proof = await identity.prove({
  claim: 'age_gte',
  value: 21,
  to: platform
});
```

## Technical Implementation

### Smart Contract

Identity NFT contract on Ethereum (with L2 support):

```solidity
contract IdentityNFT {
    mapping(uint256 => bytes32) public dataHashes;
    mapping(uint256 => mapping(address => Permission)) public permissions;

    function updateData(uint256 tokenId, bytes32 dataHash) external;
    function grantPermission(uint256 tokenId, address platform, Permission perm) external;
    function revokePermission(uint256 tokenId, address platform) external;
}
```

### Off-Chain Data

Actual data stored off-chain with:

- Customer-controlled encryption
- Decentralized storage (IPFS/Arweave)
- Hash anchored on-chain for integrity

## For Merchants

Benefits of accepting Identity NFTs:

- Richer customer profiles from day one
- Verified information reduces fraud
- Loyalty interoperability drives traffic
- Reputation transfer builds trust

Integration:

```typescript
import { IdentityProvider } from '@hanzo/identity';

const provider = new IdentityProvider({
  apiKey: 'xxx',
  permissions: ['read:preferences', 'write:purchases']
});

// Check if customer has Identity NFT
const identity = await provider.resolve(walletAddress);
if (identity) {
  const preferences = await identity.getPreferences();
  // Personalize experience immediately
}
```

## Roadmap

- Q4 2022: Beta launch on Hanzo platform
- Q1 2023: Partner platform integrations
- Q2 2023: Mobile wallet support
- Q3 2023: Cross-chain identity bridges

## What's Next

Identity NFTs are infrastructure for the next generation of commerce. Own your identity. Control your data. Take it anywhere.

---

*Zach Kelling is the founder of Hanzo Industries.*
