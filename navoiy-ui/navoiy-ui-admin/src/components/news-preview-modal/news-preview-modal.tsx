'use client';

import React from 'react';
import {
  DialogRoot,
  DialogContent,
  DialogBody,
  DialogCloseTrigger,
  DialogBackdrop,
  Box,
  Heading,
  HStack,
  Image,
  Text,
  Link,
} from '@chakra-ui/react';
import {
  NewsDTO,
  FormNewsDTO,
  UI_TRANSLATIONS,
  LanguageCode,
} from '@navoiy-workspace/types';
import { formatEventDate } from '@navoiy-workspace/utils';
import styles from './news-preview-modal.module.scss';

interface NewsPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  news: NewsDTO | FormNewsDTO | null;
  language?: 'ru' | 'uz' | 'en';
}

const SocialsWrapper: React.FC<{ language: 'ru' | 'uz' | 'en' }> = ({
  language,
}) => {
  const share =
    UI_TRANSLATIONS[language]['news-details']?.share ??
    UI_TRANSLATIONS[language]['event-details'].share;
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

const NewsPreviewModal: React.FC<NewsPreviewModalProps> = ({
  isOpen,
  onClose,
  news,
  language = 'ru',
}) => {
  if (!news) return null;

  const translatedContent = news.content[language];

  let html = '';

  if (translatedContent) {
    if ('html' in translatedContent && translatedContent.html) {
      html = translatedContent.html;
    } else if (
      'encodedHtmlContent' in translatedContent &&
      translatedContent.encodedHtmlContent
    ) {
      html = decodeBase64Html(translatedContent.encodedHtmlContent);
    }
  }
  const dateStr = formatEventDate(
    news.publicationDate || '',
    language as LanguageCode
  );

  return (
    <DialogRoot
      open={isOpen}
      onOpenChange={(e) => (e.open ? undefined : onClose())}
      size="xl"
    >
      <DialogBackdrop />
      <DialogContent
        maxW="900px"
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
          <Box className={styles.container}>
            <Image
              src={news.images?.[0]?.link || ''}
              alt="News Image"
              className={styles.image}
            />
            <Box className={styles.content}>
              <Heading className={styles.title}>
                {translatedContent?.title}
              </Heading>
              <HStack className={styles.time}>
                <Image src="/icons/calendar.svg" alt="Calendar" />
                {dateStr}
              </HStack>
              <Box
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: html }}
              />
              {news.author && (
                <Text className={styles.writter}>Written by {news.author}</Text>
              )}
              <SocialsWrapper language={language} />
            </Box>
          </Box>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};

export default NewsPreviewModal;
