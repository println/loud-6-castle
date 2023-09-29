import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Session } from '@shared/api/backend';

import { ServerParamsFilter } from '@shared/api/swapi/server-params.filter';
import { GridData } from '@shared/components/grid/grid-data.model';
import { Observable } from 'rxjs';
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
