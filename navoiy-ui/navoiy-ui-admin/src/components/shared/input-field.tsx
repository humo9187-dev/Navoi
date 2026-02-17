import React from 'react';
import { Field, Input, Stack, Textarea } from '@chakra-ui/react';
import { useFormStore } from '@navoiy-workspace/store';
import { applyFieldValidation, getByPath } from '@navoiy-workspace/utils';
import { ZodObject } from 'zod';

type InputType = 'text' | 'datetime-local' | 'number';
type Path = (string | number)[];

type InputFieldProps = {
  fieldName: string;
  label: string;
  placeholder?: string;
  rows?: number;
  type?: InputType;
  min?: number;
  fieldValuePath: Path;
  validationSchema: ZodObject;
  validationErrorPath: Path;
};

const inputValueMapper = {
  number: (value: string) => Number(value),
  text: (value: string) => value,
  'datetime-local': (value: string) => value.slice(0, 16),
};

export const InputField: React.FC<InputFieldProps> = ({
  fieldName,
  label,
  placeholder,
  rows,
  type = 'text',
  min,
  fieldValuePath,
  validationSchema,
  validationErrorPath,
}) => {
  const fieldValue = useFormStore((s) => getByPath(s, fieldValuePath));
  const isLoading = useFormStore((s) => s.isLoading);
  const mappedValue = inputValueMapper[type](fieldValue ?? '');

  const errorsArray =
    useFormStore((s) => getByPath(s, validationErrorPath)) ?? [];
  const updateByPath = useFormStore((s) => s.updateByPath);
  const textErrors = errorsArray.length ? errorsArray.join(', ') : '';

  const handleContentChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const rawValue = e.target.value;
    const value = type === 'number' ? Number(rawValue) : rawValue;
    updateByPath(fieldValuePath, value);

    const validationErrors = applyFieldValidation(
      validationSchema,
      fieldName,
      value
    );
    updateByPath(validationErrorPath, validationErrors);
  };

  if (rows) {
    return (
      <Field.Root invalid={!!textErrors}>
        <Field.Label>{label}</Field.Label>
        <Textarea
          rows={rows}
          value={mappedValue}
          onChange={handleContentChange}
          placeholder={placeholder}
        />
        <Stack h={4}>
          <Field.ErrorText>{textErrors}</Field.ErrorText>
        </Stack>
      </Field.Root>
    );
  }

  return (
    <Field.Root invalid={!!textErrors}>
      <Field.Label>{label}</Field.Label>
      <Input
        value={mappedValue}
        onChange={handleContentChange}
        placeholder={placeholder}
        type={type}
        min={min}
        disabled={isLoading}
      />
      <Stack h={4}>
        <Field.ErrorText>{textErrors}</Field.ErrorText>
      </Stack>
    </Field.Root>
  );
};
