import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3, Database, Activity, Layers, Globe2, ShieldCheck, Lightbulb,
  Leaf, Sprout, Heart, TrendingUp, AlertTriangle, Waves, ChevronRight, Sparkles,
} from "lucide-react";
import { AppShell } from "@/components/atlas/AppShell";
import { Globe, HexIcon, Sparkline } from "@/components/atlas/primitives";
import atlas from "@/content/atlas.json";

export const Route = createFileRoute("/analytics")({
  head: () => ({ meta: [
    { title: "Data & Analytics — Atlas Sanctum" },
    { name: "description", content: "Real-time planetary data and predictive intelligence." },
  ] }),
  component: Analytics,
});

const ICONS: Record<string, any> = { Database, Activity, Layers, Globe2, ShieldCheck, Lightbulb, Leaf, Sprout, Heart, TrendingUp, AlertTriangle, Waves };

function Analytics() {
  const a = atlas.analytics;
  return (
    <AppShell active="Data & Analytics">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-[24px] font-semibold text-white tracking-tight">DATA & ANALYTICS COMMAND CENTER</h1>
            <p className="text-[13px] text-slate-400">Real-time planetary intelligence for regenerative decision-making</p>
          </div>
          <div className="flex gap-2">
            <button className="h-9 px-4 rounded-md bg-emerald-400 text-slate-900 text-[12px] font-semibold">Export Report</button>
            <button className="h-9 px-4 rounded-md border border-white/15 text-slate-200 text-[12px]">Custom Query</button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {a.top.map((s) => {
            const Icon = ICONS[s.icon] ?? Database;
            return (
              <div key={s.l} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center gap-2">
                  <HexIcon color={s.c} size={28}><Icon className="w-3.5 h-3.5" /></HexIcon>
                  <div className="text-[9px] tracking-widest text-slate-500">{s.l}</div>
                </div>
                <div className="mt-2 text-white text-[20px] font-semibold leading-none">{s.v}</div>
                {"ch" in s && <div className="text-[10px] text-emerald-400 mt-1">↑ {(s as any).ch}</div>}
                {"sub" in s && <div className="text-[10px] text-slate-500 mt-1">{(s as any).sub}</div>}
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-4">
          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 relative overflow-hidden">
            <div className="flex justify-between items-center mb-3">
              <div className="text-[13px] font-semibold text-white">REAL-TIME PLANETARY DATA</div>
              <div className="flex gap-2 text-[10px]">
                {["Climate","Oceans","Forests","Biodiversity","Agriculture"].map((t,i) => (
                  <span key={t} className={`px-2 py-1 rounded-full border ${i===0?"bg-cyan-400/10 border-cyan-400/30 text-cyan-300":"bg-white/5 border-white/10 text-slate-400"}`}>{t}</span>
                ))}
              </div>
            </div>
            <div className="grid place-items-center py-4">
              <Globe size={280} />
            </div>
            <div className="grid grid-cols-4 gap-3 mt-3">
              {a.impact.map((k) => {
                const Icon = ICONS[k.icon] ?? Leaf;
                return (
                  <div key={k.l} className="flex items-center gap-2 rounded-lg bg-white/[0.03] p-2 border border-white/5">
                    <HexIcon color={k.c} size={30}><Icon className="w-3.5 h-3.5" /></HexIcon>
                    <div>
                      <div className="text-white text-[14px] font-semibold leading-none">{k.v}</div>
                      <div className="text-[9px] text-slate-500">{k.l}</div>
                      <div className="text-[9px] text-emerald-400">↑ {k.ch}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="flex justify-between items-center mb-3">
              <div className="text-[13px] font-semibold text-white flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-400" /> ANOMALY DETECTION</div>
              <a className="text-[11px] text-cyan-300">View all →</a>
            </div>
            <div className="space-y-2">
              {a.alerts.map((al) => (
                <div key={al.t} className="rounded-lg bg-white/[0.03] border border-white/10 p-3 flex gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full shrink-0" style={{ background: al.c }} />
                  <div className="min-w-0 flex-1">
                    <div className="text-[12px] text-white">{al.t}</div>
                    <div className="text-[10px] text-slate-400 truncate">{al.loc}</div>
                    <div className="text-[9px] text-slate-500 mt-0.5">{al.time}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="text-[11px] tracking-[0.2em] text-slate-400 mb-2">PREDICTIVE ANALYTICS</div>
              <div className="space-y-2">
                {a.predictive.map((p) => (
                  <div key={p.n}>
                    <div className="flex justify-between text-[11px]"><span className="text-slate-300">{p.n}</span><span className="text-emerald-400">↑ {p.ch}</span></div>
                    <Sparkline color="#4ade80" width={220} height={22} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[13px] font-semibold text-white mb-3">DATA QUALITY METRICS</div>
            <div className="space-y-2">
              {a.quality.map((q) => (
                <div key={q.n}>
                  <div className="flex justify-between text-[11px]"><span className="text-slate-300">{q.n}</span><span className="text-white">{q.v}</span></div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mt-1">
                    <div className="h-full" style={{ width: q.v, background: q.c }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[13px] font-semibold text-white mb-3">LIVE DATA STREAMS</div>
            <div className="space-y-2">
              {a.streams.map((s) => (
                <div key={s.n} className="flex justify-between text-[11px] py-1.5 border-b border-white/5 last:border-b-0">
                  <span className="text-slate-300 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />{s.n}</span>
                  <span className="text-slate-400">{s.r}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[13px] font-semibold text-white mb-3">DATA BY SECTOR</div>
            <div className="grid place-items-center py-2">
              <svg viewBox="-60 -60 120 120" className="w-40 h-40 -rotate-90">
                {(() => {
                  let acc = 0;
                  return a.sectors.map((s) => {
                    const start = acc; acc += s.v;
                    const a1 = (start / 100) * 2 * Math.PI;
                    const a2 = (acc / 100) * 2 * Math.PI;
                    const large = s.v > 50 ? 1 : 0;
                    const r = 55;
                    const x1 = Math.cos(a1)*r, y1 = Math.sin(a1)*r;
                    const x2 = Math.cos(a2)*r, y2 = Math.sin(a2)*r;
                    return <path key={s.n} d={`M0 0 L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`} fill={s.c} opacity="0.85" />;
                  });
                })()}
                <circle r="28" fill="#0a1424" />
              </svg>
            </div>
            <div className="grid grid-cols-2 gap-1 mt-2">
              {a.sectors.map((s) => (
                <div key={s.n} className="flex items-center gap-2 text-[10px] text-slate-300"><span className="w-2 h-2 rounded-sm" style={{ background: s.c }} />{s.n} <span className="text-slate-500 ml-auto">{s.v}%</span></div>
              ))}
            </div>
          </section>
        </div>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <div className="text-[13px] font-semibold text-white mb-3">DATA PIPELINE</div>
          <div className="flex items-center gap-2 overflow-x-auto">
            {a.pipeline.map((p, i) => (
              <div key={p} className="flex items-center gap-2 shrink-0">
                <div className="rounded-lg border border-cyan-400/30 bg-cyan-400/5 px-3 py-2 text-[10px] tracking-widest text-cyan-300">{p}</div>
                {i < a.pipeline.length - 1 && <ChevronRight className="w-3 h-3 text-slate-600" />}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <div className="flex justify-between items-center mb-3">
            <div className="text-[13px] font-semibold text-white flex items-center gap-2"><Sparkles className="w-4 h-4 text-amber-400" /> AI-GENERATED INSIGHTS</div>
            <a className="text-[11px] text-cyan-300">Generate more →</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {a.predictive.map((p) => (
              <div key={p.n} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                <div className="text-[11px] text-cyan-300 mb-1">Trend</div>
                <div className="text-[12px] text-white">{p.n} is trending strongly upward.</div>
                <div className="text-[10px] text-emerald-400 mt-1">Projected {p.ch} over next quarter</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}