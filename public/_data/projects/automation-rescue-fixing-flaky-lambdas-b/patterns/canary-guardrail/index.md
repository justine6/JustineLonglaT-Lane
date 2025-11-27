# canary-guardrail

<!-- TODO: fill pattern content -->

---

## 5️⃣ `patterns/canary-guardrail/index.md`

```md
# Canary Guardrail

> A safety pattern that lets new Lambda changes roll out gradually with clear stop signals.

## Problem

When Lambdas were flaky, deployments were all-or-nothing:

- A bad change went to 100% traffic instantly.  
- On-call only realised when dashboards or customers started screaming.  
- Rollback was manual and stressful.

We needed a way to **try changes carefully**, with automatic brakes.

## When to Use

Use this pattern when:

- A Lambda handles **critical traffic** (checkout, payments, identity, etc).  
- Changes are risky (new dependency, major refactor, new feature flag).  
- You want **confidence** that errors will be caught early.

It’s less important for infrequent batch jobs where you can simply re-run.

## Pattern

1. **Define two Lambda aliases**

   - `prod` – current stable version  
   - `canary` – next version to test

2. **Use a routing mechanism**

   - Lambda alias routing weights, or  
   - An API Gateway / ALB rule, or  
   - Feature flags in the calling service.

3. **Attach focused alarms**

   During canary phase, monitor:

   - Error rate / fault count  
   - Latency p95 / p99  
   - DLQ volume  
   - Any custom business metrics (e.g. failed checkouts)

4. **Rollout steps**

   - Start at e.g. **5% traffic** to `canary`.  
   - If healthy for a defined window, move to 25%, 50%, 100%.  
   - If alarms fire, route back to `prod` and investigate.

## Implementation Sketch

```ts
// terraform pseudo-code for alias routing
resource "aws_lambda_alias" "prod" {
  name             = "prod"
  function_name    = aws_lambda_function.my_handler.arn
  function_version = aws_lambda_function.my_handler.version
  routing_config {
    additional_version_weights = {
      aws_lambda_function.my_handler_canary.version = 0.05 # 5% canary
    }
  }
}
