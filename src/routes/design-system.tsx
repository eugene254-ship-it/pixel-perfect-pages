import { createFileRoute } from "@tanstack/react-router";
import { Boxes, Layers3, Compass, Sparkles } from "lucide-react";
import { AppShell } from "@/components/atlas/AppShell";
import { HexIcon, SectionCard } from "@/components/atlas/primitives";
import { ASPDS_LEVELS, FAMILIES } from "@/components/atlas/genome";

export const Route = createFileRoute("/design-system")({
  head: () => ({
    meta: [
      { title: "ASPDS — Atlas Sanctum Platform Design System" },
      { name: "description", content: "The Atlas Sanctum Platform Design System (ASPDS): 10 layers, 15 families, and a UI Genome of reusable primitives." },
      { property: "og:title", content: "ASPDS — Atlas Sanctum Platform Design System" },
      { property: "og:description", content: "Levels 0–9, the 15 component families, and a living UI Genome for civilization-scale coordination." },
    ],
  }),
  component: DesignSystem,
});

function DesignSystem() {
  return (
    <AppShell active="Design System">
      <div className="p-6 space-y-8" data-testid="page-ready">
        {/* Header */}
        <header className="flex items-start gap-4">
          <HexIcon color="#a78bfa" size={44}><Boxes className="w-5 h-5" /></HexIcon>
          <div>
            <div className="text-[10px] tracking-[0.3em] text-purple-300/80">ATLAS SANCTUM PLATFORM DESIGN SYSTEM</div>
            <h1 className="text-[24px] font-semibold text-white">The UI Genome</h1>
            <p className="text-[12px] text-slate-400 max-w-2xl mt-1">
              ASPDS models the interface as a living architecture — a hierarchy of layers,
              15 component families, and a canonical catalog of reusable primitives. Every
              screen in Atlas Sanctum is assembled from this shared genome.
            </p>
          </div>
        </header>

        {/* Level ladder */}
        <SectionCard title="ASPDS LAYERS · LEVELS 0–9" actions={
          <span className="text-[10px] text-slate-500 flex items-center gap-1">
            <Layers3 className="w-3 h-3" /> atoms → molecules → organisms → pages → applications → platform
          </span>
        }>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {ASPDS_LEVELS.map((l) => (
              <div key={l.n} className="rounded-lg border border-white/10 bg-white/[0.03] p-3 flex gap-3">
                <div className="w-9 h-9 rounded-md bg-gradient-to-br from-purple-500/20 to-cyan-500/10 border border-white/10 grid place-items-center text-[13px] font-semibold text-purple-200 shrink-0">
                  L{l.n}
                </div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold text-white">{l.t}</div>
                  <div className="text-[11px] text-slate-400">{l.d}</div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Meta stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { l: "Layers",          v: "10", i: Layers3,  c: "#a78bfa" },
            { l: "Families",        v: "15", i: Boxes,    c: "#22d3ee" },
            { l: "Genome Primitives", v: String(FAMILIES.reduce((n, f) => n + f.members.length, 0)), i: Sparkles, c: "#facc15" },
            { l: "Applications",    v: "12", i: Compass,  c: "#4ade80" },
          ].map((k) => (
            <div key={k.l} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 flex items-center gap-3">
              <HexIcon color={k.c} size={36}><k.i className="w-4 h-4" /></HexIcon>
              <div>
                <div className="text-[9px] tracking-[0.2em] text-slate-500">{k.l.toUpperCase()}</div>
                <div className="text-[20px] font-semibold text-white tabular-nums">{k.v}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Family gallery */}
        <section>
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <div className="text-[11px] tracking-[0.2em] text-slate-400">THE 15 COMPONENT FAMILIES</div>
              <div className="text-[12px] text-slate-500">Each family below shows its representative Genome primitives, live.</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {FAMILIES.map((f, i) => (
              <article
                key={f.n}
                id={`family-${f.n.toLowerCase()}`}
                className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden"
              >
                <header className="flex items-start gap-3 p-4 border-b border-white/10 bg-white/[0.02]">
                  <div
                    className="w-9 h-9 rounded-md grid place-items-center text-[13px] font-semibold shrink-0"
                    style={{ background: `${f.color}20`, color: f.color, boxShadow: `inset 0 0 0 1px ${f.color}55` }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-[14px] font-semibold text-white">{f.n} System</h3>
                      <span className="text-[9px] tracking-[0.2em] text-slate-500">{f.members.length} MEMBERS</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">{f.desc}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {f.members.map((m) => (
                        <span key={m} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </header>
                <div className="p-4 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03),transparent_60%)]">
                  <div className="text-[9px] tracking-[0.2em] text-slate-500 mb-2">LIVE PRIMITIVES</div>
                  {f.demo()}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <SectionCard title="ROADMAP · SEQUENCED">
          <ol className="space-y-2 text-[12px] text-slate-300">
            <li className="flex gap-2"><span className="text-emerald-300">✓</span> <span><span className="text-white font-medium">Design System route + token catalog.</span> Levels 0–9 and the 15 families are now navigable.</span></li>
            <li className="flex gap-2"><span className="text-cyan-300">◐</span> <span><span className="text-white font-medium">Codify the Genome in code.</span> Move each family into its own module under <code className="text-cyan-300">src/components/atlas/genome/</code> with a typed registry.</span></li>
            <li className="flex gap-2"><span className="text-slate-500">○</span> <span><span className="text-white font-medium">Ship missing family surfaces as routes.</span> Copilot Workspace, Knowledge Graph, API Explorer, and a global Command Palette overlay.</span></li>
          </ol>
        </SectionCard>
      </div>
    </AppShell>
  );
}