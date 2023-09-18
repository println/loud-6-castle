import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { AuthenticationGuard } from '@modules';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { GuestGuard } from './guards/guest.guard';
import { RegisterComponent } from './components/register/register.component';

import { LoginComponent } from './components/login/login.component';
import { PATHS, ROUTES } from '@config';
import { ResetPasswordGuard } from './guards/reset-password.guard';

const routes: Routes = [
  {
    path: PATHS.empty,
    canActivate: [GuestGuard],
    children: [
      {
        path: '',
        redirectTo: ROUTES.login.id,
        pathMatch: 'full',
      },
      {
        path: ROUTES.login.id,
        component: LoginComponent,
        data: { title: marker(ROUTES.login.title) },
      },
      {
        path: ROUTES.register.id,
        component: RegisterComponent,
        data: { title: marker(ROUTES.register.title) },
      },
      {
        path: ROUTES.forgotPassword.id,
        component: ForgotPasswordComponent,
        data: { title: marker(ROUTES.forgotPassword.title) },
      },
      {
        path: ROUTES.resetPassword.id,
        component: ResetPasswordComponent,
        data: { title: marker(ROUTES.resetPassword.title) },
        canActivate: [ResetPasswordGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule {}
