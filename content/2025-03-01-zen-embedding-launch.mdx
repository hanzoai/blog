---
title: "Zen Embedding: #1 Multilingual Retrieval"
date: "2025-03-01"
author: "Zach Kelling"
tags: ["ai", "models", "zen", "embeddings", "retrieval", "launch", "mteb"]
description: "Zen Embedding reaches #1 on the MTEB multilingual leaderboard with a 70.58 score, supporting 100+ languages and Matryoshka representation learning across four dimension sizes."
---

# Zen Embedding: #1 Multilingual Retrieval

Zen Embedding is our first purpose-built retrieval model, and it ships at the top of the MTEB multilingual leaderboard with a score of **70.58**. It supports 100+ languages, instruction-tuned retrieval, and Matryoshka representation learning (MRL) for flexible embedding dimensions.

## Benchmark Results

MTEB (Massive Text Embedding Benchmark) is the standard leaderboard for embedding model quality across retrieval, classification, clustering, and semantic similarity tasks.

| Benchmark | Score | Category |
|-----------|-------|----------|
| MTEB Multilingual (overall) | **70.58** | #1 ranked |
| BEIR Retrieval (avg) | 56.3 | Top 5 |
| Multilingual Retrieval | 64.1 | #1 ranked |
| STS (Semantic Textual Similarity) | 85.7 | Top 10 |

The 70.58 MTEB multilingual score represents a meaningful gap over the prior generation of multilingual embedding models. For languages outside of English, the improvement is especially pronounced -- Zen Embedding was trained with explicit multilingual objectives rather than treating non-English as an afterthought.

## Matryoshka Representation Learning

Zen Embedding implements MRL, which means a single model produces embeddings that are useful at multiple dimension sizes:

| Dimensions | Use Case | Storage per 1M vectors |
|------------|----------|----------------------|
| 256 | High-throughput retrieval, tight latency budgets | ~1 GB |
| 512 | Balanced quality and cost | ~2 GB |
| 1024 | High-recall RAG pipelines | ~4 GB |
| 4096 | Maximum fidelity, fine-grained reranking | ~16 GB |

With MRL, you embed once at full 4096 dimensions and truncate at query time. No re-embedding required when you change dimension targets. This is particularly useful for tiered retrieval systems: coarse 256-dimensional first-pass, then re-rank with full 4096 dimensions.

## Language Coverage

100+ languages with strong coverage across:

- European: English, French, German, Spanish, Italian, Portuguese, Dutch, Russian, Polish, and 20+ more
- CJK: Chinese (Simplified and Traditional), Japanese, Korean
- Arabic and right-to-left scripts
- South and Southeast Asian: Hindi, Bengali, Thai, Vietnamese, Indonesian, and more
- Low-resource languages with explicit training coverage

Instruction-tuning means the model understands retrieval intent. You can specify `Represent this document for retrieval:` or `Represent this query for searching:` prefixes, and the model adjusts its embedding accordingly.

## Architecture

7B parameters, 8192 token context window. Built on a transformer encoder architecture with bidirectional attention -- standard for embedding models, distinct from the decoder-only architecture used in generative Zen models.

The instruction-tuned training objective uses contrastive learning with hard negatives mined from 100+ language corpora. MRL training adds nested loss at each dimension checkpoint.

## Integration

```python
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("zenlm/zen-embedding")

# Full 4096-dimensional embeddings
embeddings = model.encode(documents, normalize_embeddings=True)

# Truncate to 256 for fast retrieval
embeddings_256 = embeddings[:, :256]
```

Direct integration with LlamaIndex, LangChain, and any vector database that accepts sentence-transformers compatible models. Hanzo Cloud exposes Zen Embedding via the `/v1/embeddings` API endpoint.

## Get Zen Embedding

- **HuggingFace**: [huggingface.co/zenlm/zen-embedding](https://huggingface.co/zenlm)
- **Hanzo Cloud API**: Available at `api.hanzo.ai/v1/embeddings`
- **Zen LM**: [zenlm.org](https://zenlm.org) -- integration guides and benchmark details

---

*Zach Kelling is the founder of Hanzo AI, Techstars '17.*
