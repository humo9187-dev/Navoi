import { NewsDTO, NewsTagType } from '@navoiy-workspace/types';

export const mockNews: NewsDTO[] = [
  {
    newsId: 'b1cda604-f8ea-437c-9314-c3955958a3e5',
    content: {
      en: {
        title: 'Ballet Season Grand Opening',
        shortDescription:
          'Navoi Theatre opens the ballet season with a gala performance.',
        encodedHtmlContent:
          'PHA+QmFsbGV0IHNlYXNvbiBiZWdpbnMgd2l0aCBhIGxpdmUgb3JjaGVzdHJhIGFuZCBuZXcgY2hvcmVvZ3JhcGh5LjwvcD4=',
      },
      ru: {
        title: 'Торжественное открытие балетного сезона',
        shortDescription: 'Театр Навои открывает сезон гала-концертом.',
        encodedHtmlContent:
          'PHA+0J3QsNGH0LDQu9C+INGB0LXQt9C+0L3QsCDRgSDQttC40LLRi9C8INC+0YDQutC10YHRgtGA0L7QvCDQuCDQvdC+0LLQvtC5INGF0L7RgNC10L7Qs9GA0LDRhNC40LXQuS48L3A+',
      },
      uz: {
        title: 'Balet mavsumi tantanali ochilishi',
        shortDescription: 'Navoiy teatri balet mavsumini gala bilan ochadi.',
        encodedHtmlContent:
          'PHA+T3JrZXN0ciBoYW1yb2hsaWdpZGFnaSB5YW5naSBiYWxldCBwcmVteWVyYWxhcmkuPC9wPg==',
      },
    },
    images: [
      {
        fileId: 'img-001',
        link: 'https://i.ytimg.com/vi/yyeR-gPakWo/maxresdefault.jpg',
      },
    ],
    publicationDate: '2025-01-10T15:30:00Z',
    tags: [NewsTagType.Ballet, NewsTagType.Concerts, NewsTagType.General],
    author: 'Amelia Hart',
    uiProperties: { featured: true },
    isVisibleToVisitors: false,
  },
  {
    newsId: '65c4eb68-b1c5-40c1-9241-567f50fbb169',
    content: {
      en: {
        title: 'New Year Opera Gala',
        shortDescription: 'A celebratory opera event to welcome the New Year.',
        encodedHtmlContent:
          'PHA+ClRoZSBiYWxsZXQg4oCcVGhlIEZvdW50YWluIG9mIEJha2hjaGlzYXJhaeKAnSBpcyBvbmUgb2YgdGhlIG1vc3QgZXhwcmVzc2l2ZQpwcm9kdWN0aW9ucyBpbiB0aGUgY2xhc3NpY2FsIHJlcGVydG9pcmUgb2YgdGhlIHRoZWF0cmUuIEl0cyBkcmFtYXRpYwpzdG9yeXRlbGxpbmcgYW5kIGVtb3Rpb25hbCBkZXB0aCBoYXZlIGNhcHRpdmF0ZWQgYXVkaWVuY2VzIGZvciBkZWNhZGVzLiBJbnNwaXJlZCBieSBBbGV4YW5kZXIgUHVzaGtpbuKAmXMgcG9lbSwgdGhlIHBlcmZvcm1hbmNlIHVuZm9sZHMgYSB0cmFnaWMKbG92ZSBzdG9yeSBmaWxsZWQgd2l0aCBqZWFsb3VzeSwgc2FjcmlmaWNlLCBhbmQgZGVzdGlueS4gRWFjaCBzY2VuZQpyZXZlYWxzIHRoZSBmcmFnaWxlIGJhbGFuY2UgYmV0d2VlbiBwYXNzaW9uIGFuZCBob25vci4KPC9wPgo8cD4KVGhlIGNob3Jlb2dyYXBoeSBjb21iaW5lcyByZWZpbmVkIGNsYXNzaWNhbCB0ZWNobmlxdWUgd2l0aCBwb3dlcmZ1bApkcmFtYXRpYyBnZXN0dXJlcy4gVGhyb3VnaCBtb3ZlbWVudCwgdGhlIGRhbmNlcnMgY29udmV5IGVtb3Rpb25zIHRoYXQKd29yZHMgYWxvbmUgY2Fubm90IGV4cHJlc3MsIGNyZWF0aW5nIGEgZGVlcGx5IGltbWVyc2l2ZSBleHBlcmllbmNlLiBUaGUgcHJpbmNpcGFsIGNoYXJhY3RlcnMgYXJlIHJldmVhbGVkIHRocm91Z2ggc3VidGxlIHZhcmlhdGlvbnMgaW4KbW92ZW1lbnQgYW5kIHJoeXRobS4gVGhlaXIgaW50ZXJuYWwgY29uZmxpY3RzIGFyZSByZWZsZWN0ZWQgbm90IG9ubHkKaW4gbmFycmF0aXZlIGFjdGlvbnMgYnV0IGFsc28gaW4gdGhlIHNtYWxsZXN0IGNob3Jlb2dyYXBoaWMgZGV0YWlscy4KPC9wPgo8cD4KQm9yaXMgQXNhZmllduKAmXMgbXVzaWMgcGxheXMgYSBjcnVjaWFsIHJvbGUgaW4gc2hhcGluZyB0aGUgYXRtb3NwaGVyZQpvZiB0aGUgcGVyZm9ybWFuY2UuIFRoZSBzY29yZSBpbnRlbnNpZmllcyB0aGUgZW1vdGlvbmFsIHRlbnNpb24gYW5kCnN1cHBvcnRzIHRoZSB1bmZvbGRpbmcgZHJhbWEgb24gc3RhZ2Ugd2l0aCByZW1hcmthYmxlIHByZWNpc2lvbi4gVGhlIG9yY2hlc3RyYeKAmXMgZHluYW1pYyBpbnRlcnByZXRhdGlvbiBhbGxvd3MgdGhlIG11c2ljIHRvIGJyZWF0aGUsCmd1aWRpbmcgdGhlIGF1ZGllbmNlIHRocm91Z2ggbW9tZW50cyBvZiB0ZW5kZXJuZXNzLCBkZXNwYWlyLCBhbmQKaW5ldml0YWJsZSB0cmFnZWR5LiBTb3VuZCBhbmQgbW90aW9uIG1lcmdlIGludG8gYSBzaW5nbGUgZXhwcmVzc2l2ZSBmb3JtLgo8L3A+CjxwPgpUaGUgdmlzdWFsIGVsZW1lbnRzIG9mIHRoZSBwcm9kdWN0aW9uIOKAlCBjb3N0dW1lcywgbGlnaHRpbmcsIGFuZCBzZXQKZGVzaWduIOKAlCBjcmVhdGUgYSB2aXZpZCBhbmQgaW1tZXJzaXZlIHdvcmxkLiBFdmVyeSBkZXRhaWwgY29udHJpYnV0ZXMKdG8gdGhlIGF1dGhlbnRpY2l0eSBvZiB0aGUgaGlzdG9yaWNhbCBzZXR0aW5nIGFuZCBlbW90aW9uYWwgdG9uZS4KPC9wPgo8cD4KVGhlIHZpc3VhbCBlbGVtZW50cyBvZiB0aGUgcHJvZHVjdGlvbiDigJQgY29zdHVtZXMsIGxpZ2h0aW5nLCBhbmQgc2V0CmRlc2lnbiDigJQgY3JlYXRlIGEgdml2aWQgYW5kIGltbWVyc2l2ZSB3b3JsZC4gRXZlcnkgZGV0YWlsIGNvbnRyaWJ1dGVzCnRvIHRoZSBhdXRoZW50aWNpdHkgb2YgdGhlIGhpc3RvcmljYWwgc2V0dGluZyBhbmQgZW1vdGlvbmFsIHRvbmUuIE92ZXIgdGhlIHllYXJzLCDigJxUaGUgRm91bnRhaW4gb2YgQmFraGNoaXNhcmFp4oCdIGhhcyBiZWNvbWUgYSBzeW1ib2wgb2YKYXJ0aXN0aWMgZXhjZWxsZW5jZS4gVGhlIGJhbGxldCByZW1haW5zIGEgY29ybmVyc3RvbmUgb2YgdGhlIHRoZWF0cmXigJlzCmlkZW50aXR5IGFuZCBjb250aW51ZXMgdG8gaW5zcGlyZSBuZXcgZ2VuZXJhdGlvbnMgb2YgYXVkaWVuY2VzLgo8L3A+',
      },
      ru: {
        title: 'Новогодний оперный гала',
        shortDescription: 'Праздничный оперный вечер.',
        encodedHtmlContent:
          'PHA+0KHQvtC70LjRgdGC0Ysg0LjRgdC/0L7Qu9C90Y/RjtGCINC30L3QsNC60L7QstGL0LUg0LDRgNC40LguPC9wPg==',
      },
      uz: {
        title: 'Yangi yil opera gala kechasi',
        shortDescription: 'Bayramona opera dasturi.',
        encodedHtmlContent:
          'PHA+TWFzaGh1ciBvcGVyYSBhcml5YWxhcmkgaWpybyBldGlsYWRpLjwvcD4=',
      },
    },
    images: [
      {
        fileId: 'img-002',
        link: 'https://i.ytimg.com/vi/yyeR-gPakWo/maxresdefault.jpg',
      },
    ],
    publicationDate: '2025-01-01T18:00:00+05:00',
    tags: [NewsTagType.Opera, NewsTagType.Concerts],
    author: 'Daniel Rivers',
    uiProperties: { views: 5400 },
    isVisibleToVisitors: false,
  },
  {
    newsId: 'e0edcab5-2be9-4957-b7c1-3ce2bdcdc4cd',
    content: {
      en: {
        title: 'Behind the Velvet Curtain',
        shortDescription: 'Exclusive backstage tour now available.',
        encodedHtmlContent:
          'PHA+RXhwbG9yZSBzdGFnZSBzZWNyZXRzIGFuZCB3b3Jrc2hvcHMuPC9wPg==',
      },
      ru: {
        title: 'За бархатным занавесом',
        shortDescription: 'Эксклюзивный тур за кулисы.',
        encodedHtmlContent:
          'PHA+0KHQtdC60YDQtdGC0Ysg0YHRhtC10L3RiyDQuCDQvNCw0YHRgtC10YDRgdC60LjQtS48L3A+',
      },
      uz: {
        title: 'Baxmal parda ortida',
        shortDescription: 'Sahna orti ekskursiyasi.',
        encodedHtmlContent:
          'PHA+U2FobmEgbWV4YW5pem1sYXJpIHZhIHVzdGF4b25hbGFyLjwvcD4=',
      },
    },
    images: [
      {
        fileId: 'img-003',
        link: 'https://i.ytimg.com/vi/yyeR-gPakWo/maxresdefault.jpg',
      },
    ],
    publicationDate: '2025-02-20T09:15:00Z',
    tags: [NewsTagType.Tours],
    author: 'Lila Monroe',
    uiProperties: { duration: '90m' },
    isVisibleToVisitors: false,
  },
  {
    newsId: '0e575e4d-cc4b-4b6b-90ca-175105aa022b',
    content: {
      en: {
        title: 'Premiere: "Lazgi Spirit"',
        shortDescription: 'A new national ballet interpretation.',
        encodedHtmlContent:
          'PHA+SW5zcGlyZWQgYnkgVXpiZWsgdHJhZGl0aW9uYWwgZGFuY2UuPC9wPg==',
      },
      ru: {
        title: 'Премьера: "Дух Лазги"',
        shortDescription: 'Новая балетная интерпретация.',
        encodedHtmlContent:
          'PHA+0J3QsCDQvtGB0L3QvtCy0LUg0YPQt9Cx0LXQutGB0LrQvtCz0L4g0YLRgNCw0LTQuNGG0LjQvtC90L3QvtCz0L4g0YLQsNC90YbQsC48L3A+',
      },
      uz: {
        title: 'Premyera: "Lazgi ruhi"',
        shortDescription: 'Milliy raqs asosidagi yangi balet.',
        encodedHtmlContent:
          'PHA+QW7igJlhbmF2aXkgTGF6Z2kgaGFyYWthdGxhcmkgc2FobmFkYS48L3A+',
      },
    },
    images: [
      {
        fileId: 'img-004',
        link: 'https://i.ytimg.com/vi/yyeR-gPakWo/maxresdefault.jpg',
      },
    ],
    publicationDate: '2025-03-05T14:45:00Z',
    tags: [NewsTagType.Ballet],
    author: 'Marcus Dale',
    uiProperties: {},
    isVisibleToVisitors: false,
  },
  {
    newsId: '5679434e-59f6-4b7d-9e37-f9a6f8e68974',
    content: {
      en: {
        title: 'Family Opera Day',
        shortDescription: 'Opera scenes adapted for kids and families.',
        encodedHtmlContent:
          'PHA+QSBnZW50bGUgaW50cm9kdWN0aW9uIHRvIG9wZXJhIGZvciB5b3VuZyBhdWRpZW5jZXMuPC9wPg==',
      },
      ru: {
        title: 'Семейный оперный день',
        shortDescription: 'Опера для детей и семей.',
        encodedHtmlContent:
          'PHA+0JfQvdCw0LrQvtC80YHRgtCy0L4g0YEg0L7Qv9C10YDQvtC5INC00LvRjyDRjtC90YvRhSDQt9GA0LjRgtC10LvQtdC5LjwvcD4=',
      },
      uz: {
        title: 'Oilaviy opera kuni',
        shortDescription: 'Bolalar uchun opera sahnalari.',
        encodedHtmlContent: 'PHA+T3BlcmEgb2xhbWlnYSBpbGsgcWFkYW0uPC9wPg==',
      },
    },
    images: [
      {
        fileId: 'img-005',
        link: 'https://i.ytimg.com/vi/yyeR-gPakWo/maxresdefault.jpg',
      },
    ],
    publicationDate: '2025-03-18T11:00:00+05:00',
    tags: [NewsTagType.Childrens, NewsTagType.Opera],
    author: 'Elina Frost',
    uiProperties: { recommendedAge: '5+' },
    isVisibleToVisitors: false,
  },
  {
    newsId: '769a51e4-9fdb-4036-a717-aa193d86f21a',
    content: {
      en: {
        title: 'Navoi Orchestra Live Concert',
        shortDescription: 'Symphonic concert inside the main hall.',
        encodedHtmlContent: 'PHA+RnVsbCBzeW1waG9ueSByZXBlcnRvaXJlLjwvcD4=',
      },
      ru: {
        title: 'Живой концерт оркестра',
        shortDescription: 'Симфонический концерт в главном зале.',
        encodedHtmlContent:
          'PHA+0J/QvtC70L3Ri9C5INGB0LjQvNGE0L7QvdC40YfQtdGB0LrQuNC5INGA0LXQv9C10YDRgtGD0LDRgC48L3A+',
      },
      uz: {
        title: 'Simfonik orkestr jonli konserti',
        shortDescription: 'Bosh zalda simfoniya sehrlari.',
        encodedHtmlContent: 'PHA+QnV5dWsgYXNhcmxhciBpanJvIGV0aWxhZGkuPC9wPg==',
      },
    },
    images: [
      {
        fileId: 'img-006',
        link: 'https://i.ytimg.com/vi/yyeR-gPakWo/maxresdefault.jpg',
      },
    ],
    publicationDate: '2025-04-22T19:20:30.000+05:00',
    tags: [NewsTagType.Concerts],
    author: 'Noah Bennett',
    uiProperties: { acoustics: 'dolby-style-mix' },
    isVisibleToVisitors: false,
  },
  {
    newsId: '42cd42e0-8dbe-493f-a8dc-82898eea7e23',
    content: {
      en: {
        title: 'Spring Ballet for Students',
        shortDescription: 'Discounted season tickets for students.',
        encodedHtmlContent:
          'PHA+U3BlY2lhbCBzcHJpbmcgcHJvZ3JhbSBmb3IgeW91dGguPC9wPg==',
      },
      ru: {
        title: 'Весенний балет для студентов',
        shortDescription: 'Скидочные билеты.',
        encodedHtmlContent:
          'PHA+0JzQvtC70L7QtNC10LbQvdCw0Y8g0L/RgNC+0LPRgNCw0LzQvNCwLjwvcD4=',
      },
      uz: {
        title: 'Talabalar uchun bahor baleti',
        shortDescription: 'Yoshlar uchun chiptalar imtiyozi.',
        encodedHtmlContent: 'PHA+QmFob3IgbWF2c3VtaSBkYXN0dXJpLjwvcD4=',
      },
    },
    images: [
      {
        fileId: 'img-007',
        link: 'https://i.ytimg.com/vi/yyeR-gPakWo/maxresdefault.jpg',
      },
    ],
    publicationDate: '2025-04-12T08:00:00Z',
    tags: [NewsTagType.Ballet],
    author: 'Clara Whitmore',
    uiProperties: {},
    isVisibleToVisitors: false,
  },
  {
    newsId: '74968e4a-e97c-4435-8642-c6a922c0b086',
    content: {
      en: {
        title: 'World Opera Stars on Navoi Stage',
        shortDescription: 'International voices perform at Navoi.',
        encodedHtmlContent:
          'PHA+R2xvYmFsIG9wZXJhIHNvbG9pc3RzIGNvbmNlcnQuPC9wPg==',
      },
      ru: {
        title: 'Мировые оперные звезды на сцене Навои',
        shortDescription: 'Международное событие.',
        encodedHtmlContent:
          'PHA+0JPQu9C+0LHQsNC70YzQvdGL0Lkg0L7Qv9C10YDQvdGL0Lkg0LrQvtC90YbQtdGA0YIuPC9wPg==',
      },
      uz: {
        title: 'Jahon opera yulduzlari Navoiy sahnasida',
        shortDescription: 'Xalqaro opera oqshomi.',
        encodedHtmlContent: 'PHA+RHVueW8gb3ZvemxhcmkgYmlyIHNhaG5hZGEuPC9wPg==',
      },
    },
    images: [
      {
        fileId: 'img-008',
        link: 'https://i.ytimg.com/vi/yyeR-gPakWo/maxresdefault.jpg',
      },
    ],
    publicationDate: '2025-05-29T20:19:00Z',
    tags: [NewsTagType.Opera, NewsTagType.Concerts],
    author: 'Isaac Cole',
    uiProperties: { highlight: 'stars' },
    isVisibleToVisitors: false,
  },
  {
    newsId: 'f984e06b-d901-468d-8752-a8328378af4c',
    content: {
      en: {
        title: '"Aladdin" Kids Musical',
        shortDescription: 'Famous tale recreated as a musical.',
        encodedHtmlContent:
          'PHA+QSBicmlnaHQgbXVzaWNhbCBmb3IgY2hpbGRyZW4uPC9wPg==',
      },
      ru: {
        title: 'Детский мюзикл "Аладдин"',
        shortDescription: 'Сказка в формате мюзикла.',
        encodedHtmlContent:
          'PHA+0K/RgNC60LjQuSDRgdC/0LXQutGC0LDQutC70Ywg0LTQu9GPINC00LXRgtC10LkuPC9wPg==',
      },
      uz: {
        title: 'Bolalar myuzikli "Aladdin"',
        shortDescription: 'Ertak myuzikl sahnasida.',
        encodedHtmlContent: 'PHA+U2VocmxpIG11c2lxYWxpIHNob3UuPC9wPg==',
      },
    },
    images: [
      {
        fileId: 'img-009',
        link: 'https://i.ytimg.com/vi/yyeR-gPakWo/maxresdefault.jpg',
      },
    ],
    publicationDate: '2025-06-01T10:00:00+05:00',
    tags: [NewsTagType.Childrens, NewsTagType.Musical],
    author: 'Zara Ellington',
    uiProperties: { soldOut: false },
    isVisibleToVisitors: false,
  },
  {
    newsId: 'de3272e4-b127-4c5c-b5c6-f9bd50c43b83',
    content: {
      en: {
        title: 'Architectural Day Tour',
        shortDescription: 'Learn about the theatre’s design.',
        encodedHtmlContent:
          'PHA+TmF2b2kgaXMgYSBqZXdlbCBvZiBhcmNoaXRlY3R1cmUuPC9wPg==',
      },
      ru: {
        title: 'Архитектурный тур',
        shortDescription: 'История архитектуры театра.',
        encodedHtmlContent:
          'PHA+0J3QsNCy0L7QuCDigJQg0LDRgNGF0LjRgtC10LrRgtGD0YDQvdCw0Y8g0LbQtdC80YfRg9C20LjQvdCwLjwvcD4=',
      },
      uz: {
        title: 'Arxitektura bo‘ylab kunlik tur',
        shortDescription: 'Teatr dizayn tarixiga sayohat.',
        encodedHtmlContent: 'PHA+TmF2b2l5IG1l4oCZbW9yaXkgZHVyZG9uYS48L3A+',
      },
    },
    images: [
      {
        fileId: 'img-010',
        link: 'https://i.ytimg.com/vi/yyeR-gPakWo/maxresdefault.jpg',
      },
    ],
    publicationDate: '2025-06-10T13:55:00Z',
    tags: [NewsTagType.Tours],
    author: 'Julian Cross',
    uiProperties: {},
    isVisibleToVisitors: false,
  },
  {
    newsId: 'c4405792-0385-4ad4-a9e7-a24e23cec36a',
    content: {
      en: {
        title: 'Evening Jazz Concert',
        shortDescription: 'Jazz night experiment in theatre walls.',
        encodedHtmlContent:
          'PHA+QSByYXJlIGdlbnJlIGluIGNsYXNzaWMgaGFsbHMhPC9wPg==',
      },
      ru: {
        title: 'Вечерний джазовый концерт',
        shortDescription: 'Эксперимент в классическом зале.',
        encodedHtmlContent:
          'PHA+0KDQtdC00LrQuNC5INC20LDQvdGAINCyINC60LvQsNGB0YHQuNGH0LXRgdC60L7QvCDQt9Cw0LvQtSE8L3A+',
      },
      uz: {
        title: 'Kechki jazz konserti',
        shortDescription: 'Klassik devorlarda jazz.',
        encodedHtmlContent: 'PHA+S3V0aWxtYWdhbiBtdXNpcWl5IG9xc2hvbS48L3A+',
      },
    },
    images: [
      {
        fileId: 'img-011',
        link: 'https://i.ytimg.com/vi/yyeR-gPakWo/maxresdefault.jpg',
      },
    ],
    publicationDate: '2025-07-17T19:00:00Z',
    tags: [NewsTagType.Concerts],
    author: 'Sophie Langford',
    uiProperties: { experimental: true },
    isVisibleToVisitors: false,
  },
  {
    newsId: 'a6a4bdc3-9ba1-4eb2-8173-825cfe3ab2b3',
    content: {
      en: {
        title: 'Open Rehearsal: Opera',
        shortDescription: 'Watch how opera is polished before premiere.',
        encodedHtmlContent:
          'PHA+RmVlbCB0aGUgY3JlYXRpdmUgcHJvY2VzcyBsaXZlLjwvcD4=',
      },
      ru: {
        title: 'Открытая репетиция оперы',
        shortDescription: 'Смотри, как создается опера.',
        encodedHtmlContent:
          'PHA+0KLQstC+0YDRh9C10YHQutC40Lkg0L/RgNC+0YbQtdGB0YEg0LLQttC40LLRg9GOLjwvcD4=',
      },
      uz: {
        title: 'Opera premyerasi oldi ochiq repetitsiya',
        shortDescription: 'Ijod jarayoniga nazar.',
        encodedHtmlContent: 'PHA+Sm9ubGkgcmVwZXRpdHNpeWEgdGFqcmliYXNpLjwvcD4=',
      },
    },
    images: [
      {
        fileId: 'img-012',
        link: 'https://i.ytimg.com/vi/yyeR-gPakWo/maxresdefault.jpg',
      },
    ],
    publicationDate: '2025-08-03T16:10:00+05:00',
    tags: [NewsTagType.Opera, NewsTagType.Tours],
    author: 'Caleb Armstrong',
    uiProperties: {},
    isVisibleToVisitors: false,
  },
  {
    newsId: 'd0d7b2ed-0145-4c31-9817-4800bb9bebfe',
    content: {
      en: {
        title: 'Summer Opera Workshops',
        shortDescription: 'Training series for aspiring singers.',
        encodedHtmlContent:
          'PHA+TWFzdGVyY2xhc3NlcyBhbmQgYnJlYXRoaW5nIHRlY2huaXF1ZXMuPC9wPg==',
      },
      ru: {
        title: 'Летние оперные мастер-классы',
        shortDescription: 'Серия обучающих занятий.',
        encodedHtmlContent:
          'PHA+0JzQsNGB0YLQtdGALdC60LvQsNGB0YHRiyDQuCDQtNGL0YXQsNGC0LXQu9GM0L3Ri9C1INC/0YDQsNC60YLQuNC60LguPC9wPg==',
      },
      uz: {
        title: 'Yozgi opera mahorat darslari',
        shortDescription: 'Opera ashulachilari uchun treninglar.',
        encodedHtmlContent: 'PHA+TmFmYXMgdmEgb3ZveiBuYXpvcmF0aS48L3A+',
      },
    },
    images: [
      {
        fileId: 'img-013',
        link: 'https://i.ytimg.com/vi/yyeR-gPakWo/maxresdefault.jpg',
      },
    ],
    publicationDate: '2025-08-14T10:00:00Z',
    tags: [NewsTagType.Opera],
    author: 'Victoria Hale',
    uiProperties: { season: 'summer' },
    isVisibleToVisitors: false,
  },
  {
    newsId: '9afe5c94-dac0-4731-90fd-4884d46ca950',
    content: {
      en: {
        title: 'Classic Musical Concert',
        shortDescription: 'Musical highlights performed with orchestra.',
        encodedHtmlContent:
          'PHA+QmVsb3ZlZCBtdXNpY2FsIGhpdHMgaW4gc3ltcGhvbmljIHNvdW5kLjwvcD4=',
      },
      ru: {
        title: 'Концерт классических мюзиклов',
        shortDescription: 'Лучшие хиты с оркестром.',
        encodedHtmlContent:
          'PHA+0KHQuNC80YTQvtC90LjRh9C10YHQutC+0LUg0LfQstGD0YfQsNC90LjQtSDQu9GO0LHQuNC80YvRhSDRhdC40YLQvtCyLjwvcD4=',
      },
      uz: {
        title: 'Klassik myuzikllar konserti',
        shortDescription: 'Sevgan hitlar orkestrda.',
        encodedHtmlContent: 'PHA+U2ltZm9uaWsgb2hhbmdkYS48L3A+',
      },
    },
    images: [
      {
        fileId: 'img-014',
        link: 'https://i.ytimg.com/vi/yyeR-gPakWo/maxresdefault.jpg',
      },
    ],
    publicationDate: '2025-09-09T12:00:00+05:00',
    tags: [NewsTagType.Musical, NewsTagType.Concerts],
    author: 'Ethan Caldwell',
    uiProperties: {},
    isVisibleToVisitors: false,
  },
  {
    newsId: 'e6da6dbc-a30a-42b2-8e95-20c5e919e3d8',
    content: {
      en: {
        title: 'Ballet Costume Exhibition',
        shortDescription: 'Display of iconic ballet costumes.',
        encodedHtmlContent:
          'PHA+UmFyZSBjb3N0dW1lcyBhbmQgc2tldGNoZXMgcHJlc2VudGVkLjwvcD4=',
      },
      ru: {
        title: 'Выставка балетных костюмов',
        shortDescription: 'Показ культовых костюмов.',
        encodedHtmlContent:
          'PHA+0JrQvtGB0YLRjtC80Ysg0Lgg0Y3RgdC60LjQt9GLLjwvcD4=',
      },
      uz: {
        title: 'Balet liboslari ko‘rgazmasi',
        shortDescription: 'Sahnadan muzeyga.',
        encodedHtmlContent: 'PHA+Tm9kaXIgbGlib3NsYXIuPC9wPg==',
      },
    },
    images: [
      {
        fileId: 'img-015',
        link: 'https://i.ytimg.com/vi/yyeR-gPakWo/maxresdefault.jpg',
      },
    ],
    publicationDate: '2025-09-21T09:00:00Z',
    tags: [NewsTagType.Ballet, NewsTagType.Tours],
    author: 'Mia Kingsley',
    uiProperties: { hall: 'gallery wing' },
    isVisibleToVisitors: false,
  },
  {
    newsId: '445c04ff-4247-41bc-a8e5-db19321a12a8',
    content: {
      en: {
        title: 'Navoi Theatre Anniversary',
        shortDescription: 'Celebrating history and cultural legacy.',
        encodedHtmlContent: 'PHA+SG9ub3JpbmcgZGVjYWRlcyBvZiBhcnQuPC9wPg==',
      },
      ru: {
        title: 'Годовщина театра Навои',
        shortDescription: 'Празднование культурного наследия.',
        encodedHtmlContent:
          'PHA+0KfQtdGB0YLQstC+0LLQsNC90LjQtSDQuNGB0LrRg9GB0YHRgtCy0LAuPC9wPg==',
      },
      uz: {
        title: 'Navoiy teatri yubileyi',
        shortDescription: 'Madaniy meros bayrami.',
        encodedHtmlContent: 'PHA+U2Fu4oCZYXQgdmEgdGFyaXhnYSBodXJtYXQuPC9wPg==',
      },
    },
    images: [
      {
        fileId: 'img-016',
        link: 'https://i.ytimg.com/vi/yyeR-gPakWo/maxresdefault.jpg',
      },
    ],
    publicationDate: '2025-10-01T00:00:00+05:00',
    tags: [NewsTagType.Concerts, NewsTagType.Tours],
    author: 'Arthur Greyson',
    uiProperties: { importance: 'high' },
    isVisibleToVisitors: false,
  },
  {
    newsId: '9c6db6b4-6179-4a1b-a977-523b0dae9a82',
    content: {
      en: {
        title: 'Opera Premiere: "Dilorom"',
        shortDescription: 'Staging of a famous Uzbek opera.',
        encodedHtmlContent:
          'PHA+TmF0aW9uYWwgb3BlcmEgbWFzdGVycGllY2UgcmV0dXJucy48L3A+',
      },
      ru: {
        title: 'Опера "Дилором" — премьера',
        shortDescription: 'Постановка узбекской оперной легенды.',
        encodedHtmlContent:
          'PHA+0JLQvtC30LLRgNCw0YnQtdC90LjQtSDRiNC10LTQtdCy0YDQsC48L3A+',
      },
      uz: {
        title: '"Dilorom" operasi premyerasi',
        shortDescription: 'O‘zbek opera durdonasi qaytadi.',
        encodedHtmlContent: 'PHA+TWlsbGl5IG9wZXJhLjwvcD4=',
      },
    },
    images: [
      {
        fileId: 'img-017',
        link: 'https://i.ytimg.com/vi/yyeR-gPakWo/maxresdefault.jpg',
      },
    ],
    publicationDate: '2025-10-14T17:00:00Z',
    tags: [NewsTagType.Opera],
    author: 'Alina Mercer',
    uiProperties: {},
    isVisibleToVisitors: false,
  },
  {
    newsId: 'ffa0da6d-5f8a-48bb-9fd6-3daa71a178d4',
    content: {
      en: {
        title: 'Guided Night Tour',
        shortDescription: 'See the theatre after dark.',
        encodedHtmlContent: 'PHA+TXlzdGljYWwgYXRtb3NwaGVyZSB0b3VyLjwvcD4=',
      },
      ru: {
        title: 'Ночная экскурсия',
        shortDescription: 'Театр после заката.',
        encodedHtmlContent:
          'PHA+0JzQuNGB0YLQuNGH0LXRgdC60LDRjyDQsNGC0LzQvtGB0YTQtdGA0LAuPC9wPg==',
      },
      uz: {
        title: 'Tungi ekskursiya',
        shortDescription: 'Tungi teatr sehrlari.',
        encodedHtmlContent: 'PHA+UW9yb25n4oCYdSBzYWhuYSBydWhpLjwvcD4=',
      },
    },
    images: [
      {
        fileId: 'img-018',
        link: 'night-tour-navoi',
      },
    ],
    publicationDate: '2025-11-02T20:30:00+05:00',
    tags: [NewsTagType.Tours],
    author: 'Gabriel Norton',
    uiProperties: { lighting: 'theatrical' },
    isVisibleToVisitors: false,
  },
  {
    newsId: '6f931bb9-e663-4fa8-b7ed-2e4dfb139d80',
    content: {
      en: {
        title: 'Childrens Day Concert',
        shortDescription: 'Short classical concert for children.',
        encodedHtmlContent: 'PHA+TXVzaWMgbWFkZSBmdW4gYW5kIHNob3J0ITwvcD4=',
      },
      ru: {
        title: 'Концерт ко Дню детей',
        shortDescription: 'Короткая классическая программа для детей.',
        encodedHtmlContent:
          'PHA+0JrQu9Cw0YHRgdC40LrQsCDigJQg0Y3RgtC+INCy0LXRgdC10LvQviE8L3A+',
      },
      uz: {
        title: 'Bolalar kuni konserti',
        shortDescription: 'Bolalar uchun qisqa klassik dastur.',
        encodedHtmlContent: 'PHA+TXVzaXFhIG/igJh5bm9xaSBmb3JtYXRkYS48L3A+',
      },
    },
    images: [
      {
        fileId: 'img-019',
        link: 'https://i.ytimg.com/vi/yyeR-gPakWo/maxresdefault.jpg',
      },
    ],
    publicationDate: '2025-11-11T10:10:10Z',
    tags: [NewsTagType.Childrens, NewsTagType.Concerts],
    author: 'Emma Brighton',
    uiProperties: {},
    isVisibleToVisitors: false,
  },
];
