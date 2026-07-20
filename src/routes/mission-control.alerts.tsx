import { createFileRoute } from "@tanstack/react-router";
import { BellRing, Sparkles, AlertTriangle, Lightbulb, FlaskConical, Activity } from "lucide-react";
import { AppShell } from "@/components/atlas/AppShell";
import { HexIcon } from "@/components/atlas/primitives";

export const Route = createFileRoute("/mission-control/alerts")({
  head: () => ({ meta: [{ title: "Alerts & Events — Mission Control" }, { name: "description", content: "AI-powered alerts and mission events across the platform." }] }),
  component: AlertsPage,
});

const items = [
  { icon: Sparkles, c: "#4ade80", sev: "Info",     t: "Positive Impact Milestone", d: "Mangrove Restoration Initiative exceeded 100M CO₂ removal target.", time: "2m ago" },
  { icon: AlertTriangle, c: "#facc15", sev: "Warning", t: "Attention Required", d: "Drought risk detected in East Africa region.", time: "15m ago" },
  { icon: Lightbulb, c: "#22d3ee", sev: "Info",     t: "New Opportunity", d: "Blue Carbon project opportunity in Southeast Asia.", time: "32m ago" },
  { icon: FlaskConical, c: "#c084fc", sev: "Info",   t: "Research Breakthrough", d: "New soil regeneration method shows 93% efficiency.", time: "1h ago" },
  { icon: Activity, c: "#38bdf8", sev: "Info",       t: "System Update", d: "AI model update completed for climate forecasting.", time: "2h ago" },
  { icon: AlertTriangle, c: "#f472b6", sev: "Critical", t: "Deforestation Spike", d: "Amazon Basin anomaly — 3× baseline rate detected.", time: "4h ago" },
];

const filters = ["All","Critical","Warning","Info"];

function AlertsPage() {
  return (
    <AppShell active="Alerts & Events">
      <div className="p-6 space-y-6" data-testid="page-ready">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HexIcon color="#facc15" size={40}><BellRing className="w-5 h-5" /></HexIcon>
            <div>
              <h1 className="text-[22px] font-semibold text-white">ALERTS & EVENTS</h1>
              <p className="text-[12px] text-slate-400">Real-time AI-powered alerts and mission events</p>
            </div>
          </div>
          <div className="flex gap-2">
            {filters.map((f,i)=>(
              <button key={f} className={`h-8 px-3 rounded-md text-[11px] tracking-[0.15em] ${i===0 ? "bg-cyan-400/15 text-cyan-300 border border-cyan-400/30" : "text-slate-400 border border-white/10"}`}>{f}</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[{l:"Open",v:"14",c:"#facc15"},{l:"Critical",v:"1",c:"#f472b6"},{l:"Resolved (24h)",v:"38",c:"#4ade80"},{l:"Mean Time to Resolve",v:"22m",c:"#22d3ee"}].map(s=>(
            <div key={s.l} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-[9px] tracking-[0.2em] text-slate-500">{s.l}</div>
              <div className="text-[20px] font-semibold mt-1" style={{color:s.c}}>{s.v}</div>
            </div>
          ))}
        </div>
        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <div className="text-[13px] font-semibold text-white mb-3">EVENT STREAM</div>
          <div className="space-y-3">
            {items.map(a=>(
              <div key={a.t} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3">
                <HexIcon color={a.c} size={36}><a.icon className="w-4 h-4"/></HexIcon>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <div className="text-[12px] font-medium text-white">{a.t}</div>
                    <div className="text-[10px] text-slate-500">{a.time}</div>
                  </div>
                  <div className="text-[11px] text-slate-400">{a.d}</div>
                  <div className="mt-1 inline-block text-[9px] px-2 py-0.5 rounded-full border border-white/10 text-slate-300">{a.sev}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}