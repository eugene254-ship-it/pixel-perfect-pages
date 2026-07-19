/**
 * Lightweight analytics shim. Pushes to window.dataLayer when a real
 * provider (GTM, Segment snippet, etc.) is present; always buffers the
 * last 200 events to sessionStorage so we can inspect locally.
 *
 * Zero-dep by design — attach a real SDK later by mapping these events.
 */

export type AnalyticsEvent =
  | "search_query"
  | "search_filter_change"
  | "search_keyboard_nav"
  | "search_result_open"
  | "search_zero_results";

type Props = Record<string, unknown>;

const KEY = "atlas.analytics";
const MAX = 200;

function pushBuffer(entry: unknown) {
  try {
    const raw = sessionStorage.getItem(KEY);
    const arr: unknown[] = raw ? JSON.parse(raw) : [];
    arr.push(entry);
    while (arr.length > MAX) arr.shift();
    sessionStorage.setItem(KEY, JSON.stringify(arr));
  } catch {
    /* private mode, quota, etc. — silent */
  }
}

export function track(event: AnalyticsEvent, props: Props = {}) {
  const entry = { event, ts: Date.now(), ...props };
  if (typeof window !== "undefined") {
    const dl = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
    if (Array.isArray(dl)) dl.push(entry);
    else if (import.meta.env.DEV) console.debug("[analytics]", entry);
    pushBuffer(entry);
  }
}

export function readAnalyticsBuffer(): unknown[] {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}