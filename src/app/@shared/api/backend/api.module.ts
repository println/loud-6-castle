import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { AccountActivationApiService } from './service/account-activation.api.service';
import { AccountApiService } from './service/account.api.service';
import { AccountAuthApiService } from './service/account-auth.api.service';
import { AccountForgotPasswordApiService } from './service/account-forgot-password.api.service';
import { AccountIssueApiService } from './service/account-issue.api.service';
import { AccountResetPasswordApiService } from './service/account-reset-password.api.service';
import { AccountSessionApiService } from './service/account-session.api.service';
import { UserApiService } from './service/user.api.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    AccountActivationApiService,
    AccountApiService,
    AccountAuthApiService,
    AccountForgotPasswordApiService,
    AccountIssueApiService,
    AccountResetPasswordApiService,
    AccountSessionApiService,
    UserApiService,
  ],
})
export class ApiModule {
  public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [{ provide: Configuration, useFactory: configurationFactory }],
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: ApiModule, @Optional() http: HttpClient) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error(
        'You need to import the HttpClientModule in your AppModule! \n' +
          'See also https://github.com/angular/angular/issues/20575'
      );
    }
  }
}
