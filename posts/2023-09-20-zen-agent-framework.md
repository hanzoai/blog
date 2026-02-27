---
title: "Zen Agent: Building AI That Actually Does Things"
date: "2023-09-20"
author: "Zach Kelling"
tags: ["ai", "agents", "automation", "zen", "mcp"]
description: "Introducing Zen Agent - our framework for building AI systems that can take action in the real world."
---

# Zen Agent: Building AI That Actually Does Things

Language models are impressive at generating text. But text alone doesn't accomplish tasks. We needed AI that could interact with the world - reading files, calling APIs, executing code, making decisions.

## The Agent Problem

Early "agents" were fragile:

```
Human: Book me a flight to Tokyo
AI: I'd be happy to help! Here's how to book a flight...
Human: No, actually book it
AI: I cannot perform actions in the real world...
```

The model knew what to do but couldn't do it. We needed to close the loop.

## Zen Agent Architecture

```
┌──────────────────────────────────────────┐
│                 Zen Agent                 │
├──────────────────────────────────────────┤
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  │
│  │ Planner │→ │ Executor│→ │ Verifier│  │
│  └─────────┘  └─────────┘  └─────────┘  │
├──────────────────────────────────────────┤
│              Tool Registry               │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐    │
│  │File│ │ Web│ │Code│ │ API│ │ DB │    │
│  └────┘ └────┘ └────┘ └────┘ └────┘    │
└──────────────────────────────────────────┘
```

**Planner**: Breaks tasks into steps, selects tools.

**Executor**: Runs tools, handles errors, retries.

**Verifier**: Checks that actions achieved the goal.

## Tool Definition

Tools are defined with clear schemas:

```python
@tool(
    name="read_file",
    description="Read contents of a file",
    parameters={
        "path": {"type": "string", "description": "File path"}
    }
)
def read_file(path: str) -> str:
    with open(path) as f:
        return f.read()
```

The agent understands what tools do and when to use them.

## Execution Loop

```python
while not task_complete:
    # Plan next action
    action = planner.decide(context, available_tools)

    # Execute action
    result = executor.run(action)

    # Update context
    context.add(action, result)

    # Check completion
    task_complete = verifier.check(task, context)
```

The agent iterates until the task is done or it determines it can't proceed.

## Real Examples

**Research Task**:
```
Task: Find the top 5 competitors to Stripe and summarize their pricing

1. web_search("payment processing companies competitors")
2. read_url("https://...")
3. read_url("https://...")
4. write_file("competitors.md", summary)

Result: competitors.md with structured comparison
```

**Development Task**:
```
Task: Add rate limiting to the /api/users endpoint

1. read_file("src/api/routes.py")
2. read_file("src/middleware/rate_limit.py")
3. edit_file("src/api/routes.py", changes)
4. run_command("pytest tests/test_rate_limit.py")
5. git_commit("Add rate limiting to users endpoint")

Result: Code committed, tests passing
```

## Safety Boundaries

Agents with tools are powerful. Too powerful without guardrails:

**Sandboxing**: File access limited to project directories.

**Confirmation**: Destructive actions require human approval.

**Budget limits**: API calls, compute time, cost caps.

**Audit logging**: Every action recorded for review.

## Model Context Protocol (MCP)

Zen Agent uses MCP for tool communication - a standard protocol for AI-tool interaction:

```json
{
    "tool": "read_file",
    "arguments": {"path": "/src/main.py"},
    "context": {"task_id": "abc123"}
}
```

MCP allows tools to be shared across agents, frameworks, and providers. Your tools work with Zen, Claude, GPT-4, and future models.

## What We Learned

1. **Planning is hard**: Models often jump to action without proper planning
2. **Verification is essential**: Never trust "I did it" - check the result
3. **Context management**: Too much context confuses; too little misses important info
4. **Error recovery**: Good agents handle failures gracefully

## The Future

Agents are how AI becomes useful. Not chat interfaces, but systems that integrate into workflows, handle routine tasks, and amplify human capabilities.

Zen Agent is our foundation for that future.

---

*This post is part of our retrospective series exploring the technical foundations of Hanzo and Zen.*
