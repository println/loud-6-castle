import { ServerPaginatedResponse } from '@shared/api/swapi/server-paginated.reponse';
import { Person } from '@shared/api/swapi/models/person.model';
import { GridData } from '@shared/components/grid/grid-data.model';
import { PagingData } from '@shared/components/paging/paging-data.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PagingConverterService {
  convert(response: ServerPaginatedResponse<any>): GridData<any> {
    const paging = {} as PagingData;
    paging.totalItems = response.count;
    paging.nextPageIndex = this.extractPageIndex(response.next);
    paging.previousPageIndex = this.extractPageIndex(response.previous);
    paging.currentPageIndex = this.getCurrent(paging);
    paging.itemsByPage = this.getPageSize(response);

    const gridData = {} as GridData<Person>;
    gridData.items = this.setId(response.results);
    gridData.paging = paging;

    return gridData;
  }

  extractId(url: string) {
    let data: any = url.match(/(\d+)/g) || [];
    return parseInt(data);
  }

  private setId(items: any[]): any[] {
    return items.map((item) => {
      item.id = this.extractId(item.url);
      return item;
    });
  }

  private extractPageIndex(url: string | null) {
    if (url) {
      let data: any = url.match(/(\d+)/g) || [];
      return this.fixIndex(data);
    }
    return 0;
  }

  private getCurrent(response: PagingData): number {
    if (response.nextPageIndex) {
      return response.nextPageIndex - 1;
    } else if (response.previousPageIndex) {
      return response.previousPageIndex + 1;
    }
    return 1;
  }

  private getPageSize(response: ServerPaginatedResponse<any>): number {
    return 10;
  }

  private fixIndex(index: null | string) {
    if (index) {
      return parseInt(index);
    }
    return 0;
  }
}
