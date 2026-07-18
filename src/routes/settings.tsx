import { createFileRoute } from "@tanstack/react-router";
import {
  Settings as SettingsIcon, Layers, ShieldCheck, CloudUpload, Database, Users, Globe2,
  Wrench, Zap, Bug, Sparkles, Clock, Ruler, Palette, Lock, Wifi, AlertTriangle,
  Code2, Hexagon, Cpu, GitBranch, Bell, Brain, ChevronRight,
} from "lucide-react";
import { AppShell } from "@/components/atlas/AppShell";
import { HexIcon } from "@/components/atlas/primitives";
import atlas from "@/content/atlas.json";
import { useState } from "react";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [
    { title: "System Settings — Atlas Sanctum" },
    { name: "description", content: "Configure and control the Atlas Sanctum platform." },
  ] }),
  component: SettingsPage,
});

const ICONS: Record<string, any> = {
  Layers, ShieldCheck, CloudUpload, Database, Users, Globe2, Wrench, Zap, Bug, Sparkles,
  Settings: SettingsIcon, Clock, Ruler, Palette, Lock, Wifi, AlertTriangle,
  Code2, Hexagon, Cpu, GitBranch, Bell, Brain,
};

function Section({ title, items }: { title: string; items: { n: string; d: string; icon: string }[] }) {
  return (
    <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
      <div className="text-[13px] font-semibold text-white mb-3">{title}</div>
      <div className="space-y-1.5">
        {items.map((it) => {
          const Icon = ICONS[it.icon] ?? SettingsIcon;
          return (
            <button key={it.n} className="w-full flex items-center gap-3 rounded-lg bg-white/[0.03] border border-white/10 p-2.5 hover:bg-white/5 text-left">
              <HexIcon color="#22d3ee" size={30}><Icon className="w-3.5 h-3.5" /></HexIcon>
              <div className="min-w-0 flex-1">
                <div className="text-[12px] text-white">{it.n}</div>
                <div className="text-[10px] text-slate-500 truncate">{it.d}</div>
              </div>
              <ChevronRight className="w-3 h-3 text-slate-500" />
            </button>
          );
        })}
      </div>
    </section>
  );
}

function SettingsPage() {
  const s = atlas.settings;
  const [toggles, setToggles] = useState<Record<string, boolean>>(
    Object.fromEntries(s.quick.map((q) => [q.n, q.on]))
  );
  return (
    <AppShell active="System Settings">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-[24px] font-semibold text-white tracking-tight">SYSTEM SETTINGS</h1>
            <p className="text-[13px] text-slate-400">Configure, secure and automate the Atlas Sanctum platform</p>
          </div>
          <div className="flex gap-2">
            <button className="h-9 px-4 rounded-md bg-emerald-400 text-slate-900 text-[12px] font-semibold">Save Changes</button>
            <button className="h-9 px-4 rounded-md border border-white/15 text-slate-200 text-[12px]">Reset</button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {s.overview.map((o) => {
            const Icon = ICONS[o.icon] ?? SettingsIcon;
            return (
              <div key={o.l} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center gap-2">
                  <HexIcon color={o.c} size={28}><Icon className="w-3.5 h-3.5" /></HexIcon>
                  <div className="text-[9px] tracking-widest text-slate-500">{o.l}</div>
                </div>
                <div className="mt-2 text-white text-[20px] font-semibold leading-none">{o.v}</div>
                <div className="text-[10px] text-emerald-400 mt-1">{o.sub}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-4">
          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[13px] font-semibold text-white mb-3">SYSTEM STATUS</div>
            <div className="space-y-2">
              {s.status.map((st) => (
                <div key={st.n} className="flex justify-between items-center rounded-md bg-white/[0.03] border border-white/10 px-3 py-2">
                  <div className="text-[12px] text-white flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />{st.n}</div>
                  <span className="text-[10px] text-emerald-400">{st.s}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[13px] font-semibold text-white mb-3">QUICK ACTIONS</div>
            <div className="grid grid-cols-2 gap-2">
              {s.quick.map((q) => {
                const Icon = ICONS[q.icon] ?? SettingsIcon;
                const on = toggles[q.n];
                return (
                  <button
                    key={q.n}
                    onClick={() => setToggles((t) => ({ ...t, [q.n]: !t[q.n] }))}
                    className={`flex items-center justify-between rounded-lg border p-2.5 text-left ${on ? "bg-emerald-400/10 border-emerald-400/30" : "bg-white/[0.03] border-white/10"}`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${on ? "text-emerald-300" : "text-slate-400"}`} />
                      <span className="text-[11px] text-white">{q.n}</span>
                    </div>
                    <span className={`w-8 h-4 rounded-full relative ${on ? "bg-emerald-400" : "bg-white/10"}`}>
                      <span className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${on ? "left-4" : "left-0.5"}`} />
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <Section title="CONFIGURATION" items={s.configuration} />
          <Section title="SECURITY" items={s.security} />
          <Section title="INTEGRATIONS" items={s.integrations} />
          <Section title="AUTOMATIONS" items={s.automations} />
        </div>
      </div>
    </AppShell>
  );
}