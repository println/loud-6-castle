import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PATHS, ROUTES } from '@config';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AccountDto, IssueToken, RoleDto, Session, User } from '@shared/api/backend';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { take, tap } from 'rxjs/operators';
import { AccountService } from '../account.service';
import RoleEnum = RoleDto.RoleEnum;

@UntilDestroy()
@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
})
export class AccountDetailComponent implements OnInit {
  routes = ROUTES;
  paths = PATHS;

  data$: Observable<{ [name: string]: AccountDto }> = of({});
  roles$: Observable<RoleEnum[]> = of([]);
  sessions$: Observable<Session[]> = of([]);
  issues$: Observable<IssueToken[]> = of([]);
  user$: Observable<User> = of();

  account?: AccountDto;
  tempPassword?: string;
  disabled = false;
  accountProperties = {
    isNotActivated: false,
  };

  constructor(private route: ActivatedRoute, private router: Router, private service: AccountService) {}

  ngOnInit() {
    this.roles$ = this.service.getRoles();
    this.refresh();
  }

  delete(account: AccountDto) {
    if (!confirm(`Are you sure to delete ${account.name}?`)) {
      return;
    }

    // this.service.deleteById(person).subscribe(
    //   (val) => {
    //     console.log('DELETE call successful value returned in body', val);
    //     this.router.navigate([ROUTE.employee.id]);
    //   },
    //   (response) => {
    //     window.alert('DELETE call in error');
    //     console.log('DELETE call in error', response);
    //   }
    // );
  }

  block() {
    this.disabled = true;
    this.service
      .block(this.account!)
      .pipe(take(1))
      .subscribe((account) => {
        this.account = account;
        this.disabled = false;
      });
  }

  unblock() {
    this.disabled = true;
    this.service
      .unblock(this.account!)
      .pipe(take(1))
      .subscribe((account) => {
        this.account = account;
        this.disabled = false;
      });
  }

  setTempPassword() {
    this.disabled = true;
    this.service.setTempPassword(this.account!!).subscribe((tempPassword) => {
      this.tempPassword = tempPassword;
      this.refreshIssues();
      this.disabled = false;
    });
  }

  changeRole(role: RoleEnum) {
    this.disabled = true;
    this.service
      .changeRole(this.account!, role)
      .pipe(take(1))
      .subscribe((account) => {
        this.account = account;
        this.disabled = false;
      });
  }

  activateAccount() {
    this.disabled = true;
    this.service
      .forceActivateAccount(this.account!)
      .pipe(take(1))
      .subscribe((_) => {
        this.refreshIssues();
        this.disabled = false;
        this.accountProperties.isNotActivated = false;
      });
  }

  private refresh() {
    this.route.data.pipe(take(1)).subscribe((data) => {
      const account = data.data;
      this.account = account;
      this.refreshIssues();
      this.refreshSession();
      this.refreshUser();
    });
  }

  private refreshIssues() {
    this.issues$ = this.service.getAllIssues(this.account!).pipe(
      take(1),
      tap((issues: IssueToken[]) => {
        if (issues.some((issue) => issue.type === IssueToken.TypeEnum.ACCOUNTACTIVATION)) {
          this.accountProperties.isNotActivated = true;
          console.log('asd');
        }
      })
    );
  }

  private refreshSession() {
    this.sessions$ = this.service.getAllSessions(this.account!).pipe(take(1));
  }

  private refreshUser() {
    this.user$ = this.service.getUSer(this.account!).pipe(take(1));
  }
}
