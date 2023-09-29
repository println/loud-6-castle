import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ROUTES } from '@config';
import { Logger, UserQuery } from '@shared';

const log = new Logger('RoleGuard');

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router, private userQuery: UserQuery) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userQuery.isAdmin()) {
      return true
    }

    if (route.data.role.indexOf(this.userQuery.getRole()) >= -1) {
      return true
    }

    log.debug('You do not have privileges to access this area...');
    this.router.navigate([ROUTES.home.path]);
    return false;
  }
}
