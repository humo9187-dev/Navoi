import { EmployeeDTO } from '@navoiy-workspace/types';
import { adminApi, api } from './api';
import { mockEmployees } from '../mocks/employee.mock';

export const getEmployees = async (): Promise<EmployeeDTO[]> => {
  const response = await api.get<EmployeeDTO[]>('/employees');
  return response.data;
};

export const getEmployeeById = async (
  employeeId: string
): Promise<EmployeeDTO> => {
  const response = await api.get<EmployeeDTO>(`/employees/${employeeId}`);
  return response.data;
};

export const postEmployee = async (
  payload: EmployeeDTO
): Promise<EmployeeDTO> => {
  const response = await adminApi.post<EmployeeDTO>('/employees', payload);
  return response.data;
};

export const putEmployee = async (
  employeeId: EmployeeDTO['employeeId'],
  payload: EmployeeDTO
): Promise<EmployeeDTO> => {
  const response = await adminApi.put<EmployeeDTO>(
    `/employees/${employeeId}`,
    payload
  );
  return response.data;
};

export const deleteEmployee = async (employeeId: string): Promise<void> => {
  await adminApi.delete(`/employees/${employeeId}`);
};

// mock api calls below
export const getMockEmployees = async (): Promise<EmployeeDTO[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(mockEmployees), 1000);
  });
