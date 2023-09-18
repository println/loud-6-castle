import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Logger } from '@shared';
import { UserQuery } from '@shared/states/auth/user.query';
import { ROUTES } from '@config';

const log = new Logger('GuestGuard');

@Injectable({
  providedIn: 'root',
})
export class GuestGuard implements CanActivate {
  constructor(private router: Router, private userQuery: UserQuery) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userQuery.isLoggedIn()) {
      const redirect = route.queryParams.redirect || ROUTES.home.path;
      log.debug('Already authenticated, redirecting to:', redirect);
      this.router.navigate([redirect], { replaceUrl: true });
      return false;
    }
    return true;
  }
}
