param(
  [int]$PRNumber,
  [switch]$Force,                 # skip the "are you sure?" prompt
  [string]$TagName,               # custom tag name; default is deploy-YYYYMMDD-HHmmss
  [switch]$Release                # also create a GitHub Release (recommended)
)

$ErrorActionPreference = "Stop"

function Require-GH {
  if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host "❌ GitHub CLI (gh) is not installed or not on PATH." -ForegroundColor Red
    Write-Host "   Install: https://cli.github.com/" -ForegroundColor Yellow
    exit 1
  }
  try { gh auth status 1>$null 2>$null } catch {
    Write-Host "❌ GitHub CLI is not authenticated. Run: gh auth login" -ForegroundColor Red
    exit 1
  }
}

function Confirm-Action($Prompt) {
  $answer = Read-Host "$Prompt [y/N]"
  return ($answer -match '^(y|yes)$')
}

function Get-Repo() {
  (gh repo view --json nameWithOwner | ConvertFrom-Json).nameWithOwner
}

function Get-LatestMainSha($repo) {
  gh api "repos/$repo/commits/main" --jq '.sha'
}

function Get-DefaultTag() {
  "deploy-{0:yyyyMMdd-HHmmss}" -f (Get-Date).ToUniversalTime()
}

Require-GH

# 1) Resolve PR
if (-not $PRNumber) {
  Write-Host "🔍 Finding latest open preview PR..." -ForegroundColor Cyan
  $list = gh pr list --state open --json number,headRefName,title | ConvertFrom-Json
  $previewPR = $list | Where-Object { $_.headRefName -like 'preview/*' } | Sort-Object number -Descending | Select-Object -First 1
  if (-not $previewPR) {
    Write-Host "⚠️  No open preview/* PRs found." -ForegroundColor Yellow
    exit 0
  }
  $PRNumber = $previewPR.number
}

# 2) Show details
$pr = gh pr view $PRNumber --json number,title,headRefName,baseRefName,author,state,mergeable | ConvertFrom-Json
if (-not $pr) { Write-Host "❌ Could not read PR #$PRNumber." -ForegroundColor Red; exit 1 }

Write-Host ""
Write-Host "📦 Ready to promote PR #$($pr.number)" -ForegroundColor Cyan
Write-Host "   Title      : $($pr.title)"
Write-Host "   From       : $($pr.headRefName)  ➜  $($pr.baseRefName)"
Write-Host "   Author     : $($pr.author.login)"
Write-Host ""

# 3) Confirm
if (-not $Force) {
  if (-not (Confirm-Action "Proceed to SQUASH-MERGE PR #$PRNumber into '$($pr.baseRefName)' and delete the preview branch?")) {
    Write-Host "🛑 Promotion cancelled." -ForegroundColor Yellow
    exit 0
  }
}

# 4) Merge + delete branch
Write-Host "🚀 Merging PR #$PRNumber with --squash and deleting branch..." -ForegroundColor Cyan
gh pr merge $PRNumber --squash --delete-branch --auto

# tiny settle time
Start-Sleep -Seconds 5

# 5) Create release tag on latest main
$repo = Get-Repo
$sha  = Get-LatestMainSha $repo
if (-not $TagName) { $TagName = Get-DefaultTag }

Write-Host ""
Write-Host "🏷️  Creating annotated tag '$TagName' on main @ $sha ..." -ForegroundColor Cyan

# Create the tag via GitHub API (avoids requiring local git)
gh api "repos/$repo/git/tags" `
  --method POST `
  -f tag="$TagName" `
  -f message="Deployment: $TagName`r`nPromoted PR #$PRNumber ($($pr.headRefName) ➜ $($pr.baseRefName))" `
  -f object="$sha" `
  -f type="commit" 1>$null

# Create the ref pointing to the tag
gh api "repos/$repo/git/refs" `
  --method POST `
  -f ref="refs/tags/$TagName" `
  -f sha="$sha" 1>$null

Write-Host "✅ Tag created: $TagName" -ForegroundColor Green

# 6) Optional GitHub Release
if ($Release) {
  Write-Host "📝 Creating GitHub Release for '$TagName'..." -ForegroundColor Cyan
  $title = "Deployment $TagName"
  $notes = @"
Promoted **PR #$PRNumber**  
**Branch:** $($pr.headRefName) ➜ $($pr.baseRefName)

This tag marks the production deployment.
"@
  gh release create $TagName --title "$title" --notes "$notes" --target main 1>$null
  Write-Host "✅ Release created for $TagName" -ForegroundColor Green
}

# 7) Verify prod URLs
Write-Host ""
Write-Host "�� Checking production URLs..." -ForegroundColor Cyan
$urls = @(
  "https://jutellane.com",
  "https://jutellane-solutions.vercel.app"
)

foreach ($url in $urls) {
  try {
    $res = Invoke-WebRequest -Uri $url -TimeoutSec 15 -UseBasicParsing
    if ($res.StatusCode -eq 200) {
      Write-Host "✅ $url is healthy (200 OK)" -ForegroundColor Green
    } else {
      Write-Host "⚠️  $url returned $($res.StatusCode)" -ForegroundColor Yellow
    }
  } catch {
    Write-Host "❌ $url not reachable: $($_.Exception.Message)" -ForegroundColor Red
  }
}

Write-Host ""
Write-Host "🎉 Promotion complete. Tag: $TagName" -ForegroundColor Green
