import { LanguageCode } from '@navoiy-workspace/types';

export const EVENTS_FORM_TEXT = {
  title: {
    legend: 'Provide the title for each language',
    label: (lang: LanguageCode) => `Title (${lang.toUpperCase()})`,
    placeholder: 'Opera Gala Night',
  },
  html: {
    legend: 'Provide the HTML content for each language',
    label: (lang: LanguageCode) => `HTML Content (${lang.toUpperCase()})`,
    placeholder: '<p>A spectacular evening of opera classics.</p>',
  },

  duration: {
    legend: 'Specify the event duration and select relevant tags',
    label: 'Duration (minutes)',
    placeholder: '120',
  },
  schedule: {
    legend: 'Add event dates, times, and ticket links',
    scheduleTypeLabel: 'Schedule Type',
    scheduleRemove: 'Remove',
    scheduleAdd: '+ Add Schedule',

    buyLink: {
      label: 'Buy link',
      placeholder: 'https://example.link',
    },

    eventDateTime: {
      label: 'Date & Time',
      placeholder: 'YYYY-MM-DDTHH:mm',
    },
  },
  headingCreate: 'Event Creation',
  headingEdit: 'Event Editing',
  eventPreviewButton: 'PREVIEW',
  imagesHeading: 'Event images',
  imagesUploadAltFallback: 'uploaded',

  tagsLabel: 'Tags',
  contentHeading: (lang: LanguageCode) => `Content in ${lang.toUpperCase()}`,
  eventDetails: 'Event Details',
  stepsCompletedContent: 'You can now publish your event.',
  previousStep: 'BACK',
  nextStep: 'SAVE & CONTINUE',
};

export const EVENT_ROOT_PATH = 'event';
export const VALIDATION_ERROR_PATH = 'formErrors';

export const EVENTS_IMAGE_LIMITS = {
  maxFiles: 15,
};
