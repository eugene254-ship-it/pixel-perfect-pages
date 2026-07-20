import { createFileRoute } from "@tanstack/react-router";
import { Map as MapIcon, Layers, Filter, Network, Fullscreen, Activity, ShieldCheck, Compass, Sparkles } from "lucide-react";
import { AppShell } from "@/components/atlas/AppShell";
import { Globe, HexIcon } from "@/components/atlas/primitives";

export const Route = createFileRoute("/mission-control/global-map")({
  head: () => ({ meta: [{ title: "Global Map — Mission Control" }, { name: "description", content: "Full-screen live map of regenerative projects and ecosystem health." }] }),
  component: GlobalMap,
});

const regions = [
  { r: "North America", p: "4,213", h: 92, c: "#4ade80" },
  { r: "South America", p: "3,124", h: 88, c: "#22d3ee" },
  { r: "Europe",        p: "5,712", h: 95, c: "#a3e635" },
  { r: "Africa",        p: "4,890", h: 81, c: "#facc15" },
  { r: "Asia",          p: "5,317", h: 86, c: "#38bdf8" },
  { r: "Oceania",       p: "897",   h: 90, c: "#c084fc" },
];

function GlobalMap() {
  return (
    <AppShell active="Global Map">
      <div className="p-6 space-y-6" data-testid="page-ready">
        <div className="flex items-center gap-3">
          <HexIcon color="#22d3ee" size={40}><MapIcon className="w-5 h-5" /></HexIcon>
          <div>
            <h1 className="text-[22px] font-semibold text-white">GLOBAL MAP</h1>
            <p className="text-[12px] text-slate-400">Full-screen view of active regenerative operations</p>
          </div>
        </div>
        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
          <div className="grid grid-cols-[180px_1fr_160px] gap-6 items-center">
            <div className="space-y-2">
              {[{l:"All Projects",v:"24,153",i:Layers},{l:"Active",v:"18,742",i:Activity},{l:"Monitoring",v:"3,521",i:ShieldCheck},{l:"Planned",v:"1,890",i:Compass},{l:"Completed",v:"8,231",i:Sparkles}].map(k=>(
                <div key={k.l} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                  <HexIcon color="#22d3ee" size={30}><k.i className="w-3.5 h-3.5"/></HexIcon>
                  <div>
                    <div className="text-[10px] text-slate-500">{k.l}</div>
                    <div className="text-[13px] font-semibold text-white">{k.v}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid place-items-center"><Globe size={420} /></div>
            <div className="space-y-2">
              {[Layers, Filter, MapIcon, Network, Fullscreen].map((I,i)=>(
                <button key={i} className="w-full flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-2.5 text-[11px] text-slate-300 hover:bg-white/10">
                  <I className="w-3.5 h-3.5"/> {["Layers","Filters","Heat Map","Connections","Fullscreen"][i]}
                </button>
              ))}
            </div>
          </div>
        </section>
        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <div className="text-[13px] font-semibold text-white mb-3">REGIONAL BREAKDOWN</div>
          <div className="grid grid-cols-3 gap-3">
            {regions.map(r=>(
              <div key={r.r} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between">
                  <div className="text-[12px] text-white">{r.r}</div>
                  <div className="text-[10px] tabular-nums" style={{color:r.c}}>{r.h}%</div>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">{r.p} projects</div>
                <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{width:`${r.h}%`, background:r.c}} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}