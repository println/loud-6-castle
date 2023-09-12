import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { AccountDto, Session } from '@shared/openapi';

import { Observable } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root',
})
export class SessionResolver implements Resolve<Session> {
  constructor(private service: SessionService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Session> {
    const id = route.paramMap.get('id');
    return this.service.findById(id);
  }
}
