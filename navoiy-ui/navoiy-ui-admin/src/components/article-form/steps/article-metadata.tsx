import { Fieldset, HStack, Stack } from '@chakra-ui/react';
import styles from '../../shared/form.module.scss';
import {
  ARTICLE_ROOT_PATH,
  NEWS_FORM_TEXT,
  VALIDATION_ERROR_PATH,
} from '../constants';
import {
  ArticleFormSchema,
  AuthorFieldSchema,
  PublicationDateFieldSchema,
} from '../article-form-schema';
import { InputField } from '@/components/shared/input-field';
import { EventTags } from '@/components/shared/tags';
import { NewsTagType } from '@navoiy-workspace/types';

export const ArticleMetadata = () => {
  const authorFieldName = 'author';
  const publicationDateFieldName = 'publicationDate';
  const tagsFieldName = 'tags';

  const authorFieldFormText = NEWS_FORM_TEXT[authorFieldName];
  const publicationDateFieldFormText = NEWS_FORM_TEXT[publicationDateFieldName];

  const authorFieldValuePath = [ARTICLE_ROOT_PATH, authorFieldName];
  const publicationDateFieldValuePath = [
    ARTICLE_ROOT_PATH,
    publicationDateFieldName,
  ];
  const tagsFieldValuePath = [ARTICLE_ROOT_PATH, tagsFieldName];

  const authorValidationSchema = AuthorFieldSchema;
  const publicationDateValidationSchema = PublicationDateFieldSchema;
  const tagsDateValidationSchema = ArticleFormSchema;

  const authorValidationErrorPath = [VALIDATION_ERROR_PATH, authorFieldName];
  const publicationDateErrorPath = [
    VALIDATION_ERROR_PATH,
    publicationDateFieldName,
  ];
  const tagsErrorPath = [VALIDATION_ERROR_PATH, tagsFieldName];

  return (
    <Fieldset.Root size="lg" className={styles.formSection}>
      <Stack>
        <Fieldset.Legend>{authorFieldFormText.legend}</Fieldset.Legend>
      </Stack>

      <Fieldset.Content>
        <HStack gap={4}>
          <InputField
            fieldName={authorFieldName}
            label={authorFieldFormText.label}
            placeholder={authorFieldFormText.placeholder}
            fieldValuePath={authorFieldValuePath}
            validationSchema={authorValidationSchema}
            validationErrorPath={authorValidationErrorPath}
          />

          <InputField
            fieldName={publicationDateFieldName}
            label={publicationDateFieldFormText.label}
            type={'datetime-local'}
            fieldValuePath={publicationDateFieldValuePath}
            validationSchema={publicationDateValidationSchema}
            validationErrorPath={publicationDateErrorPath}
          />
        </HStack>
        <EventTags
          fieldName={tagsFieldName}
          fieldValuePath={tagsFieldValuePath}
          validationSchema={tagsDateValidationSchema}
          validationErrorPath={tagsErrorPath}
          tagsList={NewsTagType}
        />
      </Fieldset.Content>
    </Fieldset.Root>
  );
};
