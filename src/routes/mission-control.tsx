import { createFileRoute } from "@tanstack/react-router";
import {
  Target, Layers, Filter, Map, Network, Fullscreen, ChevronRight, TrendingUp,
  Leaf, Sprout, TreePine, Heart, Rocket, Users, ShieldCheck, Sparkles, AlertTriangle,
  Lightbulb, FlaskConical, Activity, Compass, HandCoins, FileText, UsersRound,
  Zap, Calendar, Waypoints, Wallet, TrendingDown,
} from "lucide-react";
import { AppShell } from "@/components/atlas/AppShell";
import { Globe, HexIcon, Ring, Sparkline } from "@/components/atlas/primitives";

export const Route = createFileRoute("/mission-control")({
  head: () => ({ meta: [{ title: "Mission Control — Atlas Sanctum" }, { name: "description", content: "Real-time overview of regenerative operations and global impact." }] }),
  component: MissionControl,
});

const stats = [
  { icon: Leaf, label: "TOTAL REGENERATIVE VALUE", value: "$2.47T", change: "+12.7%", color: "#4ade80" },
  { icon: Sprout, label: "CARBON REMOVED", value: "1.32B", unit: "tCO₂", change: "+8.4%", color: "#a3e635" },
  { icon: TreePine, label: "HECTARES RESTORED", value: "4.78M", unit: "ha", change: "+7.1%", color: "#facc15" },
  { icon: Heart, label: "LIVES IMPROVED", value: "236.7M", change: "+5.8%", color: "#c084fc" },
  { icon: Rocket, label: "INVESTMENTS MOBILIZED", value: "$98.6B", change: "+10.3%", color: "#22d3ee" },
  { icon: Users, label: "ACTIVE PROJECTS", value: "24,153", change: "+9.3%", color: "#38bdf8" },
  { icon: Zap, label: "IMPACT GENERATED", value: "$1.89T", change: "+11.2%", color: "#f472b6" },
];

const mission = [
  { label: "Planetary Health", pct: 92, color: "#4ade80" },
  { label: "Human Well-being", pct: 85, color: "#22d3ee" },
  { label: "Ecosystem Restoration", pct: 89, color: "#a3e635" },
  { label: "Knowledge Advancement", pct: 90, color: "#c084fc" },
  { label: "Regenerative Economy", pct: 83, color: "#facc15" },
  { label: "Ethical Governance", pct: 88, color: "#38bdf8" },
];

const sectors = [
  { c: "#4ade80", l: "Regenerative Agriculture", pct: "28%", v: "$689B" },
  { c: "#22d3ee", l: "Oceans & Marine Health", pct: "21%", v: "$519B" },
  { c: "#a3e635", l: "Forests & Biodiversity", pct: "17%", v: "$420B" },
  { c: "#38bdf8", l: "Clean Water & Sanitation", pct: "12%", v: "$296B" },
  { c: "#c084fc", l: "Human Health & Wellness", pct: "9%", v: "$222B" },
  { c: "#f59e0b", l: "Renewable Energy", pct: "7%", v: "$173B" },
  { c: "#f472b6", l: "Education & Knowledge", pct: "4%", v: "$99B" },
  { c: "#94a3b8", l: "Other Innovation", pct: "2%", v: "$50B" },
];

const alerts = [
  { icon: Sparkles, c: "#4ade80", t: "Positive Impact Milestone", d: "Mangrove Restoration Initiative has exceeded 100M CO₂ removal target", time: "2m ago" },
  { icon: AlertTriangle, c: "#facc15", t: "Attention Required", d: "Drought risk detected in East Africa region", time: "15m ago" },
  { icon: Lightbulb, c: "#22d3ee", t: "New Opportunity", d: "Blue Carbon project opportunity in Southeast Asia", time: "32m ago" },
  { icon: FlaskConical, c: "#c084fc", t: "Research Breakthrough", d: "New soil regeneration method shows 93% efficiency", time: "1h ago" },
  { icon: Activity, c: "#38bdf8", t: "System Update", d: "AI model update completed for climate forecasting", time: "2h ago" },
];

