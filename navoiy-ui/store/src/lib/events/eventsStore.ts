import { getAdminEvents, getEvents } from '@navoiy-workspace/api';
import { EventDTO } from '@navoiy-workspace/types';
import { create } from 'zustand';
import { mapAxiosError } from '@navoiy-workspace/utils';

export interface EventState {
  events: EventDTO[];
  isLoading: boolean;
  errors: unknown[];
  setEvents: (events: EventDTO[]) => void;
  resetEvents: () => void;
  loadEvents: () => Promise<void>;
  loadAdminEvents: () => Promise<void>;
}

export const useEventsStore = create<EventState>()((set, get) => ({
  events: [],
  isLoading: false,
  errors: [],
  setEvents: (events) => set({ events }),
  resetEvents: () => set({ events: [] }),
  loadEvents: async () => {
    set({ isLoading: true, errors: [] });
    try {
      const data = await getEvents();
      set({ events: data });
    } catch (error) {
      set({ errors: [...get().errors, { message: mapAxiosError(error) }] });
    } finally {
      set({ isLoading: false });
    }
  },
  loadAdminEvents: async () => {
    set({ isLoading: true, errors: [] });
    try {
      const data = await getAdminEvents();
      set({ events: data });
    } catch (error) {
      set({ errors: [...get().errors, { message: mapAxiosError(error) }] });
    } finally {
      set({ isLoading: false });
    }
  },
}));
