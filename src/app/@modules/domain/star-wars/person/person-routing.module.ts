import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonListResolver } from './person-list/person-list-resolver';
import { PersonResolver } from './person-resolver';
import { FilmResolver } from '@modules/domain/star-wars/film/film.resolver';
import { FilmListResolver } from '@modules/domain/star-wars/film/film-list/film-list-resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PersonListComponent,
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        resolve: {
          page: PersonListResolver,
        },
      },
      {
        path: 'new',
        pathMatch: 'full',
        component: PersonFormComponent,
        resolve: {
          films: FilmListResolver,
        },
      },
      {
        path: ':personId/edit',
        pathMatch: 'full',
        component: PersonFormComponent,
        resolve: {
          data: PersonResolver,
          films: FilmListResolver,
        },
      },
      {
        path: ':personId',
        pathMatch: 'full',
        component: PersonDetailComponent,
        resolve: {
          data: PersonResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonRoutingModule {}
