import { Sort } from './sort.model';

export interface Pageable {
  offset?: number;
  sort?: Sort;
  pageSize?: number;
  pageNumber?: number;
  unpaged?: boolean;
  paged?: boolean;
}
