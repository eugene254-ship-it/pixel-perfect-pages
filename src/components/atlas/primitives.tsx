import type { ReactNode } from "react";

export function Sparkline({ color, seed = 1 }: { color: string; seed?: number }) {
  const pts = Array.from({ length: 24 }, (_, i) => {
    const y = 22 + Math.sin(i * 0.55 + seed) * 7 + ((i * 7 + seed * 13) % 5) - i * 0.25;
    return `${i * 10},${y}`;
  }).join(" ");
  const id = `spark-${color.replace(/[^a-z0-9]/gi, "")}-${seed}`;
  return (
    <svg viewBox="0 0 240 40" className="w-full h-10" preserveAspectRatio="none">
      <defs>
        <linearGradient id={id} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.45" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" />
      <polygon points={`${pts} 240,40 0,40`} fill={`url(#${id})`} />
    </svg>
  );
}

export function HexIcon({
  children,
  color = "#22d3ee",
  size = 44,
}: {
  children: ReactNode;
  color?: string;
  size?: number;
}) {
  return (
    <div className="relative inline-flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <polygon points="50,4 92,27 92,73 50,96 8,73 8,27" fill="rgba(255,255,255,0.02)" stroke={color} strokeOpacity="0.55" strokeWidth="2" />
      </svg>
      <div style={{ color }}>{children}</div>
    </div>
  );
}

export function Globe({ size = 240 }: { size?: number }) {
  const dots = Array.from({ length: 42 }, (_, i) => {
    const a = (i * 137.5) * (Math.PI / 180);
    const r = ((i * 53) % 88);
    const x = 100 + Math.cos(a) * r;
    const y = 100 + Math.sin(a) * r * 0.9;
    const colors = ["#4ade80", "#22d3ee", "#facc15", "#c084fc"];
    return { x, y, c: colors[i % 4], r: ((i * 17) % 3) * 0.5 + 0.7 };
  });
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
        {[...Array(8)].map((_, i) => (
          <ellipse key={`h${i}`} cx="100" cy="100" rx="95" ry={12 + i * 11} fill="none" stroke="#22d3ee" strokeOpacity="0.15" strokeWidth="0.5" />
        ))}
        {[...Array(12)].map((_, i) => (
          <ellipse key={`v${i}`} cx="100" cy="100" rx={95 - i * 8} ry="95" fill="none" stroke="#22d3ee" strokeOpacity="0.1" strokeWidth="0.5" />
        ))}
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={d.c} opacity="0.9" />
        ))}
      </svg>
    </div>
  );
}

export function Ring({ pct, color, size = 88, label }: { pct: number; color: string; size?: number; label?: string }) {
  const r = 38;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
        <circle cx="50" cy="50" r={r} fill="none" stroke={color} strokeWidth="6" strokeDasharray={`${(pct / 100) * c} ${c}`} strokeLinecap="round" />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <div className="text-[16px] font-semibold text-white leading-none">{pct}%</div>
          {label && <div className="text-[9px] text-slate-400 mt-1">{label}</div>}
        </div>
      </div>
    </div>
  );
}

export function SectionCard({ title, actions, children, className = "" }: { title?: string; actions?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={`rounded-xl border border-white/10 bg-white/[0.02] p-5 ${className}`}>
      {(title || actions) && (
        <div className="flex items-center justify-between mb-4">
          {title && <div className="text-[11px] tracking-[0.2em] text-slate-400">{title}</div>}
          {actions}
        </div>
      )}
      {children}
    </section>
  );
}