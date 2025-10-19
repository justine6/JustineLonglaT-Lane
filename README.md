## 🚀 Release Workflow

This repo uses **Conventional Commits** + an automated **Cut-Release** script.

### Quick Start
1. Ensure you’re authenticated with GitHub CLI (`gh auth status`).
2. Generate/update the changelog and open a PR:
   ```powershell
   .\Cut-Release.ps1 -Stage prepare   # auto-creates chore/changelog-YYYYMMDD-HHmm + PR
