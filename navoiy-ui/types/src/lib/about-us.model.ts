import { LanguageCode } from './language.model';
import { Image } from './events.model';

export type AboutUsContentMap = {
  [key in LanguageCode]: AboutUsContent;
};

export interface AboutUsContent {
  title: string;
  encodedHtmlContent: string;
}

export interface AboutUsSocialLinks {
  facebook?: string;
  instagram?: string;
  telegram?: string;
}

export interface AboutUsArticle {
  aboutUsId: string;
  content: AboutUsContentMap;
  image: Image;
  socialLinks: AboutUsSocialLinks;
  publicationDate: string; // ISO 8601
  author: string;
}

export interface AboutUsDTO {
  data: AboutUsArticle[];
}
