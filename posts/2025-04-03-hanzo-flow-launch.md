---
title: "Hanzo Flow: Visual AI Workflow Builder"
date: "2025-04-03"
author: "Zach Kelling"
tags: ["flow", "workflows", "ai", "automation", "visual", "launch"]
description: "Hanzo Flow launches — a visual drag-and-drop builder for complex AI workflows. Connect models, tools, and APIs without writing integration code."
---

# Hanzo Flow: Visual AI Workflow Builder

AI workflows are getting complex. Chain an LLM call, run a web search, call an API, process the results, run another LLM call, format the output. This logic is painful to write, painful to debug, and painful to hand off to non-engineers.

Today we're launching Hanzo Flow: a visual builder for AI workflows.

## The Problem With Code-Only Workflows

LangChain and similar frameworks solved the "chain multiple LLM calls" problem. But they created a new problem: sprawling Python files full of nodes, edges, and callback hell that only the original author can modify.

Product managers can't read it. Designers can't contribute. QA can't test individual steps. Every change requires a developer.

Flow puts the workflow in a visual editor where anyone can understand it, run it, and modify it.

## What Flow Looks Like

You build workflows by dragging nodes onto a canvas and connecting them:

- **Model nodes**: Call any LLM — Zen, OpenAI, Anthropic, local models
- **Tool nodes**: Web search, code execution, database queries, file operations
- **API nodes**: HTTP requests to any external service
- **Logic nodes**: Conditional branching, loops, map/reduce
- **Prompt nodes**: Templated prompts with variable injection
- **Output nodes**: Structured data extraction, formatting

Connections between nodes define data flow. The output of one node becomes the input of the next.

## Real Workflows

**Research assistant**: Search → Scrape → Summarize → Format
1. Take user query
2. Run web search (Serper API)
3. Scrape top 5 results
4. Summarize each with LLM
5. Synthesize into structured report

**Code review pipeline**: PR → Analyze → Comment → Track
1. Receive PR webhook
2. Extract diff from GitHub API
3. Analyze with code model
4. Post structured review comment
5. Log to tracking system

**Content pipeline**: Brief → Draft → Edit → Publish
1. Accept content brief
2. Generate draft with Zen Scribe
3. Edit for style/brand compliance
4. Push to CMS via API

## LangSmith Integration

Flow exports to LangSmith for evaluation and monitoring. Build visually, evaluate programmatically, monitor in production.

## API-First

Every workflow is also an API endpoint. Build visually, deploy as an endpoint, call from any application.

```bash
curl https://flow.hanzo.ai/v1/workflows/research-assistant/invoke \
  -H "Authorization: Bearer $HANZO_API_KEY" \
  -d '{"query": "latest advances in protein folding"}'
```

## Available Now

Hanzo Flow is available at [flow.hanzo.ai](https://flow.hanzo.ai). Start with the workflow templates — research assistant, email drafter, code reviewer — or build from scratch.

---

*Zach Kelling is the founder of Hanzo AI (Techstars '17).*
