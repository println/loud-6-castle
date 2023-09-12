import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { ENDPOINTS } from '@shared/api/swapi/endpoints.map';
import { GridData } from '@shared/components/grid/grid-data.model';
import { Page } from '@shared/integrations/spring-boot/page.model';
import { SpringHelper } from '@shared/integrations/spring-boot/spring.helper';
import { AccountControllerService, AccountDto, Session, SessionControllerService } from '@shared/openapi';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(protected http: HttpClient, private service: SessionControllerService) {}

  findAll(queryParams?: Params): Observable<GridData<Session>> {
    const rql = queryParams?.toString();
    return this.service.getAll21().pipe(
      take(1),
      map((resp: Page<Session>) => SpringHelper.fromPaging(resp))
    );
  }

  findById(id: any): Observable<Session> {
    return this.service.getById11(id).pipe(take(1));
  }
}
