import capitalize from '@shared/mixins/capitalize';
import { NAMES } from './names.config';

const toPath = (label: string) => `/${label}`;
const toTitle = (label: string) => capitalize(label.replace('-', ' '));
const makePath = (label: string) => ({
  id: label,
  path: toPath(label),
  title: toTitle(label),
});
const toParam = (id: string) => `:${id}`;
const toPlural = (label: string) => `${label}s`;

export const PATHS = {
  empty: NAMES.BASIC_PAGES.empty,
  id: NAMES.BASIC_PAGES.id,
  edit: NAMES.ACTIONS.edit,
  create: NAMES.ACTIONS.create,
  delete: NAMES.ACTIONS.edit,
  list: NAMES.ACTIONS.edit,
  view: NAMES.ACTIONS.view,
  pathId: toParam(NAMES.BASIC_PAGES.id),
  pathCreate: toParam(NAMES.ACTIONS.create),
  pathEdit: toParam(`${NAMES.BASIC_PAGES.id}/${NAMES.ACTIONS.edit}`),
  toParam: (id: string) => toParam(id),
  toParamEdit: (id: string) => toParam(`${id}/${NAMES.ACTIONS.edit}`),
  toParamCreate: () => toParam(NAMES.ACTIONS.create),
  toTitle: (label: string) => toTitle(label),
};

export const ROUTES = {
  home: makePath(NAMES.BASIC_PAGES.home),
  about: makePath(NAMES.BASIC_PAGES.about),
  login: makePath(NAMES.BASIC_PAGES.login),
  logout: makePath(NAMES.BASIC_PAGES.logout),
  settings: makePath(NAMES.BASIC_PAGES.settings),
  register: makePath(NAMES.BASIC_PAGES.register),
  forgotPassword: makePath(NAMES.BASIC_PAGES.forgotPassword),
  profile: makePath(NAMES.BASIC_PAGES.profile),
  admin: {
    ...makePath(NAMES.BASIC_PAGES.admin),
    children: {
      account: {
        ...makePath(NAMES.BASIC_PAGES.account),
        plural: makePath(toPlural(NAMES.BASIC_PAGES.account)),
      },
      session: {
        ...makePath(NAMES.BASIC_PAGES.session),
        plural: makePath(toPlural(NAMES.BASIC_PAGES.session)),
      },
    },
  },
  starwars: {
    ...makePath(NAMES.DOMAIN_PAGES.starwars),
    children: {
      person: {
        ...makePath(NAMES.DOMAIN_PAGES.person),
        plural: makePath(NAMES.DOMAIN_PAGES.people),
      },
      film: {
        ...makePath(NAMES.DOMAIN_PAGES.film),
        plural: makePath(toPlural(NAMES.DOMAIN_PAGES.film)),
      },
    },
  },
};
