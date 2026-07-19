import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Home, Target, Sprout, Repeat, Brain, BookOpen, FlaskConical, Wallet,
  Users, Landmark, BarChart3, Code2, Settings, Globe2, Bell, Mail,
  ChevronDown, Menu, X, Circle,
} from "lucide-react";
import { Globe, HexIcon } from "./primitives";
import atlas from "@/content/atlas.json";
import { GlobalSearch } from "./GlobalSearch";
import { ContentValidationBanner } from "./ContentValidationBanner";

const ICONS: Record<string, any> = {
  Home, Target, Sprout, Repeat, Brain, BookOpen, FlaskConical, Wallet,
  Users, Landmark, BarChart3, Code2, Settings,
};

function SidebarInner({ active, onNavigate }: { active: string; onNavigate?: () => void }) {
  return (
    <>
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
        {atlas.nav.map((item) => {
          const Icon = ICONS[item.icon] ?? Circle;
          const isActive = item.label === active;
          return (
            <Link
              key={item.label}
              to={item.to}
              onClick={onNavigate}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] transition ${
                isActive
                  ? "bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
              }`}
            >
              <Icon className="w-4 h-4" />
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
    </>
  );
}

export function AppShell({ active, children }: { active: string; children: ReactNode }) {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [readIds, setReadIds] = useState<Set<string>>(new Set());
  const notifRef = useRef<HTMLDivElement>(null);

  const unread = atlas.notifications.filter((n) => n.unread && !readIds.has(n.id)).length;

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) setNotifOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#0a1424] text-foreground"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at top left, rgba(34,211,238,0.06), transparent 50%), radial-gradient(ellipse at bottom right, rgba(74,222,128,0.05), transparent 50%)",
      }}
    >
      <div className="flex">
        {/* Desktop sidebar */}
        <aside className="w-[248px] shrink-0 border-r border-white/5 bg-[#0c1830]/60 min-h-screen hidden md:flex flex-col">
          <SidebarInner active={active} />
        </aside>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
            <aside className="absolute left-0 top-0 bottom-0 w-[260px] bg-[#0c1830] border-r border-white/10 flex flex-col">
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-3 right-3 w-8 h-8 grid place-items-center rounded-md bg-white/5 text-slate-300"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
              <SidebarInner active={active} onNavigate={() => setMobileOpen(false)} />
            </aside>
          </div>
        )}

        <main className="flex-1 min-w-0">
          <div className="flex items-center gap-3 px-4 md:px-8 py-4 border-b border-white/5">
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden w-9 h-9 rounded-full bg-white/5 border border-white/10 grid place-items-center text-slate-300"
              aria-label="Open menu"
            >
              <Menu className="w-4 h-4" />
            </button>

            <GlobalSearch />

            <div className="ml-auto flex items-center gap-2 md:gap-3">
              <button className="hidden md:flex items-center gap-2 h-9 px-3 rounded-full bg-white/5 border border-white/10 text-[13px] text-slate-300">
                <Globe2 className="w-4 h-4" /> Earth <ChevronDown className="w-3 h-3" />
              </button>

              <div className="relative" ref={notifRef}>
                <button
                  onClick={() => setNotifOpen((o) => !o)}
                  className="relative w-9 h-9 rounded-full bg-white/5 border border-white/10 grid place-items-center text-slate-300"
                  aria-label="Notifications"
                >
                  <Bell className="w-4 h-4" />
                  {unread > 0 && (
                    <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-orange-500 text-[9px] font-semibold grid place-items-center text-white">
                      {unread}
                    </span>
                  )}
                </button>
                {notifOpen && (
                  <div className="absolute right-0 top-11 w-[340px] z-40 rounded-xl border border-white/10 bg-[#0c1830] shadow-2xl overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                      <div className="text-[12px] font-semibold text-white">Notifications</div>
                      <button
                        onClick={() => setReadIds(new Set(atlas.notifications.map((n) => n.id)))}
                        className="text-[10px] text-cyan-300"
                      >
                        Mark all read
                      </button>
                    </div>
                    <div className="max-h-[380px] overflow-y-auto">
                      {atlas.notifications.map((n) => {
                        const isUnread = n.unread && !readIds.has(n.id);
                        return (
                          <button
                            key={n.id}
                            onClick={() => {
                              setReadIds((s) => new Set([...s, n.id]));
                              setNotifOpen(false);
                              navigate({ to: n.to });
                            }}
                            className="w-full text-left px-4 py-3 hover:bg-white/5 border-b border-white/5 last:border-b-0 flex gap-3"
                          >
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${isUnread ? "bg-cyan-400" : "bg-transparent"}`} />
                            <div className="min-w-0 flex-1">
                              <div className="text-[12px] text-white">{n.title}</div>
                              <div className="text-[10px] text-slate-400 truncate">{n.desc}</div>
                              <div className="text-[9px] text-slate-500 mt-0.5">{n.time}</div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <button className="hidden md:grid w-9 h-9 rounded-full bg-white/5 border border-white/10 place-items-center text-slate-300">
                <Mail className="w-4 h-4" />
              </button>
              <div className="hidden lg:flex items-center gap-3 h-10 pl-2 pr-3 rounded-full bg-white/5 border border-white/10">
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

          <ContentValidationBanner />
          {children}
        </main>
      </div>
    </div>
  );
}