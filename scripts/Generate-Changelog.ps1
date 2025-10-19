<#  Generate-Changelog.ps1
    Conventional-commit aware generator.
    - Groups by type (feat, fix, chore, docs, refactor, perf, test, build, ci, revert, other)
    - Supports scopes like feat(ui): ...
    - Uses latest SemVer tag (vX.Y.Z or X.Y.Z) by default
#>

[CmdletBinding()]
param(
  [string]$ChangelogPath = "CHANGELOG.md",
  [string]$FromTag       = $null,   # if null, auto-pick latest SemVer
  [switch]$Append        # if set, appends; default prepends new section
)

$ErrorActionPreference = 'Stop'

function Get-LastSemverTag {
  $tags = git tag --list --sort=-creatordate
  foreach ($t in $tags) { if ($t -match '^(v)?\d+\.\d+\.\d+$') { return $t } }
  return $null
}

if (-not $FromTag) { $FromTag = Get-LastSemverTag; if (-not $FromTag) { $FromTag = 'v0.0.0' } }

# subject + body + hash
$raw = git log "$FromTag..HEAD" --pretty=format:"%H%n%s%n%b%n<<END>>" 2>$null
if (-not $raw) { Write-Host "ℹ️  No commits found since $FromTag. Nothing to update."; exit 0 }

# Buckets
$groups = [ordered]@{
  'Features'    = @()
  'Fixes'       = @()
  'Performance' = @()
  'Refactor'    = @()
  'Docs'        = @()
  'Tests'       = @()
  'Build/CI'    = @()
  'Reverts'     = @()
  'Chores'      = @()
  'Other'       = @()
}
function Add-Line([string]$bucket, [string]$line) { $groups[$bucket] += $line }

# ✅ Fixed: delimit $scope in string
function Bullet([string]$subject, [string]$sha, [string]$scope) {
  $short = $sha.Substring(0,7)
  if ($scope) { return "* **$($scope):** $subject (`$short`)" }
  return "* $subject (`$short`)"
}

# Parse
$commits = $raw -split "<<END>>\s*"
foreach ($blob in $commits) {
  $chunk = $blob.Trim(); if (-not $chunk) { continue }
  $lines   = $chunk -split "`n"
  $sha     = $lines[0].Trim()
  $subject = ($lines[1]  | ForEach-Object { $_.Trim() })
  $body    = ($lines | Select-Object -Skip 2) -join "`n"

  # Skip noise
  if ($subject -match '^(Merge|Bump|Release|Version bump)') { continue }

  # type(scope)?: message
  $m = [regex]::Match($subject,'^(?<type>feat|fix|perf|refactor|docs|test|build|ci|revert|chore)(\((?<scope>[^)]+)\))?:\s*(?<msg>.+)$','IgnoreCase')
  $type=$null; $scope=$null; $msg=$subject
  if ($m.Success) { $type=$m.Groups['type'].Value.ToLower(); $scope=$m.Groups['scope'].Value; $msg=$m.Groups['msg'].Value }

  switch ($type) {
    'feat'     { Add-Line 'Features'    (Bullet $msg $sha $scope) }
    'fix'      { Add-Line 'Fixes'       (Bullet $msg $sha $scope) }
    'perf'     { Add-Line 'Performance' (Bullet $msg $sha $scope) }
    'refactor' { Add-Line 'Refactor'    (Bullet $msg $sha $scope) }
    'docs'     { Add-Line 'Docs'        (Bullet $msg $sha $scope) }
    'test'     { Add-Line 'Tests'       (Bullet $msg $sha $scope) }
    'build'    { Add-Line 'Build/CI'    (Bullet $msg $sha $scope) }
    'ci'       { Add-Line 'Build/CI'    (Bullet $msg $sha $scope) }
    'revert'   { Add-Line 'Reverts'     (Bullet $msg $sha $scope) }
    'chore'    { Add-Line 'Chores'      (Bullet $msg $sha $scope) }
    default    { Add-Line 'Other'       (Bullet $msg $sha $scope) }
  }
}

# Compose section
$today  = Get-Date -Format "yyyy-MM-dd"
$header = "## [$today] - Changes since $FromTag"
$section = @($header)
foreach ($k in $groups.Keys) {
  if ($groups[$k].Count -gt 0) {
    $section += ""
    $section += "### $k"
    $section += ($groups[$k] | Sort-Object)
  }
}
$section = ($section -join "`n") + "`n`n"

# Write file (prepend by default)
if (Test-Path $ChangelogPath) {
  $existing = Get-Content $ChangelogPath -Raw
  if ($Append) {
    Set-Content $ChangelogPath ($existing + "`n" + $section)
  } else {
    Set-Content $ChangelogPath ("# Changelog`n`n" + $section + ($existing -replace '^\#\s*Changelog\s*\r?\n?', ''))
  }
} else {
  Set-Content $ChangelogPath ("# Changelog`n`n" + $section)
}

Write-Host "✅ Changelog updated at $ChangelogPath"
