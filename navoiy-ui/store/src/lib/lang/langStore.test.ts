import { useLangStore } from './langStore';
import { LanguageCode } from '@navoiy-workspace/types';
import 'jest-localstorage-mock';

describe('useLangStore - Zustand Store', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.restoreAllMocks();
  });

  it('initializes with the default language', () => {
    const state = useLangStore.getState();
    expect(state.language).toBe(LanguageCode.en);
  });

  it('updates the language when setLanguage is called', () => {
    const state = useLangStore.getState();

    state.setLanguage(LanguageCode.uz);

    expect(useLangStore.getState().language).toBe(LanguageCode.uz);
  });

  it('persists the language to localStorage', () => {
    const state = useLangStore.getState();

    state.setLanguage(LanguageCode.ru);

    console.log(localStorage.getItem('app-language')); // Debug the data

    const persisted = JSON.parse(localStorage.getItem('app-language')!);
    expect(persisted.state.language).toEqual(LanguageCode.ru); // Assert stored language in localStorage
  });
});
