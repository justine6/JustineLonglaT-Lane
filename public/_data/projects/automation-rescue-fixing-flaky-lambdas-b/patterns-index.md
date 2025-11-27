---
title: "Patterns Library Index — Reliable Lambda Patterns"
category: "Serverless Reliability Patterns"
tags: ["AWS Lambda", "Patterns", "Serverless", "IaC Modules"]
---

# Patterns Library Index

This index provides a quick overview of every pattern included in the Reliable Lambdas Library.  
Each pattern comes with code, IaC modules, observability hooks, and guardrails to make new Lambda functions production-ready from day one.

---

## 🔧 Core Reliability Patterns

### **1. Timeout Baseline Pattern**
Ensures predictable execution time with sensible defaults.

- Default timeout: 12 seconds  
- Memory baseline: 256 MB  
- Exponential backoff retries  
- Automatic alarm pack  
- Structured JSON logging  

---

### **2. Error Handler Wrapper**
Standardized error boundary ensures failures are always surfaced.

- Unified error response format  
- Trace ID propagation  
- Dead-letter queue forwarding  
- Redrive support  

---

### **3. Observability Block**
Preconfigured logging + metrics.

- JSON logs  
- Cold start detection  
- Performance metrics  
- Standard log fields  

---

### **4. EventBridge Envelope Pattern**
Ensures consistent event shape.

- `detail-type`, `source`, `version`, `traceId`  
- Validation schema  
- Replay-safe  

---

### **5. Deployment Guardrails Pattern**
Prevent unsafe releases.

- Canary deployments  
- Alarms for duration / errors / throttles  
- Auto-revert logic (optional)  

---

## 🚀 CI/CD Templates

### **6. Serverless Pipeline Template**
A prebuilt GitHub Actions CI/CD template:

- Build → test → deploy  
- Environment-specific variables  
- Drift detection  
- Slack/Teams deployment cards  

---

## 🧱 IaC Modules

### **7. IaC Baseline Stack**
Reusable infrastructure layer:

- API Gateway scaffolding  
- Lambda + DLQ block  
- Log group retention policy  
- IAM least privilege template  

---

# 🏁 Next Steps

More patterns coming soon:

- Reliability Filters  
- API Gateway hardening patterns  
- Multi-account propagation patterns  
