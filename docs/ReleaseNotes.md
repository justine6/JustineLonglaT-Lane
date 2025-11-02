## v2.5.0 — Cal.com Integration & Production Parity (October 2025)

### ✨ Highlights
- **Cal.com Scheduling Integration** — Seamlessly embedded scheduling workflow under `/intro-call` with fallback redirect support.
- **Responsive Layout Overhaul** — Unified grid and typography scaling across hero, footer, and navbar components for consistent UX.
- **Footer & Hero CTAs Finalized** — Polished “Schedule Your Intro Call” and résumé/download call-to-actions.
- **Refined MDX Support** — Introduced `@next/mdx` with `remark-gfm` for better markdown rendering and content authoring.
- **Improved Release Workflow** — Added `Cut-Release.ps1` for automated tagging, versioning, and deployment preparation.
- **Testing & Coverage Validation** — Verified all unit tests via Vitest (`lib/email-templates.*`), with ~68% coverage and all tests passing.
- **Docs Synchronization** — Updated developer utilities and CI/CD flow documentation for full project alignment.

### 🧪 Validation Summary
- ✅ All tests passed (`vitest run --coverage`)
- ✅ Build verified locally via `npm run build`
- ✅ Tag created and pushed: `v2.5.0`
- ✅ Branch: `feat/hero-prod-match` → `origin/feat/hero-prod-match`

### 🔗 Links
- GitHub Tag: [v2.5.0](https://github.com/justine6/Jutellane-Solutions/releases/tag/v2.5.0)
- Live Preview: `https://jutellane-solutions.vercel.app`
- Docs Reference: [`developer-utilities.md`](./developer-utilities.md)

> This release brings the Jutellane Solutions site to **production parity**, fully integrated, tested, and deployment-ready.

## 🚀 v2.5.0 — Intro Call Integration & UI Polishing (2025-10-30)

### ✨ Highlights
- Embedded **Cal.com** scheduler on `/intro-call`
- Added internal redirects `/schedule` → `/intro-call`
- Unified hero, footer, and responsive layout
- Enhanced button consistency and hover transitions

### 🧩 Improvements
- Updated `next.config.js` and `LINKS` for internal routing
- Normalized CRLF/LF line endings
- Improved dark/light theme blending and text readability
- Finalized layout alignment across sections

### 🧪 QA & Test
- ✅ 3/3 tests passed via Vitest v4.0.4  
- 📊 Coverage: 68.75% statements, 85.71% functions  
- Verified `/intro-call` embed functionality (200 OK status)  

### 📦 Deployment
- Tagged as **v2.5.0**  
- Promoted to production via **Vercel**  
- Environment parity confirmed between Dev & Prod builds  

---

> “Cloud Confidence. Delivered.” — v2.5.0 marks the official Cal.com scheduling integration milestone.
