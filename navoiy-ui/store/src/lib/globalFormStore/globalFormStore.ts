import { create } from 'zustand';
import { IGlobal } from '@navoiy-workspace/types';
import { getGlobalConfig, updateGlobalConfig } from '@navoiy-workspace/api';

export const createEmptyConfig = (): IGlobal => ({
  header: {
    topText: {
      enabled: false,
      text: {
        en: '',
        ru: '',
        uz: '',
      },
    },
  },

  footer: {
    description: {
      en: '',
      ru: '',
      uz: '',
    },

    contacts: [
      {
        name: {
          en: 'Ticket office',
          ru: 'Касса театра',
          uz: 'Teatr kassasi',
        },
        value: '',
      },
      {
        name: {
          en: 'Administrator',
          ru: 'Главный администратор',
          uz: 'Bosh ma`mur',
        },
        value: '',
      },
      {
        name: {
          en: 'Deputy Director for the audience',
          ru: 'Заместитель директора по зрителям',
          uz: 'Tomoshabinlar bo`yicha direktor o`rinbosari',
        },
        value: '',
      },
      {
        name: {
          en: 'Theater address',
          ru: 'Адрес театра',
          uz: 'Teatrning manzili',
        },
        value: {
          en: '',
          ru: '',
          uz: '',
        },
      },
      {
        name: {
          en: 'Phone / fax',
          ru: 'Тел./факс',
          uz: 'Tel./Faks',
        },
        value: '',
      },
      {
        name: {
          en: 'E-mail',
          ru: 'E-mail',
          uz: 'E-mail',
        },
        value: [],
      },
    ],
  },

  socialLinks: {
    facebook: '',
    telegram: '',
    instagram: '',
  },
});

const prepareConfigForSubmit = (config: IGlobal): IGlobal => {
  const copy = structuredClone(config);

  copy.footer.contacts = copy.footer.contacts.filter((contact) => {
    if (typeof contact.value === 'string') {
      return contact.value.trim();
    }

    if (Array.isArray(contact.value)) {
      return contact.value.some(Boolean);
    }

    if (typeof contact.value === 'object') {
      return Object.values(contact.value).some(
        (v) => typeof v === 'string' && v.trim()
      );
    }

    return false;
  });

  return copy;
};

interface GlobalConfigState {
  config: IGlobal;
  isLoading: boolean;
  error: unknown | null;

  fetch: () => Promise<void>;
  updateField: (path: string[], value: any) => void;
  submit: () => Promise<void>;
}

export const useGlobalConfigStore = create<GlobalConfigState>((set, get) => ({
  config: createEmptyConfig(),
  isLoading: false,
  error: null,

  fetch: async () => {
    try {
      set({ isLoading: true, error: null });

      const data = await getGlobalConfig();

      set({
        config: {
          ...createEmptyConfig(),
          ...data,
          header: {
            ...createEmptyConfig().header,
            ...data?.header,
            topText: {
              ...createEmptyConfig().header.topText,
              ...data?.header?.topText,
            },
          },
          footer: {
            ...createEmptyConfig().footer,
            ...data?.footer,
            description: {
              ...createEmptyConfig().footer.description,
              ...data?.footer?.description,
            },
            contacts: data?.footer?.contacts?.length
              ? data.footer.contacts
              : createEmptyConfig().footer.contacts,
          },
          socialLinks: {
            ...createEmptyConfig().socialLinks,
            ...data?.socialLinks,
          },
        },
        isLoading: false,
      });
    } catch (err) {
      set({ error: err, isLoading: false });
    }
  },

  updateField: (path, value) => {
    set((state) => {
      const copy: any = structuredClone(state.config);
      let current = copy;

      for (let i = 0; i < path.length - 1; i++) {
        const key = path[i];
        const nextKey = path[i + 1];

        if (current[key] === undefined) {
          current[key] = isNaN(Number(nextKey)) ? {} : [];
        }

        current = current[key];
      }

      current[path[path.length - 1]] = value;

      return { config: copy };
    });
  },

  submit: async () => {
    try {
      set({ isLoading: true, error: null });

      const preparedConfig = prepareConfigForSubmit(get().config);

      await updateGlobalConfig(preparedConfig);

      set({ isLoading: false });
    } catch (err) {
      set({ error: err, isLoading: false });
    }
  },
}));
