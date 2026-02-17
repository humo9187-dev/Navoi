import { Pages } from './pages.model';
import { LanguageCode } from './language.model';
import { MenuItem } from './menu.model';
import { TagType } from './events.model';
import {
  EventsFilterTagTranslations,
  NewsFilterTagTranslations,
} from './filter.model';
import { NewsTagType } from './news.model';
import { Contact, FooterNavigationMenu } from './footer.model';

export enum TranslationAreas {
  breadcrumbs = 'breadcrumbs',
  header = 'header',
  footer = 'footer',
  buttons = 'buttons',
  eventFilterDropdown = 'eventFilterDropdown',
  filterTagParams = 'filterTagParams',
  weekdays = 'weekdays',
  newsFilterDropdown = 'newsFilterDropdown',
  months = 'months',
  page404 = 'page404',
  page500 = 'page500',
}

export interface UITranslation {
  [Pages.home]: {
    hero: {
      heading: string;
      description: string;
      buyTicketsButtonLabel: string;
    };
    nextEvents: {
      title: string;
      seeAllEventsButton: string;
      buyTicketButtonLabel: string;
      seeMoreInfoButtonLabel: string;
    };
    latestNews: {
      title: string;
      description: string;
      readAllNewsButtonLabel: string;
    };
  };
  [Pages.aboutUs]: Record<string, any>;
  [TranslationAreas.breadcrumbs]: {
    [P in Pages]: string;
  };
  [TranslationAreas.header]: {
    navigation: MenuItem[];
  };
  [TranslationAreas.footer]: {
    contacts: Contact[];
    navigation: FooterNavigationMenu[];
  };
  [Pages.events]: {
    title: string;
    filterDefaults: {
      ALL: string;
      defaultLabel: string;
    };
  };
  [Pages.eventDetails]: {
    share: string;
  };
  [Pages.newsDetails]: {
    share: string;
  };
  [TranslationAreas.buttons]: {
    buyTickets: string;
    readMore: string;
  };
  [TranslationAreas.eventFilterDropdown]: EventsFilterTagTranslations;
  [TranslationAreas.newsFilterDropdown]: NewsFilterTagTranslations;
  [TranslationAreas.weekdays]: {
    sunday: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
  };
  [Pages.news]: {
    title: string;
    filterDefaults: {
      ALL: string;
      defaultLabel: string;
    };
  };
  [TranslationAreas.page404]: {
    title: string;
    message: string;
    backToHomepage: string;
    contactSupport: string;
  };
  [TranslationAreas.months]?: {
    january: string;
    february: string;
    march: string;
    april: string;
    may: string;
    june: string;
    july: string;
    august: string;
    september: string;
    october: string;
    november: string;
    december: string;
  };
  [TranslationAreas.page500]?: Record<string, any>;
}

export type UITranslations = {
  [key in LanguageCode]: UITranslation;
};

const EN_EVENT_FILTER: EventsFilterTagTranslations = {
  [TagType.Ballet]: 'Ballet',
  [TagType.Childrens]: "Children's",
  [TagType.Concerts]: 'Concerts',
  [TagType.Musical]: 'Musical',
  [TagType.Opera]: 'Opera',
  [TagType.Tours]: 'Tours',
};
const EN_NEWS_FILTER: NewsFilterTagTranslations = {
  [NewsTagType.General]: 'General',
  ...EN_EVENT_FILTER,
};

const RU_EVENT_FILTER: EventsFilterTagTranslations = {
  [TagType.Ballet]: 'Балет',
  [TagType.Childrens]: 'Детский',
  [TagType.Concerts]: 'Концерты',
  [TagType.Musical]: 'Мюзикл',
  [TagType.Opera]: 'Опера',
  [TagType.Tours]: 'Гастроли',
};
const RU_NEWS_FILTER: NewsFilterTagTranslations = {
  [NewsTagType.General]: 'Общие',
  ...RU_EVENT_FILTER,
};

