import { HtmlContent } from './html-content';
import { TitleContent } from './title-content';
import { ArticleMetadata } from './article-metadata';
import { ImageUploader } from '@/components/shared/images/images';

export const articleFormSteps = [
  {
    title: 'Basic Information',
    content: <TitleContent />,
  },
  {
    title: 'Article Body',
    content: <HtmlContent />,
  },
  {
    title: 'Images',
    content: <ImageUploader scope="article" />,
  },
  {
    title: 'Article Metadata',
    content: <ArticleMetadata />,
  },
];
