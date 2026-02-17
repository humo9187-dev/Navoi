import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  DEFAULT_LANG_CODE,
  LanguageCode,
  UI_TRANSLATIONS,
  UITranslation,
} from '@navoiy-workspace/types';

export interface LanguageState {
  language: LanguageCode;
  translations: UITranslation;
  setLanguage: (lang: LanguageCode) => void;
}

let setRef: ((partial: Partial<LanguageState>) => void) | null = null;

export const useLangStore = create<LanguageState>()(
  persist(
    (set) => {
      setRef = set;

      return {
        language: DEFAULT_LANG_CODE,
        translations: UI_TRANSLATIONS[DEFAULT_LANG_CODE],
        setLanguage: (lang: LanguageCode) =>
          set({ language: lang, translations: UI_TRANSLATIONS[lang] }),
      };
    },
    {
      name: 'app-language',
      partialize: (state) => ({ language: state.language }),
      onRehydrateStorage: () => (persistedState) => {
        try {
          const lang = persistedState?.language as LanguageCode | undefined;
          if (lang && setRef) {
            setRef({ language: lang, translations: UI_TRANSLATIONS[lang] });
          }
        } catch (e) {
          console.error('langStore rehydrate error', e);
        }
      },
    }
  )
);
