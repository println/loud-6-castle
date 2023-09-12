import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { ENDPOINTS } from '@shared/api/swapi/endpoints.map';
import { GridData } from '@shared/components/grid/grid-data.model';
import { Page } from '@shared/integrations/spring-boot/page.model';
import { SpringHelper } from '@shared/integrations/spring-boot/spring.helper';
import { AccountControllerService, AccountDto } from '@shared/openapi';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(protected http: HttpClient, private service: AccountControllerService) {}

  findAll(queryParams?: Params): Observable<GridData<AccountDto>> {
    const rql = queryParams?.toString();
    return this.service.getAll3().pipe(
      take(1),
      map((resp: Page<AccountDto>) => SpringHelper.fromPaging(resp))
    );
  }

  findById(id: any): Observable<AccountDto> {
    return this.service.getById1(id).pipe(take(1));
  }
}
