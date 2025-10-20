<#
Cut-Release.ps1 — safe & quiet release helper
- prepare: generate CHANGELOG + open PR (no CI noise)
- release: bump, tag, push, GitHub Release (only from clean, up-to-date main)
#>

[CmdletBinding()]
param(
  [Parameter(Mandatory = $true)]
  [ValidateSet('prepare', 'release')]
  [string]$Stage,

  [ValidateSet('auto', 'patch', 'minor', 'major')]
  [string]$Bump = 'auto',

  [string]$ChangeLogScript = '.\scripts\Generate-Changelog.ps1',
  [switch]$Yes
)

$ErrorActionPreference = 'Stop'

function Require-Tool($name) {
  if (-not (Get-Command $name -ErrorAction SilentlyContinue)) {
    throw "Required tool '$name' not found in PATH."
  }
}
Require-Tool git
Require-Tool gh

function Write-Info($msg, $color = 'Cyan') {
  Write-Host "[$(Get-Date -Format 'HH:mm:ss')] $msg" -ForegroundColor $color
}

# Ensure we have full history + tags (handles shallow checkouts)
git fetch --tags --force --prune | Out-Null
git fetch origin --prune | Out-Null
try { git rev-parse --is-shallow-repository | Out-Null } catch {}
if ((git rev-parse --is-shallow-repository) -eq 'true') {
  git fetch --unshallow | Out-Null
}

function Get-LastSemverTag {
  $tag = (git tag --list --sort=-creatordate | Where-Object { $_ -match '^(v)?\d+\.\d+\.\d+$' } | Select-Object -First 1)
  if (-not $tag) { 'v0.0.0' } else { $tag }
}

function Decide-AutoBump($sinceTag) {
  # Conventional-commits heuristic
  $log = git log "$sinceTag..HEAD" --pretty=format:"%s%n%b"
  if ($log -match 'BREAKING CHANGE' -or $log -match 'feat!') { return 'major' }
  elseif ($log -match '^\s*feat(\(|:)' ) { return 'minor' }
  elseif ($log -match '^\s*fix(\(|:)' )  { return 'patch' }
  else { return 'patch' }
}

function Bump-Version($current, $level) {
  $ver = [version]($current -replace '^v','')
  switch ($level) {
    'major' { "v$($ver.Major + 1).0.0" }
    'minor' { "v$($ver.Major).$($ver.Minor + 1).0" }
    default { "v$($ver.Major).$($ver.Minor).$($ver.Build + 1)" }
  }
}

Write-Host ''
Write-Host '╭───────────────────────────────╮' -ForegroundColor DarkGray
Write-Host '│           CUT RELEASE         │' -ForegroundColor Cyan
Write-Host '╰───────────────────────────────╯' -ForegroundColor DarkGray

$branch  = (git rev-parse --abbrev-ref HEAD).Trim()
$lastTag = if ($env:FORCE_LAST_SEMVER) { $env:FORCE_LAST_SEMVER } else { Get-LastSemverTag }
Write-Info "Current branch .......: $branch"
Write-Info "Last version tag .....: $lastTag"

# ───────────────────────── PREPARE ─────────────────────────
if ($Stage -eq 'prepare') {
  $timestamp  = Get-Date -Format 'yyyyMMdd-HHmm'
  $branchName = "chore/changelog-$timestamp"

  Write-Info "Creating branch ......: $branchName"
  git checkout -b $branchName | Out-Null

  $changed = $false
  if (Test-Path $ChangeLogScript) {
    Write-Info "Generating changelog .."
    pwsh -NoLogo -NoProfile -ExecutionPolicy Bypass -File $ChangeLogScript | Out-Null
    if (Test-Path 'CHANGELOG.md') {
      if ((git status --porcelain) -match 'CHANGELOG\.md') { $changed = $true }
    }
  } else {
    Write-Host "⚠  $ChangeLogScript not found, skipping generator." -ForegroundColor Yellow
  }

  if ($changed) {
    git add CHANGELOG.md
    # ↓ prevents other workflows/Vercel from running on this chore branch
    git commit -m "chore(changelog): update CHANGELOG.md [skip ci]"
    git push -u origin HEAD
    Write-Info "Opening PR -> main ...."
    gh pr create `
      --base main `
      --head $branchName `
      --title "Prepare Changelog PR" `
      --body "Automated changelog update" `
      --label chore,release 2>$null
    Write-Info "✅ Changelog PR opened."
  } else {
    Write-Info "No changes in CHANGELOG.md; not opening a PR." 'Yellow'
  }
  exit 0
}

# ───────────────────────── RELEASE ─────────────────────────
if ($Stage -eq 'release') {
  Write-Info "Switching to main and syncing ..."
  git checkout main | Out-Null
  git fetch origin --prune | Out-Null
  # Fast-forward check (no local-only commits)
  $ahead = (git rev-list --left-only --count main...origin/main)
  if ($ahead -ne 0) {
    Write-Host "❌ Local main is behind origin/main. Pull first (fast-forward only)." -ForegroundColor Red
    throw "Aborting release."
  }
  git pull --ff-only origin main | Out-Null

  $cur = (git rev-parse --abbrev-ref HEAD).Trim()
  if ($cur -ne 'main') { throw "Refusing to release from '$cur'. Switch to 'main'." }

  $dirty = git status --porcelain
  if ($dirty) {
    Write-Host "❌ Working tree has uncommitted changes:" -ForegroundColor Red
    Write-Host $dirty
    throw "Aborting release because the tree is not clean."
  }

  if ($Bump -eq 'auto') {
    $Bump = Decide-AutoBump $lastTag
    Write-Info "Auto bump decided ....: $Bump"
  }

  $next = Bump-Version $lastTag $Bump
  Write-Info "Next version .........: $next"

  # Don’t re-tag
  if (git tag --list $next) { throw "Tag $next already exists locally." }
  if (git ls-remote --tags origin "refs/tags/$next") { throw "Tag $next already exists on remote." }

  if (-not $Yes) {
    $ok = Read-Host "Proceed to release $next from main? (y/N)"
    if ($ok -notmatch '^(y|yes)$') { Write-Host 'Aborted.'; exit 1 }
  }

  git tag -a $next -m "Release $next"
  git push origin $next

  # Normalize repo URL (ssh or https)
  $repo = (git config --get remote.origin.url).Replace('.git','')
  if ($repo -match '^git@github\.com:(.+)$') { $repo = "https://github.com/$($Matches[1])" }

  $compareUrl = "$repo/compare/$lastTag...$next"
  $notes      = "Automated release for **$next**.`n`n🔗 [View changes on GitHub]($compareUrl)"

  gh release create $next --generate-notes --title "Release $next" --notes $notes
  Write-Info "✅ Release $next published."
  Write-Host "🔗 $compareUrl" -ForegroundColor Green
  exit 0
}

Write-Host "❌ Unknown stage. Use -Stage prepare or -Stage release." -ForegroundColor Red
exit 1
