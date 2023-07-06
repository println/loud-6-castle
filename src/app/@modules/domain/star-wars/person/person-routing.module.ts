import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListResolver } from '@modules/domain/star-wars/film/film-list/film-list-resolver';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonListResolver } from './person-list/person-list-resolver';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonResolver } from './person-resolver';

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
