import { Injectable } from '@angular/core';
import { createStore, select, withProps } from '@ngneat/elf';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';

export interface UserState {
  token: string;
  name: string;
  role: string;
}

export const userStore = createStore({ name: 'auth' }, withProps<UserState>({ name: '', token: '', role: '' }));

const persist = persistState(userStore, {
  key: 'auth-data',
  storage: localStorageStrategy,
});

const SESSION_KEY = 'Session';

const user$ = userStore.pipe(select((state) => state.name));

@Injectable({ providedIn: 'root' })
export class UserStore {
  storageUpdate(user: UserState, remember?: boolean) {
    userStore.update((state) => ({
      ...state,
      token: user.token,
      name: user.name,
      role: user.role,
    }));
  }

  reset() {
    userStore.update((state) => ({
      ...state,
      token: '',
      name: '',
      role: '',
    }));
  }
}
