# tools/normalize-project-projects.ps1
# -------------------------------------
# Normalize all project JSON metadata (safe, idempotent)
# -------------------------------------

Write-Host "`n🔧 Normalizing project JSON metadata..." -ForegroundColor Cyan

# Directory containing project JSON files
$projectsDir = Join-Path $PSScriptRoot "..\content\projects"

if (!(Test-Path $projectsDir)) {
    Write-Host "❌ No projects directory found at: $projectsDir" -ForegroundColor Red
    exit 1
}

# Default fields every project should have
$requiredFields = @{
    excerpt    = ""
    summary    = ""
    pinned     = $false
    featured   = $false
    updatedAt  = (Get-Date).ToString("yyyy-MM-dd")
}

# Process all JSON files
Get-ChildItem -LiteralPath $projectsDir -Filter *.json | ForEach-Object {

    $file = $_.FullName
    Write-Host "• Checking $($_.Name)..." -ForegroundColor Yellow

    # Backup
    $stamp = Get-Date -Format "yyyyMMdd-HHmmss"
    $backup = "$file.bak.$stamp"
    Copy-Item $file $backup -Force
    Write-Host "  ↳ Backup created: $(Split-Path $backup -Leaf)" -ForegroundColor DarkGray

    # Load JSON
    try {
        $json = Get-Content $file -Raw | ConvertFrom-Json
    }
    catch {
        Write-Host "  ❌ Invalid JSON: $file" -ForegroundColor Red
        return
    }

    $changed = $false

    # Ensure required fields
    foreach ($field in $requiredFields.Keys) {
        if (-not ($json.PSObject.Properties.Name -contains $field)) {
            # Missing → add
            $json | Add-Member -MemberType NoteProperty -Name $field -Value $requiredFields[$field]
            $changed = $true
            Write-Host "    + Added missing field: $field" -ForegroundColor Green
        }
        else {
            # Exists → ensure not null
            if ($null -eq $json.$field) {
                $json.$field = $requiredFields[$field]
                $changed = $true
                Write-Host "    ~ Repaired null field: $field" -ForegroundColor Cyan
            }
        }
    }

    # Write result
    if ($changed) {
        $json | ConvertTo-Json -Depth 10 | Set-Content -Path $file -Encoding UTF8
        Write-Host "  ↳ Updated: $($_.Name)" -ForegroundColor Green
    }
    else {
        Write-Host "  ↳ No changes needed" -ForegroundColor DarkGray
    }

}

Write-Host "`n✔ All project JSON normalized." -ForegroundColor Cyan
