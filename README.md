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
