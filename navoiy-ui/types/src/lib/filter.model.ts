import { TagType } from './events.model';
import { NewsTagType } from './news.model';
import { DefaultFilterLabels } from './page-heading.model';

export const ALL = 'ALL';
export type AllOption = typeof ALL;

export type EventsFilterTagTranslations = {
  [T in TagType]: string;
};

export type NewsFilterTagTranslations = {
  [T in NewsTagType]: string;
};

export type EventsLocalizedFilterOptions = EventsFilterTagTranslations;

export type NewsLocalizedFilterOptions = NewsFilterTagTranslations;

export type LocalizedFilterOptions =
  | EventsLocalizedFilterOptions
  | NewsLocalizedFilterOptions;

export type TagKey = TagType | NewsTagType;

export type FilterOptionKey = TagKey | AllOption;

export type InitialFilterOptions = Array<[FilterOptionKey, string]>;

export type WithTagKeys = {
  tags: TagKey[];
};

export interface FilterProps {
  localizedOptions: LocalizedFilterOptions;
  onChange: (selectedTag: FilterOptionKey) => void;
  activeCategory?: FilterOptionKey;
  defaultFilterLabels: DefaultFilterLabels;
}
