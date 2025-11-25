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

# 🧩 JustineLonglaTe-Lane  CI/CD & Documentation Status

![Prepare Workflow](https://github.com/justine6/Justine Longla T.-Solutions/actions/workflows/prepare.yml/badge.svg)
![Release Workflow](https://github.com/justine6/Justine Longla T.-Solutions/actions/workflows/release.yml/badge.svg)
![Verify Production](https://github.com/justine6/Justine Longla T.-Solutions/actions/workflows/verify-production.yml/badge.svg)
![Docs Build](https://github.com/justine6/Justine Longla T.-Solutions/actions/workflows/docs.yml/badge.svg)

![Latest Version](https://img.shields.io/github/v/tag/justine6/Justine Longla T.-Solutions?label=version&color=2ea44f)
[![Latest Release](https://img.shields.io/github/v/release/justine6/Justine Longla T.-Solutions?include_prereleases&color=blue)](https://github.com/justine6/Justine Longla T.-Solutions/releases/latest)

---

> **Automated pipelines for changelog preparation, version tagging, release publication, and production verification.**
>
> This repository follows a fully automated CI/CD process:
> - 🪄 **Prepare Workflow** – Generates and opens changelog PRs  
> - 🚀 **Release Workflow** – Cuts new versions, tags, and publishes releases  
> - 🔍 **Verify Production** – Validates deployments and production builds  
> - 📘 **Docs Workflow** – Builds and verifies documentation automatically on every push  

---

## 🌐 JustineLonglaTe-Lane  — Live Domains Overview

| Subdomain | Purpose | Hosting | Deployment | HTTPS |
|----------|----------|---------|------------|--------|
| **consulting.justinelonglat-lane.com** | Business site + services | Vercel | Main branch | ✅ |
| **blogs.justinelonglat-lane.com** | DevOps & Engineering Blog | GitHub Pages | jutellane-blogs repo | ✅ |
| **generator.jutellane.com** | Markdown → HTML static generator | GitHub Pages | md-to-html-static repo | ✅ |

---

## 🧩 Tech Stack Summary

- **Hosting:** Vercel + GitHub Pages  
- **CI/CD:** GitHub Actions (build, preview, deploy, verify, docs)  
- **Automation:** PowerShell (`Cut-Release.ps1`, `Generate-Changelog.ps1`)  
- **Frontend:** Next.js, TailwindCSS  
- **Docs:** MDX, custom static generators  
- **DNS:** Managed via IONOS  

---

## 🗺️ Architecture & Deployment Flow

```mermaid
flowchart LR
  classDef repo fill:#0ea5e9,stroke:#0369a1,color:#fff;
  classDef actions fill:#10b981,stroke:#047857,color:#fff;
  classDef host fill:#fbbf24,stroke:#b45309,color:#000;
  classDef dns fill:#e5e7eb,stroke:#6b7280,color:#000;

  A1["md→HTML Repo"]:::repo --> B1["Pages Deploy"]:::actions --> C1["GitHub Pages"]:::host --> D1["generator.jutellane.com"]:::dns
  A2["jutellane-blogs"]:::repo --> B2["Docs Build"]:::actions --> C2["GitHub Pages"]:::host --> D2["blogs.justinelonglat-lane.com"]:::dns
  A3["Justine Longla T. Main (Next.js)"]:::repo --> B3["Vercel Deploy"]:::actions --> C3["Vercel CDN"]:::host --> D3["consulting.justinelonglat-lane.com"]:::dns
```

---

## ✅ Uptime / Health Status

- Generator: ![status](https://img.shields.io/website?url=https%3A%2F%2Fgenerator.jutellane.com)
- Blogs: ![status](https://img.shields.io/website?url=https%3A%2F%2Fblogs.justinelonglat-lane.com)
- Projects: ![status](https://img.shields.io/website?url=https%3A%2F%2Fconsulting.justinelonglat-lane.com)

---

# 🚀 JustineLonglaTe-Lane  – Automated Release Workflow

This system manages automated changelog creation, semantic versioning, release publication, and verification.

---

## 🧩 Overview

### Stages:
1. **Prepare Stage**
2. **Release Stage**

### Tools:
- PowerShell
- GitHub CLI
- Git
- Semantic Versioning

---

## 📂 Key Files

| File | Description |
|------|-------------|
| `Cut-Release.ps1` | Orchestrates prepare + release stages |
| `scripts/Generate-Changelog.ps1` | Builds changelog |
| `CHANGELOG.md` | Version history |
| `WORKFLOW.md` | CI/CD documentation |

---

## 🧭 Usage

### Prepare:
```pwsh
pwsh -File .\Cut-Release.ps1 -Stage prepare -Bump auto -Yes
```

### Release:
```pwsh
pwsh -File .\Cut-Release.ps1 -Stage release -Yes
```

---

# ✅ Recent Updates (v2.5.0)

### Enhancements:
- ✅ Cal.com integration with fallback  
- ✅ Responsive layout polished  
- ✅ Auto-release + version tagging  
- ✅ MDX pipeline enhanced  
- ✅ Intro Call CTA finalized  

---

# 🔁 Restore Point

Tag: `restore/2025-11-09-brochure-fix`

Restore:
```bash
git fetch --tags
git checkout restore/2025-11-09-brochure-fix
```

---

# 🛠 Maintained By

**Longla Justine Tekang**  
🌍 https://justinelonglat-lane.com  
📧 justinelongla@yahoo.com  
## Reference States

- **ref/2025-11-15-branding**  
  Baseline branding for JustineLonglaT:
  - Hero uses profile photo in “Why Work With Me”
  - Latest Publications cards use `/brand/justine-logo.png`
  - Hire Me + Intro Call routing fixed
  - Brochure + Résumé PDFs working from footer
  _Deployment sanity check – Justine, 11/19/2025._
  <!-- sanity auto-deploy test - Justine, 11/19 -->
  <!-- auto deploy test -->
  
