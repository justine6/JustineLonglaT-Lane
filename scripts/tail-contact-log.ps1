<#
.SYNOPSIS
  Tail, seed, and export the contact audit log with color formatting.
.PARAMETER LogPath
  Path to the JSONL log. Defaults to OS temp folder path.
.PARAMETER Follow
  Follow new lines (like `tail -f`).
.PARAMETER Create
  Create the log file if it doesn't exist.
.PARAMETER Seed
  Append a single sample JSON entry for testing.
.PARAMETER ExportJson
  Export all entries to a pretty JSON file.
.PARAMETER ExportCsv
  Export all entries to CSV.
.PARAMETER OutPath
  Target path for exports (JSON/CSV). Defaults next to the log file.
#>

param (
  [string]$LogPath = "$([System.IO.Path]::GetTempPath())contact-submissions.jsonl",
  [switch]$Follow,
  [switch]$Create,
  [switch]$Seed,
  [switch]$ExportJson,
  [switch]$ExportCsv,
  [string]$OutPath
)

function Ensure-LogFile {
  param([string]$Path)
  if (!(Test-Path $Path)) {
    if ($Create) {
      New-Item -Path $Path -ItemType File -Force | Out-Null
      Write-Host "🆕 Created log file: $Path" -ForegroundColor Green
    } else {
      Write-Host "❌ No log file found at $Path" -ForegroundColor Red
      Write-Host "   Tip: run with -Create or submit the form once to create it." -ForegroundColor DarkGray
      exit 1
    }
  }
}

function Format-Entry($jsonLine) {
  try {
    $obj = $jsonLine | ConvertFrom-Json
    $time = Get-Date $obj.timestamp -Format "yyyy-MM-dd HH:mm:ss"
    $name = $obj.name
    $email = $obj.email
    $reason = $obj.reason
    $provider = $obj.provider
    $msg = ($obj.message | Out-String).Trim().Replace("`r`n", " ").Replace("`n"," ")

    Write-Host "[$time]" -ForegroundColor DarkCyan -NoNewline
    Write-Host " $name <$email>" -ForegroundColor Yellow
    Write-Host "  ├─ Reason: $reason" -ForegroundColor Cyan
    Write-Host "  ├─ Provider: $provider" -ForegroundColor DarkGray
    Write-Host "  └─ Message: $msg" -ForegroundColor White
    Write-Host ""
  } catch {
    Write-Host "⚠️  Invalid JSON line: $jsonLine" -ForegroundColor DarkRed
  }
}

# Create file if requested / ensure it exists
Ensure-LogFile -Path $LogPath

# Seed a sample entry (useful in dev)
if ($Seed) {
  $sample = @{
    timestamp = (Get-Date).ToString("o")
    ip        = "127.0.0.1"
    name      = "Sample User"
    email     = "sample@example.com"
    company   = "Acme"
    reason    = "general"
    message   = "Testing the contact audit log."
    provider  = "resend"
  } | ConvertTo-Json -Compress
  Add-Content -Path $LogPath -Value $sample
  Write-Host "✅ Seeded one sample entry." -ForegroundColor Green
}

# Export helpers
function Read-Entries([string]$Path) {
  Get-Content -Path $Path | Where-Object { $_ -ne "" } | ForEach-Object {
    try { $_ | ConvertFrom-Json } catch { $null }
  } | Where-Object { $_ -ne $null }
}

if ($ExportJson -or $ExportCsv) {
  $entries = Read-Entries $LogPath
  if (-not $OutPath) {
    $base = [System.IO.Path]::ChangeExtension($LogPath, $null)
    $OutPath = if ($ExportJson) { "${base}-export.json" } else { "${base}-export.csv" }
  }

  if ($ExportJson) {
    $entries | ConvertTo-Json -Depth 4 | Set-Content -Path $OutPath -Encoding UTF8
    Write-Host "📦 Exported JSON -> $OutPath" -ForegroundColor Green
  } elseif ($ExportCsv) {
    $entries | Select-Object timestamp, ip, name, email, company, reason, message, provider |
      Export-Csv -Path $OutPath -NoTypeInformation -Encoding UTF8
    Write-Host "📦 Exported CSV -> $OutPath" -ForegroundColor Green
  }
  exit 0
}

Write-Host "📄 Tailing log file: $LogPath" -ForegroundColor Cyan
Write-Host "Press Ctrl + C to stop.`n" -ForegroundColor DarkGray

# Print existing, then optionally follow
Get-Content -Path $LogPath | ForEach-Object { if ($_ -ne "") { Format-Entry $_ } }

if ($Follow) {
  Write-Host "🔄 Watching for new entries..." -ForegroundColor Green
  Get-Content -Path $LogPath -Wait -Tail 0 | ForEach-Object {
    if ($_ -ne "") { Format-Entry $_ }
  }
}
