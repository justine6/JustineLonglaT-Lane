const fs = require("fs");

const pkgPath = "package.json";
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

pkg.scripts = {
  // 🔹 Dev & Build
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint .",
  "prepare": "husky install",
  "postdev": "npm run clean:locks",

  // 🔹 Dictionary Scaffolding & Checks
  "check-dicts": "powershell -ExecutionPolicy Bypass -File scripts/check-dicts.ps1",
  "scaffold:dicts": "powershell -ExecutionPolicy Bypass -File ./scripts/scaffold-minimal-dicts.ps1",
  "i18n-validate": "npm run scaffold:dicts && npm run check-dicts",
  "check-dicts:strict": "node scripts/checks/check-dicts.js --strict",
  "check-dicts:powershell": "powershell -ExecutionPolicy Bypass -File scripts/check-dictionaries.ps1",
  "check-dicts:auto": "node scripts/check-dicts-auto.mjs",

  // 🔹 Translation & Meta Checks
  "check-meta": "node scripts/checks/check-meta.js",
  "check-required-only": "node scripts/checks/check-required-only.js",
  "check-translation-sync": "node scripts/checks/check-translation-sync.js",
  "check-translation-sync:strict": "node scripts/checks/check-translation-sync.js --strict",
  "check-topbar-footer": "node scripts/checks/check-topbar-footer.js",
  "check-topbar-footer:strict": "node scripts/checks/check-topbar-footer.js --strict",
  "check-all": "node scripts/check-all.mjs",
  "check-all:strict": "node scripts/check-all.mjs strict",
  "check-all:dry-run": "echo Would run: check-dicts → check-meta → check-required-only → check-translation-sync → check-topbar-footer",

  // 🔹 Patch & Repair
  "patch-all": "npm run patch-missing && npm run fix-topbar-footer",
  "patch-dicts": "powershell -ExecutionPolicy Bypass -File scripts/check-dictionaries.ps1 -patch",
  "patch-dicts:force": "powershell -ExecutionPolicy Bypass -File scripts/check-dictionaries.ps1 -patch -force",
  "patch-dicts:powershell": "powershell -ExecutionPolicy Bypass -File scripts/check-dictionaries.ps1 -patch",
  "patch-missing": "powershell -ExecutionPolicy Bypass -File scripts/patch-missing.ps1",
  "fix-footer": "powershell -ExecutionPolicy Bypass -File scripts/fix-footer.ps1",
  "fix-topbar-footer": "npm run fix-footer",
  "fix-all": "node scripts/patches/fix-all.mjs",
  "fix-all:dry-run": "echo Would run: patch-dicts → patch-missing → fix-footer",
  "repair": "npm run fix-all && npm run check-all",
  "repair:dry-run": "echo Would run: patch-dicts → patch-missing → fix-footer → check-all",
  "repair:quick": "npm run patch-all && npm run check-all",
  "repair:force": "npm run patch-dicts:force && npm run fix-all && npm run check-all",
  "repair:strict": "npm run patch-all && npm run check-all:strict && npm run lint && npm run coverage:strict",

  // 🔹 Sync & Validation
  "validate:repair": "pwsh -ExecutionPolicy Bypass -File ./scripts/validate-and-repair-json.ps1",
  "sync": "pwsh -ExecutionPolicy Bypass -File ./scripts/sync-dicts.ps1",
  "sync:verbose": "pwsh -ExecutionPolicy Bypass -File ./scripts/sync-dicts.ps1 -ShowSkipped",
  "sync:all": "pwsh -ExecutionPolicy Bypass -Command \" $runTime = Get-Date -Format 'yyyy-MM-dd_HH-mm-ss'; $logFile = \\\"./logs/sync-all-$runTime.txt\\\"; try { npm run validate:repair } catch { Write-Host (\\\"❌ Validation failed at $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')\\\") -ForegroundColor Red; Write-Host $_.Exception.Message -ForegroundColor DarkRed; \\\"[VALIDATION ERROR] $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') : $($_.Exception.Message)\\\" | Out-File -FilePath $logFile -Encoding UTF8 -Append; Write-Host (\\\"📄 Error details saved: $logFile\\\") -ForegroundColor Red; process.exit(1) } ; try { npm run sync:verbose; $summary = @(); $summary += '=== Validation + Sync Summary ==='; $summary += \\\"🕒 Run at: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')\\\"; $v = Get-Content ./scripts/validate-repair-stats.json | ConvertFrom-Json; $s = Get-Content ./scripts/sync-stats.json | ConvertFrom-Json; $summary += \\\"✅ Validation: $($v.Valid) valid, $($v.RepairedEmpty) empty repaired, $($v.RepairedInvalid) invalid repaired\\\"; if ($s.Created -gt 0 -or $s.Updated -gt 0) { $summary += \\\"⚠️ Sync: $($s.Created) created, $($s.Updated) updated, $($s.Skipped) skipped\\\" } else { $summary += \\\"✅ Sync: $($s.Created) created, $($s.Updated) updated, $($s.Skipped) skipped\\\" }; $sum=0; $count=0; foreach ($k in $s.Locales.PSObject.Properties.Name) { $loc = $s.Locales.$k; $sum+=$loc.Completion; $count++ }; if ($count -gt 0) { $avg=[math]::Round($sum/$count,2); $summary += \\\"📊 Overall completion: $avg%\\\" }; $summary += ''; $summary += '🌍 Per-locale Completion:'; foreach ($k in $s.Locales.PSObject.Properties.Name) { $loc = $s.Locales.$k; $summary += \\\"   $k → $($loc.Completion)% ($($loc.FoundKeys)/$($loc.TotalKeys))\\\" }; $summary += ''; $summary += \\\"📄 Full details: $($s.LogFile)\\\"; $summary += \\\"✨ Sync completed successfully at $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')\\\"; $summary | Tee-Object -FilePath $logFile -Encoding UTF8 | ForEach-Object { Write-Host $_ -ForegroundColor Green }; Write-Host (\\\"📄 Full run log saved: $logFile\\\") -ForegroundColor Cyan } catch { Write-Host (\\\"❌ Sync failed at $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')\\\") -ForegroundColor Red; Write-Host $_.Exception.Message -ForegroundColor DarkRed; \\\"[SYNC ERROR] $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') : $($_.Exception.Message)\\\" | Out-File -FilePath $logFile -Encoding UTF8 -Append; Write-Host (\\\"📄 Error details saved: $logFile\\\") -ForegroundColor Red; process.exit(1) } ; $logs = Get-ChildItem ./logs/sync-all-*.txt | Sort-Object LastWriteTime -Descending; if ($logs.Count -gt 20) { $logs | Select-Object -Skip 20 | Remove-Item -Force; Write-Host (\\\"🧹 Cleaned up old logs, kept last 20.\\\") -ForegroundColor DarkGray } \"",

  // 🔹 Cleanup (Hybrid: logs + stats + all)
  "clean:locks": "rimraf .devserver-opened .no-auto-browser",
  "clean:logs": "pwsh -ExecutionPolicy Bypass -Command \" $logFile = './logs/cleanup-log.txt'; if (!(Test-Path ./logs)) { New-Item -ItemType Directory -Path ./logs | Out-Null; Write-Host '📂 Logs folder created.' -ForegroundColor Yellow }; if (Test-Path ./logs/*) { Remove-Item ./logs/* -Force -Recurse; Write-Host '🧹 Logs folder cleared.' -ForegroundColor Yellow; Add-Content -Path $logFile -Value ('[' + (Get-Date -Format 'yyyy-MM-dd HH:mm:ss') + '] Logs folder cleared.') } else { Write-Host '📂 Logs folder already empty.' -ForegroundColor Yellow; Add-Content -Path $logFile -Value ('[' + (Get-Date -Format 'yyyy-MM-dd HH:mm:ss') + '] Logs folder already empty.') }\"",
  "clean:stats": "pwsh -ExecutionPolicy Bypass -Command \" $logFile = './logs/cleanup-log.txt'; if (Test-Path ./scripts/validate-repair-stats.json) { Remove-Item ./scripts/validate-repair-stats.json -Force; Write-Host '🧹 Validation stats cleared.' -ForegroundColor Yellow; Add-Content -Path $logFile -Value ('[' + (Get-Date -Format 'yyyy-MM-dd HH:mm:ss') + '] Validation stats cleared.') }; if (Test-Path ./scripts/sync-stats.json) { Remove-Item ./scripts/sync-stats.json -Force; Write-Host '🧹 Sync stats cleared.' -ForegroundColor Yellow; Add-Content -Path $logFile -Value ('[' + (Get-Date -Format 'yyyy-MM-dd HH:mm:ss') + '] Sync stats cleared.') }\"",
  "clean:all": "npm run clean:logs && npm run clean:stats && pwsh -ExecutionPolicy Bypass -Command \" $logFile = './logs/cleanup-log.txt'; Write-Host '✨ Project cleanup complete.' -ForegroundColor Green; Add-Content -Path $logFile -Value ('[' + (Get-Date -Format 'yyyy-MM-dd HH:mm:ss') + '] Project cleanup complete.') \"",
  "clean:dicts": "node scripts/clean-dicts.js",
  "clean": "npm run clean:all && npm run clean:dicts",

  // 🔹 Test & Coverage
  "test": "npm run clean:dicts && vitest",
  "test:coverage": "vitest run --coverage",
  "coverage:strict": "vitest run --coverage --passWithNoTests=false",
  "coverage:report": "vitest run --coverage || true",
  "coverage:view": "npm run test:coverage && npx open-cli coverage/index.html",

  // 🔹 CI/CD
  "ci-check": "pwsh -ExecutionPolicy Bypass -File scripts/ci-check.ps1",
  "ci-check:dry-run": "echo Would run CI pipeline: clean → check-all:strict → lint → coverage:strict",
  "ci-check:strict": "pwsh -ExecutionPolicy Bypass -File scripts/ci-check.ps1 -strict",
  "ci-repair": "npm run repair:force && npm run check-all:strict && npm run lint && npm run coverage:strict",
  "ci-repair:dry-run": "echo Would run CI repair pipeline: repair:force → check-all:strict → lint → coverage:strict",

  // 🔹 Restore & Generate
  "restore-dicts:node": "node scripts/restore-dicts.js",
  "restore-dicts:force": "node scripts/restore-dicts.js --force",
  "restore-dicts:powershell": "powershell -ExecutionPolicy Bypass -File scripts/check-dictionaries.ps1 -restore",
  "update-dicts:full": "powershell -ExecutionPolicy Bypass -File scripts/Update-Dictionaries-Full.ps1",
  "update-dicts:incremental": "powershell -ExecutionPolicy Bypass -File scripts/Update-Dictionaries-Incremental.ps1",
  "generate-types": "powershell -ExecutionPolicy Bypass -File scripts/generate-types.ps1"
};

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
console.log("✅ package.json scripts updated. Count =", Object.keys(pkg.scripts).length);
