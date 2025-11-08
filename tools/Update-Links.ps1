# tools/Update-Links.ps1

param()

Write-Host "› Running Update-Links.ps1..." -ForegroundColor Cyan

$root = (Get-Location).Path
$files = Get-ChildItem -Recurse -Include *.tsx,*.ts |
    Where-Object { $_.FullName -notmatch "node_modules" }

$changed = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw

    # Already has import? Skip.
    if ($content -match "from\s+['""]@/config/links['""]") {
        continue
    }

    # Insert new import after the FIRST import line
    $newContent = $content -replace "(import\s.+?;)",
        "`$1`r`nimport { LINKS } from '@/config/links';"

    if ($newContent -ne $content) {
        $changed++
        Set-Content $file.FullName $newContent -Encoding UTF8
        Write-Host "✓ Updated: $($file.FullName)" -ForegroundColor Yellow
    }
}

Write-Host "✓ Updated $changed file(s)." -ForegroundColor Green
