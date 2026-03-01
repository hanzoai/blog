---
title: "Hanzo Observability: Metrics, Logs, and Traces in One Platform"
date: "2023-02-15"
author: "Hanzo AI"
tags: ["observability", "metrics", "logs", "traces", "infrastructure", "launch"]
description: "Launching the Hanzo Observability stack — unified metrics, logs, and distributed tracing with OpenTelemetry-native ingestion."
---

# Hanzo Observability: Metrics, Logs, and Traces in One Platform

Observability in 2023 means three vendors: Datadog for metrics ($$$), an ELK stack for logs (operational nightmare), and Jaeger for traces (runs on hope). Each with its own query language, retention policy, alerting system, and bill.

Today we are launching the Hanzo Observability stack: metrics, logs, and distributed tracing in a single platform with unified querying.

## Three Pillars, One Platform

### Metrics

Time-series metrics with PromQL-compatible querying:

- Drop-in replacement for Prometheus
- Remote write ingestion — point your existing exporters at us
- 13-month retention by default
- Grafana-compatible for dashboarding
- Alerting with PagerDuty, Slack, and webhook integrations

### Logs

Scalable log aggregation with full-text search:

- Structured and unstructured log ingestion
- Full-text search with sub-second query times
- Log-to-trace correlation (click a log line, see the trace)
- Pattern detection and anomaly alerting
- Configurable retention policies

### Traces

Distributed tracing for understanding request flow:

- OpenTelemetry-native ingestion
- Jaeger-compatible query API
- Service dependency mapping
- Latency distribution analysis
- Trace-to-log correlation

## OpenTelemetry Native

Hanzo Observability speaks OpenTelemetry natively. If you are already instrumented with OTel, point your collector at our endpoint. Done.

```yaml
# otel-collector-config.yaml
exporters:
  otlphttp:
    endpoint: https://otel.hanzo.ai
    headers:
      authorization: "Bearer ${HANZO_API_KEY}"

service:
  pipelines:
    metrics:
      exporters: [otlphttp]
    logs:
      exporters: [otlphttp]
    traces:
      exporters: [otlphttp]
```

## Unified Querying

The real value is correlation. A latency spike in metrics → drill into traces for that time window → read the logs for the slow spans. All in one interface, without switching tools or time-syncing dashboards.

## Pricing

Usage-based, no per-host fees:

- **Metrics**: $8 per million samples ingested
- **Logs**: $1.50 per GB ingested
- **Traces**: $1 per million spans

Retention included. No surprise egress charges.

---

*Hanzo AI is Techstars '17.*
