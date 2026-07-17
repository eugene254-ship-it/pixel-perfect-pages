import { createFileRoute } from "@tanstack/react-router";
import { Brain, Sparkles, TrendingUp, Waves, Sprout, Coins, ChevronRight, Leaf, TreePine, Heart, Droplet, Wind, Activity, RefreshCw, Maximize2 } from "lucide-react";
import { AppShell } from "@/components/atlas/AppShell";
import { Globe, HexIcon, Ring, Sparkline } from "@/components/atlas/primitives";

export const Route = createFileRoute("/intelligence")({
  head: () => ({ meta: [{ title: "Impact Intelligence — Atlas Sanctum" }, { name: "description", content: "Real-time planetary regeneration overview and AI insights." }] }),
  component: Intelligence,
});

const layers = [
  ["Climate","#4ade80"],["Biodiversity","#a3e635"],["Water","#38bdf8"],["Oceans","#22d3ee"],
  ["Agriculture","#f59e0b"],["Forests","#4ade80"],["Health","#c084fc"],["Energy","#facc15"],
  ["Infrastructure","#f472b6"],["Economy","#22d3ee"],
] as const;

const scores = [
  { l: "Climate Stability", v: 74 }, { l: "Biodiversity", v: 82 },
  { l: "Ecosystem Vitality", v: 76 }, { l: "Human Wellbeing", v: 79 },
  { l: "Resource Security", v: 73 }, { l: "Regenerative Economy", v: 81 },
];

const insights = [
  { t: "Amazon Reforestation Impact Surging", m: "AI Model: Forest Guardian v2.1", d: "Tree planting in the Amazon has increased carbon sequestration by 23% in the last 30 days.", conf: 94 },
  { t: "Ocean Health Improvement Detected", m: "AI Model: Oceanus v3.4", d: "Coral reef restoration projects are showing 18% higher survival rates than predicted.", conf: 91 },
  { t: "Soil Regeneration Opportunity", m: "AI Model: TerraLens v1.8", d: "7.3M hectares of degraded land identified for high-impact restoration.", conf: 89 },
  { t: "Impact Investment Trend", m: "AI Model: Capital Flow v2.7", d: "Regenerative agriculture investments are projected to yield 2.4x ROI over the next 5 years.", conf: 88 },
];

const kpis = [
  { l: "CARBON SEQUESTRATION", v: "1.42 Gt", sub: "CO₂e", ch: "+15.6%", tot: "Total Sequestered", tv: "12.8 Gt CO₂e", pr: "Projects", pv: "1,234", c: "#4ade80" },
  { l: "BIODIVERSITY IMPACT", v: "8,721", sub: "Species Positively Impacted", ch: "+342", tot: "Habitats Restored", tv: "2.3M ha", pr: "Projects", pv: "987", c: "#22d3ee" },
  { l: "WATER RESTORED", v: "4.28B m³", sub: "Water Restored", ch: "+8.7%", tot: "Lakes Restored", tv: "1,245", pr: "Rivers Protected", pv: "3,672 km", c: "#38bdf8" },
  { l: "COMMUNITIES EMPOWERED", v: "12.6M", sub: "People Empowered", ch: "+18.3%", tot: "Communities", tv: "8,432", pr: "Countries", pv: "143", c: "#c084fc" },
  { l: "REGENERATIVE ECONOMY", v: "$1.26T", sub: "Regenerative Economy Value", ch: "+21.4%", tot: "Businesses", tv: "6,782", pr: "Jobs Created", pv: "3.2M", c: "#facc15" },
];

