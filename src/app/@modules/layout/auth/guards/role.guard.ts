import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ROUTES } from '@config';
import { Logger, UserQuery } from '@shared';

const log = new Logger('RoleGuard');

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router, private userQuery: UserQuery) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const role = this.userQuery.getRole();
    if (!this.userQuery.isLoggedIn() || (route.data.role && route.data.role.indexOf(role) === -1)) {
      log.debug('You do not have privileges to access this area...');
      this.router.navigate([ROUTES.home.path]);
      return false;
    }
    return true;
  }
}
