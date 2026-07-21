import type { ReactNode } from "react";
import {
  ChevronRight, Command, Search, Home, Layers, GripVertical, Play, Pause,
  Table2, ListTree, Bot, Sparkles, Users, MessageSquare, Bell, Radio,
  Flag, GitBranch, BookMarked, Quote, ShieldCheck, ScrollText, Star,
  Palette, Server, Circle, ArrowRight, Plus, Check,
} from "lucide-react";

/* ============================================================
   ATLAS SANCTUM PLATFORM DESIGN SYSTEM — UI GENOME
   ------------------------------------------------------------
   One representative primitive per family. Each export is
   registered in FAMILY_REGISTRY at the bottom of this file.
   ============================================================ */

const CARD = "rounded-lg border border-white/10 bg-white/[0.03]";
const CHIP = "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] tracking-wide";

/* 1. NAVIGATION ─ Breadcrumb + Command trigger */
export function Breadcrumb({ items }: { items: string[] }) {
  return (
    <nav className="flex items-center gap-1 text-[11px] text-slate-400">
      <Home className="w-3 h-3" />
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-1">
          <ChevronRight className="w-3 h-3 opacity-60" />
          <span className={i === items.length - 1 ? "text-cyan-300" : ""}>{it}</span>
        </span>
      ))}
    </nav>
  );
}
export function CommandTrigger() {
  return (
    <button className={`${CARD} flex items-center gap-2 px-3 py-1.5 text-[11px] text-slate-300 hover:bg-white/5`}>
      <Command className="w-3.5 h-3.5 text-cyan-300" />
      <span>Command…</span>
      <kbd className="ml-2 rounded bg-white/10 px-1.5 py-0.5 text-[9px] text-slate-300">⌘K</kbd>
    </button>
  );
}

/* 2. LAYOUT ─ Dock panel with resize handles */
export function DockPanel({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className={`${CARD} overflow-hidden`}>
      <div className="flex items-center gap-2 px-3 py-1.5 border-b border-white/10 bg-white/[0.04]">
        <GripVertical className="w-3 h-3 text-slate-500" />
        <span className="text-[10px] tracking-[0.15em] text-slate-400">{title}</span>
        <div className="ml-auto flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
        </div>
      </div>
      <div className="p-3 text-[11px] text-slate-300 min-h-[64px]">{children ?? "Dockable region"}</div>
    </div>
  );
}

/* 3. WORKSPACE ─ Toolbar with tools */
export function WorkspaceToolbar({ tools }: { tools: { label: string; active?: boolean }[] }) {
  return (
    <div className={`${CARD} flex items-center gap-1 p-1`}>
      {tools.map((t) => (
        <button
          key={t.label}
          className={`px-2.5 py-1 rounded text-[11px] ${
            t.active ? "bg-cyan-400/15 text-cyan-300" : "text-slate-400 hover:text-white hover:bg-white/5"
          }`}
        >
          {t.label}
        </button>
      ))}
      <div className="mx-1 h-4 w-px bg-white/10" />
      <button className="grid place-items-center w-6 h-6 rounded hover:bg-white/5 text-slate-400"><Play className="w-3 h-3" /></button>
      <button className="grid place-items-center w-6 h-6 rounded hover:bg-white/5 text-slate-400"><Pause className="w-3 h-3" /></button>
    </div>
  );
}

/* 4. INTERACTION ─ Split button + Stepper */
export function SplitButton({ label }: { label: string }) {
  return (
    <div className="inline-flex rounded-md overflow-hidden border border-cyan-400/30">
      <button className="px-3 py-1.5 bg-cyan-400/15 text-cyan-300 text-[11px]">{label}</button>
      <button className="px-2 bg-cyan-400/10 text-cyan-300 border-l border-cyan-400/30">
        <ChevronRight className="w-3 h-3 rotate-90" />
      </button>
    </div>
  );
}
export function Stepper({ steps, current }: { steps: string[]; current: number }) {
  return (
    <div className="flex items-center gap-2">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-2">
          <div
            className={`w-5 h-5 rounded-full grid place-items-center text-[10px] font-semibold ${
              i < current ? "bg-emerald-400/20 text-emerald-300" :
              i === current ? "bg-cyan-400/20 text-cyan-300 ring-1 ring-cyan-400/50" :
              "bg-white/5 text-slate-500"
            }`}
          >
            {i < current ? <Check className="w-3 h-3" /> : i + 1}
          </div>
          <span className={`text-[10px] ${i === current ? "text-white" : "text-slate-500"}`}>{s}</span>
          {i < steps.length - 1 && <div className="w-4 h-px bg-white/10" />}
        </div>
      ))}
    </div>
  );
}

