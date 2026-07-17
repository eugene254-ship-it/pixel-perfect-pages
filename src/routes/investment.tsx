import { createFileRoute } from "@tanstack/react-router";
import { Wallet, Sparkles, ChevronRight, Search, TrendingUp, Sprout, Leaf, Waves, Wind, Recycle, Droplet, Heart, Coins, Package, Users } from "lucide-react";
import { AppShell } from "@/components/atlas/AppShell";
import { HexIcon, Ring, Sparkline } from "@/components/atlas/primitives";

export const Route = createFileRoute("/investment")({
  head: () => ({ meta: [{ title: "Investment Hub — Atlas Sanctum" }, { name: "description", content: "Invest in regeneration. Earn impact. Generate value." }] }),
  component: Investment,
});

const kpis = [
  { l: "TOTAL PORTFOLIO VALUE", v: "$1.26B", sub: "vs last 30 days", ch: "+24.6%", c: "#4ade80" },
  { l: "IMPACT GENERATED", v: "3.42M", sub: "tCO₂e Avoided", ch: "+28.1%", c: "#22d3ee" },
  { l: "PROJECTS FUNDED", v: "147", sub: "Across 38 Countries", ch: "+12.3%", c: "#c084fc" },
  { l: "FINANCIAL RETURN (IRR)", v: "12.7%", sub: "Portfolio IRR", ch: "+3.2%", c: "#facc15" },
  { l: "BLENDED CAPITAL MOBILIZED", v: "$2.84B", sub: "Total Mobilized", ch: "+44.7%", c: "#a3e635" },
  { l: "RISK SCORE (PORTFOLIO)", v: "Low", sub: "2.1 / 10", ch: "-8.5%", c: "#38bdf8" },
];

const alloc = [
  { l: "Regenerative Agriculture", v: "$356.4M", pct: 28.3, c: "#4ade80" },
  { l: "Nature & Biodiversity", v: "$284.7M", pct: 22.6, c: "#a3e635" },
  { l: "Clean Energy", v: "$198.6M", pct: 15.8, c: "#f472b6" },
  { l: "Blue Economy", v: "$156.2M", pct: 12.4, c: "#22d3ee" },
  { l: "Circular Economy", v: "$132.8M", pct: 10.5, c: "#facc15" },
  { l: "Water & Sanitation", v: "$68.7M", pct: 5.5, c: "#38bdf8" },
  { l: "Other Solutions", v: "$57.0M", pct: 4.5, c: "#c084fc" },
];

const featured = [
  { n: "Forest Carbon Partnership", loc: "Peru · 15,230 ha", tags: ["Nature","Carbon Sequestration","Conservation"], irr: "13.4%", min: "$100K", score: 94, img: "linear-gradient(135deg,#052e16,#166534)" },
  { n: "Ocean Restoration Fund", loc: "Philippines · 8 Projects", tags: ["Ocean","Biodiversity","Restoration"], irr: "12.8%", min: "$250K", score: 92, img: "linear-gradient(135deg,#082f49,#164e63)" },
  { n: "AgTech Innovation Fund", loc: "Global · 23 Startups", tags: ["Agriculture","Technology","Food Security"], irr: "18.2%", min: "$500K", score: 90, img: "linear-gradient(135deg,#365314,#166534)" },
  { n: "Rural Clean Energy Program", loc: "Africa · 12 Countries", tags: ["Energy","Renewables","Access"], irr: "11.9%", min: "$200K", score: 87, img: "linear-gradient(135deg,#78350f,#a16207)" },
];

const insights = [
  { d: "Regenerative Agriculture investments have the highest impact efficiency.", c: "#4ade80" },
  { d: "Blue Carbon projects show strong returns and low correlation.", c: "#22d3ee" },
  { d: "3 new high-impact opportunities match your investment thesis.", c: "#c084fc" },
];

const opps = [
  { n: "Amazon Reforestation Initiative", loc: "Brazil · Nature & Biodiversity", irr: "14.2%", min: "$250K", score: 95, c: "#4ade80" },
  { n: "Coastal Blue Carbon Program", loc: "Indonesia · Blue Economy", irr: "13.8%", min: "$100K", score: 92, c: "#22d3ee" },
  { n: "Regenerative Rice Systems", loc: "Vietnam · Agriculture", irr: "11.6%", min: "$50K", score: 88, c: "#a3e635" },
];

const impact = [
  { i: Leaf, v: "3.42M", l: "tCO₂e Avoided", c: "#4ade80" },
  { i: Sprout, v: "1.28M", l: "Trees Planted", c: "#a3e635" },
  { i: Heart, v: "6.8M", l: "Lives Impacted", c: "#c084fc" },
  { i: Recycle, v: "2.1M", l: "Hectares Restored", c: "#22d3ee" },
  { i: Droplet, v: "4.7M", l: "t Waste Diverted", c: "#38bdf8" },
  { i: Coins, v: "$5.2B", l: "Local Value Generated", c: "#facc15" },
];

