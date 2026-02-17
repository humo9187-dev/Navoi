import { FilterOptionKey, LocalizedFilterOptions } from './filter.model';
import { Pages } from './pages.model';
import { UITranslation } from './translations.model';

export interface HeadingProps {
  pageConfig: UITranslation[Pages.events | Pages.news];
  localizedOptions: LocalizedFilterOptions;
  activeCategory?: FilterOptionKey;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export type DefaultFilterLabels =
  | UITranslation[Pages.events]['filterDefaults']
  | UITranslation[Pages.news]['filterDefaults'];
