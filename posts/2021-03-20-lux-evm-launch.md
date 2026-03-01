---
title: "Lux C-Chain: Full EVM Compatibility on a Post-Quantum Blockchain"
date: "2021-03-20"
author: "Hanzo AI"
tags: ["lux", "evm", "smart-contracts", "blockchain", "launch"]
description: "Lux C-Chain launches with full Ethereum compatibility — deploy Solidity contracts on a post-quantum blockchain with sub-second finality."
---

# Lux C-Chain: Full EVM Compatibility on a Post-Quantum Blockchain

Today the Lux C-Chain is live on mainnet. Any Solidity contract that runs on Ethereum runs on Lux — with sub-second finality, 4,500+ TPS, and post-quantum security.

## What This Means

If you can deploy to Ethereum, you can deploy to Lux. Same Solidity. Same tooling. Same developer experience. Different performance characteristics:

| Property | Ethereum | Lux C-Chain |
|----------|----------|-------------|
| Finality | ~12 minutes (64 blocks) | < 1 second |
| TPS | ~15 | 4,500+ |
| Gas costs | $5-50+ per transaction | Sub-cent |
| Quantum safety | None | CRYSTALS-Dilithium |

## Developer Experience

Standard Ethereum tooling works out of the box:

- **Hardhat**: Point your `hardhat.config.js` at the Lux RPC endpoint
- **Foundry**: `forge create` and `cast` work natively
- **MetaMask**: Add the Lux network (Chain ID: 96369)
- **ethers.js / web3.js**: Standard JSON-RPC interface

```javascript
// hardhat.config.js
module.exports = {
  networks: {
    lux: {
      url: "https://api.lux.network/ext/bc/C/rpc",
      chainId: 96369,
    }
  }
}
```

## Custom Precompiles

Beyond standard EVM compatibility, Lux C-Chain supports custom precompiled contracts for Lux-specific operations:

- Cross-chain messaging (Warp protocol)
- Validator set queries
- Post-quantum signature verification
- Native asset operations

These precompiles are accessible at reserved addresses and provide gas-efficient access to Lux platform features from Solidity.

## Multi-VM Architecture

The C-Chain is one of three chains in the Lux architecture:

- **X-Chain (AVM)**: Asset creation and transfer — optimized for high-throughput token operations
- **P-Chain (PlatformVM)**: Validator management, staking, and subnet coordination
- **C-Chain (CoreVM)**: EVM-compatible smart contract execution

Each chain uses the Quasar consensus engine but with parameters tuned for its specific workload. Cross-chain communication is native — assets move between chains through atomic transactions without bridge contracts.

## Get Started

The Lux testnet (Chain ID: 96370) is available for development. Testnet tokens are available from the faucet at faucet.lux.network.

---

*Hanzo AI is Techstars '17. Lux Network: [lux.network](https://lux.network)*
