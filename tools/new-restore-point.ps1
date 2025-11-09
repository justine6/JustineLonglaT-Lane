param(
  [Parameter(Mandatory=$true)][string]$Name,            # e.g. "brochure-fix" or "pre-release"
  [string]$Notes = "",
  [switch]$CreateRelease,                               # requires GitHub CLI `gh`
  [switch]$SkipTests                                    # skip checks before tagging
)

$ErrorActionPreference = 'Stop'
function Say($m){ Write-Host "› $m" -ForegroundColor Cyan }
function Good($m){ Write-Host "✓ $m" -ForegroundColor Green }
function Bad($m){ Write-Host "✗ $m" -ForegroundColor Red }

# 0) Sanity: clean tree
if (git status --porcelain) { Bad "Working tree not clean. Commit or stash first."; exit 1 }

# 1) Optional checks
if (-not $SkipTests) {
  if (Test-Path package.json) {
    Say "Running quick check (you can add more here)…"
    npm run -s check-all 2>$null; if ($LASTEXITCODE -ne 0) { Bad "Checks failed."; exit 1 }
  }
}

# 2) Compute tag
$today = (Get-Date).ToString('yyyy-MM-dd')
$tag = "restore/$today-$Name"

# 3) Compose default notes
if (-not $Notes) {
  $Notes = @"
## What’s locked
- PDFs served inline from \`/files/brochure.pdf\` (200 + 206)
- \`vercel.json\` headers-only + light security headers
- Middleware excludes static assets
- CTAs use \`LINKS.brochure\`
- Tests green

## Vercel
- Alias: https://jutellane-main.vercel.app
"@
}

# 4) Tag + push
Say "Creating annotated tag: $tag"
git tag -a $tag -m "Restore point: $Name`n`n$Notes"
git push origin $tag
Good "Tag pushed: $tag"

# 5) Write release notes file
$relFile = ".\RELEASE-NOTES-$($tag.Replace('/','-')).md"
$Notes | Set-Content -Encoding UTF8 $relFile
Good "Release notes: $relFile"

# 6) Optional GitHub Release
if ($CreateRelease) {
  if (Get-Command gh -ErrorAction SilentlyContinue) {
    Say "Creating GitHub Release for $tag…"
    gh release create $tag -F $relFile -t "Restore: $Name"
    Good "GitHub Release created."
  } else {
    Bad "GitHub CLI 'gh' not found; skipping GitHub release."
  }
}
