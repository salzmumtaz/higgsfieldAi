import { create } from "zustand";

export type AuthIntent = "login" | "signup" | "welcome";

export type AppUser = {
  id: string;
  username: string;
};

type AppState = {
  user: AppUser | null;
  authOpen: boolean;
  authIntent: AuthIntent;
  likedGenerationIds: string[];
  openAuthModal: (intent?: AuthIntent) => void;
  closeAuthModal: () => void;
  signIn: () => void;
  signOut: () => void;
  toggleLike: (generationId: string) => void;
};

const demoUser: AppUser = {
  id: "demo-user",
  username: "you",
};

export const useAppStore = create<AppState>((set, get) => ({
  user: null,
  authOpen: false,
  authIntent: "welcome",
  likedGenerationIds: [],
  openAuthModal: (intent = "welcome") =>
    set({ authOpen: true, authIntent: intent }),
  closeAuthModal: () => set({ authOpen: false }),
  signIn: () => set({ user: demoUser, authOpen: false }),
  signOut: () => set({ user: null, likedGenerationIds: [] }),
  toggleLike: (generationId) => {
    const { user, likedGenerationIds } = get();
    if (!user) {
      set({ authOpen: true, authIntent: "welcome" });
      return;
    }
    const liked = likedGenerationIds.includes(generationId);
    set({
      likedGenerationIds: liked
        ? likedGenerationIds.filter((id) => id !== generationId)
        : [...likedGenerationIds, generationId],
    });
  },
}));
