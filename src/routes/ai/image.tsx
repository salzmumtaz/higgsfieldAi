import {
  createFileRoute,
  useNavigate,
  useRouterState,
} from "@tanstack/react-router";
import { useLayoutEffect } from "react";
import { ImageShell } from "@/features/image/Shell";
import {
  getImageModel,
  isImageModelId,
  resolveImageModelId,
} from "@/features/image/models";
import { t } from "@/lib/i18n";

type ImageSearch = {
  model: string;
};

export const Route = createFileRoute("/ai/image")({
  validateSearch: (search: Record<string, unknown>): ImageSearch => ({
    model: resolveImageModelId(search.model),
  }),
  head: () => ({
    meta: [{ title: t("meta.image") }],
  }),
  component: ImagePage,
});

function ImagePage() {
  const { model } = Route.useSearch();
  const navigate = useNavigate({ from: "/ai/image" });
  const location = useRouterState({
    select: (state) => ({
      pathname: state.location.pathname,
      rawModel: new URLSearchParams(state.location.searchStr).get("model"),
    }),
  });

  // The router state already points at the next location while a navigation is
  // pending, so leaving /ai/image must not re-canonicalize the model.
  const needsCanonicalModel =
    location.pathname === "/ai/image" &&
    (location.rawModel == null || !isImageModelId(location.rawModel));

  useLayoutEffect(() => {
    if (!needsCanonicalModel) return;
    void navigate({
      search: { model },
      replace: true,
    });
  }, [model, navigate, needsCanonicalModel]);

  return <ImageShell model={getImageModel(model)} />;
}
