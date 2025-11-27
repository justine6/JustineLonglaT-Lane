# timeout-baseline

<!-- TODO: fill pattern content -->
# Timeout Baseline

> A shared, opinionated timeout + retry contract for Lambda functions – tuned for the real world instead of defaults.

## Problem

When we first looked at the flaky Lambda landscape, every function had slightly different:

- Timeout values  
- Retry counts and behaviour  
- Dead-letter queue (DLQ) or failure destination  
- Backoff behaviours  

Small differences created big problems:

- Some functions failed quickly and noisily.  
- Others hung for minutes, holding concurrent capacity and causing throttling elsewhere.  
- Retries amplified downstream outages and created duplicate work.  

Without a **baseline**, reliability was left to whoever copied the last snippet of IaC.

## When to Use

Use this pattern when:

- You have **many Lambdas** touching the same domain (billing, notifications, ingestion, etc).
- You want **predictable behaviour** during downstream incidents.
- You’re standardising **IaC modules** for teams to consume.

Avoid rigid application of this pattern to:

- Extreme low-latency paths that need custom tuning.
- Long-running workflows where Step Functions are a better fit.

## Pattern

1. **Define tiers of timeouts**

   Instead of one-off numbers, define 2–3 tiers:

   - `fast-path` – e.g. 1–3 seconds  
   - `standard` – e.g. 10–20 seconds  
   - `slow-but-safe` – e.g. 45–60 seconds (with strong guardrails)

2. **Pair each tier with retry rules**

   For each tier, define:

   - Max retries
   - Backoff strategy
   - Failure destination (DLQ / SQS / EventBridge)

3. **Codify as reusable IaC**

   - Create shared CDK/Terraform modules that expose a simple enum:
     - `timeout_profile = "fast-path" | "standard" | "slow-but-safe"`
   - Modules translate the profile into the right combination of:
     - `timeout`
     - `maxRetryAttempts`
     - `deadLetterConfig`
     - alarms and metrics

4. **Document the profiles in human terms**

   E.g. *“Standard profile: suitable for most business logic Lambdas with external calls; safe during partial outages.”*

## Implementation Sketch

```hcl
# terraform snippet, simplified
module "order_handler" {
  source          = "../modules/lambda_with_profile"
  function_name   = "orders-handler"
  runtime         = "nodejs20.x"
  timeout_profile = "standard"
}
