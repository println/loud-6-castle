import { Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UserQuery } from '@shared';
import jwt_decode from 'jwt-decode';

export class JwtTokenHelper {
  private decodedToken?: { [key: string]: string };

  constructor(private jwtToken: string) {}

  setToken(token: string) {
    if (token) {
      this.jwtToken = token;
    }
  }

  decodeToken() {
    if (this.jwtToken) {
      this.decodedToken = jwt_decode(this.jwtToken);
    }
  }

  getDecodeToken() {
    return jwt_decode(<string>this.jwtToken);
  }

  getName(): String {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.name : '';
  }

  getRole(): String {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.role : '';
  }

  getEmail() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.sub : '';
  }

  getExpiryTime() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.exp : '';
  }

  isTokenExpired(): boolean {
    const expiryTime: any = this.getExpiryTime();
    if (expiryTime) {
      return 1000 * expiryTime - new Date().getTime() < 5000;
    } else {
      return false;
    }
  }
}
