import { Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { UserStore } from '@shared';
import { ForgotPasswordControllerService, ForgotPasswordDto, ForgotPasswordEmailDto } from '@shared/openapi';
import { ForgotPasswordSecurityCodeDto } from '@shared/openapi/model/forgotPasswordSecurityCodeDto';
import { ForgotPasswordTokenDto } from '@shared/openapi/model/forgotPasswordTokenDto';
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
  constructor(private userStore: UserStore, private forgotPasswordService: ForgotPasswordControllerService) {}

  forgotPassword(username: string): Observable<any> {
    const data: ForgotPasswordEmailDto = {
      email: username,
    };
    return this.forgotPasswordService.forgot(data);
  }

  getTokenBySecurityCode(securityCode: string): Observable<ForgotPasswordTokenDto> {
    const data: ForgotPasswordSecurityCodeDto = {
      securityCode: securityCode,
    };
    return this.forgotPasswordService.findTokenBySecurityCode(data);
  }

  renewPassword(token: string, password: string): Observable<any> {
    const data: ForgotPasswordDto = {
      password,
      token,
    };
    return this.forgotPasswordService.changePassword(data);
  }
}
