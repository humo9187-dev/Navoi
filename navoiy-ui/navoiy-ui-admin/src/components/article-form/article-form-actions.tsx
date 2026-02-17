import { Button, ButtonGroup, Steps, VStack } from '@chakra-ui/react';
import { EVENTS_FORM_TEXT } from '../event-form/constants';

export const ArticleFormAction = () => {
  return (
    <VStack>
      <ButtonGroup size="sm" variant="outline">
        <Steps.PrevTrigger asChild>
          <Button>{EVENTS_FORM_TEXT.previousStep}</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button>{EVENTS_FORM_TEXT.nextStep}</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </VStack>
  );
};
