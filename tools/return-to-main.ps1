param()

$ErrorActionPreference = 'Stop'

function Say  ($m){ Write-Host "› $m" -ForegroundColor Cyan }
function Good ($m){ Write-Host "✓ $m" -ForegroundColor Green }
function Bad  ($m){ Write-Host "✗ $m" -ForegroundColor Red }

Say "Returning to main…"

# Sanity: prevent overwriting local changes
$dirty = git status --porcelain
if ($dirty) {
  Bad "Working tree not clean. Commit or stash before switching."
  exit 1
}

Say "Fetching latest origin/main…"
git fetch origin main

Say "Checking out main…"
git checkout main

Say "Pulling latest changes…"
git pull

Good "Now on main branch and fully up-to-date."

Write-Host ""
Write-Host "If you want to restore to a fixed tag again:"
Write-Host "  pwsh -NoProfile -ExecutionPolicy Bypass -File tools/restore.ps1"
Write-Host ""

# Keep window open if launched by Explorer (not VS Code/Windows Terminal)
if ($Host.Name -notlike "*Visual Studio Code*" -and
    $Host.Name -notlike "*Windows Terminal*" -and
    $Host.Name -notlike "*ConsoleHost*") {
  Read-Host "`nPress Enter to close"
}
