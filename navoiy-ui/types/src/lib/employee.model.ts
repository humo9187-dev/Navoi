import { LanguageCode } from './language.model';

export type employeeContentMap = {
  [key in LanguageCode]: employeeContent;
};

export interface employeeContent {
  name: string;
  position: string;
  encodedHtmlContent: string;
}

export enum EmployeeType {
  HEADS = 'HEADS',
  DIRECTORS = 'DIRECTORS',
  OPERA_TROUPE = 'OPERA_TROUPE',
  BALLET_TROUPE = 'BALLET_TROUPE',
  CONDUCTORS = 'CONDUCTORS',
  SYMPHONY_ORCHESTRA = 'SYMPHONY_ORCHESTRA',
  CHORUS = 'CHORUS',
  MIMANS = 'MIMANS',
  CHILDRENS_STUDIO = 'CHILDRENS_STUDIO',
  YOUNG_BALLET = 'YOUNG_BALLET',
  WORKSHOPS = 'WORKSHOPS',
  OPERA_TRAINEES = 'OPERA_TRAINEES',
}

export interface employeeImage {
  fileId: string;
  link: string;
}

export interface EmployeeDTO {
  employeeId: string;
  content: employeeContentMap;
  images: employeeImage[];
  type: EmployeeType[];
}
