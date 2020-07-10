import { ROUTE_ID } from './route-id.config';

export const ROUTE_PATH = {
  root: () => (window.location.hash ? '#' : ''),
  home: `/${ROUTE_ID.home}`,
  about: `/${ROUTE_ID.about}`,
  category: `/${ROUTE_ID.category}`,
  error: `/${ROUTE_ID.error}`,
  login: `/${ROUTE_ID.login}`,
};
