import { authenticateUser } from '@navoiy-workspace/api';
import { create } from 'zustand';

export interface LoginPayload {
  username: string;
  password: string;
}

type AuthState = {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  setAuthenticated: (value: boolean) => void;
  logout: () => void;
  error: string | null;
};

export const useAuthStore = create<AuthState>((set) => {
  return {
    isAuthenticated: false,
    isLoading: false,
    error: null,

    login: async (payload) => {
      set({ isLoading: true });
      try {
        const encoded = btoa(`${payload.username}:${payload.password}`);
        const statusCode = await authenticateUser(encoded);
        if (statusCode === 200) {
          sessionStorage.setItem('basic_auth', encoded);
          sessionStorage.setItem('username', payload.username);
          set({ isAuthenticated: true });
        }
      } catch (error) {
        set({ error: 'Authentication failed. Please check your credentials.' });
      } finally {
        set({ isLoading: false });
      }
    },

    setAuthenticated: (value: boolean) => {
      set({ isAuthenticated: value });
    },

    logout: () => {
      set({ isAuthenticated: false, error: null });
      sessionStorage.removeItem('basic_auth');
      sessionStorage.removeItem('username');
    },
  };
});
