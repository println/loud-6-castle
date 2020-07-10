import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';

describe('AuthenticationGuard', () => {
  let authenticationGuard: AuthenticationGuard;
  let mockUserQuery: any;
  let mockRouter: any;
  let mockSnapshot: any;

  const authenticationGuardFactory = () => {
    return new AuthenticationGuard(mockRouter, mockUserQuery);
  };

  beforeEach(() => {
    mockUserQuery = {
      isLoggedIn: jest.fn(),
    };
    mockRouter = {
      navigate: jest.fn(),
    };
    mockSnapshot = jest.fn(() => ({
      toString: jest.fn(),
    }));

    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthenticationGuard,
          useFactory: authenticationGuardFactory,
        },
      ],
    });
  });

  beforeEach(() => {
    authenticationGuard = TestBed.inject(AuthenticationGuard);
  });

  it('should have a canActivate method', () => {
    expect(typeof authenticationGuard.canActivate).toBe('function');
  });

  it('should return true if user is authenticated', () => {
    mockUserQuery.isLoggedIn.mockReturnValueOnce(true);
    expect(authenticationGuard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot)).toBe(true);
  });

  it('should return false and redirect to login if user is not authenticated', () => {
    // Arrange
    mockUserQuery.isLoggedIn.mockReturnValueOnce(false);

    // Act
    const result = authenticationGuard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot);

    // Assert
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login'], {
      queryParams: { redirect: undefined },
      replaceUrl: true,
    });
    expect(result).toBe(false);
  });

  it('should save url as queryParam if user is not authenticated', () => {
    mockUserQuery.isLoggedIn.mockReturnValueOnce(false);
    mockRouter.url = '/about';
    mockSnapshot.url = '/about';

    authenticationGuard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login'], {
      queryParams: { redirect: mockRouter.url },
      replaceUrl: true,
    });
  });
});
