import { Stack, Steps, VStack } from '@chakra-ui/react';
import { LoadingSpinner } from '@navoiy-workspace/ui-components';
import { NEWS_FORM_TEXT } from '../constants';
import { PublishToggle } from '@/components/shared/publish-toggle';
import styles from './steps-content.module.scss';
import { useFormStore } from '@navoiy-workspace/store';

type StepsContentProps = {
  isCompleted: boolean;
  isSubmitting: boolean;
  steps: { title: string; content: React.ReactNode }[];
};

export const StepsContent = ({
  steps,
  isSubmitting,
  isCompleted,
}: StepsContentProps) => {
  const saveArticle = useFormStore((s) => s.saveArticle);

  if (isSubmitting) {
    return <LoadingSpinner />;
  } else if (isCompleted) {
    return (
      <Stack className={styles.stepsContent}>
        <Steps.CompletedContent>
          <VStack>
            {NEWS_FORM_TEXT.stepsCompletedContent}
            <PublishToggle scope={'article'} saveStateAction={saveArticle} />
          </VStack>
        </Steps.CompletedContent>
      </Stack>
    );
  } else {
    return (
      <Stack className={styles.stepsContent}>
        <form>
          {steps.map((step, index) => (
            <Steps.Content key={index} index={index}>
              {step.content}
            </Steps.Content>
          ))}
        </form>
      </Stack>
    );
  }
};
