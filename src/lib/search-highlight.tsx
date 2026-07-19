import { useEffect, type ReactNode } from "react";

/**
 * Escape a string so it can be used inside a RegExp source.
 */
function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Wrap case-insensitive matches of `query` inside `text` with <mark>.
 * Falls back to plain text when the query is empty or absent.
 */
export function Highlight({
  text,
  query,
}: {
  text: string;
  query?: string | null;
}) {
  const q = (query ?? "").trim();
  if (!q) return <>{text}</>;
  const re = new RegExp(`(${escapeRegex(q)})`, "ig");
  const parts = text.split(re);
  return (
    <>
      {parts.map((p, i) =>
        re.test(p) ? (
          <mark key={i} className="atlas-highlight">
            {p}
          </mark>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

/**
 * Scroll to a deep-linked search target and mark it briefly.
 * Guarded so it only runs client-side; safe to call unconditionally.
 */
export function useScrollToMatch(id: string | undefined) {
  useEffect(() => {
    if (!id || typeof document === "undefined") return;
    const el = document.getElementById(id);
    if (!el) return;
    const t = window.setTimeout(() => {
      el.scrollIntoView({ block: "center", behavior: "smooth" });
      el.setAttribute("data-match", "true");
      window.setTimeout(() => el.removeAttribute("data-match"), 2400);
    }, 60);
    return () => window.clearTimeout(t);
  }, [id]);
}