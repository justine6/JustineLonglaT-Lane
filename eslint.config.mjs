// eslint.config.mjs
import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

export default [
  // ============================================================
  // 0) Global ignores (keep lint fast + deterministic)
  // ============================================================
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "dist/**",
      "coverage/**",

      // Your intentional archives / templates
      "app/posts-backup-*/**",
      "app/projects/__template-case-study/**",
      "app/projects/__slug-archive/**",

      // Optional: generated content
      "**/*.d.ts",
    ],
  },

  // ============================================================
  // 1) Base JS + TS recommended (fast, non-type-aware)
  // ============================================================
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // ============================================================
  // 2) Common language options
  // ============================================================
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
  },

  // ============================================================
  // 3) React + Hooks (App Router safe defaults)
  // ============================================================
  {
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Next.js + React 17+ JSX transform
      "react/react-in-jsx-scope": "off",

      // Optional niceties
      "react/jsx-uses-react": "off",
      "react/prop-types": "off",
    },
  },

  // ============================================================
  // 4) Next.js (recommended + core web vitals)
  // ============================================================
  {
    plugins: { "@next/next": nextPlugin },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },

  // ============================================================
  // 5) Accessibility (public-facing site hygiene)
  // ============================================================
  {
    plugins: { "jsx-a11y": jsxA11y },
    rules: {
      ...jsxA11y.configs.recommended.rules,
    },
  },

  // ============================================================
  // 6) Imports hygiene + unused imports cleanup
  // ============================================================
  {
    plugins: {
      import: importPlugin,
      "unused-imports": unusedImports,
    },
    rules: {
      // Let TS handle unresolved paths/aliases best; keep this soft.
      "import/no-unresolved": "off",

      // Prefer consistent import ordering (simple + stable)
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      // Kill unused imports (best dev-experience)
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },

  // ============================================================
  // 7) Pragmatic repo-wide tuning (don’t block shipping)
  // ============================================================
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // handled by unused-imports
      "@typescript-eslint/no-explicit-any": "warn",

      // Keep logs clean in prod, but don’t ruin local dev
      "no-console": ["warn", { allow: ["warn", "error"] }],

      // Helpful correctness nits
      "no-debugger": "warn",
      "no-constant-binary-expression": "error",
    },
  },

  // ============================================================
  // 8) TypeScript file targeting (optional extra guardrails)
  // ============================================================
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Common TS ergonomics
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
    },
  },

  // ============================================================
  // 9) Node / tooling files (Node globals + allow require)
  // ============================================================
  {
    files: [
      "tools/**/*",
      "scripts/**/*",
      "**/*.config.*",
      "jest.config.*",
      "*.cjs",
      "*.mjs",
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        fetch: "readonly",
        URL: "readonly",
        console: "readonly",
      },
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "no-console": "off",
    },
  },

  // ============================================================
  // 10) next-env.d.ts (quiet the triple-slash noise)
  // ============================================================
  {
    files: ["next-env.d.ts"],
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
];
