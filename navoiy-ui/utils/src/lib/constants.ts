const EVENT_GROUPING_RULES = {
  MAX_DAYS_PER_PAGE: 5,
  MAX_EVENTS_PER_PAGE: 10,
};

const QUERY_KEYS = {
  TYPE: 'type',
  PAGE: 'page',
  ALL_FILTER_VALUE: 'ALL',
};

const NEWS_GROUPING_RULES = {
  ARTICLES_PER_PAGE: 9,
};

const MUTABLE_ROOTS = new Set(['event', 'article']);

const LOGIN_FORM = {
  title: 'Sign in',
  description: 'Enter your username and password to continue',
  fields: {
    username: 'Username',
    password: 'Password',
  },
  actions: {
    submit: 'Submit',
  },
};

export {
  EVENT_GROUPING_RULES,
  QUERY_KEYS,
  NEWS_GROUPING_RULES,
  MUTABLE_ROOTS,
  LOGIN_FORM,
};
