import { createFileRoute } from "@tanstack/react-router";
import {
  Home, Target, Sprout, Repeat, Brain, BookOpen, FlaskConical, Wallet,
  Users, Landmark, BarChart3, Code2, Settings, Search, Globe2, Bell, Mail,
  ChevronDown, Play, Leaf, Waves, Heart, Recycle, Wind, TreePine, ShieldCheck,
  Coins, Sparkles, TrendingUp, Rocket, HandCoins, Compass, UsersRound, Activity,
  Hexagon, ChevronRight, CircleDot,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const nav = [
  { icon: Home, label: "Home", active: true },
  { icon: Target, label: "Mission Control" },
  { icon: Sprout, label: "Ecosystems" },
  { icon: Repeat, label: "Regenerative Value Exchange" },
  { icon: Brain, label: "Impact Intelligence" },
  { icon: BookOpen, label: "Knowledge Hub" },
  { icon: FlaskConical, label: "Innovation Labs" },
  { icon: Wallet, label: "Investment Hub" },
  { icon: Users, label: "Community" },
  { icon: Landmark, label: "Governance" },
  { icon: BarChart3, label: "Data & Analytics" },
  { icon: Code2, label: "Developers" },
  { icon: Settings, label: "System Settings" },
];

const stats = [
  { icon: Leaf, label: "TOTAL REGENERATIVE VALUE", value: "$2.47T", change: "+12.7%", color: "#4ade80" },
  { icon: Sprout, label: "CARBON REMOVED", value: "1.32B", unit: "tCO₂", change: "+8.4%", color: "#a3e635" },
  { icon: TreePine, label: "HECTARES RESTORED", value: "4.78M", unit: "ha", change: "+7.1%", color: "#facc15" },
  { icon: Heart, label: "LIVES IMPROVED", value: "236.7M", change: "+5.8%", color: "#c084fc" },
  { icon: Rocket, label: "ACTIVE PROJECTS", value: "24,153", change: "+9.3%", color: "#22d3ee" },
];

const ecosystems = [
  { icon: Sprout, title: "REGENERATIVE\nAGRICULTURE", projects: "3,247", value: "$612.3B", growth: "78%", color: "from-lime-500/30 to-emerald-800/40" },
  { icon: Waves, title: "OCEAN & BLUE\nECONOMY", projects: "2,118", value: "$423.7B", growth: "65%", color: "from-cyan-500/30 to-blue-900/40" },
  { icon: Heart, title: "HUMAN HEALTH &\nWELLNESS", projects: "1,842", value: "$315.6B", growth: "72%", color: "from-pink-500/30 to-purple-900/40" },
  { icon: Recycle, title: "CIRCULAR\nBIOECONOMY", projects: "1,576", value: "$287.4B", growth: "68%", color: "from-emerald-500/30 to-teal-900/40" },
  { icon: Wind, title: "CLIMATE ACTION &\nRESTORATION", projects: "2,943", value: "$834.2B", growth: "81%", color: "from-amber-500/30 to-orange-900/40" },
];

const flow = [
  { icon: Activity, label: "Measure", desc: "Real-world data from\nplanet & people", color: "#4ade80" },
  { icon: ShieldCheck, label: "Verify", desc: "AI & Oracles validate\nimpact integrity", color: "#22d3ee" },
  { icon: Hexagon, label: "Tokenize", desc: "Regenerative assets\non the blockchain", color: "#c084fc" },
  { icon: Sparkles, label: "Regenerative Value Exchange", desc: "Transparent. Verifiable. Regenerative.", color: "#facc15", center: true },
  { icon: Coins, label: "Invest", desc: "Capital flows into high\nimpact solutions", color: "#fbbf24" },
  { icon: Sprout, label: "Regenerate", desc: "Ecosystems & communities\nare restored", color: "#4ade80" },
  { icon: TrendingUp, label: "Multiply", desc: "Value returns amplified\nfor all life", color: "#a3e635" },
];

const activity = [
  { icon: Leaf, title: "New Project Funded", desc: "Mangrove Restoration Initiative in Indonesia", time: "2m ago", meta: "+ $2.3M", metaColor: "#4ade80" },
  { icon: Wind, title: "Carbon Removal Milestone", desc: "100M tCO₂ removed globally", time: "15m ago", meta: "+ 100M tCO₂", metaColor: "#22d3ee" },
  { icon: FlaskConical, title: "Research Published", desc: "Breakthrough in Ocean Alkalinity Enhancement", time: "1h ago", meta: "View" },
  { icon: UsersRound, title: "Community Achievement", desc: "10,000 Families supported in Kenya", time: "2h ago", meta: "View" },
  { icon: HandCoins, title: "New Partnership", desc: "UNDP joined as Strategic Partner", time: "3h ago", meta: "View" },
];

const highlights = [
  { pct: "87%", label: "Increase in Biodiversity Health Index", change: "+11%", color: "#4ade80" },
  { pct: "79%", label: "Global Ocean Health Improvement", change: "+9%", color: "#22d3ee" },
  { pct: "92%", label: "Clean Water Access Expanded", change: "+14%", color: "#a3e635" },
  { pct: "76%", label: "Sustainable Food Production Increase", change: "+8%", color: "#facc15" },
];

const quick = [
  { icon: Rocket, title: "Launch Project", desc: "Start a new impact project", color: "#4ade80" },
  { icon: HandCoins, title: "Fund Solutions", desc: "Invest in regenerative ventures", color: "#22d3ee" },
  { icon: BookOpen, title: "Explore Knowledge", desc: "Research & best practices", color: "#facc15" },
  { icon: UsersRound, title: "Join Community", desc: "Connect & collaborate", color: "#c084fc" },
  { icon: Activity, title: "Track Impact", desc: "Real-time impact dashboard", color: "#4ade80" },
  { icon: Compass, title: "Governance Hub", desc: "Participate in decisions", color: "#f472b6" },
];

function Sparkline({ color }: { color: string }) {
  const pts = Array.from({ length: 20 }, (_, i) => {
    const y = 20 + Math.sin(i * 0.6) * 6 + Math.random() * 4 - i * 0.3;
    return `${i * 12},${y}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 240 40" className="w-full h-10" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`g-${color}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" />
      <polygon points={`${pts} 240,40 0,40`} fill={`url(#g-${color})`} />
    </svg>
  );
}

function HexIcon({ children, color = "#22d3ee", size = 44 }: { children: React.ReactNode; color?: string; size?: number }) {
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <polygon points="50,4 92,27 92,73 50,96 8,73 8,27" fill="rgba(255,255,255,0.02)" stroke={color} strokeOpacity="0.5" strokeWidth="2" />
      </svg>
      <div style={{ color }}>{children}</div>
    </div>
  );
}

function Globe({ size = 240 }: { size?: number }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 30%, #1e3a8a 0%, #0c1e42 45%, #050b1e 75%, transparent 100%)",
          boxShadow: "0 0 80px rgba(56,189,248,0.25), inset -20px -30px 60px rgba(0,0,0,0.6)",
        }}
      />
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-70">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="transparent" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.4" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="95" fill="url(#glow)" />
        {[...Array(8)].map((_, i) => (
          <ellipse key={i} cx="100" cy="100" rx="95" ry={12 + i * 11} fill="none" stroke="#22d3ee" strokeOpacity="0.15" strokeWidth="0.5" />
        ))}
        {[...Array(12)].map((_, i) => (
          <ellipse key={i} cx="100" cy="100" rx={95 - i * 8} ry="95" fill="none" stroke="#22d3ee" strokeOpacity="0.1" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 40 }).map((_, i) => {
          const a = Math.random() * Math.PI * 2;
          const r = Math.random() * 90;
          const x = 100 + Math.cos(a) * r;
          const y = 100 + Math.sin(a) * r * 0.9;
          const colors = ["#4ade80", "#22d3ee", "#facc15", "#c084fc"];
          return <circle key={i} cx={x} cy={y} r={Math.random() * 1.5 + 0.5} fill={colors[i % 4]} opacity="0.9" />;
        })}
      </svg>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-[#0a1424] text-foreground" style={{
      backgroundImage: "radial-gradient(ellipse at top left, rgba(34,211,238,0.06), transparent 50%), radial-gradient(ellipse at bottom right, rgba(74,222,128,0.05), transparent 50%)",
    }}>
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-[248px] shrink-0 border-r border-white/5 bg-[#0c1830]/60 min-h-screen flex flex-col">
          <div className="px-5 py-6 flex items-center gap-3 border-b border-white/5">
            <div className="relative w-9 h-9">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <polygon points="20,3 35,12 35,28 20,37 5,28 5,12" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
                <polygon points="20,10 29,15 29,25 20,30 11,25 11,15" fill="none" stroke="#22d3ee" strokeWidth="1" opacity="0.6" />
                <circle cx="20" cy="20" r="2" fill="#22d3ee" />
              </svg>
            </div>
            <div>
              <div className="text-[15px] font-semibold tracking-[0.18em] text-white">ATLAS SANCTUM</div>
              <div className="text-[9px] tracking-[0.2em] text-cyan-400/70">REGENERATIVE VALUE PLATFORM</div>
            </div>
          </div>

          <nav className="flex-1 px-3 py-4 space-y-0.5">
            {nav.map((item) => (
              <a key={item.label} href="#" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] transition ${
                item.active ? "bg-cyan-400/10 text-cyan-300 border border-cyan-400/20" : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
              }`}>
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="p-4 border-t border-white/5">
            <div className="text-[10px] tracking-[0.2em] text-slate-500">SYSTEM STATUS</div>
            <div className="flex justify-between items-center mt-1.5">
              <span className="text-[11px] text-emerald-400">All Systems Operational</span>
              <span className="text-[11px] text-slate-400">100%</span>
            </div>
            <div className="mt-4 flex justify-center">
              <Globe size={140} />
            </div>
            <div className="mt-4 text-[10px] text-slate-500">
              <div>ATLAS SANCTUM v1.0</div>
              <div className="mt-0.5">© 2025 All rights reserved</div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0">
          {/* Topbar */}
          <div className="flex items-center gap-4 px-8 py-4 border-b border-white/5">
            <div className="flex-1 max-w-xl relative">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input placeholder="Search across systems, projects, assets, knowledge..." className="w-full h-10 rounded-full bg-white/5 border border-white/10 pl-11 pr-4 text-[13px] text-slate-300 placeholder:text-slate-500 outline-none focus:border-cyan-400/40" />
            </div>
            <div className="ml-auto flex items-center gap-3">
              <button className="flex items-center gap-2 h-9 px-3 rounded-full bg-white/5 border border-white/10 text-[13px] text-slate-300">
                <Globe2 className="w-4 h-4" /> Earth <ChevronDown className="w-3 h-3" />
              </button>
              <button className="relative w-9 h-9 rounded-full bg-white/5 border border-white/10 grid place-items-center text-slate-300">
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-orange-500 text-[9px] font-semibold grid place-items-center text-white">7</span>
              </button>
              <button className="w-9 h-9 rounded-full bg-white/5 border border-white/10 grid place-items-center text-slate-300"><Mail className="w-4 h-4" /></button>
              <div className="flex items-center gap-3 h-10 pl-2 pr-3 rounded-full bg-white/5 border border-white/10">
                <HexIcon color="#4ade80" size={30}><Sprout className="w-3.5 h-3.5" /></HexIcon>
                <div className="text-[12px] leading-tight">
                  <div className="text-white font-medium">Steward</div>
                  <div className="text-slate-500 text-[10px]">Global Administrator</div>
                </div>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_360px] gap-6 p-8">
            {/* Left column */}
            <div className="space-y-6 min-w-0">
              {/* Hero */}
              <section className="relative overflow-hidden">
                <div className="grid grid-cols-[1fr_auto] gap-6 items-center">
                  <div>
                    <h1 className="text-[42px] leading-[1.1] font-semibold text-white tracking-tight">Building a Regenerative<br />Future for All Life</h1>
                    <p className="mt-4 text-[14px] text-slate-400 max-w-md leading-relaxed">Atlas Sanctum unites ecosystems, knowledge, capital and innovation to regenerate our planet and humanity.</p>
                    <div className="mt-6 flex gap-3">
                      <button className="h-11 px-6 rounded-md text-[12px] font-semibold tracking-[0.15em] bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 shadow-[0_0_30px_rgba(34,211,238,0.35)]">EXPLORE ECOSYSTEMS</button>
                      <button className="h-11 px-6 rounded-md text-[12px] font-semibold tracking-[0.15em] border border-white/15 text-slate-200 hover:bg-white/5">MISSION CONTROL</button>
                    </div>
                  </div>
                  <div className="relative">
                    <Globe size={260} />
                    <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                      <span className="w-14 h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur grid place-items-center">
                        <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                      </span>
                    </button>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-4 text-[10px] tracking-[0.2em] text-slate-300">PLAY VISION FILM</div>
                  </div>
                </div>
              </section>

              {/* Stats */}
              <div className="grid grid-cols-5 gap-3">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
                    <div className="flex items-start gap-2">
                      <HexIcon color={s.color} size={34}><s.icon className="w-4 h-4" /></HexIcon>
                      <div className="min-w-0">
                        <div className="text-[8.5px] tracking-[0.15em] text-slate-500 leading-tight">{s.label}</div>
                        <div className="mt-1 text-white font-semibold text-[18px] leading-none">{s.value}{s.unit && <span className="text-[11px] text-slate-400 ml-1">{s.unit}</span>}</div>
                      </div>
                    </div>
                    <div className="mt-2 text-[10px]">
                      <span style={{ color: s.color }} className="font-medium">{s.change}</span>
                      <span className="text-slate-500 ml-1">vs last month</span>
                    </div>
                    <div className="mt-2"><Sparkline color={s.color} /></div>
                  </div>
                ))}
              </div>

              {/* Ecosystem Overview */}
              <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[11px] tracking-[0.2em] text-slate-400">ECOSYSTEM OVERVIEW</div>
                  <a className="text-[11px] text-cyan-400 flex items-center gap-1">Explore All Ecosystems <ChevronRight className="w-3 h-3" /></a>
                </div>
                <div className="grid grid-cols-5 gap-3">
                  {ecosystems.map((e) => (
                    <div key={e.title} className="rounded-lg overflow-hidden border border-white/10 bg-white/[0.03]">
                      <div className={`relative h-24 bg-gradient-to-br ${e.color} grid place-items-center`}>
                        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1), transparent 60%)" }} />
                        <HexIcon color="#4ade80" size={44}><e.icon className="w-5 h-5" /></HexIcon>
                      </div>
                      <div className="p-3">
                        <div className="text-[10px] font-semibold tracking-[0.1em] text-white whitespace-pre-line leading-tight min-h-[26px]">{e.title}</div>
                        <div className="mt-3 flex justify-between text-[9px] tracking-wider text-slate-500">
                          <span>Projects</span><span>Impact Value</span>
                        </div>
                        <div className="flex justify-between text-[13px] font-semibold text-white mt-0.5">
                          <span>{e.projects}</span><span>{e.value}</span>
                        </div>
                        <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400" style={{ width: e.growth }} />
                        </div>
                        <div className="mt-1 text-right text-[9px] text-slate-500">{e.growth} Growth</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Regenerative Value Flow */}
              <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-[11px] tracking-[0.2em] text-slate-400">REGENERATIVE VALUE FLOW</div>
                  <div className="text-[11px] text-slate-500">How Value is Created and Multiplied</div>
                </div>
                <div className="relative flex items-start justify-between gap-1 px-2">
                  <div className="absolute top-8 left-[8%] right-[8%] h-px border-t border-dashed border-white/15" />
                  {flow.map((f) => (
                    <div key={f.label} className="relative flex flex-col items-center text-center w-[13%]">
                      <div className="relative bg-[#0a1424] px-2">
                        {f.center ? (
                          <div className="relative">
                            <svg viewBox="0 0 100 100" className="w-24 h-24">
                              <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" fill="none" stroke="#facc15" strokeOpacity="0.7" strokeWidth="1.5" />
                              <polygon points="50,20 78,35 78,65 50,80 22,65 22,35" fill="none" stroke="#facc15" strokeOpacity="0.5" strokeWidth="1" />
                              {[0, 60, 120, 180, 240, 300].map((a) => {
                                const x = 50 + Math.cos((a * Math.PI) / 180) * 35;
                                const y = 50 + Math.sin((a * Math.PI) / 180) * 35;
                                return <line key={a} x1="50" y1="50" x2={x} y2={y} stroke="#facc15" strokeOpacity="0.4" strokeWidth="0.8" />;
                              })}
                              <circle cx="50" cy="50" r="3" fill="#facc15" />
                            </svg>
                          </div>
                        ) : (
                          <HexIcon color={f.color} size={56}><f.icon className="w-6 h-6" /></HexIcon>
                        )}
                      </div>
                      <div className={`mt-3 text-[12px] font-medium ${f.center ? "" : "text-white"}`} style={f.center ? { color: f.color } : {}}>{f.label}</div>
                      <div className="mt-1 text-[10px] text-slate-500 whitespace-pre-line leading-tight">{f.desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Quick Access */}
              <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-[11px] tracking-[0.2em] text-slate-400 mb-4">QUICK ACCESS</div>
                <div className="grid grid-cols-6 gap-3">
                  {quick.map((q) => (
                    <button key={q.title} className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 text-left">
                      <HexIcon color={q.color} size={38}><q.icon className="w-4 h-4" /></HexIcon>
                      <div className="min-w-0">
                        <div className="text-[12px] font-medium text-white truncate">{q.title}</div>
                        <div className="text-[10px] text-slate-500 truncate">{q.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="space-y-4">
              <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] tracking-[0.2em] text-slate-400">PLANETARY LIVE VIEW</div>
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-400"><CircleDot className="w-2.5 h-2.5 fill-emerald-400" /> LIVE</div>
                </div>
                <div className="mt-4 flex gap-3 items-center">
                  <Globe size={190} />
                  <div className="flex flex-col gap-1.5">
                    {[
                      { icon: Sprout, label: "Climate", c: "#4ade80" },
                      { icon: Leaf, label: "Biodiversity", c: "#22d3ee" },
                      { icon: Waves, label: "Oceans", c: "#38bdf8" },
                      { icon: Wind, label: "Air Quality", c: "#a3e635" },
                      { icon: Waves, label: "Water", c: "#60a5fa" },
                      { icon: Sprout, label: "Soil Health", c: "#f59e0b" },
                    ].map((t) => (
                      <button key={t.label} className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-300">
                        <HexIcon color={t.c} size={22}><t.icon className="w-2.5 h-2.5" /></HexIcon>
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {[
                    { v: "1,247", l: "Projects", c: "#facc15" },
                    { v: "872", l: "Partners", c: "#22d3ee" },
                    { v: "128", l: "Countries", c: "#c084fc" },
                    { v: "5.6K", l: "Sensors Online", c: "#4ade80" },
                  ].map((k) => (
                    <div key={k.l} className="flex items-center gap-1.5">
                      <HexIcon color={k.c} size={28}><Hexagon className="w-3 h-3" /></HexIcon>
                      <div>
                        <div className="text-[13px] font-semibold text-white leading-none">{k.v}</div>
                        <div className="text-[9px] text-slate-500 mt-0.5">{k.l}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[11px] tracking-[0.2em] text-slate-400">GLOBAL ACTIVITY FEED</div>
                  <a className="text-[11px] text-cyan-400 flex items-center gap-1">View All <ChevronRight className="w-3 h-3" /></a>
                </div>
                <div className="space-y-3">
                  {activity.map((a) => (
                    <div key={a.title} className="flex items-start gap-3">
                      <HexIcon color="#4ade80" size={34}><a.icon className="w-4 h-4" /></HexIcon>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between gap-2">
                          <div className="text-[12px] font-medium text-white truncate">{a.title}</div>
                          <div className="text-[10px] text-slate-500 shrink-0">{a.time}</div>
                        </div>
                        <div className="flex justify-between gap-2 mt-0.5">
                          <div className="text-[11px] text-slate-400 truncate">{a.desc}</div>
                          <div className="text-[11px] shrink-0" style={{ color: a.metaColor || "#22d3ee" }}>{a.meta}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[11px] tracking-[0.2em] text-slate-400">IMPACT HIGHLIGHTS</div>
                  <button className="text-[11px] text-slate-400 flex items-center gap-1">This Month <ChevronDown className="w-3 h-3" /></button>
                </div>
                <div className="space-y-4">
                  {highlights.map((h) => (
                    <div key={h.label} className="flex items-center gap-3">
                      <div className="relative w-11 h-11 shrink-0">
                        <svg viewBox="0 0 40 40" className="w-full h-full -rotate-90">
                          <circle cx="20" cy="20" r="17" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                          <circle cx="20" cy="20" r="17" fill="none" stroke={h.color} strokeWidth="3" strokeDasharray={`${(parseFloat(h.pct) / 100) * 107} 107`} strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 grid place-items-center text-[10px] font-semibold text-white">{h.pct}</div>
                      </div>
                      <div className="flex-1 min-w-0 flex justify-between items-center gap-2">
                        <div className="text-[12px] text-slate-200 truncate">{h.label}</div>
                        <div className="text-[11px] shrink-0" style={{ color: h.color }}>{h.change} <span className="text-slate-500">vs last month</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
