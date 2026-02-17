import { Fieldset, Stack } from '@chakra-ui/react';
import { LanguageCode } from '@navoiy-workspace/types';
import styles from '../../shared/form.module.scss';
import {
  ARTICLE_ROOT_PATH,
  NEWS_FORM_TEXT,
  VALIDATION_ERROR_PATH,
} from '../constants';
import { TitleFieldSchema } from '../article-form-schema';
import { InputField } from '@/components/shared/input-field';

export const TitleContent = () => {
  const fieldName = `title`;
  const fieldFormText = NEWS_FORM_TEXT[fieldName];
  const languages = Object.values(LanguageCode);

  return (
    <Fieldset.Root size="lg" className={styles.formSection}>
      <Stack>
        <Fieldset.Legend>{fieldFormText.legend}</Fieldset.Legend>
      </Stack>

      <Fieldset.Content>
        {languages.map((lang) => {
          const titleLabel = fieldFormText.label(lang);
          const titlePlaceholder = fieldFormText.placeholder;
          const titleFieldValuePath = [
            ARTICLE_ROOT_PATH,
            'content',
            lang,
            'title',
          ];
          const titileValidationSchema = TitleFieldSchema;
          const titleValidationErrorPath = [
            VALIDATION_ERROR_PATH,
            'content',
            lang,
            'title',
          ];

          return (
            <Stack key={lang} gap={4}>
              <InputField
                fieldName={fieldName}
                label={titleLabel}
                placeholder={titlePlaceholder}
                fieldValuePath={titleFieldValuePath}
                validationSchema={titileValidationSchema}
                validationErrorPath={titleValidationErrorPath}
              />
            </Stack>
          );
        })}
      </Fieldset.Content>
    </Fieldset.Root>
  );
};
