import { z } from "zod";
import raw from "@/content/atlas.json";

const navItem = z.object({ icon: z.string(), label: z.string(), to: z.string() });
const notif = z.object({
  id: z.string(), title: z.string(), desc: z.string(),
  time: z.string(), unread: z.boolean(), to: z.string(),
});
const search = z.object({
  type: z.string(), title: z.string(), group: z.string(),
  to: z.string(), keywords: z.string(),
});

// Loose passthrough for the per-page config so authors can extend freely.
const anyPage = z.record(z.any());

export const atlasSchema = z.object({
  nav: z.array(navItem).min(1),
  notifications: z.array(notif),
  searchIndex: z.array(search),
}).passthrough().and(z.record(z.any()));

export type AtlasContent = typeof raw;

export type AtlasValidation =
  | { ok: true; data: AtlasContent; issues: [] }
  | { ok: false; data: AtlasContent; issues: { path: string; message: string }[] };

export function validateAtlas(): AtlasValidation {
  const result = atlasSchema.safeParse(raw);
  if (result.success) return { ok: true, data: raw as AtlasContent, issues: [] };
  const issues = result.error.issues.map((i) => ({
    path: i.path.join(".") || "(root)",
    message: i.message,
  }));
  return { ok: false, data: raw as AtlasContent, issues };
}

// Entity vs Article classification for global search grouping.
export const ARTICLE_TYPES = new Set(["Article", "Case", "Practice", "Dataset"]);
export const ENTITY_TYPES = new Set(["Topic", "Insight", "KPI"]);

export function classifySearchType(type: string): "article" | "entity" {
  if (ARTICLE_TYPES.has(type)) return "article";
  if (ENTITY_TYPES.has(type)) return "entity";
  return "entity";
}