/* 5. INPUT ─ Prompt box + Tag input */
export function PromptBox() {
  return (
    <div className={`${CARD} p-2 flex items-center gap-2`}>
      <Sparkles className="w-3.5 h-3.5 text-purple-300 shrink-0" />
      <input
        placeholder="Ask Copilot anything…"
        className="bg-transparent flex-1 text-[12px] text-slate-200 placeholder:text-slate-500 outline-none"
      />
      <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] text-slate-300">↵</kbd>
    </div>
  );
}
export function TagInput({ tags }: { tags: string[] }) {
  return (
    <div className={`${CARD} p-1.5 flex flex-wrap gap-1 items-center`}>
      {tags.map((t) => (
        <span key={t} className={`${CHIP} bg-cyan-400/10 text-cyan-300`}>
          {t}
          <button className="opacity-60 hover:opacity-100">×</button>
        </span>
      ))}
      <input placeholder="Add tag…" className="bg-transparent text-[11px] outline-none text-slate-200 placeholder:text-slate-500 flex-1 min-w-[80px] px-1" />
    </div>
  );
}

/* 6. DATA ─ Data table + Property sheet */
export function DataTable({ rows }: { rows: { name: string; region: string; health: number }[] }) {
  return (
    <div className={`${CARD} overflow-hidden`}>
      <div className="grid grid-cols-[1fr_120px_80px] gap-3 px-3 py-2 border-b border-white/10 text-[9px] tracking-[0.2em] text-slate-500">
        <div>PROJECT</div><div>REGION</div><div className="text-right">HEALTH</div>
      </div>
      {rows.map((r) => (
        <div key={r.name} className="grid grid-cols-[1fr_120px_80px] gap-3 px-3 py-2 border-b border-white/5 last:border-b-0 text-[11px]">
          <div className="text-white truncate">{r.name}</div>
          <div className="text-slate-400">{r.region}</div>
          <div className="text-right text-emerald-300 tabular-nums">{r.health}%</div>
        </div>
      ))}
    </div>
  );
}
export function PropertySheet({ props }: { props: { k: string; v: string }[] }) {
  return (
    <div className={`${CARD} p-3 space-y-1.5`}>
      {props.map((p) => (
        <div key={p.k} className="grid grid-cols-[100px_1fr] gap-2 text-[11px]">
          <div className="text-slate-500">{p.k}</div>
          <div className="text-slate-200 truncate">{p.v}</div>
        </div>
      ))}
    </div>
  );
}

