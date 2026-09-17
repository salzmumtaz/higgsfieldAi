import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MessageKey } from "@/lib/i18n";

export type AuthIntent = "login" | "signup" | "welcome";

export type AppUser = {
  id: string;
  username: string;
};

/** Gating context for the shared UpgradeModal. Generators supply their own copy. */
export type UpgradeContext = {
  source: string;
  productId?: string;
  titleKey?: MessageKey;
  descriptionKey?: MessageKey;
};

type AppState = {
  user: AppUser | null;
  authOpen: boolean;
  authIntent: AuthIntent;
  upgradeOpen: boolean;
  upgradeContext: UpgradeContext | null;
  searchOpen: boolean;
  likedGenerationIds: string[];
  openAuthModal: (intent?: AuthIntent) => void;
  closeAuthModal: () => void;
  openUpgradeModal: (context: UpgradeContext) => void;
  closeUpgradeModal: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  signIn: () => void;
  signOut: () => void;
  toggleLike: (generationId: string) => void;
};

const demoUser: AppUser = {
  id: "demo-user",
  username: "you",
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      user: null,
      authOpen: false,
      authIntent: "welcome",
      upgradeOpen: false,
      upgradeContext: null,
      searchOpen: false,
      likedGenerationIds: [],
      openAuthModal: (intent = "welcome") =>
        set({
          authOpen: true,
          authIntent: intent,
          upgradeOpen: false,
          searchOpen: false,
        }),
      closeAuthModal: () => set({ authOpen: false }),
      openUpgradeModal: (context) =>
        set({
          upgradeOpen: true,
          upgradeContext: context,
          authOpen: false,
          searchOpen: false,
        }),
      closeUpgradeModal: () => set({ upgradeOpen: false }),
      openSearch: () =>
        set({ searchOpen: true, authOpen: false, upgradeOpen: false }),
      closeSearch: () => set({ searchOpen: false }),
      signIn: () => set({ user: demoUser, authOpen: false }),
      signOut: () =>
        set({
          user: null,
          likedGenerationIds: [],
          upgradeOpen: false,
          searchOpen: false,
        }),
      toggleLike: (generationId) => {
        const { user, likedGenerationIds } = get();
        if (!user) {
          set({
            authOpen: true,
            authIntent: "welcome",
            upgradeOpen: false,
            searchOpen: false,
          });
          return;
        }
        const liked = likedGenerationIds.includes(generationId);
        set({
          likedGenerationIds: liked
            ? likedGenerationIds.filter((id) => id !== generationId)
            : [...likedGenerationIds, generationId],
        });
      },
    }),
    {
      name: "higgsfield-demo-session",
      partialize: ({ user, likedGenerationIds }) => ({
        user,
        likedGenerationIds,
      }),
    },
  ),
);
