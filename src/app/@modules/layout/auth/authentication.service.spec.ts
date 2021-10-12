import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { UserStore } from '@shared';

describe('AuthenticationService', () => {
  let authenticationService: AuthenticationService;
  let userStore: UserStore;
  let mockUserStore: any;

  beforeEach(() => {
    mockUserStore = {
      credentials: {},
      storageUpdate: (state: any, remember?: boolean) => {
        mockUserStore.credentials = state;
      },
      reset: () => {},
    };

    TestBed.configureTestingModule({
      providers: [{ provide: UserStore, useValue: mockUserStore }, AuthenticationService],
    });

    authenticationService = TestBed.inject(AuthenticationService);
    userStore = TestBed.inject(UserStore);
    jest.spyOn(userStore, 'storageUpdate').mockImplementation(() => {});
    jest.spyOn(userStore, 'reset').mockImplementation(() => {});
  });

  describe('login', () => {
    it('should return credentials', fakeAsync(() => {
      // Act
      const request = authenticationService.login({
        username: 'toto',
        password: '123',
      });
      tick();

      // Assert
      request.subscribe((credentials) => {
        expect(credentials).toBeDefined();
        expect(credentials.token).toBeDefined();
      });
    }));

    it('should authenticate user', fakeAsync(() => {
      // Act
      const request = authenticationService.login({
        username: 'toto',
        password: '123',
      });
      tick();

      // Assert
      request.subscribe(() => {
        expect(userStore.storageUpdate).toHaveBeenCalledTimes(1);
      });
    }));

    it('should persist credentials across sessions', fakeAsync(() => {
      // Act
      const request = authenticationService.login({
        username: 'toto',
        password: '123',
        remember: true,
      });
      tick();

      // Assert
      request.subscribe(() => {
        expect(userStore.storageUpdate).toHaveBeenCalledTimes(1);
      });
    }));
  });

  describe('logout', () => {
    it('should clear user authentication', fakeAsync(() => {
      // Arrange
      const loginRequest = authenticationService.login({
        username: 'toto',
        password: '123',
      });
      tick();

      // Assert
      loginRequest.subscribe(() => {
        expect(userStore.storageUpdate).toHaveBeenCalledTimes(1);

        const request = authenticationService.logout();
        tick();

        request.subscribe(() => {
          expect(userStore.reset).toHaveBeenCalledTimes(1);
        });
      });
    }));
  });
});
