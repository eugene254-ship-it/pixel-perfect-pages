import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Search, Sprout, Waves, Wind, Heart, Zap, Leaf, Droplet, Recycle, FileText, Database, Users, ChevronRight, Download, Eye, MessageCircle } from "lucide-react";
import { AppShell } from "@/components/atlas/AppShell";
import { Globe, HexIcon, Sparkline } from "@/components/atlas/primitives";

export const Route = createFileRoute("/knowledge")({
  head: () => ({ meta: [{ title: "Knowledge Hub — Atlas Sanctum" }, { name: "description", content: "Humanity's regenerative knowledge network — research, datasets, and insights." }] }),
  component: Knowledge,
});

const stats = [
  { i: BookOpen, l: "Knowledge Items", v: "2.48M", ch: "+24.5%", c: "#4ade80" },
  { i: Users, l: "Researchers", v: "89.6K", ch: "+18.3%", c: "#22d3ee" },
  { i: Database, l: "Knowledge Networks", v: "7,842", ch: "+12.7%", c: "#c084fc" },
  { i: Download, l: "Downloads", v: "1.32M", ch: "+15.8%", c: "#facc15" },
];

const topics = [
  { i: BookOpen, l: "All Topics", s: "Explore all", c: "#22d3ee" },
  { i: Sprout, l: "Agriculture", s: "128K Items", c: "#4ade80" },
  { i: Waves, l: "Oceans", s: "96K Items", c: "#22d3ee" },
  { i: Wind, l: "Climate", s: "210K Items", c: "#38bdf8" },
  { i: Heart, l: "Health", s: "75K Items", c: "#c084fc" },
  { i: Zap, l: "Energy", s: "88K Items", c: "#facc15" },
  { i: Leaf, l: "Biodiversity", s: "134K Items", c: "#a3e635" },
  { i: Droplet, l: "Water", s: "65K Items", c: "#38bdf8" },
  { i: Recycle, l: "Circular Economy", s: "94K Items", c: "#4ade80" },
];

const featured = [
  { tag: "RESEARCH PAPER", t: "Integrating Mycorrhizal Networks in Regenerative Agriculture", src: "Published in Nature Sustainability", date: "May 10, 2025", views: "12.4K", dl: "1.2K", cm: "356", img: "linear-gradient(135deg,#052e16,#166534)" },
  { tag: "CASE STUDY", t: "Restoring 10,000 Hectares of Degraded Land in Kenya", src: "By World Renew & Partners", date: "Apr 28, 2025", views: "8.7K", dl: "932", cm: "204", img: "linear-gradient(135deg,#78350f,#166534)" },
  { tag: "DATASET", t: "Global Soil Organic Carbon Dataset v2.1", src: "FAO & Partners", date: "May 5, 2025", views: "19.3K", dl: "2.1K", cm: "634", img: "linear-gradient(135deg,#082f49,#166534)" },
  { tag: "BEST PRACTICE", t: "5 Principles for Building Regenerative Communities", src: "By EcoLogic Institute", date: "Apr 20, 2025", views: "6.2K", dl: "721", cm: "180", img: "linear-gradient(135deg,#4a044e,#831843)" },
];

const trending = [
  { n: "Regenerative Agriculture", ch: "+32%" },
  { n: "Blue Carbon", ch: "+28%" },
  { n: "Soil Health", ch: "+21%" },
  { n: "Biodiversity Credits", ch: "+18%" },
  { n: "Climate Resilience", ch: "+16%" },
];

const collabs = [
  { n: "Global Mangrove Alliance", m: "125 members · 8 new updates" },
  { n: "African Regenerative Agriculture Network", m: "342 members · 15 new updates" },
  { n: "Indigenous Knowledge Digital Library", m: "278 members · 6 new updates" },
];

