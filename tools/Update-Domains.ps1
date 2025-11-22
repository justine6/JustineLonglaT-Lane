param(
    [switch]$WhatIf
)

$ErrorActionPreference = "Stop"

Write-Host "› Updating domain hostnames..." -ForegroundColor Cyan

# -------------------------------
# 1) OLD → NEW URL mappings
# -------------------------------
$replacements = @{
    "https://justinelonglat-lane.com"                     = "https://justinelonglat-lane.com"
    "https://www.justinelonglat-lane.com"                 = "https://www.justinelonglat-lane.com"
    "https://blogs.justinelonglat-lane.com"               = "https://blogs.justinelonglat-lane.com"
    "https://docs.justinelonglat-lane.com"                = "https://docs.justinelonglat-lane.com"
    "https://projects.justinelonglat-lane.com"            = "https://projects.justinelonglat-lane.com"
    "https://automation.justinelonglat-lane.com"           = "https://automation.justinelonglat-lane.com"
}

Write-Host "› Replacement map loaded:" -ForegroundColor DarkCyan
$replacements.GetEnumerator() | ForEach-Object {
    Write-Host "    $($_.Key)  →  $($_.Value)" -ForegroundColor DarkGray
}

# -------------------------------
# 2) File extensions to update
# -------------------------------
$includeExtensions = @(
    "*.ts","*.tsx","*.js","*.jsx","*.json",
    "*.md","*.mdx","*.yml","*.yaml","*.html"
)

# -------------------------------
# 3) Find all files (skip build, node modules, git, backup)
# -------------------------------
$files = Get-ChildItem -Recurse -File -Include $includeExtensions |
    Where-Object {
        $_.FullName -notmatch "\\node_modules\\" -and
        $_.FullName -notmatch "\\.next\\" -and
        $_.FullName -notmatch "\\.git\\" -and
        $_.FullName -notmatch "JustineLonglaT-Lane-backup"
    }

Write-Host "› Files scanned: $($files.Count)" -ForegroundColor Magenta

# -------------------------------
# 4) BACKUP — once per file
# -------------------------------
$backupRoot = Join-Path $PWD "JustineLonglaT-Lane-backup"

if (!(Test-Path $backupRoot)) {
    New-Item -ItemType Directory -Path $backupRoot | Out-Null
}

# -------------------------------
# 5) Process files
# -------------------------------
foreach ($file in $files) {

    $text = Get-Content $file.FullName -Raw
    $original = $text

    foreach ($pair in $replacements.GetEnumerator()) {
        $text = $text.Replace($pair.Key, $pair.Value)
    }

    if ($text -ne $original) {

        if ($WhatIf) {
            Write-Host "Would update: $($file.FullName)" -ForegroundColor Yellow
        }
        else {
            # Make backup copy
            $backupPath = $file.FullName.Replace($PWD, $backupRoot)
            $backupDir = Split-Path $backupPath

            if (!(Test-Path $backupDir)) {
                New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
            }

            Copy-Item $file.FullName $backupPath -Force

            # Save updated file
            Set-Content $file.FullName $text -NoNewline

            Write-Host "Updated: $($file.FullName)" -ForegroundColor Green
        }
    }
}

Write-Host "› Done." -ForegroundColor Cyan
