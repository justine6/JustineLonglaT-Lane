<#
Cut-Release.ps1 — with safe-release checks
- prepare: opens a changelog PR
- release: tags & publishes (blocks if not clean or not on main)
#>

[CmdletBinding()]
param(
  [Parameter(Mandatory=$true)]
  [ValidateSet('prepare','release')]
  [string]$Stage,

  [ValidateSet('auto','patch','minor','major')]
  [string]$Bump = 'auto',

  [string]$ChangeLogScript = '.\scripts\Generate-Changelog.ps1',
  [switch]$Yes
)

$ErrorActionPreference = "Stop"

function Write-Info($msg, $color="Cyan") { Write-Host "[$(Get-Date -Format 'HH:mm:ss')] $msg" -ForegroundColor $color }
function Get-LastSemverTag {
  $tags = git tag --list --sort=-creatordate
  foreach ($t in $tags) { if ($t -match '^(v)?\d+\.\d+\.\d+$') { return $t } }
  return $null
}
function Bump-Version($current, $level) {
  $ver = [version]($current -replace '^v','')
  switch ($level) {
    'major' { "v$($ver.Major+1).0.0" }
    'minor' { "v$($ver.Major).$($ver.Minor+1).0" }
    default { "v$($ver.Major).$($ver.Minor).$($ver.Build+1)" }
  }
}

Write-Host ""
Write-Host "╭───────────────────────────────╮" -ForegroundColor DarkGray
Write-Host "│         CUT RELEASE           │" -ForegroundColor Cyan
Write-Host "╰───────────────────────────────╯" -ForegroundColor DarkGray

$branch  = (git rev-parse --abbrev-ref HEAD).Trim()
$lastTag = if ($env:FORCE_LAST_SEMVER) { $env:FORCE_LAST_SEMVER } else { Get-LastSemverTag }
if (-not $lastTag) { $lastTag = 'v0.0.0' }
Write-Info "Last version: $lastTag"

# ---------- PREPARE ----------
if ($Stage -eq 'prepare') {
  Write-Info "Preparing changelog branch..."
  $timestamp  = Get-Date -Format 'yyyyMMdd-HHmm'
  $branchName = "chore/changelog-$timestamp"
  git checkout -b $branchName | Out-Null

  if (Test-Path $ChangeLogScript) {
    Write-Info "Running changelog generator..."
    pwsh -NoLogo -NoProfile -ExecutionPolicy Bypass -File $ChangeLogScript | Out-Null
  } else {
    Write-Host "⚠️  $ChangeLogScript not found. Continuing without it." -ForegroundColor Yellow
  }

  git add CHANGELOG.md 2>$null
  git commit -m "chore(changelog): update CHANGELOG.md" 2>$null
  git push -u origin HEAD

  Write-Info "Creating PR for changelog..."
  gh pr create --base main --head $branchName --title "Prepare Changelog PR" --body "Automated changelog update" --label chore,release 2>$null
  Write-Info "✅ Changelog PR opened from $branchName → main"
  exit 0
}

# ---------- RELEASE (with safety) ----------
if ($Stage -eq 'release') {
  Write-Info "Preparing release..."
  git checkout main
  git pull --ff-only origin main

  # 🔒 Safety 1: must be on main
  $cur = (git rev-parse --abbrev-ref HEAD).Trim()
  if ($cur -ne 'main') { throw "Refusing to release from '$cur'. Switch to 'main' and try again." }

  # 🔒 Safety 2: working tree must be clean
  $dirty = git status --porcelain
  if ($dirty) {
    Write-Host "❌ Working tree has uncommitted changes. Commit/stash before releasing:" -ForegroundColor Red
    Write-Host $dirty
    throw "Aborting release because the tree is not clean."
  }

  if (-not $Yes) {
    $ok = Read-Host "Proceed to tag new release from $lastTag? (y/N)"
    if ($ok -notmatch '^(y|yes)$') { Write-Host "Aborted."; exit 1 }
  }

  Write-Info "Bumping version..."
  $next = Bump-Version $lastTag $Bump
  Write-Info "Next version: $next"

  git tag -a $next -m "Release $next"
  git push origin $next

  # Compare link in notes
  $repoUrl    = (git config --get remote.origin.url).Replace(".git","")
  $compareUrl = "$repoUrl/compare/$lastTag...$next"
  $body       = "Automated release for **$next**.`n`n🔗 [View changes on GitHub]($compareUrl)"

  gh release create $next --generate-notes --title "Release $next" --notes $body
  Write-Info "✅ Release $next published."
  Write-Host "🔗 Compare link: $compareUrl" -ForegroundColor Green
  exit 0
}

Write-Host "❌ Unknown stage. Use -Stage prepare or -Stage release." -ForegroundColor Red
exit 1
