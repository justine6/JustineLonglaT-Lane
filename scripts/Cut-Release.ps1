param(
  [Parameter(Mandatory)][string]$Version,
  [switch]$DryRun,
  [switch]$Verbose
)

Write-Host "🔹 Preparing release for version $Version" -ForegroundColor Cyan

# Step 1: Verify Git clean state
$gitStatus = git status --porcelain
if ($gitStatus) {
  Write-Host "⚠️ Working directory not clean. Commit or stash changes before release." -ForegroundColor Yellow
  exit 1
}

# Step 2: Tag creation
$tagName = "v$Version"
$tagExists = git tag --list $tagName
if ($tagExists) {
  Write-Host "❌ Tag $tagName already exists." -ForegroundColor Red
  exit 1
}

if ($DryRun) {
  Write-Host "🧪 Dry run only. Tag not created." -ForegroundColor DarkCyan
  exit 0
}

# Step 3: Create annotated tag and push
git tag -a $tagName -m "release: $tagName"
git push origin $tagName

Write-Host "✅ Tag $tagName created and pushed successfully!" -ForegroundColor Green
