'use client';

import React from 'react';
import {
  DialogRoot,
  DialogContent,
  DialogBody,
  DialogCloseTrigger,
  DialogBackdrop,
  Box,
  Text,
  Heading,
  HStack,
  Image,
  Flex,
  Button,
  Link,
} from '@chakra-ui/react';
import {
  EventDTO,
  UI_TRANSLATIONS,
  LanguageCode,
  FormEventDTO,
  Image as ImageType,
} from '@navoiy-workspace/types';
import { formatEventDate, formatEventTime } from '@navoiy-workspace/utils';
import { EventCarousel } from '@navoiy-workspace/ui-components';
import styles from './event-preview-modal.module.scss';

interface EventPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: EventDTO | FormEventDTO | null;
  language?: 'ru' | 'uz' | 'en';
}

const SocialsWrapper: React.FC<{ language: 'ru' | 'uz' | 'en' }> = ({
  language,
}) => {
  const share = UI_TRANSLATIONS[language]['event-details'].share;
  return (
    <Box className={styles.socials}>
      <Text className={styles.socialText}>{share}: </Text>
      <Box className={styles.socialIcons}>
        <Link
          href="https://www.facebook.com/gabtnavoi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Facebook page"
        >
          <Image src="/icons/facebook.svg" alt="Facebook icon" />
        </Link>
        <Link
          href="https://t.me/gabtuzb"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Telegram page"
        >
          <Image src="/icons/telegram.svg" alt="Telegram icon" />
        </Link>
        <Link
          href="https://instagram.com/gabt.uz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Instagram page"
        >
          <Image src="/icons/instagram.svg" alt="Instagram icon" />
        </Link>
      </Box>
    </Box>
  );
};

export const decodeBase64Html = (encoded: string): string => {
  if (!encoded) return '';

  try {
    const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
    if (!base64Regex.test(encoded)) {
      return encoded;
    }

    const decoded = atob(encoded);
    const utf8 = decodeURIComponent(
      decoded
        .split('')
        .map((c) => '%' + c.charCodeAt(0).toString(16).padStart(2, '0'))
        .join('')
    );
    return utf8;
  } catch (err) {
    console.error('Base64 decode error:', err);
    return encoded;
  }
};

const EventPreviewModal: React.FC<EventPreviewModalProps> = ({
  isOpen,
  onClose,
  event,
  language = 'ru',
}) => {
  if (!event) return null;

  const schedule = event.schedules?.[0] ?? { eventDateTime: '' };
  const dateStr = formatEventDate(
    schedule.eventDateTime || '',
    language as LanguageCode
  );
  const timeStr = formatEventTime(schedule.eventDateTime || '');
  const buyTicketsText = UI_TRANSLATIONS[language].buttons['buyTickets'];

  return (
    <DialogRoot
      open={isOpen}
      onOpenChange={(e) => (e.open ? undefined : onClose())}
      size="xl"
    >
      <DialogBackdrop />
      <DialogContent
        maxW="1200px"
        maxH="85vh"
        margin="auto"
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <DialogCloseTrigger
          position="absolute"
          top="20px"
          right="20px"
          zIndex={10}
        />
        <DialogBody overflowY="auto" p={0}>
          <Box className={styles.wrapper}>
            <Box className={styles.contentWrapper}>
              <Text className={styles.tags}>{event.tags.join(', ')}</Text>
              <Heading className={styles.title}>
                {event.content[language].title}
              </Heading>
              <Flex className={styles.info}>
                <HStack as={'p'} className={styles.time}>
                  <Image src="/icons/calendar.svg" alt="Calendar" />
                  {dateStr}
                </HStack>
                <HStack as={'p'} className={styles.time}>
                  <Image src="/icons/clock.svg" alt="Clock" />
                  {timeStr} h
                </HStack>
              </Flex>
              <Text
                className={styles.content}
                dangerouslySetInnerHTML={{
                  __html:
                    'html' in event.content[language]
                      ? event.content[language].html
                      : decodeBase64Html(
                          event.content[language].encodedHtmlContent ?? ''
                        ),
                }}
              />
              <Box className={styles.wrapperButton}>
                <Button className={styles.button} disabled>
                  {buyTicketsText}
                </Button>
                <SocialsWrapper language={language} />
              </Box>
            </Box>
            <EventCarousel data={(event.images ?? []) as ImageType[]} />
          </Box>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};

export default EventPreviewModal;
