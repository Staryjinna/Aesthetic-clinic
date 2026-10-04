import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { BRAND_ID } from "./brand";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  tags: string[];
  featured: boolean;
  image?: string;
  readingMinutes: number;
}
export interface Post extends PostMeta { html: string }

const dir = path.join(process.cwd(), "content", BRAND_ID, "blog");

/** Minimal front matter parser: `key: value` lines, JSON-style arrays and quoted strings. */
function parse(raw: string) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { data: {} as Record<string, unknown>, body: raw };
  const data: Record<string, unknown> = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i < 0) continue;
    const v = line.slice(i + 1).trim();
    try { data[line.slice(0, i).trim()] = JSON.parse(v); } catch { data[line.slice(0, i).trim()] = v; }
  }
  return { data, body: m[2] };
}

const readAll = (): Post[] => {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md")).map((f) => {
    const { data, body } = parse(fs.readFileSync(path.join(dir, f), "utf8"));
    const words = body.split(/\s+/).length;
    return {
      slug: f.replace(/\.md$/, ""),
      title: String(data.title ?? f),
      date: String(data.date ?? "2026-01-01"),
      excerpt: String(data.excerpt ?? ""),
      category: String(data.category ?? "General"),
      tags: (data.tags as string[]) ?? [],
      featured: data.featured === true,
      image: data.image as string | undefined,
      readingMinutes: Math.max(1, Math.round(words / 200)),
      html: marked.parse(body, { async: false }) as string,
    };
  }).sort((a, b) => b.date.localeCompare(a.date));
};

export const getPosts = (): PostMeta[] => readAll().map(({ html: _h, ...m }) => m);
export const getPost = (slug: string): Post | undefined => readAll().find((p) => p.slug === slug);
