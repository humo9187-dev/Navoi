'use client';

import React from 'react';
import { Box } from '@chakra-ui/react';
import styles from './event-categories.module.scss';
import { CategoryButton } from '../category-button/category-button';
import FilterDropdown from '../../shared/filter-dropdown/filter-dropdown';
import {
  TranslationAreas,
  Pages,
  EventsLocalizedFilterOptions,
  ALL,
  AllOption,
  FilterOptionKey,
} from '@navoiy-workspace/types';
import { useLangStore } from '@navoiy-workspace/store';

type Props = {
  activeCategory: FilterOptionKey;
  onSelectCategory: (category: FilterOptionKey) => void;
};

export const EventCategories: React.FC<Props> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const translations = useLangStore((s) => s.translations);
  const localizedOptions = translations[TranslationAreas.eventFilterDropdown];
  const defaultFilterLabels = translations[Pages.events].filterDefaults;
  const desktopCategories = [
    [ALL, defaultFilterLabels.ALL],
    ...Object.entries(localizedOptions),
  ];

  return (
    <>
      {/* ---desktop--- */}
      <Box className={styles.desktopWrapper}>
        {desktopCategories.map(([key, label]) => (
          <CategoryButton
            key={key}
            label={label}
            active={key === activeCategory}
            onSelect={() =>
              onSelectCategory(
                key as AllOption | keyof EventsLocalizedFilterOptions
              )
            }
          />
        ))}
      </Box>

      {/* Mobile */}
      <Box className={styles.mobileWrapper}>
        <FilterDropdown
          defaultFilterLabels={defaultFilterLabels}
          localizedOptions={localizedOptions}
          activeCategory={activeCategory}
          onChange={onSelectCategory}
        />
      </Box>
    </>
  );
};
