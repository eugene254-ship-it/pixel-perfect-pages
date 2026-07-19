import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { PageSkeleton, RouteError } from "./components/atlas/RouteState";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultPendingComponent: () => <PageSkeleton />,
    defaultErrorComponent: ({ error, reset }) => (
      <RouteError error={error} reset={reset} />
    ),
    defaultNotFoundComponent: () => (
      <RouteError error={new Error("Page not found.")} />
    ),
  });

  return router;
};
