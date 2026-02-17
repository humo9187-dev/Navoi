'use client';

import { useLangStore } from '@navoiy-workspace/store';
import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { NewsDTO } from '@navoiy-workspace/types';
import calendarIcon from '../assets/icons/calendar.svg';
import { decodeBase64Html, formatEventDate } from '@navoiy-workspace/utils';
import SocialsWrapper from '../socials-wrapper/socials-wrapper';
import style from './news-details.module.scss';
import { EventContent } from './news-content/news-content';

export const NewsDetails: React.FC<NewsDTO> = (news) => {
  const lang = useLangStore((s) => s.language);
  const translatedContent = news?.content[lang];
  const dateStr = formatEventDate(news?.publicationDate || '', lang);
  const html = decodeBase64Html(translatedContent?.encodedHtmlContent ?? '');

  return (
    <Box as="main" className={style.container}>
      <Image
        src={news?.images[0]?.link || ''}
        alt="News Image"
        className={style.image}
      />
      <Box className={style.content}>
        <Heading className={style.title}>{translatedContent?.title}</Heading>
        <Box>
          <HStack className={style.time}>
            <Image src={calendarIcon} />
            {dateStr}
          </HStack>
        </Box>
        <Box className={style.text}>
          <EventContent html={html} />
        </Box>
        {news.author && (
          <Text className={style.writter}>Written by {news?.author}</Text>
        )}
        <SocialsWrapper />
      </Box>
    </Box>
  );
};
