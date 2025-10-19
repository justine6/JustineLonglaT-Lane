param(
  [string]$ChangelogPath = "CHANGELOG.md",
  [string]$FromTag = (git tag --list --sort=-creatordate | Where-Object { $_ -match "^(v)?\d+\.\d+\.\d+$" } | Select-Object -First 1)
)
if (-not $FromTag) { $FromTag = "v0.0.0" }
$today = Get-Date -Format "yyyy-MM-dd"
$log = git log "$FromTag..HEAD" --pretty="* %s (%h)"
$section = "`n## Unreleased - $today`n`n$log`n"
if (Test-Path $ChangelogPath) {
  $existing = Get-Content $ChangelogPath -Raw
  Set-Content $ChangelogPath ($section + $existing)
} else {
  Set-Content $ChangelogPath "# Changelog`n$section"
}
Write-Host "✅ CHANGELOG updated via stub generator."
