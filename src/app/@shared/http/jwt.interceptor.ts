import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { UserQuery } from '@shared';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private userQuery: UserQuery) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (this.userQuery.isLoggedIn()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.userQuery.getToken()}}`,
        },
      });
    }

    return next.handle(request);
  }
}
