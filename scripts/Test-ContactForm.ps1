param(
  [string]$Name    = "Test User",
  [string]$Email   = "test@example.com",
  [string]$Phone   = "555-1212",
  [string]$Message = "Hello from PowerShell API test!"
)

$body = @{
  name    = $Name
  email   = $Email
  phone   = $Phone
  message = $Message
} | ConvertTo-Json

try {
  $res = Invoke-WebRequest -Uri "http://localhost:3000/api/contact" -Method POST -ContentType "application/json" -Body $body -UseBasicParsing
  Write-Host ("Status: {0}" -f $res.StatusCode) -ForegroundColor Green
  $res.Content | Write-Host
} catch {
  Write-Host ("Error: {0}" -f $_.Exception.Message) -ForegroundColor Red
  if ($_.Exception.Response) {
    $stream = $_.Exception.Response.GetResponseStream()
    $reader = New-Object System.IO.StreamReader($stream)
    $reader.ReadToEnd() | Write-Host
  }
}
