---
title: "Zen Max: 671B Reasoning Model"
date: "2025-06-15"
author: "Zach Kelling"
tags: ["ai", "models", "zen", "reasoning", "launch", "moe", "abliteration", "zen-mode"]
description: "Zen Max is a 671B MoE reasoning model with 384 experts, 256K context, and abliterated base weights -- achieving AIME 2025 99.1%, SWE-Bench 71.3%, and BrowseComp 60.2%."
---

# Zen Max: 671B Reasoning Model

Zen Max is a 671B mixture-of-experts reasoning model. It is currently the most capable model in the Zen MoDE lineup, and one of the highest-performing open-weight models available on any benchmark.

It is also abliterated.

## Architecture

671B total parameters, 384 experts, 8 active per forward pass. At inference time, Zen Max activates approximately **14B parameters** per token -- the compute profile of a mid-size dense model with the knowledge and capability of a 671B one.

This architecture makes Zen Max deployable at frontier quality on configurations that would be impractical for a dense 671B model. 8x H100 SXM handles the full-precision model. 4x H100 with FP8 quantization works for production throughput.

## Benchmark Results

| Benchmark | Score | Notes |
|-----------|-------|-------|
| AIME 2025 | **99.1%** | Math olympiad problems |
| SWE-Bench Verified | **71.3%** | Real-world software engineering tasks |
| BrowseComp | **60.2%** | Web research and fact-finding |
| GPQA Diamond | 81.2% | Graduate-level science questions |
| Codeforces Rating | 2140 | Competitive programming |

The AIME 2025 result of 99.1% is the number to look at. AIME is the American Invitational Mathematics Examination -- problems that a small fraction of mathematically gifted high school students solve correctly. Getting 99.1% requires genuine mathematical reasoning, not pattern matching.

SWE-Bench Verified at 71.3% means Zen Max resolves 71.3% of real GitHub issues from open-source projects when given the repository and the issue description. This is an agentic task requiring understanding of existing code, planning a fix, and implementing it correctly.

## Extended Thinking

256K context window with extended reasoning enabled. For complex multi-step problems, Zen Max can think for as long as the problem requires before generating output. The model allocates compute to thinking proportional to problem difficulty -- short answers to simple questions, extended reasoning chains for research and hard math.

## Agentic Tool Use

Zen Max handles **200-300 sequential tool calls** in a single agentic task. This is not a typical generation loop -- it is deep autonomous operation: the model issues tool calls, observes results, updates its plan, and continues. Tasks that require browsing dozens of web pages, running hundreds of code experiments, or traversing a large codebase end-to-end are within scope.

## Abliteration

Zen Max ships with an abliterated base. Abliteration is directional ablation of refusal behavior from the model's residual stream. The refusal directions -- the learned internal representations that cause a model to decline requests -- are identified and removed from the weights before release.

The result is a model that reasons about any topic without built-in filtering. For researchers, security professionals, and applications where full capability access matters, this is the model.

Abliteration does not degrade benchmark performance. AIME, SWE-Bench, and GPQA scores are measured on the abliterated model.

## Get Zen Max

- **HuggingFace**: [huggingface.co/zenlm](https://huggingface.co/zenlm)
- **Hanzo Cloud API**: `api.hanzo.ai/v1/chat/completions` -- model `zen-max`
- **Zen LM**: [zenlm.org](https://zenlm.org) -- deployment guides, hardware requirements

64 SafeTensor shards. Download with `hf download zenlm/zen-max`.

---

*Zach Kelling is the founder of Hanzo AI, Techstars '17.*
