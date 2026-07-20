import { createFileRoute } from "@tanstack/react-router";
import { HeartPulse, Sparkles } from "lucide-react";
import { AppShell } from "@/components/atlas/AppShell";
import { HexIcon, Sparkline } from "@/components/atlas/primitives";

export const Route = createFileRoute("/mission-control/system-health")({
  head: () => ({ meta: [{ title: "System Health — Mission Control" }, { name: "description", content: "Status of the 7 operating systems powering Atlas Sanctum." }] }),
  component: SystemHealth,
});

const systems = [
  { n: "Purpose OS",                pct: 100, c: "#c084fc", status: "Healthy" },
  { n: "Knowledge OS",              pct: 100, c: "#facc15", status: "Healthy" },
  { n: "Regenerative Economy OS",   pct: 98,  c: "#4ade80", status: "Healthy" },
  { n: "Planetary Intelligence OS", pct: 97,  c: "#22d3ee", status: "Healthy" },
  { n: "Human Flourishing OS",      pct: 96,  c: "#f472b6", status: "Healthy" },
  { n: "Innovation OS",             pct: 99,  c: "#38bdf8", status: "Healthy" },
  { n: "Execution OS",              pct: 95,  c: "#a3e635", status: "Healthy" },
];

function SystemHealth() {
  return (
    <AppShell active="System Health">
      <div className="p-6 space-y-6" data-testid="page-ready">
        <div className="flex items-center gap-3">
          <HexIcon color="#f472b6" size={40}><HeartPulse className="w-5 h-5" /></HexIcon>
          <div>
            <h1 className="text-[22px] font-semibold text-white">SYSTEM HEALTH</h1>
            <p className="text-[12px] text-slate-400">Status of all 7 operating systems</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[{l:"Uptime",v:"99.98%"},{l:"Avg Latency",v:"142ms"},{l:"Incidents (24h)",v:"0"},{l:"Nodes",v:"12,841"}].map(s=>(
            <div key={s.l} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-[9px] tracking-[0.2em] text-slate-500">{s.l}</div>
              <div className="text-[20px] font-semibold text-white mt-1">{s.v}</div>
            </div>
          ))}
        </div>
        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <div className="text-[13px] font-semibold text-white">OPERATING SYSTEMS</div>
          <div className="text-[11px] text-slate-500 mb-4">Real-time health across every OS</div>
          <div className="grid grid-cols-2 gap-3">
            {systems.map((s,i)=>(
              <div key={s.n} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-start gap-3">
                  <HexIcon color={s.c} size={36}><Sparkles className="w-4 h-4"/></HexIcon>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <div className="text-[13px] font-semibold text-white truncate">{s.n}</div>
                      <div className="text-[11px] tabular-nums" style={{color:s.c}}>{s.pct}%</div>
                    </div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">{s.status}</div>
                    <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden"><div className="h-full rounded-full" style={{width:`${s.pct}%`, background:s.c}}/></div>
                  </div>
                </div>
                <Sparkline color={s.c} seed={i+7}/>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}