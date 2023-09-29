/**
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */ /* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../encoder';

import { Observable } from 'rxjs';

import { ForgotPasswordDto } from '../model/forgotPasswordDto';
import { ForgotPasswordEmailDto } from '../model/forgotPasswordEmailDto';
import { ForgotPasswordSecurityCodeDto } from '../model/forgotPasswordSecurityCodeDto';
import { ForgotPasswordTokenDto } from '../model/forgotPasswordTokenDto';
import { Unit } from '../model/unit';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class AccountForgotPasswordApiService {
  protected basePath = '/api/v1/account/password/forgot';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }

  /**
   *
   *
   * @param body
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public changePassword(body: ForgotPasswordDto, observe?: 'body', reportProgress?: boolean): Observable<Unit>;
  public changePassword(
    body: ForgotPasswordDto,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Unit>>;
  public changePassword(
    body: ForgotPasswordDto,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Unit>>;
  public changePassword(
    body: ForgotPasswordDto,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling changePassword.');
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['*/*'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.request<Unit>('post', `${this.basePath}/renew`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress,
    });
  }

  /**
   *
   *
   * @param body
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public forgot(body: ForgotPasswordEmailDto, observe?: 'body', reportProgress?: boolean): Observable<Unit>;
  public forgot(
    body: ForgotPasswordEmailDto,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Unit>>;
  public forgot(
    body: ForgotPasswordEmailDto,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Unit>>;
  public forgot(body: ForgotPasswordEmailDto, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling forgot.');
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['*/*'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.request<Unit>('post', `${this.basePath}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress,
    });
  }

  /**
   *
   *
   * @param body
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public findTokenBySecurityCode(
    body: ForgotPasswordSecurityCodeDto,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<ForgotPasswordTokenDto>;
  public findTokenBySecurityCode(
    body: ForgotPasswordSecurityCodeDto,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<ForgotPasswordTokenDto>>;
  public findTokenBySecurityCode(
    body: ForgotPasswordSecurityCodeDto,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<ForgotPasswordTokenDto>>;
  public findTokenBySecurityCode(
    body: ForgotPasswordSecurityCodeDto,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling forgot.');
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['*/*'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.request<ForgotPasswordTokenDto>('get', `${this.basePath}/code/${body.securityCode}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress,
    });
  }
}