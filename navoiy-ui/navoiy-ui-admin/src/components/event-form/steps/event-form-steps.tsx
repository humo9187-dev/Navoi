import { ImageUploader } from '@/components/shared/images/images';
import { EventDetails } from './event-details';
import { HtmlContent } from './html-content';

import { EventSchedules } from './schedules';
import { TitleContent } from './title-content';

export const eventFormSteps = [
  {
    title: 'Title',
    content: <TitleContent />,
  },
  {
    title: 'Description',
    content: <HtmlContent />,
  },
  {
    title: 'Images',
    content: <ImageUploader scope="event" />,
  },
  {
    title: 'Schedules',
    content: <EventSchedules />,
  },
  {
    title: 'Details',
    content: <EventDetails />,
  },
];
