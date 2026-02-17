import { LanguageCode } from '@navoiy-workspace/types';

export const NEWS_FORM_TEXT = {
  title: {
    legend: 'Provide the title & description for each language',
    label: (lang: LanguageCode) => `Title (${lang.toUpperCase()})`,
    placeholder: 'Grand opening highlights',
  },
  shortDescription: {
    label: (lang: LanguageCode) => `Short description (${lang.toUpperCase()})`,
    placeholder: 'Key facts about the announcement',
  },
  encodedHtmlContent: {
    legend: 'Provide the HTML content for each language',
    label: (lang: LanguageCode) => `HTML content (${lang.toUpperCase()})`,
    placeholder: '<p>Full article content with formatting.</p>',
  },
  author: {
    legend: 'Provide the HTML content for each language',
    label: 'Author',
    placeholder: 'John Doe',
  },
  publicationDate: {
    label: 'Publication date',
  },
  tags: {
    label: 'Tags',
  },
  stepsCompletedContent: 'You can now publish your article.',
  headingCreate: 'Create News Article',
  headingEdit: 'Edit News Article',
  articlePreviewButton: 'Preview Article',
  submitSave: 'Save Article',
  imagesHeading: 'Images',
  imagesUploadAltFallback: 'uploaded',
  metadataHeading: 'Metadata',

  contentHeading: (lang: LanguageCode) => `Content in ${lang.toUpperCase()}`,
};

export const ARTICLE_ROOT_PATH = 'article';
export const VALIDATION_ERROR_PATH = 'formErrors';

export const NEWS_IMAGE_LIMITS = {
  maxFiles: 15,
};
