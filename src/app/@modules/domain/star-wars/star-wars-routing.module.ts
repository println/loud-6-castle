import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '@config';
import { StarwarsMenuComponent } from './starwars-menu.component';

const routes: Routes = [
  {
    path: '',
    component: StarwarsMenuComponent,
    outlet: 'menu',
  },
  {
    path: '',
    redirectTo: ROUTES.starwars.children.person.plural.id,
    pathMatch: 'full',
  },
  {
    path: ROUTES.starwars.children.person.plural.id,
    loadChildren: () => import('./person/person.module').then((m) => m.PersonModule),
  },
  {
    path: ROUTES.starwars.children.film.plural.id,
    loadChildren: () => import('./film/film.module').then((m) => m.FilmModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarWarsRoutingModule {}
