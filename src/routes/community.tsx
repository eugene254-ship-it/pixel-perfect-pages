import { createFileRoute } from "@tanstack/react-router";
import { Users, Sparkles, Search, Sprout, Waves, Wind, Recycle, Heart, TrendingUp, MessageCircle, Calendar, Trophy, FileText, Image as ImageIcon, Video, ListChecks } from "lucide-react";
import { AppShell } from "@/components/atlas/AppShell";
import { Globe, HexIcon, Sparkline } from "@/components/atlas/primitives";

export const Route = createFileRoute("/community")({
  head: () => ({ meta: [{ title: "Community — Atlas Sanctum" }, { name: "description", content: "Connect. Collaborate. Regenerate Together." }] }),
  component: Community,
});

const stats = [
  { i: Users, l: "Members", v: "47,892", c: "#4ade80" },
  { i: Sparkles, l: "Active Groups", v: "1,248", c: "#22d3ee" },
  { i: Globe as any, l: "Countries", v: "389", c: "#38bdf8" },
  { i: Sprout, l: "Projects", v: "8,432", c: "#a3e635" },
  { i: TrendingUp, l: "Actions Taken", v: "12.7M", c: "#facc15" },
];

const groups = [
  { n: "Regenerative Agriculture", m: "12.4K members", d: "Advancing sustainable food systems and soil regeneration.", tag: "Agriculture", i: Sprout, c: "#4ade80", img: "linear-gradient(135deg,#052e16,#166534)" },
  { n: "Ocean Guardians", m: "9.8K members", d: "Protecting oceans and marine ecosystems together.", tag: "Oceans", i: Waves, c: "#22d3ee", img: "linear-gradient(135deg,#082f49,#164e63)" },
  { n: "Climate Innovators", m: "15.7K members", d: "Innovating for climate solutions and a net positive future.", tag: "Climate", i: Wind, c: "#38bdf8", img: "linear-gradient(135deg,#78350f,#a16207)" },
  { n: "Circular Economy Hub", m: "8.3K members", d: "Building a waste-free, circular economy for all.", tag: "Circular Economy", i: Recycle, c: "#facc15", img: "linear-gradient(135deg,#365314,#166534)" },
  { n: "Health & Wellbeing", m: "7.1K members", d: "Regenerating human health and community wellbeing.", tag: "Health", i: Heart, c: "#c084fc", img: "linear-gradient(135deg,#4a044e,#831843)" },
];

const activity = [
  { n: "Maria Santos", d: "Published a new research in Regenerative Agriculture", t: "5m ago" },
  { n: "GreenFuture Africa", d: "Shared an impact update", t: "12m ago" },
  { n: "Dr. James Chen", d: "Commented on Ocean Restoration Project", t: "18m ago" },
  { n: "TerraGenesis Lab", d: "Added 3 new team members", t: "25m ago" },
  { n: "Amina Yusuf", d: "Started a discussion on Climate Resilience", t: "32m ago" },
];

const discussions = [
  { t: "How can we scale regenerative agriculture across smallholder communities?", by: "Started by Joao Silva in Regenerative Agriculture", c: 128, ago: "24m ago" },
  { t: "Innovative funding models for ocean restoration projects", by: "Started by Emily Watson in Ocean Guardians", c: 96, ago: "1h ago" },
  { t: "Measuring true impact beyond carbon", by: "Started by Dr. Amina Yusuf in Impact Measurement", c: 76, ago: "2h ago" },
];

const events = [
  { d: "MAY 24", t: "Global Regeneration Summit 2025", loc: "Virtual Event" },
  { d: "JUN 05", t: "Ocean Restoration Workshop", loc: "Lisbon, Portugal" },
  { d: "JUN 12", t: "Youth Climate Innovation Hackathon", loc: "Nairobi, Kenya" },
];

const contributors = [
  { n: "Maria Santos", pts: "2,450 pts" },
  { n: "Kwame Mensah", pts: "2,120 pts" },
  { n: "Amina Yusuf", pts: "1,890 pts" },
  { n: "Lukas Schneider", pts: "1,670 pts" },
  { n: "Priya Patel", pts: "1,430 pts" },
];

