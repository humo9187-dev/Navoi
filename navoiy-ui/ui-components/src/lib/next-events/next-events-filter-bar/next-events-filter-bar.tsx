'use client';

import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { EventCategories } from '../event-categories/event-categories';
import { SeeAllEventsButton } from '../see-all-events-button/see-all-events-button';
import { useLangStore } from '@navoiy-workspace/store';
import styles from './next-events-filter-bar.module.scss';
import { FilterOptionKey } from '@navoiy-workspace/types';

type NextEventsFilterBarProps = {
  activeCategory: FilterOptionKey;
  onSelectCategory: (category: FilterOptionKey) => void;
};

export const NextEventsFilterBar: React.FC<NextEventsFilterBarProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const lang = useLangStore((state) => state.language);

  return (
    <Box className={styles.wrapper}>
      <Flex className={styles.flexContainer}>
        <Box className={styles.categoriesBox}>
          <EventCategories
            activeCategory={activeCategory}
            onSelectCategory={onSelectCategory}
          />
        </Box>

        <Box className={styles.buttonBox}>
          <SeeAllEventsButton lang={lang} />
        </Box>
      </Flex>
    </Box>
  );
};
