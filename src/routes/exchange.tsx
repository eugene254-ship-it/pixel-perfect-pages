import { createFileRoute } from "@tanstack/react-router";
import type { ReactElement } from "react";
import { Repeat, Leaf, Sprout, TreePine, Droplet, Wind, Recycle, Heart, ShieldCheck, Coins, Wallet, TrendingUp, Waves } from "lucide-react";
import { AppShell } from "@/components/atlas/AppShell";
import { Globe, HexIcon, Sparkline } from "@/components/atlas/primitives";

export const Route = createFileRoute("/exchange")({
  head: () => ({ meta: [{ title: "Regenerative Value Exchange — Atlas Sanctum" }, { name: "description", content: "The global marketplace for regenerative assets and impact." }] }),
  component: Exchange,
});

const kpis = [
  { i: Sprout, l: "TOTAL VALUE LOCKED", v: "$2.47T", ch: "+12.7%", c: "#4ade80" },
  { i: Leaf, l: "TOTAL REGENERATIVE ASSETS", v: "$1.89T", ch: "+9.3%", c: "#a3e635" },
  { i: Repeat, l: "TOTAL TRANSACTIONS", v: "8.42M", ch: "+14.8%", c: "#c084fc" },
  { i: Heart, l: "ACTIVE PARTICIPANTS", v: "128,374", ch: "+11.2%", c: "#22d3ee" },
  { i: Wind, l: "IMPACT GENERATED", v: "236.7M", sub: "Lives & ecosystems", ch: "+5.8%", c: "#facc15" },
  { i: TreePine, l: "CARBON REMOVED", v: "1.32B tCO₂", ch: "+8.4%", c: "#4ade80" },
];

const orbit = [
  { t: "CARBON", v: "1.32B tCO₂", c: "#4ade80", a: -90 },
  { t: "BIODIVERSITY", v: "48.7M Credits", c: "#a3e635", a: -30 },
  { t: "WATER", v: "2.18B m³", c: "#38bdf8", a: 30 },
  { t: "OCEANS", v: "12.6M Credits", c: "#22d3ee", a: 90 },
  { t: "HEALTH", v: "236.7M Lives", c: "#c084fc", a: 150 },
  { t: "CIRCULAR ECONOMY", v: "1.27M Credits", c: "#4ade80", a: 210 },
  { t: "RENEWABLE ENERGY", v: "9.8M MWh", c: "#facc15", a: 270 },
  { t: "SOIL HEALTH", v: "85.4M Credits", c: "#f59e0b", a: -150 },
];

const market = [
  { i: Leaf, n: "Carbon Credit", u: "tCO₂", p: "$28.45", ch: "+4.32%", v: "$124.6M", c: "#4ade80" },
  { i: TreePine, n: "Biodiversity Credit", u: "BIO", p: "$16.78", ch: "+6.21%", v: "$98.3M", c: "#a3e635" },
  { i: Waves, n: "Blue Carbon Credit", u: "BCO₂", p: "$31.22", ch: "+5.14%", v: "$67.8M", c: "#22d3ee" },
  { i: Droplet, n: "Water Credit", u: "H₂O", p: "$0.86", ch: "+3.27%", v: "$42.7M", c: "#38bdf8" },
  { i: Sprout, n: "Soil Health Credit", u: "SOIL", p: "$14.63", ch: "+7.18%", v: "$38.2M", c: "#f59e0b" },
  { i: TreePine, n: "Reforestation Credit", u: "TREE", p: "$12.91", ch: "+4.83%", v: "$36.1M", c: "#4ade80" },
  { i: Wind, n: "Renewable Energy Credit", u: "REC", p: "$9.34", ch: "+2.91%", v: "$28.9M", c: "#facc15" },
  { i: Recycle, n: "Plastic Recovery Credit", u: "PCR", p: "$8.17", ch: "+6.77%", v: "$18.3M", c: "#22d3ee" },
];

