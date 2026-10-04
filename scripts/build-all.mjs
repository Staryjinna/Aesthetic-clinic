#!/usr/bin/env node
// Builds every brand in brands/ (except types) to check each one compiles.
import fs from "node:fs";
import { execSync } from "node:child_process";
const ids = fs.readdirSync("brands").filter((f) => f.endsWith(".ts") && f !== "types.ts").map((f) => f.replace(/\.ts$/, ""));
for (const id of ids) {
  console.log(`\n=== Building ${id} ===`);
  execSync("npx next build", { stdio: "inherit", env: { ...process.env, NEXT_PUBLIC_BRAND: id } });
}
