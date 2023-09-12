import { Pageable } from './pageable.model';
import { Sort } from './sort.model';

export interface Page<T> {
  totalElements?: number;
  totalPages?: number;
  first?: boolean;
  last?: boolean;
  size?: number;
  content?: Array<T>;
  number?: number;
  sort?: Sort;
  numberOfElements?: number;
  pageable?: Pageable;
  empty?: boolean;
}
