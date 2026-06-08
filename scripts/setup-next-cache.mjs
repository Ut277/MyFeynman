import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const linkPath = path.join(process.cwd(), ".next");
const externalCache = path.join(
  process.env.LOCALAPPDATA ?? "",
  "orange-labs-website-cache",
  ".next"
);

// Remove broken junction from earlier attempts
if (fs.existsSync(linkPath)) {
  try {
    execSync(`cmd /c rmdir "${linkPath}"`, { stdio: "pipe" });
  } catch {
    fs.rmSync(linkPath, { recursive: true, force: true });
  }
}

// Remove external cache from failed distDir experiments
if (fs.existsSync(externalCache)) {
  fs.rmSync(externalCache, { recursive: true, force: true });
}

console.log("Next.js cache ready (fresh .next on each dev/build start).");
