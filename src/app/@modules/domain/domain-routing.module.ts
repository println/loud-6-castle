import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROLES, ROUTES } from '@config';
import { RoleGuard } from '../layout/auth/guards/role.guard';

const routes: Routes = [
  {
    path: ROUTES.admin.id,
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [RoleGuard],
    data: {
      role: [ROLES.admin],
    },
  },
  {
    path: ROUTES.starwars.id,
    loadChildren: () => import('./star-wars/star-wars.module').then((m) => m.StarWarsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DomainRoutingModule {}
