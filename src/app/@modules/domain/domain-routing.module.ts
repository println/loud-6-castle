import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '@config';

const routes: Routes = [
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
