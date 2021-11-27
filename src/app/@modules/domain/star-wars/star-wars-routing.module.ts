import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'people',
    loadChildren: () => import('./person/person.module').then((m) => m.PersonModule),
  },
  {
    path: 'films',
    loadChildren: () => import('./film/film.module').then((m) => m.FilmModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarWarsRoutingModule {}