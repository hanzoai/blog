---
title: "Astle.js: Reactive Commerce Components"
date: "2015-06-10"
author: "Zach Kelling"
tags: ["javascript", "open-source", "frontend", "components"]
description: "Releasing Astle.js, our open-source library for building reactive commerce interfaces."
---

# Astle.js: Reactive Commerce Components

Today we are open-sourcing Astle.js, the component library that powers Crowdstart storefronts.

## Why Another Framework?

We did not set out to build a framework. We needed to solve specific commerce problems:

- **Real-time inventory** - Stock counts must update as purchases happen
- **Dynamic pricing** - Quantity discounts, early-bird rates, regional pricing
- **Complex cart logic** - Bundles, subscriptions, one-time purchases in the same cart
- **Instant feedback** - Users should never wonder if their action registered

Existing solutions required too much custom wiring. Commerce logic leaked into view code. State synchronization became a maintenance burden.

## The Astle Approach

Astle.js is built on three concepts:

### Reactive Data Binding

```javascript
const cart = astle.store({
  items: [],
  get total() {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }
});

// UI automatically updates when cart.items changes
```

### Commerce-Native Components

```html
<astle-product :product="product">
  <astle-price></astle-price>
  <astle-inventory></astle-inventory>
  <astle-add-to-cart></astle-add-to-cart>
</astle-product>
```

### Server State Sync

```javascript
astle.sync('/api/cart', cart, {
  optimistic: true,
  retry: 3,
  conflict: 'server-wins'
});
```

## Design Decisions

**Small core, big ecosystem**: The core library handles reactivity and lifecycle. Commerce components are separate packages you include as needed.

**Progressive enhancement**: Astle components work without JavaScript for basic functionality. Interactivity enhances the experience.

**No build required**: Use directly from CDN or bundle with your build system. Your choice.

**TypeScript native**: Written in TypeScript with full type definitions.

## Performance

Astle uses a fine-grained reactivity system. Only affected DOM nodes update when state changes. Virtual DOM diffing happens at the component level, not the entire tree.

Benchmarks on typical product pages:

- Initial render: 12ms
- Cart update: 3ms
- Inventory sync: 8ms (including network)

## Get Started

```bash
npm install @hanzo/astle
```

Documentation and examples at [github.com/hanzo.ai/astle](https://github.com/hanzo.ai/astle).

## Open Source

Astle.js is MIT licensed. We benefit from open-source tools every day. This is our contribution back.

---

*Zach Kelling is the founder of Hanzo Industries.*
