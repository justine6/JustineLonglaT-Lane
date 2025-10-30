// vitest.config.ts
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [tsconfigPaths({ projects: ["./tsconfig.json"] })],
  resolve: { alias: { "@": fileURLToPath(new URL("./", import.meta.url)) } },
  test: {
    globals: true,
    environment: "node",
    passWithNoTests: true,
    include: ["**/*.{test,spec}.{ts,tsx}"],
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.next/**",
      "**/coverage/**",
      "**/{vite,vitest,rollup,webpack,jest,ava,babel,nyc,tsup,build,eslint,prettier}.config.*"
    ],
    coverage: { provider: "v8", reportsDirectory: "coverage", reporter: ["text", "html"] }
  }
});
