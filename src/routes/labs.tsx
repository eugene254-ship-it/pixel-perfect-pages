import { createFileRoute } from "@tanstack/react-router";
import { FlaskConical, Search, ChevronRight, Sparkles, Leaf, Waves, Recycle, Wind, Heart, Users, TrendingUp, Sprout } from "lucide-react";
import { AppShell } from "@/components/atlas/AppShell";
import { Globe, HexIcon, Sparkline } from "@/components/atlas/primitives";

export const Route = createFileRoute("/labs")({
  head: () => ({ meta: [{ title: "Innovation Labs — Atlas Sanctum" }, { name: "description", content: "Accelerating regenerative breakthroughs." }] }),
  component: Labs,
});

const heroStats = [
  { l: "Active Labs", v: "352", i: FlaskConical, c: "#4ade80" },
  { l: "Researchers", v: "1,248", i: Users, c: "#22d3ee" },
  { l: "Live Experiments", v: "384", i: Sparkles, c: "#c084fc" },
  { l: "Countries", v: "128", i: Globe as any, c: "#38bdf8" },
  { l: "Innovations", v: "2,847", i: Sprout, c: "#facc15" },
  { l: "Funding Deployed", v: "$1.42B", i: TrendingUp, c: "#a3e635" },
];

const pipeline = [
  { l: "IDEAS SUBMITTED", v: "2,317", ch: "+16%" },
  { l: "CONCEPT VALIDATION", v: "1,248", ch: "+22%" },
  { l: "LAB RESEARCH", v: "842", ch: "+15%" },
  { l: "FIELD TESTING", v: "428", ch: "+12%" },
  { l: "SCALING SOLUTIONS", v: "156", ch: "+25%" },
  { l: "DEPLOYED IMPACT", v: "73", ch: "+31%" },
];

const labs = [
  { n: "TerraGenesis Lab", d: "Regenerative agriculture & soil biology", loc: "Nairobi, Kenya", p: 12, f: "$8.4M", img: "linear-gradient(135deg,#052e16,#166534)" },
  { n: "Blue Horizon Lab", d: "Ocean restoration & marine biotechnology", loc: "Monterey, USA", p: 9, f: "$6.7M", img: "linear-gradient(135deg,#082f49,#164e63)" },
  { n: "BioCirculate Lab", d: "Circular bioeconomy & waste-to-value", loc: "Amsterdam, Netherlands", p: 7, f: "$5.2M", img: "linear-gradient(135deg,#365314,#166534)" },
  { n: "CarbonBridge Lab", d: "Carbon removal & climate solutions", loc: "Reykjavik, Iceland", p: 10, f: "$7.9M", img: "linear-gradient(135deg,#0c4a6e,#164e63)" },
  { n: "EcoHealth Lab", d: "Human health & ecosystem health", loc: "Singapore", p: 8, f: "$4.3M", img: "linear-gradient(135deg,#4a044e,#831843)" },
];

const experiments = [
  { n: "Biochar + Microbial Synergy", lab: "TerraGenesis Lab", focus: "Soil Regeneration", stage: "Field Testing", pct: 72, imp: "High" },
  { n: "Kelp Forest Restoration", lab: "Blue Horizon Lab", focus: "Ocean Ecosystems", stage: "Pilot Phase", pct: 58, imp: "High" },
  { n: "Mycelium Construction Panels", lab: "BioCirculate Lab", focus: "Sustainable Materials", stage: "Prototype", pct: 41, imp: "Medium" },
  { n: "Direct Air Capture Nanomaterials", lab: "CarbonBridge Lab", focus: "Carbon Removal", stage: "Lab Testing", pct: 63, imp: "High" },
  { n: "Microbiome Health Mapping", lab: "EcoHealth Lab", focus: "Human & Planetary Health", stage: "Data Collection", pct: 37, imp: "Medium" },
];

const trending = [
  { n: "Regenerative Agriculture", ch: "+32%" },
  { n: "Blue Economy", ch: "+28%" },
  { n: "Carbon Removal", ch: "+26%" },
  { n: "Bioeconomy", ch: "+21%" },
  { n: "Climate Adaptation", ch: "+18%" },
  { n: "Circular Materials", ch: "+16%" },
];