/* 7. VISUALIZATION ─ Sankey + Heatmap + Network graph */
export function Sankey() {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-24">
      <path d="M0,20 C60,20 60,15 100,15 C140,15 140,30 200,30" fill="none" stroke="#22d3ee" strokeWidth="8" strokeOpacity="0.6" />
      <path d="M0,50 C60,50 60,55 100,55 C140,55 140,55 200,55" fill="none" stroke="#4ade80" strokeWidth="12" strokeOpacity="0.55" />
      <path d="M0,80 C60,80 60,80 100,80 C140,80 140,80 200,80" fill="none" stroke="#facc15" strokeWidth="6" strokeOpacity="0.55" />
      <rect x="0" y="10" width="4" height="80" fill="#22d3ee" />
      <rect x="196" y="10" width="4" height="80" fill="#4ade80" />
    </svg>
  );
}
export function Heatmap({ cols = 14, rows = 6 }: { cols?: number; rows?: number }) {
  return (
    <div className="grid gap-0.5" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))` }}>
      {Array.from({ length: cols * rows }).map((_, i) => {
        const intensity = ((i * 37) % 100) / 100;
        return <div key={i} className="aspect-square rounded-sm" style={{ background: `oklch(0.7 0.18 180 / ${0.1 + intensity * 0.85})` }} />;
      })}
    </div>
  );
}
export function NetworkGraph() {
  const nodes = [
    { x: 100, y: 40, c: "#22d3ee" }, { x: 40, y: 80, c: "#4ade80" },
    { x: 160, y: 80, c: "#facc15" }, { x: 60, y: 130, c: "#c084fc" },
    { x: 140, y: 130, c: "#f472b6" }, { x: 100, y: 100, c: "#38bdf8" },
  ];
  return (
    <svg viewBox="0 0 200 170" className="w-full h-40">
      {nodes.map((n, i) => nodes.slice(i + 1).map((m, j) => (
        <line key={`${i}-${j}`} x1={n.x} y1={n.y} x2={m.x} y2={m.y} stroke="#22d3ee" strokeOpacity="0.15" strokeWidth="0.6" />
      )))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={7} fill={n.c} opacity="0.25" />
          <circle cx={n.x} cy={n.y} r={3.5} fill={n.c} />
        </g>
      ))}
    </svg>
  );
}

/* 8. INTELLIGENCE ─ Copilot bubble + Confidence meter + Insight card */
export function CopilotBubble({ text }: { text: string }) {
  return (
    <div className="flex gap-2 items-start">
      <div className="w-6 h-6 rounded-full bg-purple-400/20 grid place-items-center shrink-0">
        <Bot className="w-3.5 h-3.5 text-purple-300" />
      </div>
      <div className={`${CARD} px-3 py-2 text-[11px] text-slate-200 max-w-[85%]`}>{text}</div>
    </div>
  );
}
export function ConfidenceMeter({ pct, label = "Confidence" }: { pct: number; label?: string }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[10px] text-slate-400"><span>{label}</span><span className="text-cyan-300 tabular-nums">{pct}%</span></div>
      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
export function InsightCard({ title, body }: { title: string; body: string }) {
  return (
    <div className={`${CARD} p-3 space-y-1`}>
      <div className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] text-purple-300">
        <Sparkles className="w-3 h-3" /> INSIGHT
      </div>
      <div className="text-[12px] font-semibold text-white">{title}</div>
      <div className="text-[10px] text-slate-400">{body}</div>
    </div>
  );
}

/* 9. COLLABORATION ─ Presence stack + Comment thread */
export function PresenceStack({ users }: { users: { name: string; c: string }[] }) {
  return (
    <div className="flex -space-x-1.5">
      {users.map((u) => (
        <div
          key={u.name}
          title={u.name}
          className="w-6 h-6 rounded-full ring-2 ring-[#0a1424] grid place-items-center text-[9px] font-semibold text-white"
          style={{ background: u.c }}
        >
          {u.name.slice(0, 1)}
        </div>
      ))}
      <div className="w-6 h-6 rounded-full ring-2 ring-[#0a1424] bg-white/10 grid place-items-center text-[9px] text-slate-300">+4</div>
    </div>
  );
}
export function CommentThread() {
  return (
    <div className={`${CARD} p-3 space-y-2`}>
      <div className="flex gap-2">
        <div className="w-5 h-5 rounded-full bg-cyan-400/30 grid place-items-center text-[9px] text-white">M</div>
        <div className="text-[11px]">
          <div className="text-white">Maya <span className="text-slate-500">· 2m</span></div>
          <div className="text-slate-300">Should we approve the Amazon corridor mission?</div>
        </div>
      </div>
      <div className="flex gap-2 pl-6">
        <div className="w-5 h-5 rounded-full bg-emerald-400/30 grid place-items-center text-[9px] text-white">A</div>
        <div className="text-[11px]"><div className="text-white">Ari</div><div className="text-slate-300">+1, evidence looks solid.</div></div>
      </div>
    </div>
  );
}

/* 10. COMMUNICATION ─ Alert toast + Feed item */
export function AlertToast({ kind = "info", text }: { kind?: "info" | "warn" | "ok"; text: string }) {
  const map = { info: "text-cyan-300 border-cyan-400/30 bg-cyan-400/10",
                warn: "text-amber-300 border-amber-400/30 bg-amber-400/10",
                ok:   "text-emerald-300 border-emerald-400/30 bg-emerald-400/10" } as const;
  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-md border text-[11px] ${map[kind]}`}>
      <Bell className="w-3.5 h-3.5" /> {text}
    </div>
  );
}
export function FeedItem({ who, what, when }: { who: string; what: string; when: string }) {
  return (
    <div className="flex gap-2 py-1.5 text-[11px]">
      <Radio className="w-3 h-3 mt-0.5 text-cyan-300 shrink-0" />
      <div><span className="text-white">{who}</span> <span className="text-slate-400">{what}</span> <span className="text-slate-600">· {when}</span></div>
    </div>
  );
}

