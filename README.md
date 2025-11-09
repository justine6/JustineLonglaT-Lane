
<!-- CI/CD & Site Badges -->
[![Build & Deploy — Jutellane Solutions](https://github.com/justine6/Jutellane-Solutions/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/justine6/Jutellane-Solutions/actions/workflows/deploy.yml)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fjutellane.com)](https://jutellane.com)
[![Last commit](https://img.shields.io/github/last-commit/justine6/Jutellane-Solutions/main)](https://github.com/justine6/Jutellane-Solutions/commits/main)
[![Docs](https://img.shields.io/badge/Docs-Jutellane%20Blogs-blue)](https://justine6.github.io/jutellane-blogs/)

**Live site:** https://jutellane.com
<!-- CI/CD Status -->
[![Preview (Vercel)](https://github.com/justine6/Jutellane-Solutions/actions/workflows/preview-pr.yml/badge.svg?branch=main)](https://github.com/justine6/Jutellane-Solutions/actions/workflows/preview-pr.yml)
[![Production (Vercel)](https://github.com/justine6/Jutellane-Solutions/actions/workflows/deploy-prod.yml/badge.svg?branch=main)](https://github.com/justine6/Jutellane-Solutions/actions/workflows/deploy-prod.yml)
[![Verify Production](https://github.com/justine6/Jutellane-Solutions/actions/workflows/verify-production.yml/badge.svg?branch=main)](https://github.com/justine6/Jutellane-Solutions/actions/workflows/verify-production.yml)
[![Docs (GitHub Pages)](https://github.com/justine6/Jutellane-Solutions/actions/workflows/docs-pages.yml/badge.svg?branch=main)](https://github.com/justine6/Jutellane-Solutions/actions/workflows/docs-pages.yml)

**Docs:** https://justine6.github.io/Jutellane-Solutions/

# 🧩 Jutellane Solutions CI/CD & Documentation Status

![Prepare Workflow](https://github.com/justine6/Jutellane-Solutions/actions/workflows/prepare.yml/badge.svg)
![Release Workflow](https://github.com/justine6/Jutellane-Solutions/actions/workflows/release.yml/badge.svg)
![Verify Production](https://github.com/justine6/Jutellane-Solutions/actions/workflows/verify-production.yml/badge.svg)
![Docs Build](https://github.com/justine6/Jutellane-Solutions/actions/workflows/docs.yml/badge.svg)

![Latest Version](https://img.shields.io/github/v/tag/justine6/Jutellane-Solutions?label=version&color=2ea44f)
[![Latest Release](https://img.shields.io/github/v/release/justine6/Jutellane-Solutions?include_prereleases&color=blue)](https://github.com/justine6/Jutellane-Solutions/releases/latest)

> **Automated pipelines for changelog preparation, version tagging, release publication, and production verification.**
>
> This repository follows a fully automated CI/CD process:
> - 🪄 **Prepare Workflow** – Generates and opens changelog PRs  
> - 🚀 **Release Workflow** – Cuts new versions, tags, and publishes releases  
> - 🔍 **Verify Production** – Validates deployments and production builds  
> - 📘 **Docs Workflow** – Builds and verifies documentation automatically on every push  
>
> Latest version and release badges are powered by [GitHub Releases](https://github.com/justine6/Jutellane-Solutions/releases).

---

## 🌐 Jutellane Solutions — Live Domains Overview

| Subdomain | Purpose | Hosting / Platform | Deployment Source | HTTPS Status |
|------------|----------|--------------------|-------------------|---------------|
| **[projects.jutellane.com](https://projects.jutellane.com)** | Main **Jutellane Solutions** website — business landing page, portfolio, and service overview. | **Vercel** | `main` branch (Next.js project) | ✅ Active |
| **[blogs.jutellane.com](https://blogs.jutellane.com)** | Technical & DevOps blog — powered by Markdown + GitHub Actions for automatic publishing. | **GitHub Pages** | `jutellane-blogs` repository | ✅ Active |
| **[generator.jutellane.com](https://generator.jutellane.com)** | Markdown-to-HTML static site generator — internal documentation & static content builder. | **GitHub Pages** | `md-to-html-static` repository | ✅ Active |

---

### 🧩 Tech Stack Summary
- **Static Hosting:** GitHub Pages / Vercel  
- **CI/CD:** GitHub Actions (`build`, `release`, `verify`, `docs`)  
- **Automation Tools:** PowerShell scripts (`Cut-Release.ps1`, `Generate-Changelog.ps1`)  
- **Frameworks:** Next.js, TailwindCSS, Markdown → HTML pipeline  
- **Domains Managed by:** [IONOS](https://ionos.com) with verified CNAME records  

**DNS Records:**  
```bash
blogs.jutellane.com      → CNAME e552adc0b9fd7ba3.vercel-dns-017.com
projects.jutellane.com   → CNAME e552adc0b9fd7ba3.vercel-dns-017.com
generator.jutellane.com  → CNAME justine6.github.io
```

---

### 🗺️ Architecture & Deployment Flow

```mermaid
flowchart LR
  classDef repo fill:#0ea5e9,stroke:#0369a1,color:#fff,stroke-width:1.2px;
  classDef actions fill:#10b981,stroke:#047857,color:#fff,stroke-width:1.2px;
  classDef host fill:#f59e0b,stroke:#b45309,color:#111,stroke-width:1.2px;
  classDef dns fill:#e5e7eb,stroke:#6b7280,color:#111,stroke-width:1.2px;

  A1["md→HTML (repo)"]:::repo -->|push| B1["Build+Deploy Pages"]:::actions --> C1["GitHub Pages"]:::host --> D1["generator.jutellane.com"]:::dns
  A2["jutellane-blogs (repo)"]:::repo -->|push| B2["Docs Build"]:::actions --> C2["GitHub Pages"]:::host --> D2["blogs.jutellane.com"]:::dns
  A3["Jutellane-Main (Next.js)"]:::repo -->|push| B3["Vercel Deploy"]:::actions --> C3["Vercel Edge/CDN"]:::host --> D3["projects.jutellane.com"]:::dns
```

### ✅ Uptime / Health Status

- generator: ![status](https://img.shields.io/website?url=https%3A%2F%2Fgenerator.jutellane.com)
- blogs: ![status](https://img.shields.io/website?url=https%3A%2F%2Fblogs.jutellane.com)
- projects: ![status](https://img.shields.io/website?url=https%3A%2F%2Fprojects.jutellane.com)

---

## 📘 Documentation Workflows

| Stage | Description | Trigger |
|--------|--------------|----------|
| **Prepare** | Creates changelog and pull request for review | Manual / Schedule |
| **Release** | Bumps version, tags, and publishes release | Merge to `main` |
| **Verify Production** | Runs post-deployment health checks | After release |
| **Docs** | Builds and verifies the documentation site | On every push |

📄 View documentation (once docs workflow is added):  
➡️ [https://justine6.github.io/Jutellane-Solutions](https://justine6.github.io/Jutellane-Solutions)

---

# 🚀 Jutellane Solutions – Automated Release Workflow

This repository contains the **Jutellane release automation system**, a PowerShell-driven workflow for preparing changelogs, generating GitHub releases, and maintaining semantic versioning consistency across projects.

---

## 🧩 Overview

The workflow provides a **two-stage automated release process**:
1. **Prepare Stage** – generates or updates the changelog, commits it, and opens a pull request.  
2. **Release Stage** – publishes a new version tag on GitHub, complete with notes and comparison links.

The automation is built on:
- PowerShell (`Cut-Release.ps1`)
- GitHub CLI (`gh`)
- Git (`git`)
- Semantic Versioning rules (`vX.Y.Z`)

---

## 📂 Key Files

| File | Purpose |
|------|----------|
| `Cut-Release.ps1` | Main orchestrator script for preparing and publishing releases |
| `scripts/Generate-Changelog.ps1` | Generates or updates the `CHANGELOG.md` file |
| `CHANGELOG.md` | Tracks historical changes between releases |
| `README.md` | Documentation for repository purpose and usage |
| `WORKFLOW.md` | Technical breakdown of the release process |

---

## 🧭 Usage

### 1️⃣ Prepare a Release

```powershell
pwsh -File .\Cut-Release.ps1 -Stage prepare -Bump auto -Yes
```

### 2️⃣ Publish a Release

```powershell
pwsh -File .\Cut-Release.ps1 -Stage release -Yes
```

This will:
- Tag a new version (`vX.Y.Z`)
- Publish the release on GitHub
- Trigger the **Verify Production** workflow

---

### 💡 Notes
- Ensure `gh auth status` is active before running scripts.
- The release script uses semantic versioning and supports `-Bump major|minor|patch`.
- All actions are logged to the console and tracked in GitHub Actions logs.

---
## 🚀 Recent Updates (v2.5.0)

**Release Title:** *Cal.com Integration & Responsive Layout Overhaul*

### ✅ Key Enhancements
- Embedded **Cal.com intro call scheduling** with fallback support
- Unified responsive layout across all sections (Navbar, Hero, Footer)
- Added finalized **“Schedule Your Intro Call”** CTA and résumé download link
- Enhanced **MDX pipeline** with `remark-gfm` for improved blog rendering
- Introduced **automated release script** (`Cut-Release.ps1`) for smooth tagging and version management
- Verified **Vitest coverage** and CI/CD integrity before tag push
- Synced developer documentation for build and deployment consistency

### 🧭 Branch and Tag
- Branch: `feat/hero-prod-match`
- Tag: `v2.5.0`

### 🧪 Tests
```bash
npm run test:coverage
vitest run --coverage
## 🔁 Restore Point

**Tag:** `restore/2025-11-09-brochure-fix`  
**What’s locked:** brochure PDF served inline from `/files/brochure.pdf`, headers-only `vercel.json`, middleware excludes static assets, CTAs use `LINKS.brochure`, tests green.

**Restore:**
```bash
git fetch --tags
git checkout restore/2025-11-09-brochure-fix
# (or) pwsh tools/restore.ps1


🛠 **Maintained by:** [Justine Longla Tekang](https://www.linkedin.com/in/longlatjustine)  
🌍 **Website:** [jutellane.com](https://jutellane.com)  
📧 **Email:** justinelongla@yahoo.com  