const featured = [
  { n: "Amazon Rainforest", tag: "CONSERVATION PROJECT", cat: "CARBON", price: "$28.45", impact: "1.2M tCO₂", registry: "Verra VCS", avail: "2.4M tCO₂", c: "#4ade80", img: "linear-gradient(135deg,#052e16,#166534)" },
  { n: "Great Barrier Reef", tag: "RESTORATION", cat: "OCEANS", price: "$31.22", impact: "850K tCO₂", registry: "Gold Standard", avail: "1.1M BCO₂", c: "#22d3ee", img: "linear-gradient(135deg,#082f49,#164e63)" },
  { n: "Kenya Water Access", tag: "INITIATIVE", cat: "WATER", price: "$0.86", impact: "2.3B m³", registry: "AQUA Standard", avail: "3.8B m³", c: "#38bdf8", img: "linear-gradient(135deg,#164e63,#0f766e)" },
  { n: "Regenerative Agriculture", tag: "SOIL PROGRAM", cat: "SOIL", price: "$14.63", impact: "95K ha", registry: "Regen Network", avail: "150K ha", c: "#f59e0b", img: "linear-gradient(135deg,#78350f,#a16207)" },
  { n: "Mangrove Restoration", tag: "COASTAL PROJECT", cat: "BIODIVERSITY", price: "$16.78", impact: "1.7M Credits", registry: "PLAN VIVO", avail: "2.9M Credits", c: "#a3e635", img: "linear-gradient(135deg,#052e16,#365314)" },
  { n: "Solar Energy Generation", tag: "CERTIFICATE", cat: "ENERGY", price: "$9.34", impact: "1 MWh", registry: "I-REC Standard", avail: "5.6M MWh", c: "#facc15", img: "linear-gradient(135deg,#713f12,#a16207)" },
];

const txs = [
  { i: Leaf, n: "Carbon Credit Purchase", q: "500 tCO₂", t: "2m ago", v: "+ $14,225", c: "#4ade80" },
  { i: TreePine, n: "Biodiversity Credit Sale", q: "1,200 BIO", t: "5m ago", v: "+ $20,136", c: "#a3e635" },
  { i: Waves, n: "Ocean Restoration Credit", q: "300 OCN", t: "12m ago", v: "+ $9,450", c: "#22d3ee" },
  { i: Droplet, n: "Water Credit Purchase", q: "10,000 H₂O", t: "18m ago", v: "+ $8,600", c: "#38bdf8" },
  { i: Sprout, n: "Soil Health Credit Sale", q: "750 SOIL", t: "22m ago", v: "+ $9,683", c: "#f59e0b" },
];

