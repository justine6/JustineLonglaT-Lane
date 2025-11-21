## Docs publishing (GitHub Pages)

![Docs Deploy Status](https://github.com/JustineLonglaT-Lane/JustineLonglaT-Lane/actions/workflows/docs-pages.yml/badge.svg)
![CI Status](https://github.com/JustineLonglaT-Lane/JustineLonglaT-Lane/actions/workflows/ci.yml/badge.svg)


The `/docs` folder is deployed automatically to GitHub Pages using
`.github/workflows/docs-pages.yml`.

**How it works**

- The `Docs – Deploy to GitHub Pages` workflow runs when:
  - Changes are pushed to the `main` branch that touch:
    - `docs/**`
    - `.github/workflows/docs-pages.yml`
  - Or when it is triggered manually via **Actions → Docs – Deploy to GitHub Pages → Run workflow**.
- The workflow:
  1. Checks out the repository
  2. Configures GitHub Pages
  3. Uploads the `docs/` folder as a Pages artifact
  4. Deploys that artifact to GitHub Pages

**Where the docs live**

- The docs are served from GitHub Pages for this repository.
- Public URL (adjust if you’re using a custom domain):

  `https://<your-github-username>.github.io/JustineLonglaT-Lane/`