const challenges = [
  { n: "Plant 1 Million Trees Challenge", cur: "685,432 / 1,000,000", pct: 68, c: "#4ade80" },
  { n: "Plastic Free Oceans Initiative", cur: "412,875 / 750,000 kg", pct: 55, c: "#22d3ee" },
  { n: "Soil Health Revolution", cur: "250,321 / 500,000 ha", pct: 50, c: "#facc15" },
];

const suggested = [
  { n: "Agroecology Network", m: "5.2K members" },
  { n: "Renewable Energy Pioneers", m: "7.8K members" },
  { n: "Impact Investors Circle", m: "3.1K members" },
];

function Community() {
  return (
    <AppShell active="Community">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[24px] font-semibold text-white tracking-tight">COMMUNITY HUB</h1>
            <p className="text-[13px] text-slate-400">Connect. Collaborate. Regenerate Together.</p>
          </div>
          <div className="relative w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"/>
            <input placeholder="Search members, groups, discussions, projects..." className="w-full h-10 rounded-md bg-white/5 border border-white/10 pl-9 pr-3 text-[12px] text-slate-300 outline-none"/>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_300px_300px] gap-4">
          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 relative overflow-hidden">
            <div className="text-[20px] font-semibold text-white">Welcome to the Atlas Sanctum Community</div>
            <p className="text-[12px] text-slate-400 mt-2 max-w-md">A global movement of changemakers, innovators, and stewards building a regenerative future for all.</p>
            <div className="mt-4 grid grid-cols-5 gap-3">
              {stats.map(s=>(
                <div key={s.l} className="flex items-center gap-2">
                  <HexIcon color={s.c} size={30}><s.i className="w-3.5 h-3.5"/></HexIcon>
                  <div><div className="text-white text-[14px] font-semibold leading-none">{s.v}</div><div className="text-[9px] text-slate-500 mt-1">{s.l}</div></div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <button className="h-10 px-5 rounded-md bg-emerald-400 text-slate-900 text-[12px] font-semibold">Join a Group</button>
              <button className="h-10 px-5 rounded-md border border-white/15 text-slate-200 text-[12px]">Create Post</button>
            </div>
            <div className="absolute -right-10 top-0 opacity-30"><Globe size={240}/></div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-[13px] font-semibold text-white">COMMUNITY VIBE</div>
            <div className="text-[10px] text-slate-500">Real-time Pulse</div>
            <div className="mt-3"><Sparkline color="#4ade80" seed={11}/></div>
            <div className="space-y-2 mt-3 text-[11px]">
              {[["Collaboration","High","#4ade80"],["Impact Momentum","Rising","#22d3ee"],["Knowledge Sharing","Very High","#c084fc"],["Community Health","Excellent","#facc15"]].map(([l,v,c])=>(
                <div key={l as string} className="flex justify-between"><span className="text-slate-300">{l}</span><span style={{color:c as string}}>● {v}</span></div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex justify-between mb-2"><div className="text-[13px] font-semibold text-white">COMMUNITY ACTIVITY</div><a className="text-[10px] text-cyan-300">Live Feed</a></div>
            <div className="space-y-2">
              {activity.map(a=>(
                <div key={a.n} className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 shrink-0"/>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between"><div className="text-[11px] text-white truncate">{a.n}</div><div className="text-[9px] text-slate-500 shrink-0">{a.t}</div></div>
                    <div className="text-[10px] text-slate-400 truncate">{a.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <div className="flex justify-between mb-3"><div className="text-[13px] font-semibold text-white">FEATURED GROUPS</div><a className="text-[11px] text-cyan-300">View all groups →</a></div>
          <div className="grid grid-cols-5 gap-3">
            {groups.map(g=>(
              <div key={g.n} className="rounded-lg overflow-hidden border border-white/10 bg-white/[0.03]">
                <div className="h-24" style={{background:g.img}}/>
                <div className="p-3">
                  <div className="text-[12px] font-semibold text-white">{g.n}</div>
                  <div className="text-[9px] text-slate-500">{g.m}</div>
                  <div className="text-[10px] text-slate-400 mt-1 leading-tight">{g.d}</div>
                  <span className="inline-block mt-2 text-[9px] px-2 py-0.5 rounded-full border border-emerald-400/30 text-emerald-300 bg-emerald-400/5">{g.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-[1fr_1fr_320px] gap-4">
          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="flex justify-between mb-3"><div className="text-[13px] font-semibold text-white flex items-center gap-2"><MessageCircle className="w-4 h-4 text-cyan-300"/>TRENDING DISCUSSIONS</div><a className="text-[11px] text-cyan-300">View all →</a></div>
            <div className="space-y-3">
              {discussions.map(d=>(
                <div key={d.t} className="flex gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 shrink-0"/>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] text-white leading-tight">{d.t}</div>
                    <div className="text-[9px] text-slate-500">{d.by}</div>
                    <div className="text-[10px] text-slate-400 mt-1 flex gap-2"><span>💬 {d.c}</span><span>{d.ago}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="flex justify-between mb-3"><div className="text-[13px] font-semibold text-white flex items-center gap-2"><Calendar className="w-4 h-4 text-cyan-300"/>UPCOMING EVENTS</div><a className="text-[11px] text-cyan-300">View all events →</a></div>
            <div className="space-y-3">
              {events.map(e=>(
                <div key={e.t} className="flex gap-3 items-center">
                  <div className="w-14 rounded bg-emerald-400/10 border border-emerald-400/30 text-center py-1"><div className="text-[10px] text-emerald-300 tracking-widest">{e.d}</div></div>
                  <div className="flex-1"><div className="text-[12px] text-white">{e.t}</div><div className="text-[10px] text-slate-500">{e.loc}</div></div>
                  <button className="text-[10px] px-3 py-1 rounded border border-emerald-400/40 text-emerald-300 bg-emerald-400/5">Register</button>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex justify-between mb-3"><div className="text-[13px] font-semibold text-white flex items-center gap-2"><Trophy className="w-4 h-4 text-amber-300"/>TOP CONTRIBUTORS</div><span className="text-[10px] text-slate-400">This Month</span></div>
            <div className="space-y-2">
              {contributors.map((c,i)=>(
                <div key={c.n} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-rose-500"/>
                  <div className="flex-1"><div className="text-[11px] text-white">{c.n}</div><div className="text-[9px] text-slate-500">{c.pts}</div></div>
                  <span className={`w-5 h-5 rounded-full grid place-items-center text-[10px] font-semibold ${i===0?"bg-amber-400 text-slate-900":"bg-white/10 text-slate-300"}`}>{i+1}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="grid grid-cols-[1fr_320px] gap-4">
          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[13px] font-semibold text-white mb-3">SHARE WITH THE COMMUNITY</div>
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 shrink-0"/>
              <div className="flex-1">
                <input placeholder="What's on your mind?" className="w-full h-10 rounded-md bg-white/5 border border-white/10 px-3 text-[12px] text-slate-300 outline-none"/>
                <div className="mt-2 flex gap-2 text-[10px]">
                  {[[ImageIcon,"Photo"],[Video,"Video"],[ListChecks,"Poll"],[FileText,"Document"],[Calendar,"Event"]].map(([I,l]:any)=>(
                    <button key={l} className="flex items-center gap-1 px-2 py-1 rounded border border-white/10 text-slate-300"><I className="w-3 h-3"/>{l}</button>
                  ))}
                  <button className="ml-auto px-4 py-1 rounded bg-emerald-400 text-slate-900 font-semibold">Post</button>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex justify-between mb-3"><div className="text-[13px] font-semibold text-white">COMMUNITY CHALLENGES</div><a className="text-[10px] text-cyan-300">View all →</a></div>
            <div className="space-y-3">
              {challenges.map(c=>(
                <div key={c.n}>
                  <div className="flex justify-between text-[11px]"><span className="text-white">{c.n}</span><span className="text-white">{c.pct}%</span></div>
                  <div className="text-[9px] text-slate-500">{c.cur}</div>
                  <div className="mt-1 h-1 bg-white/10 rounded-full overflow-hidden"><div className="h-full" style={{background:c.c,width:`${c.pct}%`}}/></div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <div className="flex justify-between mb-3"><div className="text-[13px] font-semibold text-white">SUGGESTED FOR YOU</div><a className="text-[10px] text-cyan-300">View all →</a></div>
          <div className="grid grid-cols-3 gap-3">
            {suggested.map(s=>(
              <div key={s.n} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] p-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500"/>
                <div className="flex-1"><div className="text-[12px] text-white">{s.n}</div><div className="text-[9px] text-slate-500">{s.m}</div></div>
                <button className="text-[10px] px-3 py-1 rounded border border-emerald-400/40 text-emerald-300 bg-emerald-400/5">Join Group</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}