import { Button, ButtonGroup, Steps, VStack } from '@chakra-ui/react';
import { EVENTS_FORM_TEXT } from './constants';
import EventPreviewModal from '../event-preview-modal/event-preview-modal';
import { useFormStore } from '@navoiy-workspace/store';
import { useState } from 'react';

export const EventFormAction = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const readEventFromStore = () => useFormStore.getState().event;

  return (
    <VStack>
      <ButtonGroup size="sm" variant="outline">
        <Steps.PrevTrigger asChild>
          <Button>{EVENTS_FORM_TEXT.previousStep}</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button>{EVENTS_FORM_TEXT.nextStep}</Button>
        </Steps.NextTrigger>

        <Button onClick={() => setIsPreviewOpen(true)}>
          {EVENTS_FORM_TEXT.eventPreviewButton}
        </Button>
      </ButtonGroup>
      <EventPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        event={readEventFromStore()}
        language="en"
      />
    </VStack>
  );
};
