import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { AccountDto } from '@shared/api/backend';

import { Observable } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root',
})
export class AccountResolver implements Resolve<AccountDto> {
  constructor(private service: AccountService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<AccountDto> {
    const id = route.paramMap.get('id');
    return this.service.findById(id);
  }
}
