import axios from 'axios';

import {
  EventDTO,
  IGlobal,
  IGlobalPayload,
  ImageInput,
  NewsDTO,
  AboutUsDTO,
} from '@navoiy-workspace/types';
import { normalizeUploadedImages } from '@navoiy-workspace/utils';
import { mockNews } from '../mocks/news.mock';
import { mockAboutUs } from '../mocks/about-us.mock';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080';
const NEXT_PUBLIC_API_PUBLIC_PREFIX =
  process.env.NEXT_PUBLIC_API_PUBLIC_PREFIX || 'api/navoiy/public';
const NEXT_ADMIN_API_ADMIN_PREFIX =
  process.env.NEXT_ADMIN_API_ADMIN_PREFIX || 'api/navoiy/admin';
const AUTH_TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN;

export const api = axios.create({
  baseURL: `${API_BASE_URL}/${NEXT_PUBLIC_API_PUBLIC_PREFIX}`,
});

export const adminApi = axios.create({
  baseURL: `${API_BASE_URL}/${NEXT_ADMIN_API_ADMIN_PREFIX}`,
});

export const getEvents = async (): Promise<EventDTO[]> => {
  const response = await api.get<EventDTO[]>('/events');
  return response.data;
};

export const getAdminEvents = async (): Promise<EventDTO[]> => {
  const response = await adminApi.get<EventDTO[]>('/events');
  return response.data;
};

export const getAdminEventById = async (
  eventId: EventDTO['eventId']
): Promise<EventDTO> => {
  const response = await adminApi.get<EventDTO>(`/events/${eventId}`);
  return response.data;
};

export const postEvent = async (payload: EventDTO): Promise<EventDTO> => {
  const response = await adminApi.post<EventDTO>('/events', payload);
  return response.data;
};

export const putEvent = async (
  eventId: EventDTO['eventId'],
  payload: EventDTO
): Promise<EventDTO> => {
  const response = await adminApi.put<EventDTO>(`/events/${eventId}`, payload);
  return response.data;
};

export const getMockAboutUs = async (): Promise<AboutUsDTO> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(mockAboutUs), 1000);
  });

export const getMockNews = async (): Promise<NewsDTO[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(mockNews), 1000);
  });

export const getMockArticleById = async (id: string): Promise<NewsDTO | null> =>
  new Promise((resolve) => {
    const news = mockNews.find((item) => item.newsId === id) ?? null;
    setTimeout(() => resolve(news), 1000);
  });

export const getGlobalConfig = async (): Promise<IGlobal> => {
  const { data } = await api.get<IGlobalPayload>(
    '/configuration/00000000-0000-0000-0000-000000000000'
  );
  return data.payload;
};

export const updateGlobalConfig = async (payload: IGlobal): Promise<void> => {
  await adminApi.put(
    `${API_BASE_URL}/api/navoiy/admin/configuration/00000000-0000-0000-0000-000000000000`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    }
  );
};

export const uploadImages = async (files: File[]): Promise<ImageInput[]> => {
  const formData = new FormData();
  files.forEach((file) => formData.append('file', file));

  const response = await adminApi.post('/files/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return normalizeUploadedImages(response.data);
};