function Investment() {
  return (
    <AppShell active="Investment Hub">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[24px] font-semibold text-white tracking-tight">INVESTMENT HUB</h1>
            <p className="text-[13px] text-slate-400">Invest in Regeneration. Earn Impact. Generate Value.</p>
          </div>
          <div className="relative w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"/>
            <input placeholder="Search investments, projects, funds, SDGs..." className="w-full h-10 rounded-md bg-white/5 border border-white/10 pl-9 pr-3 text-[12px] text-slate-300 outline-none"/>
          </div>
        </div>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <div className="flex justify-between items-center mb-3">
            <div className="text-[11px] tracking-[0.2em] text-slate-400">INVESTMENT OVERVIEW</div>
            <a className="text-[11px] text-cyan-300">View Full Performance →</a>
          </div>
          <div className="grid grid-cols-6 gap-3">
            {kpis.map((k,i)=>(
              <div key={k.l} className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
                <div className="text-[9px] tracking-[0.15em] text-slate-500">{k.l}</div>
                <div className="text-white font-semibold text-[18px] mt-1 leading-tight">{k.v} <span className={`text-[10px] ${k.ch.startsWith("-")?"text-rose-400":"text-emerald-400"}`}>{k.ch}</span></div>
                <div className="text-[10px] text-slate-400">{k.sub}</div>
                {k.l==="RISK SCORE (PORTFOLIO)" ? <div className="mt-2 flex justify-center"><Ring pct={21} color={k.c} size={70}/></div> : <Sparkline color={k.c} seed={i+8}/>}
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-[1fr_360px] gap-6">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-[13px] font-semibold text-white mb-3">INVESTMENT ALLOCATION</div>
                <div className="grid grid-cols-[160px_1fr] gap-3 items-center">
                  <div className="relative">
                    <svg viewBox="0 0 100 100" className="w-40 h-40 -rotate-90">
                      {(() => { let acc=0; const C=2*Math.PI*38; return alloc.map(a=>{const p=a.pct/100; const el=<circle key={a.l} cx="50" cy="50" r="38" fill="none" stroke={a.c} strokeWidth="14" strokeDasharray={`${p*C} ${C}`} strokeDashoffset={-acc*C}/>; acc+=p; return el;});})()}
                    </svg>
                    <div className="absolute inset-0 grid place-items-center text-center"><div><div className="text-[16px] font-semibold text-white">$1.26B</div><div className="text-[9px] text-slate-400">Total Allocated</div></div></div>
                  </div>
                  <div className="space-y-1">
                    {alloc.map(a=>(
                      <div key={a.l} className="flex items-center gap-2 text-[11px]"><span className="w-2 h-2 rounded-full" style={{background:a.c}}/><span className="text-slate-300 flex-1 truncate">{a.l}</span><span className="text-white">{a.v}</span></div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <div className="flex justify-between mb-3"><div className="text-[13px] font-semibold text-white">IMPACT MAP</div><div className="flex gap-1 text-[10px]">{["Impact","Investment"].map((t,i)=>(<button key={t} className={`px-2 py-0.5 rounded border ${i===0?"bg-cyan-400/15 text-cyan-300 border-cyan-400/30":"text-slate-400 border-white/10"}`}>{t}</button>))}</div></div>
                <div className="relative h-48 rounded-lg overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 grid place-items-center">
                  <svg viewBox="0 0 400 200" className="w-full h-full opacity-70">
                    {Array.from({length:12}).map((_,i)=>{const x=40+((i*67)%320); const y=30+((i*53)%140); return <g key={i}><circle cx={x} cy={y} r="10" fill="#4ade80" opacity="0.2"/><circle cx={x} cy={y} r="4" fill="#4ade80"/></g>;})}
                  </svg>
                </div>
                <div className="mt-3 grid grid-cols-4 gap-2 text-center text-[10px]">
                  <div><div className="text-white font-semibold">38</div><div className="text-slate-500">Countries</div></div>
                  <div><div className="text-white font-semibold">147</div><div className="text-slate-500">Projects</div></div>
                  <div><div className="text-white font-semibold">3.42M</div><div className="text-slate-500">tCO₂e Avoided</div></div>
                  <div><div className="text-white font-semibold">6.8M</div><div className="text-slate-500">Lives Impacted</div></div>
                </div>
              </section>
            </div>

            <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <div className="flex justify-between mb-3"><div className="text-[13px] font-semibold text-white">FEATURED INVESTMENTS</div><a className="text-[11px] text-cyan-300">View all →</a></div>
              <div className="space-y-3">
                {featured.map(f=>(
                  <div key={f.n} className="grid grid-cols-[80px_1fr_auto_auto_auto] gap-4 items-center rounded-lg border border-white/10 bg-white/[0.03] p-3">
                    <div className="h-16 rounded" style={{background:f.img}}/>
                    <div>
                      <div className="flex items-center gap-2"><div className="text-[13px] font-semibold text-white">{f.n}</div><span className="text-[9px] text-emerald-300 border border-emerald-400/30 rounded px-1.5">Verified</span></div>
                      <div className="text-[10px] text-slate-500">{f.loc}</div>
                      <div className="flex gap-1 mt-1">{f.tags.map(t=>(<span key={t} className="text-[9px] text-slate-300 border border-white/10 rounded px-1.5">{t}</span>))}</div>
                    </div>
                    <div className="text-center"><div className="text-[9px] text-slate-500">Expected IRR</div><div className="text-white text-[13px] font-semibold">{f.irr}</div></div>
                    <div className="text-center"><div className="text-[9px] text-slate-500">Min. Investment</div><div className="text-white text-[13px] font-semibold">{f.min}</div></div>
                    <div className="text-center"><div className="text-[9px] text-slate-500">Impact</div><Ring pct={f.score} color="#4ade80" size={44}/></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <div className="flex justify-between mb-3">
                <div className="text-[13px] font-semibold text-white">PORTFOLIO PERFORMANCE</div>
                <div className="flex gap-1 text-[10px]">{["7D","30D","90D","1Y","ALL"].map((t,i)=>(<button key={t} className={`px-2 py-0.5 rounded ${i===4?"bg-cyan-400/15 text-cyan-300":"text-slate-400"}`}>{t}</button>))}</div>
              </div>
              <Sparkline color="#4ade80" seed={10}/>
              <div className="grid grid-cols-4 gap-3 mt-4 text-[10px]">
                {[["Total Invested","$1.02B","+22.1%"],["Current Value","$1.26B","+24.6%"],["Total Impact","3.42M tCO₂e","+28.1%"],["Best Sector","AgTech","18.2% IRR"]].map(([l,v,ch])=>(
                  <div key={l as string}><div className="text-slate-500">{l}</div><div className="text-white font-semibold">{v}</div><div className="text-emerald-400">{ch}</div></div>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <div className="text-[11px] tracking-[0.2em] text-slate-400 mb-3">IMPACT METRICS HIGHLIGHTS</div>
              <div className="grid grid-cols-6 gap-3">
                {impact.map(k=>(
                  <div key={k.l} className="flex items-center gap-2">
                    <HexIcon color={k.c} size={38}><k.i className="w-4 h-4"/></HexIcon>
                    <div><div className="text-white text-[16px] font-semibold leading-none">{k.v}</div><div className="text-[9px] text-slate-500 mt-1">{k.l}</div></div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-4">
            <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-2 mb-2"><HexIcon color="#c084fc" size={30}><Sparkles className="w-3.5 h-3.5"/></HexIcon><div className="text-[13px] font-semibold text-white">AI INVESTMENT INSIGHTS</div></div>
              <p className="text-[10px] text-slate-400">Based on market trends, impact performance, and risk analysis, here are your top insights.</p>
              <div className="mt-3 space-y-2">
                {insights.map(i=>(
                  <div key={i.d} className="flex gap-2 rounded-md border border-white/10 bg-white/[0.03] p-2">
                    <span className="w-1 rounded-full" style={{background:i.c}}/>
                    <div className="text-[11px] text-slate-300">{i.d}</div>
                  </div>
                ))}
              </div>
              <button className="mt-3 w-full text-[11px] text-cyan-300 border border-cyan-400/30 rounded-md py-2">View All Insights →</button>
            </section>

            <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex justify-between mb-3"><div className="text-[13px] font-semibold text-white">TOP INVESTMENT OPPORTUNITIES</div><a className="text-[11px] text-cyan-300">View all →</a></div>
              <div className="space-y-3">
                {opps.map(o=>(
                  <div key={o.n} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                    <div className="flex justify-between"><div className="text-[12px] font-semibold text-white">{o.n}</div><Ring pct={o.score} color={o.c} size={36}/></div>
                    <div className="text-[10px] text-slate-500">{o.loc}</div>
                    <div className="flex justify-between mt-2 text-[10px]"><div><span className="text-slate-500">Projected IRR</span> <span className="text-emerald-400">{o.irr}</span></div><div><span className="text-slate-500">Min. Invest</span> <span className="text-white">{o.min}</span></div></div>
                  </div>
                ))}
              </div>
              <button className="mt-3 w-full text-[11px] text-cyan-300 border border-cyan-400/30 rounded-md py-2">View All Opportunities</button>
            </section>

            <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex justify-between mb-3"><div className="text-[13px] font-semibold text-white">SDG ALIGNMENT</div><a className="text-[11px] text-cyan-300">View details</a></div>
              <div className="grid grid-cols-6 gap-2 text-center text-[10px]">
                {[["13","32%","#0ea5e9"],["15","24%","#65a30d"],["7","18%","#eab308"],["14","12%","#0891b2"],["2","8%","#a16207"],["6","6%","#0284c7"]].map(([n,p,c])=>(
                  <div key={n as string}><div className="h-14 rounded" style={{background:c as string}}/><div className="text-white mt-1">{p}</div></div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </AppShell>
  );
}