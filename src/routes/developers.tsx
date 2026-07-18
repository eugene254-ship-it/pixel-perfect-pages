import { createFileRoute } from "@tanstack/react-router";
import {
  Code2, Activity, Users, Layers, Download, ShieldCheck, TrendingUp,
  BookOpen, Terminal, Key, GitBranch, Zap,
} from "lucide-react";
import { AppShell } from "@/components/atlas/AppShell";
import { HexIcon, Sparkline } from "@/components/atlas/primitives";
import atlas from "@/content/atlas.json";

export const Route = createFileRoute("/developers")({
  head: () => ({ meta: [
    { title: "Developer Platform — Atlas Sanctum" },
    { name: "description", content: "APIs, SDKs, and tools for building on Atlas Sanctum." },
  ] }),
  component: Developers,
});

const ICONS: Record<string, any> = { Activity, Users, Layers, Download, ShieldCheck, TrendingUp };

function methodColor(m: string) {
  return m === "GET" ? "#4ade80" : m === "POST" ? "#22d3ee" : m === "PUT" ? "#facc15" : "#f472b6";
}

function Developers() {
  const d = atlas.developers;
  return (
    <AppShell active="Developers">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-[24px] font-semibold text-white tracking-tight">DEVELOPER PLATFORM</h1>
            <p className="text-[13px] text-slate-400">Build regenerative apps on the Atlas Sanctum API stack</p>
          </div>
          <div className="flex gap-2">
            <button className="h-9 px-4 rounded-md bg-emerald-400 text-slate-900 text-[12px] font-semibold flex items-center gap-2"><Key className="w-3.5 h-3.5" /> Get API Key</button>
            <button className="h-9 px-4 rounded-md border border-white/15 text-slate-200 text-[12px] flex items-center gap-2"><BookOpen className="w-3.5 h-3.5" /> Documentation</button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {d.top.map((s) => {
            const Icon = ICONS[s.icon] ?? Activity;
            return (
              <div key={s.l} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center gap-2">
                  <HexIcon color={s.c} size={28}><Icon className="w-3.5 h-3.5" /></HexIcon>
                  <div className="text-[9px] tracking-widest text-slate-500">{s.l}</div>
                </div>
                <div className="mt-2 text-white text-[20px] font-semibold leading-none">{s.v}</div>
                {"ch" in s && <div className={`text-[10px] mt-1 ${String((s as any).ch).startsWith("-") ? "text-amber-400" : "text-emerald-400"}`}>{(s as any).ch}</div>}
                {"sub" in s && <div className="text-[10px] text-slate-500 mt-1">{(s as any).sub}</div>}
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-4">
          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="flex justify-between items-center mb-3">
              <div className="text-[13px] font-semibold text-white">API ENDPOINTS</div>
              <a className="text-[11px] text-cyan-300">Full reference →</a>
            </div>
            <div className="space-y-2">
              {d.endpoints.map((e) => (
                <div key={e.p} className="grid grid-cols-[60px_1fr_auto] gap-3 items-center text-[11px] py-2 border-b border-white/5 last:border-b-0">
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded text-center" style={{ color: methodColor(e.m), background: `${methodColor(e.m)}20` }}>{e.m}</span>
                  <div>
                    <code className="text-white text-[11px]">{e.p}</code>
                    <div className="text-[10px] text-slate-500">{e.d}</div>
                  </div>
                  <span className="text-[10px] text-slate-400">{e.r}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[13px] font-semibold text-white mb-3 flex items-center gap-2"><Terminal className="w-4 h-4 text-emerald-400" /> QUICK START</div>
            <div className="rounded-lg bg-black/40 border border-white/10 p-3 text-[11px] font-mono text-slate-300 space-y-1">
              <div><span className="text-slate-500"># Install SDK</span></div>
              <div><span className="text-emerald-400">$</span> npm install @atlas-sanctum/sdk</div>
              <div className="mt-2"><span className="text-slate-500"># Authenticate</span></div>
              <div><span className="text-cyan-300">const</span> atlas = <span className="text-cyan-300">new</span> Atlas(<span className="text-amber-300">'sk_live_...'</span>);</div>
              <div className="mt-2"><span className="text-slate-500"># Fetch impact metrics</span></div>
              <div>atlas.impact.metrics(&#123; region: <span className="text-amber-300">'africa'</span> &#125;);</div>
            </div>
            <div className="mt-4 space-y-2">
              {d.quickstart.map((s) => (
                <div key={s.n} className="flex gap-3 items-center">
                  <div className="w-7 h-7 rounded-full grid place-items-center bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-[11px] font-semibold">{s.n}</div>
                  <div>
                    <div className="text-[12px] text-white">{s.t}</div>
                    <div className="text-[10px] text-slate-500">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[13px] font-semibold text-white mb-3">TOP APPLICATIONS</div>
            <div className="space-y-2">
              {d.apps.map((a) => (
                <div key={a.n} className="flex items-center gap-3 rounded-lg bg-white/[0.03] border border-white/10 p-2.5">
                  <span className="w-2 h-2 rounded-full" style={{ background: a.c }} />
                  <div className="min-w-0 flex-1">
                    <div className="text-[12px] text-white truncate">{a.n}</div>
                    <div className="text-[10px] text-slate-500">{a.env} · {a.calls}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[13px] font-semibold text-white mb-3 flex items-center gap-2"><Activity className="w-4 h-4 text-cyan-400" /> RECENT API ACTIVITY</div>
            <div className="space-y-1.5">
              {d.recent.map((r, i) => (
                <div key={i} className="grid grid-cols-[42px_1fr_auto] gap-2 items-center text-[10px] py-1.5 border-b border-white/5 last:border-b-0">
                  <span className="font-semibold" style={{ color: methodColor(r.m) }}>{r.m}</span>
                  <code className="text-slate-300 truncate">{r.p}</code>
                  <span className="text-emerald-400">{r.code} · {r.ms}</span>
                </div>
              ))}
            </div>
            <div className="mt-3"><Sparkline color="#22d3ee" /></div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[13px] font-semibold text-white mb-3 flex items-center gap-2"><Download className="w-4 h-4 text-amber-400" /> SDK DOWNLOADS</div>
            <div className="space-y-2">
              {d.sdks.map((s) => (
                <div key={s.n} className="flex justify-between items-center rounded-md bg-white/[0.03] border border-white/10 px-3 py-2">
                  <div className="text-[12px] text-white flex items-center gap-2"><GitBranch className="w-3 h-3 text-slate-500" />{s.n}</div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-500">{s.v}</span>
                    <button className="text-[10px] text-cyan-300">Download</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <div className="text-[13px] font-semibold text-white mb-3 flex items-center gap-2"><Zap className="w-4 h-4 text-emerald-400" /> SERVICE STATUS</div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {d.status.map((s) => (
              <div key={s.n} className="rounded-lg bg-white/[0.03] border border-white/10 px-3 py-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <div className="text-[11px] text-white">{s.n}</div>
                  <div className="text-[9px] text-emerald-400">{s.s}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}