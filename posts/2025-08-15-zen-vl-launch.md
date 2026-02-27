---
title: "Zen VL: Vision-Language Models with Function Calling"
date: "2025-08-15"
author: "Zach Kelling"
tags: ["ai", "models", "zen", "vision", "vl", "function-calling", "agents", "launch"]
description: "Zen VL is a family of vision-language models at 4B, 8B, and 30B -- each with instruct and agent variants -- supporting OCR in 32 languages, GUI navigation, spatial grounding, and native function calling with visual context."
---

# Zen VL: Vision-Language Models with Function Calling

Zen VL is a family of vision-language models designed for visual agents. Three sizes -- 4B, 8B, 30B -- each available in an instruct variant and an agent variant. The agent variants add native function calling with visual context, GUI navigation, and spatial grounding.

## The Lineup

| Model | Parameters | Variant | Use Case |
|-------|-----------|---------|----------|
| Zen VL 4B Instruct | 4B | Instruct | Edge visual QA, mobile |
| Zen VL 4B Agent | 4B | Agent | Lightweight visual agents |
| Zen VL 8B Instruct | 8B | Instruct | General visual reasoning |
| Zen VL 8B Agent | 8B | Agent | Desktop automation, GUI tasks |
| Zen VL 30B Instruct | 30B | Instruct | High-accuracy visual analysis |
| Zen VL 30B Agent | 30B | Agent | Complex agentic visual workflows |

## Function Calling with Visual Context

The agent variants support OpenAI-compatible function calling with full visual context. Tools receive the model's visual understanding as part of their call, not just the text.

```python
response = client.chat.completions.create(
    model="zen-vl-8b-agent",
    messages=[{
        "role": "user",
        "content": [
            {"type": "image_url", "image_url": {"url": screenshot_url}},
            {"type": "text", "text": "Click the 'Submit' button"}
        ]
    }],
    tools=[{
        "type": "function",
        "function": {
            "name": "click",
            "parameters": {
                "type": "object",
                "properties": {
                    "x": {"type": "number"},
                    "y": {"type": "number"}
                }
            }
        }
    }]
)
```

The model identifies the Submit button visually, resolves its screen coordinates, and issues the click tool call with precise x/y values. No separate object detection step required.

## OCR in 32 Languages

Text recognition in 32 languages including CJK scripts, Arabic, Devanagari, and all major Western languages. The Zen VL models were trained with dense multilingual document data -- receipts, forms, signage, product packaging, handwriting.

OCR quality is consistent across all 32 languages and does not degrade on mixed-language documents where multiple scripts appear in the same image.

## GUI Navigation

The agent variants understand GUI components natively: buttons, inputs, dropdowns, checkboxes, menus, dialogs, scroll areas. They can:

- Identify actionable elements by visual appearance
- Understand element state (enabled, disabled, checked, selected)
- Navigate multi-step workflows across multiple screenshots
- Recover from unexpected UI states

This is what differentiates VL agents from screenshot-based chatbots -- the model has a functional model of GUI interactions, not just visual recognition.

## Spatial Grounding

Zen VL models return structured spatial outputs when asked: bounding boxes, keypoints, segmentation masks, and object relationships in 3D space for images with depth cues.

This enables:
- Robotic manipulation planning from visual input
- Augmented reality overlay alignment
- Precise cropping and region extraction without manual annotation
- Document layout analysis with spatial structure

## Video Understanding

All Zen VL models process video as well as images. Up to 128 frames per video clip, with temporal attention across frames. The model understands what changed between frames, causality, and temporal sequences.

Use cases: product demo analysis, visual QA testing of web applications, screen recording review, and video content moderation.

## Get Zen VL

- **HuggingFace**: [huggingface.co/zenlm](https://huggingface.co/zenlm) -- all six variants, SafeTensors and GGUF
- **Hanzo Cloud API**: `api.hanzo.ai/v1/chat/completions` -- models `zen-vl-4b`, `zen-vl-8b`, `zen-vl-30b`
- **Zen LM**: [zenlm.org](https://zenlm.org) -- vision agent guides and function calling documentation

---

*Zach Kelling is the founder of Hanzo AI, Techstars '17.*
