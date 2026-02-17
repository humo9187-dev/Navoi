import style from './day-header.module.scss';
import React from 'react';
import { Container, Heading, HStack, Image } from '@chakra-ui/react';
import calendarIcon from '../../../assets/icons/calendar.svg';

export const DayHeader: React.FC<{ date: string; dateAttribute: string }> = ({
  date,
  dateAttribute,
}) => {
  return (
    <HStack className={style.dayHeader}>
      <Container>
        <Heading className={style.heading}>
          <Image src={calendarIcon} alt="calendar icon" />
          <time dateTime={dateAttribute}>{date}</time>
        </Heading>
      </Container>
    </HStack>
  );
};