function Intelligence() {
  return (
    <AppShell active="Impact Intelligence">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[24px] font-semibold text-white tracking-tight flex items-center gap-3"><HexIcon color="#4ade80" size={36}><Brain className="w-4 h-4"/></HexIcon>IMPACT INTELLIGENCE</h1>
            <p className="text-[13px] text-slate-400 ml-12">Real-time Planetary Regeneration Overview</p>
          </div>
          <div className="flex gap-2 text-[11px]">
            {["All Sectors","All Regions","All Projects","Last 30 Days"].map(t=>(<button key={t} className="h-8 px-3 rounded-md bg-white/5 border border-white/10 text-slate-300">{t} ▾</button>))}
            <button className="h-8 w-8 rounded-md bg-white/5 border border-white/10 grid place-items-center text-slate-300"><RefreshCw className="w-3 h-3"/></button>
            <button className="h-8 w-8 rounded-md bg-white/5 border border-white/10 grid place-items-center text-slate-300"><Maximize2 className="w-3 h-3"/></button>
          </div>
        </div>

        <div className="grid grid-cols-[300px_1fr_320px] gap-4">
          <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-[11px] tracking-[0.2em] text-slate-400 mb-3">PLANETARY HEALTH SCORE</div>
            <div className="flex justify-center"><Ring pct={78} color="#4ade80" size={160} label="Good"/></div>
            <div className="text-center text-[11px] text-emerald-400 mt-1">↑ 4.2% <span className="text-slate-500">vs last 30 days</span></div>
            <div className="mt-5 space-y-2">
              <div className="text-[10px] tracking-[0.2em] text-slate-500">SCORE BREAKDOWN</div>
              {scores.map(s=>(
                <div key={s.l}>
                  <div className="flex justify-between text-[11px]"><span className="text-slate-300">{s.l}</span><span className="text-white">{s.v}</span></div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden mt-0.5"><div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400" style={{width:`${s.v}%`}}/></div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex justify-between items-center mb-3">
              <div className="text-[13px] font-semibold text-white">DIGITAL TWIN EARTH</div>
              <div className="flex gap-1 text-[10px]">
                {["Impact","Layers","3D"].map(t=>(<button key={t} className="px-2 py-1 rounded border border-white/10 text-slate-300">{t}</button>))}
              </div>
            </div>
            <div className="grid grid-cols-[130px_1fr] gap-3 items-center">
              <div className="space-y-1">
                {layers.map(([l,c])=>(
                  <div key={l} className="flex items-center gap-2 text-[11px] text-slate-300"><span className="w-2 h-2 rounded-full" style={{background:c}}/>{l}</div>
                ))}
              </div>
              <div className="grid place-items-center"><Globe size={340}/></div>
            </div>
            <div className="mt-4 grid grid-cols-5 gap-2 text-center text-[10px]">
              {[["ACTIVE MONITORING","78.6%","of Earth's Land"],["DATA POINTS","2.58B","↑ 12.4%"],["PREDICTIVE ALERTS","24","↓ 8.3%"],["AI CONFIDENCE","91.3%",""],["DATA FRESHNESS","98.7%","(Real-time)"]].map(([l,v,s])=>(
                <div key={l} className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                  <div className="text-slate-500 text-[8px] tracking-widest">{l}</div>
                  <div className="text-white font-semibold">{v}</div>
                  <div className="text-slate-500 text-[9px]">{s}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-[13px] font-semibold text-white mb-3">AI INSIGHTS</div>
            <div className="space-y-3">
              {insights.map(i=>(
                <div key={i.t} className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
                  <div className="text-[12px] font-semibold text-white">{i.t}</div>
                  <div className="text-[9px] text-cyan-300">{i.m}</div>
                  <div className="text-[10px] text-slate-400 mt-1 leading-tight">{i.d}</div>
                  <div className="flex justify-between mt-2 text-[10px]"><span className="text-slate-500">Confidence: <span className="text-emerald-400">{i.conf}%</span></span><a className="text-cyan-300">View Insight →</a></div>
                </div>
              ))}
            </div>
            <button className="mt-3 w-full text-[11px] text-cyan-300 border border-cyan-400/30 rounded-md py-2">View All Insights</button>
          </section>
        </div>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <div className="text-[11px] tracking-[0.2em] text-slate-400 mb-4">IMPACT AT A GLANCE</div>
          <div className="grid grid-cols-5 gap-4">
            {kpis.map((k,i)=>(
              <div key={k.l} className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                <div className="text-[9px] tracking-[0.15em] text-slate-500">{k.l}</div>
                <div className="text-white font-semibold text-[22px] mt-1">{k.v}</div>
                <div className="text-[10px] text-slate-400">{k.sub}</div>
                <div className="text-[10px] mt-1"><span style={{color:k.c}}>↑ {k.ch}</span> <span className="text-slate-500">vs last 30 days</span></div>
                <Sparkline color={k.c} seed={i+5}/>
                <div className="mt-2 grid grid-cols-2 gap-2 text-[10px]">
                  <div><div className="text-slate-500">{k.tot}</div><div className="text-white">{k.tv}</div></div>
                  <div><div className="text-slate-500">{k.pr}</div><div className="text-white">{k.pv}</div></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}