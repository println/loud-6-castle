import { Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { UserState, UserStore } from '@shared';
import {
  AuthControllerService,
  AuthRequest,
  ForgotPasswordControllerService,
  ForgotPasswordEmailDto,
} from '@shared/openapi';
import { Observable, of, switchMap } from 'rxjs';
import { ForgotPasswordComponent } from '../components/forgot-password/forgot-password.component';
import { JwtTokenHelper } from '../helpers/jwt-token.helper';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private userStore: UserStore,
    private service: AuthControllerService,
    private forgotPasswordService: ForgotPasswordControllerService
  ) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: LoginContext): Observable<{ username: string; token: string }> {
    const data: AuthRequest = {
      email: context.username,
      password: context.password,
    };
    const auth$ = this.service.authenticate(data);
    return auth$.pipe(
      untilDestroyed(this),
      switchMap((token) => {
        const tokenHelper = new JwtTokenHelper(token.accessToken);
        const data = {
          token: token.accessToken,
          name: tokenHelper.getName(),
          role: tokenHelper.getRole(),
        } as UserState;
        this.userStore.storageUpdate(data, context.remember);
        return of({ username: data.name, token: data.token });
      })
    );
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    this.userStore.reset();
    return of(true);
  }
}
