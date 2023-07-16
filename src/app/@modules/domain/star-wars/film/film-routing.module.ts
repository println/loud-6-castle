import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PATHS } from '@config';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmResolver } from './film.resolver';
import { FilmFormComponent } from './film-form/film-form.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmListResolver } from './film-list/film-list-resolver';

const routes: Routes = [
  {
    path: PATHS.empty,
    children: [
      {
        path: PATHS.empty,
        pathMatch: 'full',
        component: FilmListComponent,
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        resolve: {
          page: FilmListResolver,
        },
      },
      {
        path: PATHS.create,
        pathMatch: 'full',
        component: FilmFormComponent,
      },
      {
        path: PATHS.pathEdit,
        pathMatch: 'full',
        component: FilmFormComponent,
        resolve: {
          data: FilmResolver,
        },
      },
      {
        path: PATHS.pathId,
        pathMatch: 'full',
        component: FilmDetailComponent,
        resolve: {
          data: FilmResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmRoutingModule {}
