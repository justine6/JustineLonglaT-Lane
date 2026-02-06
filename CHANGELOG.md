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

## [2.0.0] - 2025-11-25
### Milestone
- Officially rebranded the site as **JustineLonglaT Consulting**
- Treated this as the new baseline for consulting-era growth

### Added
- Refined homepage hero copy aligned to the consulting brand
- Clear CTA row: Intro Call booking, brochure download, and ways to work together
- Stronger narrative around who Justine is and what clients can expect

### Improved
- Consistent naming and wording across navigation, titles, and metadata
- Better structure to support future case studies, offers, and content expansions
[2.0.0]: https://github.com/justine6/<YOUR-REPO>/releases/tag/v2.0.0

feat: v2.0.0 — JustineLonglaT Consulting milestone

- Locked in new brand name across the site: “JustineLonglaT Consulting”
- Polished hero copy, CTAs, and intro call funnel for clarity and impact
- Wired brochure download as a first-class call-to-action
- Confirmed live branding before tagging this milestone release
- Prepared the ground for future case studies, offers, and empire-building content

This release marks the official consulting-era baseline for JustineLonglaT-Lane.
## [v1.3.0] - 2026-02-06

### 🎯 Mesh Platform Stabilization Release

This release locks in the stable architecture of the **Engineering Mesh** and booking flow.  
It serves as a freeze point before future UI and feature enhancements.

### Added
- Mesh case studies component (`MeshImpactStories`)
- Markdown-driven project case study routes
- Cal.com booking embed integration
- Scoped security headers via middleware for booking routes

### Changed
- Standardized internal vs external link handling across mesh cards and resources
- Refactored Engineering Mesh hero and upper layout for stability and consistency
- Updated route usage to use `LINKS.introCall` (not `LINKS.calIntro`)

### Fixed
- Build/runtime issues caused by mismatched link wrappers
- Intro Call navigation not triggering correctly from topbar
- Overly broad CSP scope affecting unrelated pages

### Verified
- `next build` successful
- `next dev` navigation and CTAs validated
- Booking + Intro Call flows working end-to-end
