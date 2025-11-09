param(
  [string]$Tag = "restore/2025-11-09-brochure-fix"
)

$ErrorActionPreference = 'Stop'

Write-Host "› Restoring repo to tag: $Tag" -ForegroundColor Cyan
# sanity
$dirty = (git status --porcelain)
if ($dirty) {
  Write-Host "✗ Working tree not clean. Commit/stash first." -ForegroundColor Red
  exit 1
}

git fetch --tags
git checkout $Tag

Write-Host "`n✓ Repo is now at $Tag" -ForegroundColor Green
Write-Host "Alias in prod: https://jutellane-main.vercel.app`n"
Write-Host "To return to main:"
Write-Host "  git checkout main"
Write-Host "  git pull"
