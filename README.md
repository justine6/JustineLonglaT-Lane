# JustineLonglaTe-Lane – Full Enhanced README
![Docs Deployment](https://github.com/justine6/JustineLonglaT-Lane/actions/workflows/docs-pages.yml/badge.svg)

[![CI](https://github.com/justine6/Justine Longla T.-Solutions/actions/workflows/ci.yml/badge.svg)](https://github.com/justine6/Justine Longla T.-Solutions/actions/workflows/ci.yml) 
[![codecov](https://codecov.io/gh/justine6/Justine Longla T.-Solutions/branch/main/graph/badge.svg)](https://codecov.io/gh/justine6/Justine Longla T.-Solutions)

<!-- CI/CD & Site Badges -->
[![Build & Deploy — Justine Longla T.](https://github.com/justine6/Justine Longla T.-Solutions/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/justine6/Justine Longla T.-Solutions/actions/workflows/deploy.yml)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fjutellane.com)](https://justinelonglat-lane.com)
[![Last commit](https://img.shields.io/github/last-commit/justine6/Justine Longla T.-Solutions/main)](https://github.com/justine6/Justine Longla T.-Solutions/commits/main)
[![Docs](https://img.shields.io/badge/Docs-Justine Longla T.%20Blogs-blue)](https://justine6.github.io/jutellane-blogs/)

**Live site:** https://justinelonglat-lane.com

[![Preview (Vercel)](https://github.com/justine6/Justine Longla T.-Solutions/actions/workflows/preview-pr.yml/badge.svg?branch=main)](https://github.com/justine6/Justine Longla T.-Solutions/actions/workflows/preview-pr.yml)
[![Production (Vercel)](https://github.com/justine6/Justine Longla T.-Solutions/actions/workflows/deploy-prod.yml/badge.svg?branch=main)](https://github.com/justine6/Justine Longla T.-Solutions/actions/workflows/deploy-prod.yml)
[![Verify Production](https://github.com/justine6/Justine Longla T.-Solutions/actions/workflows/verify-production.yml/badge.svg?branch=main)](https://github.com/justine6/Justine Longla T.-Solutions/actions/workflows/verify-production.yml)
[![Docs (GitHub Pages)](https://github.com/justine6/Justine Longla T.-Solutions/actions/workflows/docs-pages.yml/badge.svg?branch=main)](https://github.com/justine6/Justine Longla T.-Solutions/actions/workflows/docs-pages.yml)

---

# 🧩 CI/CD & Documentation Status

![Prepare Workflow](https://github.com/justine6/Justine Longla T.-Solutions/actions/workflows/prepare.yml/badge.svg)
![Release Workflow](https://github.com/justine6/Justine Longla T.-Solutions/actions/workflows/release.yml/badge.svg)
![Verify Production](https://github.com/justine6/Justine Longla T.-Solutions/actions/workflows/verify-production.yml/badge.svg)
![Docs Build](https://github.com/justine6/Justine Longla T.-Solutions/actions/workflows/docs.yml/badge.svg)

![Latest Version](https://img.shields.io/github/v/tag/justine6/Justine Longla T.-Solutions?label=version&color=2ea44f)
[![Latest Release](https://img.shields.io/github/v/release/justine6/Justine Longla T.-Solutions?include_prereleases&color=blue)](https://github.com/justine6/Justine Longla T.-Solutions/releases/latest)

> **Automated pipelines for changelog preparation, version tagging, release publication, and production verification.**

---

# 🌐 Live Platform Domains

The JustineLonglaTe-Lane ecosystem is composed of multiple specialized platforms, each deployed independently but operating as a unified engineering system.

| Subdomain | Role | Hosting |
|-----------|------|---------|
| **consulting.justinelonglat-lane.com** | Consulting platform | Vercel |
| **blogs.justinelonglat-lane.com** | Engineering blog | Vercel |
| **docs.justinelonglat-lane.com** | Engineering documentation | Vercel |
| **generator.jutellane.com** | Static site generator | GitHub Pages |

---

## 🧩 Platform Responsibilities

### 💼 Consulting Platform  
Business site, services, case studies, and booking.

### 📝 Engineering Blog  
DevOps, platform engineering, and cloud deep dives.

### 📘 Engineering Docs  
Architecture decisions, CI/CD systems, automation toolkit, platform design patterns.

### ⚙️ Static Site Generator  
Markdown → HTML publishing system for controlled static deployments.

---

## 🔁 Unified But Decoupled

Each site deploys independently while sharing:

- Versioned CI/CD workflows  
- Automated release verification  
- Consistent branding  
- Cross-linked navigation  

---

# 🔒 Stable Baseline (v1.3.0)

Version **v1.3.0** establishes a verified production checkpoint.

### Platform Guarantees

- Engineering Mesh architecture finalized  
- Markdown-driven project system operational  
- Cal.com integration secured  
- Middleware CSP scoped to booking routes  
- Navigation and CTAs validated  

---

# 🧩 Tech Stack Summary

| Layer | Technology |
|------|------------|
| Hosting | Vercel + GitHub Pages |
| CI/CD | GitHub Actions |
| Frontend | Next.js + TailwindCSS |
| Automation | PowerShell release scripts |
| Docs | MDX + static generators |
| DNS | IONOS |

---

# 🗺️ Architecture & Deployment Flow

```mermaid
flowchart LR
  A1["md→HTML Repo"] --> B1["Pages Deploy"] --> C1["GitHub Pages"] --> D1["generator.jutellane.com"]
  A2["jutellane-blogs"] --> B2["Docs Build"] --> C2["GitHub Pages"] --> D2["blogs.justinelonglat-lane.com"]
  A3["Main Next.js Platform"] --> B3["Vercel Deploy"] --> C3["Vercel CDN"] --> D3["consulting.justinelonglat-lane.com"]
