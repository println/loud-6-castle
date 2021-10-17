import { PagingData } from '../paging/paging-data.model';

export interface GridData<T> {
  items: T[];
  paging: PagingData;
}
