'use client';

import {
  Box,
  Text,
  Heading,
  HStack,
  Image,
  Flex,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { formatEventDate, formatEventTime } from '@navoiy-workspace/utils';
import styles from './event-details.module.scss';
import calendarIcon from '../assets/icons/calendar.svg';
import clockIcon from '../assets/icons/clock.svg';
import SocialsWrapper from '../socials-wrapper/socials-wrapper';
import { EventDTO, UI_TRANSLATIONS } from '@navoiy-workspace/types';
import EventCarousel from './event-details-carousel/event-details-carousel';
import { decodeBase64Html } from '@navoiy-workspace/utils';
import { useLangStore } from '@navoiy-workspace/store';

type EventDetailsContentProps = {
  event: EventDTO;
};

export const EventDetailsContent: React.FC<EventDetailsContentProps> = ({
  event,
}) => {
  const lang = useLangStore((s) => s.language);
  const schedule = event.schedules?.[0] ?? { eventDateTime: '' };
  const dateStr = formatEventDate(schedule.eventDateTime, lang);
  const timeStr = formatEventTime(schedule.eventDateTime);
  const text = UI_TRANSLATIONS[lang].buttons['buyTickets'];

  return (
    <Box className={styles.wrapper}>
      <Box>
        <Text className={styles.tags}>{event.tags.join(', ')}</Text>
        <Heading className={styles.title}>{event.content[lang].title}</Heading>
        <Flex className={styles.info}>
          <HStack as={'p'} className={styles.time}>
            <Image src={calendarIcon} />
            {dateStr}
          </HStack>
          <HStack as={'p'} className={styles.time}>
            <Image src={clockIcon} />
            {timeStr} h
          </HStack>
        </Flex>
        <Text
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: decodeBase64Html(event.content[lang].encodedHtmlContent),
          }}
        />
        <Box className={styles.wrapperButton}>
          <Button className={styles.button}>
            <a href={schedule.buyLink}>{text}</a>
          </Button>
          <SocialsWrapper />
        </Box>
      </Box>
      <EventCarousel data={event?.images ?? []} />
    </Box>
  );
};
