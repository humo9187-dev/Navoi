import { NewsDTO } from '@navoiy-workspace/types';
import { adminApi } from './api';

export const postArticle = async (payload: NewsDTO): Promise<NewsDTO> => {
  const response = await adminApi.post<NewsDTO>('/news', payload);
  return response.data;
};

export const putArticle = async (
  newsId: NewsDTO['newsId'],
  payload: NewsDTO
): Promise<NewsDTO> => {
  const response = await adminApi.put<NewsDTO>(`/news/${newsId}`, payload);
  return response.data;
};
