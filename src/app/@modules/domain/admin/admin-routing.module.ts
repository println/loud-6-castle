import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '@config';
import { AdminMenuComponent } from './admin-menu.component';

const routes: Routes = [
  {
    path: '',
    component: AdminMenuComponent,
    outlet: 'menu',
  },
  {
    path: '',
    redirectTo: ROUTES.admin.children.account.plural.id,
    pathMatch: 'full',
  },
  {
    path: ROUTES.admin.children.account.plural.id,
    loadChildren: () => import('./account/account.module').then((m) => m.AccountModule),
  },
  {
    path: ROUTES.admin.children.session.plural.id,
    loadChildren: () => import('./session/session.module').then((m) => m.SessionModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
