import { ContentInputs, FormEventDTO } from './form.model';
import { LanguageCode } from './language.model';

export type ContentMap = {
  [key in LanguageCode]: Content;
};

export interface Content {
  title: string;
  encodedHtmlContent: string;
}

export interface FormContent {
  title: string;
  html: string;
}

export interface Image {
  fileId: string;
  link: string;
}

export interface Schedule {
  scheduleId: string;
  type: ScheduleType;
  eventDateTime: string; // ISO 8601
  buyLink: string;
}

export enum ScheduleType {
  AdHoc = 'AD_HOC',
}

export enum TagType {
  Ballet = 'BALLET',
  Childrens = 'CHILDRENS',
  Concerts = 'CONCERTS',
  Musical = 'MUSICAL',
  Opera = 'OPERA',
  Tours = 'TOURS',
}

export interface EventDTO {
  eventId: string;
  content: ContentMap;
  images: Image[];
  duration: number;
  schedules: Schedule[];
  tags: TagType[];
  isVisibleToVisitors: boolean;
  uiProperties: Record<string, any>;
}

export interface EventListProps {
  events: EventDateGroup;
}

export interface FlattenedEvent extends Omit<EventDTO, 'schedules'> {
  scheduleId: string;
  eventDate: string;
  eventDateTime: number;
  buyLink: string;
}

export interface EventCardProps {
  event: FlattenedEvent;
  lang: LanguageCode;
}

export type EventDateGroup = Record<string, FlattenedEvent[]>;
export type PaginatedGroupedEvents = Record<number, EventDateGroup>;

export type LocalizedString = {
  [key in LanguageCode]: string;
};

export type ContactValue = string | string[] | LocalizedString;

export interface IContact {
  name: LocalizedString;
  value: ContactValue;
}

export interface IGlobal {
  header: {
    topText: {
      enabled: boolean;
      text: LocalizedString;
    };
  };
  socialLinks: {
    facebook: string;
    telegram: string;
    instagram: string;
  };
  footer: {
    description: LocalizedString;
    contacts: IContact[];
  };
}

export interface IGlobalPayload {
  configurationId: string;
  payload: IGlobal;
}

const createInitialEventContentMap = (): ContentInputs =>
  Object.keys(LanguageCode).reduce(
    (acc, lang) => ({
      ...acc,
      [lang]: { title: '', html: '' },
    }),
    {} as ContentInputs
  );

export const initialEventState: FormEventDTO = {
  eventId: '',
  content: createInitialEventContentMap(),
  duration: 0,
  images: [],
  schedules: [],
  tags: [],
  isVisibleToVisitors: false,
  uiProperties: {},
};
