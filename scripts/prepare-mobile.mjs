import { cp, mkdir, rm, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const webDir = path.join(root, "www");
const requiredFiles = [
  "index.html",
  "style.css",
  "app.js",
  "features.js",
  "ai-config.js",
  "manifest.webmanifest",
  "sw.js"
];

await rm(webDir, { recursive: true, force: true });
await mkdir(webDir, { recursive: true });

for (const file of requiredFiles) {
  const source = path.join(root, file);
  try {
    await stat(source);
  } catch {
    throw new Error(`Required app file is missing: ${file}`);
  }
  await cp(source, path.join(webDir, file));
}

await cp(path.join(root, "assets"), path.join(webDir, "assets"), { recursive: true });
console.log("Mobile web bundle prepared in ./www");
