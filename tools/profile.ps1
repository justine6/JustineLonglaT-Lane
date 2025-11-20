# Dev shortcuts for Jutellane main site

function npb {
  # npm build
  Write-Host "> npm run build" -ForegroundColor Cyan
  npm run build
}

function npp {
  # npm preview (if you use it)
  Write-Host "> npm run preview" -ForegroundColor Cyan
  npm run preview
}

function npd {
  # npm dev server
  Write-Host "> npm run dev" -ForegroundColor Cyan
  npm run dev
}

function check-all {
  Write-Host "> check-all" -ForegroundColor Cyan

  # 1) dictionaries / content checks
  node tools/run-ps.cjs scripts/check-dictionaries.ps1
  if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

  # 2) JSON / metadata validation
  node tools/run-ps.cjs scripts/validate-and-repair-json.ps1
  if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

  Write-Host "✔ check-all completed" -ForegroundColor Green
}

Write-Host "✔ Custom shortcuts loaded (functions): npb, npp, npd, check-all" -ForegroundColor Cyan
