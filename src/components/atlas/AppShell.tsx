import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  Home, Target, Sprout, Repeat, Brain, BookOpen, FlaskConical, Wallet,
  Users, Landmark, BarChart3, Code2, Settings, Search, Globe2, Bell, Mail,
  ChevronDown,
} from "lucide-react";
import { Globe, HexIcon } from "./primitives";

const NAV = [
  { icon: Home, label: "Home", to: "/" },
  { icon: Target, label: "Mission Control", to: "/mission-control" },
  { icon: Sprout, label: "Ecosystems", to: "/ecosystems" },
  { icon: Repeat, label: "Regenerative Value Exchange", to: "/exchange" },
  { icon: Brain, label: "Impact Intelligence", to: "/intelligence" },
  { icon: BookOpen, label: "Knowledge Hub", to: "/knowledge" },
  { icon: FlaskConical, label: "Innovation Labs", to: "/labs" },
  { icon: Wallet, label: "Investment Hub", to: "/investment" },
  { icon: Users, label: "Community", to: "/community" },
  { icon: Landmark, label: "Governance", to: "/" },
  { icon: BarChart3, label: "Data & Analytics", to: "/" },
  { icon: Code2, label: "Developers", to: "/" },
  { icon: Settings, label: "System Settings", to: "/" },
] as const;

export function AppShell({ active, children }: { active: string; children: ReactNode }) {
  return (
    <div
      className="min-h-screen bg-[#0a1424] text-foreground"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at top left, rgba(34,211,238,0.06), transparent 50%), radial-gradient(ellipse at bottom right, rgba(74,222,128,0.05), transparent 50%)",
      }}
    >
      <div className="flex">
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
          <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
            {NAV.map((item) => {
              const isActive = item.label === active;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] transition ${
                    isActive
                      ? "bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
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

        <main className="flex-1 min-w-0">
          <div className="flex items-center gap-4 px-8 py-4 border-b border-white/5">
            <div className="flex-1 max-w-xl relative">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                placeholder="Search across systems, projects, assets, knowledge..."
                className="w-full h-10 rounded-full bg-white/5 border border-white/10 pl-11 pr-4 text-[13px] text-slate-300 placeholder:text-slate-500 outline-none focus:border-cyan-400/40"
              />
            </div>
            <div className="ml-auto flex items-center gap-3">
              <button className="flex items-center gap-2 h-9 px-3 rounded-full bg-white/5 border border-white/10 text-[13px] text-slate-300">
                <Globe2 className="w-4 h-4" /> Earth <ChevronDown className="w-3 h-3" />
              </button>
              <button className="relative w-9 h-9 rounded-full bg-white/5 border border-white/10 grid place-items-center text-slate-300">
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-orange-500 text-[9px] font-semibold grid place-items-center text-white">7</span>
              </button>
              <button className="w-9 h-9 rounded-full bg-white/5 border border-white/10 grid place-items-center text-slate-300">
                <Mail className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-3 h-10 pl-2 pr-3 rounded-full bg-white/5 border border-white/10">
                <HexIcon color="#4ade80" size={30}>
                  <Sprout className="w-3.5 h-3.5" />
                </HexIcon>
                <div className="text-[12px] leading-tight">
                  <div className="text-white font-medium">Steward</div>
                  <div className="text-slate-500 text-[10px]">Global Administrator</div>
                </div>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </div>
            </div>
          </div>

          {children}
        </main>
      </div>
    </div>
  );
}