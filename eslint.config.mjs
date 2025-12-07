import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  // Next.js + React + Core Web Vitals rules
  ...nextVitals,

  // Global ignores (instead of .eslintignore)
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "node_modules/**",
    "coverage/**",
    "dist/**",
  ]),
]);

export default eslintConfig;
