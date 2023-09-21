import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import {
  Account,
  AccountActivationApiService,
  AccountApiService,
  AccountDto,
  AccountIssueApiService,
  AccountResetPasswordApiService,
  AccountSessionApiService,
  IssueToken,
  ResetPasswordAccountDto,
  ResetPasswordDto,
  RoleDto,
  Session,
  Unit,
  User,
} from '@shared/api/backend';
import { GridData } from '@shared/components/grid/grid-data.model';
import { Page } from '@shared/integrations/spring-boot/response/page.model';
import { SpringHelper } from '@shared/integrations/spring-boot/spring.helper';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import RoleEnum = Account.RoleEnum;

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(
    private service: AccountApiService,
    private resetService: AccountResetPasswordApiService,
    private activationService: AccountActivationApiService
  ) {}

  findAll(queryParams?: Params): Observable<GridData<AccountDto>> {
    const rql = queryParams?.toString();
    return this.service.getAll3().pipe(
      take(1),
      map((resp: Page<AccountDto>) => SpringHelper.fromPaging(resp))
    );
  }

  findById(id: any): Observable<AccountDto> {
    return this.service.getById1(id).pipe(take(1));
  }

  getRoles(): Observable<RoleEnum[]> {
    return this.service.getRoles();
  }

  block(account: AccountDto): Observable<AccountDto> {
    return this.service.blockAccount(account.id!);
  }

  unblock(account: AccountDto): Observable<AccountDto> {
    return this.service.unblockAccount(account.id!);
  }

  changeRole(account: AccountDto, role: RoleEnum): Observable<AccountDto> {
    const data: RoleDto = { role };
    return this.service.changeRole(data, account.id!);
  }

  setTempPassword(account: AccountDto): Observable<string> {
    const data = { accountId: account.id } as ResetPasswordAccountDto;
    return this.resetService.assignTempPassword(data).pipe(map((result) => result.temporaryPassword));
  }

  getAllSessions(account: AccountDto): Observable<Session[]> {
    return this.service.getAllSessions(account.id!);
  }

  getAllIssues(account: AccountDto): Observable<IssueToken[]> {
    return this.service.getAllIssues(account.id!);
  }

  getUSer(account: AccountDto): Observable<User> {
    return this.service.getUser(account.id!);
  }

  forceActivateAccount(account: AccountDto): Observable<Unit> {
    return this.activationService.forceActivateAccount(account.id!);
  }
}
