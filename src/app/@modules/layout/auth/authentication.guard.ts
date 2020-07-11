import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { Logger } from '@core';
import { UserQuery } from '@shared/states/auth/user.query';
import { ROUTE } from '@config';

const log = new Logger('AuthenticationGuard');

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router, private userQuery: UserQuery) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userQuery.isLoggedIn()) {
      return true;
    }

    log.debug('Not authenticated, redirecting and adding redirect url...');
    this.router.navigate([ROUTE.login.path], { queryParams: { redirect: state.url }, replaceUrl: true });
    return false;
  }
}
