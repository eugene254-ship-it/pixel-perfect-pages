import { createFileRoute } from "@tanstack/react-router";
import { Sprout, Waves, TreePine, Droplet, Heart, Wind, Recycle, Users, ChevronRight, TrendingUp, Leaf, Sparkles, AlertTriangle, HandCoins, FileText, UsersRound, Rocket, Activity } from "lucide-react";
import { AppShell } from "@/components/atlas/AppShell";
import { Globe, HexIcon, Ring, Sparkline } from "@/components/atlas/primitives";

export const Route = createFileRoute("/ecosystems")({
  head: () => ({ meta: [{ title: "Ecosystems — Atlas Sanctum" }, { name: "description", content: "Integrated ecosystems for planetary regeneration and human flourishing." }] }),
  component: Ecosystems,
});

const totals = [
  { i: Leaf, l: "TOTAL ECOSYSTEMS", v: "8", sub: "Active & Integrated", c: "#4ade80" },
  { i: Sparkles, l: "TOTAL IMPACT", v: "$2.47T", sub: "Regenerative Value", ch: "+12.7%", c: "#22d3ee" },
  { i: Sprout, l: "TOTAL PROJECTS", v: "24,153", sub: "Across All Ecosystems", ch: "+9.3%", c: "#c084fc" },
  { i: TreePine, l: "HECTARES RESTORED", v: "4.78M", sub: "Total Land & Ocean Area", ch: "+7.1%", c: "#facc15" },
  { i: Heart, l: "LIVES IMPACTED", v: "236.7M", sub: "People Benefiting", ch: "+5.8%", c: "#f472b6" },
];

const eco = [
  { icon: Sprout, name: "AGRICULTURE", tag: "HEALTHY", desc: "Regenerative agriculture, soil health, and sustainable food systems.", pct: 92, c: "#4ade80", stats: [["Projects","3,247"],["Impact Value","$612.3B"],["Hectares","2.14M"]], img: "linear-gradient(135deg,#14532d,#166534,#365314)" },
  { icon: Waves, name: "OCEANS & BLUE ECONOMY", tag: "HEALTHY", desc: "Restoring ocean health, supporting marine life and blue economies.", pct: 89, c: "#22d3ee", stats: [["Projects","2,118"],["Impact Value","$423.7B"],["Marine Area","12.6M km²"]], img: "linear-gradient(135deg,#0c4a6e,#075985,#155e75)" },
  { icon: TreePine, name: "FORESTS & BIODIVERSITY", tag: "HEALTHY", desc: "Protecting forests, wildlife and enhancing biodiversity.", pct: 90, c: "#a3e635", stats: [["Projects","2,943"],["Impact Value","$198.4B"],["Hectares","1.87M"]], img: "linear-gradient(135deg,#052e16,#14532d,#365314)" },
  { icon: Droplet, name: "WATER", tag: "HEALTHY", desc: "Conserving freshwater resources and ensuring clean water access.", pct: 86, c: "#38bdf8", stats: [["Projects","1,842"],["Impact Value","$152.6B"],["People Impacted","68.7M"]], img: "linear-gradient(135deg,#082f49,#0c4a6e,#164e63)" },
  { icon: Heart, name: "HUMAN HEALTH", tag: "HEALTHY", desc: "Improving physical, mental and community health worldwide.", pct: 88, c: "#c084fc", stats: [["Projects","2,356"],["Impact Value","$186.2B"],["Lives Impacted","95.3M"]], img: "linear-gradient(135deg,#4a044e,#701a75,#86198f)" },
  { icon: Wind, name: "ENERGY", tag: "HEALTHY", desc: "Transitioning to clean, renewable and resilient energy systems.", pct: 87, c: "#facc15", stats: [["Projects","1,423"],["Impact Value","$173.8B"],["CO₂ Avoided","1.32B tCO₂"]], img: "linear-gradient(135deg,#78350f,#92400e,#a16207)" },
  { icon: Recycle, name: "CIRCULAR ECONOMY", tag: "HEALTHY", desc: "Building waste-free systems and circular value chains.", pct: 85, c: "#4ade80", stats: [["Projects","1,987"],["Impact Value","$142.9B"],["Material Recovered","4.6M t"]], img: "linear-gradient(135deg,#14532d,#166534,#365314)" },
  { icon: Users, name: "COMMUNITIES & CULTURE", tag: "HEALTHY", desc: "Empowering communities and preserving culture for a thriving future.", pct: 84, c: "#f472b6", stats: [["Projects","2,237"],["Impact Value","$109.2B"],["Communities","24.7K"]], img: "linear-gradient(135deg,#500724,#831843,#9f1239)" },
];