/* 11. OPERATIONAL ─ Milestone chip + Pipeline stage + Kanban card */
export function MilestoneChip({ label, done }: { label: string; done?: boolean }) {
  return (
    <span className={`${CHIP} ${done ? "bg-emerald-400/15 text-emerald-300" : "bg-white/5 text-slate-400"}`}>
      <Flag className="w-2.5 h-2.5" /> {label}
    </span>
  );
}
export function PipelineStage({ stages }: { stages: { n: string; count: number }[] }) {
  return (
    <div className="flex items-stretch gap-0">
      {stages.map((s, i) => (
        <div key={s.n} className={`flex-1 ${CARD} px-3 py-2 ${i > 0 ? "-ml-1" : ""}`}>
          <div className="text-[9px] tracking-[0.2em] text-slate-500">{s.n}</div>
          <div className="text-[16px] font-semibold text-white tabular-nums">{s.count}</div>
        </div>
      ))}
    </div>
  );
}
export function KanbanCard({ title, tag, tagColor = "#22d3ee" }: { title: string; tag: string; tagColor?: string }) {
  return (
    <div className={`${CARD} p-2.5 space-y-1.5`}>
      <span className={`${CHIP}`} style={{ background: `${tagColor}22`, color: tagColor }}>{tag}</span>
      <div className="text-[12px] text-white">{title}</div>
      <div className="flex items-center justify-between text-[10px] text-slate-500">
        <span className="flex items-center gap-1"><GitBranch className="w-3 h-3" /> 3</span>
        <PresenceStack users={[{ name: "M", c: "#22d3ee" }, { name: "A", c: "#4ade80" }]} />
      </div>
    </div>
  );
}

/* 12. KNOWLEDGE ─ Knowledge node + Citation chip */
export function KnowledgeNode({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-[11px] text-cyan-200">
      <BookMarked className="w-3 h-3" /> {label}
    </div>
  );
}
export function CitationChip({ n, source }: { n: number; source: string }) {
  return (
    <span className={`${CHIP} bg-white/5 text-slate-300 border border-white/10`}>
      <Quote className="w-2.5 h-2.5" /> [{n}] {source}
    </span>
  );
}

/* 13. SECURITY ─ Permission badge + Audit row */
export function PermissionBadge({ role }: { role: "admin" | "steward" | "viewer" }) {
  const map = { admin: "#f472b6", steward: "#4ade80", viewer: "#94a3b8" } as const;
  return (
    <span className={`${CHIP}`} style={{ background: `${map[role]}22`, color: map[role] }}>
      <ShieldCheck className="w-2.5 h-2.5" /> {role}
    </span>
  );
}
export function AuditRow({ actor, action, when }: { actor: string; action: string; when: string }) {
  return (
    <div className="flex items-center gap-2 py-1.5 text-[11px] border-b border-white/5 last:border-b-0">
      <ScrollText className="w-3 h-3 text-slate-500 shrink-0" />
      <span className="text-white">{actor}</span>
      <span className="text-slate-400 truncate flex-1">{action}</span>
      <span className="text-slate-600 tabular-nums">{when}</span>
    </div>
  );
}

