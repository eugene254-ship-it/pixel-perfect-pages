# Visual regression

Playwright-driven per-route screenshot diffs so pixel drift against the
approved designs surfaces automatically.

## Run

    bun run dev              # in one terminal
    bun run test:visual      # in another

First run generates baselines. Subsequent runs diff against them.

## Update baselines

    bun run test:visual:update

## Adding a route

1. Ensure the page has a `data-testid="page-ready"` wrapper.
2. Add an entry to the `routes` array in `routes.spec.ts`.
3. Run the update command to record its baseline.