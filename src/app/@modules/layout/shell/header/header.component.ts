import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '@modules/layout/auth/authentication.service';
import { UserQuery } from '@shared/states/auth/user.query';
import { UserState } from '@shared/states/auth/user.store';
import { ROUTE } from '@config';

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
    this.authenticationService.logout().subscribe(() => this.router.navigate([ROUTE.login.path], { replaceUrl: true }));
  }
}
