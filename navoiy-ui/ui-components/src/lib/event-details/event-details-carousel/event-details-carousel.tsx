import { Carousel, IconButton, Image } from '@chakra-ui/react';
import { Image as EeventImage } from '@navoiy-workspace/types';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import styles from './event-details-carousel.module.scss';
import React from 'react';

type EventCarouselProps = {
  data: EeventImage[];
};

const EventCarousel = ({ data }: EventCarouselProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [mobileSize, setMobileSize] = React.useState<boolean>(false);
  const total = data.length;

  const thumbnails = React.useMemo(() => {
    if (total === 1) return [data[currentIndex]];
    if (total < 3) return [1, 2].map((i) => data[(currentIndex + i) % total]);
    return [1, 2, 3].map((i) => data[(currentIndex + i) % total]);
  }, [currentIndex, data, total]);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setMobileSize((prev) => {
        const next = window.innerWidth < 768;
        return prev === next ? prev : next;
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goPrev = React.useCallback(
    () => setCurrentIndex((prev) => (prev - 1 + total) % total),
    [total]
  );

  const goNext = React.useCallback(
    () => setCurrentIndex((prev) => (prev + 1) % total),
    [total]
  );

  if (!data.length) {
    return null;
  }
  return (
    <Carousel.Root
      as="section"
      loop={true}
      slideCount={data.length}
      className={styles.carousel}
    >
      <Carousel.Control as="section" className={styles.control}>
        {!mobileSize && (
          <Carousel.PrevTrigger asChild>
            <IconButton
              as="button"
              className={`${styles.arrowButton} ${styles.left}`}
              onClick={goPrev}
              size="sm"
            >
              <LuChevronLeft aria-label="Previous slide" />
            </IconButton>
          </Carousel.PrevTrigger>
        )}
        <Carousel.ItemGroup className={styles.itemGroup}>
          {data.map((item, index) => (
            <Carousel.Item
              className={styles.item}
              key={item.fileId}
              index={index}
            >
              <Image
                className={styles.image}
                src={item.link}
                alt={`Slide ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>
        {!mobileSize && (
          <Carousel.NextTrigger asChild>
            <IconButton
              as="button"
              className={`${styles.arrowButton} ${styles.right}`}
              onClick={goNext}
              size="sm"
            >
              <LuChevronRight aria-label="Next slide" />
            </IconButton>
          </Carousel.NextTrigger>
        )}
      </Carousel.Control>

      <Carousel.IndicatorGroup as="nav">
        {thumbnails.map((thumb, idx) => {
          const thumbIndex = (currentIndex + idx + 1) % total;
          return (
            <Carousel.Indicator
              key={thumb.fileId}
              index={thumbIndex}
              unstyled
              role="button"
              aria-label={`Go to slide ${thumbIndex + 1}`}
            >
              <Image
                className={styles.thumbnail}
                src={thumb.link}
                onClick={() => setCurrentIndex(thumbIndex)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ')
                    setCurrentIndex(thumbIndex);
                }}
              />
            </Carousel.Indicator>
          );
        })}
      </Carousel.IndicatorGroup>
    </Carousel.Root>
  );
};

export default EventCarousel;
export { EventCarousel };
