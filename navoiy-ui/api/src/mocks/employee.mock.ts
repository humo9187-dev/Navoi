import { EmployeeDTO, EmployeeType } from '@navoiy-workspace/types';

export const mockEmployees: EmployeeDTO[] = [
  {
    employeeId: 'b1cda604-f8ea-437c-9314-c3955958a3e5',
    content: {
      en: {
        name: 'Safarov Firudin Sattarovich',
        position: 'The main director of Performances',
        encodedHtmlContent:
          '<p>Safarov Firudin Sattarovich was born in Baku and has led performances for decades.</p>',
      },
      ru: {
        name: 'Сафаров Фирудин Саттарович',
        position: 'Главный режиссёр спектаклей',
        encodedHtmlContent:
          '<p>Сафаров Фирудин Саттарович родился в Баку и руководит спектаклями театра.</p>',
      },
      uz: {
        name: 'Safarov Firudin Sattarovich',
        position: 'Spektakllar bosh rejissyori',
        encodedHtmlContent:
          '<p>Safarov Firudin Sattarovich Baku shahrida tugʻilgan va spektakllarga rahbarlik qiladi.</p>',
      },
    },
    images: [
      {
        fileId: 'img-001',
        link: 'https://gabt.uz/group/6.jpg',
      },
    ],
    type: [EmployeeType.DIRECTORS],
  },
  {
    employeeId: '65c4eb68-b1c5-40c1-9241-567f50fbb169',
    content: {
      en: {
        name: 'Anna Ivanova',
        position: 'Ballet Director',
        encodedHtmlContent: '<p>Leads the ballet troupe.</p>',
      },
      ru: {
        name: 'Анна Иванова',
        position: 'Руководитель балета',
        encodedHtmlContent: '<p>Руководит балетной труппой.</p>',
      },
      uz: {
        name: 'Anna Ivanova',
        position: 'Balet rahbari',
        encodedHtmlContent: '<p>Balet truppasini boshqaradi.</p>',
      },
    },
    images: [
      {
        fileId: 'img-002',
        link: 'https://i.ytimg.com/vi/yyeR-gPakWo/maxresdefault.jpg',
      },
    ],
    type: [EmployeeType.BALLET_TROUPE, EmployeeType.DIRECTORS],
  },
  {
    employeeId: 'a6a4bdc3-9ba1-4eb2-8173-825cfe3ab2b3',
    content: {
      en: {
        name: 'Sergey Volkov',
        position: 'Conductor',
        encodedHtmlContent: '<p>Conductor of the orchestra.</p>',
      },
      ru: {
        name: 'Сергей Волков',
        position: 'Дирижёр',
        encodedHtmlContent: '<p>Дирижёр оркестра.</p>',
      },
      uz: {
        name: 'Sergey Volkov',
        position: 'Dirijyor',
        encodedHtmlContent: '<p>Orkestr dirijyoridir.</p>',
      },
    },
    images: [
      {
        fileId: 'img-003',
        link: 'https://i.ytimg.com/vi/yyeR-gPakWo/maxresdefault.jpg',
      },
    ],
    type: [EmployeeType.CONDUCTORS, EmployeeType.SYMPHONY_ORCHESTRA],
  },
  {
    employeeId: 'f1c2d3e4-5678-90ab-cdef-111111111111',
    content: {
      en: {
        name: 'Oleg Vasilyev',
        position: 'Stage Designer',
        encodedHtmlContent: '<p>Leads stage design and production.</p>',
      },
      ru: {
        name: 'Олег Васильев',
        position: 'Художник сцены',
        encodedHtmlContent: '<p>Отвечает за сценический дизайн.</p>',
      },
      uz: {
        name: 'Oleg Vasilyev',
        position: 'Sahna rassomi',
        encodedHtmlContent: '<p>Sahnani bezash bo‘yicha mutaxassis.</p>',
      },
    },
    images: [
      {
        fileId: 'img-004',
        link: 'https://gabt.uz/group/s422.jpg',
      },
    ],
    type: [EmployeeType.CHORUS],
  },
  {
    employeeId: 'f2a3b4c5-d6e7-890a-bcde-222222222222',
    content: {
      en: {
        name: 'Irina Avdyushkina',
        position: 'Director',
        encodedHtmlContent: '<p>Operatic and ballet director.</p>',
      },
      ru: {
        name: 'Ирина Авдюшкина',
        position: 'Режиссёр',
        encodedHtmlContent: '<p>Режиссёр оперы и балета.</p>',
      },
      uz: {
        name: 'Irina Avdyushkina',
        position: 'Rejissyor',
        encodedHtmlContent: '<p>Opera va balet rejissyori.</p>',
      },
    },
    images: [
      {
        fileId: 'img-005',
        link: 'https://gabt.uz/group/s422.jpg',
      },
    ],
    type: [EmployeeType.DIRECTORS],
  },
  {
    employeeId: 'e3b4c5d6-f7a8-901b-cdef-333333333333',
    content: {
      en: {
        name: 'Barno Zakirova',
        position: 'Troupe Manager',
        encodedHtmlContent: '<p>Manages the creative troupe.</p>',
      },
      ru: {
        name: 'Барно Закирова',
        position: 'Зав.труппой',
        encodedHtmlContent: '<p>Управляет творческой труппой.</p>',
      },
      uz: {
        name: 'Barno Zakirova',
        position: 'Troupa boshlig‘i',
        encodedHtmlContent: '<p>Ishchilar truppasini boshqaradi.</p>',
      },
    },
    images: [
      {
        fileId: 'img-006',
        link: 'https://gabt.uz/group/s422.jpg',
      },
    ],
    type: [EmployeeType.OPERA_TROUPE],
  },
  {
    employeeId: 'd4c5e6f7-a8b9-012c-def0-444444444444',
    content: {
      en: {
        name: 'Azim Rafikov',
        position: 'Lead Opera Singer',
        encodedHtmlContent: '<p>Opera lead singer.</p>',
      },
      ru: {
        name: 'Абзал Азимович Рафиков',
        position: 'Ведущий мастер сцены',
        encodedHtmlContent: '<p>Ведущий мастер сцены.</p>',
      },
      uz: {
        name: 'Azim Rafikov',
        position: 'Katta sahna mahoratgohi',
        encodedHtmlContent: '<p>Opera sahnasining yetakchi ijrochisi.</p>',
      },
    },
    images: [
      {
        fileId: 'img-007',
        link: 'https://gabt.uz/group/s422.jpg',
      },
    ],
    type: [EmployeeType.OPERA_TROUPE, EmployeeType.CHORUS],
  },
  {
    employeeId: 'c5d6e7f8-b9a0-123d-ef01-555555555555',
    content: {
      en: {
        name: 'Olga Ovchinnikova',
        position: 'Lead Actress',
        encodedHtmlContent: '<p>Lead actress in drama troupe.</p>',
      },
      ru: {
        name: 'Ольга Овчинникова',
        position: 'Актриса',
        encodedHtmlContent: '<p>Ведущая актриса драм-труппы.</p>',
      },
      uz: {
        name: 'Olga Ovchinnikova',
        position: 'Aktyor',
        encodedHtmlContent: '<p>Drama truppasining yetakchi aktrisasi.</p>',
      },
    },
    images: [
      {
        fileId: 'img-008',
        link: 'https://gabt.uz/group/s422.jpg',
      },
    ],
    type: [EmployeeType.CHORUS],
  },
  {
    employeeId: 'b6e7f8a9-c0b1-234e-f012-666666666666',
    content: {
      en: {
        name: 'Lyudmila Stotskaya',
        position: 'Senior Actress',
        encodedHtmlContent: '<p>Senior member of the dramatic troupe.</p>',
      },
      ru: {
        name: 'Людмила Стоцкая',
        position: 'Старшая актриса',
        encodedHtmlContent: '<p>Старшая актриса коллектива.</p>',
      },
      uz: {
        name: 'Lyudmila Stotskaya',
        position: 'Katta aktrisa',
        encodedHtmlContent: '<p>Drama truppasining katta aktrisasi.</p>',
      },
    },
    images: [
      {
        fileId: 'img-009',
        link: 'https://gabt.uz/group/s422.jpg',
      },
    ],
    type: [EmployeeType.CHORUS],
  },
  {
    employeeId: 'a7f8e9c0-d1b2-345f-0123-777777777777',
    content: {
      en: {
        name: 'Diana Tyumeneva',
        position: 'Actress',
        encodedHtmlContent: '<p>Actress in classical plays.</p>',
      },
      ru: {
        name: 'Диана Тюменева',
        position: 'Актриса',
        encodedHtmlContent: '<p>Актриса классических постановок.</p>',
      },
      uz: {
        name: 'Diana Tyumeneva',
        position: 'Aktrisa',
        encodedHtmlContent: '<p>Klassik spektakllarda aktyor.</p>',
      },
    },
    images: [
      {
        fileId: 'img-010',
        link: 'https://gabt.uz/group/s422.jpg',
      },
    ],
    type: [EmployeeType.OPERA_TRAINEES],
  },
  {
    employeeId: 'f8e9d0c1-b2a3-456f-1234-888888888888',
    content: {
      en: {
        name: 'Elena Belova',
        position: 'Actress',
        encodedHtmlContent: '<p>Performed in “Revisor” and “Retro”.</p>',
      },
      ru: {
        name: 'Екатерина Белова',
        position: 'Актриса',
        encodedHtmlContent: '<p>Исполняла роли в различных постановках.</p>',
      },
      uz: {
        name: 'Elena Belova',
        position: 'Aktrisa',
        encodedHtmlContent: '<p>“Revisor” va boshqa rollarda ijro etgan.</p>',
      },
    },
    images: [
      {
        fileId: 'img-011',
        link: 'https://gabt.uz/group/s422.jpg',
      },
    ],
    type: [EmployeeType.CHORUS],
  },
  {
    employeeId: 'g9f0a1b2-c3d4-5678-999999999999',
    content: {
      en: {
        name: 'Zulfia Raimkulova',
        position: 'Actress',
        encodedHtmlContent: '<p>Featured in classic dramas.</p>',
      },
      ru: {
        name: 'Зульфия Раимкулова',
        position: 'Актриса',
        encodedHtmlContent: '<p>Участвовала в драматических постановках.</p>',
      },
      uz: {
        name: 'Zulfia Raimkulova',
        position: 'Aktrisa',
        encodedHtmlContent: '<p>Drama spektakllarida ishtirok etgan.</p>',
      },
    },
    images: [
      {
        fileId: 'img-012',
        link: 'https://gabt.uz/group/s422.jpg',
      },
    ],
    type: [EmployeeType.CHORUS],
  },
];
