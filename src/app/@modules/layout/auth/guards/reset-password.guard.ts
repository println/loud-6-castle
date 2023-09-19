import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ROUTES } from '@config';
import { Logger } from '@shared';

const log = new Logger('ResetPasswordGuard');

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (route.queryParamMap.has('token')) {
      return true;
    }
    const redirect = route.queryParams.redirect || ROUTES.home.path;
    log.debug('No have code, redirecting to:', redirect);
    this.router.navigate([redirect], { replaceUrl: true });
    return false;
  }
}
