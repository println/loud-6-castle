import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { LoaderComponent } from '@app/@shared';
import { IfRoleDirective } from '@app/@shared/directives/role.directive';
import { I18nModule } from '@modules/layout/i18n';
import { SideNavbarComponent } from '@shared/components/navbar/side-navbar.component';
import { JwtInterceptor } from '@shared/http/jwt.interceptor';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShellComponent } from './shell.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgbModule,
    IfRoleDirective,
    I18nModule,
    RouterModule,
    LoaderComponent,
    SideNavbarComponent,
  ],
  declarations: [HeaderComponent, ShellComponent, NavbarComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
})
export class ShellModule {}
