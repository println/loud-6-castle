import { Injectable } from '@angular/core';
import { untilDestroyed } from '@ngneat/until-destroy';
import { AuthControllerService, AuthRequest } from '@shared/openapi';
import { Observable, of, switchMap } from 'rxjs';

import { UserStore } from '@shared';
import { finalize } from 'rxjs/operators';
import { JWTTokenService } from './jwt-token.service';

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
export class AuthenticationService {
  constructor(
    private userStore: UserStore,
    private service: AuthControllerService,
    private jwtService: JWTTokenService
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
        this.jwtService.setToken(token.accessToken);
        this.userStore.storageUpdate(
          {
            token: token.accessToken,
            name: this.jwtService.getUser(),
          },
          context.remember
        );
        return of({ username: context.username, token: token.accessToken });
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
