import { AboutUsDTO } from '@navoiy-workspace/types';
import { adminApi, api } from './api';

export const getAboutUs = async (): Promise<AboutUsDTO> => {
  const response = await api.get<AboutUsDTO>('/about-us');
  return response.data;
};

export const getAdminAboutUs = async (): Promise<AboutUsDTO> => {
  const response = await adminApi.get<AboutUsDTO>('/about-us');
  return response.data;
};

export const updateAboutUs = async (
  payload: AboutUsDTO
): Promise<AboutUsDTO> => {
  const response = await adminApi.put<AboutUsDTO>('/about-us', payload);
  return response.data;
};
