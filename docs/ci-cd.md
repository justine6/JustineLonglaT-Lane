# CI/CD Documentation Standard

> Keep **exact same structure** in both repos. Only project-specific names differ.

## Pipeline Overview
- **Branches**: `main` (production), `dev` (integration), feature branches (`feature/*`).
- **Checks**: Lint/Typecheck, Unit tests, Build, Preview Deploy (on PR), Release (on tag `v*`).
- **Versioning**: Semantic version tags `vMAJOR.MINOR.PATCH` created by `Cut-Release.ps1`.

## Trigger Matrix
| Trigger | Action |
|---|---|
| PR → `main` | Run CI checks + preview deployment comment |
| Push → `main` | Run full CI + production deploy |
| Tag `v*` | Build release artifact / publish site / generate GitHub Release notes |

## Required GitHub Actions (names suggestive)
- `.github/workflows/ci.yml`
- `.github/workflows/preview.yml`
- `.github/workflows/release.yml`

## Secrets & Env
- `VERCEL_TOKEN` (if deploying to Vercel)
- `ORG/REPO` permissions for GitHub Pages or Releases

## Status Badges (README)
```md
![CI](https://github.com/<org>/<repo>/actions/workflows/ci.yml/badge.svg?branch=main)
![Release](https://github.com/<org>/<repo>/actions/workflows/release.yml/badge.svg)
```
