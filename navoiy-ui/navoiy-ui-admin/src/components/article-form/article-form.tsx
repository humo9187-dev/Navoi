'use client';

import React, { useState } from 'react';
import { ArticleFormProps } from '@navoiy-workspace/types';
import { Button, Container, Stack, Steps } from '@chakra-ui/react';
import { useFormStore } from '@navoiy-workspace/store';
import { articleFormSteps } from './steps/article-form-steps';
import styles from '../shared/form.module.scss';
import { StepsContent } from './steps-content/steps-content';
import { ArticleFormAction } from './article-form-actions';
import { ZodType } from 'zod';
import { LocalizedTitleSchema } from './article-form-schema';
import { VALIDATION_ERROR_PATH } from './constants';

export const ArticleForm: React.FC<ArticleFormProps> = ({ articleId }) => {
  const steps = articleFormSteps;
  const [step, setStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const updateByPath = useFormStore((s) => s.updateByPath);
  const saveArticle = useFormStore((s) => s.saveArticle);

  const steppingRules: Record<number, ZodType> = {
    0: LocalizedTitleSchema,
  };

  const stepController = async (e: { step: number }) => {
    setIsCompleted(false);
    if (steppingRules[step]) {
      const validationSchema = steppingRules[step];
      const validationResult = validationSchema.safeParse(
        useFormStore.getState().article
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
    setIsSubmitting(true);
    await saveArticle();
    setStep(e.step);
    setIsSubmitting(false);
  };

  return (
    <Container>
      <Stack position={'fixed'} zIndex={100}>
        <Button onClick={() => console.log(useFormStore.getState())}>
          Current State
        </Button>
      </Stack>
      <Steps.Root
        step={step}
        onStepChange={stepController}
        onStepComplete={() => setIsCompleted(true)}
        count={steps.length}
        className={styles.stepsContainer}
      >
        <Steps.List>
          {steps.map((step, index) => (
            <Steps.Item key={index} index={index} title={step.title}>
              <Steps.Indicator />
              <Steps.Title>{step.title}</Steps.Title>
              <Steps.Separator />
            </Steps.Item>
          ))}
        </Steps.List>

        <StepsContent
          steps={steps}
          isCompleted={isCompleted}
          isSubmitting={isSubmitting}
        />

        <ArticleFormAction />
      </Steps.Root>
    </Container>
  );
};