const integration = [
  { l: "Agriculture", v: 92, c: "#4ade80" },
  { l: "Oceans", v: 89, c: "#22d3ee" },
  { l: "Forests", v: 90, c: "#a3e635" },
  { l: "Water", v: 86, c: "#38bdf8" },
  { l: "Human Health", v: 88, c: "#c084fc" },
  { l: "Energy", v: 87, c: "#facc15" },
  { l: "Circular Economy", v: 85, c: "#4ade80" },
  { l: "Communities", v: 84, c: "#f472b6" },
];

const priorities = [
  { icon: Sprout, t: "Scale Regenerative Agriculture", d: "Expand regenerative farming to 10M hectares", pct: 72, c: "#4ade80", tag: "High Impact" },
  { icon: Waves, t: "Ocean Restoration Initiative", d: "Restore 15M km² of ocean by 2030", pct: 68, c: "#22d3ee" },
  { icon: Droplet, t: "Clean Water for All", d: "Provide clean water access to 100M people", pct: 64, c: "#38bdf8" },
  { icon: TreePine, t: "Biodiversity Protection", d: "Protect 30% of critical habitats", pct: 61, c: "#a3e635" },
  { icon: Users, t: "Community Empowerment", d: "Empower 50K communities globally", pct: 58, c: "#f472b6" },
];

function EcoCard({ e }: { e: typeof eco[number] }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.02]">
      <div className="relative h-32" style={{ background: e.img }}>
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.15), transparent 60%)" }} />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <HexIcon color={e.c} size={36}><e.icon className="w-4 h-4" /></HexIcon>
          <div className="text-[11px] font-semibold tracking-wider text-white">{e.name}</div>
        </div>
        <span className="absolute top-3 right-3 text-[9px] tracking-widest text-emerald-300 border border-emerald-400/30 bg-emerald-400/10 rounded px-1.5 py-0.5">{e.tag}</span>
      </div>
      <div className="p-3">
        <div className="text-[11px] text-slate-400 leading-tight">{e.desc}</div>
        <div className="mt-3 flex items-center gap-3">
          <Ring pct={e.pct} color={e.c} size={70} label="Health Index" />
          <div className="flex-1 space-y-1.5 text-[11px]">
            {e.stats.map(([l, v]) => (
              <div key={l} className="flex justify-between"><span className="text-slate-500">{l}</span><span className="text-white font-medium">{v}</span></div>
            ))}
          </div>
        </div>
        <button className="mt-3 w-full inline-flex items-center justify-between text-[10px] tracking-[0.2em] text-cyan-300 border border-cyan-400/20 bg-cyan-400/5 rounded px-3 py-2">EXPLORE <ChevronRight className="w-3 h-3"/></button>
      </div>
    </div>
  );
}

