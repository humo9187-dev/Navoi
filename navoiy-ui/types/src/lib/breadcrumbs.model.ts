import { Pages } from './pages.model';

export const BREADCRUMB_CONFIG = {
  [Pages.events]: [
    {
      match: /^\/events$/,
      build: (t: any) => [{ href: '/events', label: t[Pages.events] }],
    },
    {
      match: /^\/events\/([a-f0-9-]+)$/i,
      build: (t: any, id: string) => [
        { href: '/events', label: t[Pages.events] },
        { href: `/events/${id}`, label: t[Pages.eventDetails] },
      ],
    },
    {
      match: /^\/events\/news$/,
      build: (t: any) => [
        { href: '/events', label: t[Pages.events] },
        { href: `/events/news`, label: t[Pages.news] },
      ],
    },
  ],

  [Pages.aboutUs]: [
    {
      match: /^\/about-us$/,
      build: (t: any) => [{ href: '/about-us', label: t[Pages.aboutUs] }],
    },
    {
      match: /^\/about-us\/team$/,
      build: (t: any) => [
        { href: '/about-us', label: t[Pages.aboutUs] },
        { href: '/about-us/team', label: t[Pages.team] },
      ],
    },
    {
      match: /^\/about-us\/team\/heads$/,
      build: (t: any) => [
        { href: '/about-us', label: t[Pages.aboutUs] },
        { href: '/about-us/team', label: t[Pages.team] },
        { href: '/about-us/team/heads', label: t[Pages.heads] },
      ],
    },
    {
      match: /^\/about-us\/team\/heads\/([a-f0-9-]+)$/i,
      build: (t: any, id: string) => [
        { href: '/about-us', label: t[Pages.aboutUs] },
        { href: '/about-us/team', label: t[Pages.team] },
        { href: '/about-us/team/heads', label: t[Pages.heads] },
        { href: `/about-us/team/heads/${id}`, label: t[Pages.fullName] },
      ],
    },
  ],

  [Pages.news]: [
    {
      match: /^\/news$/,
      build: (t: any) => [{ href: '/news', label: t[Pages.news] }],
    },
    {
      match: /^\/news\/([a-f0-9-]+)$/i,
      build: (t: any, id: string) => [
        { href: '/news', label: t[Pages.news] },
        { href: '/news/news-details', label: t[Pages.newsDetails] },
      ],
    },
  ],
};
