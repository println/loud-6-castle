import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UserStore } from '@shared';

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
  constructor(private userStore: UserStore) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: LoginContext): Observable<{ username: string; token: string }> {
    // Replace by proper authentication call
    const data = {
      username: context.username,
      token: '123456',
    };
    this.userStore.storageUpdate({ token: data.token, name: data.username }, context.remember);
    return of(data);
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
