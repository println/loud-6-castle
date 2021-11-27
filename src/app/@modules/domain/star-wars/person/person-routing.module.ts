import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListResolver } from '@modules/domain/star-wars/film/film-list/film-list-resolver';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonFormPartialBasicComponent } from './person-form/partial-basic/person-form-partial-basic.component';
import { PersonFormPartialExtraInfoComponent } from './person-form/partial-extra-info/person-form-partial-extra-info.component';
import { PersonFormRootComponent } from './person-form/root/person-form-root.component';
import { PersonFormPartialVisualComponent } from './person-form/partial-visual/person-form-partial-visual.component';
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
        path: 'new',
        component: PersonFormRootComponent,
        resolve: {
          films: FilmListResolver,
        },
        children: [
          { path: '', redirectTo: 'basic' },
          {
            path: 'basic',
            pathMatch: 'full',
            component: PersonFormPartialBasicComponent,
          },
          {
            path: 'visual',
            pathMatch: 'full',
            component: PersonFormPartialVisualComponent,
          },
          {
            path: 'extra-info',
            pathMatch: 'full',
            component: PersonFormPartialExtraInfoComponent,
          },
        ],
      },
      {
        path: ':personId/edit',
        component: PersonFormRootComponent,
        resolve: {
          data: PersonResolver,
          films: FilmListResolver,
        },
        children: [
          { path: '', redirectTo: 'basic' },
          {
            path: 'basic',
            pathMatch: 'full',
            component: PersonFormPartialBasicComponent,
          },
          {
            path: 'visual',
            pathMatch: 'full',
            component: PersonFormPartialVisualComponent,
          },
          {
            path: 'extra-info',
            pathMatch: 'full',
            component: PersonFormPartialExtraInfoComponent,
          },
        ],
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
