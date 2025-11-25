# Developer Utilities Overview

Quick reference for all PowerShell helper scripts used across the Jutellane projects.

## Script Catalog
| Script | Location | Purpose | Core Usage |
|---|---|---|---|
| `Safe-Rebase.ps1` | `scripts/` | Rebases feature branch on top of `main` with safety checks and automatic stash/restore. | `./scripts/Safe-Rebase.ps1 -Base main -Branch feature/my-change` |
| `Add-Post.ps1` | `scripts/` | Scaffolds a new blog post folder structure with date/slug metadata and starter MDX/JSON. | `./scripts/Add-Post.ps1 -Title "My Post" -Date 2025-10-27 -Tags devops,ci` |
| `Generate-Metadata.ps1` | `scripts/` | Generates/updates `meta.json` (or frontmatter) for posts from folder names and content headers. | `./scripts/Generate-Metadata.ps1 -Path ./content/posts` |
| `Build-Serve.ps1` | `scripts/` | Clean build and local serve (production-like preview). | `./scripts/Build-Serve.ps1 -Clean` |
| `Cut-Release.ps1` | `scripts/` | Bumps versions, creates annotated tag, and pushes tag to trigger CI release. | `./scripts/Cut-Release.ps1 -Version 1.2.14` |
| `New-Post.ps1` | `scripts/` | (alias to `Add-Post.ps1`) Convenience wrapper for quick post creation. | `./scripts/New-Post.ps1 "Title here"` |
| `Check-Translations.ps1` | `scripts/` | Validates i18n dictionaries are in sync across locales. | `./scripts/Check-Translations.ps1 -FixMissing` |

> Tip: All scripts support `-WhatIf` / `-Verbose` where noted. Run with `-Help` to see parameters.

## Common Patterns
- **Slugs**: `YYYY/MM/<kebab-title>` → used by `Generate-Metadata.ps1`.
- **Dry Runs**: Prefer `-WhatIf` or `-DryRun` before any destructive change.
- **Node/PNPM/NPM**: Scripts assume `node >= 18` and your chosen package manager available in PATH.

## Examples
```powershell
# 1) Safely update your branch
./scripts/Safe-Rebase.ps1 -Base main -Branch feature/hero-logo

# 2) Add a new post (blogs repo)
./scripts/Add-Post.ps1 -Title "Self-healing pipelines" -Tags cicd,observability -Date (Get-Date)

# 3) (main repo) Generate metadata for project posts
./scripts/Generate-Metadata.ps1 -Path ./content/projects

# 4) Prod-like preview
./scripts/Build-Serve.ps1 -Clean
```
