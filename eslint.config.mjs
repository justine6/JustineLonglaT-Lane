import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig([globalIgnores([
    "app/page_backup-*.tsx",
    "app/page_backup-20251020-175345.tsx",
    "app/page_backup-20251020-175731.tsx",
    "app/declarations.d.ts",
    "app/posts/[slug]/open-graph-image.tsx",
    "**/.next/",
    "**/dist/",
    "**/out/",
    "**/coverage/",
    "**/node_modules/",
    "**/*.log",
    "**/*.tmp",
    "**/*.bak",
    "**/*.swp",
    "**/*.DS_Store",
]), {
    extends: [...nextCoreWebVitals, ...nextTypescript],
}]);