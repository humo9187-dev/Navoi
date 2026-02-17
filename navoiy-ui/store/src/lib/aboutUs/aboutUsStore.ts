import { getMockAboutUs } from '@navoiy-workspace/api';
import { AboutUsDTO, AboutUsArticle } from '@navoiy-workspace/types';
import { create } from 'zustand';

export interface AboutUsState {
  articles: AboutUsArticle[];
  isLoading: boolean;
  error: unknown;
  setArticles: (articles: AboutUsArticle[]) => void;
  resetArticles: () => void;
  loadAboutUs: () => Promise<AboutUsArticle[]>;
}

export const useAboutUsStore = create<AboutUsState>()((set) => ({
  articles: [],
  isLoading: false,
  error: null,
  setArticles: (articles) => set({ articles }),
  resetArticles: () => set({ articles: [] }),
  loadAboutUs: async () => {
    set({ isLoading: true, error: null });
    try {
      const response: AboutUsDTO = await getMockAboutUs();
      const articles = response.data;
      set({ articles });
      return articles;
    } catch (err) {
      set({ error: err });
      throw err;
    } finally {
      set({ isLoading: false });
    }
  },
}));