/* 14. PERSONALIZATION ─ Saved view chip + Theme swatch */
export function SavedViewChip({ label, pinned }: { label: string; pinned?: boolean }) {
  return (
    <span className={`${CHIP} bg-white/5 text-slate-200 border border-white/10`}>
      <Star className={`w-2.5 h-2.5 ${pinned ? "text-amber-300 fill-amber-300" : "text-slate-500"}`} /> {label}
    </span>
  );
}
export function ThemeSwatch({ colors, name }: { colors: string[]; name: string }) {
  return (
    <div className={`${CARD} p-2 space-y-1.5`}>
      <div className="flex gap-0.5">
        {colors.map((c) => <div key={c} className="flex-1 h-6 rounded-sm" style={{ background: c }} />)}
      </div>
      <div className="flex items-center gap-1 text-[10px] text-slate-400"><Palette className="w-2.5 h-2.5" /> {name}</div>
    </div>
  );
}

/* 15. INFRASTRUCTURE ─ Service node + Health dot */
export function ServiceNode({ name, status = "ok" }: { name: string; status?: "ok" | "warn" | "down" }) {
  const c = status === "ok" ? "#4ade80" : status === "warn" ? "#facc15" : "#f87171";
  return (
    <div className={`${CARD} p-2.5 flex items-center gap-2`}>
      <div className="w-8 h-8 rounded-md bg-white/5 grid place-items-center"><Server className="w-4 h-4 text-slate-300" /></div>
      <div className="min-w-0 flex-1">
        <div className="text-[11px] text-white truncate">{name}</div>
        <div className="flex items-center gap-1 text-[9px] text-slate-500">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: c }} /> {status}
        </div>
      </div>
    </div>
  );
}
export function HealthDot({ status = "ok" }: { status?: "ok" | "warn" | "down" }) {
  const c = status === "ok" ? "#4ade80" : status === "warn" ? "#facc15" : "#f87171";
  return (
    <span className="relative inline-flex w-2 h-2">
      <span className="absolute inset-0 rounded-full animate-ping opacity-60" style={{ background: c }} />
      <span className="relative w-2 h-2 rounded-full" style={{ background: c }} />
    </span>
  );
}

/* ============================================================
   FAMILY REGISTRY — canonical index of the UI Genome
   ============================================================ */

export type FamilyEntry = {
  n: string;
  desc: string;
  color: string;
  members: string[];
  demo: () => ReactNode;
};

