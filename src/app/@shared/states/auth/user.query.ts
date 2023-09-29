import { Injectable } from '@angular/core';
import { userStore } from './user.store';
import { RoleDto } from '@app/@shared/api/backend';

@Injectable({ providedIn: 'root' })
export class UserQuery {
  
  user$ = userStore.pipe();

  isLoggedIn() {
    return !!userStore.getValue().name.length;
  }
  
  getUser() {
    return userStore.getValue();
  }

  getUsername() {
    return userStore.getValue().name;
  }

  getRole() {
    return userStore.getValue().role;
  }

  isAdmin(): boolean {
    return this.getRole() === RoleDto.RoleEnum.ADMIN
  }

  getToken() {
    return userStore.getValue().token;
  }
}
