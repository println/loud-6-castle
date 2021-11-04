import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { Person } from '@shared/api/swapi/models/person.model';
import { PeopleService } from '@modules/domain/star-wars/submodules/person/people.service';
import { ServerParamsFilter } from '@shared/api/swapi/server-params.filter';
import { GridData } from '@shared/components/grid/grid-data.model';

@Injectable({
  providedIn: 'root',
})
export class PersonListResolver implements Resolve<GridData<Person>> {
  constructor(private service: PeopleService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<GridData<Person>> {
    const params = ServerParamsFilter.filter(route.queryParams, ['name']);
    return this.service.findAll(params);
  }

  private fixIndex(index: null | string) {
    if (index) {
      return parseInt(index);
    }
    return 0;
  }
}