const UZ_EVENT_FILTER: EventsFilterTagTranslations = {
  [TagType.Ballet]: 'Balet',
  [TagType.Childrens]: 'Bolalar',
  [TagType.Concerts]: 'Kontsertlar',
  [TagType.Musical]: 'Myuzikl',
  [TagType.Opera]: 'Opera',
  [TagType.Tours]: 'Gastroli',
};
const UZ_NEWS_FILTER: NewsFilterTagTranslations = {
  [NewsTagType.General]: 'Umumiy',
  ...UZ_EVENT_FILTER,
};

export const UI_TRANSLATIONS: UITranslations = {
  [LanguageCode.en]: {
    [Pages.home]: {
      hero: {
        heading: 'Welcome',
        description:
          'to the State Academic Bolshoi Theatre of Uzbekistan named after Alisher Navoi',
        buyTicketsButtonLabel: 'Buy tickets',
      },
      nextEvents: {
        title: 'Next Events',
        seeAllEventsButton: 'See All Events',
        buyTicketButtonLabel: 'Buy tickets',
        seeMoreInfoButtonLabel: 'More info',
      },
      latestNews: {
        title: 'Latest News',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        readAllNewsButtonLabel: 'Read all news',
      },
    },
    [Pages.aboutUs]: {},
    [Pages.news]: {
      title: 'latest news',
      filterDefaults: {
        ALL: 'All',
        defaultLabel: 'Category',
      },
    },
    [Pages.eventDetails]: {
      share: 'Share',
    },
    [Pages.newsDetails]: {
      share: 'Share',
    },
    [TranslationAreas.breadcrumbs]: {
      [Pages.aboutUs]: 'About Us',
      [Pages.events]: 'Events',
      [Pages.home]: 'Home',
      [Pages.eventDetails]: 'Events Details',
      [Pages.news]: 'Latest News',
      [Pages.page404]: '404 Page',
      [Pages.newsDetails]: 'News Details',
      [Pages.team]: 'Team',
      [Pages.heads]: 'Heads',
      [Pages.history]: 'History',
      [Pages.fullName]: 'Full Name',
      [Pages.page500]: '500 Page',
    },
    [TranslationAreas.header]: {
      navigation: [
        {
          name: 'Home',
          href: '/',
        },
        {
          name: 'News',
          href: '/news',
        },
        {
          name: 'About us',
          subItems: [
            {
              name: 'Theatre Etiquette',
              href: '#',
            },
            {
              name: 'History',
              href: '#',
            },
            {
              name: 'Hall layout, prices',
              href: '#',
            },
            {
              name: 'In memoriam',
              href: '#',
            },
          ],
        },
        {
          name: 'Events',
          href: '/events',
        },
      ],
    },
    [TranslationAreas.footer]: {
      contacts: [
        {
          name: 'Ticket office',
          value: '(+99871) 232-19-48',
        },
        {
          name: 'Administrator',
          value: '(+99871) 233-33-36',
        },
        {
          name: 'Deputy Director for the audience',
          value: '(+99871) 233-32-21',
        },
        {
          name: 'Theater address',
          value: 'Zip code 100029. 28, Zarafshon str., Tashkent, Uzbekistan',
        },
        {
          name: 'Phone / fax',
          value: '(+99871) 233-35-28',
        },
        {
          name: 'E-mail',
          value: 'info@gabt.uz, gabtuzb@mail.ru',
        },
      ],
      navigation: [
        {
          heading: 'Events',
          href: '/events',
          categories: [
            {
              name: 'Opera',
              href: '/events?type=OPERA',
            },
            {
              name: 'Ballet',
              href: '/events?type=BALLET',
            },
            {
              name: 'Children`s',
              href: '/events?type=CHILDRENS',
            },
            {
              name: 'Musical',
              href: '/events?type=MUSICAL',
            },
            {
              name: 'Concerts',
              href: '/events?type=CONCERTS',
            },
            {
              name: 'Tours',
              href: '/events?type=TOURS',
            },
          ],
        },
        {
          heading: 'News',
          href: '/news',
          categories: [
            {
              name: 'Opera',
              href: '/news?type=OPERA',
            },
            {
              name: 'Ballet',
              href: '/news?type=BALLET',
            },
            {
              name: 'Children`s',
              href: '/news?type=CHILDRENS',
            },
            {
              name: 'Musical',
              href: '/news?type=MUSICAL',
            },
            {
              name: 'Concerts',
              href: '/news?type=CONCERTS',
            },
            {
              name: 'Tours',
              href: '/news?type=TOURS',
            },
          ],
        },
        {
          heading: 'About us',
          href: '/about-us',
          categories: [
            {
              name: 'Theatre Etiquette',
              href: '#',
            },
            {
              name: 'History',
              href: '#',
            },
            {
              name: 'Hall layout, prices',
              href: '#',
            },
            {
              name: 'In memoriam',
              href: '#',
            },
          ],
        },
      ],
    },
    [Pages.events]: {
      title: 'currently playing',
      filterDefaults: {
        ALL: 'All',
        defaultLabel: 'Event Type',
      },
    },
    [TranslationAreas.buttons]: {
      buyTickets: 'buy tickets',
      readMore: 'read more',
    },
    [TranslationAreas.eventFilterDropdown]: EN_EVENT_FILTER,
    [TranslationAreas.newsFilterDropdown]: EN_NEWS_FILTER,
    [TranslationAreas.weekdays]: {
      sunday: 'Sunday',
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
    },
    [TranslationAreas.page404]: {
      title: '404 Error',
      message:
        'Sorry, the page you are looking for cannot be found. Please check the address or use the buttons below to return to the homepage or contact support for further assistance.',
      backToHomepage: 'BACK TO HOMEPAGE',
      contactSupport: 'CONTACT SUPPORT',
    },
    [TranslationAreas.page500]: {
      title: '500 Service unavailable',
      message:
        'We couldn`t load the data from the server. The service may be temporarily unavailable. Please try again later or contact support if the problem persists.',
      backToHomepage: 'Back to homepage',
      contactSupport: 'Contact support',
    },
  },

  [LanguageCode.ru]: {
    [Pages.home]: {
      hero: {
        heading: 'Добро пожаловать',
        description:
          'в Государственный академический Большой театр Узбекистана имени Алишера Навои',
        buyTicketsButtonLabel: 'Купить билеты',
      },
      nextEvents: {
        title: 'Ближайшие события',
        seeAllEventsButton: 'Все события',
        buyTicketButtonLabel: 'Купить билеты',
        seeMoreInfoButtonLabel: 'Подробнее',
      },
      latestNews: {
        title: 'Последние новости',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        readAllNewsButtonLabel: 'Все новости',
      },
    },
    [Pages.aboutUs]: {},
    [Pages.news]: {
      title: 'последние новости',
      filterDefaults: {
        ALL: 'Все',
        defaultLabel: 'Категория',
      },
    },
    [Pages.eventDetails]: {
      share: 'Поделиться',
    },
    [Pages.newsDetails]: {
      share: 'Поделиться',
    },
    [TranslationAreas.breadcrumbs]: {
      [Pages.aboutUs]: 'О нас',
      [Pages.events]: 'События',
      [Pages.home]: 'Главная',
      [Pages.eventDetails]: 'Детали события',
      [Pages.news]: 'Последние новости',
      [Pages.page404]: 'Страница 404',
      [Pages.newsDetails]: 'Детали новостей',
      [Pages.team]: 'Команда',
      [Pages.heads]: 'Руководители',
      [Pages.history]: 'История',
      [Pages.fullName]: 'Полное имя',
      [Pages.page500]: 'Страница 500',
    },
    [TranslationAreas.header]: {
      navigation: [
        {
          name: 'Главная',
          href: '/',
        },
        {
          name: 'Новости',
          href: '/news',
        },
        {
          name: 'О нас',
          subItems: [
            {
              name: 'Этикет театра',
              href: '#',
            },
            {
              name: 'История театра',
              href: '#',
            },
            {
              name: 'Схема зала, цены',
              href: '#',
            },
            {
              name: 'In memoriam',
              href: '#',
            },
          ],
        },
        {
          name: 'События',
          href: '/events',
        },
      ],
    },
    [TranslationAreas.footer]: {
      contacts: [
        {
          name: 'Касса театра',
          value: '(+99871) 232-19-48',
        },
        {
          name: 'Главный администратор',
          value: '(+99871) 233-33-36',
        },
        {
          name: 'Заместитель директора по зрителям',
          value: '(+99871) 233-32-21',
        },
        {
          name: 'Адрес театра',
          value: '100029, Узбекистан, г. Ташкент, ул. Зарафшан, 28',
        },
        {
          name: 'Тел./факс',
          value: '(+99871) 233-35-28',
        },
        {
          name: 'E-mail',
          value: 'info@gabt.uz, gabtuzb@mail.ru',
        },
      ],
      navigation: [
        {
          heading: 'События',
          href: '/events',
          categories: [
            {
              name: 'Опера',
              href: '/events?type=OPERA',
            },
            {
              name: 'Балет',
              href: '/events?type=BALLET',
            },
            {
              name: 'Детский',
              href: '/events?type=CHILDRENS',
            },
            {
              name: 'Мюзикл',
              href: '/events?type=MUSICAL',
            },
            {
              name: 'Концерты',
              href: '/events?type=CONCERTS',
            },
            {
              name: 'Гастроли',
              href: '/events?type=TOURS',
            },
          ],
        },
        {
          heading: 'Новости',
          href: '/news',
          categories: [
            {
              name: 'Опера',
              href: '/news?type=OPERA',
            },
            {
              name: 'Балет',
              href: '/news?type=BALLET',
            },
            {
              name: 'Детский',
              href: '/news?type=CHILDRENS',
            },
            {
              name: 'Мюзикл',
              href: '/news?type=MUSICAL',
            },
            {
              name: 'Концерты',
              href: '/news?type=CONCERTS',
            },
            {
              name: 'Гастроли',
              href: '/news?type=TOURS',
            },
          ],
        },
        {
          heading: 'О нас',
          href: '/about-us',
          categories: [
            {
              name: 'Этикет театра',
              href: '#',
            },
            {
              name: 'История театра',
              href: '#',
            },
            {
              name: 'Схема зала, цены',
              href: '#',
            },
            {
              name: 'In memoriam',
              href: '#',
            },
          ],
        },
      ],
    },
    [Pages.events]: {
      title: 'сейчас в репертуаре',
      filterDefaults: {
        ALL: 'Все',
        defaultLabel: 'Тип события',
      },
    },
    [TranslationAreas.buttons]: {
      buyTickets: 'купить билеты',
      readMore: 'подробнее',
    },
    [TranslationAreas.eventFilterDropdown]: RU_EVENT_FILTER,
    [TranslationAreas.newsFilterDropdown]: RU_NEWS_FILTER,
    [TranslationAreas.weekdays]: {
      sunday: 'Воскресенье',
      monday: 'Понедельник',
      tuesday: 'Вторник',
      wednesday: 'Среда',
      thursday: 'Четверг',
      friday: 'Пятница',
      saturday: 'Суббота',
    },
    [TranslationAreas.page404]: {
      title: '404 Ошибка',
      message:
        'К сожалению, страница, которую вы ищете, не найдена. Пожалуйста, проверьте адрес или используйте кнопки ниже, чтобы вернуться на главную страницу или обратиться в службу поддержки для получения дополнительной помощи.',
      backToHomepage: 'ВЕРНУТЬСЯ НА ГЛАВНУЮ',
      contactSupport: 'СВЯЗАТЬСЯ С ПОДДЕРЖКОЙ',
    },
    [TranslationAreas.page500]: {
      title: '500 Сервис недоступен',
      message:
        'Не удалось загрузить данные с сервера. Сервис может быть временно недоступен. Пожалуйста, попробуйте позже или свяжитесь со службой поддержки, если проблема сохраняется.',
      backToHomepage: 'На главную',
      contactSupport: 'Связаться с поддержкой',
    },
  },

  [LanguageCode.uz]: {
    [Pages.home]: {
      hero: {
        heading: 'Xush kelibsiz',
        description:
          'Alisher Navoiy nomidagi Oʻzbekiston Davlat akademik katta teatriga',
        buyTicketsButtonLabel: 'Chiptalarni sotib olish',
      },
      nextEvents: {
        title: 'Keyingi tadbirlar',
        seeAllEventsButton: 'Bsarcha voqealar',
        buyTicketButtonLabel: 'chipta',
        seeMoreInfoButtonLabel: "Batafsil ma'lumot",
      },
      latestNews: {
        title: 'So‘nggi yangiliklar',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        readAllNewsButtonLabel: 'Barcha yangiliklar',
      },
    },
    [TranslationAreas.breadcrumbs]: {
      [Pages.aboutUs]: 'Biz haqimizda',
      [Pages.events]: 'Tadbirlar',
      [Pages.home]: 'Bosh sahifa',
      [Pages.eventDetails]: 'Tadbir tafsilotlari',
      [Pages.news]: 'Soʻnggi yangiliklar',
      [Pages.page404]: '404 sahifa',
      [Pages.newsDetails]: 'Yangiliklar tafsilotlari',
      [Pages.team]: 'Jamoa',
      [Pages.heads]: 'Rahbarlar',
      [Pages.history]: 'Tarix',
      [Pages.fullName]: 'Toʻliq ism',
      [Pages.page500]: '500 sahifa',
    },
    [TranslationAreas.header]: {
      navigation: [
        {
          name: 'Bosh sahifa',
          href: '/',
        },
        {
          name: 'Yangiliklar',
          href: '/news',
        },
        {
          name: 'Biz haqimizda',
          subItems: [
            {
              name: 'Teatr odob-axloq qoidalari',
              href: '#',
            },
            {
              name: 'Teatr tarixi',
              href: '#',
            },
            {
              name: 'Zalning joylashuvi, narxlar',
              href: '#',
            },
            {
              name: 'In memoriam',
              href: '#',
            },
          ],
        },
        {
          name: 'Tadbirlar',
          href: '/events',
        },
      ],
    },
    [TranslationAreas.footer]: {
      contacts: [
        {
          name: 'Teatr kassasi',
          value: '(+99871) 232-19-48',
        },
        {
          name: 'Bosh ma`mur',
          value: '(+99871) 233-33-36',
        },
        {
          name: 'Tomoshabinlar bo`yicha direktor o`rinbosari',
          value: '(+99871) 233-32-21',
        },
        {
          name: 'Teatrning manzili',
          value: '100029, Oʻzbekiston, Toshkent, koʻch. Zarafshon, 28',
        },
        {
          name: 'Tel./Faks',
          value: '(+99871) 233-35-28',
        },
        {
          name: 'E-mail',
          value: 'info@gabt.uz, gabtuzb@mail.ru',
        },
      ],
      navigation: [
        {
          heading: 'Tadbirlar',
          href: '/events',
          categories: [
            {
              name: 'Opera',
              href: '/events?type=OPERA',
            },
            {
              name: 'Balet',
              href: '/events?type=BALLET',
            },
            {
              name: 'Bolalar uchun',
              href: '/events?type=CHILDRENS',
            },
            {
              name: 'Musiqiy',
              href: '/events?type=MUSICAL',
            },
            {
              name: 'Konsertlar',
              href: '/events?type=CONCERTS',
            },
            {
              name: 'Sayohat',
              href: '/events?type=TOURS',
            },
          ],
        },
        {
          heading: 'Yangiliklar',
          href: '/news',
          categories: [
            {
              name: 'Opera',
              href: '/news?type=OPERA',
            },
            {
              name: 'Balet',
              href: '/news?type=BALLET',
            },
            {
              name: 'Bolalar uchun',
              href: '/news?type=CHILDRENS',
            },
            {
              name: 'Musiqiy',
              href: '/news?type=MUSICAL',
            },
            {
              name: 'Konsertlar',
              href: '/news?type=CONCERTS',
            },
            {
              name: 'Sayohat',
              href: '/news?type=TOURS',
            },
          ],
        },
        {
          heading: 'Biz haqimizda',
          href: '/about-us',
          categories: [
            {
              name: 'Teatr odob-axloq qoidalari',
              href: '#',
            },
            {
              name: 'Teatr tarixi',
              href: '#',
            },
            {
              name: 'Zalning joylashuvi, narxlar',
              href: '#',
            },
            {
              name: 'In memoriam',
              href: '#',
            },
          ],
        },
      ],
    },
    [Pages.events]: {
      title: 'hozir sahnada',
      filterDefaults: {
        ALL: 'Hammasi',
        defaultLabel: 'Tadbir turi',
      },
    },
    [TranslationAreas.buttons]: {
      buyTickets: 'chipta sotib olish',
      readMore: 'batafsil',
    },
    [TranslationAreas.eventFilterDropdown]: UZ_EVENT_FILTER,
    [TranslationAreas.newsFilterDropdown]: UZ_NEWS_FILTER,
    [Pages.aboutUs]: {},
    [Pages.news]: {
      title: "so'nggi yangiliklar",
      filterDefaults: {
        ALL: 'Hammasi',
        defaultLabel: 'Kategoriya',
      },
    },
    [Pages.eventDetails]: {
      share: 'Ulashish',
    },
    [Pages.newsDetails]: {
      share: 'Ulashish',
    },
    [TranslationAreas.weekdays]: {
      sunday: 'Yakshanba',
      monday: 'Dushanba',
      tuesday: 'Seshanba',
      wednesday: 'Chorshanba',
      thursday: 'Payshanba',
      friday: 'Juma',
      saturday: 'Shanba',
    },
    [TranslationAreas.page404]: {
      title: '404 Xato',
      message:
        "Kechirasiz, siz qidirayotgan sahifa topilmadi. Iltimos, manzilni tekshiring yoki bosh sahifaga qaytish yoki qo'shimcha yordam uchun qo'llab-quvvatlash xizmatiga murojaat qilish uchun quyidagi tugmalardan foydalaning.",
      backToHomepage: 'BOSH SAHIFAGA QAYTISH',
      contactSupport: 'QOʻLLAB-QUVVATLASH',
    },
    [TranslationAreas.page500]: {
      title: '500 Xizmat vaqtincha mavjud emas',
      message:
        'Serverdan maʼlumotlarni yuklab bo‘lmadi. Xizmat vaqtincha ishlamayotgan bo‘lishi mumkin. Iltimos, keyinroq urinib ko‘ring yoki muammo saqlanib qolsa, qo‘llab-quvvatlash xizmatiga murojaat qiling.',
      backToHomepage: 'Bosh sahifaga qaytish',
      contactSupport: 'Qo‘llab-quvvatlash bilan bog‘lanish',
    },
    [TranslationAreas.months]: {
      january: 'yanvar',
      february: 'fevral',
      march: 'mart',
      april: 'aprel',
      may: 'may',
      june: 'iyun',
      july: 'iyul',
      august: 'avgust',
      september: 'sentabr',
      october: 'oktabr',
      november: 'noyabr',
      december: 'dekabr',
    },
  },
};

export type DatePart = {
  type: 'weekday' | 'month' | 'day' | 'year' | 'literal';
  value: string;
};

export interface DateDetails {
  weekday: string;
  month: string;
  day: string;
  year: string;
}
