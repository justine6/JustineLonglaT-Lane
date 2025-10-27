# README Consistency Checklist

Use this to sanity-check each repo’s README after changes.

- [ ] **Project blurb**: one-liner + value prop.
- [ ] **Status badges**: CI + Release (and Codecov if applicable).
- [ ] **Quickstart**: prerequisites (Node, PNPM/NPM), install, dev server, build, serve.
- [ ] **Scripts table**: show PowerShell helpers with one-line examples.
- [ ] **CI/CD summary**: link to `docs/ci-cd.md`.
- [ ] **Release process**: link to `docs/release-process.md`.
- [ ] **Contributing**: branch model (`main`, `dev`, `feature/*`), PR rules.
- [ ] **License/Contact**: clear footer section.

## Example Scripts Table (drop into README)

```md
| Script | Purpose | Example |
|---|---|---|
| Safe-Rebase.ps1 | Safe rebase of feature branch | `./scripts/Safe-Rebase.ps1 -Base main -Branch feature/xyz` |
| Add-Post.ps1 | Scaffold a new blog post | `./scripts/Add-Post.ps1 -Title "Hello"` |
| Generate-Metadata.ps1 | Build/refresh metadata | `./scripts/Generate-Metadata.ps1 -Path ./content/posts` |
| Cut-Release.ps1 | Tag & publish release | `./scripts/Cut-Release.ps1 -Version 1.2.14` |
```
