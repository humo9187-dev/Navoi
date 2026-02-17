'use client';

import { Box, Image, Text, Button, Flex, Link } from '@chakra-ui/react';
import { EventDTO, LanguageCode } from '@navoiy-workspace/types';
import { useRouter } from 'next/navigation';
import styles from './next-events-card.module.scss';
import { useLangStore } from '@navoiy-workspace/store';
import { Pages } from '@navoiy-workspace/types';
import React from 'react';
import calendarIcon from '../../assets/icons/calendar.svg';
import clockIcon from '../../assets/icons/clock.svg';
import { formatEventDate, formatEventTime } from '@navoiy-workspace/utils';
import { UI_TRANSLATIONS, TranslationAreas } from '@navoiy-workspace/types';

const NextEventCard = ({
  event,
  lang = LanguageCode.en,
}: {
  event: EventDTO;
  lang?: LanguageCode;
}) => {
  const content = event.content[lang];
  const buttonLabel = useLangStore(
    (state) => state.translations[Pages.home].nextEvents
  );

  const image = event.images[0]?.link;
  const router = useRouter();
  const schedule = event.schedules?.[0] ?? { eventDateTime: '' };
  const dateStr = formatEventDate(schedule.eventDateTime, lang);
  const timeStr = formatEventTime(schedule.eventDateTime);

  const firstSchedule = event.schedules?.[0];
  const buyLink = firstSchedule?.buyLink ?? '#';

  return (
    <Box as="article" className={styles.card} role="listitem">
      <Image className={styles.image} src={image} alt={content.title} />
      <Box as="header" className={styles.innerBox}>
        <Text as="p" className={styles.tags}>
          {event.tags
            .map(
              (tag) =>
                UI_TRANSLATIONS[lang][TranslationAreas.eventFilterDropdown][tag]
            )
            .join(' ')}
        </Text>
        <Text as="h2" className={styles.title}>
          {content.title}
        </Text>
        <Flex as="section" className={styles.detailsSection}>
          <Box className={styles.infoRow}>
            <Image src={calendarIcon} />
            <Text
              as="time"
              className={styles.infoText}
              aria-label={`Event date ${dateStr}`}
            >
              {dateStr}
            </Text>
          </Box>
          <Box className={styles.infoRow}>
            <Image src={clockIcon} />
            <Text as="time" className={styles.infoText}>
              {timeStr} h
            </Text>
          </Box>
        </Flex>
      </Box>
      <Flex as="footer">
        <Link href={buyLink} target="_blank">
          <Button
            className={styles.button}
            aria-label="Buy tickets for this event"
          >
            {buttonLabel ? buttonLabel.buyTicketButtonLabel : 'Buy tickets'}
          </Button>
        </Link>

        <Button
          className={styles.button}
          aria-label="More info about this event"
          onClick={() => router.push(`/events/${event.eventId}`)}
        >
          {buttonLabel ? buttonLabel.seeMoreInfoButtonLabel : 'More details'}
        </Button>
      </Flex>
    </Box>
  );
};

export default React.memo(NextEventCard);
