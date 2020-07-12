import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { UserQuery, UserState } from '@shared';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private token: string;

  constructor(private userQuery: UserQuery) {
    this.userQuery.select().subscribe((userState: UserState) => {
      this.token = userState.token;
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (this.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`,
        },
      });
    }

    return next.handle(request);
  }
}
