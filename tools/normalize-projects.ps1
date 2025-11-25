Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

param(
  # Optional: allow overriding the root, default = current folder
  [string]$Root = (Get-Location).Path
)

# 1) Locate projects directory
$projectsDir = Join-Path $Root "content/projects"

if (-not (Test-Path -LiteralPath $projectsDir)) {
  throw "Projects directory not found: $projectsDir"
}

Write-Host "› Normalizing project JSON in:" $projectsDir -ForegroundColor Cyan

# 2) Backup folder once per run
$timestamp   = Get-Date -Format "yyyyMMdd-HHmmss"
$backupDir   = Join-Path $Root ("content/projects-backup-" + $timestamp)

Write-Host "› Creating backup at:" $backupDir -ForegroundColor Yellow
Copy-Item -LiteralPath $projectsDir -Destination $backupDir -Recurse -Force

# Helper: ensure a property exists (lowercase name preserved)
function Ensure-Property {
  param(
    [Parameter(Mandatory=$true)] [pscustomobject]$Obj,
    [Parameter(Mandatory=$true)] [string]$Name,
    [Parameter(Mandatory=$false)] $Default = $null
  )

  if (-not ($Obj.PSObject.Properties.Name -contains $Name)) {
    Add-Member -InputObject $Obj -NotePropertyName $Name -NotePropertyValue $Default
  }
}

# Helper: basic text truncation
function Truncate-Text {
  param(
    [string]$Text,
    [int]$MaxLength = 220
  )
  if (-not $Text) { return "" }
  if ($Text.Length -le $MaxLength) { return $Text }
  return ($Text.Substring(0, $MaxLength).TrimEnd() + "…")
}

# 3) Walk all *.json files
Get-ChildItem -LiteralPath $projectsDir -Filter *.json | ForEach-Object {
  $file = $_.FullName
  Write-Host "→ Updating $($_.Name)..." -ForegroundColor Green

  $raw = Get-Content -LiteralPath $file -Raw -Encoding UTF8
  if (-not $raw.Trim()) {
    Write-Warning "  Skipping empty file: $($_.Name)"
    return
  }

  $json = $raw | ConvertFrom-Json

  # Ensure basic fields
  $slugFromName = [System.IO.Path]::GetFileNameWithoutExtension($_.Name)

  Ensure-Property -Obj $json -Name "title"      -Default $slugFromName
  Ensure-Property -Obj $json -Name "excerpt"    -Default ""
  Ensure-Property -Obj $json -Name "summary"    -Default ""
  Ensure-Property -Obj $json -Name "description"
  Ensure-Property -Obj $json -Name "updatedAt"  -Default (Get-Date).ToString("s")
  Ensure-Property -Obj $json -Name "pinned"     -Default $false
  Ensure-Property -Obj $json -Name "featured"   -Default $false

  # If summary is missing/empty, derive it from excerpt/description
  if ([string]::IsNullOrWhiteSpace($json.summary)) {
    if ($json.excerpt) {
      $json.summary = Truncate-Text $json.excerpt
    } elseif ($json.description) {
      $json.summary = Truncate-Text $json.description
    } else {
      $json.summary = ""
    }
  }

  # If excerpt is empty but we have description, derive a short one
  if ([string]::IsNullOrWhiteSpace
