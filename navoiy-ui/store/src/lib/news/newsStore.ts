import { getMockNews } from '@navoiy-workspace/api';
import { NewsDTO } from '@navoiy-workspace/types';
import { create } from 'zustand';

export interface NewsState {
  news: NewsDTO[];
  isLoading: boolean;
  error: unknown;
  setNews: (news: NewsDTO[]) => void;
  resetNews: () => void;
  loadNews: () => Promise<NewsDTO[]>;
}

export const useNewsStore = create<NewsState>()((set, get) => ({
  news: [],
  isLoading: false,
  error: null,
  setNews: (news) => set({ news }),
  resetNews: () => set({ news: [] }),
  loadNews: async () => {
    set({ isLoading: true, error: null });
    try {
      const data = await getMockNews();
      set({ news: data });
      return data;
    } catch (err) {
      set({ error: err });
      throw err;
    } finally {
      set({ isLoading: false });
    }
  },
}));
