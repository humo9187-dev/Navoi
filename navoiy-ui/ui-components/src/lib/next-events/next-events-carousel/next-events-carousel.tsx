'use client';

import React from 'react';
import { useLangStore } from '@navoiy-workspace/store';
import styles from './next-events-carousel.module.scss';
import { EventDTO } from '@navoiy-workspace/types';
import { HStack, IconButton, Carousel } from '@chakra-ui/react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import NextEventsCard from '../next-events-card/next-events-card';

interface NextEventCarouselProps {
  events: EventDTO[];
}

const NextEventCarousel = ({ events }: NextEventCarouselProps) => {
  const [pageSize, setPageSize] = React.useState<number>(4);
  const [mobileSize, setMobileSize] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      let newSize = 4;
      let isMobile = false;

      if (window.innerWidth < 480) {
        newSize = 1;
        isMobile = true;
      } else if (window.innerWidth < 806) {
        newSize = 1;
        isMobile = false;
      } else if (window.innerWidth < 1140) {
        newSize = 2;
        isMobile = false;
      } else if (window.innerWidth < 1480) {
        newSize = 3;
        isMobile = false;
      }

      setMobileSize(isMobile);
      setPageSize(newSize);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [events.length]);

  const lang = useLangStore((state) => state.language);

  return (
    <Carousel.Root
      as="section"
      aria-label="Upcoming events carousel"
      slideCount={events.length}
      slidesPerPage={pageSize}
      className={styles.container}
    >
      <HStack as="section" className={styles.carouselRow}>
        {!mobileSize && (
          <Carousel.PrevTrigger asChild>
            <IconButton as="button" className={styles.arrowButton}>
              <LuChevronLeft aria-label="Previous page of carousel" />
            </IconButton>
          </Carousel.PrevTrigger>
        )}
        <Carousel.ItemGroup className={styles.eventsWrapper}>
          {events.map((event, index) => (
            <Carousel.Item
              className={styles.carouselItem}
              key={event.eventId}
              index={index}
            >
              <NextEventsCard event={event} lang={lang} />
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        {!mobileSize && (
          <Carousel.NextTrigger asChild>
            <IconButton as="button" className={styles.arrowButton}>
              <LuChevronRight aria-label="Next page of carousel" />
            </IconButton>
          </Carousel.NextTrigger>
        )}
      </HStack>
      <Carousel.Control
        as="nav"
        aria-label="Carousel pagination"
        className={styles.pagination}
      >
        <Carousel.Indicators />
      </Carousel.Control>
    </Carousel.Root>
  );
};

export default NextEventCarousel;