const insights = [
  { icon: Sprout, c: "#4ade80", t: "Scale Opportunity", d: "Regenerative agriculture projects in Africa show 300% ROI potential", tag: "High Impact" },
  { icon: AlertTriangle, c: "#facc15", t: "Risk Mitigation", d: "Climate risk detected in 12 active project regions", tag: "Medium Risk" },
  { icon: Sparkles, c: "#22d3ee", t: "Optimization", d: "Resource allocation optimization could increase impact by 23%", tag: "High Impact" },
  { icon: UsersRound, c: "#c084fc", t: "Partnership", d: "New partnership opportunity with UNDP for global expansion", tag: "Strategic" },
];

const quick = [
  { icon: Rocket, l: "Launch Project", c: "#4ade80" },
  { icon: HandCoins, l: "Allocate Resources", c: "#22d3ee" },
  { icon: FileText, l: "Generate Report", c: "#facc15" },
  { icon: UsersRound, l: "Contact Partners", c: "#c084fc" },
  { icon: AlertTriangle, l: "Emergency Response", c: "#f472b6" },
  { icon: Activity, l: "System Diagnostics", c: "#38bdf8" },
];

const activity = [
  { t: "Amazon Basin Restoration",       loc: "Brazil · Forest Restoration",      time: "2m ago",  v: "+2,450 ha",   c: "#4ade80" },
  { t: "Mangrove Restoration Initiative",loc: "Indonesia · Coastal Protection",   time: "5m ago",  v: "+1,200 ha",   c: "#22d3ee" },
  { t: "Blue Carbon Project",            loc: "Kenya · Mangrove Conservation",    time: "7m ago",  v: "+750 tCO₂",   c: "#a3e635" },
  { t: "Regenerative Agriculture",       loc: "India · Soil Health Improvement", time: "10m ago", v: "+3,100 ha",   c: "#facc15" },
  { t: "Ocean Plastic Cleanup",          loc: "Pacific Ocean · Waste Removal",    time: "12m ago", v: "+60 tons",    c: "#c084fc" },
];

const rve = [
  { l: "Carbon",           v: "$866.3B", c: "#4ade80" },
  { l: "Biodiversity",     v: "$432.7B", c: "#22d3ee" },
  { l: "Water",            v: "$218.6B", c: "#38bdf8" },
  { l: "Oceans",           v: "$276.4B", c: "#a3e635" },
  { l: "Renewable Energy", v: "$312.8B", c: "#facc15" },
  { l: "Soil Health",      v: "$198.4B", c: "#c084fc" },
  { l: "Circular Economy", v: "$156.3B", c: "#f472b6" },
  { l: "Health & Wellness",v: "$108.7B", c: "#f59e0b" },
];

const topProjects = [
  { t: "Amazon Basin Restoration",         cat: "Forest Restoration",         v: "$286.7M", c: "#4ade80" },
  { t: "Global Mangrove Alliance",         cat: "Coastal Protection",         v: "$198.4M", c: "#22d3ee" },
  { t: "Regenerative Agriculture Network", cat: "Sustainable Agriculture",    v: "$172.3M", c: "#a3e635" },
  { t: "Ocean Plastic Cleanup System",     cat: "Ocean Health",               v: "$156.8M", c: "#38bdf8" },
  { t: "Community Health Initiative",      cat: "Human Health",               v: "$134.6M", c: "#c084fc" },
];

const marketRows = [
  { a: "Carbon Credit (tCO₂)",   p: "$28.45", ch: "+4.32%",  up: true,  vol: "$124.6M" },
  { a: "Biodiversity Credit",    p: "$16.78", ch: "+6.21%",  up: true,  vol: "$98.3M"  },
  { a: "Blue Carbon Credit",     p: "$31.22", ch: "+5.14%",  up: true,  vol: "$67.8M"  },
  { a: "Water Credit (m³)",      p: "$0.86",  ch: "-3.27%", up: false, vol: "$42.7M"  },
  { a: "Soil Health Credit",     p: "$14.63", ch: "+7.18%",  up: true,  vol: "$38.2M"  },
];

