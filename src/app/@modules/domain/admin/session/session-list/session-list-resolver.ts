import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { AccountDto, Session } from '@shared/openapi';

import { Observable } from 'rxjs';
import { Person } from '@shared/api/swapi/models/person.model';
import { PeopleService } from '../../../star-wars/person/people.service';
import { ServerParamsFilter } from '@shared/api/swapi/server-params.filter';
import { GridData } from '@shared/components/grid/grid-data.model';
import { SessionService } from '../session.service';

@Injectable({
  providedIn: 'root',
})
export class SessionListResolver implements Resolve<GridData<Session>> {
  private readonly searchFilters = ['name'];

  constructor(private service: SessionService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<GridData<Session>> {
    const params = ServerParamsFilter.filter(route.queryParams, this.searchFilters);
    return this.service.findAll(params);
  }
}
