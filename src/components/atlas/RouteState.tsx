import type { ReactNode } from "react";
import { AlertTriangle, Loader2, Inbox } from "lucide-react";

type SkelVariant = "dashboard" | "list" | "detail";

/**
 * Token-driven skeleton used by defaultPendingComponent on every route.
 * Blocks mirror the common shell (header + grid) so slow loads or
 * validation retries feel like the app is settling, not broken.
 */
export function PageSkeleton({ variant = "dashboard" }: { variant?: SkelVariant }) {
  const rows = variant === "list" ? 8 : variant === "detail" ? 3 : 4;
  return (
    <div className="p-6 space-y-6 animate-pulse" data-testid="route-pending" aria-busy="true">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="skeleton-block h-6 w-52" />
          <div className="skeleton-block h-3 w-72" />
        </div>
        <div className="skeleton-block h-9 w-40" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="skeleton-card h-24" />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        <div className="space-y-3">
          {Array.from({ length: rows }).map((_, i) => (
            <div key={i} className="skeleton-card h-16" />
          ))}
        </div>
        <div className="space-y-3">
          <div className="skeleton-card h-40" />
          <div className="skeleton-card h-40" />
        </div>
      </div>
    </div>
  );
}

export function RouteError({
  error,
  reset,
}: {
  error: unknown;
  reset?: () => void;
}) {
  const message =
    error instanceof Error ? error.message : "Something didn't load correctly.";
  return (
    <div className="p-6" data-testid="route-error" role="alert">
      <div className="rounded-xl border border-orange-400/30 bg-orange-400/5 p-6 max-w-2xl">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-orange-300 shrink-0 mt-0.5" />
          <div className="min-w-0 flex-1">
            <div className="text-body font-semibold text-white">
              We couldn't render this page
            </div>
            <div className="text-caption text-slate-400 mt-1 break-words">
              {message}
            </div>
            <div className="mt-4 flex gap-2">
              {reset && (
                <button
                  onClick={reset}
                  className="h-8 px-3 rounded-md bg-cyan-400/15 border border-cyan-400/40 text-cyan-200 text-caption"
                >
                  <Loader2 className="w-3 h-3 inline mr-1" /> Try again
                </button>
              )}
              <a
                href="/"
                className="h-8 px-3 rounded-md border border-white/10 text-slate-300 text-caption inline-flex items-center"
              >
                Go home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContentEmpty({
  title = "Nothing here yet",
  description,
  children,
}: {
  title?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className="rounded-xl border border-dashed border-white/10 bg-white/[0.02] p-8 text-center"
      data-testid="content-empty"
    >
      <Inbox className="w-6 h-6 text-slate-500 mx-auto" />
      <div className="mt-3 text-body font-semibold text-white">{title}</div>
      {description && (
        <div className="mt-1 text-caption text-slate-400">{description}</div>
      )}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}