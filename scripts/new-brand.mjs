#!/usr/bin/env node
// Usage: npm run new-brand -- <brand-id> "Clinic Name"
// Copies the starter brand into brands/<id>.ts, public/brands/<id>/ and content/<id>/blog/.
import fs from "node:fs";
import path from "node:path";

const [id, ...nameParts] = process.argv.slice(2);
const name = nameParts.join(" ").trim();
if (!id || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id) || !name) {
  console.error('Usage: npm run new-brand -- <brand-id> "Clinic Name"   (id: lowercase letters, digits, dashes)');
  process.exit(1);
}
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const target = path.join(root, "brands", `${id}.ts`);
if (fs.existsSync(target)) { console.error(`brands/${id}.ts already exists`); process.exit(1); }

const upper = name.toUpperCase().split(/\s+/);
const half = Math.ceil(upper.length / 2);
const src = fs.readFileSync(path.join(root, "brands", "starter.ts"), "utf8")
  .replace('const ID = "starter";', `const ID = "${id}";`)
  .replace('const NAME = "Your Clinic";', `const NAME = ${JSON.stringify(name)};`)
  .replace('{ line1: "YOUR", line2: "CLINIC" }', `{ line1: ${JSON.stringify(upper.slice(0, half).join(" "))}, line2: ${JSON.stringify(upper.slice(half).join(" "))} }`);
fs.writeFileSync(target, src);

fs.cpSync(path.join(root, "public/brands/starter"), path.join(root, "public/brands", id), { recursive: true });
fs.cpSync(path.join(root, "content/starter"), path.join(root, "content", id), { recursive: true });
const initial = name[0].toUpperCase();
for (const f of ["logo.svg", "favicon.svg"]) {
  const p = path.join(root, "public/brands", id, f);
  fs.writeFileSync(p, fs.readFileSync(p, "utf8").replace("YOUR CLINIC", name.toUpperCase()).replace('aria-label="Your Clinic"', `aria-label="${name}"`).replace(">C</text>", `>${initial}</text>`));
}
console.log(`Created brands/${id}.ts, public/brands/${id}/, content/${id}/blog/\nRun:  NEXT_PUBLIC_BRAND=${id} npm run dev\nThen edit the SETTINGS block at the top of brands/${id}.ts.`);
