---
title: "Hanzo Search: Full-Text Search That Just Works"
date: "2022-03-18"
author: "Hanzo AI"
tags: ["search", "infrastructure", "launch"]
description: "Introducing Hanzo Search — full-text search with typo tolerance, faceting, and sub-millisecond query times."
---

# Hanzo Search: Full-Text Search That Just Works

Search is the feature every application needs and every team dreads building. Elasticsearch is powerful and operationally brutal. Algolia is managed but expensive. Most teams end up with `LIKE '%query%'` in PostgreSQL and call it done.

Today we are launching Hanzo Search: full-text search that is fast to set up, fast to query, and affordable to run.

## Features

### Instant Results

Sub-millisecond query times on datasets up to 100M documents. No caching tricks — raw query performance.

### Typo Tolerance

Users misspell things. Search should handle it:

- Automatic typo detection and correction
- Configurable tolerance per field
- Phonetic matching for names

### Faceted Search

Filter and aggregate results by any field:

- Category facets with counts
- Range facets (price, date)
- Multi-select filtering
- Dynamic facet computation

### Relevance Tuning

Control what matters:

- Field weighting (title matches rank higher than body)
- Custom ranking rules
- Geo-based sorting
- Business rules (boost promoted items)

### Real-Time Indexing

Documents are searchable within milliseconds of ingestion. No index rebuild delays. No eventual consistency surprises.

## Integration

```javascript
import { HanzoSearch } from '@hanzo/search'

const search = new HanzoSearch({ apiKey: 'your-key' })

// Index a document
await search.index('products', {
  id: '123',
  title: 'Wireless Headphones',
  description: 'Noise-canceling bluetooth headphones',
  price: 299,
  category: 'electronics'
})

// Search with facets
const results = await search.query('products', 'wireless headphones', {
  facets: ['category'],
  filter: 'price < 500'
})
```

## Pricing

- **Free**: 10K documents, 50K searches/month
- **Standard**: $29/month — 1M documents, unlimited searches
- **Pro**: $99/month — 10M documents, advanced analytics
- **Enterprise**: Custom

---

*Hanzo AI is Techstars '17.*
