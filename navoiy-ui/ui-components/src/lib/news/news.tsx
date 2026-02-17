import style from '../shared/main.module.scss';
import { Box } from '@chakra-ui/react';
import { useLangStore, useNewsStore } from '@navoiy-workspace/store';
import { PageHeading } from '../shared/page-heading/page-heading';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { NewsList } from './news-list/news-list';
import { PaginationControls } from '../shared/pagination-controls/pagination-controls';
import {
  TagKey,
  NewsDTO,
  Pages,
  TranslationAreas,
} from '@navoiy-workspace/types';
import {
  filterByTag,
  NEWS_GROUPING_RULES,
  QUERY_KEYS,
} from '@navoiy-workspace/utils';
import { LoadingSpinner } from '../shared/loading-spinner/loading-spinner';

export const AllNews = () => {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get(QUERY_KEYS.TYPE);
  const activeCategory = typeParam as TagKey | undefined;
  const loadNews = useNewsStore((s) => s.loadNews);
  const isLoading = useNewsStore((s) => s.isLoading);
  const [page, setPage] = useState<number>(
    Number(searchParams.get(QUERY_KEYS.PAGE)) || 1
  );
  const [newsList, setNewsList] = useState<NewsDTO[]>([]);
  const translations = useLangStore((s) => s.translations);
  const pageConfig = translations[Pages.news];
  const localizedOptions = translations[TranslationAreas.newsFilterDropdown];
  const filteredNews = useMemo(
    () => (activeCategory ? filterByTag(activeCategory, newsList) : newsList),
    [activeCategory, newsList]
  );
  const articlesCount = filteredNews.length;
  const endAt = page * NEWS_GROUPING_RULES.ARTICLES_PER_PAGE;
  const startAt = endAt - NEWS_GROUPING_RULES.ARTICLES_PER_PAGE;
  const articlePageSlice = filteredNews.slice(startAt, endAt);

  useEffect(() => {
    loadNews().then((data) => setNewsList(data));
  }, [loadNews]);

  if (isLoading) {
    return (
      <Box as={'main'} className={style.mainComponent}>
        <LoadingSpinner />
      </Box>
    );
  }

  if (!newsList.length) {
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
      <NewsList newsList={articlePageSlice} />
      <PaginationControls
        page={page}
        setPage={setPage}
        count={articlesCount}
        pageSize={NEWS_GROUPING_RULES.ARTICLES_PER_PAGE}
      />
    </Box>
  );
};