export const FAMILIES: FamilyEntry[] = [
  {
    n: "Navigation",
    desc: "Wayfinding — global, mission, workspace, command, and spatial.",
    color: "#22d3ee",
    members: ["Global Nav", "Breadcrumb", "Command Palette", "Universal Search", "Keyboard Nav", "Voice Nav"],
    demo: () => (
      <div className="space-y-2">
        <Breadcrumb items={["Mission Control", "Alerts", "Amazon Basin"]} />
        <CommandTrigger />
      </div>
    ),
  },
  {
    n: "Layout",
    desc: "Organizes space — shells, docks, canvases, viewports.",
    color: "#38bdf8",
    members: ["Shell", "Sidebar", "Dockable Panels", "Split View", "Grid", "Infinite Canvas"],
    demo: () => <DockPanel title="INSPECTOR"><span className="text-slate-400">Selected: Amazon Corridor</span></DockPanel>,
  },
  {
    n: "Workspace",
    desc: "Domain workspaces with toolbars, docks, canvas, console, timeline.",
    color: "#818cf8",
    members: ["Mission Control", "Analytics", "Digital Twin", "Governance", "AI Workspace"],
    demo: () => <WorkspaceToolbar tools={[{ label: "Map", active: true }, { label: "Layers" }, { label: "Simulate" }, { label: "Export" }]} />,
  },
  {
    n: "Interaction",
    desc: "Actions & flow — buttons, steppers, gestures, shortcuts.",
    color: "#c084fc",
    members: ["Split Button", "Stepper", "Tabs", "Context Menu", "Drag & Drop", "Gesture"],
    demo: () => (
      <div className="space-y-3">
        <SplitButton label="Deploy mission" />
        <Stepper steps={["Scope", "Fund", "Verify", "Launch"]} current={1} />
      </div>
    ),
  },
  {
    n: "Input",
    desc: "Capture — text, prompt, workflow, code, voice, image.",
    color: "#f472b6",
    members: ["Prompt Box", "Tag Input", "Rich Text", "JSON Editor", "Workflow Builder", "Voice Input"],
    demo: () => (
      <div className="space-y-2">
        <PromptBox />
        <TagInput tags={["forests", "carbon", "restoration"]} />
      </div>
    ),
  },
  {
    n: "Data",
    desc: "Structured surfaces — tables, trees, property sheets, registries.",
    color: "#4ade80",
    members: ["Data Table", "Tree", "Property Sheet", "Registry", "Entity Explorer"],
    demo: () => (
      <div className="space-y-2">
        <DataTable rows={[
          { name: "Amazon Corridor", region: "S. America", health: 92 },
          { name: "Great Reef Reboot", region: "Oceania", health: 87 },
          { name: "Sahel Green Wall", region: "Africa", health: 78 },
        ]}/>
        <PropertySheet props={[{ k: "type", v: "Ecosystem" }, { k: "stewards", v: "48" }, { k: "started", v: "2024-06-01" }]} />
      </div>
    ),
  },
  {
    n: "Visualization",
    desc: "Rendered signal — charts, maps, twins, flow, graphs.",
    color: "#facc15",
    members: ["Sparkline", "Sankey", "Heatmap", "Network Graph", "Digital Twin", "Planetary Map"],
    demo: () => (
      <div className="space-y-3">
        <Sankey />
        <Heatmap />
        <NetworkGraph />
      </div>
    ),
  },
  {
    n: "Intelligence",
    desc: "AI-native — copilot, insights, reasoning, ethics.",
    color: "#a78bfa",
    members: ["Copilot", "Insight Card", "Confidence Meter", "Reasoning Explorer", "Ethics Monitor"],
    demo: () => (
      <div className="space-y-2">
        <CopilotBubble text="I detected 3 anomalies in the Amazon basin over the last 24h." />
        <ConfidenceMeter pct={86} />
        <InsightCard title="Reforestation surging" body="+12% biomass over prior quarter across 8 corridors." />
      </div>
    ),
  },
  {
    n: "Collaboration",
    desc: "Working together — presence, comments, approvals, DAO.",
    color: "#22c55e",
    members: ["Presence", "Comments", "Approvals", "Whiteboard", "DAO Governance"],
    demo: () => (
      <div className="space-y-2">
        <PresenceStack users={[{ name: "Maya", c: "#22d3ee" }, { name: "Ari", c: "#4ade80" }, { name: "Yui", c: "#facc15" }, { name: "Ravi", c: "#c084fc" }]} />
        <CommentThread />
      </div>
    ),
  },
  {
    n: "Communication",
    desc: "Broadcast & inbox — notifications, feeds, campaigns.",
    color: "#fb923c",
    members: ["Alerts", "Notifications", "Feed", "Broadcasts", "Announcements"],
    demo: () => (
      <div className="space-y-2">
        <AlertToast kind="warn" text="High deforestation anomaly detected — Amazon Basin." />
        <AlertToast kind="ok" text="Ocean alkalinity study peer-reviewed." />
        <FeedItem who="Steward Council" what="approved Regenerative Agriculture Fund" when="2m" />
      </div>
    ),
  },
  {
    n: "Operational",
    desc: "Mission execution — projects, tasks, pipelines, milestones.",
    color: "#34d399",
    members: ["Kanban", "Milestone", "Pipeline", "Roadmap", "Incident"],
    demo: () => (
      <div className="space-y-3">
        <div className="flex gap-1.5 flex-wrap">
          <MilestoneChip label="Scope" done />
          <MilestoneChip label="Fund" done />
          <MilestoneChip label="Deploy" />
          <MilestoneChip label="Verify" />
        </div>
        <PipelineStage stages={[{ n: "PROPOSED", count: 42 }, { n: "FUNDED", count: 28 }, { n: "ACTIVE", count: 19 }, { n: "VERIFIED", count: 11 }]} />
        <div className="grid grid-cols-2 gap-2">
          <KanbanCard title="Sahel corridor survey" tag="Field" tagColor="#4ade80" />
          <KanbanCard title="Reef sensor deployment" tag="Ocean" tagColor="#22d3ee" />
        </div>
      </div>
    ),
  },
  {
    n: "Knowledge",
    desc: "Planetary knowledge OS — graph, ontology, citations, wiki.",
    color: "#fde68a",
    members: ["Knowledge Graph", "Ontology Explorer", "Citation Graph", "Wiki", "Semantic Search"],
    demo: () => (
      <div className="space-y-2">
        <div className="flex gap-1.5 flex-wrap">
          <KnowledgeNode label="Mycorrhizal Networks" />
          <KnowledgeNode label="Soil Carbon" />
          <KnowledgeNode label="Blue Carbon" />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          <CitationChip n={1} source="Nature Sustainability, 2025" />
          <CitationChip n={2} source="FAO Global Soil Report" />
        </div>
      </div>
    ),
  },
  {
    n: "Security",
    desc: "Trust fabric — identity, permissions, audit, zero trust.",
    color: "#f87171",
    members: ["Auth", "Permissions", "Audit Log", "Zero Trust", "Secrets", "Device Trust"],
    demo: () => (
      <div className="space-y-2">
        <div className="flex gap-1.5 flex-wrap">
          <PermissionBadge role="admin" />
          <PermissionBadge role="steward" />
          <PermissionBadge role="viewer" />
        </div>
        <div className={`${CARD} p-2`}>
          <AuditRow actor="maya@atlas" action="approved proposal RVE-102" when="2m" />
          <AuditRow actor="ari@atlas"  action="rotated production API key" when="1h" />
        </div>
      </div>
    ),
  },
  {
    n: "Personalization",
    desc: "Individual layer — profiles, views, pins, workspace templates.",
    color: "#fbbf24",
    members: ["Saved Views", "Bookmarks", "Themes", "Pinned Dashboards", "Custom Widgets"],
    demo: () => (
      <div className="space-y-2">
        <div className="flex gap-1.5 flex-wrap">
          <SavedViewChip label="Amazon overview" pinned />
          <SavedViewChip label="Reef sensors" />
          <SavedViewChip label="Q4 pipeline" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <ThemeSwatch name="Sanctum Dark" colors={["#0a1424", "#22d3ee", "#4ade80", "#facc15"]} />
          <ThemeSwatch name="Aurora"        colors={["#0b0f2b", "#a78bfa", "#f472b6", "#22d3ee"]} />
        </div>
      </div>
    ),
  },
  {
    n: "Infrastructure",
    desc: "Visible plumbing — services, nodes, clusters, telemetry.",
    color: "#94a3b8",
    members: ["API Explorer", "Services", "Queues", "Nodes", "Health Monitor", "Tracing"],
    demo: () => (
      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <ServiceNode name="atlas-gateway" status="ok" />
          <ServiceNode name="twin-simulator" status="warn" />
          <ServiceNode name="ledger-indexer" status="ok" />
          <ServiceNode name="edge-eu-west"   status="down" />
        </div>
        <div className="flex items-center gap-3 text-[11px] text-slate-400">
          <HealthDot status="ok" /> operational
          <HealthDot status="warn" /> degraded
          <HealthDot status="down" /> incident
        </div>
      </div>
    ),
  },
];

