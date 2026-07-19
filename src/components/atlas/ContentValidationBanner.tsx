import { useState } from "react";
import { AlertTriangle, X } from "lucide-react";
import { validateAtlas } from "@/lib/atlas-schema";

const result = validateAtlas();

export function ContentValidationBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (result.ok || dismissed) return null;
  return (
    <div className="mx-4 md:mx-8 mt-4 rounded-lg border border-amber-400/30 bg-amber-500/10 text-amber-100">
      <div className="flex items-start gap-3 p-3">
        <AlertTriangle className="w-4 h-4 mt-0.5 text-amber-300 shrink-0" />
        <div className="min-w-0 flex-1">
          <div className="text-[12px] font-semibold">Content configuration has issues</div>
          <div className="text-[11px] text-amber-200/80">
            <code className="bg-white/5 px-1 rounded">src/content/atlas.json</code> failed schema validation. The UI is
            rendering with fallback content — please fix the entries below.
          </div>
          <ul className="mt-2 space-y-0.5 text-[11px] text-amber-100/90 max-h-40 overflow-y-auto">
            {result.issues.slice(0, 8).map((i, idx) => (
              <li key={idx} className="font-mono">
                <span className="text-amber-300">{i.path}</span> — {i.message}
              </li>
            ))}
            {result.issues.length > 8 && (
              <li className="text-amber-200/70">…and {result.issues.length - 8} more</li>
            )}
          </ul>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="w-6 h-6 grid place-items-center rounded hover:bg-white/10 text-amber-200"
          aria-label="Dismiss"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}