# eventbridge-envelope

<!-- TODO: fill pattern content -->

---

## 4️⃣ `patterns/eventbridge-envelope/index.md`

```md
# EventBridge Envelope

> A common event “envelope” for messages flowing across Lambdas and EventBridge.

## Problem

Originally, events looked different depending on who wrote them:

- Some had `id`, others had `eventId` or no ID at all.  
- Timestamps were missing or in inconsistent formats.  
- No clear separation between **metadata** and **business payload**.  

This made it hard to reason about ordering, deduplication, and replay.

## When to Use

Use this pattern whenever:

- A Lambda **publishes events** to EventBridge, SNS, or SQS.  
- Events will be consumed by **multiple services** over time.  
- You care about **replayability** and **auditing**.

It’s overkill for one-off internal callbacks that will never leave a single service boundary.

## Pattern

Wrap your business payload in a standard envelope:

```json
{
  "envelopeVersion": "1.0",
  "eventId": "uuid",
  "eventType": "billing.invoice.created",
  "source": "billing-service",
  "timestamp": "2025-11-25T12:34:56.789Z",
  "correlationId": "uuid-or-trace-id",
  "tenantId": "acme-corp",
  "payload": {
    "...": "domain-specific fields here"
  }
}
