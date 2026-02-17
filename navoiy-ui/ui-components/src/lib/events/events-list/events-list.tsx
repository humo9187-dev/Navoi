import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { buildDateParts, parseDateDetails } from '@navoiy-workspace/utils';
import { useLangStore } from '@navoiy-workspace/store';
import { DayHeader } from './day-header/day-header';
import { EventCard } from './event-card/event-card';
import { EventListProps, LanguageCode } from '@navoiy-workspace/types';

export const EventsList: React.FC<EventListProps> = ({ events }) => {
  const language = useLangStore((s) => s.language);
  const availableDates: string[] = [];
  return (
    <>
      {Object.entries(events).map((event) => {
        const dateParts = parseDateDetails(event[0], language);
        const displayDate =
          language === LanguageCode.uz
            ? buildDateParts(dateParts, 'UZ_WDM')
            : buildDateParts(dateParts);
        const show = availableDates.includes(displayDate);
        availableDates.push(displayDate);
        return (
          <Box as={'section'} key={event[0]}>
            {!show && <DayHeader date={displayDate} dateAttribute={event[0]} />}
            <Container as={'section'}>
              {event[1].map((e) => (
                <EventCard event={e} key={e.scheduleId} lang={language} />
              ))}
            </Container>
          </Box>
        );
      })}
    </>
  );
};
