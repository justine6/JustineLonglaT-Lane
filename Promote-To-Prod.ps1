param(
  [string]$PRNumber,                # If omitted, picks the first open PR
  [string[]]$ProdUrls = @("https://jutellane.com","https://jutellane-solutions.vercel.app")
)

$ErrorActionPreference = "Stop"
trap {
  Write-Host "⚠️  ERROR: $($_.Exception.Message)" -ForegroundColor Red
  continue
}

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
  throw "GitHub CLI (gh) is not installed or not on PATH. Install from https://cli.github.com/"
}

if (-not $PRNumber) {
  $PRNumber = gh pr list --state open --json number --jq '.[0].number'
  if (-not $PRNumber) { throw "No open PRs found." }
}

Write-Host "Merging PR #$PRNumber into main (squash, delete branch)..." -ForegroundColor Cyan
gh pr merge $PRNumber --squash --delete-branch --auto

Write-Host "`nChecking production URLs:" -ForegroundColor Cyan
foreach ($u in $ProdUrls) {
  try {
    $res = Invoke-WebRequest -UseBasicParsing -Uri $u -TimeoutSec 15
    Write-Host ("  {0} → {1}" -f $u, $res.StatusCode) -ForegroundColor Green
  } catch {
    Write-Host ("  {0} → FAILED: {1}" -f $u, $_.Exception.Message) -ForegroundColor Yellow
  }
}
