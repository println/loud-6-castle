import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { AuthenticationGuard } from '@modules';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { GuestGuard } from './guest.guard';
import { RegisterComponent } from './register/register.component';

import { LoginComponent } from './login/login.component';
import { ROUTES } from '@config';

const routes: Routes = [
  {
    path: ROUTES.login.id,
    component: LoginComponent,
    data: { title: marker(ROUTES.login.title) },
    canActivate: [GuestGuard],
  },
  {
    path: ROUTES.register.id,
    component: RegisterComponent,
    data: { title: marker(ROUTES.register.title) },
    canActivate: [GuestGuard],
  },
  {
    path: ROUTES.forgotPassword.id,
    component: ForgotPasswordComponent,
    data: { title: marker(ROUTES.forgotPassword.title) },
    canActivate: [GuestGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule {}
