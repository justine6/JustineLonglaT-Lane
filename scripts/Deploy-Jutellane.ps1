param(
  [ValidateSet('preview','production')]
  [string]$Environment = 'preview',

  # Optional Team slug for Vercel (e.g., 'jutellane'); leave '' to rely on .vercel/project.json
  [string]$TeamSlug = '',

  # Vercel project name (must match what’s in Vercel)
  [string]$Project = 'jutellane-solutions',

  # Pass -Yes to skip prompts
  [switch]$Yes
)

$ErrorActionPreference = 'Stop'

function Say($msg) { Write-Host "› $msg" -ForegroundColor Cyan }
function Good($msg){ Write-Host "✓ $msg" -ForegroundColor Green }
function Bad($msg) { Write-Host "✗ $msg" -ForegroundColor Red }

# 0) Sanity: repo root
if (!(Test-Path package.json)) {
  Bad "Run this from the repository root (package.json not found)."
  exit 1
}

# 0.1) Avoid accidental prebuilt deploys
$vercelOutput = Join-Path ".vercel" "output"
if (Test-Path $vercelOutput) { Remove-Item $vercelOutput -Recurse -Force }

# 1) Ensure Vercel CLI
if (-not (Get-Command vercel -ErrorAction SilentlyContinue)) {
  Say "Installing Vercel CLI..."
  npm i -g vercel@latest | Out-Null
  Good "Vercel CLI ready."
}

# 2) Ensure logged in
try {
  $who = (vercel whoami 2>$null)
  if (-not $who) { throw "Not logged in" }
  Good "Logged in as: $who"
} catch {
  Bad "Not logged in to Vercel. Run:  vercel login justinelongla1@gmail.com"
  exit 1
}

# Helper: scope args (optional)
$ScopeArgs = @()
if ($TeamSlug -and $TeamSlug.Trim()) { $ScopeArgs += @('--scope', $TeamSlug.Trim()) }

# 3) Ensure linked (idempotent)
if (Test-Path .vercel/project.json) {
  Say "Project already linked (.vercel/project.json present)."
} else {
  Say "Linking folder to project: $Project"
  if ($Yes) { vercel link --project $Project --yes @ScopeArgs | Out-Null }
  else      { vercel link --project $Project       @ScopeArgs | Out-Null }
  Good "Linked to Vercel project: $Project"
}

# 4) Deploy
$args = @()
if ($Environment -eq 'production') { $args += '--prod' }
if ($Yes)                           { $args += '--yes'  }

Say "Deploying to $Environment ..."
$deployOut = (& vercel @args @ScopeArgs 2>&1) -join "`n"

if ($LASTEXITCODE -ne 0) {
  throw "Vercel deploy failed (exit $LASTEXITCODE). Output:`n$deployOut"
}

# 5) Extract URL (prefer the last vercel.app URL)
$regex = 'https://[a-z0-9-]+\.vercel\.app'
$match  = [regex]::Matches($deployOut, $regex) | Select-Object -Last 1
$url = $null
if ($match) { $url = $match.Value }

# Fallback: ask Vercel for latest deployment in this env
if (-not $url) {
  $lsArgs = @('--json','--limit','5','--confirm') + $ScopeArgs
  if ($Environment -eq 'production') { $lsArgs += '--prod' }
  $ls = (& vercel ls @lsArgs 2>&1) -join "`n"
  try {
    $obj = $ls | ConvertFrom-Json
    $item = if ($obj | Get-Member -Name "url" -MemberType NoteProperty) { $obj } else { $obj[0] }
    $url = "https://$($item.url)"
  } catch {
    throw "Could not determine deployment URL. Deploy log:`n$deployOut`nls-json:`n$ls"
  }
}

Good "$Environment URL: $url"
