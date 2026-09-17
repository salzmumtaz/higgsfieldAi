import { createFileRoute } from "@tanstack/react-router";
import { VideoShell } from "@/features/video/VideoShell";
import { MOTION_CONTROL_WORKFLOW } from "@/features/video/video.models";
import { t } from "@/lib/i18n";

export const Route = createFileRoute("/ai/video/motion")({
  head: () => ({
    meta: [{ title: t("meta.video") }],
  }),
  component: MotionControlPage,
});

function MotionControlPage() {
  return (
    <VideoShell
      workflow={{ kind: "motion-control", config: MOTION_CONTROL_WORKFLOW }}
    />
  );
}
