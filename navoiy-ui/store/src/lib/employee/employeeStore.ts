import { getMockEmployees } from '@navoiy-workspace/api';
import { EmployeeDTO } from '@navoiy-workspace/types';
import { create } from 'zustand';

export interface EmployeeState {
  employees: EmployeeDTO[];
  isLoading: boolean;
  error: unknown;
  setEmployees: (employees: EmployeeDTO[]) => void;
  resetEmployees: () => void;
  loadEmployees: () => Promise<EmployeeDTO[]>;
}

export const useEmployeeStore = create<EmployeeState>()((set, get) => ({
  employees: [],
  isLoading: false,
  error: null,
  setEmployees: (employees) => set({ employees }),
  resetEmployees: () => set({ employees: [] }),
  loadEmployees: async () => {
    set({ isLoading: true, error: null });
    try {
      const data = await getMockEmployees();
      set({ employees: data });
      return data;
    } catch (err) {
      set({ error: err });
      throw err;
    } finally {
      set({ isLoading: false });
    }
  },
}));
