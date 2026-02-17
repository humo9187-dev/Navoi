import { Button, Field, Fieldset, NativeSelect, Stack } from '@chakra-ui/react';
import { useFormStore } from '@navoiy-workspace/store';
import { ScheduleInput, ScheduleType } from '@navoiy-workspace/types';
import {
  EVENT_ROOT_PATH,
  EVENTS_FORM_TEXT,
  VALIDATION_ERROR_PATH,
} from '../constants';
import {
  BuyLinkSchema,
  EventDateTimeFieldSchema,
} from '../schema/event-form-schema';
import styles from '../../shared/form.module.scss';
import { InputField } from '@/components/shared/input-field';

export const EventSchedules = () => {
  const fieldFormText = EVENTS_FORM_TEXT.schedule;
  const schedules = useFormStore((s) => s.event.schedules);
  const updateByPath = useFormStore((s) => s.updateByPath);
  const postSchedules = useFormStore((s) => s.postSchedules);
  const deleteSchedule = useFormStore((s) => s.deleteSchedule);

  const blankSchedule: ScheduleInput = {
    type: ScheduleType.AdHoc,
    eventDateTime: '',
    buyLink: '',
  };

  type ScheduleFieldName = 'eventDateTime' | 'buyLink';
  type Path = (string | number)[];

  type FieldMapping = Record<ScheduleFieldName, (idx: number) => Path>;

  const fieldMapping: FieldMapping = {
    eventDateTime: (idx) => ['schedules', idx, 'eventDateTime'],
    buyLink: (idx) => ['schedules', idx, 'buyLink'],
  };

  const validationMapping = {
    eventDateTime: EventDateTimeFieldSchema,
    buyLink: BuyLinkSchema,
  };

  const handleAddSchedule = async () => {
    await postSchedules();
  };

  const handleDeleteSchedule = async (idx: number) =>
    await deleteSchedule(schedules[idx].scheduleId);

  return (
    <Fieldset.Root size="lg" className={styles.formSection}>
      <Stack>
        <Fieldset.Legend>{fieldFormText.legend}</Fieldset.Legend>
      </Stack>

      <Fieldset.Content>
        {schedules.map((_, idx) => {
          const eventDateTimePath = [
            EVENT_ROOT_PATH,
            ...fieldMapping['eventDateTime'](idx),
          ];
          const buyLinkPath = [
            EVENT_ROOT_PATH,
            ...fieldMapping['buyLink'](idx),
          ];
          const eventDateTimeValidationSchema =
            validationMapping['eventDateTime'];
          const buyLinkValidationSchema = validationMapping['buyLink'];

          const eventDateTimeErrorsPath = [
            VALIDATION_ERROR_PATH,
            ...fieldMapping['eventDateTime'](idx),
          ];

          const buyLinkErrorsPath = [
            VALIDATION_ERROR_PATH,
            ...fieldMapping['buyLink'](idx),
          ];
          return (
            <Stack
              key={idx}
              columns={{ base: 1, md: 2 }}
              gap={4}
              borderWidth="1px"
              borderRadius="md"
              p={4}
            >
              <Field.Root>
                <Field.Label>{fieldFormText.scheduleTypeLabel}</Field.Label>
                <NativeSelect.Root>
                  <NativeSelect.Field>
                    {Object.values(ScheduleType).map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </NativeSelect.Field>
                  <NativeSelect.Indicator />
                </NativeSelect.Root>
                <Stack h={4}>
                  <Field.ErrorText></Field.ErrorText>
                </Stack>
              </Field.Root>

              <InputField
                type={'datetime-local'}
                fieldName={'eventDateTime'}
                label={fieldFormText.eventDateTime.label}
                fieldValuePath={eventDateTimePath}
                validationSchema={eventDateTimeValidationSchema}
                validationErrorPath={eventDateTimeErrorsPath}
              />
              <InputField
                fieldName={'buyLink'}
                label={fieldFormText.buyLink.label}
                placeholder={fieldFormText.buyLink.placeholder}
                fieldValuePath={buyLinkPath}
                validationSchema={buyLinkValidationSchema}
                validationErrorPath={buyLinkErrorsPath}
              />
              <Stack align="flex-end" justify="center">
                <Button onClick={() => handleDeleteSchedule(idx)}>
                  {fieldFormText.scheduleRemove}
                </Button>
              </Stack>
            </Stack>
          );
        })}

        <Button onClick={handleAddSchedule}>{fieldFormText.scheduleAdd}</Button>
      </Fieldset.Content>
    </Fieldset.Root>
  );
};
