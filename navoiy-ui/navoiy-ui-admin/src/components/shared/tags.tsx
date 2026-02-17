import { Checkbox, Fieldset, Flex } from '@chakra-ui/react';
import { EVENTS_FORM_TEXT } from '@navoiy-workspace/navoiy-ui-admin/src/components/event-form/constants';
import { applyFieldValidation, getByPath } from '@navoiy-workspace/utils';
import { useFormStore } from '@navoiy-workspace/store';
import { NewsTagType, TagType } from '@navoiy-workspace/types';
import { ZodObject } from 'zod';
import React from 'react';

type Path = (string | number)[];

type TagsEnum = typeof NewsTagType | typeof TagType;
type TagValue = TagType | NewsTagType;

type InputFieldProps = {
  fieldName: string;
  fieldValuePath: Path;
  validationSchema: ZodObject;
  validationErrorPath: Path;
  tagsList: TagsEnum;
};

export const EventTags: React.FC<InputFieldProps> = ({
  fieldName,
  fieldValuePath,
  validationSchema,
  validationErrorPath,
  tagsList,
}) => {
  const tags =
    (useFormStore((s) => getByPath(s, fieldValuePath)) as TagValue[]) ?? [];
  const updateByPath = useFormStore((s) => s.updateByPath);
  const errorsArray =
    useFormStore((s) => getByPath(s, validationErrorPath)) ?? [];
  const textErrors = errorsArray.length ? errorsArray.join(', ') : '';

  const handleTagToggle = (checked: boolean, tag: TagValue) => {
    const currentState = checked
      ? tags.filter((t) => t !== tag)
      : [...tags, tag];
    updateByPath(fieldValuePath, currentState);

    const validationErrors = applyFieldValidation(
      validationSchema,
      fieldName,
      currentState
    );
    updateByPath(['formErrors', 'tags'], validationErrors);
  };
  return (
    <Fieldset.Root invalid={!!textErrors}>
      <Checkbox.Group>
        <Fieldset.Legend>{EVENTS_FORM_TEXT.tagsLabel}</Fieldset.Legend>

        <Fieldset.Content>
          <Flex align="flex-start" gap={'8'} flexWrap={'wrap'}>
            {Object.values(tagsList).map((tag) => {
              const checked = tags.includes(tag);
              return (
                <Checkbox.Root
                  size={'sm'}
                  key={tag}
                  checked={checked}
                  onCheckedChange={() => handleTagToggle(checked, tag)}
                  borderWidth="1px"
                  borderRadius="md"
                  px={3}
                  py={2}
                >
                  <Checkbox.HiddenInput />
                  <Checkbox.Control />
                  <Checkbox.Label>{tag}</Checkbox.Label>
                </Checkbox.Root>
              );
            })}
          </Flex>
        </Fieldset.Content>
      </Checkbox.Group>
      <Fieldset.ErrorText>{textErrors}</Fieldset.ErrorText>
    </Fieldset.Root>
  );
};