const pipeline = [
  { l: "Ideation",   n: 247,   c: "#c084fc" },
  { l: "Planning",   n: 523,   c: "#facc15" },
  { l: "Execution",  n: 1842,  c: "#4ade80" },
  { l: "Monitoring", n: 3521,  c: "#22d3ee" },
];

const allocation = [
  { l: "Agriculture", pct: 28, c: "#4ade80" },
  { l: "Oceans",      pct: 21, c: "#22d3ee" },
  { l: "Forests",     pct: 17, c: "#a3e635" },
  { l: "Water",       pct: 12, c: "#38bdf8" },
  { l: "Energy",      pct: 9,  c: "#facc15" },
  { l: "Health",      pct: 7,  c: "#c084fc" },
  { l: "Education",   pct: 4,  c: "#f472b6" },
  { l: "Other",       pct: 2,  c: "#94a3b8" },
];

const events = [
  { t: "Global Climate Summit",     d: "June 5, 2025",   inN: "18" },
  { t: "Ocean Conservation Day",    d: "June 8, 2025",   inN: "21" },
  { t: "Q2 Impact Review",          d: "June 15, 2025",  inN: "28" },
  { t: "Annual Steward Meeting",    d: "June 30, 2025",  inN: "43" },
];

function MissionControl() {
  return (
    <AppShell active="Mission Control">
      <div className="p-6 space-y-6" data-testid="page-ready">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <HexIcon color="#22d3ee" size={40}><Target className="w-5 h-5" /></HexIcon>
              <h1 className="text-[24px] font-semibold text-white tracking-tight">MISSION CONTROL</h1>
            </div>
            <p className="text-[13px] text-slate-400 mt-1 ml-14">Real-time overview of our regenerative operations and global impact</p>
          </div>
          <div className="flex gap-2">
            {["OVERVIEW","SYSTEMS","INTELLIGENCE","ANALYTICS","OPERATIONS","REPORTS"].map((t,i) => (
              <button key={t} className={`h-9 px-4 rounded-md text-[11px] tracking-[0.15em] ${i===0 ? "bg-cyan-400/15 text-cyan-300 border border-cyan-400/30" : "text-slate-400 hover:text-white border border-transparent"}`}>{t}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[1fr_360px] gap-6">
          <div className="space-y-6">
            <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-[13px] font-semibold text-white">GLOBAL OPERATIONS MAP</div>
                  <div className="text-[11px] text-slate-500">Live view of regenerative projects and ecosystem health</div>
                </div>
              </div>
              <div className="grid grid-cols-[160px_1fr_140px] gap-4">
                <div className="space-y-2">
                  {[
                    { l: "All Projects", v: "24,153", i: Layers },
                    { l: "Active Projects", v: "18,742", i: Activity },
                    { l: "Monitoring", v: "3,521", i: ShieldCheck },
                    { l: "Planned", v: "1,890", i: Compass },
                    { l: "Completed", v: "8,231", i: Sparkles },
                  ].map((k) => (
                    <div key={k.l} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                      <HexIcon color="#22d3ee" size={30}><k.i className="w-3.5 h-3.5" /></HexIcon>
                      <div>
                        <div className="text-[10px] text-slate-500">{k.l}</div>
                        <div className="text-[13px] font-semibold text-white leading-tight">{k.v}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid place-items-center relative">
                  <Globe size={340} />
                  <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 justify-center text-[10px] text-slate-400">
                    {[["Agriculture","#4ade80"],["Oceans","#22d3ee"],["Forests","#a3e635"],["Water","#38bdf8"],["Communities","#f59e0b"],["Health","#c084fc"],["Energy","#facc15"],["Innovation","#f472b6"]].map(([l,c])=>(
                      <span key={l} className="inline-flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full" style={{background:c}}/>{l}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  {[Layers, Filter, Map, Network, Fullscreen].map((I, i) => (
                    <button key={i} className="w-full flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-2.5 text-[11px] text-slate-300 hover:bg-white/10">
                      <I className="w-3.5 h-3.5" /> {["Layers","Filters","Heat Map","Connections","Fullscreen"][i]}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <div className="grid grid-cols-7 gap-3">
              {stats.map((s, i) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
                  <div className="flex items-start gap-2">
                    <HexIcon color={s.color} size={30}><s.icon className="w-3.5 h-3.5" /></HexIcon>
                    <div className="min-w-0">
                      <div className="text-[8px] tracking-[0.15em] text-slate-500">{s.label}</div>
                      <div className="text-white font-semibold text-[16px] leading-tight">{s.value}{s.unit && <span className="text-[10px] text-slate-400 ml-1">{s.unit}</span>}</div>
                    </div>
                  </div>
                  <div className="text-[9.5px] mt-1"><span style={{color:s.color}}>{s.change}</span> <span className="text-slate-500">vs last month</span></div>
                  <Sparkline color={s.color} seed={i+2} />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-[1fr_1.2fr] gap-6">
              <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-[13px] font-semibold text-white">SYSTEMS OVERVIEW</div>
                <div className="text-[11px] text-slate-500">Status of 7 Operating Systems</div>
                <div className="relative mt-6 grid place-items-center h-[260px]">
                  <svg viewBox="0 0 300 260" className="absolute inset-0 w-full h-full">
                    {[[150,60],[70,120],[230,120],[100,220],[200,220]].map(([x,y],i)=>(
                      <line key={i} x1="150" y1="140" x2={x} y2={y} stroke="#22d3ee" strokeOpacity="0.25" strokeDasharray="3 3"/>
                    ))}
                  </svg>
                  <div className="absolute" style={{left:"50%",top:"50%",transform:"translate(-50%,-50%)"}}>
                    <svg viewBox="0 0 100 100" className="w-24 h-24">
                      <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" fill="none" stroke="#22d3ee" strokeWidth="1.5"/>
                      <polygon points="50,25 75,37 75,63 50,75 25,63 25,37" fill="none" stroke="#22d3ee" strokeOpacity="0.6"/>
                    </svg>
                  </div>
                  {[
                    {t:"Purpose OS",c:"#c084fc",x:"46%",y:"6%"},
                    {t:"Knowledge OS",c:"#facc15",x:"78%",y:"32%"},
                    {t:"Regenerative Economy OS",c:"#4ade80",x:"78%",y:"66%"},
                    {t:"Planetary Intelligence OS",c:"#22d3ee",x:"46%",y:"84%"},
                    {t:"Innovation",c:"#f472b6",x:"6%",y:"66%"},
                    {t:"Innovation",c:"#38bdf8",x:"6%",y:"32%"},
                  ].map((n)=>(
                    <div key={n.t+n.x} className="absolute text-center" style={{left:n.x,top:n.y}}>
                      <HexIcon color={n.c} size={38}><Sparkles className="w-4 h-4"/></HexIcon>
                      <div className="text-[10px] text-white mt-1 max-w-[90px]">{n.t}</div>
                      <div className="text-[9px]" style={{color:n.c}}>100%</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-[13px] font-semibold text-white">IMPACT BY SECTOR</div>
                <div className="text-[11px] text-slate-500 mb-4">Distribution of impact across key sectors</div>
                <div className="grid grid-cols-[160px_1fr] gap-4 items-center">
                  <div className="relative">
                    <svg viewBox="0 0 100 100" className="w-40 h-40 -rotate-90">
                      {(() => {
                        let acc = 0; const c = 2*Math.PI*40;
                        return sectors.map((s) => {
                          const p = parseFloat(s.pct)/100;
                          const dash = `${p*c} ${c}`;
                          const el = <circle key={s.l} cx="50" cy="50" r="40" fill="none" stroke={s.c} strokeWidth="14" strokeDasharray={dash} strokeDashoffset={-acc*c}/>;
                          acc += p; return el;
                        });
                      })()}
                    </svg>
                    <div className="absolute inset-0 grid place-items-center text-center">
                      <div>
                        <div className="text-[18px] font-semibold text-white">$2.47T</div>
                        <div className="text-[9px] text-slate-400">Total Impact</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {sectors.map(s=>(
                      <div key={s.l} className="flex items-center gap-2 text-[11px]">
                        <span className="w-2 h-2 rounded-full" style={{background:s.c}}/>
                        <span className="text-slate-300 flex-1 truncate">{s.l}</span>
                        <span className="text-slate-500 tabular-nums w-8 text-right">{s.pct}</span>
                        <span className="text-white tabular-nums w-14 text-right">{s.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <div className="text-[13px] font-semibold text-white">AI INSIGHTS</div>
              <div className="text-[11px] text-slate-500 mb-4">AI-powered strategic recommendations</div>
              <div className="grid grid-cols-5 gap-3">
                {insights.map((n)=>(
                  <div key={n.t} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                    <HexIcon color={n.c} size={36}><n.icon className="w-4 h-4"/></HexIcon>
                    <div className="mt-2 text-[12px] font-semibold text-white">{n.t}</div>
                    <div className="text-[10px] text-slate-400 mt-1 leading-tight">{n.d}</div>
                    <div className="mt-2 inline-block text-[9px] px-2 py-0.5 rounded-full border border-white/10 text-slate-300">{n.tag}</div>
                  </div>
                ))}
                <button className="rounded-lg border border-cyan-400/30 bg-cyan-400/5 grid place-items-center text-cyan-300 text-[11px] tracking-[0.15em] font-semibold">VIEW<br/>ALL INSIGHTS</button>
              </div>
            </section>

            <div className="grid grid-cols-2 gap-6">
              <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-[13px] font-semibold text-white">RVE FLOW OVERVIEW</div>
                <div className="text-[11px] text-slate-500 mb-3">Value flow across markets</div>
                <div className="space-y-1.5">
                  {rve.map(r=>(
                    <div key={r.l} className="flex items-center gap-2 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full" style={{background:r.c}}/>
                      <span className="text-slate-300 flex-1">{r.l}</span>
                      <span className="text-white tabular-nums">{r.v}</span>
                    </div>
                  ))}
                  <div className="pt-2 mt-1 border-t border-white/10 flex justify-between text-[12px]">
                    <span className="text-slate-400">Total Flow</span>
                    <span className="text-white font-semibold">$2.47T</span>
                  </div>
                </div>
              </section>
              <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-[13px] font-semibold text-white">TOP IMPACT PROJECTS</div>
                <div className="text-[11px] text-slate-500 mb-3">By regenerative value</div>
                <div className="space-y-2">
                  {topProjects.map(p=>(
                    <div key={p.t} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                      <HexIcon color={p.c} size={30}><Waypoints className="w-3.5 h-3.5"/></HexIcon>
                      <div className="flex-1 min-w-0">
                        <div className="text-[12px] text-white truncate">{p.t}</div>
                        <div className="text-[10px] text-slate-500 truncate">{p.cat}</div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-[12px] text-white tabular-nums">{p.v}</div>
                        <div className="text-[9px] text-slate-500">Impact Value</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="grid grid-cols-[1fr_1.2fr] gap-6">
              <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-[13px] font-semibold text-white">MARKET OVERVIEW</div>
                <div className="text-[11px] text-slate-500 mb-3">Live market data</div>
                <div className="text-[9px] tracking-[0.2em] text-slate-500 grid grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr] gap-2 pb-2 border-b border-white/10">
                  <span>ASSET</span><span className="text-right">PRICE</span><span className="text-right">24H</span><span className="text-right">VOLUME</span>
                </div>
                {marketRows.map(m=>(
                  <div key={m.a} className="text-[11px] grid grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr] gap-2 py-2 border-b border-white/5 last:border-b-0 items-center">
                    <span className="text-slate-300 truncate">{m.a}</span>
                    <span className="text-white text-right tabular-nums">{m.p}</span>
                    <span className={`text-right tabular-nums inline-flex items-center justify-end gap-1 ${m.up ? "text-emerald-400" : "text-rose-400"}`}>
                      {m.up ? <TrendingUp className="w-3 h-3"/> : <TrendingDown className="w-3 h-3"/>}{m.ch}
                    </span>
                    <span className="text-slate-400 text-right tabular-nums">{m.vol}</span>
                  </div>
                ))}
              </section>
              <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-[13px] font-semibold text-white">IMPACT METRICS TREND</div>
                <div className="text-[11px] text-slate-500 mb-3">12-month trend analysis</div>
                <div className="grid gap-2">
                  {[
                    {l:"Carbon Removed",c:"#4ade80",s:5},
                    {l:"Hectares Restored",c:"#facc15",s:9},
                    {l:"Lives Improved",c:"#c084fc",s:14},
                    {l:"Investments",c:"#22d3ee",s:18},
                  ].map(t=>(
                    <div key={t.l}>
                      <div className="flex justify-between text-[10px]"><span className="text-slate-400">{t.l}</span></div>
                      <Sparkline color={t.c} seed={t.s}/>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <div className="text-[13px] font-semibold text-white">PROJECT PIPELINE</div>
              <div className="text-[11px] text-slate-500 mb-3">Active project pipeline</div>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {pipeline.map(p=>(
                  <div key={p.l} className="rounded-md border border-white/10 bg-white/[0.03] p-2 text-center">
                    <div className="text-[10px] tracking-[0.15em]" style={{color:p.c}}>{p.l.toUpperCase()}</div>
                    <div className="text-[13px] text-white font-semibold mt-0.5">{p.n.toLocaleString()}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[
                  {t:"Coral Reef Restoration",loc:"Australia",v:"$5.2M",c:"#22d3ee"},
                  {t:"Solar Village Initiative",loc:"Kenya",v:"$3.2M",c:"#facc15"},
                  {t:"Great Green Wall",loc:"Africa",v:"$8.9M",c:"#4ade80"},
                  {t:"Mangrove Alliance",loc:"SE Asia",v:"$4.6M",c:"#38bdf8"},
                ].map(p=>(
                  <div key={p.t} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                    <div className="text-[11px] text-white truncate">{p.t}</div>
                    <div className="text-[9px] text-slate-500">{p.loc}</div>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-[9px] px-1.5 py-0.5 rounded-full border border-white/10" style={{color:p.c}}>Exec.</span>
                      <span className="text-[11px] text-white tabular-nums">{p.v}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-4">
            <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-[13px] font-semibold text-white">MISSION STATUS</div>
              <div className="text-[11px] text-slate-500 mb-4">Overall progress to our global mission</div>
              <div className="flex justify-center"><Ring pct={87} color="#4ade80" size={140} label="MISSION ALIGNMENT"/></div>
              <div className="mt-5 space-y-3">
                {mission.map(m=>(
                  <div key={m.label}>
                    <div className="flex justify-between text-[11px]"><span className="text-slate-300">{m.label}</span><span className="text-white">{m.pct}%</span></div>
                    <div className="mt-1 h-1 bg-white/10 rounded-full overflow-hidden"><div className="h-full rounded-full" style={{width:`${m.pct}%`, background:m.color}}/></div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-white/10">
                <div className="text-[10px] tracking-[0.2em] text-slate-500">MISSION TIMELINE</div>
                <div className="text-[10px] text-slate-400 mt-1">2025 – 2040</div>
                <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden"><div className="h-full w-1/2 bg-gradient-to-r from-cyan-400 to-emerald-400"/></div>
                <div className="flex justify-between text-[9px] text-slate-500 mt-1"><span>2025</span><span className="text-cyan-300">2032</span><span>2040</span></div>
              </div>
            </section>

            <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <div className="text-[13px] font-semibold text-white">SMART ALERTS</div>
                  <div className="text-[10px] text-slate-500">AI-powered insights and alerts</div>
                </div>
              </div>
              <div className="space-y-3">
                {alerts.map(a=>(
                  <div key={a.t} className="flex gap-3">
                    <HexIcon color={a.c} size={34}><a.icon className="w-4 h-4"/></HexIcon>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between"><div className="text-[12px] font-medium text-white truncate">{a.t}</div><div className="text-[10px] text-slate-500 shrink-0">{a.time}</div></div>
                      <div className="text-[11px] text-slate-400 leading-tight">{a.d}</div>
                      <a className="text-[10px] text-cyan-400">View</a>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-3 w-full text-[11px] tracking-[0.15em] text-cyan-300 border border-cyan-400/30 rounded-md py-2">VIEW ALL ALERTS</button>
            </section>

            <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-[13px] font-semibold text-white">QUICK ACTIONS</div>
              <div className="text-[10px] text-slate-500 mb-3">Common mission control actions</div>
              <div className="grid grid-cols-3 gap-3">
                {quick.map(q=>(
                  <button key={q.l} className="flex flex-col items-center gap-1.5 p-2 rounded-lg hover:bg-white/5 text-center">
                    <HexIcon color={q.c} size={38}><q.icon className="w-4 h-4"/></HexIcon>
                    <div className="text-[10px] text-slate-300 leading-tight">{q.l}</div>
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <div className="text-[13px] font-semibold text-white">LIVE ACTIVITY FEED</div>
                  <div className="text-[10px] text-slate-500">Real-time regenerative activity</div>
                </div>
                <button className="text-[10px] text-cyan-300 inline-flex items-center gap-1">View all <ChevronRight className="w-3 h-3"/></button>
              </div>
              <div className="space-y-3">
                {activity.map(a=>(
                  <div key={a.t} className="flex gap-3">
                    <HexIcon color={a.c} size={30}><Activity className="w-3.5 h-3.5"/></HexIcon>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between"><div className="text-[11.5px] text-white truncate">{a.t}</div><div className="text-[9px] text-slate-500 shrink-0">{a.time}</div></div>
                      <div className="text-[10px] text-slate-400 truncate">{a.loc}</div>
                      <div className="text-[10px] tabular-nums" style={{color:a.c}}>{a.v}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-[13px] font-semibold text-white">RESOURCE ALLOCATION</div>
              <div className="text-[10px] text-slate-500 mb-3">Current allocation by sector</div>
              <div className="grid grid-cols-[100px_1fr] gap-3 items-center">
                <div className="relative">
                  <svg viewBox="0 0 100 100" className="w-24 h-24 -rotate-90">
                    {(()=>{ let acc=0; const c=2*Math.PI*40; return allocation.map(s=>{const p=s.pct/100; const dash=`${p*c} ${c}`; const el=<circle key={s.l} cx="50" cy="50" r="40" fill="none" stroke={s.c} strokeWidth="14" strokeDasharray={dash} strokeDashoffset={-acc*c}/>; acc+=p; return el;});})()}
                  </svg>
                  <div className="absolute inset-0 grid place-items-center text-center">
                    <div>
                      <div className="text-[12px] font-semibold text-white">$98.6B</div>
                      <div className="text-[8px] text-slate-400">Total</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  {allocation.map(s=>(
                    <div key={s.l} className="flex items-center gap-2 text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full" style={{background:s.c}}/>
                      <span className="text-slate-300 flex-1 truncate">{s.l}</span>
                      <span className="text-white tabular-nums">{s.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-[13px] font-semibold text-white">UPCOMING EVENTS</div>
              <div className="text-[10px] text-slate-500 mb-3">Important events and milestones</div>
              <div className="space-y-2">
                {events.map(e=>(
                  <div key={e.t} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                    <HexIcon color="#22d3ee" size={30}><Calendar className="w-3.5 h-3.5"/></HexIcon>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11.5px] text-white truncate">{e.t}</div>
                      <div className="text-[10px] text-slate-500">{e.d}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[12px] text-white tabular-nums">{e.inN}</div>
                      <div className="text-[9px] text-slate-500">days</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </AppShell>
  );
}