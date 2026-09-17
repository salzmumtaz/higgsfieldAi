import type { MessageKey } from "@/lib/i18n";

export type AuthShowcaseSlide = {
  id: string;
  kind: "video" | "image";
  src: string;
  titleKey: MessageKey;
  tabKey: MessageKey;
  descriptionKey: MessageKey;
};

export const AUTH_SLIDE_MS = 6000;

export const authShowcaseSlides: AuthShowcaseSlide[] = [
  {
    id: "seedance",
    kind: "video",
    src: "https://static.higgsfield.ai/auth/seedance.mp4",
    titleKey: "auth.showcase.seedance.title",
    tabKey: "auth.showcase.seedance.tab",
    descriptionKey: "auth.showcase.seedance.description",
  },
  {
    id: "nano",
    kind: "image",
    src: "https://static.higgsfield.ai/quiz-v2/auth-1.webp",
    titleKey: "auth.showcase.nano.title",
    tabKey: "auth.showcase.nano.tab",
    descriptionKey: "auth.showcase.nano.description",
  },
  {
    id: "soul",
    kind: "image",
    src: "https://static.higgsfield.ai/quiz-v2/auth-3.png",
    titleKey: "auth.showcase.soul.title",
    tabKey: "auth.showcase.soul.tab",
    descriptionKey: "auth.showcase.soul.description",
  },
  {
    id: "cinema",
    kind: "video",
    src: "https://static.higgsfield.ai/quiz-v2/auth-5-mini.mp4",
    titleKey: "auth.showcase.cinema.title",
    tabKey: "auth.showcase.cinema.tab",
    descriptionKey: "auth.showcase.cinema.description",
  },
];
