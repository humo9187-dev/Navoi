import { getGlobalConfig } from '@navoiy-workspace/api';
import { IGlobal } from '@navoiy-workspace/types';
import { create } from 'zustand';

export interface GlobalStoreState {
  global: IGlobal | null;
  isLoading: boolean;
  error: unknown | null;

  loadGlobal: () => Promise<void>;
  updateGlobalField: (path: string[], value: any) => void;
  resetGlobal: () => void;
}

export const useGlobalStore = create<GlobalStoreState>((set, get) => ({
  global: null,
  isLoading: false,
  error: null,

  loadGlobal: async () => {
    set({ isLoading: true, error: null });
    try {
      const data = await getGlobalConfig();
      set({ global: data });
    } catch (err) {
      set({ error: err });
    } finally {
      set({ isLoading: false });
    }
  },

  updateGlobalField: (path: string[], value: any) => {
    set((state) => {
      if (!state.global) return state;
      const copy: any = structuredClone(state.global);
      let current = copy;

      for (let i = 0; i < path.length - 1; i++) {
        if (!current[path[i]]) current[path[i]] = {};
        current = current[path[i]];
      }

      current[path[path.length - 1]] = value;
      return { global: copy };
    });
  },

  resetGlobal: () => set({ global: null, error: null, isLoading: false }),
}));
