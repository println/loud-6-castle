import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../auth/services/authentication.service';
import { UserQuery } from '@shared/states/auth/user.query';
import { UserState } from '@shared/states/auth/user.store';
import { ROUTES } from '@config';

@Component({
  selector: 'app-header, [app-header]',
  templateUrl: './header.component.html',
  host: { class: 'o-header' },
})
export class HeaderComponent implements OnInit {
  routes = ROUTES;

  menuHidden = true;
  user$: Observable<UserState>;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userQuery: UserQuery
  ) {
    this.user$ = this.userQuery.user$;
  }

  ngOnInit() {
    this.user$ = this.userQuery.user$;
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  logout() {
    this.authenticationService
      .logout()
      .subscribe(() => this.router.navigate([ROUTES.login.path], { replaceUrl: true }));
  }
}
