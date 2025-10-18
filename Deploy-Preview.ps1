param(
  [string]$Base = "main"   # default base branch
)

$ErrorActionPreference = "Stop"

# Ensure we're in a git repo
git rev-parse --is-inside-work-tree | Out-Null

# Create a unique preview branch
$branch = "preview/{0:yyyyMMdd-HHmmss}" -f (Get-Date)

Write-Host "📦 Creating preview branch: $branch" -ForegroundColor Cyan
git checkout -b $branch

# Commit any staged/unstaged changes
$dirty = (git status --porcelain)
if ($dirty) {
  git add -A
  git commit -m ("chore(preview): auto commit @ {0}" -f (Get-Date -Format "s"))
} else {
  Write-Host "No local changes to commit — using current state." -ForegroundColor Yellow
}

# Push branch and open PR
git push -u origin $branch
Write-Host "🌿 Branch pushed to origin." -ForegroundColor Green

# Create PR automatically
gh pr create --fill --base $Base --head $branch

# Display PR link
$pr = (gh pr view --json url | ConvertFrom-Json).url
Write-Host "`n✅ Preview PR created: $pr" -ForegroundColor Green
Write-Host "🔗 Vercel will automatically deploy a Preview build. Check PR checks for URL." -ForegroundColor Cyan

# Optional: open PR in browser
gh pr view --web | Out-Null
