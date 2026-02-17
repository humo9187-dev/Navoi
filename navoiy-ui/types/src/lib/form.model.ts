import { AboutUsDTO } from './about-us.model';
import { EventDTO, Image, Schedule } from './events.model';
import { LanguageCode } from './language.model';
import { NewsDTO } from './news.model';

export type EventFormMode = 'create' | 'edit';

export type FormErrors = {
  [key: string]: string[];
} | null;

export type ImageInput = Partial<Image>;
export type ScheduleInput = Partial<Schedule>;

export type FormEventDTO = Omit<EventDTO, 'content'> & {
  content: ContentInputs;
};

export interface ContentBlock {
  title: string;
  html: string;
}

export type ContentInputs = Record<LanguageCode, ContentBlock>;

export interface ArticleFormProps {
  articleId?: string | null;
}

export interface NewsContentBlock {
  title: string;
  shortDescription: string;
  html: string;
}

export type NewsContentInputs = Record<LanguageCode, NewsContentBlock>;

export type FormNewsDTO = Omit<NewsDTO, 'newsId' | 'content' | 'images'> & {
  newsId?: string;
  content: NewsContentInputs;
  images: Image[];
};

export type FormState = {
  hasChanges: boolean;
  mode: EventFormMode;
  event: FormEventDTO;
  isLoading: boolean;
  errors: unknown[];
  formErrors: FormErrors;
  isUploadingImages: boolean;
  article: NewsDTO;
};

export type Scope = 'event' | 'article';

export type ScopeProps = {
  scope: Scope;
};

export interface AboutUsContentBlock {
  title: string;
  html: string;
}

export type AboutUsContentInputs = Record<LanguageCode, AboutUsContentBlock>;

export type FormAboutUsDTO = Omit<AboutUsDTO, 'aboutUsId' | 'content'> & {
  aboutUsId?: string;
  content: AboutUsContentInputs;
};