function Ecosystems() {
  return (
    <AppShell active="Ecosystems">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[24px] font-semibold text-white tracking-tight">ECOSYSTEMS</h1>
            <p className="text-[13px] text-slate-400">Integrated ecosystems for planetary regeneration and human flourishing</p>
          </div>
          <div className="flex gap-2">
            {["OVERVIEW","ECOSYSTEMS","INTELLIGENCE","ANALYTICS","PROJECTS","REPORTS"].map((t,i) => (
              <button key={t} className={`h-9 px-4 rounded-md text-[11px] tracking-[0.15em] ${i===1 ? "bg-cyan-400/15 text-cyan-300 border border-cyan-400/30" : "text-slate-400 hover:text-white"}`}>{t}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-5 gap-3">
          {totals.map((s,i)=>(
            <div key={s.l} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-start gap-2">
                <HexIcon color={s.c} size={34}><s.i className="w-4 h-4"/></HexIcon>
                <div>
                  <div className="text-[8.5px] tracking-[0.15em] text-slate-500">{s.l}</div>
                  <div className="text-white font-semibold text-[18px] leading-tight">{s.v}</div>
                  <div className="text-[10px] text-slate-400">{s.sub}</div>
                </div>
              </div>
              {s.ch && <div className="mt-2 text-[10px]"><span style={{color:s.c}}>↑ {s.ch}</span> <span className="text-slate-500">vs last month</span></div>}
              {s.ch && <Sparkline color={s.c} seed={i+3}/>}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[1fr_360px] gap-6">
          <div className="space-y-6">
            <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <div className="text-[13px] font-semibold text-white mb-4">EXPLORE ALL ECOSYSTEMS</div>
              <div className="grid grid-cols-[1fr_320px_1fr] gap-4 items-center">
                <EcoCard e={eco[0]}/>
                <div className="grid place-items-center"><Globe size={280}/></div>
                <EcoCard e={eco[1]}/>
              </div>
            </section>

            <div className="grid grid-cols-4 gap-4">
              {eco.slice(2,6).map(e => <EcoCard key={e.name} e={e}/>)}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {eco.slice(6).map(e => <EcoCard key={e.name} e={e}/>)}
            </div>

            <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <div className="text-[13px] font-semibold text-white">ECOSYSTEM INSIGHTS & RECOMMENDATIONS</div>
              <div className="grid grid-cols-5 gap-3 mt-3">
                {[
                  { i: Sparkles, t: "Synergy Opportunity", d: "Integrating Agriculture and Water projects in South Asia could increase impact by 23%.", c: "#4ade80", tag: "View Insight" },
                  { i: AlertTriangle, t: "Risk Alert", d: "Coral bleaching risk increasing in Indian Ocean. Immediate action recommended.", c: "#f472b6", tag: "View Alert" },
                  { i: TrendingUp, t: "Positive Trend", d: "Soil health improving globally with 15% increase in organic matter.", c: "#a3e635", tag: "View Trend" },
                  { i: Rocket, t: "Innovation Highlight", d: "New biochar technology shows promising results in carbon sequestration.", c: "#22d3ee", tag: "View Innovation" },
                  { i: HandCoins, t: "Funding Opportunity", d: "$500M funding available for community-led restoration projects.", c: "#facc15", tag: "View Opportunity" },
                ].map(n=>(
                  <div key={n.t} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                    <HexIcon color={n.c} size={34}><n.i className="w-4 h-4"/></HexIcon>
                    <div className="mt-2 text-[12px] font-semibold text-white">{n.t}</div>
                    <div className="text-[10px] text-slate-400 mt-1 leading-tight">{n.d}</div>
                    <button className="mt-2 text-[10px] text-cyan-300 border border-cyan-400/20 px-2 py-0.5 rounded">{n.tag}</button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-4">
            <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-[13px] font-semibold text-white mb-3">ECOSYSTEM INTEGRATION</div>
              <div className="relative grid place-items-center h-[200px]">
                <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-40">
                  <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" fill="none" stroke="#22d3ee"/>
                </svg>
                <HexIcon color="#22d3ee" size={60}><Sparkles className="w-6 h-6"/></HexIcon>
              </div>
              <div className="space-y-2 mt-2">
                {integration.map(i=>(
                  <div key={i.l} className="flex items-center gap-2 text-[11px]">
                    <span className="w-2 h-2 rounded-full" style={{background:i.c}}/>
                    <span className="text-slate-300 flex-1">{i.l}</span>
                    <span className="text-white">{i.v}%</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex justify-between items-center mb-3">
                <div className="text-[13px] font-semibold text-white">ECOSYSTEM IMPACT OVERVIEW</div>
                <span className="text-[10px] text-slate-400 border border-white/10 rounded px-2 py-0.5">This Year</span>
              </div>
              <div className="flex items-end gap-4">
                <div className="text-[10px] text-slate-500">3T<br/>2T<br/>1T<br/>0</div>
                <div className="flex-1"><Sparkline color="#4ade80" seed={9}/></div>
                <div className="text-right">
                  <div className="text-[18px] font-semibold text-white">$2.47T</div>
                  <div className="text-[10px] text-slate-400">Total Impact Value</div>
                  <div className="text-[10px] text-emerald-400 mt-1">↑ 12.7% vs last year</div>
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-[13px] font-semibold text-white mb-3">TOP ECOSYSTEM PRIORITIES</div>
              <div className="space-y-3">
                {priorities.map(p=>(
                  <div key={p.t} className="flex gap-3">
                    <HexIcon color={p.c} size={32}><p.icon className="w-4 h-4"/></HexIcon>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between"><div className="text-[11px] font-medium text-white truncate">{p.t}</div>{p.tag && <span className="text-[9px] text-emerald-300 border border-emerald-400/30 rounded px-1.5">{p.tag}</span>}</div>
                      <div className="text-[10px] text-slate-400">{p.d}</div>
                      <div className="mt-1 flex items-center gap-2">
                        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden"><div className="h-full" style={{background:p.c, width:`${p.pct}%`}}/></div>
                        <span className="text-[10px] text-white">{p.pct}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full text-[11px] tracking-[0.15em] text-cyan-300 border border-cyan-400/30 rounded-md py-2">VIEW ALL PRIORITIES</button>
            </section>
          </div>
        </div>
      </div>
    </AppShell>
  );
}