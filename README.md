<<<<<<< Updated upstream
# 🧩 Jutellane Solutions CI/CD & Documentation Status

![Prepare Workflow](https://github.com/justine6/Jutellane-Solutions/actions/workflows/prepare.yml/badge.svg)
![Release Workflow](https://github.com/justine6/Jutellane-Solutions/actions/workflows/release.yml/badge.svg)
![Verify Production](https://github.com/justine6/Jutellane-Solutions/actions/workflows/verify-production.yml/badge.svg)

![Latest Version](https://img.shields.io/github/v/tag/justine6/Jutellane-Solutions?label=version&color=2ea44f)
[![Latest Release](https://img.shields.io/github/v/release/justine6/Jutellane-Solutions?include_prereleases&color=blue)](https://github.com/justine6/Jutellane-Solutions/releases/latest)
![Docs Build](https://github.com/justine6/Jutellane-Solutions/actions/workflows/docs.yml/badge.svg)

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

## 📘 Documentation

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

Use this when you’ve merged new changes into `main` and want to generate a changelog PR.

```powershell
pwsh -File .\Cut-Release.ps1 -Stage prepare -Bump auto -Yes
=======
## 🚀 Release Workflow

This repo uses **Conventional Commits** + an automated **Cut-Release** script.

### Quick Start
1. Ensure you’re authenticated with GitHub CLI (`gh auth status`).
2. Generate/update the changelog and open a PR:
   ```powershell
   .\Cut-Release.ps1 -Stage prepare   # auto-creates chore/changelog-YYYYMMDD-HHmm + PR
>>>>>>> Stashed changes
