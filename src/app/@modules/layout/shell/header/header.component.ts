import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '@modules/layout/auth/authentication.service';
import { ROUTE_PATH } from '@config/route-path.config';
import { UserQuery } from '@modules/layout/auth/state/user.query';
import { UserState } from '@modules/layout/auth/state/user.store';

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
