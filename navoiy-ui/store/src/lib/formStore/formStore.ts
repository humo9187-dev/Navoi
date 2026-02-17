import { immer } from 'zustand/middleware/immer';
import {
  FormEventDTO,
  FormState,
  Image,
  initialEventState,
  initialNewsState,
  ScheduleInput,
  Scope,
} from '@navoiy-workspace/types';
import { create } from 'zustand';
import {
  mapAxiosError,
  shouldMarkChanged,
  toArticleDTO,
  toEventDTO,
  toFormArticle,
  toFormEvent,
} from '@navoiy-workspace/utils';
import {
  deleteSchedule,
  getAdminEventById,
  postArticle,
  postEvent,
  putArticle,
  postSchedules,
  putEvent,
  putSchedules,
  uploadImages,
} from '@navoiy-workspace/api';

type FormActions = {
  updateByPath: (
    path: PropertyKey[],
    value: string | string[] | number | boolean | ScheduleInput[] | Image[]
  ) => void;
  uploadImagesAction: (files: File[], scope: Scope) => Promise<void>;
  saveEvent: () => Promise<void>;
  saveArticle: () => Promise<void>;
  fetchEventById: (eventId: FormEventDTO['eventId']) => Promise<void>;
  postSchedules: () => Promise<void>;
  putSchedules: () => Promise<void>;
  deleteSchedule: (scheduleId: string) => Promise<void>;
  resetEvent: () => void;
};

const initialState: FormState = {
  hasChanges: false,
  mode: 'create',
  event: initialEventState,
  isLoading: false,
  errors: [],
  formErrors: null,
  isUploadingImages: false,
  article: initialNewsState,
};

function setByPath<T extends object>(obj: T, path: PropertyKey[], value: any) {
  let current: any = obj;

  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    current[key] ??= {};
    current = current[key];
  }
  current[path[path.length - 1]] = value;
}

export const useFormStore = create<FormState & FormActions>()(
  immer((set, get) => ({
    ...initialState,

    updateByPath: (path, value) =>
      set((state) => {
        if (shouldMarkChanged(path)) {
          state.hasChanges = true;
        }
        setByPath(state, path, value);
      }),

    uploadImagesAction: async (files, scope) => {
      set((state) => {
        state.hasChanges = true;
        state.isUploadingImages = true;
      });

      try {
        const uploadedImages = await uploadImages(files);
        set((state) => {
          state[scope].images.push(...(uploadedImages as Image[]));
          state.isUploadingImages = false;
        });
      } catch (error) {
        set((state) => {
          state.errors.push({ message: mapAxiosError(error) });
          state.isUploadingImages = false;
        });
        throw error;
      }
    },

    saveEvent: async () => {
      const event = get().event;
      const eventDTO = toEventDTO(event);
      set((state) => {
        state.isLoading = true;
        state.errors = [];
      });

      try {
        const request =
          eventDTO.eventId === ''
            ? () => postEvent(eventDTO)
            : () => putEvent(eventDTO.eventId, eventDTO);
        const data = await request();
        const formEvent = toFormEvent(data);
        set((state) => {
          state.event = formEvent;
        });
      } catch (error) {
        set((state) => {
          state.errors.push({ message: mapAxiosError(error) });
        });
        throw error;
      } finally {
        set((state) => {
          state.isLoading = false;
          state.hasChanges = false;
        });
      }
    },

    fetchEventById: async (eventId: FormEventDTO['eventId']) => {
      set((state) => {
        state.isLoading = true;
        state.errors = [];
      });

      try {
        const data = await getAdminEventById(eventId);
        const formEvent = toFormEvent(data);
        set((state) => {
          state.event = formEvent;
        });
      } catch (error) {
        set({ errors: [...get().errors, { message: mapAxiosError(error) }] });
        throw error;
      } finally {
        set({ isLoading: false });
      }
    },

    postSchedules: async () => {
      set((state) => {
        state.isLoading = true;
        state.errors = [];
      });

      try {
        const eventId = get().event.eventId;
        const [data] = await postSchedules(eventId);

        set((state) => {
          state.event.schedules.push(data);
        });
      } catch (error) {
        set({ errors: [...get().errors, { message: mapAxiosError(error) }] });
        throw error;
      } finally {
        set((state) => {
          state.isLoading = false;
        });
      }
    },

    putSchedules: async () => {
      set((state) => {
        state.isLoading = true;
        state.errors = [];
      });

      try {
        const eventId = get().event.eventId;
        const payload = get().event.schedules;
        const data = await putSchedules(eventId, payload);
        set((state) => {
          state.event.schedules = data;
        });
      } catch (error) {
        set({ errors: [...get().errors, { message: mapAxiosError(error) }] });
        throw error;
      } finally {
        set((state) => {
          state.isLoading = false;
          state.hasChanges = false;
        });
      }
    },

    deleteSchedule: async (scheduleId: string) => {
      set((state) => {
        state.isLoading = true;
        state.errors.length = 0;
      });

      try {
        const eventId = get().event.eventId;
        await deleteSchedule(eventId, scheduleId);

        set((state) => {
          state.event.schedules = state.event.schedules.filter(
            (s) => s.scheduleId !== scheduleId
          );
        });
      } catch (error) {
        set({ errors: [...get().errors, { message: mapAxiosError(error) }] });
        throw error;
      } finally {
        set((state) => {
          state.isLoading = false;
        });
      }
    },

    saveArticle: async () => {
      const article = get().article;
      const articleDTO = toArticleDTO(article);
      set((state) => {
        state.isLoading = true;
        state.errors = [];
      });

      try {
        const request =
          articleDTO.newsId === ''
            ? () => postArticle(articleDTO)
            : () => putArticle(articleDTO.newsId, articleDTO);
        const data = await request();
        const formArticle = toFormArticle(data);
        set((state) => {
          state.article = formArticle;
        });
      } catch (error) {
        set((state) => {
          state.errors = [...get().errors, { message: mapAxiosError(error) }];
        });
        throw error;
      } finally {
        set((state) => {
          state.isLoading = false;
          state.hasChanges = false;
        });
      }
    },

    resetEvent: () => set(initialState),
  }))
);
