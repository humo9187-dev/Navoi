import {
  ContentMap,
  EventDateGroup,
  FlattenedEvent,
  NewsContentMap,
  NewsDTO,
  NewsTagType,
  PaginatedGroupedEvents,
} from '@navoiy-workspace/types';
import { EVENT_GROUPING_RULES } from './constants';
import { decode, encode } from './utils';
import z from 'zod';
import {
  ContentInputs,
  EventDTO,
  FormEventDTO,
  ScheduleInput,
  TagType,
} from '@navoiy-workspace/types';

export const flattenEventSchedules = (filteredEvents: EventDTO[]) =>
  filteredEvents.flatMap((event) =>
    event.schedules.map((schedule) => ({
      eventId: event.eventId,
      content: event.content,
      eventDate: schedule.eventDateTime.slice(0, 10),
      eventDateTime: new Date(schedule.eventDateTime).getTime(),
      duration: event.duration,
      images: event.images,
      scheduleId: schedule.scheduleId,
      buyLink: schedule.buyLink,
      tags: event.tags,
      uiProperties: event.uiProperties,
      isVisibleToVisitors: event.isVisibleToVisitors,
    }))
  );

export const sortFlattenedEventsByDateTime = (
  flattenEvents: FlattenedEvent[]
) => [...flattenEvents].sort((a, b) => a.eventDateTime - b.eventDateTime);

export function groupEventsByDate(
  sortedFlattenedEvents: FlattenedEvent[]
): PaginatedGroupedEvents {
  return sortedFlattenedEvents.reduce<PaginatedGroupedEvents>((acc, item) => {
    if (Object.keys(acc).length === 0) {
      acc[1] = { [item.eventDate]: [item] };
      return acc;
    } else {
      let currentPage = Object.keys(acc).length;
      const currentGroupsCount = Object.values(acc[currentPage]).length;
      const lastDate = Object.keys(acc[currentPage]).at(-1);
      if (
        currentGroupsCount === EVENT_GROUPING_RULES.MAX_DAYS_PER_PAGE &&
        lastDate !== item.eventDate
      ) {
        ++currentPage;
        acc[currentPage] = { [item.eventDate]: [item] };
        return acc;
      }
      if (
        totalValues(acc[currentPage]) ===
        EVENT_GROUPING_RULES.MAX_EVENTS_PER_PAGE
      ) {
        ++currentPage;
        acc[currentPage] = { [item.eventDate]: [item] };
        return acc;
      }
      acc[currentPage] = {
        ...acc[currentPage],
        [item.eventDate]: [...(acc[currentPage][item.eventDate] || []), item],
      };
    }
    return acc;
  }, {});
}

const totalValues = (data: EventDateGroup) =>
  Object.values(data).reduce((sum, arr) => sum + arr.length, 0);

export const toFormEvent = (event: EventDTO): FormEventDTO => {
  return {
    ...event,
    duration: event.duration ?? 0,
    content: Object.fromEntries(
      Object.entries(event.content).map(([lang, block]) => [
        lang,
        { title: block.title, html: decode(block.encodedHtmlContent) },
      ])
    ) as ContentInputs,
  };
};

export const toFormArticle = (article: NewsDTO): NewsDTO => {
  return {
    ...article,
    content: Object.fromEntries(
      Object.entries(article.content).map(([lang, block]) => [
        lang,
        {
          title: block.title,
          shortDescription: block.shortDescription,
          encodedHtmlContent: decode(block.encodedHtmlContent),
        },
      ])
    ) as NewsContentMap,
  };
};

export const toEventDTO = (event: FormEventDTO): EventDTO => {
  return {
    ...event,
    content: Object.fromEntries(
      Object.entries(event.content).map(([lang, block]) => [
        lang,
        { title: block.title, encodedHtmlContent: encode(block.html) },
      ])
    ) as ContentMap,
  };
};

export const toArticleDTO = (article: NewsDTO): NewsDTO => {
  return {
    ...article,
    content: Object.fromEntries(
      Object.entries(article.content).map(([lang, block]) => [
        lang,
        {
          title: block.title,
          shortDescription: block.shortDescription,
          encodedHtmlContent: encode(block.encodedHtmlContent),
        },
      ])
    ) as NewsContentMap,
  };
};

export const buildErrorMapFromIssues = (
  acc: Record<string, string[]>,
  issue: z.core.$ZodIssue
) => {
  const key = issue.path.join('/');
  acc[key] = [...(acc[key] ?? []), issue.message];
  return acc;
};

type TagsEnum = typeof NewsTagType | typeof TagType;

export const applyFieldValidation = (
  validationSchema: z.ZodObject,
  fieldName: string,
  currentValue: string | number | ScheduleInput[] | (TagType | NewsTagType)[]
) => {
  const validationResult =
    validationSchema.shape[fieldName].safeParse(currentValue);
  if (validationResult.success) {
    return [];
  } else {
    const tree = z.treeifyError(validationResult.error);
    return tree.errors;
  }
};
