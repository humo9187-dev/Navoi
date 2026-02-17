'use client';

import { useEffect, useMemo } from 'react';
import { Box, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import Link from 'next/link';

import style from './latest-news.module.scss';
import { useLangStore, useNewsStore } from '@navoiy-workspace/store';
import { LoadingSpinner } from '../shared/loading-spinner/loading-spinner';
import { NewsList } from '../news/news-list/news-list';
import { Pages } from '@navoiy-workspace/types';
import LatestNewsCarousel from './latest-news-carousel/latest-news-carousel';

export const LatestNewsSection = () => {
  const translations = useLangStore((s) => s.translations);
  const { latestNews } = translations[Pages.home];

  const loadNews = useNewsStore((s) => s.loadNews);
  const news = useNewsStore((s) => s.news);
  const isLoading = useNewsStore((s) => s.isLoading);
  const [isMobileView] = useMediaQuery(['(max-width: 805px)']);

  useEffect(() => {
    if (!news.length && !isLoading) {
      void loadNews();
    }
  }, [news.length, isLoading, loadNews]);

  const latestThree = useMemo(() => news.slice(0, 3), [news]);
  const hasNews = latestThree.length > 0;

  if (!isLoading && !hasNews) {
    return null;
  }

  return (
    <Box as="section" className={style.latestNewsSection}>
      <div className={style.inner}>
        <Heading as="h2" className={style.title}>
          {latestNews.title}
        </Heading>

        <Text className={style.description}>{latestNews.description}</Text>

        {isLoading ? (
          <div className={style.loader}>
            <LoadingSpinner />
          </div>
        ) : isMobileView ? (
          <LatestNewsCarousel news={latestThree} />
        ) : (
          <NewsList newsList={latestThree} />
        )}

        <div className={style.actions}>
          <Link
            href="/news"
            className={style.readAllButton}
            aria-label={latestNews.readAllNewsButtonLabel}
          >
            {latestNews.readAllNewsButtonLabel}
          </Link>
        </div>
      </div>
    </Box>
  );
};
