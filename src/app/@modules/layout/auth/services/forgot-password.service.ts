import { Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { UserStore } from '@shared';
import { AccountForgotPasswordApiService, ForgotPasswordDto, ForgotPasswordEmailDto } from '@shared/api/backend';
import { ForgotPasswordSecurityCodeDto } from '@shared/api/backend/model/forgotPasswordSecurityCodeDto';
import { ForgotPasswordTokenDto } from '@shared/api/backend/model/forgotPasswordTokenDto';
import { Observable, of, switchMap } from 'rxjs';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordService {
  constructor(private userStore: UserStore, private service: AccountForgotPasswordApiService) {}

  forgotPassword(username: string): Observable<any> {
    const data: ForgotPasswordEmailDto = {
      email: username,
    };
    return this.service.forgot(data);
  }

  getTokenBySecurityCode(securityCode: string): Observable<ForgotPasswordTokenDto> {
    const data: ForgotPasswordSecurityCodeDto = {
      securityCode: securityCode,
    };
    return this.service.findTokenBySecurityCode(data);
  }

  renewPassword(token: string, password: string): Observable<any> {
    const data: ForgotPasswordDto = {
      password,
      token,
    };
    return this.service.changePassword(data);
  }
}
