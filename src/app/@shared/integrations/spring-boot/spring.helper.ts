import { GridData } from '../../components/grid/grid-data.model';
import { PagingData } from '../../components/paging/paging-data.model';
import { Page } from './page.model';

export const SpringHelper = {
  toPaging: () => {},
  fromPaging: (response: Page<any>): GridData<any> => {
    const paging = {} as PagingData;
    paging.totalItems = <number>response.totalElements;
    paging.nextPageIndex = response.last ? 0 : <number>response.number + 1;
    paging.previousPageIndex = response.first ? 0 : <number>response.number - 1;
    paging.currentPageIndex = <number>response.number;
    paging.itemsByPage = <number>response.size;

    const gridData = {} as GridData<any>;
    // @ts-ignore
    gridData.items = response.content;
    gridData.paging = paging;

    return gridData;
  },
};
