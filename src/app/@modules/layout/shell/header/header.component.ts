import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, CredentialsService } from '@app/@modules/layout/auth';
import { ROUTE_PATH } from '@config/route-path.config';
import { UserQuery } from '@app/@modules/layout/auth/state/user.query';
import { Observable } from 'rxjs';
import { UserState } from '@app/@modules/layout/auth/state/user.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  user$: Observable<UserState>;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userQuery: UserQuery
  ) {}

  ngOnInit() {
    this.user$ = this.userQuery.select();
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate([ROUTE_PATH.login], { replaceUrl: true }));
  }
}
