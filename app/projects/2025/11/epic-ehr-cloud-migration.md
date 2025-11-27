---
title: "Epic EHR Cloud Migration: Turning a Critical Healthcare System into a Reliable Platform"
slug: "epic-ehr-cloud-migration"
date: "2025-11-25"
updated: "2025-11-25"
tags:
  - healthcare
  - epic
  - migration
  - azure
  - devsecops
  - observability
summary: "How I helped move a mission-critical Epic EHR workload to the cloud with IaC, observability, and strong guardrails around security and cost."
projectSlug: "epic-ehr-cloud-migration"
---

Migrating a **clinical system** is not the same as lifting and shifting a random web app.

When patient safety, clinician workflows, and regulatory compliance are on the line, *reliability is non-negotiable*. This is the mindset I carried into the **Epic EHR Cloud Migration** project.

In this post, I’ll walk through the core of the engagement: the constraints, the architecture, and how we used DevSecOps practices to keep the migration safe, observable, and cost-aware.

---

## Context and constraints

The organization was running Epic in a traditional data center environment.  
They wanted to move toward a more flexible, cloud-aligned model, but:

- **Downtime had real clinical impact** – the EHR could not be “experimented” on.
- **Compliance** (HIPAA, security controls, auditability) had to be preserved or improved.
- **Costs** needed to be predictable, not a surprise after migration.
- The environment had to integrate cleanly with **existing tools**: identity, monitoring, and deployment workflows.

We chose a **cloud migration to Azure**, focusing on:

- Infrastructure-as-Code for repeatability.
- Strong **network and identity boundaries**.
- Deep **observability** around performance and integration points.
- A migration plan that allowed for **parallel run and phased cutover**, not a big bang.

---

## High-level architecture

At a high level, the target state looked like this:

- **Azure landing zone** with well-defined subscriptions, resource groups, and policies.
- **Network segmentation** (spokes for Epic, integration, and shared services) linked to a secured hub.
- **VMs and PaaS components** for Epic workloads and supporting services.
- **Storage accounts** (with encryption and lifecycle rules) for logs, backups, and integration data.
- Integrated **identity** via Azure AD/Entra for admins and service principals.
- **Observability pipeline** for logs, metrics, and traces relevant to clinical performance.

### Infrastructure-as-Code

IaC was central to the migration:

- Azure resources were defined with **Bicep/Terraform-style patterns**.
- Environment differences (non-prod vs prod) were handled via parameterization and overlays.
- Changes were reviewed via Pull Requests and tested in **pre-prod environments** before touching anything near live patients.

This gave us:

- The ability to **rebuild environments** from scratch.
- A clear **audit trail** of who changed what, when, and why.
- Confidence that configuration drift could be detected and corrected.

---

## DevSecOps practices applied

### 1. CI/CD for infrastructure and application releases

We built pipelines that:

- Validated templates and security baselines on every PR.
- Ran smoke tests and basic health checks after deployments.
- Promoted artifacts through **dev → test → pre-prod → prod** with explicit approvals.

This meant each change to the Epic environment was **tested in a realistic replica** before touching production.

### 2. Security woven into the pipeline

Security controls were not an afterthought:

- Policies enforced that **storage accounts are encrypted**, logging is enabled, and public access is restricted.
- Images and dependencies were vetted via **scanning** before deployment.
- Access to the pipelines themselves was limited and monitored.

Instead of “running a scan at the end”, we treated every pipeline run as an opportunity to **prove the environment was still safe**.

### 3. Observability as a first-class requirement

To make the migration safe, we needed visibility into:

- **Throughput and latency** for Epic services.
- **Integration points** (interfaces to labs, imaging, billing, etc.).
- **System-level metrics**: CPU, memory, disk, and network patterns.

We wired telemetry from Azure into centralized dashboards so that:

- Clinicians and IT operations could see the same truth.
- We could rehearse migration steps in non-prod and compare metrics.
- We had objective data for go/no-go decisions during cutover.

---

## Migration strategy

Rather than a risky all-at-once move, we followed a **phased migration**:

1. **Discover & baseline**
   - Map Epic components, integrations, and constraints.
   - Capture current performance characteristics and SLAs.

2. **Design & build landing zone**
   - Implement Azure foundation, network topology, and policies.
   - Stand up non-prod environments via IaC.

3. **Parallel non-prod migration**
   - Rebuild Epic non-prod environments in the cloud.
   - Verify functionality and performance vs. on-prem.

4. **Dress rehearsals**
   - Run full migration simulations with realistic data and workloads.
   - Tune performance, logging, and cost controls.

5. **Production cutover**
   - Follow a well-rehearsed runbook with clear checkpoints.
   - Keep roll-back and contingency plans ready.

6. **Post-cutover hardening**
   - Fine-tune autoscaling, backups, and retention policies.
   - Optimize cost based on real usage patterns.

---

## Outcomes

By the end of the engagement, the organization had:

- A **cloud-based Epic environment** that was **reproducible**, observable, and governed.
- Clear **runbooks and pipelines** for future changes, not just a one-time migration.
- Better **visibility into performance**, helping them identify and fix bottlenecks.
- A foundation to integrate **modern tooling** (APIs, analytics, interoperability services) on top of the EHR in a safer way.

---

## Lessons learned

A few themes stand out from this project:

- **Safety and speed are not opposites.** Done right, DevSecOps can make regulated migrations *safer* by making them more repeatable.
- **IaC is your single source of truth.** If it’s not in code, it’s “tribal knowledge” – and that’s dangerous in healthcare.
- **Observability is part of patient safety.** You can’t protect what you can’t see.

---

## Related project

This post is tied to the project:

> **Project:** Epic EHR Cloud Migration  
> **URL:** `/projects/epic-ehr-cloud-migration`

From the project card, readers can see the high-level summary and stack.  
From the blog, they get the deeper story of how the migration was designed and executed.
