import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { AccountDto } from '@shared/api/backend';
import { ServerParamsFilter } from '@shared/api/swapi/server-params.filter';
import { GridData } from '@shared/components/grid/grid-data.model';

import { Observable } from 'rxjs';
import { AccountService } from '../account.service';

@Injectable({
  providedIn: 'root',
})
export class AccountListResolver implements Resolve<GridData<AccountDto>> {
  private readonly searchFilters = ['name'];

  constructor(private service: AccountService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<GridData<AccountDto>> {
    const params = ServerParamsFilter.filter(route.queryParams, this.searchFilters);
    return this.service.findAll(params);
  }
}
