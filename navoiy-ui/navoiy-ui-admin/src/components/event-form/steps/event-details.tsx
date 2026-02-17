import { Fieldset, Stack } from '@chakra-ui/react';
import styles from '../../shared/form.module.scss';
import {
  EVENT_ROOT_PATH,
  EVENTS_FORM_TEXT,
  VALIDATION_ERROR_PATH,
} from '../constants';
import { EventDetailsSchema } from '../schema/event-form-schema';
import { InputField } from '@/components/shared/input-field';
import { EventTags } from '@/components/shared/tags';
import { TagType } from '@navoiy-workspace/types';

export const EventDetails = () => {
  const fieldFormText = EVENTS_FORM_TEXT.duration;
  const fieldValuePath = [EVENT_ROOT_PATH, 'duration'];
  const validationSchema = EventDetailsSchema;
  const validationErrorPath = [VALIDATION_ERROR_PATH, 'duration'];
  const tagsFieldName = 'tags';
  const tagsFieldValuePath = [EVENT_ROOT_PATH, tagsFieldName];
  const tagsErrorPath = [VALIDATION_ERROR_PATH, tagsFieldName];

  return (
    <Fieldset.Root size="lg" className={styles.formSection}>
      <Stack>
        <Fieldset.Legend>{fieldFormText.legend}</Fieldset.Legend>
      </Stack>

      <Fieldset.Content>
        <Stack gap={4}>
          <InputField
            label={fieldFormText.label}
            fieldName={'duration'}
            type={'number'}
            min={10}
            fieldValuePath={fieldValuePath}
            validationSchema={validationSchema}
            validationErrorPath={validationErrorPath}
          />
        </Stack>
        <EventTags
          fieldName={tagsFieldName}
          fieldValuePath={tagsFieldValuePath}
          validationSchema={validationSchema}
          validationErrorPath={tagsErrorPath}
          tagsList={TagType}
        />
      </Fieldset.Content>
    </Fieldset.Root>
  );
};
