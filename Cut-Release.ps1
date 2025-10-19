<#  Cut-Release.ps1  — v2
    One-command helper:
      - Stage=prepare : generate changelog (optional), push branch, open PR
      - Stage=release : tag, push, publish GitHub release
#>

[CmdletBinding()]
param(
  [ValidateSet('auto','major','minor','patch')] [string]$Bump = 'auto',
  [ValidateSet('prepare','release')] [string]$Stage,
  [switch]$DryRun,
  [switch]$Yes,
  [string]$ChangelogPath = 'CHANGELOG.md',
  [string]$ChangelogScript = '.\scripts\Generate-Changelog.ps1'
)

$ErrorActionPreference = 'Stop'

function Run([string]$cmd) {
  if ($DryRun) { Write-Host "DRYRUN> $cmd" -ForegroundColor Yellow }
  else { & powershell -NoLogo -NoProfile -Command $cmd }
}

function Parse-Version([string]$v){
  if (-not $v) { return @{major=0;minor=0;patch=0} }
  $v = $v.TrimStart('v','V')
  $p = $v -split '\.'
  return @{major=[int]$p[0]; minor=[int]$p[1]; patch=[int]$p[2]}
}

function Get-LastSemverTag {
  # newest tag matching vX.Y.Z or X.Y.Z
  $tags = git tag --list --sort=-creatordate
  foreach ($t in $tags) {
    if ($t -match "^(v)?\d+\.\d+\.\d+$") { return $t }
  }
  return $null
}

function Suggest-Bump([string]$sinceTag){
  $log = git log "$sinceTag..HEAD" --pretty=format:"%s%n%b<<END>>" 2>$null
  if (-not $log) { return 'patch' }
  $breaking,$feat,$fix = 0,0,0
  foreach ($c in ($log -split "<<END>>\n?")) {
    $t = $c.Trim(); if (-not $t) { continue }
    $lines = $t -split "`n"; $s = $lines[0]; $b = ($lines | Select-Object -Skip 1) -join "`n"
    if ($s -match '^[a-zA-Z]+!') { $breaking++ }
    if ($b -match '(?im)^\s*BREAKING CHANGE') { $breaking++ }
    if ($s -match '^(feat)(\(|:)\b') { $feat++ }
    if ($s -match '^(fix)(\(|:)\b')  { $fix++ }
  }
  if ($breaking -gt 0) { 'major' }
  elseif ($feat -gt 0) { 'minor' }
  elseif ($fix  -gt 0) { 'patch' }
  else { 'patch' }
}

function Ensure-Healthy-RemoteMain {
  git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*" | Out-Null
  git remote prune origin | Out-Null
  $rf = ".git\refs\remotes\origin\main"
  if (Test-Path $rf) {
    $sha = (Get-Content $rf -Raw).Trim()
    if ($sha -eq '0000000000000000000000000000000000000000') { Remove-Item -Force $rf }
  }
  Run 'git fetch origin --prune --tags --force'
  try { Run 'git fetch origin "+refs/heads/main:refs/remotes/origin/main" --force' } catch {}
  Run 'git symbolic-ref refs/remotes/origin/HEAD refs/remotes/origin/main'
}

function Confirm([string]$msg){
  if ($Yes) { return $true }
  $ans = Read-Host "$msg (y/N)"
  return ($ans -match '^(y|yes)$')
}

# --- Preconditions ---
git rev-parse --git-dir > $null
Ensure-Healthy-RemoteMain

$branch  = (git rev-parse --abbrev-ref HEAD).Trim()
$lastTag = if ($env:FORCE_LAST_SEMVER) { $env:FORCE_LAST_SEMVER } else { Get-LastSemverTag }
if (-not $lastTag) { $lastTag = 'v0.0.0' }

if ($Bump -eq 'auto') { $Bump = Suggest-Bump $lastTag }

$cur = Parse-Version $lastTag
switch ($Bump) {
  'major' { $next = "v$($cur.major+1).0.0" }
  'minor' { $next = "v$($cur.major).$($cur.minor+1).0" }
  default { $next = "v$($cur.major).$($cur.minor).$($cur.patch+1)" }
}

if (-not $Stage) {
  $Stage = if ($branch -eq 'main' -and -not (git status --porcelain)) { 'release' } else { 'prepare' }
}

Write-Host "🔧 Stage: $Stage  |  Bump: $Bump  |  Next: $next  |  From: $lastTag  |  Branch: $branch" -ForegroundColor Cyan

# ---------------- PREPARE ----------------
if ($Stage -eq 'prepare') {
  $prepBranch = "chore/changelog-$(Get-Date -Format 'yyyyMMdd-HHmm')"
  Run "git switch -c $prepBranch"

  if (Test-Path $ChangelogScript) {
    if ($DryRun) { Write-Host "DRYRUN> & $ChangelogScript" -ForegroundColor Yellow } else { & $ChangelogScript }
  } else {
    Write-Warning "Changelog script not found at $ChangelogScript. Continuing without running it."
  }

  if (git status --porcelain) {
    Run "git add --all"
    Run "git commit -m `"chore(changelog): update $ChangelogPath`""
    Run "git push -u origin $prepBranch"
    Run ("gh pr create --base main --head $prepBranch --title `"chore(release): changelog for $next`" --body `"Automated CHANGELOG update. Suggested next version: $next.`" --label release --label chore")
    Write-Host "✅ Changelog PR opened from $prepBranch → main." -ForegroundColor Green
  } else {
    Write-Host "ℹ️ No changes detected; nothing to commit." -ForegroundColor Yellow
  }
  exit 0
}

# ---------------- RELEASE ----------------
if ($Stage -eq 'release') {
  $curBranch = (git rev-parse --abbrev-ref HEAD).Trim()
  if ($curBranch -ne 'main') {
    if (-not (Confirm "You're on '$curBranch'. Switch to 'main' and continue?")) { throw "Aborted by user (not on main)." }
    Run "git checkout main"
  }
  Run "git pull --ff-only origin main"

  Write-Host "🏷  Tagging $next..." -ForegroundColor Cyan
  if (git rev-parse -q --verify "refs/tags/$next" 2>$null) {
    Write-Host "Tag $next already exists locally; reusing." -ForegroundColor Yellow
  } else {
    if (-not (Confirm "Create tag $next now?")) { throw "Aborted by user." }
    Run "git tag -a $next -m `"chore(release): cut $next`""
  }
  Run "git push origin $next"

  $exists = (gh release view $next --json tagName 2>$null)
  if ($LASTEXITCODE -eq 0 -and $exists) {
    Run "gh release edit $next --latest --notes `"Automated release for $next. See $ChangelogPath for details.`""
  } else {
    Run "gh release create $next --generate-notes --latest"
  }

  Run "git fetch origin --tags --prune"
  Write-Host "✅ Release $next published." -ForegroundColor Green
  exit 0
}
