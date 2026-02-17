'use client';

import React, { useMemo } from 'react';
import { NextEventsFilterBar } from './next-events-filter-bar/next-events-filter-bar';
import { Box, Loader } from '@chakra-ui/react';
import style from './next-events.module.scss';
import { NextEventsTitle } from './next-events-title/next-events-title';
import NextEventCarousel from './next-events-carousel/next-events-carousel';
import { ALL, FilterOptionKey, TagType } from '@navoiy-workspace/types';
import { useEventsStore } from '@navoiy-workspace/store';

export const NextEventSection: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    React.useState<FilterOptionKey>(ALL);
  const events = useEventsStore.getState().events;
  const loadEvents = useEventsStore((s) => s.loadEvents);
  const isLoading = useEventsStore((s) => s.isLoading);

  React.useEffect(() => {
    loadEvents();
  }, [loadEvents]);

  const handleCategorySelect = (category: FilterOptionKey) => {
    setActiveCategory(category);
  };

  const filteredEvents = useMemo(() => {
    if (activeCategory === ALL) {
      return events;
    }
    return events.filter((event) =>
      (event.tags ?? []).includes(activeCategory as TagType)
    );
  }, [activeCategory, events]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box className={style.background}>
      <Box className={style.container}>
        <NextEventsTitle />
        <NextEventsFilterBar
          activeCategory={activeCategory}
          onSelectCategory={handleCategorySelect}
        />
        <NextEventCarousel events={filteredEvents} key={activeCategory} />
      </Box>
    </Box>
  );
};
