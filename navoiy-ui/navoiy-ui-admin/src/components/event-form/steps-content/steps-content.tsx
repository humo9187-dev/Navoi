import { Box, Center, SimpleGrid, Steps, VStack } from '@chakra-ui/react';
import { PublishToggle } from '@/components/shared/publish-toggle';
import { EVENTS_FORM_TEXT } from '../constants';
import { useFormStore } from '@navoiy-workspace/store';
import styles from './steps-content.module.scss';
import { LoadingSpinner } from '@navoiy-workspace/ui-components';

type StepsContentProps = {
  steps: { title: string; content: React.ReactNode }[];
};

export const StepsContent = ({ steps }: StepsContentProps) => {
  const saveEvent = useFormStore((s) => s.saveEvent);
  const isLoading = useFormStore((s) => s.isLoading);

  return (
    <SimpleGrid className={styles.stepsContent}>
      <form className={styles.formContent}>
        {steps.map((step, index) => (
          <Steps.Content key={index} index={index}>
            {step.content}
          </Steps.Content>
        ))}
      </form>

      <Steps.CompletedContent>
        <VStack>
          {EVENTS_FORM_TEXT.stepsCompletedContent}
          <PublishToggle scope={'event'} saveStateAction={saveEvent} />
        </VStack>
      </Steps.CompletedContent>
      {isLoading && (
        <Box pos="absolute" inset="0" bg="bg/80">
          <Center h="full">
            <LoadingSpinner />
          </Center>
        </Box>
      )}
    </SimpleGrid>
  );
};
