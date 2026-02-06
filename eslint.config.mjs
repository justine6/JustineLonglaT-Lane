// eslint.config.mjs
import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  // Base recommendations
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Next.js rules
  {
    plugins: { "@next/next": nextPlugin },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },

  // React hooks rules (fixes: "Definition for rule ... not found")
  {
    plugins: { "react-hooks": reactHooks },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },

  // Global ignores
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "dist/**",
      "coverage/**",
      // If these are intentionally archived:
      "app/posts-backup-*/**",
      "app/projects/__template-case-study/**",
      "app/projects/__slug-archive/**",
    ],
  },

  // Pragmatic repo-wide tuning (so lint doesn't block you today)
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },

  // Node / tooling files should use Node globals
  {
    files: [
      "tools/**/*",
      "**/*.config.*",
      "jest.config.js",
      "tools/**/*.cjs",
      "tools/**/*.mjs",
    ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Allow require in Node scripts if you want (optional)
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
  files: ["next-env.d.ts"],
  rules: {
    "@typescript-eslint/triple-slash-reference": "off",
  },
},

  // If you have scripts that use fetch in Node 18+,
  // treat fetch/URL as globals for tooling scripts too.
  {
    files: ["tools/**/*", "tools/**/*.mjs"],
    languageOptions: {
      globals: {
        ...globals.node,
        fetch: "readonly",
        URL: "readonly",
        console: "readonly",
      },
    },
  },
];
