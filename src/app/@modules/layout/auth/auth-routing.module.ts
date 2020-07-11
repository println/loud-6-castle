import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/@modules/layout/i18n';
import { LoginComponent } from './login.component';
import { ROUTE } from '@config';

const routes: Routes = [
  { path: ROUTE.login.id, component: LoginComponent, data: { title: extract(ROUTE.login.title) } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule {}
