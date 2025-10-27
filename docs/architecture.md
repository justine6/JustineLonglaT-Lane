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
    classDef repo fill:#0ea5e9,stroke:#0369a1,color:#fff,stroke-width:1.2px;
    classDef actions fill:#10b981,stroke:#047857,color:#fff,stroke-width:1.2px;
    classDef host fill:#f59e0b,stroke:#b45309,color:#111,stroke-width:1.2px;
    classDef dns fill:#e5e7eb,stroke:#6b7280,color:#111,stroke-width:1.2px;

    A1["md→HTML (repo)"]:::repo -->|push| B1["Build+Deploy Pages"]:::actions --> C1["GitHub Pages"]:::host --> D1["generator.jutellane.com"]:::dns
    A2["jutellane-blogs (repo)"]:::repo -->|push| B2["Docs Build"]:::actions --> C2["GitHub Pages"]:::host --> D2["blogs.jutellane.com"]:::dns
    A3["Jutellane-Main (Next.js)"]:::repo -->|push| B3["Vercel Deploy"]:::actions --> C3["Vercel Edge/CDN"]:::host --> D3["projects.jutellane.com"]:::dns
