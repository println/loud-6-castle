import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Logger } from '@shared';
import { UserQuery } from '@shared/states/auth/user.query';
import { ROUTES } from '@config';

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
    this.router.navigate([ROUTES.login.path], { queryParams: { redirect: state.url }, replaceUrl: true });
    return false;
  }
}
