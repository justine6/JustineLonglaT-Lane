# Send-JutellaneProjectsTestEmail.ps1
param(
  [Parameter(Mandatory = $false)]
  [string]$To = "yourpersonalemail@gmail.com",

  [Parameter(Mandatory = $false)]
  [string]$ApiKey  # optional; falls back to env var
)

$ErrorActionPreference = 'Stop'

# Work even if $PSScriptRoot is not set
$scriptDir = if ($PSScriptRoot) { $PSScriptRoot } else { (Get-Location).Path }
$logPath   = Join-Path $scriptDir "Send-JutellaneProjectsTestEmail.log"

try { Start-Transcript -Path $logPath -Append -ErrorAction SilentlyContinue | Out-Null } catch {}

# Resolve API key
if (-not $ApiKey) { $ApiKey = $env:RESEND_API_KEY }
if ([string]::IsNullOrWhiteSpace($ApiKey)) {
  Write-Error "RESEND API key missing. Pass -ApiKey or set `$env:RESEND_API_KEY."
}

Write-Host "Using recipient: $To" -ForegroundColor Cyan
Write-Host "Sending with Resend…" -ForegroundColor Yellow

# Prepare request
$headers = @{
  "Authorization" = "Bearer $ApiKey"
  "Content-Type"  = "application/json"
}

$body = @{
  from    = "info@justinelonglat-lane.com"   # must be from your verified domain
  to      = $To
  subject = "Test Email from Jutellane via Resend"
  html    = "<h3>Hello Justine!</h3><p>Your domain-based email via Resend is fully verified and operational 🎉</p>"
} | ConvertTo-Json

try {
  $response = Invoke-RestMethod `
    -Uri "https://api.resend.com/emails" `
    -Method Post `
    -Headers $headers `
    -Body $body

  if ($response.id) {
    Write-Host "`nEmail sent successfully! Email ID: $($response.id)" -ForegroundColor Green
  } else {
    Write-Host "`nFailed to send email. Response: $($response | ConvertTo-Json -Depth 5)" -ForegroundColor Red
  }
}
catch {
  Write-Host "`nERROR: $($_.Exception.Message)" -ForegroundColor Red
  if ($_.ErrorDetails.Message) {
    Write-Host $_.ErrorDetails.Message -ForegroundColor DarkRed
  }
  Write-Host "See transcript: $logPath" -ForegroundColor DarkYellow
}
finally {
  try { Stop-Transcript | Out-Null } catch {}
  Read-Host "`nDone. Press Enter to close"
}
