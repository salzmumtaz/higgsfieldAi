import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";
import { AppShell } from "@/app/AppShell";
import { t } from "@/lib/i18n";

export const Route = createRootRoute({
  head: () => ({
    meta: [{ title: t("meta.fallback") }],
  }),
  component: RootLayout,
});

function RootLayout() {
  return (
    <>
      <HeadContent />
      <AppShell>
        <Outlet />
      </AppShell>
    </>
  );
}
