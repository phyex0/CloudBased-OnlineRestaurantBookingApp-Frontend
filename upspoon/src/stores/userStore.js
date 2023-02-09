import { create } from "zustand";

export const useUserStore = create((set) => ({
  isLogin: false,
  actions: {
    toggleLogin: () => set((state) => ({ isLogin: !state.isLogin })),
  },
}));

//states
export const useIsUserLogin = () => useUserStore((state) => state.isLogin);

// actions
export const useUserActions = () => useUserStore((state) => state.actions);
