import { createFileRoute } from "@tanstack/react-router";
import { Landmark, Users, ShieldCheck, Leaf, Cpu, Sprout, Sparkles, Cog, FlaskConical, ChevronRight, Vote, ScrollText } from "lucide-react";
import { AppShell } from "@/components/atlas/AppShell";
import { HexIcon } from "@/components/atlas/primitives";
import atlas from "@/content/atlas.json";

export const Route = createFileRoute("/governance")({
  head: () => ({ meta: [
    { title: "Governance — Atlas Sanctum" },
    { name: "description", content: "Decentralized governance for a regenerative civilization." },
  ] }),
  component: Governance,
});

const ICONS: Record<string, any> = { Users, ShieldCheck, Leaf, Cpu, Sprout, Sparkles, Cog, FlaskConical };

function Governance() {
  const { summary, proposals, councils, principles, voting, process, quorum } = atlas.governance;
  return (
    <AppShell active="Governance">
      <div className="p-6 space-y-6" data-testid="page-ready">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-[24px] font-semibold text-white tracking-tight">GOVERNANCE COMMAND CENTER</h1>
            <p className="text-[13px] text-slate-400">Decentralized decision-making for a regenerative civilization</p>
          </div>
          <div className="flex gap-2">
            <button className="h-9 px-4 rounded-md bg-emerald-400 text-slate-900 text-[12px] font-semibold">New Proposal</button>
            <button className="h-9 px-4 rounded-md border border-white/15 text-slate-200 text-[12px]">View Constitution</button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {summary.map((s) => (
            <div key={s.l} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-[10px] tracking-[0.2em] text-slate-500">{s.l}</div>
              <div className="mt-1 flex items-end justify-between">
                <span className="text-white text-[22px] font-semibold leading-none">{s.v}</span>
                <span className="text-emerald-400 text-[10px]">↑ {s.ch}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1fr] gap-4">
          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[13px] font-semibold text-white mb-3">ACTIVE PROPOSALS</div>
            <div className="space-y-3">
              {proposals.map((p) => (
                <div key={p.t} className="rounded-lg bg-white/[0.03] border border-white/10 p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-[12px] text-white font-medium">{p.t}</div>
                      <div className="text-[10px] text-slate-500">{p.sub}</div>
                    </div>
                    <span className="text-[9px] text-cyan-300">{p.ends}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400" style={{ width: `${p.pct}%` }} />
                    </div>
                    <span className="text-[10px] text-white">{p.pct}%</span>
                  </div>
                </div>
              ))}
            </div>
            <a className="mt-3 inline-block text-[11px] text-cyan-300">View all proposals →</a>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[13px] font-semibold text-white mb-3 text-center">DECENTRALIZED GOVERNANCE ARCHITECTURE</div>
            <div className="relative w-full aspect-square max-w-[440px] mx-auto">
              <svg viewBox="-160 -160 320 320" className="w-full h-full">
                <circle cx="0" cy="0" r="140" fill="none" stroke="rgba(34,211,238,0.15)" strokeDasharray="2 4" />
                <circle cx="0" cy="0" r="90"  fill="none" stroke="rgba(34,211,238,0.1)" />
                {councils.map((c) => {
                  const rad = (c.angle * Math.PI) / 180;
                  const x = Math.cos(rad) * 130;
                  const y = Math.sin(rad) * 130;
                  return <line key={c.n} x1="0" y1="0" x2={x} y2={y} stroke={c.c} strokeOpacity="0.25" />;
                })}
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center">
                <HexIcon color="#22d3ee" size={72}><Landmark className="w-6 h-6" /></HexIcon>
                <div className="text-[10px] text-white mt-2 text-center">GLOBAL COUNCIL</div>
                <div className="text-[8px] text-slate-500">Coordination Layer</div>
              </div>
              {councils.map((c) => {
                const Icon = ICONS[c.icon] ?? Users;
                const rad = (c.angle * Math.PI) / 180;
                const x = 50 + Math.cos(rad) * 42;
                const y = 50 + Math.sin(rad) * 42;
                return (
                  <div key={c.n} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center" style={{ left: `${x}%`, top: `${y}%` }}>
                    <HexIcon color={c.c} size={44}><Icon className="w-4 h-4" /></HexIcon>
                    <div className="mt-1 text-[9px] text-white text-center leading-tight max-w-[80px]">{c.n}</div>
                    <div className="text-[8px] text-slate-500 text-center max-w-[80px] leading-tight">{c.sub}</div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[13px] font-semibold text-white mb-3">CORE PRINCIPLES</div>
            <div className="space-y-2">
              {principles.map((p) => (
                <div key={p.n} className="flex gap-3 items-start rounded-md bg-white/[0.03] p-2.5 border border-white/5">
                  <span className="w-1.5 h-1.5 mt-1.5 rounded-full shrink-0" style={{ background: p.c }} />
                  <div>
                    <div className="text-[12px] text-white">{p.n}</div>
                    <div className="text-[10px] text-slate-400 leading-snug">{p.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-4">
          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[13px] font-semibold text-white mb-3 flex items-center gap-2"><Vote className="w-4 h-4 text-emerald-400" /> LIVE VOTING ACTIVITY</div>
            <div className="space-y-3">
              {voting.map((v) => (
                <div key={v.t}>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-white">{v.t}</span>
                    <span className="text-slate-400">{v.votes} · {v.pct}%</span>
                  </div>
                  <div className="mt-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-400" style={{ width: `${v.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[13px] font-semibold text-white mb-3 flex items-center gap-2"><ScrollText className="w-4 h-4 text-cyan-400" /> GOVERNANCE PROCESS</div>
            <div className="flex items-center justify-between gap-2">
              {process.map((p, i) => (
                <div key={p} className="flex items-center gap-2">
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full grid place-items-center border border-cyan-400/40 bg-cyan-400/10 text-cyan-300 text-[11px] font-semibold">{i + 1}</div>
                    <div className="mt-1.5 text-[9px] text-slate-400 tracking-widest text-center">{p}</div>
                  </div>
                  {i < process.length - 1 && <ChevronRight className="w-3 h-3 text-slate-600" />}
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <div className="text-[11px] tracking-[0.2em] text-slate-400 mb-3">GOVERNANCE HEALTH METRICS</div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {quorum.map((q) => (
              <div key={q.l}>
                <div className="text-[9px] tracking-widest text-slate-500">{q.l}</div>
                <div className="text-[22px] font-semibold text-white leading-tight">{q.v}</div>
                <div className="text-[10px] text-emerald-400">{q.sub}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}