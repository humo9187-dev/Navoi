import { LanguageCode, ScheduleType, TagType } from '@navoiy-workspace/types';
import { z } from 'zod';

export const TitleFieldSchema = z.object({
  title: z.string().trim().min(10),
});

export const LocalizedTitleSchema = z.object({
  content: z.record(z.enum(LanguageCode), TitleFieldSchema),
});

export const HtmlFieldSchema = z.object({
  html: z.string().trim().min(10),
});

export const LocalizedHtmlSchema = z.object({
  content: z.record(z.enum(LanguageCode), HtmlFieldSchema),
});

export const EventDateTimeFieldSchema = z.object({
  eventDateTime: z.coerce.date({ message: 'Schedule date is required' }),
});
export const BuyLinkSchema = z.object({
  buyLink: z.url({ message: 'Buy link must be a valid URL' }).min(10),
});

export const DurationFiledSchema = z.coerce.number().min(10);

export const ContentItemSchema = z.object({
  title: z.string().trim().min(10),
  html: z.string().trim().min(10),
});

export const ScheduleSchema = z.object({
  type: z.enum(ScheduleType).default(ScheduleType.AdHoc),
  eventDateTime: z.coerce.date({ message: 'Schedule date is required' }),
  buyLink: z
    .url({ message: 'Buy link must be a valid URL' })
    .min(10, { message: 'Buy link is required' }),
});
export const SchedulesSchema = z
  .array(ScheduleSchema)
  .min(1, 'At least one schedule is required');

export const SchedulesArraySchema = z.object({
  schedules: SchedulesSchema,
});

const TagsSchema = z.array(z.enum(TagType)).min(1, 'Select at least one tag');

export const EventDetailsSchema = z.object({
  tags: TagsSchema,
  duration: DurationFiledSchema,
});
