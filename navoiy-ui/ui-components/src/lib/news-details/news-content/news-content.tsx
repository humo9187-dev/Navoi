'use client';

import { Box, Text, Image } from '@chakra-ui/react';
import { extractParagraphs } from '@navoiy-workspace/utils';
import style from './news-content.module.scss';
import contentIcon from '../../assets/icons/content.svg';

interface EventContentProps {
  html: string;
}

export const EventContent: React.FC<EventContentProps> = ({
  html,
}: EventContentProps) => {
  const paragraphs = extractParagraphs(html);

  return (
    <Box>
      {paragraphs.slice(0, 3).map((p, i) => (
        <Text key={`top-${i}`} className={style.content}>
          {p}
        </Text>
      ))}

      {paragraphs.length > 2 && (
        <Box className={style.contentBox}>
          <Image src={contentIcon} alt="quote" className={style.contentIcon} />
          {paragraphs.slice(3, 4).map((p, i) => (
            <Text key={`bottom-${i}`} className={style.content}>
              {p}
            </Text>
          ))}
        </Box>
      )}

      {paragraphs.slice(4).map((p, i) => (
        <Text key={`bottom-${i}`} className={style.content}>
          {p}
        </Text>
      ))}
    </Box>
  );
};
