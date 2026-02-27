---
title: "Zen Designer: 235B Vision-Language Model"
date: "2025-07-01"
author: "Zach Kelling"
tags: ["ai", "models", "zen", "vision", "multimodal", "launch", "design", "zen-mode"]
description: "Zen Designer is a 235B MoE vision-language model with 22B active parameters, supporting image analysis, video understanding, OCR in 32 languages, and native design reasoning."
---

# Zen Designer: 235B Vision-Language Model

Zen Designer is a 235B mixture-of-experts vision-language model built for visual understanding and design reasoning. 22B parameters active per forward pass, with native support for images, video, OCR across 32 languages, and layout analysis.

## Architecture

235B total parameters across a sparse MoE architecture, with 22B activated per token. The vision encoder processes images up to 4K resolution with no degradation on dense visual inputs -- detailed charts, fine text, complex diagrams. The language model handles visual context natively rather than late-fusing separate embeddings.

## Benchmark Results

| Benchmark | Score | Task Type |
|-----------|-------|-----------|
| DocVQA | **94.1** | Document question answering |
| ChartQA | **88.3** | Chart and graph understanding |
| MMBench | **87.6** | Multimodal reasoning |
| TextVQA | **85.2** | Text recognition in natural images |
| MathVista | **74.8** | Visual math problem solving |

DocVQA at 94.1 measures the ability to answer questions from scanned documents, invoices, forms, and PDFs. This requires combining OCR, spatial understanding, and reasoning -- not just recognizing text but understanding what it means in context.

## OCR in 32 Languages

Text recognition in 32 languages with full Unicode handling:

**Western**: English, French, German, Spanish, Italian, Portuguese, Dutch, Russian, Polish, Czech, Swedish, Norwegian, Finnish, Danish, Romanian

**East Asian**: Chinese Simplified, Chinese Traditional, Japanese, Korean

**Southeast Asian**: Thai, Vietnamese, Indonesian

**Other**: Arabic, Hebrew, Hindi, Bengali, Turkish, Greek, Hungarian, Croatian, Catalan, Ukrainian

OCR quality is consistent across languages -- not an English-first model with degraded support elsewhere. Training explicitly included high-density multilingual document corpora.

## Capabilities

### Image Analysis

Natural-language description of any image at multiple levels of detail. Zen Designer understands objects, spatial relationships, text, color, composition, and intent. Ask "what is wrong with this UI" and it will identify specific layout problems, contrast issues, and accessibility concerns.

### Video Understanding

Frame-by-frame temporal analysis. Zen Designer processes video as a sequence of visual tokens, maintaining temporal context across frames. Use cases include product demo analysis, design review recordings, and visual QA testing.

### Text-to-Layout

Describe a layout in natural language and Zen Designer generates structured layout specifications -- bounding boxes, component hierarchies, spacing rules. Useful for bridging design intent to implementation.

### Visual Reasoning

The model reasons about what it sees, not just describes it. Questions like "which chart shows the highest growth rate after Q3" or "which of these wireframes better follows accessibility guidelines" get reasoned answers, not just observations.

### Design Analysis

Zen Designer understands design systems: component relationships, visual hierarchy, typography, grid alignment, color theory. It can audit a screenshot against a design specification or identify deviations from a style guide.

## Get Zen Designer

- **HuggingFace**: [huggingface.co/zenlm](https://huggingface.co/zenlm)
- **Hanzo Cloud API**: `api.hanzo.ai/v1/chat/completions` -- model `zen-designer`
- **Zen LM**: [zenlm.org](https://zenlm.org) -- vision API guides and multimodal examples

---

*Zach Kelling is the founder of Hanzo AI, Techstars '17.*
