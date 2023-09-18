import { Params } from '@angular/router';
import { GridData } from '../../components/grid/grid-data.model';
import { PagingData } from '../../components/paging/paging-data.model';
import { Pageable } from './request/pageable.model';
import { Page } from './response/page.model';

export const SpringHelper = {
  toPaging: (params: Params, customFilters: string[] = []): Pageable => {
    if (!params) {
      return {};
    }
    const keys: any[] = ['size', 'page', 'sort'].concat(customFilters);

    return Object.entries(params)
      .filter(([k, v]) => keys.includes(k))
      .reduce((obj: any, arr) => {
        obj[arr[0]] = arr[1];
        return obj;
      }, {}) as Pageable;
  },
  fromPaging: (response: Page<any>): GridData<any> => {
    const paging = {} as PagingData;
    paging.totalItems = <number>response.totalElements;
    paging.nextPageIndex = response.last ? 0 : <number>response.number + 1;
    paging.previousPageIndex = response.first ? 0 : <number>response.number - 1;
    paging.currentPageIndex = <number>response.number + 1;
    paging.itemsByPage = <number>response.size;

    const gridData = {} as GridData<any>;
    // @ts-ignore
    gridData.items = response.content;
    gridData.paging = paging;

    return gridData;
  },
};