/* ASPDS layer taxonomy (Levels 0–9) */
export const ASPDS_LEVELS = [
  { n: 0, t: "Design Philosophy",       d: "Guiding intent: a regenerative operating system for planetary coordination." },
  { n: 1, t: "Experience Architecture", d: "Language, motion, accessibility, and interaction principles." },
  { n: 2, t: "Interface Architecture",  d: "The 15 component families that compose every surface." },
  { n: 3, t: "Component Families",      d: "Navigation, Layout, Workspace, Data, Visualization, Intelligence…" },
  { n: 4, t: "Component Groups",        d: "Family subsets that share behavior (e.g. Command Nav, Spatial Nav)." },
  { n: 5, t: "Reusable Components",     d: "The Genome — atoms and molecules used across all workspaces." },
  { n: 6, t: "Patterns",                d: "Recurring compositions (empty state, decision flow, inspector)." },
  { n: 7, t: "Templates",               d: "Assemblies that seed a new page or workspace." },
  { n: 8, t: "Applications",            d: "Mission Control, RVE, Ecosystems, Intelligence, Governance…" },
  { n: 9, t: "Operating Systems",       d: "Purpose, Knowledge, Economy, Intelligence, Flourishing, Innovation, Execution." },
];

/* Icons re-exported for convenience */
export { ArrowRight, Plus, Circle };
