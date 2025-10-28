// tools/run-ps.js
// Usage: node tools/run-ps.js scripts/patch-missing.ps1 "--Flag" "Value"
const { existsSync } = require("fs");
const { spawn } = require("child_process");
const path = require("path");

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage: node tools/run-ps.js <path-to-ps1> [args...]");
  process.exit(1);
}

const ps1Path = path.resolve(args[0]);
const psArgs = args.slice(1);

if (!existsSync(ps1Path)) {
  console.log(`ℹ️  Skipped: '${ps1Path}' not found (ok for stubs).`);
  process.exit(0);
}

// Prefer pwsh, fall back to powershell (Windows PowerShell)
const pwsh = process.platform === "win32" ? "pwsh" : "pwsh";
const fallback = process.platform === "win32" ? "powershell" : "pwsh";

const tryRun = (exe) =>
  spawn(exe, ["-ExecutionPolicy", "Bypass", "-File", ps1Path, ...psArgs], {
    stdio: "inherit",
  });

let child = tryRun(pwsh);
child.on("error", () => {
  // Try legacy powershell if pwsh not present
  child = tryRun(fallback);
});
child.on("exit", (code) => process.exit(code));
