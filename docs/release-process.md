# Release Process (v1.2.14)

## Goal
Publish **v1.2.14** for both repos with a single, predictable workflow.

## Preconditions
- `main` is green and ahead of `dev`.
- `CHANGELOG.md` updated (see Changelog section).
- Version bump applied (app/package and/or docs) where applicable.

## Steps (Using `Cut-Release.ps1`)
```powershell
# From repo root
# 0) Ensure clean state
git fetch --all
git checkout main
git pull --rebase

# 1) Optional: bump app/package.json version if applicable
#   (Your script may handle this automatically.)

# 2) Dry-run the release
./scripts/Cut-Release.ps1 -Version 1.2.14 -DryRun -Verbose

# 3) Execute
./scripts/Cut-Release.ps1 -Version 1.2.14 -Verbose

# Expected: creates annotated tag v1.2.14 and pushes it
```

## Fallback (Manual Tagging)
```powershell
git tag -a v1.2.14 -m "release: v1.2.14"
git push origin v1.2.14
```

## Verify
- GitHub Actions → **release** workflow runs on tag `v1.2.14`.
- GitHub Releases page shows notes (auto-generated or from `CHANGELOG.md`).
- Vercel/Pages deploy reflects new version in footer or meta.
