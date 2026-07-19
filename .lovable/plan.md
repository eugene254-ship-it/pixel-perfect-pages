## Scope

Five related upgrades to the Atlas Sanctum app:

1. **Loading/error/skeleton states on all 12 routes**
2. **Shared design token system** (spacing, typography, breakpoints)
3. **Deep-linked global search results** with match highlighting on target route
4. **Search analytics instrumentation** (queries, filters, keyboard, zero-results)
5. **Visual regression testing** against provided designs

---

## 1. Skeletons & error states (all 12 routes)

- New `src/components/atlas/RouteState.tsx` exporting:
  - `<PageSkeleton variant="dashboard|list|detail" />` — token-driven shimmer blocks matching each layout's grid.
  - `<RouteError error onRetry />` — friendly error card with retry.
  - `<ContentEmpty title description />` — zero-state.
- Wrap each route body in a `<Suspense fallback={<PageSkeleton />}>` and an `ErrorBoundary` (lightweight local class component in `RouteState.tsx`).
- Add `pendingComponent` and `errorComponent` to every `createFileRoute` in the 12 route files (index, mission-control, ecosystems, exchange, intelligence, knowledge, labs, investment, community, governance, analytics, developers, settings).
- Validation failures from `atlas.json` already surface via `ContentValidationBanner`; add a fallback path so pages that read a missing config key render `ContentEmpty` instead of throwing.

## 2. Shared design token system

- Extend `src/styles.css` `@theme` with a full token scale:
  - **Spacing**: `--space-0…--space-16` (4px base, 1.25 ratio at large end).
  - **Typography**: `--text-xs…--text-4xl` with paired `--leading-*`, plus semantic `--font-display`, `--font-body`, `--font-mono`.
  - **Breakpoints**: `--breakpoint-sm/md/lg/xl/2xl` matching Tailwind defaults so `sm:` etc. stay consistent.
  - **Radii, shadows, motion**: `--radius-*`, `--shadow-*`, `--ease-*`, `--duration-*`.
- Add `@utility` helpers: `text-display-1`, `text-display-2`, `text-body`, `text-caption` mapping to the scale so pages don't hand-pick sizes.
- Sweep the 12 route files and shared primitives to replace ad-hoc `text-[13px]`, arbitrary paddings, and duplicated font-size choices with the new utilities/tokens. Keep visual output identical — this is a rename pass, not a redesign.
- Document tokens inline in `src/styles.css` with a short comment block.

## 3. Deep-linked search + match highlighting

- Extend `searchIndex` entries in `src/content/atlas.json` with an optional `anchor` (e.g. `kh-article-3`) alongside the existing `route`.
- `GlobalSearch` now navigates with `{ to: route, search: { q, match: id }, hash: anchor }` using TanStack `useNavigate`.
- Add `validateSearch` on `/knowledge` and `/intelligence` routes for `{ q?: string; match?: string }`.
- New hook `useSearchHighlight()` in `src/lib/search-highlight.tsx`:
  - Reads `q`/`match` from route search.
  - Exports `<Highlight text />` that wraps case-insensitive matches in `<mark class="atlas-highlight">`.
  - Exports `scrollToMatch(id)` — called from a `useEffect` that scrolls the matched card into view and applies a `data-match="true"` ring animation.
- Update Knowledge Hub and Impact Intelligence route pages to:
  - Tag each entity/article container with `id={item.id}` and `data-searchable`.
  - Render titles/descriptions through `<Highlight>` when `q` is present.
- Style `mark.atlas-highlight` and `[data-match="true"]` in `styles.css` using tokens.

## 4. Search analytics instrumentation

- New `src/lib/analytics.ts`:
  - `track(event, props)` — thin wrapper that pushes to `window.dataLayer` if present, else `console.debug`, and buffers to `sessionStorage` under `atlas.analytics` (last 200 events) for local inspection.
  - Typed event names: `search_query`, `search_filter_change`, `search_keyboard_nav`, `search_result_open`, `search_zero_results`.
- Wire into `GlobalSearch`:
  - Debounced (400ms) `search_query` with `{ q, resultCount, filter }`.
  - `search_filter_change` on chip click.
  - `search_keyboard_nav` on Arrow/Enter/Esc with `{ key, index }`.
  - `search_result_open` on selection with `{ id, kind, route, source: 'keyboard'|'mouse' }`.
  - `search_zero_results` fires when a settled query returns 0.
- No new deps.

## 5. Visual regression testing

- New folder `tests/visual/` with a Playwright config `tests/visual/playwright.config.ts`:
  - `use: { viewport: { width: 1280, height: 1800 } }`, deterministic locale/timezone, `reducedMotion: 'reduce'`.
  - Chromium only.
- `tests/visual/routes.spec.ts`: iterates all 12 routes; for each, navigates, waits for `[data-testid="page-ready"]`, and calls `expect(page).toHaveScreenshot('<route>.png', { maxDiffPixelRatio: 0.02 })`.
- Add `data-testid="page-ready"` to each route's top-level container, set after skeleton removal.
- Baselines: reference PNGs (the user-provided designs) copied into `tests/visual/__snapshots__/routes.spec.ts/` as the initial baselines, one per route.
- `package.json` scripts:
  - `"test:visual": "playwright test -c tests/visual/playwright.config.ts"`
  - `"test:visual:update": "playwright test -c tests/visual/playwright.config.ts --update-snapshots"`
- README note (`tests/visual/README.md`) explaining how to update baselines when designs change, and the diff threshold rationale.
- Does not run in the sandbox build; opt-in local/CI command.

---

## Technical details

- Skeletons use `animate-pulse` + token-based `bg-[color-mix(in_oklch,var(--color-card) 92%,white)]` so they stay themed.
- `<Highlight>` splits on a case-insensitive regex built from an escaped query; falls back to plain text when `q` is empty.
- `useSearchHighlight` guards `scrollIntoView({ block: 'center' })` behind a `useHydrated()` check to avoid SSR mismatch.
- Analytics buffer uses a circular array; never throws if `sessionStorage` is unavailable (private mode).
- Playwright config sets `expect.toHaveScreenshot.threshold: 0.15` and `animations: 'disabled'`.

## Out of scope

- No redesign; token pass is behavior-preserving.
- No new external analytics SDK — hook point is `window.dataLayer` so a real provider can be attached later.
- No CI wiring for the visual tests beyond the npm scripts.

## File map

```text
src/components/atlas/RouteState.tsx        (new)
src/components/atlas/GlobalSearch.tsx      (edit — analytics + deep links)
src/lib/analytics.ts                       (new)
src/lib/search-highlight.tsx               (new)
src/content/atlas.json                     (edit — add anchors)
src/styles.css                             (edit — token scale, utilities, mark styles)
src/routes/*.tsx  (12 files)               (edit — pending/error, tokens, testid)
src/routes/knowledge.tsx                   (edit — validateSearch + Highlight)
src/routes/intelligence.tsx                (edit — validateSearch + Highlight)
tests/visual/playwright.config.ts          (new)
tests/visual/routes.spec.ts                (new)
tests/visual/__snapshots__/...             (new — 12 baseline PNGs)
tests/visual/README.md                     (new)
package.json                               (edit — scripts)
```
