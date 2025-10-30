# PR: Docs & Release Prep (v2.5.0)

## What
- Add new `v2.5.0` release entry to `docs/ReleaseNotes.md`.
- Update `PR_TEXT.md` with ready-to-use summary for next PRs.
- Ensure documentation consistency across `developer-utilities.md`, `ci-cd.md`, and `release-process.md`.

## Why
- Maintain parity between **Jutellane Main** and **Jutellane Blogs** projects.
- Align Cal.com integration and responsive layout changes with documentation.
- Prepare repository for next automated tag via `Cut-Release.ps1`.

## Test
- Render Markdown locally and confirm anchors and internal links.
- Run dry-run validation to confirm consistency:
  ```bash
  ./scripts/Cut-Release.ps1 -Version 2.5.0 -DryRun -Verbose
