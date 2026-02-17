import style from './event-card.module.scss';
import React from 'react';
import { formatTime } from '@navoiy-workspace/utils';
import { Grid, GridItem, HStack, Image, Tag, Text } from '@chakra-ui/react';
import {
  EventCardProps,
  TranslationAreas,
  UI_TRANSLATIONS,
} from '@navoiy-workspace/types';
import Link from 'next/link';
import clock from '../../../assets/icons/clock.svg';

export const EventCard: React.FC<EventCardProps> = ({ event, lang }) => {
  const translatedContent = event.content[lang];
  const formattedTime = formatTime(event.eventDateTime);
  return (
    <Grid as={'article'} className={style.eventCard}>
      <Link
        href={`events/${event.eventId}`}
        className={style.eventInfoContainer}
      >
        <GridItem className={style.eventImageContainer}>
          <Image
            className={style.img}
            src={event.images[0].link}
            alt={translatedContent.title}
          />
        </GridItem>
        <GridItem display="flex" flexDirection="column" gap={'10px'}>
          <HStack as={'ul'}>
            {event.tags.map((tag) => (
              <Tag.Root
                key={tag}
                unstyled
                as={'li'}
                className={style.tagsContainer}
              >
                {
                  UI_TRANSLATIONS[lang][TranslationAreas.eventFilterDropdown][
                    tag
                  ]
                }
              </Tag.Root>
            ))}
          </HStack>
          <Text as={'h2'} className={style.titleContainer}>
            {translatedContent.title}
          </Text>
          <HStack as={'p'}>
            <Image src={clock} alt="clock icon" />
            <time dateTime={formattedTime}>{formattedTime}</time>h
          </HStack>
        </GridItem>
      </Link>
      <GridItem as={'nav'} className={style.buttonsContainer}>
        <Link
          href={`${event.buyLink}`}
          target="_blank"
          className={style.primaryButton}
        >
          {UI_TRANSLATIONS[lang][TranslationAreas.buttons].buyTickets}
        </Link>

        <Link
          href={`events/${event.eventId}`}
          className={style.secondaryButton}
        >
          {UI_TRANSLATIONS[lang][TranslationAreas.buttons].readMore}
        </Link>
      </GridItem>
    </Grid>
  );
};
