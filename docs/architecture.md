# 🧭 Jutellane Solutions — Full Architecture & Deployment Flow

> Explore the CI/CD orchestration and domain relationships across Jutellane’s live systems.

```mermaid
%%{init: {"theme": "base", "themeVariables": {
  "primaryColor": "#0ea5e9",
  "primaryTextColor": "#ffffff",
  "secondaryColor": "#10b981",
  "tertiaryColor": "#f59e0b",
  "lineColor": "#6b7280",
  "fontFamily": "Inter,Segoe UI,Helvetica,Arial"
}}}%%
flowchart LR
  classDef repo fill:#0ea5e9,stroke:#0369a1,color:#fff,stroke-width:1.5px;
  classDef actions fill:#10b981,stroke:#047857,color:#fff,stroke-width:1.5px;
  classDef dest fill:#f59e0b,stroke:#b45309,color:#111,stroke-width:1.5px;
  classDef dns fill:#e5e7eb,stroke:#6b7280,color:#111,stroke-width:1.5px;

  subgraph Repos
  A1[md→HTML (repo)]:::repo
  A2[jutellane-blogs (repo)]:::repo
  A3[Jutellane-Main (Next.js)]:::repo
  end

  subgraph CI/CD (GitHub Actions)
  B1[Build+Deploy Pages]:::actions
  B2[Docs Build]:::actions
  B3[Vercel Deploy]:::actions
  end

  subgraph Hosting
  C1[GitHub Pages]:::dest
  C2[GitHub Pages]:::dest
  C3[Vercel Edge/CDN]:::dest
  end

  subgraph Domains
  D1[generator.jutellane.com]:::dns
  D2[blogs.jutellane.com]:::dns
  D3[projects.jutellane.com]:::dns
  end

  A1 -->|push| B1 --> C1 --> D1
  A2 -->|push| B2 --> C2 --> D2
  A3 -->|push| B3 --> C3 --> D3
