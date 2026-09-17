import { useLayoutEffect } from "react";
import {
  createFileRoute,
  Outlet,
  useNavigate,
  useRouterState,
} from "@tanstack/react-router";
import { VideoShell } from "@/features/video/VideoShell";
import {
  getVideoModel,
  isVideoModelId,
  resolveVideoModelId,
} from "@/features/video/video.models";
import { t } from "@/lib/i18n";

type VideoSearch = {
  model?: string;
};

export const Route = createFileRoute("/ai/video")({
  validateSearch: (search: Record<string, unknown>): VideoSearch => ({
    model:
      typeof search.model === "string" && isVideoModelId(search.model)
        ? search.model
        : undefined,
  }),
  head: () => ({
    meta: [{ title: t("meta.video") }],
  }),
  component: VideoPage,
});

function VideoPage() {
  const { model } = Route.useSearch();
  const resolvedModel = resolveVideoModelId(model);
  const navigate = useNavigate({ from: "/ai/video" });
  const location = useRouterState({
    select: (state) => ({
      pathname: state.location.pathname,
      rawModel: new URLSearchParams(state.location.searchStr).get("model"),
    }),
  });
  const needsCanonicalModel =
    location.pathname === "/ai/video" &&
    (location.rawModel == null || !isVideoModelId(location.rawModel));

  useLayoutEffect(() => {
    if (!needsCanonicalModel) return;
    void navigate({
      search: { model: resolvedModel },
      replace: true,
    });
  }, [navigate, needsCanonicalModel, resolvedModel]);

  if (location.pathname === "/ai/video/motion") {
    return <Outlet />;
  }

  return (
    <VideoShell
      workflow={{ kind: "create", model: getVideoModel(resolvedModel) }}
    />
  );
}
