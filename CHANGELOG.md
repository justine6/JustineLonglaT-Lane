## [v2.5.0] - 2025-10-30

### Added
- Cal.com scheduling integration with dynamic iframe and fallback routing.
- Automated PowerShell release script (`Cut-Release.ps1`) for tagging and publishing.
- New responsive layout consistency across hero, footer, and navigation components.
- New docs: developer utilities, CI/CD process, release consistency.

### Changed
- Footer and Hero section refactored to align with production parity design.
- Updated README and documentation links.
- Enhanced MDX rendering and content authoring support via `remark-gfm`.

### Fixed
- Cal.com scheduling 404 fallback.
- Layout margin inconsistencies between hero and navbar.

### Testing
- Verified using Vitest with coverage reports.
- Coverage summary: 68.75% statements / 85.71% functions — all suites passed.