function Knowledge() {
  return (
    <AppShell active="Knowledge Hub">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[24px] font-semibold text-white tracking-tight">KNOWLEDGE HUB</h1>
            <p className="text-[13px] text-slate-400">Humanity's Regenerative Knowledge Network</p>
          </div>
          <div className="relative w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"/>
            <input placeholder="Search for knowledge, research, datasets, insights..." className="w-full h-10 rounded-md bg-white/5 border border-white/10 pl-9 pr-3 text-[12px] text-slate-300 outline-none"/>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_360px] gap-6">
          <div className="space-y-6">
            <section className="rounded-xl border border-white/10 bg-white/[0.02] p-6 relative overflow-hidden">
              <div className="grid grid-cols-[1fr_260px] gap-6 items-center">
                <div>
                  <div className="text-[12px] text-slate-400">Welcome to the Knowledge Hub</div>
                  <div className="text-[26px] font-semibold text-white leading-tight mt-1">Connect. Learn. Innovate. Regenerate.</div>
                  <p className="text-[12px] text-slate-400 mt-2 max-w-md">The world's largest open ecosystem of regenerative knowledge, research, data, and real-world solutions.</p>
                  <div className="mt-4 flex gap-2">
                    <div className="relative flex-1 max-w-md">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"/>
                      <input placeholder="Search knowledge, topics, authors, projects..." className="w-full h-10 rounded-md bg-white/5 border border-white/10 pl-9 pr-3 text-[12px] text-slate-300 outline-none"/>
                    </div>
                    <button className="h-10 px-5 rounded-md bg-emerald-400 text-slate-900 text-[12px] font-semibold">Search</button>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2 text-[10px]">
                    <span className="text-slate-500">Popular:</span>
                    {["Regenerative Agriculture","Blue Carbon","Soil Health","Circular Economy","Traditional Knowledge"].map(t=>(
                      <span key={t} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">{t}</span>
                    ))}
                  </div>
                </div>
                <Globe size={220}/>
              </div>
            </section>

            <div className="grid grid-cols-4 gap-3">
              {stats.map((s,i)=>(
                <div key={s.l} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2">
                    <HexIcon color={s.c} size={30}><s.i className="w-3.5 h-3.5"/></HexIcon>
                    <div><div className="text-[10px] text-slate-500">{s.l}</div><div className="text-white font-semibold text-[16px]">{s.v}</div></div>
                  </div>
                  <div className="text-[10px] mt-1"><span style={{color:s.c}}>↑ {s.ch}</span> <span className="text-slate-500">this month</span></div>
                  <Sparkline color={s.c} seed={i+6}/>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-9 gap-2">
              {topics.map(t=>(
                <button key={t.l} className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-center hover:bg-white/5">
                  <HexIcon color={t.c} size={30}><t.i className="w-3.5 h-3.5"/></HexIcon>
                  <div className="text-[10px] text-white mt-1">{t.l}</div>
                  <div className="text-[9px] text-slate-500">{t.s}</div>
                </button>
              ))}
            </div>

            <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <div className="flex justify-between items-center mb-3">
                <div className="text-[13px] font-semibold text-white">FEATURED KNOWLEDGE</div>
                <a className="text-[11px] text-cyan-300">View all</a>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {featured.map(f=>(
                  <div key={f.t} className="rounded-lg overflow-hidden border border-white/10 bg-white/[0.03]">
                    <div className="h-32 relative" style={{background:f.img}}>
                      <span className="absolute top-2 left-2 text-[9px] tracking-widest text-emerald-300 border border-emerald-400/30 bg-emerald-400/10 rounded px-1.5 py-0.5">{f.tag}</span>
                    </div>
                    <div className="p-3">
                      <div className="text-[12px] font-semibold text-white leading-tight">{f.t}</div>
                      <div className="text-[10px] text-slate-500 mt-1">{f.src}</div>
                      <div className="text-[10px] text-slate-500">{f.date}</div>
                      <div className="mt-2 flex gap-3 text-[10px] text-slate-400">
                        <span className="flex items-center gap-1"><Eye className="w-3 h-3"/>{f.views}</span>
                        <span className="flex items-center gap-1"><Download className="w-3 h-3"/>{f.dl}</span>
                        <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3"/>{f.cm}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-3 gap-4">
              <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-[13px] font-semibold text-white mb-3">KNOWLEDGE EXPLORER</div>
                <div className="h-40 grid place-items-center">
                  <svg viewBox="0 0 200 160" className="w-full h-full">
                    {Array.from({length:15}).map((_,i)=>{const x=100+Math.cos(i*0.9)*60; const y=80+Math.sin(i*0.9)*50; return <circle key={i} cx={x} cy={y} r="6" fill="#22d3ee" opacity="0.6"/>;})}
                    {Array.from({length:15}).map((_,i)=>{const x1=100+Math.cos(i*0.9)*60; const y1=80+Math.sin(i*0.9)*50; const x2=100+Math.cos((i+2)*0.9)*60; const y2=80+Math.sin((i+2)*0.9)*50; return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#22d3ee" strokeOpacity="0.3"/>;})}
                  </svg>
                </div>
                <button className="w-full text-[11px] text-cyan-300 border border-cyan-400/30 rounded-md py-2 mt-2">Explore Knowledge Graph →</button>
              </section>
              <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-[13px] font-semibold text-white mb-3">KNOWLEDGE HUB TOOLS</div>
                <div className="grid grid-cols-2 gap-2">
                  {[["Research Library",FileText],["Dataset Explorer",Database],["Policy Library",BookOpen],["Impact Stories",Sprout],["Best Practices",Leaf],["Innovation Lab",Zap]].map(([l,I]:any)=>(
                    <button key={l} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-2 text-[11px] text-white text-left">
                      <I className="w-4 h-4 text-cyan-300"/> {l}
                    </button>
                  ))}
                </div>
              </section>
              <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <div className="flex justify-between mb-3"><div className="text-[13px] font-semibold text-white">KNOWLEDGE IMPACT</div><span className="text-[10px] text-slate-400">Last 30 Days ▾</span></div>
                <div className="grid grid-cols-2 gap-3">
                  {[["Knowledge Shared","42.8K","+18.6%","#4ade80"],["Collaboration Activities","6.3K","+14.2%","#22d3ee"],["Knowledge Downloads","128.9K","+22.7%","#c084fc"],["New Contributions","3.4K","+16.3%","#facc15"]].map(([l,v,ch,c]:any,i)=>(
                    <div key={l}><div className="text-[9px] text-slate-500">{l}</div><div className="text-white font-semibold">{v}</div><div className="text-[9px]" style={{color:c}}>↑ {ch}</div><Sparkline color={c} seed={i+7}/></div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="space-y-4">
            <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-[13px] font-semibold text-white mb-2">AI KNOWLEDGE ASSISTANT</div>
              <div className="grid place-items-center py-4">
                <HexIcon color="#c084fc" size={80}><BookOpen className="w-8 h-8"/></HexIcon>
                <div className="text-[11px] text-cyan-300 mt-2">Ask anything. Discover.</div>
              </div>
              <input placeholder="Ask about regenerative solutions, research, policies, or innovations..." className="w-full h-10 rounded-md bg-white/5 border border-white/10 px-3 text-[11px] text-slate-300 outline-none"/>
            </section>

            <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-[13px] font-semibold text-white mb-3">TRENDING TOPICS</div>
              <div className="space-y-2">
                {trending.map((t,i)=>(
                  <div key={t.n} className="flex justify-between text-[11px]">
                    <span className="text-slate-300">{i+1}. {t.n}</span>
                    <span className="text-emerald-400">↑ {t.ch}</span>
                  </div>
                ))}
              </div>
              <a className="text-[11px] text-cyan-300 mt-3 inline-block">View all trending topics →</a>
            </section>

            <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-[13px] font-semibold text-white mb-3">ACTIVE COLLABORATIONS</div>
              <div className="space-y-3">
                {collabs.map(c=>(
                  <div key={c.n} className="flex gap-3">
                    <HexIcon color="#4ade80" size={32}><Users className="w-4 h-4"/></HexIcon>
                    <div><div className="text-[12px] text-white">{c.n}</div><div className="text-[10px] text-slate-500">{c.m}</div></div>
                  </div>
                ))}
              </div>
              <a className="text-[11px] text-cyan-300 mt-3 inline-block">View all collaborations →</a>
            </section>
          </div>
        </div>
      </div>
    </AppShell>
  );
}