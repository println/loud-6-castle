import { Injectable } from '@angular/core';
import { Store, StoreConfig, UpdateStateCallback } from '@datorama/akita';

const SESSION_KEY = 'Session';

export interface UserState {
  token: string;
  name: string;
}

export function createInitialState(): UserState {
  return {
    name: null,
    token: null,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth', resettable: true })
export class UserStore extends Store<UserState> {
  constructor() {
    super(createInitialState());
    this.loadFromStorage();
  }

  storageUpdate(state: Partial<UserState>, remember?: boolean): any {
    let storage = sessionStorage;
    if (remember) {
      storage = localStorage;
    }
    storage.setItem(SESSION_KEY, JSON.stringify(state));
    return super.update(state);
  }

  reset() {
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
    super.reset();
  }

  private loadFromStorage() {
    const data = localStorage.getItem(SESSION_KEY) || sessionStorage.getItem(SESSION_KEY);
    if (data) {
      this._setState((state) => JSON.parse(data));
    }
  }
}
