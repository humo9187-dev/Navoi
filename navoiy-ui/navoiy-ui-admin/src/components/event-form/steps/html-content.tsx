import { Fieldset, Stack } from '@chakra-ui/react';
import { LanguageCode } from '@navoiy-workspace/types';
import {
  EVENT_ROOT_PATH,
  EVENTS_FORM_TEXT,
  VALIDATION_ERROR_PATH,
} from '../constants';
import { HtmlFieldSchema } from '../schema/event-form-schema';

import styles from '../../shared/form.module.scss';
import { InputField } from '@/components/shared/input-field';

export const HtmlContent = () => {
  const fieldName = `html`;
  const fieldFormText = EVENTS_FORM_TEXT[fieldName];
  const languages = Object.values(LanguageCode);
  return (
    <Fieldset.Root size="lg" className={styles.formSection}>
      <Stack>
        <Fieldset.Legend>{fieldFormText.legend}</Fieldset.Legend>
      </Stack>

      <Fieldset.Content>
        {languages.map((lang) => {
          const label = fieldFormText.label(lang);
          const placeholder = fieldFormText.placeholder;

          const fieldValuePath = [EVENT_ROOT_PATH, 'content', lang, 'html'];
          const validationSchema = HtmlFieldSchema;
          const validationErrorPath = [
            VALIDATION_ERROR_PATH,
            'content',
            lang,
            'html',
          ];
          return (
            <Stack key={lang} gap={4}>
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