function Labs() {
  return (
    <AppShell active="Innovation Labs">
      <div className="p-6 space-y-6" data-testid="page-ready">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[24px] font-semibold text-white tracking-tight">INNOVATION LABS</h1>
            <p className="text-[13px] text-slate-400">Accelerating Regenerative Breakthroughs</p>
          </div>
          <div className="relative w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"/>
            <input placeholder="Search labs, technologies, researchers, IP, solutions..." className="w-full h-10 rounded-md bg-white/5 border border-white/10 pl-9 pr-12 text-[12px] text-slate-300 outline-none"/>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-500">⌘K</span>
          </div>
        </div>

        <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-4">
          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 relative overflow-hidden">
            <h2 className="text-[24px] font-semibold text-white leading-tight">Where Ideas Regenerate<br/>The Future</h2>
            <p className="mt-3 text-[12px] text-slate-400 max-w-md">A global network of labs, scientists, engineers, and visionaries building breakthrough solutions for a thriving planet.</p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {heroStats.map(s=>(
                <div key={s.l} className="flex items-center gap-2">
                  <HexIcon color={s.c} size={30}><s.i className="w-3.5 h-3.5"/></HexIcon>
                  <div><div className="text-white text-[14px] font-semibold">{s.v}</div><div className="text-[9px] text-slate-500">{s.l}</div></div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <button className="h-10 px-5 rounded-md bg-emerald-400 text-slate-900 text-[12px] font-semibold">Explore Labs</button>
              <button className="h-10 px-5 rounded-md border border-white/15 text-slate-200 text-[12px]">Submit Innovation</button>
            </div>
            <div className="absolute -right-10 -top-10 opacity-30"><Globe size={280}/></div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[11px] tracking-[0.2em] text-slate-400 mb-3">INNOVATION PIPELINE</div>
            <div className="grid grid-cols-[80px_1fr] gap-3 items-center">
              <svg viewBox="0 0 80 200" className="w-20 h-full">
                {pipeline.map((_,i)=>{const w=70-i*10;const x=(80-w)/2; return <rect key={i} x={x} y={i*30+5} width={w} height={22} rx="2" fill="none" stroke="#22d3ee" strokeOpacity="0.5"/>;})}
              </svg>
              <div className="space-y-1.5">
                {pipeline.map(p=>(
                  <div key={p.l}><div className="text-[9px] text-slate-500 tracking-widest">{p.l}</div><div className="flex justify-between"><span className="text-white text-[13px] font-semibold">{p.v}</span><span className="text-emerald-400 text-[10px]">↑ {p.ch}</span></div></div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-[13px] font-semibold text-white mb-3">AI RESEARCH ASSISTANT</div>
            <div className="grid place-items-center py-2">
              <HexIcon color="#c084fc" size={70}><Sparkles className="w-6 h-6"/></HexIcon>
              <div className="text-[11px] text-slate-400 mt-2 text-center">Ask me anything about regenerative innovation</div>
            </div>
            <div className="space-y-2 mt-2">
              {["Show me carbon-negative materials in development","Find labs working on ocean alkalinization","What are the top funded nature-based solutions?"].map(q=>(
                <button key={q} className="w-full text-left text-[10px] text-slate-300 bg-white/5 rounded-md p-2 border border-white/10">{q}</button>
              ))}
            </div>
            <button className="mt-3 w-full h-9 rounded-md bg-emerald-400 text-slate-900 text-[11px] font-semibold">Start New Research</button>
          </section>
        </div>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <div className="flex justify-between items-center mb-3">
            <div className="text-[13px] font-semibold text-white">FEATURED INNOVATION LABS</div>
            <a className="text-[11px] text-cyan-300">View all labs →</a>
          </div>
          <div className="grid grid-cols-5 gap-3">
            {labs.map(l=>(
              <div key={l.n} className="rounded-lg overflow-hidden border border-white/10 bg-white/[0.03]">
                <div className="h-28 relative" style={{background:l.img}}>
                  <span className="absolute top-2 left-2 text-[9px] tracking-widest text-emerald-300 border border-emerald-400/30 bg-emerald-400/10 rounded px-1.5 py-0.5">VERIFIED LAB</span>
                </div>
                <div className="p-3">
                  <div className="text-[12px] font-semibold text-white">{l.n}</div>
                  <div className="text-[10px] text-slate-400 leading-tight">{l.d}</div>
                  <div className="text-[9px] text-slate-500 mt-1">📍 {l.loc}</div>
                  <div className="text-[9px] text-emerald-400 mt-0.5">● Active Project</div>
                  <div className="mt-2 flex justify-between text-[10px]"><span className="text-slate-500">{l.p} Projects</span><span className="text-white">{l.f} Funding</span></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-[1fr_320px] gap-6">
          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="flex justify-between items-center mb-3">
              <div>
                <div className="text-[13px] font-semibold text-white">ACTIVE EXPERIMENTS</div>
                <div className="text-[10px] text-slate-500">Real-time overview of groundbreaking research in progress</div>
              </div>
              <a className="text-[11px] text-cyan-300">View all experiments →</a>
            </div>
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] gap-2 text-[9px] text-slate-500 tracking-widest mb-2">
              <div>EXPERIMENT</div><div>LAB</div><div>FOCUS AREA</div><div>STAGE</div><div>PROGRESS</div><div>IMPACT POTENTIAL</div>
            </div>
            <div className="space-y-2">
              {experiments.map(e=>(
                <div key={e.n} className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] gap-2 items-center text-[11px] py-2 border-t border-white/5">
                  <div className="flex items-center gap-1.5 text-white"><Sprout className="w-3 h-3 text-emerald-400"/>{e.n}</div>
                  <div className="text-slate-300">{e.lab}</div>
                  <div className="text-slate-300">{e.focus}</div>
                  <div className="text-slate-300">{e.stage}</div>
                  <div className="flex items-center gap-2"><div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-emerald-400" style={{width:`${e.pct}%`}}/></div><span className="text-white">{e.pct}%</span></div>
                  <div className={e.imp==="High"?"text-emerald-400":"text-amber-400"}>{e.imp}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-[13px] font-semibold text-white mb-3">TRENDING INNOVATION AREAS</div>
            <div className="space-y-2">
              {trending.map(t=>(
                <div key={t.n} className="flex justify-between text-[11px]"><span className="text-slate-300">{t.n}</span><span className="text-emerald-400">↑ {t.ch}</span></div>
              ))}
            </div>
            <a className="text-[11px] text-cyan-300 mt-3 inline-block">View all trends →</a>
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="text-[13px] font-semibold text-white mb-3">UPCOMING LAB EVENTS</div>
              <div className="space-y-2 text-[10px]">
                {[["Global Biochar Innovation Seed Fund","May 24, 2025 • Online"],["Climate Innovation Challenthon","Jun 02-04, 2025 • Lisbon, Portugal"],["Climate Tech Demo Day","Jun 18, 2025 • San Francisco, USA"]].map(([t,d])=>(
                  <div key={t as string}><div className="text-white text-[11px]">{t}</div><div className="text-slate-500">{d}</div></div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <div className="text-[11px] tracking-[0.2em] text-slate-400 mb-3">INNOVATION IMPACT (This Year)</div>
          <div className="grid grid-cols-5 gap-4">
            {[
              { l: "Tons CO₂ Potential Removed", v: "1.7M", i: Leaf, c: "#4ade80" },
              { l: "Hectares Ecosystems Restored", v: "2.4M", i: Sprout, c: "#a3e635" },
              { l: "Lives Potentially Impacted", v: "8.3M", i: Heart, c: "#c084fc" },
              { l: "Value Potential Generated", v: "$3.2B", i: TrendingUp, c: "#facc15" },
              { l: "Solutions In Development", v: "492", i: FlaskConical, c: "#22d3ee" },
            ].map(k=>(
              <div key={k.l} className="flex items-center gap-3">
                <HexIcon color={k.c} size={44}><k.i className="w-5 h-5"/></HexIcon>
                <div><div className="text-[22px] font-semibold text-white leading-none">{k.v}</div><div className="text-[10px] text-slate-400 mt-1">{k.l}</div></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}