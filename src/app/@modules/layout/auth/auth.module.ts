import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { I18nModule } from '@modules/layout/i18n';
import { ApiModule } from '@shared/openapi';
import { IfRoleDirective } from './role/role.directive';
import { AuthRoutingModule } from './auth-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    I18nModule,
    AuthRoutingModule,
    RouterModule,
    ApiModule,
  ],
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent, IfRoleDirective],
  exports: [IfRoleDirective],
})
export class AuthModule {}
