import { z } from 'zod';

export const LanguageCodeEnum = z.enum(['en', 'ru', 'uz']);

const MultilangTextSchema = z.record(
  LanguageCodeEnum,
  z.string().min(1, 'Required')
);

const FooterContactSchema = z.object({
  name: MultilangTextSchema,
  value: z.union([
    z.string().min(1, 'Value is required'),
    MultilangTextSchema,
    z.array(z.string().min(1)),
  ]),
});

export const GlobalFormSchema = z
  .object({
    header: z.object({
      topText: z.object({
        enabled: z.boolean(),
        text: z.record(LanguageCodeEnum, z.string()),
      }),
    }),

    socialLinks: z.object({
      facebook: z.string().url().or(z.literal('')),
      telegram: z.string().url().or(z.literal('')),
      instagram: z.string().url().or(z.literal('')),
    }),

    footer: z.object({
      description: MultilangTextSchema,
      contacts: z.array(FooterContactSchema).optional(),
    }),
  })
  .passthrough();

export type GlobalFormData = z.infer<typeof GlobalFormSchema>;
