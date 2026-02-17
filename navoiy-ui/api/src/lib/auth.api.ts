import { adminApi } from './api';

export const authenticateUser = async (encoded: string): Promise<number> => {
  const response = await adminApi.get('/events', {
    headers: {
      Authorization: `Basic ${encoded}`,
    },
  });
  return response.status;
};

adminApi.interceptors.request.use((config) => {
  const credentials = sessionStorage.getItem('basic_auth');
  if (credentials) {
    config.headers.Authorization = `Basic ${credentials}`;
  }
  return config;
});