function Exchange() {
  return (
    <AppShell active="Regenerative Value Exchange">
      <div className="p-6 space-y-6" data-testid="page-ready">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[24px] font-semibold text-white tracking-tight">REGENERATIVE VALUE EXCHANGE</h1>
            <p className="text-[13px] text-slate-400">The global marketplace for regenerative assets and impact</p>
          </div>
          <button className="h-9 px-4 rounded-md text-[11px] tracking-[0.15em] border border-cyan-400/40 text-cyan-300 bg-cyan-400/5">CONNECT WALLET</button>
        </div>

        <div className="grid grid-cols-6 gap-3">
          {kpis.map((k,i)=>(
            <div key={k.l} className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
              <div className="flex items-start gap-2">
                <HexIcon color={k.c} size={30}><k.i className="w-3.5 h-3.5"/></HexIcon>
                <div>
                  <div className="text-[8px] tracking-[0.15em] text-slate-500">{k.l}</div>
                  <div className="text-white font-semibold text-[16px] leading-tight">{k.v}</div>
                  {k.sub && <div className="text-[9px] text-slate-500">{k.sub}</div>}
                </div>
              </div>
              <div className="text-[9.5px] mt-1"><span style={{color:k.c}}>↑ {k.ch}</span> <span className="text-slate-500">vs last month</span></div>
              <Sparkline color={k.c} seed={i+4}/>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-4">
          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 relative overflow-hidden">
            <div className="text-[28px] font-semibold text-white leading-tight">Trade What<br/>Regenerates Life</div>
            <p className="mt-3 text-[12px] text-slate-400 max-w-sm leading-relaxed">The Regenerative Value Exchange (RVE) enables transparent, verifiable, and liquid markets for assets that restore the planet and uplift humanity.</p>
            <div className="mt-4 flex gap-2">
              <button className="h-10 px-5 rounded-md text-[11px] font-semibold tracking-[0.15em] bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900">EXPLORE MARKETS</button>
              <button className="h-10 px-5 rounded-md text-[11px] font-semibold tracking-[0.15em] border border-white/15 text-slate-200">CREATE ASSET</button>
            </div>
            <div className="mt-6 flex gap-4 text-[10px] text-slate-400">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400"/>Verified Impact</span>
              <span className="flex items-center gap-1.5"><Repeat className="w-3.5 h-3.5 text-cyan-400"/>Transparent</span>
              <span className="flex items-center gap-1.5"><Coins className="w-3.5 h-3.5 text-amber-400"/>Secure</span>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-40"><Globe size={220}/></div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 relative min-h-[320px]">
            <div className="grid place-items-center relative h-full">
              <Globe size={260}/>
              {orbit.map(o=>{
                const rad = o.a*Math.PI/180;
                const x = 50 + Math.cos(rad)*46;
                const y = 50 + Math.sin(rad)*46;
                return (
                  <div key={o.t} className="absolute text-center text-[9px]" style={{left:`${x}%`,top:`${y}%`,transform:"translate(-50%,-50%)"}}>
                    <HexIcon color={o.c} size={30}><Sprout className="w-3 h-3"/></HexIcon>
                    <div className="text-white text-[10px] whitespace-nowrap font-medium">{o.t}</div>
                    <div className="text-slate-400 whitespace-nowrap">{o.v}</div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="flex justify-between items-center mb-3">
              <div>
                <div className="text-[12px] font-semibold text-white">RVE FLOW OVERVIEW</div>
                <div className="text-[10px] text-slate-500">Value flow across markets</div>
              </div>
            </div>
            <div className="space-y-2">
              {[
                { l: "Carbon", v: "$886.3B", c: "#4ade80" },
                { l: "Biodiversity", v: "$432.7B", c: "#a3e635" },
                { l: "Water", v: "$218.6B", c: "#38bdf8" },
                { l: "Oceans", v: "$276.4B", c: "#22d3ee" },
                { l: "Renewable Energy", v: "$312.8B", c: "#facc15" },
                { l: "Soil Health", v: "$198.4B", c: "#f59e0b" },
                { l: "Circular Economy", v: "$156.3B", c: "#4ade80" },
                { l: "Health & Wellness", v: "$108.7B", c: "#c084fc" },
              ].map(f=>(
                <div key={f.l} className="flex items-center gap-2 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full" style={{background:f.c}}/>
                  <span className="text-slate-300 flex-1">{f.l}</span>
                  <span className="text-white">{f.v}</span>
                </div>
              ))}
            </div>
            <button className="mt-3 w-full text-[11px] tracking-[0.15em] text-cyan-300 border border-cyan-400/30 rounded-md py-2">VIEW FLOW ANALYTICS</button>
          </section>
        </div>

        <div className="grid grid-cols-[1fr_360px] gap-6">
          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="flex justify-between items-center mb-3">
              <div className="text-[13px] font-semibold text-white">FEATURED REGENERATIVE ASSETS</div>
              <a className="text-[11px] text-cyan-300">VIEW ALL ASSETS →</a>
            </div>
            <div className="flex gap-2 mb-4 text-[10px]">
              {["ALL","CARBON","BIODIVERSITY","WATER","OCEANS","SOIL","ENERGY","CIRCULAR"].map((t,i)=>(
                <button key={t} className={`px-3 py-1 rounded-full tracking-[0.15em] ${i===0?"bg-cyan-400/15 text-cyan-300 border border-cyan-400/30":"text-slate-400 border border-white/10"}`}>{t}</button>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {featured.map(a=>(
                <div key={a.n} className="rounded-lg overflow-hidden border border-white/10 bg-white/[0.03]">
                  <div className="h-24" style={{background:a.img}}/>
                  <div className="p-3">
                    <div className="text-[12px] font-semibold text-white">{a.n}</div>
                    <div className="text-[9px] text-slate-500">{a.tag}</div>
                    <span className="inline-block mt-1 text-[9px] px-1.5 py-0.5 rounded" style={{background:`${a.c}22`,color:a.c,border:`1px solid ${a.c}55`}}>{a.cat}</span>
                    <div className="grid grid-cols-2 gap-1 text-[10px] mt-2">
                      <div><div className="text-slate-500">Price</div><div className="text-white">{a.price}</div></div>
                      <div><div className="text-slate-500">Impact</div><div className="text-white">{a.impact}</div></div>
                      <div><div className="text-slate-500">Registry</div><div className="text-white">{a.registry}</div></div>
                      <div><div className="text-slate-500">Available</div><div className="text-white">{a.avail}</div></div>
                    </div>
                    <button className="mt-2 w-full text-[10px] tracking-[0.15em] text-cyan-300 border border-cyan-400/20 py-1.5 rounded">VIEW DETAILS</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex justify-between items-center mb-3">
              <div className="text-[13px] font-semibold text-white">MARKET OVERVIEW</div>
              <a className="text-[11px] text-cyan-300">View all markets →</a>
            </div>
            <div className="flex gap-1 text-[10px] mb-3">
              {["ALL MARKETS","TOP GAINERS","TRENDING"].map((t,i)=>(
                <button key={t} className={`flex-1 py-1 rounded ${i===0?"bg-cyan-400/15 text-cyan-300":"text-slate-400"}`}>{t}</button>
              ))}
            </div>
            <div className="grid grid-cols-[1fr_auto_auto_auto] gap-2 text-[9px] text-slate-500 mb-2 tracking-widest">
              <div>ASSET</div><div>PRICE</div><div>24H CHANGE</div><div>VOL (24H)</div>
            </div>
            <div className="space-y-2">
              {market.map(m=>(
                <div key={m.n} className="grid grid-cols-[1fr_auto_auto_auto] gap-2 items-center text-[11px]">
                  <div className="flex items-center gap-2">
                    <HexIcon color={m.c} size={22}><m.i className="w-3 h-3"/></HexIcon>
                    <div><div className="text-white leading-tight">{m.n}</div><div className="text-slate-500 text-[9px]">{m.u}</div></div>
                  </div>
                  <div className="text-white">{m.p}</div>
                  <div className="text-emerald-400">{m.ch}</div>
                  <div className="text-white">{m.v}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="grid grid-cols-[1fr_360px] gap-6">
          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="flex justify-between items-center mb-3">
              <div className="text-[13px] font-semibold text-white">RECENT TRANSACTIONS</div>
              <a className="text-[11px] text-cyan-300">View all →</a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {txs.map(t=>(
                <div key={t.n} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <HexIcon color={t.c} size={30}><t.i className="w-3.5 h-3.5"/></HexIcon>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] text-white truncate">{t.n}</div>
                    <div className="text-[10px] text-slate-500">{t.q} · {t.t}</div>
                  </div>
                  <div className="text-[11px] text-emerald-400">{t.v}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2"><Wallet className="w-4 h-4 text-cyan-300"/><div className="text-[13px] font-semibold text-white">MY PORTFOLIO</div></div>
              <a className="text-[10px] text-cyan-300">View Portfolio</a>
            </div>
            <div className="text-[10px] text-slate-500">PORTFOLIO VALUE</div>
            <div className="text-[26px] font-semibold text-white leading-tight">$128,450.75</div>
            <div className="text-[11px] text-emerald-400 flex items-center gap-1"><TrendingUp className="w-3 h-3"/> 8.62% (24H)</div>
            <div className="mt-3 flex items-center gap-4">
              <svg viewBox="0 0 100 100" className="w-24 h-24 -rotate-90">
                <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10"/>
                {([["#4ade80",0.356],["#a3e635",0.224],["#22d3ee",0.158],["#38bdf8",0.103],["#c084fc",0.159]] as Array<[string,number]>).reduce<{acc:number, els: ReactElement[]}>((s,[c,p],idx)=>{
                  const C=2*Math.PI*35;
                  s.els.push(<circle key={idx} cx="50" cy="50" r="35" fill="none" stroke={c} strokeWidth="10" strokeDasharray={`${p*C} ${C}`} strokeDashoffset={-s.acc*C}/>);
                  s.acc += p; return s;
                }, {acc:0, els:[]}).els}
              </svg>
              <div className="text-[10px] space-y-1">
                {[["Carbon Credits","35.6%","#4ade80"],["Biodiversity Credits","22.4%","#a3e635"],["Blue Carbon Credits","15.8%","#22d3ee"],["Water Credits","10.3%","#38bdf8"],["Other Assets","15.9%","#c084fc"]].map(([l,v,c])=>(
                  <div key={l as string} className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full" style={{background:c as string}}/><span className="text-slate-300">{l}</span><span className="text-slate-500 ml-auto">{v}</span></div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  );
}