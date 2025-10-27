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

Below are the active subdomains currently maintained under **jutellane.com**, each hosted and deployed through independent pipelines and platforms.

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
- **DNS Records:**  
  ```bash
  blogs.jutellane.com      → CNAME e552adc0b9fd7ba3.vercel-dns-017.com
  projects.jutellane.com   → CNAME e552adc0b9fd7ba3.vercel-dns-017.com
  generator.jutellane.com  → CNAME justine6.github.io
