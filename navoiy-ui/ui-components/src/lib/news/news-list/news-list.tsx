import React from 'react';
import style from './news-list.module.scss';
import { buildDateParts, parseDateDetails } from '@navoiy-workspace/utils';
import { Grid, Heading, Image, Text } from '@chakra-ui/react';
import { LanguageCode, NewsDTO } from '@navoiy-workspace/types';
import { useLangStore } from '@navoiy-workspace/store';
import Link from 'next/link';

export const NewsList: React.FC<{ newsList: NewsDTO[] }> = ({ newsList }) => {
  const language = useLangStore((s) => s.language);

  return (
    <Grid as={'section'} className={style.newsListContainer}>
      {newsList.map((article) => {
        const translatedContent = article.content[language];
        const dateParts = parseDateDetails(article.publicationDate, language);
        const displayDate =
          language === LanguageCode.uz
            ? buildDateParts(dateParts, 'UZ_WMY')
            : buildDateParts(dateParts, 'WMY');
        return (
          <Link
            href={`/news/${article.newsId}`}
            key={article.newsId}
            aria-label={`Open article: ${translatedContent.title}`}
            className={style.articleCard}
          >
            <Grid as={'figure'} className={style.imgDateContainer}>
              <Image
                className={style.imgContainer}
                src={article.images[0].link}
                alt={translatedContent.title}
              />
              <time dateTime={article.publicationDate} className={style.date}>
                {displayDate}
              </time>
            </Grid>

            <Heading className={style.articleTitle}>
              {translatedContent.title}
            </Heading>
            <Text className={style.articleSummary}>
              {translatedContent.shortDescription}
            </Text>
          </Link>
        );
      })}
    </Grid>
  );
};
