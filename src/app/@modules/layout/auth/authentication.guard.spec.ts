import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { UserQuery } from '@modules';

describe('AuthenticationGuard', () => {
  let authenticationGuard: AuthenticationGuard;
  let mockUserQuery: any;
  let mockRouter: any;
  let mockSnapshot: any;

  beforeEach(() => {
    mockUserQuery = {
      isLogged: false,
      isLoggedIn: () => mockUserQuery.isLogged,
    };
    mockRouter = {
      navigate: jest.fn(),
    };
    mockSnapshot = jest.fn(() => ({
      toString: jest.fn(),
    }));

    TestBed.configureTestingModule({
      providers: [
        AuthenticationGuard,
        {
          provide: Router,
          useValue: mockRouter,
        },
        {
          provide: UserQuery,
          useValue: mockUserQuery,
        },
      ],
    });
  });

  beforeEach(() => {
    mockUserQuery = TestBed.inject(UserQuery) as any;
    authenticationGuard = TestBed.inject(AuthenticationGuard);
  });

  it('should have a canActivate method', () => {
    expect(typeof authenticationGuard.canActivate).toBe('function');
  });

  it('should return true if user is authenticated', () => {
    mockUserQuery.isLogged = true;
    expect(authenticationGuard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot)).toBe(true);
  });

  it('should return false and redirect to login if user is not authenticated', () => {
    const result = authenticationGuard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login'], {
      queryParams: { redirect: undefined },
      replaceUrl: true,
    });
    expect(result).toBe(false);
  });

  it('should save url as queryParam if user is not authenticated', () => {
    mockRouter.url = '/about';
    mockSnapshot.url = '/about';

    authenticationGuard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login'], {
      queryParams: { redirect: mockRouter.url },
      replaceUrl: true,
    });
  });
});
