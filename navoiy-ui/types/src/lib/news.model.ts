import { LanguageCode } from './language.model';
import { Image } from './events.model';

export type NewsContentMap = {
  [key in LanguageCode]: NewsContent;
};

export interface NewsContent {
  title: string;
  shortDescription: string;
  encodedHtmlContent: string;
}

export enum NewsTagType {
  General = 'GENERAL',
  Ballet = 'BALLET',
  Childrens = 'CHILDRENS',
  Concerts = 'CONCERTS',
  Musical = 'MUSICAL',
  Opera = 'OPERA',
  Tours = 'TOURS',
}

export interface NewsDTO {
  newsId: string;
  content: NewsContentMap;
  images: Image[];
  publicationDate: string; // ISO 8601
  tags: NewsTagType[];
  author: string;
  isVisibleToVisitors: boolean;
  uiProperties: Record<string, any>;
}

export const emptyNewsContent: NewsContent = {
  title: '',
  shortDescription: '',
  encodedHtmlContent: '',
};

export const createInitialNewsContentMap = (): NewsContentMap =>
  Object.values(LanguageCode).reduce((acc, lang) => {
    acc[lang] = { ...emptyNewsContent };
    return acc;
  }, {} as NewsContentMap);

export const initialNewsState: NewsDTO = {
  newsId: '',
  content: createInitialNewsContentMap(),
  images: [],
  publicationDate: '',
  tags: [],
  author: '',
  isVisibleToVisitors: false,
  uiProperties: {},
};
