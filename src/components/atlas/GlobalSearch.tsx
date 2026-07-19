import { useEffect, useMemo, useRef, useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import atlas from "@/content/atlas.json";
import { classifySearchType } from "@/lib/atlas-schema";
import { track } from "@/lib/analytics";

type SearchItem = {
  id?: string; type: string; title: string; group: string; to: string; keywords: string; anchor?: string;
};
type Ranked = SearchItem & { score: number; kind: "article" | "entity" };

type Filter = "all" | "entity" | "article" | "knowledge" | "intelligence";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "entity", label: "Entities" },
  { id: "article", label: "Articles" },
  { id: "knowledge", label: "Knowledge Hub" },
  { id: "intelligence", label: "Impact Intelligence" },
];

function score(item: SearchItem, q: string): number {
  const title = item.title.toLowerCase();
  const kw = item.keywords.toLowerCase();
  const group = item.group.toLowerCase();
  if (title === q) return 1000;
  if (title.startsWith(q)) return 500;
  let s = 0;
  if (title.includes(q)) s += 200;
  // word-boundary boost
  if (new RegExp(`\\b${q.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}`).test(title)) s += 120;
  if (kw.includes(q)) s += 60;
  if (group.includes(q)) s += 30;
  return s;
}

export function GlobalSearch() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const lastQueryRef = useRef<string>("");

  const ranked = useMemo<Ranked[]>(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];
    const items = (atlas.searchIndex as SearchItem[])
      .map((it) => {
        const s = score(it, query);
        return s > 0 ? { ...it, score: s, kind: classifySearchType(it.type) } : null;
      })
      .filter((x): x is Ranked => x !== null)
      .filter((x) => {
        if (filter === "all") return true;
        if (filter === "entity" || filter === "article") return x.kind === filter;
        if (filter === "knowledge") return x.group === "Knowledge Hub";
        if (filter === "intelligence") return x.group === "Impact Intelligence";
        return true;
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 12);
    return items;
  }, [q, filter]);

  const groups = useMemo(() => {
    const entities = ranked.filter((r) => r.kind === "entity");
    const articles = ranked.filter((r) => r.kind === "article");
    return { entities, articles };
  }, [ranked]);

  // Flat list mirroring visual order for keyboard nav.
  const flat = useMemo(() => [...groups.entities, ...groups.articles], [groups]);

  useEffect(() => { setActive(0); }, [q, filter]);

  // Debounced query analytics: fires once per settled query.
  useEffect(() => {
    const query = q.trim();
    if (!query) return;
    const t = window.setTimeout(() => {
      if (lastQueryRef.current === query) return;
      lastQueryRef.current = query;
      track("search_query", { q: query, filter, resultCount: flat.length });
      if (flat.length === 0) track("search_zero_results", { q: query, filter });
    }, 400);
    return () => window.clearTimeout(t);
  }, [q, filter, flat.length]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const commit = (i: number, source: "keyboard" | "mouse" = "keyboard") => {
    const hit = flat[i];
    if (!hit) return;
    const query = q.trim();
    track("search_result_open", {
      id: hit.id ?? hit.title,
      kind: hit.kind,
      route: hit.to,
      source,
      q: query,
    });
    setOpen(false);
    setQ("");
    // Deep-link: forward the query + matched id so the target route can
    // highlight and scroll to the exact entity/article.
    navigate({
      to: hit.to,
      search: (prev: Record<string, unknown>) => ({
        ...prev,
        q: query || undefined,
        match: hit.id,
      }),
      hash: hit.anchor,
    });
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(flat.length - 1, a + 1));
      track("search_keyboard_nav", { key: "ArrowDown" });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(0, a - 1));
      track("search_keyboard_nav", { key: "ArrowUp" });
    } else if (e.key === "Enter") {
      e.preventDefault();
      track("search_keyboard_nav", { key: "Enter", index: active });
      commit(active, "keyboard");
    } else if (e.key === "Escape") {
      track("search_keyboard_nav", { key: "Escape" });
      setOpen(false);
    }
  };

  const renderRow = (r: Ranked, idx: number) => (
    <button
      key={r.title + r.to}
      onMouseEnter={() => setActive(idx)}
      onClick={() => commit(idx, "mouse")}
      className={`w-full text-left px-4 py-2.5 flex items-center gap-3 border-b border-white/5 last:border-b-0 ${
        idx === active ? "bg-cyan-400/10" : "hover:bg-white/5"
      }`}
    >
      <span className="text-[9px] tracking-widest text-cyan-300 border border-cyan-400/30 rounded px-1.5 py-0.5 shrink-0">{r.type}</span>
      <div className="min-w-0 flex-1">
        <div className="text-[12px] text-white truncate">{r.title}</div>
        <div className="text-[10px] text-slate-500">{r.group}</div>
      </div>
    </button>
  );

  return (
    <div className="flex-1 max-w-xl relative" ref={wrapRef}>
      <SearchIcon className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
      <input
        ref={inputRef}
        value={q}
        onChange={(e) => { setQ(e.target.value); setOpen(true); }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKey}
        placeholder="Search entities & articles…  (⌘K)"
        className="w-full h-10 rounded-full bg-white/5 border border-white/10 pl-11 pr-14 text-[13px] text-slate-300 placeholder:text-slate-500 outline-none focus:border-cyan-400/40"
        role="combobox"
        aria-expanded={open}
        aria-controls="global-search-listbox"
      />
      <kbd className="hidden md:inline absolute right-3 top-1/2 -translate-y-1/2 text-[9px] tracking-widest text-slate-500 border border-white/10 rounded px-1.5 py-0.5">⌘K</kbd>

      {open && (
        <div className="absolute left-0 right-0 top-12 z-40 rounded-xl border border-white/10 bg-[#0c1830] shadow-2xl overflow-hidden">
          <div className="flex gap-1 px-3 py-2 border-b border-white/5 overflow-x-auto">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  setFilter(f.id);
                  track("search_filter_change", { filter: f.id, q: q.trim() });
                }}
                className={`shrink-0 h-6 px-2.5 rounded-full text-[10px] tracking-wide border ${
                  filter === f.id
                    ? "bg-cyan-400/15 border-cyan-400/40 text-cyan-200"
                    : "border-white/10 text-slate-400 hover:text-slate-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div id="global-search-listbox" role="listbox" className="max-h-[420px] overflow-y-auto">
            {!q.trim() ? (
              <div className="px-4 py-3 text-[11px] text-slate-500">
                Try “blue carbon”, “kenya”, “biodiversity”. Use ↑ ↓ then Enter.
              </div>
            ) : flat.length === 0 ? (
              <div className="px-4 py-3 text-[12px] text-slate-500">No matches</div>
            ) : (
              <>
                {groups.entities.length > 0 && (
                  <>
                    <div className="px-4 pt-2 pb-1 text-[9px] tracking-[0.2em] text-slate-500">ENTITIES</div>
                    {groups.entities.map((r, i) => renderRow(r, i))}
                  </>
                )}
                {groups.articles.length > 0 && (
                  <>
                    <div className="px-4 pt-2 pb-1 text-[9px] tracking-[0.2em] text-slate-500">ARTICLES</div>
                    {groups.articles.map((r, i) => renderRow(r, groups.entities.length + i))}
                  </>
                )}
              </>
            )}
          </div>

          <div className="px-4 py-2 border-t border-white/5 text-[9px] tracking-widest text-slate-500 flex gap-3">
            <span>↑ ↓ navigate</span><span>↵ open</span><span>Esc close</span>
          </div>
        </div>
      )}
    </div>
  );
}