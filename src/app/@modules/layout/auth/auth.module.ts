import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { I18nModule } from '@modules/layout/i18n';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login.component';
import { CredentialsService } from '@modules/layout/auth/credentials.service';
import { Logger } from '@core';

const log = new Logger('Auth');

function initServices(credentialsService: CredentialsService) {
  return (): boolean => {
    log.debug(`CredentialsService init`);
    return credentialsService.isAuthenticated();
  };
}

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, NgbModule, I18nModule, AuthRoutingModule],
  declarations: [LoginComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initServices,
      deps: [CredentialsService],
      multi: true,
    },
  ],
})
export class AuthModule {}
