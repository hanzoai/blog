---
title: "MCP: 260 Tools for AI Models"
date: "2025-07-24"
author: "Zach Kelling"
tags: ["ai", "mcp", "tools", "infrastructure", "agents"]
description: "How we built 260+ tools using Model Context Protocol, enabling AI models to interact with the world."
---

# MCP: 260 Tools for AI Models

AI models are brilliant at reasoning but helpless at acting. Model Context Protocol (MCP) changes that - giving models the ability to read files, call APIs, execute code, and interact with the world.

## What is MCP?

MCP is a standardized protocol for AI-tool communication:

```json
{
    "tool": "read_file",
    "arguments": {
        "path": "/src/main.py"
    }
}
```

Any model that speaks MCP can use any MCP tool. Build once, use everywhere.

## The Tool Explosion

We've built 260+ MCP tools across categories:

### File System (25 tools)
- read_file, write_file, list_directory
- search_files, glob, grep
- file_stats, permissions, watch

### Code (40 tools)
- run_python, run_javascript, run_bash
- linter, formatter, type_checker
- git operations, test runners
- debugger, profiler

### Web (35 tools)
- fetch_url, scrape_page
- search_google, search_bing
- api_call, graphql_query
- screenshot, pdf_to_text

### Data (30 tools)
- sql_query, mongodb_query
- pandas_operation, json_transform
- csv_read, excel_parse
- vector_search, embedding

### Communication (20 tools)
- send_email, send_slack
- calendar_event, reminder
- notification, webhook

### Blockchain (40 tools)
- lux_balance, lux_transfer
- contract_call, contract_deploy
- nft_mint, swap_tokens
- sign_message, verify_signature

### AI/ML (25 tools)
- image_generate, image_edit
- speech_to_text, text_to_speech
- translate, summarize
- embedding_compute

### System (45 tools)
- process_list, process_kill
- network_info, disk_usage
- env_vars, system_info
- docker operations, kubernetes

## Usage Examples

### Research Assistant
```
Human: Find recent papers on transformer efficiency and summarize them

Agent uses:
1. search_google("transformer efficiency papers 2024")
2. fetch_url(paper_links)
3. pdf_to_text(papers)
4. summarize(combined_text)
5. write_file("summary.md", result)
```

### Code Review Bot
```
Human: Review the changes in this PR

Agent uses:
1. git_diff("main", "feature-branch")
2. read_file(changed_files)
3. linter(files)
4. type_checker(files)
5. send_comment(pr_number, review)
```

### Data Analysis
```
Human: Analyze our sales data and create a report

Agent uses:
1. sql_query("SELECT * FROM sales")
2. pandas_operation("group by month")
3. chart_create(data, "bar")
4. write_file("report.html", combined)
5. send_email(stakeholders, report)
```

## Tool Development

Creating new tools is straightforward:

```python
from mcp import Tool, Param

@Tool(
    name="weather",
    description="Get current weather for a location",
    params=[
        Param("location", "string", "City name or coordinates"),
        Param("units", "string", "celsius or fahrenheit", optional=True)
    ]
)
async def weather(location: str, units: str = "celsius"):
    # Implementation
    data = await weather_api.get(location)
    return format_weather(data, units)
```

## Security Model

Tools have permission scopes:

```yaml
tools:
  read_file:
    scope: filesystem
    paths: ["/project/**"]  # Limited to project

  run_bash:
    scope: execution
    allowed_commands: ["npm", "python", "git"]

  send_email:
    scope: communication
    requires_confirmation: true
```

Users control what tools can access.

## MCP Registry

Tools are discoverable through our registry:

```bash
# Search for tools
mcp search "database"

# Install a tool
mcp install sql-tools

# List installed
mcp list
```

## Integration

MCP works with major AI systems:

- **Claude**: Native MCP support
- **GPT-4**: Via function calling adapter
- **Llama**: Via tool use adapter
- **Zen**: Native support

```python
from hanzo import Agent
from mcp import MCPToolkit

# Load all installed tools
toolkit = MCPToolkit.load()

# Create agent with tools
agent = Agent(
    model="zen-coder-34b",
    tools=toolkit.all()
)

# Agent can now use any tool
response = agent.run("Deploy the app to production")
```

## What's Next

- **Tool composition**: Combine tools into workflows
- **Learning**: Models learn new tools from examples
- **Verification**: Prove tools do what they claim
- **Marketplace**: Share and sell custom tools

MCP is how AI becomes useful - not through better prompting, but through better tools.

---

*This post is part of our retrospective series exploring the technical foundations of Hanzo.*
