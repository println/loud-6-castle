import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { Page } from '@modules/domain/star-wars/submodules/swapi/page.model';
import { Person } from '@modules/domain/star-wars/submodules/swapi/models/person.model';
import { PeopleService } from '@modules/domain/star-wars/submodules/swapi/services/people.service';
import { ServerParamsFilter } from '@modules/domain/star-wars/submodules/swapi/server-params.filter';
import { GridData } from '@shared/components/grid/grid-data.model';
import { PagingData } from '@shared/components/paging/paging-data.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PersonListResolver implements Resolve<GridData<Person>> {
  constructor(private service: PeopleService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<GridData<Person>> {
    const params = ServerParamsFilter.filter(route.queryParams, ['name']);
    return this.toGridData(this.service.findAll(params));
  }

  private toGridData(data: Observable<Page<Person>>): Observable<GridData<Person>> {
    return data.pipe(
      map((d) => {
        const paging = {} as PagingData;
        paging.totalItems = d.count;
        paging.currentPageIndex = d.getCurrent();
        paging.itemsByPage = d.getPageSize();
        paging.nextPageIndex = this.fixIndex(d.next);
        paging.previousPageIndex = this.fixIndex(d.previous);

        const gridData = {} as GridData<Person>;
        gridData.items = d.results;
        gridData.paging = paging;

        return gridData;
      })
    );
  }

  private fixIndex(index: null | string) {
    if (index) {
      return parseInt(index);
    }
    return 0;
  }
}
