# scripts/Setup-VercelDocs.ps1
[CmdletBinding()]
param(
  [string]$DocsFile      = "docs/ci/vercel-pipeline.md",
  [string]$WorkflowsReadme = ".github/workflows/README.md",
  [string]$ScriptsDir    = "scripts"
)

function Ensure-Dir($p) {
  if (-not (Test-Path $p)) { New-Item -ItemType Directory -Path $p -Force | Out-Null }
}

function Ensure-File($p, $content) {
  if (-not (Test-Path $p)) {
    $dir = Split-Path $p -Parent
    Ensure-Dir $dir
    $content | Out-File $p -Encoding UTF8
  }
}

function Ensure-ReadmeLink($readmePath, $linkLine, $sectionHeader = "## Deployment Automation") {
  if (-not (Test-Path $readmePath)) {
    "# Project`n`n$sectionHeader`n$linkLine`n" | Out-File $readmePath -Encoding UTF8
    return
  }

  $readme = Get-Content $readmePath -Raw
  $updated = $false

  if ($readme -notmatch [regex]::Escape($sectionHeader)) {
    $readme += "`n`n$sectionHeader`n"
    $updated = $true
  }

  if ($readme -notmatch [regex]::Escape($linkLine)) {
    $readme += "$linkLine`n"
    $updated = $true
  }

  if ($updated) {
    Copy-Item $readmePath "$readmePath.bak" -Force
    $readme | Out-File $readmePath -Encoding UTF8
  }
}

# 1) Directories
Ensure-Dir "docs/ci"
Ensure-Dir ".github/workflows"
Ensure-Dir $ScriptsDir

# 2) Main docs file (paste the canvas content here after creation)
$docsStub = @"
# Vercel Automation Pipelines — Production & Preview

> Paste the full content from your canvas into this file.
> Location: $DocsFile

- PowerShell runbooks (local)
- GitHub Actions YAML (Preview & Production)
- Refinement phase (caching, notifications, tagging)
"@
Ensure-File $DocsFile $docsStub

# 3) Workflows README (short pointer)
$wfReadmeStub = @"
# GitHub Actions Workflows

This folder contains CI/CD workflows for Vercel:
- **preview.yml** — PR checks + Vercel Preview deploy
- **production.yml** — main branch + Production deploy
- **release.yml** — creates releases on tags \`v*\`

See the full guide: [Vercel Automation Pipelines](../../$DocsFile)
"@
Ensure-File $WorkflowsReadme $wfReadmeStub

# 4) Scripts folder readme (optional)
$scriptsReadme = Join-Path $ScriptsDir "README.md"
$scriptsStub = @"
# Scripts

Common one-liners:

```powershell
./scripts/Deploy-Preview.ps1 -OpenInBrowser
./scripts/Deploy-Production.ps1 -OpenInBrowser
./scripts/Version-Tag.ps1 -Bump patch   # or minor/major
./scripts/Dispatch-Prod.ps1             # triggers production workflow
