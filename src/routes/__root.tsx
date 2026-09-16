import { createRootRoute, Outlet } from "@tanstack/react-router";
import { AppShell } from "@/app/AppShell";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}
