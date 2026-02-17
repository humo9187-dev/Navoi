import { LanguageCode, TagType } from '@navoiy-workspace/types';
import { z } from 'zod';

export const TitleFieldSchema = z.object({
  title: z.string().trim().min(10),
});

export const LocalizedTitleSchema = z.object({
  content: z.record(z.enum(LanguageCode), TitleFieldSchema),
});

export const DescriptionFieldSchema = z.object({
  shortDescription: z.string().trim().min(10),
});

export const HtmlFieldSchema = z.object({
  encodedHtmlContent: z.string().trim().min(10),
});

export const AuthorFieldSchema = z.object({
  author: z.string().min(2),
});

export const PublicationDateFieldSchema = z.object({
  publicationDate: z.coerce.date({ message: 'Publication date is required' }),
});

export const ContentItemSchema = z.object({
  title: z.string().min(10),
  shortDescription: z.string().min(10),
  html: z.string().min(10),
});
const ContentSchema = z.record(z.enum(LanguageCode), ContentItemSchema);
const TagsSchema = z.array(z.enum(TagType)).min(1, 'Select at least one tag');
export const ArticleFormSchema = z.object({
  content: ContentSchema,
  author: z.string().min(2),
  publicationDate: z.coerce.date({ message: 'Publication date is required' }),
  tags: TagsSchema,
});
