'use client';

import { Container, Heading, Steps } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useFormStore } from '@navoiy-workspace/store';
import {
  EventDetailsSchema,
  LocalizedHtmlSchema,
  LocalizedTitleSchema,
  SchedulesArraySchema,
} from './schema/event-form-schema';
import { StepsContent } from './steps-content/steps-content';
import { EVENTS_FORM_TEXT, VALIDATION_ERROR_PATH } from './constants';
import { EventFormAction } from './event-form-actions';
import styles from '../shared/form.module.scss';
import { eventFormSteps } from './steps/event-form-steps';
import Header from '../header/header';

export const EventForm: React.FC<{ eventId?: string | null }> = ({
  eventId,
}) => {
  const steps = eventFormSteps;
  const [step, setStep] = useState(0);
  const updateByPath = useFormStore((s) => s.updateByPath);
  const saveEvent = useFormStore((s) => s.saveEvent);
  const putSchedules = useFormStore((s) => s.putSchedules);
  const fetchEventById = useFormStore((s) => s.fetchEventById);
  const resetEvent = useFormStore((s) => s.resetEvent);
  const hasChanges = useFormStore((s) => s.hasChanges);

  const stepConfigs = [
    { id: 0, schema: LocalizedTitleSchema, save: saveEvent },
    { id: 1, schema: LocalizedHtmlSchema, save: saveEvent },
    { id: 2, save: saveEvent },
    { id: 3, schema: SchedulesArraySchema, save: putSchedules },
    { id: 4, schema: EventDetailsSchema, save: saveEvent },
  ];

  useEffect(() => {
    resetEvent();
    if (eventId) {
      fetchEventById(eventId);
    }
  }, [fetchEventById, eventId, resetEvent]);

  const stepController = async (e: { step: number }) => {
    const stepMeta = stepConfigs.find((s) => s.id === step);
    if (stepMeta) {
      if (stepMeta.schema) {
        const validationSchema = stepMeta.schema;
        const validationResult = validationSchema.safeParse(
          useFormStore.getState().event
        );
        if (!validationResult.success) {
          const listErrors = validationResult.error.issues;
          listErrors.map((i) =>
            updateByPath([VALIDATION_ERROR_PATH, ...i.path], [i.message])
          );
          if (step === 0) {
            return;
          }
        }
      }

      if (hasChanges) {
        await stepMeta?.save();
      }
    }
    setStep(e.step);
  };

  const heading = eventId
    ? EVENTS_FORM_TEXT.headingEdit
    : EVENTS_FORM_TEXT.headingCreate;

  return (
    <Container>
      <Steps.Root
        step={step}
        onStepChange={stepController}
        count={steps.length}
        className={styles.stepsContainer}
      >
        <Header />
        <Heading>{heading}</Heading>
        <Steps.List>
          {steps.map((step, index) => (
            <Steps.Item key={index} index={index} title={step.title}>
              <Steps.Indicator />
              <Steps.Title>{step.title}</Steps.Title>
              <Steps.Separator />
            </Steps.Item>
          ))}
        </Steps.List>

        <StepsContent steps={steps} />

        <EventFormAction />
      </Steps.Root>
    </Container>
  );
};
