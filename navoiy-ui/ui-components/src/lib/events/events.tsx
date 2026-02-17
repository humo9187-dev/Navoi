import style from '../shared/main.module.scss';
import { Box, Stack } from '@chakra-ui/react';
import { useEventsStore, useLangStore } from '@navoiy-workspace/store';
import { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { PaginationControls } from '../shared/pagination-controls/pagination-controls';
import { EventsList } from './events-list/events-list';
import { PageHeading } from '../shared/page-heading/page-heading';
import { Pages, TagKey, TranslationAreas } from '@navoiy-workspace/types';
import {
  filterByTag,
  flattenEventSchedules,
  groupEventsByDate,
  QUERY_KEYS,
  sortFlattenedEventsByDateTime,
} from '@navoiy-workspace/utils';
import { LoadingSpinner } from '../shared/loading-spinner/loading-spinner';

export const AllEventsPage = () => {
  const events = useEventsStore.getState().events;
  const loadEvents = useEventsStore((s) => s.loadEvents);
  const isLoading = useEventsStore((s) => s.isLoading);
  const isError = useEventsStore((s) => s.errors);
  const hasError = isError.length > 0;
  const router = useRouter();

  const searchParams = useSearchParams();
  const typeParam = searchParams.get(QUERY_KEYS.TYPE);
  const activeCategory = typeParam as TagKey | undefined;
  const [page, setPage] = useState<number>(
    Number(searchParams.get(QUERY_KEYS.PAGE)) || 1
  );
  const filteredEvents = useMemo(
    () => (activeCategory ? filterByTag(activeCategory, events) : events),
    [activeCategory, events]
  );
  const flattenedEvents = useMemo(
    () => flattenEventSchedules(filteredEvents),
    [filteredEvents]
  );
  const sortedFlattenedEvents = useMemo(
    () => sortFlattenedEventsByDateTime(flattenedEvents),
    [flattenedEvents]
  );
  const paginatedGroupedEvents = useMemo(
    () => groupEventsByDate(sortedFlattenedEvents),
    [sortedFlattenedEvents]
  );

  useEffect(() => {
    loadEvents();
    if (hasError) {
      router.replace('/500');
    }
  }, [loadEvents, hasError, router]);
  const translations = useLangStore((s) => s.translations);
  const pageConfig = translations[Pages.events];
  const localizedOptions = translations[TranslationAreas.eventFilterDropdown];
  const defaultPageSizeProp = 10;
  const totalCount =
    Object.keys(paginatedGroupedEvents).length * defaultPageSizeProp;

  if (isLoading) {
    return (
      <Box as={'main'} className={style.mainComponent}>
        <LoadingSpinner />
      </Box>
    );
  }

  if (!paginatedGroupedEvents[page]) {
    return null;
  }

  return (
    <Box as={'main'} className={style.mainComponent}>
      <PageHeading
        pageConfig={pageConfig}
        localizedOptions={localizedOptions}
        activeCategory={activeCategory}
        setPage={setPage}
      />
      <Stack>
        <EventsList events={paginatedGroupedEvents[page]} />
      </Stack>
      <PaginationControls page={page} setPage={setPage} count={totalCount} />
    </Box>
  );
};
