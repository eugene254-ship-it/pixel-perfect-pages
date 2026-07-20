import { createFileRoute } from "@tanstack/react-router";
import { Gauge, Leaf, Sprout, TreePine, Heart, Rocket, Users } from "lucide-react";
import { AppShell } from "@/components/atlas/AppShell";
import { HexIcon, Ring, Sparkline } from "@/components/atlas/primitives";

export const Route = createFileRoute("/mission-control/impact-dashboard")({
  head: () => ({ meta: [{ title: "Impact Dashboard — Mission Control" }, { name: "description", content: "Deep dive into impact KPIs across the platform." }] }),
  component: ImpactDashboard,
});

const kpis = [
  { icon: Leaf, l: "TOTAL REGENERATIVE VALUE", v: "$2.47T", ch: "+12.7%", c: "#4ade80" },
  { icon: Sprout, l: "CARBON REMOVED", v: "1.32B tCO₂", ch: "+8.4%", c: "#a3e635" },
  { icon: TreePine, l: "HECTARES RESTORED", v: "4.78M ha", ch: "+7.1%", c: "#facc15" },
  { icon: Heart, l: "LIVES IMPROVED", v: "236.7M", ch: "+5.8%", c: "#c084fc" },
  { icon: Rocket, l: "INVESTMENTS", v: "$98.6B", ch: "+10.3%", c: "#22d3ee" },
  { icon: Users, l: "ACTIVE PARTNERS", v: "872", ch: "+6.2%", c: "#38bdf8" },
];

const sdg = [
  { n: "SDG 2 — Zero Hunger", pct: 78, c: "#f59e0b" },
  { n: "SDG 6 — Clean Water", pct: 84, c: "#38bdf8" },
  { n: "SDG 13 — Climate Action", pct: 91, c: "#4ade80" },
  { n: "SDG 14 — Life Below Water", pct: 72, c: "#22d3ee" },
  { n: "SDG 15 — Life on Land", pct: 88, c: "#a3e635" },
];

function ImpactDashboard() {
  return (
    <AppShell active="Impact Dashboard">
      <div className="p-6 space-y-6" data-testid="page-ready">
        <div className="flex items-center gap-3">
          <HexIcon color="#4ade80" size={40}><Gauge className="w-5 h-5" /></HexIcon>
          <div>
            <h1 className="text-[22px] font-semibold text-white">IMPACT DASHBOARD</h1>
            <p className="text-[12px] text-slate-400">Cross-cutting impact metrics and SDG alignment</p>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-3">
          {kpis.map((k,i)=>(
            <div key={k.l} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-start gap-2">
                <HexIcon color={k.c} size={30}><k.icon className="w-3.5 h-3.5"/></HexIcon>
                <div className="min-w-0">
                  <div className="text-[8px] tracking-[0.15em] text-slate-500">{k.l}</div>
                  <div className="text-white font-semibold text-[15px] leading-tight">{k.v}</div>
                </div>
              </div>
              <div className="text-[9.5px] mt-1"><span style={{color:k.c}}>{k.ch}</span> <span className="text-slate-500">vs last month</span></div>
              <Sparkline color={k.c} seed={i+3}/>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-[1fr_1fr] gap-6">
          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[13px] font-semibold text-white">SDG ALIGNMENT</div>
            <div className="text-[11px] text-slate-500 mb-4">Contribution to UN Sustainable Development Goals</div>
            <div className="space-y-3">
              {sdg.map(s=>(
                <div key={s.n}>
                  <div className="flex justify-between text-[11px]"><span className="text-slate-300">{s.n}</span><span className="text-white">{s.pct}%</span></div>
                  <div className="mt-1 h-1.5 bg-white/10 rounded-full overflow-hidden"><div className="h-full rounded-full" style={{width:`${s.pct}%`, background:s.c}}/></div>
                </div>
              ))}
            </div>
          </section>
          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[13px] font-semibold text-white mb-4">OVERALL IMPACT ALIGNMENT</div>
            <div className="flex justify-center py-4"><Ring pct={87} color="#4ade80" size={180} label="MISSION ALIGNMENT"/></div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[{l:"Regions",v:"142"},{l:"Sectors",v:"18"},{l:"Programs",v:"96"}].map(s=>(
                <div key={s.l} className="text-center rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <div className="text-[16px] font-semibold text-white">{s.v}</div>
                  <div className="text-[9px] tracking-[0.2em] text-slate-500 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  );
}