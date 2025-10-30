# scripts/Cut-Release.ps1
# -----------------------
# Usage:
#   pwsh -NoProfile -ExecutionPolicy Bypass -File .\scripts\Cut-Release.ps1 -Version 2.5.0 -Verbose
#   .\scripts\Cut-Release.ps1 -Version 2.5.0 -DryRun

[CmdletBinding()] # enables common -Verbose switch
param(
  [Parameter(Mandatory = $true)]
  [ValidatePattern('^\d+\.\d+\.\d+$')]
  [string]$Version,

  [switch]$DryRun
)

# Respect -Verbose from the command line
$VerbosePreference = if ($PSBoundParameters.ContainsKey('Verbose')) { 'Continue' } else { 'SilentlyContinue' }

function Run {
  param([string]$Cmd)
  Write-Host "› $Cmd" -ForegroundColor Cyan
  if ($DryRun) { Write-Host "  (dry-run)"; return }
  # Use the current shell to run commands for cross-platform behavior
  & $Cmd
  if ($LASTEXITCODE -ne 0) { throw "Command failed: $Cmd" }
}

Write-Verbose "Version: $Version"
if ($DryRun) { Write-Host "DRY RUN — no changes will be made" -ForegroundColor Yellow }

# 1) Sanity checks
Run 'git rev-parse --abbrev-ref HEAD'
Run 'git status --porcelain'

# 2) Optional: run tests/coverage (comment out if not needed)
Run 'npm run -s test:coverage'

# 3) Tag the release
Run "git tag -a v$Version -m 'v$Version — Cal.com scheduling integration, responsive layout polish, and pre-production sync'"

# 4) Push tag (and make sure upstream is up to date)
Run 'git push origin --follow-tags'

Write-Host "✅ Release v$Version tagged and pushed." -ForegroundColor Green
if ($DryRun) { Write-Host "NOTE: DRY RUN — nothing was pushed." -ForegroundColor Yellow }
