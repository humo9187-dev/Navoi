import {
  DateDetails,
  DatePart,
  LanguageCode,
  TranslationAreas,
  UI_TRANSLATIONS,
} from '@navoiy-workspace/types';

export const formatEventDate = (iso: string, lang: LanguageCode) => {
  const date = new Date(iso);
  const weekdayIndex = date.getDay();

  const weekdays = UI_TRANSLATIONS[lang].weekdays;
  const weekdayNames = [
    weekdays.sunday,
    weekdays.monday,
    weekdays.tuesday,
    weekdays.wednesday,
    weekdays.thursday,
    weekdays.friday,
    weekdays.saturday,
  ];

  const weekday = weekdayNames[weekdayIndex];

  const [day, month, year] = date
    .toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
    .split('/');

  return `${weekday}, ${day}.${month}.${year}.`;
};

export const formatEventTime = (iso: string) => {
  const date = new Date(iso);

  return date.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

export const formatTime = (d: number) => {
  const date = new Date(d);
  return new Intl.DateTimeFormat('en-US', {
    hourCycle: 'h23',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

export const parseDateDetails = (
  d: string,
  locale: LanguageCode
): DateDetails => {
  const date = new Date(d);
  const effectiveLocale = locale !== LanguageCode.uz ? locale : LanguageCode.en;
  const dateParts = new Intl.DateTimeFormat(effectiveLocale, {
    weekday: 'long',
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  }).formatToParts(date) as DatePart[];
  const filteredParts = dateParts.filter((part) => part.type !== 'literal');
  const dateDetails = filteredParts.reduce<DateDetails>(
    (details, part): DateDetails => {
      details[part.type as keyof DateDetails] = part.value.toLocaleLowerCase();
      return details;
    },
    {} as DateDetails
  );

  // https://issues.chromium.org/issues/40074971#comment1
  if (locale === LanguageCode.uz) {
    const weekdays = UI_TRANSLATIONS[locale][TranslationAreas.weekdays];
    const months = UI_TRANSLATIONS[locale][TranslationAreas.months];

    const weekdayKey = dateDetails.weekday as keyof typeof weekdays;
    dateDetails.weekday = weekdays[weekdayKey] ?? dateDetails.weekday;

    if (months) {
      const monthKey = dateDetails.month as keyof typeof months;
      dateDetails.month = months[monthKey] ?? dateDetails.month;
    }
  }
  return dateDetails;
};

const dateFormatBuilders = {
  WDM: (parts: DateDetails) => `${parts.weekday}, ${parts.day} ${parts.month}`,
  WMY: (parts: DateDetails) => `${parts.day}. ${parts.month} ${parts.year}`,
  UZ_WDM: (parts: DateDetails) =>
    `${parts.weekday}, ${parts.day}-${parts.month}`,
  UZ_WMY: (parts: DateDetails) => `${parts.day}-${parts.month}, ${parts.year}`,
};

export const buildDateParts = (
  parts: DateDetails,
  pattern: keyof typeof dateFormatBuilders = 'WDM'
): string => {
  return dateFormatBuilders[pattern](parts);
};
