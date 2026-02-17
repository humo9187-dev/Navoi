import { Fieldset, Stack } from '@chakra-ui/react';
import { LanguageCode } from '@navoiy-workspace/types';
import {
  ARTICLE_ROOT_PATH,
  NEWS_FORM_TEXT,
  VALIDATION_ERROR_PATH,
} from '../constants';
import {
  DescriptionFieldSchema,
  HtmlFieldSchema,
} from '../article-form-schema';
import styles from '../../shared/form.module.scss';
import { InputField } from '@/components/shared/input-field';

export const HtmlContent = () => {
  const fieldName = `encodedHtmlContent`;
  const descriptionFieldName = 'shortDescription';

  const fieldFormText = NEWS_FORM_TEXT[fieldName];
  const descriptionFieldFormText = NEWS_FORM_TEXT[descriptionFieldName];

  const languages = Object.values(LanguageCode);
  return (
    <Fieldset.Root size="lg" className={styles.formSection}>
      <Stack>
        <Fieldset.Legend>{fieldFormText.legend}</Fieldset.Legend>
      </Stack>

      <Fieldset.Content>
        {languages.map((lang) => {
          const label = fieldFormText.label(lang);
          const descriptionLabel = descriptionFieldFormText.label(lang);

          const placeholder = fieldFormText.placeholder;
          const descriptionPlaceholder = descriptionFieldFormText.placeholder;

          const fieldValuePath = [
            ARTICLE_ROOT_PATH,
            'content',
            lang,
            'encodedHtmlContent',
          ];
          const descriptionFieldValuePath = [
            ARTICLE_ROOT_PATH,
            'content',
            lang,
            'shortDescription',
          ];

          const validationSchema = HtmlFieldSchema;
          const descriptionValidationSchema = DescriptionFieldSchema;

          const validationErrorPath = [
            VALIDATION_ERROR_PATH,
            'content',
            lang,
            fieldName,
          ];
          const descriptionValidationErrorPath = [
            VALIDATION_ERROR_PATH,
            'content',
            lang,
            'shortDescription',
          ];
          return (
            <Stack key={lang} gap={4}>
              <InputField
                fieldName={descriptionFieldName}
                label={descriptionLabel}
                placeholder={descriptionPlaceholder}
                fieldValuePath={descriptionFieldValuePath}
                validationSchema={descriptionValidationSchema}
                validationErrorPath={descriptionValidationErrorPath}
              />

              <InputField
                fieldName={fieldName}
                rows={6}
                label={label}
                placeholder={placeholder}
                fieldValuePath={fieldValuePath}
                validationSchema={validationSchema}
                validationErrorPath={validationErrorPath}
              />
            </Stack>
          );
        })}
      </Fieldset.Content>
    </Fieldset.Root>
  );
};
