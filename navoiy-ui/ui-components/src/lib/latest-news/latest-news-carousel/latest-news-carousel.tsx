'use client';

import React from 'react';
import Link from 'next/link';
import {
  Carousel,
  Grid,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

import styles from './latest-news-carousel.module.scss';
import newsCardStyles from '../../news/news-list/news-list.module.scss';

import { NewsDTO, LanguageCode } from '@navoiy-workspace/types';
import { useLangStore } from '@navoiy-workspace/store';
import { buildDateParts, parseDateDetails } from '@navoiy-workspace/utils';

const MOBILE_CAROUSEL_BREAKPOINT = 806;
interface LatestNewsCarouselProps {
  news: NewsDTO[];
}

const LatestNewsCarousel = ({ news }: LatestNewsCarouselProps) => {
  // const [pageSize, setPageSize] = React.useState<number>(1);
  // const [showArrows, setShowArrows] = React.useState<boolean>(false);
  const lang = useLangStore((state) => state.language);

  // React.useEffect(() => {
  //   if (typeof window === 'undefined') return;

  //   const handleResize = () => {
  //     const width = window.innerWidth;
  //     setPageSize(1);
  //     setShowArrows(width >= MOBILE_CAROUSEL_BREAKPOINT);
  //   };

  //   handleResize();
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  if (!news.length) return null;

  return (
    <Carousel.Root
      as="section"
      aria-label="Latest news carousel"
      slideCount={news.length}
      slidesPerPage={1}
      className={styles.container}
    >
      <HStack as="section" className={styles.carouselRow}>
        <div className={styles.desktopControls}>
          <Carousel.PrevTrigger asChild>
            <IconButton as="button" className={styles.arrowButton}>
              <LuChevronLeft aria-label="Previous page of carousel" />
            </IconButton>
          </Carousel.PrevTrigger>
        </div>

        <Carousel.ItemGroup className={styles.itemsWrapper}>
          {news.map((article, index) => {
            const translated = article.content[lang];
            const dateParts = parseDateDetails(article.publicationDate, lang);
            const displayDate =
              lang === LanguageCode.uz
                ? buildDateParts(dateParts, 'UZ_WMY')
                : buildDateParts(dateParts, 'WMY');

            return (
              <Carousel.Item
                className={styles.carouselItem}
                key={article.newsId}
                index={index}
              >
                <Link
                  href={`/news/${article.newsId}`}
                  className={`${newsCardStyles.articleCard} ${styles.card}`}
                  aria-label={`Open article: ${translated.title}`}
                >
                  <Grid as="figure" className={newsCardStyles.imgDateContainer}>
                    <Image
                      className={newsCardStyles.imgContainer}
                      src={article.images[0].link}
                      alt={translated.title}
                    />
                    <time
                      dateTime={article.publicationDate}
                      className={newsCardStyles.date}
                    >
                      {displayDate}
                    </time>
                  </Grid>

                  <Heading className={newsCardStyles.articleTitle}>
                    {translated.title}
                  </Heading>
                  <Text className={newsCardStyles.articleSummary}>
                    {translated.shortDescription}
                  </Text>
                </Link>
              </Carousel.Item>
            );
          })}
        </Carousel.ItemGroup>

        <div className={styles.desktopControls}>
          <Carousel.NextTrigger asChild>
            <IconButton as="button" className={styles.arrowButton}>
              <LuChevronRight aria-label="Next page of carousel" />
            </IconButton>
          </Carousel.NextTrigger>
        </div>
      </HStack>

      <Carousel.Control
        as="nav"
        aria-label="Latest news pagination"
        className={styles.pagination}
      >
        <Carousel.Indicators />
      </Carousel.Control>
    </Carousel.Root>
  );
};

export default LatestNewsCarousel;
