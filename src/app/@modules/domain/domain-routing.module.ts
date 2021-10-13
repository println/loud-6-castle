import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'starwars',
    loadChildren: () => import('./star-wars/star-wars.module').then((m) => m.StarWarsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DomainRoutingModule {}
