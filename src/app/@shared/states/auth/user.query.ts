import { Injectable } from '@angular/core';
import { userStore } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserQuery {
  user$ = userStore.pipe();

  isLoggedIn() {
    return !!userStore.getValue().name.length;
  }

  token() {
    return userStore.getValue().token;
  }
}
