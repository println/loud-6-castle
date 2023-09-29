import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { AccountSessionApiService, Session } from '@shared/api/backend';
import { GridData } from '@shared/components/grid/grid-data.model';
import { Page } from '@shared/integrations/spring-boot/response/page.model';
import { SpringHelper } from '@shared/integrations/spring-boot/spring.helper';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(protected http: HttpClient, private service: AccountSessionApiService) {}

  findAll(queryParams?: Params): Observable<GridData<Session>> {
    return this.service.getAll(queryParams).pipe(
      take(1),
      map((resp: Page<Session>) => SpringHelper.fromPaging(resp))
    );
  }

  findById(id: any): Observable<Session> {
    return this.service.getById11(id).pipe(take(1));
  }
}
